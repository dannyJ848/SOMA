/**
 * Seguridad Radiologica / Radiation Safety
 *
 * Comprehensive educational content covering radiation safety principles,
 * contrast agent safety, patient preparation, dose optimization,
 * and regulatory considerations.
 *
 * Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const seguridadRadiologicaRadiationSafety: EducationalContent = {
  id: 'topic-radiation-safety',
  type: 'topic',
  name: 'Seguridad Radiologica - Radiacion, Contraste y Preparacion del Paciente | Radiation Safety - Radiation, Contrast Agents, and Patient Preparation',
  nameEs: 'Seguridad Radiologica',
  alternateNames: [
    'Radiation Safety',
    'Proteccion Radiologica',
    'Radioprotection',
    'Contrast Safety',
    'Seguridad del Contraste',
    'Imaging Safety',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'La seguridad en los estudios de imagen es muy importante. Los doctores se aseguran de que las pruebas sean necesarias, usan la menor cantidad de radiacion posible, y toman precauciones con los medios de contraste. | Safety in imaging studies is very important. Doctors make sure tests are necessary, use the least amount of radiation possible, and take precautions with contrast agents.',
      explanation: `## Seguridad en los Estudios de Imagen | Safety in Imaging Studies

### Es peligrosa la radiacion medica? | Is medical radiation dangerous?

La radiacion que se usa en las pruebas medicas (rayos X, TC) es muy controlada y segura en las cantidades que se usan. Sin embargo, como toda herramienta medica, debe usarse solo cuando es necesaria. | The radiation used in medical tests (X-rays, CT) is very controlled and safe in the amounts used. However, like any medical tool, it should be used only when necessary.

### Cuanta radiacion recibo? | How much radiation do I receive?

Para poner las cosas en perspectiva: | To put things in perspective:

| Estudio | Radiacion | Equivalente a... |
|---------|-----------|-------------------|
| Radiografia de torax | Muy poca | 3 dias de radiacion natural del ambiente | Chest X-ray | Very little | 3 days of natural background radiation |
| Radiografia dental | Minima | 1 dia de radiacion natural | Dental X-ray | Minimal | 1 day of natural radiation |
| TC de cabeza | Moderada | 8 meses de radiacion natural | Head CT | Moderate | 8 months of natural radiation |
| TC de abdomen | Moderada-alta | 3 anos de radiacion natural | Abdomen CT | Moderate-high | 3 years of natural radiation |
| Ecografia | Ninguna | No usa radiacion | Ultrasound | None | No radiation |
| Resonancia magnetica | Ninguna | No usa radiacion | MRI | None | No radiation |

### Que es la radiacion natural? | What is natural radiation?

Todos recibimos radiacion todos los dias de fuentes naturales: | We all receive radiation every day from natural sources:
- **Del sol y el espacio | From the sun and space**
- **De la tierra y las rocas | From the earth and rocks**
- **Del radon en el aire | From radon in the air**
- **De los alimentos | From food**

La radiacion natural promedio es aproximadamente 3 mSv al ano. | Average natural radiation is approximately 3 mSv per year.

### Medios de Contraste: Que Necesita Saber | Contrast Agents: What You Need to Know

**Que es el contraste? | What is contrast?**
Es un liquido especial que se usa en algunos estudios para ver mejor los organos y vasos sanguineos. | It is a special liquid used in some studies to see organs and blood vessels better.

**Tipos de contraste: | Types of contrast:**
- **Para TC:** Contraste a base de yodo (se inyecta en la vena o se toma por boca) | For CT: Iodine-based contrast (injected in the vein or taken by mouth)
- **Para RM:** Contraste a base de gadolinio (se inyecta en la vena) | For MRI: Gadolinium-based contrast (injected in the vein)
- **Para ecografia:** Microburbujas (se inyecta en la vena, muy seguro) | For ultrasound: Microbubbles (injected in the vein, very safe)

**Efectos secundarios posibles del contraste: | Possible contrast side effects:**
- **Comunes y leves | Common and mild:** Sensacion de calor, sabor metalico, nauseas leves | Warm sensation, metallic taste, mild nausea
- **Poco comunes | Uncommon:** Ronchas, picazon | Hives, itching
- **Muy raros | Very rare:** Reaccion alergica severa (los doctores estan preparados para tratarla) | Severe allergic reaction (doctors are prepared to treat it)

### Digale a su doctor ANTES del estudio si... | Tell your doctor BEFORE the study if...

- **Tiene alergias** (especialmente a contrastes anteriores, mariscos, o yodo) | You have **allergies** (especially to previous contrast, shellfish, or iodine)
- **Tiene problemas de rinon** | You have **kidney problems**
- **Esta embarazada o podria estarlo** | You are **pregnant or might be**
- **Esta amamantando** | You are **breastfeeding**
- **Toma metformina** (medicamento para diabetes) | You take **metformin** (diabetes medication)
- **Tiene problemas de tiroides** | You have **thyroid problems**
- **Tiene un marcapasos u otro dispositivo metalico** (para RM) | You have a **pacemaker or other metal device** (for MRI)

### Preparacion para los Estudios | Study Preparation

**Antes de una TC con contraste: | Before a CT with contrast:**
- Ayunar 4-6 horas antes si es posible | Fast 4-6 hours before if possible
- Tomar mucha agua despues | Drink plenty of water afterward
- Suspender metformina segun indicacion del doctor | Stop metformin as directed by the doctor

**Antes de una RM: | Before an MRI:**
- Quitarse TODO lo metalico (joyas, piercings, reloj, cinturon) | Remove ALL metal (jewelry, piercings, watch, belt)
- Llenar el cuestionario de seguridad de RM honestamente | Fill out the MRI safety questionnaire honestly
- Informar sobre cualquier cirugia previa (clips, protesis) | Report any previous surgery (clips, prostheses)`,
      keyTerms: [
        {
          term: 'radiacion | radiation',
          definition: 'Energia que se usa en algunas pruebas medicas (rayos X, TC) para crear imagenes del interior del cuerpo. En las cantidades usadas en medicina, es muy segura. | Energy used in some medical tests (X-rays, CT) to create images of the inside of the body. In the amounts used in medicine, it is very safe.',
        },
        {
          term: 'contraste | contrast',
          definition: 'Un liquido especial que se inyecta o se toma para que los organos y vasos sanguineos se vean mas claros en las imagenes. Hay diferentes tipos para TC, RM y ecografia. | A special liquid that is injected or taken so that organs and blood vessels appear clearer on images. There are different types for CT, MRI, and ultrasound.',
        },
        {
          term: 'reaccion alergica | allergic reaction',
          definition: 'Una respuesta del cuerpo al contraste que puede causar desde ronchas leves hasta una reaccion mas seria. Es poco comun, y los doctores estan preparados para tratarla inmediatamente. | A body response to contrast that can cause anything from mild hives to a more serious reaction. It is uncommon, and doctors are prepared to treat it immediately.',
        },
        {
          term: 'mSv (milisievert)',
          definition: 'La unidad que mide la cantidad de radiacion que recibe el cuerpo. La radiacion natural del ambiente nos da aproximadamente 3 mSv al ano. | The unit measuring the amount of radiation the body receives. Natural background radiation gives us approximately 3 mSv per year.',
        },
      ],
      analogies: [
        'La radiacion medica es como la luz del sol: un poco es normal y no hace dano (como un paseo al aire libre), pero demasiada puede ser perjudicial (como una quemadura solar severa). Los doctores se aseguran de usar solo la cantidad justa necesaria. | Medical radiation is like sunlight: a little is normal and harmless (like an outdoor walk), but too much can be harmful (like a severe sunburn). Doctors make sure to use just the right amount needed.',
        'El contraste es como el colorante alimentario que se pone en el agua: no cambia el agua, pero la hace visible para que se puedan ver las formas de los recipientes. | Contrast is like food coloring put in water: it does not change the water, but makes it visible so you can see the shapes of the containers.',
      ],
      examples: [
        'Una paciente le dice a su doctora que tiene alergia a los mariscos antes de una TC. La doctora decide que la prueba es necesaria y le da medicinas para prevenir una reaccion antes de inyectar el contraste. | A patient tells her doctor she is allergic to shellfish before a CT. The doctor decides the test is necessary and gives her medicine to prevent a reaction before injecting the contrast.',
        'Un hombre necesita una RM pero tiene un marcapasos viejo. El equipo de RM verifica que su marcapasos no es compatible con la RM y le ofrece una TC como alternativa. | A man needs an MRI but has an old pacemaker. The MRI team verifies his pacemaker is not MRI-compatible and offers a CT as an alternative.',
      ],
    },
    2: {
      level: 2,
      summary: 'La seguridad radiologica abarca la proteccion contra la radiacion ionizante (principio ALARA), el manejo seguro de agentes de contraste (yodados y gadolinio), y la preparacion adecuada del paciente para optimizar la seguridad y calidad diagnostica. | Radiation safety encompasses protection against ionizing radiation (ALARA principle), safe management of contrast agents (iodinated and gadolinium), and adequate patient preparation to optimize safety and diagnostic quality.',
      explanation: `## Radiacion Ionizante en Medicina | Ionizing Radiation in Medicine

### Tipos de Radiacion en Imagen Medica | Types of Radiation in Medical Imaging

| Modalidad | Tipo de Radiacion | Nivel de Exposicion |
|-----------|------------------|-------------------|
| Radiografia | Rayos X (ionizante) | Bajo | X-ray (ionizing) | Low |
| TC | Rayos X (ionizante) | Moderado-Alto | X-rays (ionizing) | Moderate-High |
| Fluoroscopia | Rayos X continuo (ionizante) | Variable, puede ser alto | Continuous X-rays (ionizing) | Variable, can be high |
| Medicina nuclear / PET | Radiofármacos (ionizante) | Variable | Radiopharmaceuticals (ionizing) | Variable |
| Ecografia | Ondas sonoras (no ionizante) | Ninguna | Sound waves (non-ionizing) | None |
| RM | Campo magnetico + RF (no ionizante) | Ninguna | Magnetic field + RF (non-ionizing) | None |

### Principio ALARA | ALARA Principle

**As Low As Reasonably Achievable** (tan baja como sea razonablemente alcanzable): | As Low As Reasonably Achievable:

Los tres pilares: | The three pillars:
1. **Justificacion | Justification:** El estudio debe estar medicamente indicado; el beneficio debe superar el riesgo | The study must be medically indicated; benefit must outweigh risk
2. **Optimizacion | Optimization:** Usar la menor dosis que produzca imagenes diagnosticas adecuadas | Use the lowest dose that produces adequate diagnostic images
3. **Limitacion de dosis | Dose limitation:** Cumplir con los limites regulatorios de dosis | Comply with regulatory dose limits

### Dosis de Radiacion por Estudio | Radiation Dose by Study

| Estudio | Dosis Efectiva (mSv) | Equivalente en Rx torax |
|---------|---------------------|----------------------|
| Rx torax PA | 0.02 | 1 | CXR PA | 0.02 | 1 |
| Rx abdomen | 0.7 | 35 | Abdominal X-ray | 0.7 | 35 |
| Mamografia | 0.4 | 20 | Mammography | 0.4 | 20 |
| TC cabeza | 2 | 100 | Head CT | 2 | 100 |
| TC torax | 7 | 350 | Chest CT | 7 | 350 |
| TC abdomen/pelvis | 10 | 500 | Abdomen/pelvis CT | 10 | 500 |
| Angiografia coronaria por TC | 5-15 | 250-750 | Coronary CTA | 5-15 | 250-750 |
| PET/TC | 25 | 1250 | PET/CT | 25 | 1250 |

### Efectos Biologicos de la Radiacion | Biological Effects of Radiation

**Efectos deterministicos (agudos, con umbral): | Deterministic effects (acute, with threshold):**
- Solo ocurren con dosis altas (>100 mSv en una sola exposicion) | Only occur with high doses (>100 mSv in a single exposure)
- Ejemplos: Quemadura de piel (>2 Gy), cataratas (>2 Gy), sindrome de radiacion aguda | Examples: Skin burn (>2 Gy), cataracts (>2 Gy), acute radiation syndrome
- NO ocurren con imagenes diagnosticas normales | Do NOT occur with normal diagnostic imaging

**Efectos estocasticos (tardios, sin umbral claro): | Stochastic effects (late, no clear threshold):**
- Riesgo teorico de cancer aumenta con la dosis acumulada | Theoretical cancer risk increases with cumulative dose
- Modelo lineal sin umbral (LNT): Cualquier dosis tiene riesgo proporcional | Linear no-threshold model (LNT): Any dose has proportional risk
- Riesgo estimado: ~5% adicional por Sievert de exposicion | Estimated risk: ~5% additional per Sievert of exposure
- A dosis diagnosticas, el riesgo adicional es extremadamente pequeno | At diagnostic doses, the additional risk is extremely small

## Seguridad de los Medios de Contraste | Contrast Agent Safety

### Contraste Yodado (TC) | Iodinated Contrast (CT)

**Tipos: | Types:**
- **Ionico vs no-ionico:** Los no-ionicos son mas seguros (menos reacciones) | Ionic vs non-ionic: Non-ionic are safer (fewer reactions)
- **Osmolaridad:** Baja (preferida) vs alta (mas reacciones) | Osmolality: Low (preferred) vs high (more reactions)
- Agentes comunes: Iohexol (Omnipaque), Ioversol (Optiray), Iopamidol (Isovue) | Common agents: Iohexol (Omnipaque), Ioversol (Optiray), Iopamidol (Isovue)

**Reacciones adversas: | Adverse reactions:**

| Tipo | Severidad | Sintomas | Tratamiento |
|------|----------|----------|-------------|
| Leve | Autolimitada | Nauseas, ronchas, calor | Observacion, difenhidramina | Mild | Self-limited | Nausea, hives, warmth | Observation, diphenhydramine |
| Moderada | Requiere tratamiento | Ronchas difusas, vomito, broncoespasmo leve | Antihistaminicos, broncodilatador, observacion | Moderate | Requires treatment | Diffuse hives, vomiting, mild bronchospasm | Antihistamines, bronchodilator, observation |
| Severa (anafilactoide) | Amenaza la vida | Edema laringeo, hipotension, paro | Epinefrina IM, fluidos IV, via aerea, codigo | Severe (anaphylactoid) | Life-threatening | Laryngeal edema, hypotension, arrest | IM epinephrine, IV fluids, airway, code |

**Nefropatia por contraste (ICA - Injuria Contrastada Aguda): | Contrast-induced acute kidney injury (CI-AKI):**
- Elevacion de creatinina >0.3 mg/dL o >50% en 48-72h post-contraste | Creatinine rise >0.3 mg/dL or >50% within 48-72h post-contrast
- Factor de riesgo principal: TFGe <30 mL/min (riesgo real) | Main risk factor: eGFR <30 mL/min (real risk)
- TFGe 30-44: Riesgo bajo pero real; hidratar antes y despues | eGFR 30-44: Low but real risk; hydrate before and after
- TFGe >45: Riesgo minimo; no retener contraste necesario | eGFR >45: Minimal risk; do not withhold necessary contrast
- Prevencion: Hidratacion IV con solucion salina isotonica | Prevention: IV hydration with isotonic saline

**Premedicacion para alergia previa: | Premedication for prior allergy:**
- Prednisona 50 mg oral a 13h, 7h y 1h antes del estudio | Prednisone 50 mg oral at 13h, 7h, and 1h before study
- Difenhidramina 50 mg oral o IV 1h antes | Diphenhydramine 50 mg oral or IV 1h before
- Usar contraste no-ionico de baja osmolaridad | Use non-ionic low-osmolality contrast

### Contraste a Base de Gadolinio (RM) | Gadolinium-Based Contrast (MRI)

**Tipos: | Types:**
- **Macrocíclicos (preferidos):** Gadobutrol (Gadavist), gadoterato (Dotarem) - mas estables | Macrocyclic (preferred): Gadobutrol (Gadavist), gadoterate (Dotarem) - more stable
- **Lineales:** Gadopentetato (Magnevist) - mayor riesgo de deposito tisular | Linear: Gadopentetate (Magnevist) - higher risk of tissue deposition

**Riesgos: | Risks:**
- **Fibrosis nefrogenica sistemica (FNS):** Rara con agentes macrocíclicos; asociada con TFGe <30 | Nephrogenic systemic fibrosis (NSF): Rare with macrocyclic agents; associated with eGFR <30
- **Deposito cerebral:** Descrito con agentes lineales; significado clinico incierto | Brain deposition: Described with linear agents; clinical significance uncertain
- **Reaccion alergica:** Mucho menos comun que con contraste yodado (~0.004-0.07%) | Allergic reaction: Much less common than with iodinated contrast (~0.004-0.07%)

## Poblaciones Especiales | Special Populations

### Embarazo | Pregnancy

| Modalidad | Seguridad en embarazo |
|-----------|---------------------|
| Ecografia | Segura, primera opcion | Safe, first choice |
| RM (sin gadolinio) | Generalmente segura, preferida sobre TC | Generally safe, preferred over CT |
| Radiografia | Aceptable si es necesaria (dosis baja, proteccion abdominal) | Acceptable if necessary (low dose, abdominal shielding) |
| TC | Solo si el beneficio supera claramente el riesgo | Only if benefit clearly outweighs risk |
| Gadolinio | Evitar; solo si absolutamente necesario | Avoid; only if absolutely necessary |
| Contraste yodado | Puede usarse si es necesario; evaluar tiroides neonatal | Can be used if necessary; evaluate neonatal thyroid |

### Paciente Pediatrico | Pediatric Patient

- Los ninos son mas sensibles a la radiacion que los adultos | Children are more sensitive to radiation than adults
- Campana Image Gently: Reduccion de dosis especifica para pediatria | Image Gently campaign: Pediatric-specific dose reduction
- Ajustar parametros de TC al tamano del nino (no usar protocolos de adulto) | Adjust CT parameters to child's size (do not use adult protocols)
- Preferir ecografia y RM sobre TC cuando sea posible | Prefer ultrasound and MRI over CT when possible

### Lactancia | Breastfeeding

- Contraste yodado: Puede continuar amamantando (absorcion GI minima) | Iodinated contrast: Can continue breastfeeding (minimal GI absorption)
- Gadolinio: Puede continuar amamantando (ACR 2022 recomienda no suspender) | Gadolinium: Can continue breastfeeding (ACR 2022 recommends not discontinuing)`,
      keyTerms: [
        {
          term: 'ALARA',
          definition: 'As Low As Reasonably Achievable: Principio fundamental de proteccion radiologica que busca minimizar la dosis de radiacion sin comprometer la calidad diagnostica. Se basa en justificacion, optimizacion y limitacion de dosis. | Fundamental radiation protection principle seeking to minimize radiation dose without compromising diagnostic quality. Based on justification, optimization, and dose limitation.',
        },
        {
          term: 'nefropatia por contraste (CI-AKI) | contrast-induced acute kidney injury',
          definition: 'Deterioro agudo de la funcion renal (aumento de creatinina >0.3 mg/dL en 48-72h) despues de la administracion de contraste yodado. El riesgo real es significativo principalmente con TFGe <30 mL/min. | Acute renal function deterioration (creatinine increase >0.3 mg/dL in 48-72h) after iodinated contrast administration. Real risk is significant mainly with eGFR <30 mL/min.',
        },
        {
          term: 'premedicacion | premedication',
          definition: 'Protocolo de corticoides y antihistaminicos administrado antes de la inyeccion de contraste en pacientes con alergia previa para reducir el riesgo de reaccion alergica. | Protocol of corticosteroids and antihistamines administered before contrast injection in patients with prior allergy to reduce allergic reaction risk.',
        },
        {
          term: 'efectos estocasticos | stochastic effects',
          definition: 'Efectos tardios de la radiacion (como cancer) cuya probabilidad aumenta con la dosis acumulada pero no tienen un umbral definido. A dosis diagnosticas, el riesgo adicional es extremadamente bajo. | Late radiation effects (like cancer) whose probability increases with cumulative dose but have no defined threshold. At diagnostic doses, the additional risk is extremely low.',
        },
        {
          term: 'modelo LNT (lineal sin umbral) | LNT model (linear no-threshold)',
          definition: 'Modelo regulatorio que asume que cualquier cantidad de radiacion tiene un riesgo proporcional de causar cancer, sin un nivel seguro. Es conservador y debatido, pero guia las politicas de proteccion radiologica. | Regulatory model assuming any amount of radiation has a proportional cancer risk, with no safe level. It is conservative and debated, but guides radiation protection policies.',
        },
      ],
      analogies: [
        'El principio ALARA es como la velocidad al conducir: necesitas suficiente velocidad para llegar a tiempo (suficiente radiacion para hacer el diagnostico), pero no deberias ir mas rapido de lo necesario (no usar mas radiacion de la necesaria). | The ALARA principle is like driving speed: you need enough speed to arrive on time (enough radiation to make the diagnosis), but you should not go faster than necessary (do not use more radiation than necessary).',
        'La premedicacion antes del contraste es como tomar medicina para la alergia antes de la temporada de polen: no garantiza que no tendra sintomas, pero reduce mucho las probabilidades. | Premedication before contrast is like taking allergy medicine before pollen season: it does not guarantee you will have no symptoms, but it greatly reduces the chances.',
      ],
    },
    3: {
      level: 3,
      summary: 'La seguridad radiologica integra dosimetria cuantitativa, manejo basado en evidencia de reacciones adversas al contraste, protocolos de proteccion para poblaciones vulnerables, y sistemas de gestion de calidad para optimizar la relacion beneficio-riesgo de cada estudio de imagen. | Radiation safety integrates quantitative dosimetry, evidence-based management of contrast adverse reactions, protection protocols for vulnerable populations, and quality management systems to optimize the benefit-risk ratio of each imaging study.',
      explanation: `## Dosimetria y Metricas de Radiacion | Dosimetry and Radiation Metrics

### Magnitudes y Unidades | Quantities and Units

| Magnitud | Unidad SI | Unidad Antigua | Que Mide |
|----------|----------|---------------|----------|
| Dosis absorbida | Gray (Gy) | rad | Energia depositada por unidad de masa | Absorbed dose | Energy deposited per unit mass |
| Dosis equivalente | Sievert (Sv) | rem | Dosis ajustada por tipo de radiacion | Equivalent dose | Dose adjusted for radiation type |
| Dosis efectiva | Sievert (Sv) | rem | Dosis ajustada por organo y tipo de radiacion | Effective dose | Dose adjusted for organ and radiation type |
| Exposicion | C/kg | Roentgen (R) | Ionizacion en aire | Exposure | Ionization in air |

**Factor de ponderacion por radiacion (wR): | Radiation weighting factor (wR):**
- Rayos X, gamma: wR = 1 | X-rays, gamma: wR = 1
- Neutrones: wR = 5-20 (segun energia) | Neutrons: wR = 5-20 (energy-dependent)
- Alfa: wR = 20 | Alpha: wR = 20

**Factor de ponderacion por organo (wT): | Organ weighting factor (wT):**
- Mama, colon, pulmon, estomago: wT = 0.12 (mayor sensibilidad) | Breast, colon, lung, stomach: wT = 0.12 (higher sensitivity)
- Gonadas: wT = 0.08 | Gonads: wT = 0.08
- Tiroides, esofago, vejiga: wT = 0.04 | Thyroid, esophagus, bladder: wT = 0.04
- Piel, superficie osea: wT = 0.01 | Skin, bone surface: wT = 0.01

### Dosimetria Especifica de TC | CT-Specific Dosimetry

**CTDIvol (Computed Tomography Dose Index - volumetric):**
- Dosis promedio en el volumen escaneado | Average dose in scanned volume
- Medido en mGy | Measured in mGy
- Permite comparar protocolos entre equipos | Enables protocol comparison between equipment

**DLP (Dose Length Product):**
- DLP = CTDIvol x longitud del scan (cm) | DLP = CTDIvol x scan length (cm)
- Refleja la dosis total del estudio | Reflects total study dose

**Dosis efectiva: | Effective dose:**
- E = DLP x k (factor de conversion por region anatomica) | E = DLP x k (conversion factor by anatomical region)
- k cabeza: 0.0021 mSv/(mGy-cm) | k head: 0.0021 mSv/(mGy-cm)
- k torax: 0.014 mSv/(mGy-cm) | k chest: 0.014 mSv/(mGy-cm)
- k abdomen: 0.015 mSv/(mGy-cm) | k abdomen: 0.015 mSv/(mGy-cm)

### Niveles de Referencia Diagnostica (DRL) | Diagnostic Reference Levels (DRL)

- Percentil 75 de la distribucion de dosis en una poblacion de pacientes | 75th percentile of dose distribution in a patient population
- NO son limites de dosis sino indicadores de practica | NOT dose limits but practice indicators
- Superarlos debe llevar a revision del protocolo | Exceeding them should lead to protocol review

| Estudio | DRL tipico (CTDIvol) | DRL tipico (DLP) |
|---------|---------------------|-----------------|
| TC cabeza | 60 mGy | 1050 mGy-cm | Head CT |
| TC torax | 12 mGy | 400 mGy-cm | Chest CT |
| TC abdomen | 15 mGy | 700 mGy-cm | Abdomen CT |
| TC coronaria | 20-60 mGy (variable) | 400-1200 mGy-cm | Coronary CT |

## Manejo de Reacciones al Contraste | Contrast Reaction Management

### Contraste Yodado: Algoritmos de Tratamiento | Iodinated Contrast: Treatment Algorithms

**Reaccion leve (urticaria limitada, nauseas): | Mild reaction (limited urticaria, nausea):**
- Observar 30 minutos | Observe 30 minutes
- Difenhidramina 25-50 mg VO/IV si persiste | Diphenhydramine 25-50 mg PO/IV if persists

**Reaccion moderada (urticaria difusa, broncoespasmo, edema facial): | Moderate reaction (diffuse urticaria, bronchospasm, facial edema):**
- Difenhidramina 25-50 mg IV | Diphenhydramine 25-50 mg IV
- Broncoespasmo: Salbutamol inhalado 2 puffs | Bronchospasm: Inhaled albuterol 2 puffs
- Si no mejora: Epinefrina 0.3 mg IM (muslo lateral) | If not improving: Epinephrine 0.3 mg IM (lateral thigh)

**Reaccion severa (anafilactoide): | Severe reaction (anaphylactoid):**
- EPINEFRINA 0.3 mg (adulto) IM inmediata - primera linea | EPINEPHRINE 0.3 mg (adult) IM immediate - first line
- Posicion supina con piernas elevadas (shock) | Supine position with legs elevated (shock)
- Fluidos IV en bolo: Solucion salina 0.9%, 1-2 L | IV fluid bolus: 0.9% saline, 1-2 L
- Oxigeno por mascarilla | Oxygen by mask
- Si bradicardia: Atropina 0.5-1 mg IV | If bradycardia: Atropine 0.5-1 mg IV
- Repetir epinefrina cada 5-15 min si no responde | Repeat epinephrine every 5-15 min if no response
- Activar equipo de emergencia | Activate emergency team

### Reaccion Vagal (No Alergica) | Vasovagal Reaction (Non-Allergic)

- Bradicardia + hipotension (diferente de anafilaxia que tiene taquicardia) | Bradycardia + hypotension (different from anaphylaxis which has tachycardia)
- Tratamiento: Piernas elevadas, fluidos IV, atropina 0.5-1 mg IV si severa | Treatment: Legs elevated, IV fluids, atropine 0.5-1 mg IV if severe
- NO dar epinefrina a menos que haya signos alergicos | Do NOT give epinephrine unless there are allergic signs

### Extravasacion de Contraste | Contrast Extravasation

- Escape de contraste al tejido subcutaneo durante la inyeccion | Contrast leaking into subcutaneous tissue during injection
- Leve (<10 mL): Elevar extremidad, hielo, observar | Mild (<10 mL): Elevate extremity, ice, observe
- Moderada-severa (>10 mL o con alteracion neurovascular): Consultar cirugia plastica | Moderate-severe (>10 mL or with neurovascular compromise): Consult plastic surgery
- Sindrome compartimental: Emergencia quirurgica rara | Compartment syndrome: Rare surgical emergency

## Seguridad en RM | MRI Safety

### Zonas de Seguridad (ACR) | Safety Zones (ACR)

| Zona | Acceso | Descripcion |
|------|--------|-----------|
| Zona I | Publico general | Areas publicas del hospital | Zone I | General public | Public hospital areas |
| Zona II | Pacientes supervisados | Sala de espera de RM, recepcion | Zone II | Supervised patients | MRI waiting room, reception |
| Zona III | Personal autorizado | Sala de control, area pre-escaner | Zone III | Authorized personnel | Control room, pre-scanner area |
| Zona IV | Solo personal autorizado | Sala del escaner (campo magnetico activo) | Zone IV | Authorized personnel only | Scanner room (active magnetic field) |

### Peligros del Campo Magnetico | Magnetic Field Hazards

**Efecto misil (projectile effect): | Projectile effect:**
- Objetos ferromagneticos pueden ser atraidos al iman a alta velocidad | Ferromagnetic objects can be attracted to the magnet at high velocity
- Ejemplo: Tanques de oxigeno, sillas de ruedas, tijeras, horquillas | Examples: Oxygen tanks, wheelchairs, scissors, hairpins
- Puede causar lesiones graves o muerte | Can cause serious injury or death
- Prevencion: Screening estricto en Zona III, detector de metales | Prevention: Strict Zone III screening, metal detector

**Implantes y dispositivos: | Implants and devices:**
- **MR Safe:** Seguro en cualquier entorno de RM | Safe in any MRI environment
- **MR Conditional:** Seguro bajo condiciones especificas (campo, SAR, tiempo) | Safe under specific conditions (field, SAR, time)
- **MR Unsafe:** Contraindicado | Contraindicated
- Verificar SIEMPRE en www.mrisafety.com o con el fabricante | ALWAYS verify at www.mrisafety.com or with manufacturer

**Deposito de energia (SAR - Specific Absorption Rate): | Energy deposition (SAR):**
- Calentamiento tisular por la energia de radiofrecuencia | Tissue heating from radiofrequency energy
- Limite: 4 W/kg cuerpo completo, 3.2 W/kg cabeza | Limit: 4 W/kg whole body, 3.2 W/kg head
- Riesgo de quemadura en cables de dispositivos (que actuan como antenas) | Burn risk from device wires (acting as antennas)

## Criterios de Adecuacion (Choosing Wisely / ACR) | Appropriateness Criteria

### Principios de Solicitud Apropiada | Appropriate Ordering Principles

- **ACR Appropriateness Criteria:** Guias basadas en evidencia para cada escenario clinico | Evidence-based guidelines for each clinical scenario
- **Choosing Wisely:** Evitar estudios innecesarios que agregan costo y riesgo sin beneficio | Avoid unnecessary studies adding cost and risk without benefit
- **Sistemas de soporte a la decision (CDS):** Alertas electronicas al solicitar estudios con baja indicacion | Clinical Decision Support: Electronic alerts when ordering studies with low indication
- **PAMA (Protecting Access to Medicare Act):** Requiere consulta de CDS al solicitar imagenes avanzadas | Requires CDS consultation when ordering advanced imaging`,
      keyTerms: [
        {
          term: 'CTDIvol / DLP / dosis efectiva',
          definition: 'Metricas escalonadas de dosis en TC: CTDIvol (mGy) mide dosis local promedio, DLP (mGy-cm) integra dosis por longitud del scan, y dosis efectiva (mSv) convierte a riesgo biologico ajustado por organo. | Tiered CT dose metrics: CTDIvol (mGy) measures average local dose, DLP (mGy-cm) integrates dose over scan length, and effective dose (mSv) converts to organ-adjusted biological risk.',
        },
        {
          term: 'DRL (niveles de referencia diagnostica) | DRL (diagnostic reference levels)',
          definition: 'Percentil 75 de la distribucion de dosis para un tipo de estudio en una poblacion. Sirven como indicadores de practica para identificar protocolos que usan dosis excesivas, NO como limites individuales. | 75th percentile of dose distribution for a study type in a population. Serve as practice indicators to identify protocols using excessive doses, NOT as individual limits.',
        },
        {
          term: 'reaccion anafilactoide | anaphylactoid reaction',
          definition: 'Reaccion severa similar a la anafilaxia pero NO mediada por IgE (a diferencia de la anafilaxia verdadera). Ocurre con contraste yodado por activacion directa del complemento. El tratamiento es identico: epinefrina IM inmediata. | Severe anaphylaxis-like reaction NOT mediated by IgE (unlike true anaphylaxis). Occurs with iodinated contrast via direct complement activation. Treatment is identical: immediate IM epinephrine.',
        },
        {
          term: 'MR Conditional',
          definition: 'Clasificacion de dispositivos medicos que pueden ser escaneados de forma segura en RM SOLO bajo condiciones especificas documentadas (intensidad de campo, SAR, configuracion del paciente). La mayoria de implantes modernos son MR Conditional. | Medical device classification that can be safely scanned in MRI ONLY under specific documented conditions (field strength, SAR, patient configuration). Most modern implants are MR Conditional.',
        },
        {
          term: 'SAR (tasa de absorcion especifica) | SAR (specific absorption rate)',
          definition: 'Medida de la energia de radiofrecuencia absorbida por el cuerpo durante la RM, expresada en W/kg. Limites regulatorios previenen el sobrecalentamiento tisular. Mayor SAR con campos mas altos y secuencias de alta energia. | Measure of radiofrequency energy absorbed by the body during MRI, expressed in W/kg. Regulatory limits prevent tissue overheating. Higher SAR with higher fields and high-energy sequences.',
        },
        {
          term: 'ACR Appropriateness Criteria',
          definition: 'Guias clinicas basadas en evidencia publicadas por el American College of Radiology que clasifican la idoneidad de cada modalidad de imagen para escenarios clinicos especificos en una escala de 1-9. | Evidence-based clinical guidelines published by the American College of Radiology rating the appropriateness of each imaging modality for specific clinical scenarios on a 1-9 scale.',
        },
      ],
      clinicalNotes: 'Puntos clave para la practica clinica: (1) La nefropatia por contraste es un riesgo real principalmente con TFGe <30 mL/min; el ACR 2023 ya no requiere evaluacion de creatinina para TFGe estimada >30. (2) La alergia a mariscos NO es una contraindicacion especifica para contraste yodado; el riesgo es similar al de cualquier alergia. (3) La epinefrina IM es SIEMPRE la primera linea en anafilaxia severa por contraste. (4) La mayoria de dispositivos cardiacos modernos (marcapasos, desfibriladores) son MR Conditional y pueden escanearse con protocolo adecuado. (5) No retener un estudio necesario con contraste por miedo a riesgos bajos; el riesgo de un diagnostico perdido suele ser mayor. | Key points for clinical practice: (1) CI-AKI is a real risk mainly with eGFR <30 mL/min; ACR 2023 no longer requires creatinine evaluation for estimated eGFR >30. (2) Shellfish allergy is NOT a specific contraindication for iodinated contrast; the risk is similar to any allergy. (3) IM epinephrine is ALWAYS first-line in severe contrast anaphylaxis. (4) Most modern cardiac devices (pacemakers, defibrillators) are MR Conditional and can be scanned with proper protocol. (5) Do not withhold a necessary contrast study due to fear of low risks; the risk of a missed diagnosis is usually greater.',
    },
    4: {
      level: 4,
      summary: 'La seguridad radiologica avanzada integra modelado computacional de dosis paciente-especifica, farmacologia avanzada de agentes de contraste, protocolos de gestion de riesgo basados en evidencia, y marcos regulatorios internacionales para garantizar la practica radiologica optima en escenarios clinicos complejos. | Advanced radiation safety integrates patient-specific computational dose modeling, advanced contrast agent pharmacology, evidence-based risk management protocols, and international regulatory frameworks to ensure optimal radiological practice in complex clinical scenarios.',
      explanation: `## Dosimetria Avanzada y Modelado de Riesgo | Advanced Dosimetry and Risk Modeling

### Dosimetria Especifica por Organo | Organ-Specific Dosimetry

**Limitaciones de la dosis efectiva: | Effective dose limitations:**
- La dosis efectiva (mSv) es un promedio poblacional, no individual | Effective dose is a population average, not individual
- No considera edad, sexo, o habito corporal | Does not consider age, sex, or body habitus
- Subestima riesgo en ninos, sobreestima en ancianos | Underestimates risk in children, overestimates in elderly

**Dosimetria Monte Carlo: | Monte Carlo dosimetry:**
- Simulacion computacional que rastrea millones de fotones a traves de phantoms anatomicos | Computer simulation tracking millions of photons through anatomical phantoms
- Calcula dosis absorbida en cada organo individual | Calculates absorbed dose in each individual organ
- Phantoms especificos por edad, sexo y tamano (ICRP) | Age-, sex-, and size-specific phantoms (ICRP)
- Implementado en software comercial: Radimetrics, DoseWatch, TeamPlay | Implemented in commercial software: Radimetrics, DoseWatch, TeamPlay

**Size-Specific Dose Estimates (SSDE): | Size-Specific Dose Estimates:**
- Ajusta el CTDIvol por el tamano real del paciente | Adjusts CTDIvol for actual patient size
- Usa el diametro efectivo del paciente en el nivel escaneado | Uses patient effective diameter at the scanned level
- Mas preciso que CTDIvol para pacientes grandes o pequenos | More accurate than CTDIvol for large or small patients
- SSDE = CTDIvol x factor de conversion por tamano | SSDE = CTDIvol x size-specific conversion factor

### Riesgo de Cancer por Radiacion: Evidencia Actual | Cancer Risk from Radiation: Current Evidence

**Estudios epidemiologicos: | Epidemiological studies:**

| Estudio | Poblacion | Hallazgos |
|---------|----------|-----------|
| Life Span Study (LSS) | Sobrevivientes de Hiroshima/Nagasaki | Riesgo de cancer aumentado significativamente >100 mSv; debatable <100 mSv | Cancer risk significantly increased >100 mSv; debatable <100 mSv |
| INWORKS | Trabajadores nucleares (>300,000) | Asociacion dosis-respuesta a dosis bajas (<100 mSv acumuladas) | Dose-response association at low doses (<100 mSv cumulative) |
| EPI-CT | Ninos expuestos a TC | Aumento modesto de riesgo de leucemia y tumores cerebrales con TC repetidas | Modest increase in leukemia and brain tumor risk with repeated CTs |
| Pearce et al. | Ninos con TC en UK | RR 3.18 para leucemia, 2.82 para tumores cerebrales con >60 mGy cerebro | RR 3.18 for leukemia, 2.82 for brain tumors with >60 mGy brain |

**Debate sobre el modelo LNT: | LNT model debate:**
- Proponentes: Precautionary, respaldado por INWORKS y EPI-CT | Proponents: Precautionary, supported by INWORKS and EPI-CT
- Criticos: Hormesis radiologica, umbral practico ~100 mSv, sesgo de confusion | Critics: Radiation hormesis, practical threshold ~100 mSv, confounding bias
- Posicion regulatoria actual: LNT sigue siendo la base de las politicas de proteccion | Current regulatory position: LNT remains the basis of protection policies

### Rastreo de Dosis Acumulada | Cumulative Dose Tracking

**Registros de dosis del paciente: | Patient dose registries:**
- Perfiles de dosis en el expediente electronico (EHR) | Dose profiles in the electronic health record (EHR)
- Alertas automaticas cuando la dosis acumulada supera umbrales predefinidos | Automatic alerts when cumulative dose exceeds predefined thresholds
- Registro RADIANCE (ACR): Base de datos nacional de dosis | RADIANCE (ACR): National dose database
- Directiva Euratom 2013/59: Requiere registro de dosis individual en la UE | Euratom Directive 2013/59: Requires individual dose recording in the EU

## Farmacologia Avanzada de Agentes de Contraste | Advanced Contrast Agent Pharmacology

### Contraste Yodado: Farmacologia Detallada | Iodinated Contrast: Detailed Pharmacology

**Estructura molecular y propiedades: | Molecular structure and properties:**
- Todos derivados del anillo triyodobenceno | All derived from the triiodobenzene ring
- Monomeros vs dimeros: Dimeros tienen menor osmolaridad para la misma concentracion de yodo | Monomers vs dimers: Dimers have lower osmolality for the same iodine concentration
- Osmolaridad: HOCM (~1500 mOsm/kg), LOCM (~600-800 mOsm/kg), IOCM (~290 mOsm/kg) | Osmolality: HOCM (~1500 mOsm/kg), LOCM (~600-800 mOsm/kg), IOCM (~290 mOsm/kg)

**Farmacocinetica: | Pharmacokinetics:**
- Distribucion bicompartimental: Intravascular -> extravascular extracelular | Two-compartment distribution: Intravascular -> extravascular extracellular
- No se metaboliza | Not metabolized
- Eliminacion renal (>98% en 24 horas con funcion renal normal) | Renal elimination (>98% in 24 hours with normal renal function)
- Vida media: ~2 horas (funcion renal normal) | Half-life: ~2 hours (normal renal function)

**Mecanismo de nefrotoxicidad (CI-AKI): | CI-AKI nephrotoxicity mechanism:**
- Vasoconstriccion medular (isquemia medular) | Medullary vasoconstriction (medullary ischemia)
- Toxicidad tubular directa (vacuolizacion) | Direct tubular toxicity (vacuolization)
- Estres oxidativo y generacion de radicales libres | Oxidative stress and free radical generation
- Osmolaridad alta contribuye a deshidratacion tubular | High osmolality contributes to tubular dehydration

**Evidencia actual sobre CI-AKI (ACR 2023): | Current CI-AKI evidence (ACR 2023):**
- Meta-analisis demuestran que el riesgo de CI-AKI esta sobreestimado historicamente | Meta-analyses demonstrate CI-AKI risk is historically overestimated
- Estudios con grupo control sin contraste muestran tasas similares de AKI | Studies with non-contrast control groups show similar AKI rates
- TFGe >30: No retener contraste necesario | eGFR >30: Do not withhold necessary contrast
- TFGe <30: Hidratacion IV profilactica, considerar alternativa sin contraste | eGFR <30: Prophylactic IV hydration, consider contrast-free alternative

### Gadolinio: Farmacologia y Deposito Tisular | Gadolinium: Pharmacology and Tissue Deposition

**Deposito cerebral de gadolinio: | Brain gadolinium deposition:**
- Descubierto en 2014: Aumento de senal T1 en nucleos dentados y globo palido despues de multiples dosis | Discovered 2014: T1 signal increase in dentate nuclei and globus pallidus after multiple doses
- Agentes lineales > macrocíclicos para deposito | Linear agents > macrocyclic for deposition
- Significado clinico: Ninguno demostrado hasta la fecha | Clinical significance: None demonstrated to date
- FDA 2018: Retiro de varios agentes lineales del mercado (gadodiamida, gadoversetamida) | FDA 2018: Withdrawal of several linear agents from market (gadodiamide, gadoversetamide)
- Recomendacion actual: Usar agentes macrociclicos; evitar exposiciones innecesarias | Current recommendation: Use macrocyclic agents; avoid unnecessary exposures

### Metformina y Contraste Yodado | Metformin and Iodinated Contrast

**Mecanismo de preocupacion: | Mechanism of concern:**
- Metformina se excreta por via renal | Metformin is renally excreted
- Si CI-AKI ocurre, metformina se acumula -> acidosis lactica | If CI-AKI occurs, metformin accumulates -> lactic acidosis
- Riesgo real solo si la funcion renal se deteriora post-contraste | Real risk only if renal function deteriorates post-contrast

**Recomendaciones actuales (ACR 2023): | Current recommendations (ACR 2023):**
- TFGe >=30: NO suspender metformina | eGFR >=30: Do NOT discontinue metformin
- TFGe <30 o AKI aguda: Suspender metformina 48 horas post-contraste, re-evaluar creatinina | eGFR <30 or acute AKI: Discontinue metformin 48 hours post-contrast, re-evaluate creatinine

## Regulacion y Marcos Legales | Regulation and Legal Frameworks

### Organismos Reguladores | Regulatory Bodies

| Organismo | Jurisdiccion | Funcion |
|-----------|-------------|---------|
| ICRP | Internacional | Publicacion de recomendaciones de proteccion radiologica | Publication of radiation protection recommendations |
| IAEA | Internacional (ONU) | Estandares de seguridad basicos (BSS) | Basic safety standards (BSS) |
| NRC (Nuclear Regulatory Commission) | EE.UU. | Regulacion de materiales radiactivos | Radioactive material regulation |
| FDA (CDRH) | EE.UU. | Regulacion de equipos de imagen | Imaging equipment regulation |
| ACR | EE.UU. | Criterios de adecuacion, acreditacion | Appropriateness criteria, accreditation |
| Euratom | Union Europea | Directivas de proteccion radiologica | Radiation protection directives |

### Limites de Dosis Ocupacional | Occupational Dose Limits

| Grupo | Limite Anual |
|-------|-------------|
| Trabajador ocupacionalmente expuesto | 50 mSv/ano, 100 mSv en 5 anos | Occupationally exposed worker | 50 mSv/year, 100 mSv in 5 years |
| Cristalino (ojo) | 20 mSv/ano | Eye lens | 20 mSv/year |
| Piel | 500 mSv/ano | Skin | 500 mSv/year |
| Embarazada declarada | 1 mSv al feto durante el embarazo | Declared pregnant | 1 mSv to fetus during pregnancy |
| Publico general | 1 mSv/ano | General public | 1 mSv/year |

**NO hay limites de dosis para pacientes** (solo justificacion y optimizacion). | There are NO dose limits for patients (only justification and optimization).`,
      keyTerms: [
        {
          term: 'dosimetria Monte Carlo | Monte Carlo dosimetry',
          definition: 'Simulacion computacional que rastrea millones de interacciones individuales de fotones a traves de phantoms anatomicos virtuales para calcular la dosis absorbida en cada organo especifico, proporcionando estimaciones de dosis mas precisas que las metricas estandar. | Computer simulation tracking millions of individual photon interactions through virtual anatomical phantoms to calculate absorbed dose in each specific organ, providing more precise dose estimates than standard metrics.',
        },
        {
          term: 'SSDE (estimacion de dosis especifica por tamano) | SSDE (size-specific dose estimates)',
          definition: 'Ajuste del CTDIvol por el tamano real del paciente usando el diametro efectivo, proporcionando una estimacion de dosis absorbida mas precisa que el CTDIvol solo, especialmente importante en pediatria y pacientes con habito corporal extremo. | CTDIvol adjustment for actual patient size using effective diameter, providing a more accurate absorbed dose estimate than CTDIvol alone, especially important in pediatrics and patients with extreme body habitus.',
        },
        {
          term: 'IOCM (contraste isoosmolar) | IOCM (iso-osmolar contrast medium)',
          definition: 'Agente de contraste yodado dimero no-ionico con osmolaridad similar al plasma (~290 mOsm/kg), como iodixanol (Visipaque). Teoricamente el perfil mas seguro en nefroproteccion, aunque la diferencia clinica con LOCM es debatida. | Non-ionic dimeric iodinated contrast agent with osmolality similar to plasma (~290 mOsm/kg), such as iodixanol (Visipaque). Theoretically the safest nephroprotection profile, though the clinical difference from LOCM is debated.',
        },
        {
          term: 'hormesis radiologica | radiation hormesis',
          definition: 'Hipotesis de que dosis muy bajas de radiacion pueden tener efectos beneficiosos (estimulacion de mecanismos de reparacion del DNA). Controversial y no aceptada como base para politicas de proteccion, pero contribuye al debate sobre la validez del modelo LNT a dosis bajas. | Hypothesis that very low radiation doses may have beneficial effects (stimulation of DNA repair mechanisms). Controversial and not accepted as a basis for protection policies, but contributes to the debate on LNT model validity at low doses.',
        },
        {
          term: 'INWORKS',
          definition: 'International Nuclear Workers Study: Estudio epidemiologico de >300,000 trabajadores nucleares que demostro una asociacion dosis-respuesta significativa entre exposicion ocupacional a dosis bajas y mortalidad por cancer, respaldando el modelo LNT. | International Nuclear Workers Study: Epidemiological study of >300,000 nuclear workers demonstrating a significant dose-response association between occupational low-dose exposure and cancer mortality, supporting the LNT model.',
        },
      ],
      clinicalNotes: 'La evidencia sobre CI-AKI se ha revisado significativamente en los ultimos anos. Multiples meta-analisis con grupos control demuestran que el riesgo de AKI por contraste yodado esta sobreestimado con TFGe >30 mL/min. El ACR 2023 ahora indica que NO se debe retener contraste yodado necesario con TFGe >30. Para TFGe <30, la hidratacion IV profilactica (solucion salina isotonica 1 mL/kg/h por 6-12h pre y post) sigue siendo la intervencion mas efectiva. N-acetilcisteina ya NO se recomienda (ensayo PRESERVE). La premedicacion alergica NO elimina el riesgo por completo; considerar modalidades alternativas cuando el riesgo sea alto y la indicacion moderada. | CI-AKI evidence has been significantly revised in recent years. Multiple meta-analyses with control groups demonstrate that AKI risk from iodinated contrast is overestimated with eGFR >30 mL/min. ACR 2023 now states that necessary iodinated contrast should NOT be withheld with eGFR >30. For eGFR <30, prophylactic IV hydration (isotonic saline 1 mL/kg/h for 6-12h pre and post) remains the most effective intervention. N-acetylcysteine is NO longer recommended (PRESERVE trial). Allergic premedication does NOT completely eliminate risk; consider alternative modalities when risk is high and indication moderate.',
    },
    5: {
      level: 5,
      summary: 'La seguridad radiologica del siglo XXI converge en la personalizacion de la evaluacion de riesgo radiologico, la farmacogenomica de reacciones adversas al contraste, los marcos eticos de justificacion en era de sobreutilizacion de imagenes, y las estrategias regulatorias globales para equilibrar innovacion tecnologica con proteccion del paciente. | 21st century radiation safety converges on personalization of radiological risk assessment, pharmacogenomics of contrast adverse reactions, ethical frameworks for justification in the era of imaging overutilization, and global regulatory strategies balancing technological innovation with patient protection.',
      explanation: `## Evaluacion Personalizada del Riesgo Radiologico | Personalized Radiological Risk Assessment

### Modelos de Riesgo Especificos por Paciente | Patient-Specific Risk Models

**Mas alla de la dosis efectiva: | Beyond effective dose:**
- Risk Index (RI): Riesgo de cancer atribuible a la exposicion, ajustado por edad, sexo y organos irradiados | Risk Index (RI): Cancer risk attributable to exposure, adjusted for age, sex, and irradiated organs
- BEIR VII Report (NAS): Modelos de riesgo por organo basados en Life Span Study + datos epidemiologicos | BEIR VII Report (NAS): Organ-specific risk models based on Life Span Study + epidemiological data
- Software de estimacion de riesgo: RadRAT (NCI), PCXMC (Finlandia), Risketto | Risk estimation software: RadRAT (NCI), PCXMC (Finland), Risketto

**Factores modificadores del riesgo individual: | Individual risk-modifying factors:**
- Edad al momento de la exposicion (ninos: 2-5x mas sensibles que adultos) | Age at exposure (children: 2-5x more sensitive than adults)
- Sexo (mamas, tiroides: mayor riesgo en mujeres) | Sex (breast, thyroid: higher risk in women)
- Predisposicion genetica (ATM heterocigotos, TP53/Li-Fraumeni) | Genetic predisposition (ATM heterozygotes, TP53/Li-Fraumeni)
- Radiosensibilidad individual (variabilidad en reparacion del DNA) | Individual radiosensitivity (variability in DNA repair)

### Radiogenomica de la Sensibilidad Individual | Radiogenomics of Individual Sensitivity

**Variantes geneticas que afectan la respuesta a la radiacion: | Genetic variants affecting radiation response:**
- Genes de reparacion del DNA: ATM, BRCA1/2, CHEK2, NBS1, RAD50 | DNA repair genes: ATM, BRCA1/2, CHEK2, NBS1, RAD50
- Portadores heterocigotos de ATM: ~2x mayor riesgo de cancer de mama por radiacion | ATM heterozygous carriers: ~2x higher radiation-induced breast cancer risk
- Li-Fraumeni (TP53): Evitar radiacion diagnostica excepto cuando sea absolutamente necesario | Li-Fraumeni (TP53): Avoid diagnostic radiation except when absolutely necessary
- Implicacion clinica futura: Screening genetico podria informar decisiones de imagen | Future clinical implication: Genetic screening could inform imaging decisions

## Farmacogenomica de Reacciones al Contraste | Pharmacogenomics of Contrast Reactions

### Predisposicion Genetica | Genetic Predisposition

**Contraste yodado: | Iodinated contrast:**
- La reaccion no es mediada por IgE clasica (es anafilactoide, no anafilactica) | The reaction is not classical IgE-mediated (it is anaphylactoid, not anaphylactic)
- Activacion directa del complemento, mastocitos, sistema de kininas | Direct complement, mast cell, kinin system activation
- Polimorfismos en genes del complemento y receptores de mastocitos | Polymorphisms in complement genes and mast cell receptors
- Asociacion con HLA: Algunos alelos HLA-B y HLA-DR asociados con reacciones severas en poblaciones asiaticas | HLA association: Some HLA-B and HLA-DR alleles associated with severe reactions in Asian populations
- Reactividad cruzada entre agentes: Baja (10-30%), no universal | Cross-reactivity between agents: Low (10-30%), not universal

**Gadolinio y FNS: | Gadolinium and NSF:**
- FNS casi exclusivamente con agentes lineales (gadodiamida, gadoversetamida) | NSF almost exclusively with linear agents (gadodiamide, gadoversetamide)
- TFGe <15 mL/min: Mayor riesgo | eGFR <15 mL/min: Highest risk
- Factores de riesgo adicionales: Inflamacion sistemica, cirugia hepatica, dosis altas | Additional risk factors: Systemic inflammation, liver surgery, high doses
- Desde la eliminacion de agentes lineales de alto riesgo, los casos nuevos de FNS son practicamente cero | Since elimination of high-risk linear agents, new NSF cases are virtually zero

### Estrategias de Mitigacion Basadas en Evidencia | Evidence-Based Mitigation Strategies

**Algoritmo de manejo de alergia al contraste yodado (ACR 2023): | Iodinated contrast allergy management algorithm (ACR 2023):**
1. Clasificar la reaccion previa (leve, moderada, severa) | Classify prior reaction (mild, moderate, severe)
2. Evaluar si la misma modalidad es necesaria o hay alternativa | Assess if same modality is necessary or alternative exists
3. Si necesario: Premedicacion + agente diferente al previo | If necessary: Premedication + different agent from prior
4. Reaccion severa previa: Considerar alternativa sin contraste; si imprescindible, premedicacion + personal preparado para emergencia | Severe prior reaction: Consider contrast-free alternative; if imperative, premedication + staff prepared for emergency
5. Reaccion "breakthrough" con premedicacion: Consulta con alergia, pruebas cutaneas | "Breakthrough" reaction with premedication: Allergy consultation, skin testing

## Etica y Sobreutilizacion de Imagenes | Ethics and Imaging Overutilization

### Magnitud del Problema | Magnitude of the Problem

**Sobreutilizacion de imagenes: | Imaging overutilization:**
- Estimacion: 20-50% de los estudios de imagen avanzados son innecesarios o de bajo valor | Estimate: 20-50% of advanced imaging studies are unnecessary or low-value
- Costo: >$100 mil millones anuales en EE.UU. en imagenes medicas | Cost: >$100 billion annually in the US in medical imaging
- Dosis colectiva: Contribucion significativa a la dosis poblacional | Collective dose: Significant contribution to population dose
- "Incidentalomas": Hallazgos incidentales que generan cascadas diagnosticas costosas y ansiogenas | "Incidentalomas": Incidental findings generating costly and anxiety-provoking diagnostic cascades

**Causas de sobreutilizacion: | Causes of overutilization:**
- Medicina defensiva (temor a demandas) | Defensive medicine (fear of lawsuits)
- Demanda del paciente | Patient demand
- Auto-referencia (self-referral) por medicos que poseen equipos de imagen | Self-referral by physicians who own imaging equipment
- Falta de conocimiento sobre alternativas | Lack of knowledge about alternatives
- Habito y "ritual" clinico | Clinical habit and "ritual"

### Marcos Eticos | Ethical Frameworks

**Principio de beneficencia y no maleficencia: | Beneficence and non-maleficence principle:**
- Todo estudio de imagen debe tener potencial de cambiar el manejo clinico | Every imaging study should have potential to change clinical management
- Si el resultado no cambiara la conducta, el estudio no esta justificado | If the result would not change management, the study is not justified
- "Antes de solicitar, preguntese: Que hare diferente con el resultado?" | "Before ordering, ask yourself: What will I do differently with the result?"

**Justicia distributiva: | Distributive justice:**
- Recursos de imagen son limitados y costosos | Imaging resources are limited and costly
- La sobreutilizacion en poblaciones privilegiadas reduce el acceso para otros | Overutilization in privileged populations reduces access for others
- Equidad en acceso vs equidad en exposicion | Equity in access vs equity in exposure

### Estrategias de Reduccion | Reduction Strategies

**Clinical Decision Support (CDS) mandatorio: | Mandatory CDS:**
- PAMA Act (EE.UU.): Consulta de CDS obligatoria al solicitar imagenes avanzadas por Medicare | PAMA Act (US): Mandatory CDS consultation when ordering advanced imaging for Medicare
- Sistemas: CareSelect Imaging (ACR), AUC Select (Change Healthcare) | Systems: CareSelect Imaging (ACR), AUC Select (Change Healthcare)
- Evidencia: Reduccion de 5-10% en solicitudes inapropiadas | Evidence: 5-10% reduction in inappropriate orders

**Peer learning y retroalimentacion: | Peer learning and feedback:**
- RadPeer (ACR): Revision entre pares de interpretaciones previas | RadPeer (ACR): Peer review of prior interpretations
- Dashboard de utilización: Comparacion de patrones de solicitud entre medicos | Utilization dashboard: Comparison of ordering patterns between physicians
- Educacion continua sobre Choosing Wisely | Continuing education on Choosing Wisely

## Seguridad en Tecnologias Emergentes | Safety in Emerging Technologies

### Seguridad de la RM a Campos Ultra-Altos | Ultra-High Field MRI Safety

**7 Tesla: Consideraciones especificas: | 7 Tesla: Specific considerations:**
- SAR aumentado ~4x vs 3T: Requiere modificaciones de secuencias | SAR increased ~4x vs 3T: Requires sequence modifications
- Efectos neurosensoriales transitorios: Mareo, sabor metalico, fosfenos | Transient neurosensory effects: Dizziness, metallic taste, phosphenes
- Fuerza de atraccion magnetica marcadamente mayor: Screening mas estricto | Markedly greater magnetic attraction force: Stricter screening
- Muy pocos implantes certificados para 7T actualmente | Very few implants currently certified for 7T
- FDA-cleared: Solo sistemas seleccionados (Siemens MAGNETOM Terra) | FDA-cleared: Only selected systems (Siemens MAGNETOM Terra)

### Seguridad de la IA en Imagen | AI Safety in Imaging

**Riesgos regulatorios de la IA diagnostica: | Regulatory risks of diagnostic AI:**
- Sesgo algoritmico: Modelos entrenados en poblaciones no representativas | Algorithmic bias: Models trained on non-representative populations
- Derive de rendimiento (performance drift): Degradacion con cambios de equipo/protocolo | Performance drift: Degradation with equipment/protocol changes
- Responsabilidad medico-legal: Quien responde si la AI falla? | Medico-legal liability: Who is responsible if AI fails?
- FDA: Regulacion como Software as a Medical Device (SaMD) | FDA: Regulation as Software as a Medical Device (SaMD)
- Transparencia y explicabilidad (XAI) como requisito emergente | Transparency and explainability (XAI) as emerging requirement

### Seguridad de Agentes de Contraste de Nueva Generacion | Next-Generation Contrast Agent Safety

**Nanoparticulas: | Nanoparticles:**
- Potencial acumulacion en sistema reticuloendotelial (higado, bazo) | Potential reticuloendothelial system accumulation (liver, spleen)
- Toxicidad a largo plazo desconocida para muchos compuestos | Long-term toxicity unknown for many compounds
- Regulacion mas estricta que agentes convencionales | Stricter regulation than conventional agents
- Necesidad de estudios de biodistribucion y eliminacion a largo plazo | Need for long-term biodistribution and elimination studies

**Agentes teranosticos: | Theranostic agents:**
- Combinan diagnostico y terapia en una sola molecula | Combine diagnosis and therapy in a single molecule
- Consideraciones de seguridad hibridas: Toxicidad del agente + efectos terapeuticos | Hybrid safety considerations: Agent toxicity + therapeutic effects
- Marco regulatorio aun en desarrollo | Regulatory framework still in development`,
      keyTerms: [
        {
          term: 'BEIR VII',
          definition: 'Biological Effects of Ionizing Radiation VII: Informe de la National Academy of Sciences (2006) que proporciona modelos de riesgo de cancer por organo basados en la evidencia epidemiologica disponible, usando el modelo LNT como base para estimaciones de riesgo a dosis bajas. | NAS report (2006) providing organ-specific cancer risk models based on available epidemiological evidence, using the LNT model as basis for low-dose risk estimates.',
        },
        {
          term: 'RadRAT',
          definition: 'Radiation Risk Assessment Tool (NCI): Herramienta online que calcula el riesgo de cancer atribuible a exposiciones radiologicas especificas, personalizado por edad, sexo, y organos irradiados, basado en modelos BEIR VII. | NCI online tool calculating cancer risk attributable to specific radiological exposures, personalized by age, sex, and irradiated organs, based on BEIR VII models.',
        },
        {
          term: 'PAMA Act',
          definition: 'Protecting Access to Medicare Act: Legislacion estadounidense que requiere que los medicos consulten sistemas de soporte a la decision clinica (CDS) basados en criterios de adecuacion antes de solicitar imagenes avanzadas (TC, RM, PET) para pacientes de Medicare. | US legislation requiring physicians to consult clinical decision support (CDS) systems based on appropriateness criteria before ordering advanced imaging (CT, MRI, PET) for Medicare patients.',
        },
        {
          term: 'SaMD (Software as a Medical Device)',
          definition: 'Marco regulatorio de la FDA para software que funciona como dispositivo medico (incluyendo algoritmos de AI para imagen diagnostica), clasificado por nivel de riesgo y requiriendo demostracion de seguridad, eficacia, y calidad. | FDA regulatory framework for software functioning as a medical device (including AI algorithms for diagnostic imaging), classified by risk level and requiring demonstration of safety, efficacy, and quality.',
        },
        {
          term: 'incidentaloma',
          definition: 'Hallazgo descubierto incidentalmente en un estudio de imagen solicitado por otra indicacion. Puede generar cascadas diagnosticas costosas con biopsias, seguimiento, ansiedad y posible sobrediagnostico sin beneficio clinico neto. | Finding incidentally discovered on an imaging study ordered for another indication. Can generate costly diagnostic cascades with biopsies, follow-up, anxiety, and possible overdiagnosis without net clinical benefit.',
        },
        {
          term: 'hormesis radiologica | radiation hormesis',
          definition: 'Hipotesis controversial de que dosis muy bajas de radiacion pueden activar mecanismos biologicos protectores (reparacion de DNA, apoptosis selectiva, respuesta inmune adaptativa), resultando en un efecto neto beneficioso. No aceptada como base regulatoria pero activamente investigada. | Controversial hypothesis that very low radiation doses may activate protective biological mechanisms (DNA repair, selective apoptosis, adaptive immune response), resulting in a net beneficial effect. Not accepted as a regulatory basis but actively researched.',
        },
      ],
      clinicalNotes: 'La medicina de precision en seguridad radiologica esta en su infancia pero evoluciona rapidamente. La farmacogenomica de reacciones al contraste identifica variantes de HLA asociadas con reacciones severas en poblaciones asiaticas, presagiando un futuro de screening genetico pre-procedimiento. La sobreutilizacion de imagenes es un problema etico, economico y de seguridad que requiere abordaje multifactorial: CDS mandatorio, educacion medica continua, liderazgo institucional en uso apropiado, y empoderamiento del paciente. La convergencia de AI, nanoparticulas, y terapias guiadas por imagen crea nuevos desafios de seguridad que requieren marcos regulatorios agiles. El objetivo final es la evaluacion de riesgo verdaderamente personalizada: dosis organo-especifica ajustada por radiosensibilidad genetica individual, informando decisiones de imagen compartidas entre medico y paciente. | Precision medicine in radiation safety is in its infancy but evolving rapidly. Contrast reaction pharmacogenomics identifies HLA variants associated with severe reactions in Asian populations, foreshadowing a future of pre-procedure genetic screening. Imaging overutilization is an ethical, economic, and safety problem requiring multifactorial approach: mandatory CDS, continuing medical education, institutional leadership in appropriate use, and patient empowerment. The convergence of AI, nanoparticles, and image-guided therapies creates new safety challenges requiring agile regulatory frameworks. The ultimate goal is truly personalized risk assessment: organ-specific dose adjusted for individual genetic radiosensitivity, informing shared imaging decisions between physician and patient.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acr-contrast-manual-2023',
      type: 'guideline',
      title: 'ACR Manual on Contrast Media 2023',
      authors: ['American College of Radiology Committee on Drugs and Contrast Media'],
      source: 'ACR',
      url: 'https://www.acr.org/Clinical-Resources/Contrast-Manual',
    },
    {
      id: 'icrp-103',
      type: 'guideline',
      title: 'The 2007 Recommendations of the International Commission on Radiological Protection',
      authors: ['ICRP'],
      source: 'ICRP Publication 103, Ann ICRP 37(2-4)',
      url: 'https://doi.org/10.1016/j.icrp.2007.10.003',
    },
    {
      id: 'beir-vii',
      type: 'textbook',
      title: 'Health Risks from Exposure to Low Levels of Ionizing Radiation: BEIR VII Phase 2',
      authors: ['National Research Council'],
      source: 'National Academies Press',
      url: 'https://doi.org/10.17226/11340',
    },
    {
      id: 'preserve-trial',
      type: 'article',
      title: 'Prevention of Serious Adverse Events Following Angiography (PRESERVE)',
      authors: ['Weisbord SD', 'Gallagher M', 'Jneid H', 'et al.'],
      source: 'N Engl J Med',
      url: 'https://doi.org/10.1056/NEJMoa1710933',
    },
    {
      id: 'acr-mri-safety-2020',
      type: 'guideline',
      title: 'ACR Guidance Document on MR Safe Practices: Updates and Critical Information 2019',
      authors: ['Kanal E', 'Barkovich AJ', 'Bell C', 'et al.'],
      source: 'Journal of Magnetic Resonance Imaging',
      url: 'https://doi.org/10.1002/jmri.26867',
    },
    {
      id: 'inworks-study',
      type: 'article',
      title: 'Risk of cancer from occupational exposure to ionising radiation: retrospective cohort study of workers in France, the United Kingdom, and the United States (INWORKS)',
      authors: ['Richardson DB', 'Cardis E', 'Daniels RD', 'et al.'],
      source: 'BMJ',
      url: 'https://doi.org/10.1136/bmj.h5359',
    },
  ],

  crossReferences: [
    { targetId: 'topic-chest-xray-interpretation', targetType: 'topic', relationship: 'related', label: 'Radiografia de Torax | Chest X-Ray' },
    { targetId: 'topic-ct-scan-principles', targetType: 'topic', relationship: 'related', label: 'Tomografia Computarizada | CT Scan' },
    { targetId: 'topic-mri-principles', targetType: 'topic', relationship: 'related', label: 'Resonancia Magnetica | MRI' },
    { targetId: 'topic-basic-ultrasound', targetType: 'topic', relationship: 'related', label: 'Ecografia Basica | Basic Ultrasound' },
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'Lesion Renal Aguda | Acute Kidney Injury' },
  ],

  tags: {
    systems: ['renal', 'immune'],
    topics: ['radiology', 'imaging', 'patient safety', 'pharmacology', 'medical ethics', 'regulation'],
    keywords: [
      'seguridad radiologica', 'radiation safety', 'ALARA', 'contraste yodado',
      'gadolinio', 'nefropatia por contraste', 'CI-AKI', 'anafilaxia',
      'premedicacion', 'dosimetria', 'mSv', 'CTDIvol', 'DLP',
      'MR safety', 'MR Conditional', 'embarazo', 'pediatria',
      'Choosing Wisely', 'sobreutilizacion', 'incidentaloma',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'radiology', 'family medicine', 'emergency medicine'],
    },
  },

  createdAt: '2026-02-05T00:00:00.000Z',
  updatedAt: '2026-02-05T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default seguridadRadiologicaRadiationSafety;
