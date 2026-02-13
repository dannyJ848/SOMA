/**
 * Embarazo | Pregnancy - Comprehensive Educational Content
 *
 * Covers pregnancy stages, prenatal care, warning signs,
 * and clinical OB management from basic literacy through
 * evidence-based protocols. Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const embarazoPregnancy: EducationalContent = {
  id: 'womens-health-embarazo-pregnancy',
  type: 'process',
  name: 'Embarazo | Pregnancy',
  nameEs: 'Embarazo',
  alternateNames: [
    'Gestaci\u00f3n | Gestation',
    'Prenatal | Prenatal',
    'Maternidad | Maternity',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El embarazo es el tiempo en que un beb\u00e9 crece dentro del \u00fatero de la madre, normalmente dura 40 semanas, y necesita cuidados especiales para la salud de la mam\u00e1 y el beb\u00e9. | Pregnancy is the time a baby grows inside the mother\u2019s uterus, normally lasts 40 weeks, and needs special care for both mom and baby.',
      explanation: `## \u00bfQu\u00e9 es el embarazo? | What is pregnancy?

El embarazo ocurre cuando un \u00f3vulo fertilizado se implanta en el \u00fatero y empieza a crecer un beb\u00e9. Dura aproximadamente **40 semanas** (9 meses). | Pregnancy happens when a fertilized egg implants in the uterus and a baby starts to grow. It lasts about **40 weeks** (9 months).

### Los tres trimestres | The Three Trimesters

**Primer trimestre (Semanas 1-12) | First Trimester (Weeks 1-12)**
- El beb\u00e9 empieza a formarse | The baby starts forming
- Se forman el coraz\u00f3n, cerebro y otros \u00f3rganos | The heart, brain, and other organs form
- La mam\u00e1 puede sentir n\u00e1useas, cansancio y sensibilidad en los senos | Mom may feel nausea, tiredness, and breast tenderness

**Segundo trimestre (Semanas 13-26) | Second Trimester (Weeks 13-26)**
- El beb\u00e9 crece y se mueve | The baby grows and moves
- La mam\u00e1 empieza a sentir los movimientos del beb\u00e9 | Mom starts to feel the baby\u2019s movements
- Generalmente la mam\u00e1 se siente mejor | Mom generally feels better

**Tercer trimestre (Semanas 27-40) | Third Trimester (Weeks 27-40)**
- El beb\u00e9 crece r\u00e1pido y se prepara para nacer | The baby grows fast and prepares to be born
- La mam\u00e1 puede sentir molestias, dificultad para dormir | Mom may feel discomfort, difficulty sleeping
- El beb\u00e9 se pone cabeza abajo para el parto | The baby turns head down for birth

### Cuidados importantes | Important Care

- Ir al doctor regularmente (cuidado prenatal) | Go to the doctor regularly (prenatal care)
- Tomar vitaminas prenatales con \u00e1cido f\u00f3lico | Take prenatal vitamins with folic acid
- Comer bien y mantenerse activa | Eat well and stay active
- No fumar, no tomar alcohol, no usar drogas | Do not smoke, drink alcohol, or use drugs
- Dormir lo suficiente y reducir el estr\u00e9s | Get enough sleep and reduce stress

### Se\u00f1ales de alarma \u2013 ve al doctor inmediatamente | Warning Signs \u2013 go to the doctor immediately

- **Sangrado vaginal** | **Vaginal bleeding**
- **Dolor de cabeza fuerte que no se quita** | **Severe headache that won\u2019t go away**
- **Hinchaz\u00f3n repentina de cara o manos** | **Sudden swelling of face or hands**
- **Visi\u00f3n borrosa** | **Blurry vision**
- **Dolor fuerte en el abdomen** | **Severe abdominal pain**
- **Fiebre mayor de 38\u00b0C (100.4\u00b0F)** | **Fever above 38\u00b0C (100.4\u00b0F)**
- **El beb\u00e9 deja de moverse o se mueve menos** | **The baby stops moving or moves less**
- **L\u00edquido saliendo de la vagina antes de tiempo** | **Fluid leaking from the vagina early**`,
      keyTerms: [
        {
          term: 'Embarazo | Pregnancy',
          definition:
            'El tiempo en que un beb\u00e9 crece dentro del \u00fatero. | The time a baby grows inside the uterus.',
        },
        {
          term: 'Trimestre | Trimester',
          definition:
            'Cada per\u00edodo de tres meses del embarazo. | Each three-month period of pregnancy.',
        },
        {
          term: 'Cuidado prenatal | Prenatal care',
          definition:
            'Las visitas al doctor durante el embarazo para cuidar la salud de mam\u00e1 y beb\u00e9. | Doctor visits during pregnancy to care for mom and baby\u2019s health.',
        },
        {
          term: '\u00c1cido f\u00f3lico | Folic acid',
          definition:
            'Vitamina importante para prevenir defectos del cerebro y columna del beb\u00e9. | Important vitamin to prevent brain and spine defects in the baby.',
        },
        {
          term: 'Placenta | Placenta',
          definition:
            '\u00d3rgano que alimenta al beb\u00e9 durante el embarazo. | Organ that nourishes the baby during pregnancy.',
        },
      ],
      analogies: [
        'La placenta es como un puente que lleva comida y ox\u00edgeno de la mam\u00e1 al beb\u00e9. | The placenta is like a bridge that carries food and oxygen from mom to baby.',
        'El \u00fatero durante el embarazo es como un globo que se estira a medida que el beb\u00e9 crece. | The uterus during pregnancy is like a balloon that stretches as the baby grows.',
      ],
      examples: [
        'Rosa est\u00e1 embarazada de 8 semanas y siente n\u00e1useas por la ma\u00f1ana. Su doctor le dice que esto es normal y se llama "n\u00e1useas matutinas". | Rosa is 8 weeks pregnant and feels nauseous in the morning. Her doctor tells her this is normal and is called "morning sickness".',
        'Juan y Ana van al doctor cada mes para las visitas prenatales donde les hacen un ultrasonido para ver al beb\u00e9. | Juan and Ana go to the doctor every month for prenatal visits where they get an ultrasound to see the baby.',
      ],
      patientCounselingPoints: [
        'Empieza a tomar \u00e1cido f\u00f3lico (400-800 mcg) desde antes de quedar embarazada si es posible. | Start taking folic acid (400-800 mcg) even before getting pregnant if possible.',
        'Nunca te saltes tus citas prenatales \u2013 son esenciales para detectar problemas temprano. | Never skip your prenatal appointments \u2013 they are essential for detecting problems early.',
        'Si algo no se siente bien, no esperes \u2013 llama a tu doctor. Es mejor ir y que todo est\u00e9 bien. | If something doesn\u2019t feel right, don\u2019t wait \u2013 call your doctor. It\u2019s better to go and have everything be fine.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El embarazo involucra cambios fisiol\u00f3gicos significativos en cada trimestre; el cuidado prenatal incluye pruebas de laboratorio, ultrasonidos, y educaci\u00f3n sobre se\u00f1ales de alarma como preeclampsia y parto prematuro. | Pregnancy involves significant physiological changes in each trimester; prenatal care includes lab tests, ultrasounds, and education about warning signs like preeclampsia and preterm labor.',
      explanation: `## Cambios por trimestre | Changes by Trimester

### Primer trimestre (Semanas 1-12) | First Trimester (Weeks 1-12)

**Desarrollo del beb\u00e9:** | **Baby\u2019s development:**
- Semana 4: Implantaci\u00f3n, se forma el coraz\u00f3n primitivo | Week 4: Implantation, primitive heart forms
- Semana 6: Latido card\u00edaco detectable por ultrasonido | Week 6: Heartbeat detectable by ultrasound
- Semana 8: Se forman todos los \u00f3rganos principales (periodo embrionario) | Week 8: All major organs formed (embryonic period)
- Semana 12: El beb\u00e9 mide ~6 cm; se ven dedos de manos y pies | Week 12: Baby measures ~6 cm; fingers and toes visible

**S\u00edntomas comunes de la madre:** | **Common maternal symptoms:**
- N\u00e1useas y v\u00f3mitos (50-80% de embarazadas) | Nausea and vomiting (50-80% of pregnant women)
- Fatiga extrema | Extreme fatigue
- Senos sensibles e hinchados | Tender, swollen breasts
- Orinar frecuentemente | Frequent urination

### Segundo trimestre (Semanas 13-26) | Second Trimester (Weeks 13-26)

**Desarrollo del beb\u00e9:** | **Baby\u2019s development:**
- Semana 16: Se puede determinar el sexo | Week 16: Sex can be determined
- Semana 20: Ultrasonido anat\u00f3mico detallado | Week 20: Detailed anatomy ultrasound
- Semana 24: El beb\u00e9 podr\u00eda sobrevivir fuera del \u00fatero (l\u00edmite de viabilidad) | Week 24: Baby could survive outside the uterus (limit of viability)

**S\u00edntomas comunes:** | **Common symptoms:**
- Primeros movimientos fetales (16-22 semanas) | First fetal movements (16-22 weeks)
- Dolor de espalda | Back pain
- L\u00ednea oscura en el abdomen (l\u00ednea nigra) | Dark line on abdomen (linea nigra)
- Mejora de n\u00e1useas | Improvement of nausea

### Tercer trimestre (Semanas 27-40) | Third Trimester (Weeks 27-40)

**Desarrollo del beb\u00e9:** | **Baby\u2019s development:**
- Semana 28: Los pulmones producen surfactante | Week 28: Lungs produce surfactant
- Semana 36: El beb\u00e9 se coloca en posici\u00f3n cef\u00e1lica | Week 36: Baby moves into head-down position
- Semana 37: Embarazo a t\u00e9rmino temprano | Week 37: Early term pregnancy
- Semana 39-40: T\u00e9rmino completo | Weeks 39-40: Full term

## Calendario de cuidado prenatal | Prenatal Care Schedule

| Semanas | Weeks | Visitas | Visits |
|---------|-------|---------|--------|
| 0-28 | 0-28 | Cada 4 semanas | Every 4 weeks |
| 28-36 | 28-36 | Cada 2 semanas | Every 2 weeks |
| 36-40 | 36-40 | Cada semana | Every week |

### Pruebas prenatales importantes | Important Prenatal Tests

- **Primera visita**: Tipo de sangre, Rh, CBC, VIH, s\u00edfilis, hepatitis B, urocultivo, Papanicolaou | **First visit**: Blood type, Rh, CBC, HIV, syphilis, hepatitis B, urine culture, Pap smear
- **Semanas 11-14**: Ultrasonido del primer trimestre + tamizaje de aneuploide\u00edas (NIPT o marcadores s\u00e9ricos) | **Weeks 11-14**: First trimester ultrasound + aneuploidy screening (NIPT or serum markers)
- **Semanas 15-20**: Cuadruple marcador (si no se hizo NIPT) | **Weeks 15-20**: Quad screen (if NIPT not done)
- **Semana 20**: Ultrasonido anat\u00f3mico | **Week 20**: Anatomy ultrasound
- **Semanas 24-28**: Tamizaje de diabetes gestacional (glucosa 50g), anticuerpos Rh | **Weeks 24-28**: Gestational diabetes screen (50g glucose), Rh antibodies
- **Semanas 35-37**: Tamizaje de Estreptococo del grupo B (GBS) | **Weeks 35-37**: Group B Streptococcus (GBS) screen

## Se\u00f1ales de alarma detalladas | Detailed Warning Signs

### Preeclampsia | Preeclampsia
- Presi\u00f3n arterial \u2265140/90 despu\u00e9s de la semana 20 | Blood pressure \u2265140/90 after week 20
- Prote\u00edna en la orina | Protein in urine
- Hinchaz\u00f3n s\u00fabita de cara y manos | Sudden swelling of face and hands
- Dolor de cabeza severo, visi\u00f3n borrosa | Severe headache, blurry vision

### Parto prematuro | Preterm Labor
- Contracciones regulares antes de la semana 37 | Regular contractions before week 37
- Presi\u00f3n p\u00e9lvica | Pelvic pressure
- Dolor de espalda baja | Low back pain
- Cambio en flujo vaginal | Change in vaginal discharge`,
      keyTerms: [
        {
          term: 'Preeclampsia | Preeclampsia',
          definition:
            'Complicaci\u00f3n del embarazo con presi\u00f3n alta y da\u00f1o a \u00f3rganos, generalmente despu\u00e9s de la semana 20. | Pregnancy complication with high blood pressure and organ damage, usually after week 20.',
        },
        {
          term: 'Diabetes gestacional | Gestational diabetes',
          definition:
            'Az\u00facar alta en sangre que se desarrolla durante el embarazo. | High blood sugar that develops during pregnancy.',
        },
        {
          term: 'NIPT (Prueba prenatal no invasiva) | Non-Invasive Prenatal Test',
          definition:
            'An\u00e1lisis de sangre que detecta anomal\u00edas cromos\u00f3micas del beb\u00e9. | Blood test that detects chromosomal abnormalities in the baby.',
        },
        {
          term: 'Viabilidad | Viability',
          definition:
            'Capacidad del beb\u00e9 de sobrevivir fuera del \u00fatero (generalmente ~24 semanas). | Baby\u2019s ability to survive outside the uterus (generally ~24 weeks).',
        },
        {
          term: 'Surfactante | Surfactant',
          definition:
            'Sustancia que mantiene los pulmones del beb\u00e9 abiertos para respirar. | Substance that keeps the baby\u2019s lungs open for breathing.',
        },
        {
          term: 'GBS (Estreptococo del grupo B) | Group B Strep',
          definition:
            'Bacteria que puede pasar al beb\u00e9 durante el parto y causar infecci\u00f3n. | Bacteria that can pass to the baby during delivery and cause infection.',
        },
      ],
      analogies: [
        'El surfactante en los pulmones es como jab\u00f3n que evita que los alveolos se peguen entre s\u00ed al respirar. | Surfactant in the lungs is like soap that prevents the air sacs from sticking together when breathing.',
      ],
      examples: [
        'Elena, de 32 semanas, nota que sus manos y cara est\u00e1n muy hinchadas y tiene dolor de cabeza fuerte. Su doctor le toma la presi\u00f3n y est\u00e1 en 160/100 \u2013 le diagnostican preeclampsia. | Elena, at 32 weeks, notices her hands and face are very swollen and she has a severe headache. Her doctor takes her blood pressure and it\u2019s 160/100 \u2013 she is diagnosed with preeclampsia.',
      ],
    },

    3: {
      level: 3,
      summary:
        'La fisiolog\u00eda del embarazo implica adaptaciones cardiovasculares, renales, hematol\u00f3gicas y endocrinas significativas; la placenta funciona como \u00f3rgano endocrino productor de hCG, HPL, estr\u00f3geno y progesterona; las complicaciones principales incluyen trastornos hipertensivos, diabetes gestacional, y restricci\u00f3n del crecimiento intrauterino. | Pregnancy physiology involves significant cardiovascular, renal, hematologic, and endocrine adaptations; the placenta functions as an endocrine organ producing hCG, HPL, estrogen, and progesterone; major complications include hypertensive disorders, gestational diabetes, and intrauterine growth restriction.',
      explanation: `## Adaptaciones fisiol\u00f3gicas maternas | Maternal Physiological Adaptations

### Cardiovasculares | Cardiovascular
- Gasto card\u00edaco aumenta 30-50% (pico a las 32 semanas) | Cardiac output increases 30-50% (peaks at 32 weeks)
- Volumen sangu\u00edneo aumenta 40-50% | Blood volume increases 40-50%
- Resistencia vascular perif\u00e9rica disminuye (acci\u00f3n de progesterona y prostaciclina) | Peripheral vascular resistance decreases (progesterone and prostacyclin effect)
- Presi\u00f3n arterial disminuye en el 2do trimestre, regresa a basal en el 3ro | Blood pressure decreases in 2nd trimester, returns to baseline in 3rd

### Hematol\u00f3gicas | Hematologic
- Anemia dilucional fisiol\u00f3gica (plasma > gl\u00f3bulos rojos) | Physiological dilutional anemia (plasma > red cells)
- Hemoglobina normal: \u226511 g/dL en 1er/3er trimestre, \u226510.5 g/dL en 2do | Normal hemoglobin: \u226511 g/dL in 1st/3rd trimester, \u226510.5 g/dL in 2nd
- Estado de hipercoagulabilidad: aumento de factores VII, VIII, X, fibrin\u00f3geno | Hypercoagulable state: increased factors VII, VIII, X, fibrinogen
- Riesgo de tromboembolismo venoso 5x mayor | 5x increased risk of venous thromboembolism

### Renales | Renal
- Tasa de filtraci\u00f3n glomerular (TFG) aumenta 50% | Glomerular filtration rate (GFR) increases 50%
- Creatinina s\u00e9rica disminuye (\u22640.8 mg/dL es normal) | Serum creatinine decreases (\u22640.8 mg/dL is normal)
- Dilataci\u00f3n fisiologica de ur\u00e9teres (m\u00e1s el derecho) | Physiological ureteral dilation (more on right)

## Endocrinolog\u00eda de la placenta | Placental Endocrinology

| Hormona | Hormone | Funci\u00f3n | Function |
|---------|---------|---------|----------|
| hCG | hCG | Mantiene el cuerpo l\u00fatea, base de prueba de embarazo | Maintains corpus luteum, basis of pregnancy test |
| Progesterona | Progesterone | Relajaci\u00f3n uterina, inmunomodulaci\u00f3n | Uterine relaxation, immunomodulation |
| Estr\u00f3geno (estriol) | Estrogen (estriol) | Crecimiento uterino, flujo sangu\u00edneo | Uterine growth, blood flow |
| HPL | HPL | Resistencia a insulina, mobilizaci\u00f3n de \u00e1cidos grasos | Insulin resistance, fatty acid mobilization |

**Transici\u00f3n l\u00fateo-placentaria** (semanas 7-10): La placenta asume la producci\u00f3n de progesterona del cuerpo l\u00fatea. | **Luteal-placental shift** (weeks 7-10): The placenta takes over progesterone production from the corpus luteum.

## Complicaciones principales | Major Complications

### Trastornos hipertensivos del embarazo | Hypertensive Disorders of Pregnancy

| Trastorno | Disorder | Criterios | Criteria |
|-----------|---------|-----------|---------|
| Hipertensi\u00f3n gestacional | Gestational HTN | PA \u2265140/90 despu\u00e9s de semana 20 sin proteinuria | BP \u2265140/90 after week 20 without proteinuria |
| Preeclampsia | Preeclampsia | PA \u2265140/90 + proteinuria (\u2265300 mg/24h) o disfunci\u00f3n de \u00f3rgano blanco | BP \u2265140/90 + proteinuria (\u2265300 mg/24h) or end-organ dysfunction |
| Preeclampsia severa | Severe preeclampsia | PA \u2265160/110, trombocitopenia, transaminasas elevadas, s\u00edntomas cerebrales | BP \u2265160/110, thrombocytopenia, elevated transaminases, cerebral symptoms |
| S\u00edndrome HELLP | HELLP Syndrome | Hem\u00f3lisis + Enzimas hep\u00e1ticas elevadas + Plaquetas bajas | Hemolysis + Elevated Liver enzymes + Low Platelets |
| Eclampsia | Eclampsia | Preeclampsia + convulsiones | Preeclampsia + seizures |

### Diabetes gestacional (DMG) | Gestational Diabetes (GDM)
- Tamizaje universal a las 24-28 semanas | Universal screening at 24-28 weeks
- Prueba de dos pasos: glucosa 50g \u2192 si \u2265130-140 mg/dL \u2192 OGTT 100g (criterios de Carpenter-Coustan) | Two-step test: 50g glucose \u2192 if \u2265130-140 mg/dL \u2192 100g OGTT (Carpenter-Coustan criteria)
- Complicaciones: macrosom\u00eda, hipoglucemia neonatal, distocia de hombros, polihidramnios | Complications: macrosomia, neonatal hypoglycemia, shoulder dystocia, polyhydramnios

### Restricci\u00f3n del crecimiento intrauterino (RCIU) | Intrauterine Growth Restriction (IUGR)
- Peso fetal estimado < percentil 10 para edad gestacional | Estimated fetal weight < 10th percentile for gestational age
- Causas maternas: hipertensi\u00f3n, preeclampsia, tabaquismo, malnutrici\u00f3n | Maternal causes: hypertension, preeclampsia, smoking, malnutrition
- Causas fetales: anomal\u00edas cromos\u00f3micas, infecciones TORCH | Fetal causes: chromosomal anomalies, TORCH infections
- Causas placentarias: insuficiencia placentaria, desprendimiento | Placental causes: placental insufficiency, abruption`,
      keyTerms: [
        {
          term: 'hCG (Gonadotropina cori\u00f3nica humana) | Human Chorionic Gonadotropin',
          definition:
            'Hormona producida por la placenta que mantiene el embarazo temprano y es la base de las pruebas de embarazo. | Hormone produced by the placenta that maintains early pregnancy and is the basis of pregnancy tests.',
        },
        {
          term: 'HPL (Lact\u00f3geno placentario humano) | Human Placental Lactogen',
          definition:
            'Hormona placentaria que causa resistencia a insulina para garantizar glucosa al feto. | Placental hormone that causes insulin resistance to ensure glucose to the fetus.',
        },
        {
          term: 'S\u00edndrome HELLP | HELLP Syndrome',
          definition:
            'Complicaci\u00f3n grave: Hem\u00f3lisis, Enzimas Hep\u00e1ticas Elevadas, Plaquetas Bajas. | Serious complication: Hemolysis, Elevated Liver enzymes, Low Platelets.',
        },
        {
          term: 'RCIU | IUGR',
          definition:
            'Restricci\u00f3n del crecimiento intrauterino: feto con peso < percentil 10. | Intrauterine Growth Restriction: fetus with weight < 10th percentile.',
        },
        {
          term: 'Macrosom\u00eda | Macrosomia',
          definition:
            'Beb\u00e9 con peso excesivo al nacer (>4000g), com\u00fan en diabetes gestacional. | Baby with excessive birth weight (>4000g), common in gestational diabetes.',
        },
      ],
      analogies: [
        'La anemia dilucional del embarazo es como agregar agua a la sopa: hay m\u00e1s l\u00edquido pero la misma cantidad de ingredientes, as\u00ed que parece m\u00e1s dilu\u00eddo. | Dilutional anemia of pregnancy is like adding water to soup: there\u2019s more liquid but the same amount of ingredients, so it seems more diluted.',
      ],
      examples: [
        'Una paciente de 30 semanas con PA 165/105, plaquetas 80,000 y AST 250 tiene S\u00edndrome HELLP y necesita hospitalizaci\u00f3n urgente. | A patient at 30 weeks with BP 165/105, platelets 80,000, and AST 250 has HELLP Syndrome and needs urgent hospitalization.',
      ],
    },

    4: {
      level: 4,
      summary:
        'El manejo obst\u00e9trico avanzado incluye vigilancia fetal anteparto (PBF, NST, Doppler de arteria umbilical), protocolo de manejo de preeclampsia con caracter\u00edsticas severas (sulfato de magnesio, antihipertensivos, momento del parto), y algoritmos de tamizaje gen\u00e9tico prenatal incluyendo NIPT basado en cfDNA. | Advanced obstetric management includes antepartum fetal surveillance (BPP, NST, umbilical artery Doppler), preeclampsia management protocol with severe features (magnesium sulfate, antihypertensives, timing of delivery), and prenatal genetic screening algorithms including cfDNA-based NIPT.',
      explanation: `## Vigilancia fetal anteparto | Antepartum Fetal Surveillance

### Prueba sin estr\u00e9s (NST) | Non-Stress Test (NST)
**Criterios reactivos:** | **Reactive criteria:**
- \u22652 aceleraciones de \u226515 lpm por \u226515 segundos en 20 minutos (>32 semanas) | \u22652 accelerations of \u226515 bpm for \u226515 seconds in 20 minutes (>32 weeks)
- Antes de 32 semanas: aceleraciones de \u226510 lpm por \u226510 segundos | Before 32 weeks: accelerations of \u226510 bpm for \u226510 seconds
- Si no reactivo: estimulaci\u00f3n vibroacu\u00fastica \u2192 si persiste, realizar PBF | If non-reactive: vibroacoustic stimulation \u2192 if persists, perform BPP

### Perfil biof\u00edsico (PBF) | Biophysical Profile (BPP)
Cada par\u00e1metro vale 2 puntos (puntaje m\u00e1ximo 10): | Each parameter worth 2 points (max score 10):

| Par\u00e1metro | Parameter | Criterio normal | Normal criterion |
|-----------|-----------|----------------|-----------------|
| NST | NST | Reactivo | Reactive |
| Movimientos respiratorios | Breathing movements | \u22651 episodio de \u226530 seg en 30 min | \u22651 episode of \u226530 sec in 30 min |
| Movimientos corporales | Body movements | \u22653 movimientos en 30 min | \u22653 movements in 30 min |
| Tono fetal | Fetal tone | \u22651 episodio de flexi\u00f3n/extensi\u00f3n | \u22651 episode of flexion/extension |
| L\u00edquido amni\u00f3tico | Amniotic fluid | Mayor bolsillo vertical \u22652 cm | Largest vertical pocket \u22652 cm |

**Interpretaci\u00f3n:** | **Interpretation:**
- 8-10: Normal | 8-10: Normal
- 6: Equivoco, repetir en 24 horas | 6: Equivocal, repeat in 24 hours
- 4: Sospechoso de asfixia, considerar parto | 4: Suspect asphyxia, consider delivery
- 0-2: Asfixia probable, parto inmediato | 0-2: Probable asphyxia, immediate delivery

### Doppler de arteria umbilical | Umbilical Artery Doppler
- \u00cdndice de pulsatilidad elevado: sugiere insuficiencia placentaria | Elevated pulsatility index: suggests placental insufficiency
- Flujo diast\u00f3lico ausente: riesgo significativo, vigilancia intensiva | Absent end-diastolic flow: significant risk, intensive surveillance
- Flujo diast\u00f3lico invertido: riesgo cr\u00edtico, considerar parto inmediato | Reversed end-diastolic flow: critical risk, consider immediate delivery

## Protocolo de manejo de preeclampsia | Preeclampsia Management Protocol

### Preeclampsia sin caracter\u00edsticas severas | Preeclampsia Without Severe Features
- Vigilancia ambulatoria con PA, laboratorios 2x/semana | Outpatient surveillance with BP, labs 2x/week
- NST y evaluaci\u00f3n de l\u00edquido amni\u00f3tico semanal | Weekly NST and amniotic fluid assessment
- Parto a las 37 semanas (ACOG/SMFM) | Delivery at 37 weeks (ACOG/SMFM)

### Preeclampsia con caracter\u00edsticas severas | Preeclampsia With Severe Features
**Manejo inmediato:** | **Immediate management:**
1. **Sulfato de magnesio** para profilaxis de convulsiones | **Magnesium sulfate** for seizure prophylaxis
   - Carga: 4-6 g IV en 20-30 min | Loading: 4-6 g IV over 20-30 min
   - Mantenimiento: 1-2 g/h IV | Maintenance: 1-2 g/h IV
   - Monitorizar: reflejos, frecuencia respiratoria, gasto urinario | Monitor: reflexes, respiratory rate, urine output
   - Antidoto: gluconato de calcio 1g IV | Antidote: calcium gluconate 1g IV

2. **Antihipertensivos de acci\u00f3n r\u00e1pida** para PA \u2265160/110 | **Rapid-acting antihypertensives** for BP \u2265160/110
   - Labetalol IV: 20 mg \u2192 40 mg \u2192 80 mg cada 10 min | Labetalol IV: 20 mg \u2192 40 mg \u2192 80 mg every 10 min
   - Hidralazina IV: 5-10 mg cada 20 min | Hydralazine IV: 5-10 mg every 20 min
   - Nifedipina VO: 10-20 mg cada 20-30 min | Nifedipine PO: 10-20 mg every 20-30 min
   - Meta: PA 140-150/90-100 | Target: BP 140-150/90-100

3. **Momento del parto** | **Timing of delivery**
   - < 34 semanas: corticosteroides (betametasona 12 mg IM x 2 dosis, 24h de intervalo), parto si empeora o a las 34 semanas | < 34 weeks: corticosteroids (betamethasone 12 mg IM x 2 doses, 24h apart), deliver if worsens or at 34 weeks
   - \u2265 34 semanas: parto despu\u00e9s de estabilizaci\u00f3n | \u2265 34 weeks: delivery after stabilization

## Prevenci\u00f3n con aspirina | Aspirin Prevention
- Aspirina de baja dosis (81 mg/d\u00eda) iniciada entre semanas 12-16 | Low-dose aspirin (81 mg/day) started between weeks 12-16
- Indicada en mujeres de alto riesgo de preeclampsia (ACOG, USPSTF) | Indicated in women at high risk for preeclampsia (ACOG, USPSTF)
- Reduce riesgo de preeclampsia en ~20-24% (ASPRE trial) | Reduces preeclampsia risk by ~20-24% (ASPRE trial)`,
      keyTerms: [
        {
          term: 'PBF / BPP (Perfil Biof\u00edsico) | Biophysical Profile',
          definition:
            'Evaluaci\u00f3n de 5 par\u00e1metros fetales por ultrasonido y NST para evaluar bienestar fetal. | Assessment of 5 fetal parameters by ultrasound and NST to evaluate fetal well-being.',
        },
        {
          term: 'NST (Prueba sin estr\u00e9s) | Non-Stress Test',
          definition:
            'Monitoreo de frecuencia card\u00edaca fetal para evaluar reactividad y bienestar. | Fetal heart rate monitoring to assess reactivity and well-being.',
        },
        {
          term: 'Sulfato de magnesio | Magnesium Sulfate',
          definition:
            'F\u00e1rmaco de elecci\u00f3n para prevenci\u00f3n de convulsiones eclampticas y neuroprotecci\u00f3n fetal. | Drug of choice for eclamptic seizure prevention and fetal neuroprotection.',
        },
        {
          term: 'Betametasona | Betamethasone',
          definition:
            'Corticosteroide administrado para madurar pulmones fetales entre 24-34 semanas. | Corticosteroid given to mature fetal lungs between 24-34 weeks.',
        },
        {
          term: 'Doppler de arteria umbilical | Umbilical Artery Doppler',
          definition:
            'Evaluaci\u00f3n de resistencia vascular placentaria; flujo diast\u00f3lico ausente/invertido indica compromiso fetal. | Assessment of placental vascular resistance; absent/reversed diastolic flow indicates fetal compromise.',
        },
      ],
      clinicalNotes:
        'El sulfato de magnesio debe mantenerse por al menos 24 horas posparto en preeclampsia severa. En pacientes <32 semanas, considerar sulfato de magnesio tambi\u00e9n para neuroprotecci\u00f3n fetal antes del parto prematuro. La aspirina preventiva debe iniciarse antes de la semana 16 para m\u00e1xima eficacia. | Magnesium sulfate should be maintained for at least 24 hours postpartum in severe preeclampsia. In patients <32 weeks, consider magnesium sulfate also for fetal neuroprotection before preterm delivery. Preventive aspirin should be started before week 16 for maximum efficacy.',
      examples: [
        'Paciente de 29 semanas con PA 170/112 y plaquetas de 90,000: iniciar MgSO4, labetalol IV, administrar betametasona, y planificar parto en 48 horas si se estabiliza. | A 29-week patient with BP 170/112 and platelets of 90,000: start MgSO4, IV labetalol, administer betamethasone, and plan delivery in 48 hours if stabilized.',
      ],
    },

    5: {
      level: 5,
      summary:
        'Protocolos cl\u00ednicos avanzados incluyen el modelo de predicci\u00f3n de preeclampsia con sFlt-1/PlGF, manejo de acretismo placentario (espectro de placenta acreta), aloinmunizaci\u00f3n Rh con titulaci\u00f3n cr\u00edtica y Doppler de MCA, restricci\u00f3n de crecimiento basada en Doppler con protocolo TRUFFLE, y optimizaci\u00f3n del momento del parto seg\u00fan indicaciones maternas y fetales. | Advanced clinical protocols include the preeclampsia prediction model with sFlt-1/PlGF, placental accretism management (placenta accreta spectrum), Rh alloimmunization with critical titers and MCA Doppler, Doppler-based growth restriction with TRUFFLE protocol, and delivery timing optimization based on maternal and fetal indications.',
      explanation: `## Biomarcadores angiog\u00e9nicos en preeclampsia | Angiogenic Biomarkers in Preeclampsia

### Ratio sFlt-1/PlGF | sFlt-1/PlGF Ratio
- **PlGF** (Factor de crecimiento placentario): Proangiog\u00e9nico, disminuido en preeclampsia | **PlGF** (Placental Growth Factor): Proangiogenic, decreased in preeclampsia
- **sFlt-1** (Tirosina quinasa-1 similar a fms soluble): Antiangiog\u00e9nico, elevado en preeclampsia | **sFlt-1** (Soluble fms-like tyrosine kinase-1): Antiangiogenic, elevated in preeclampsia
- Ratio sFlt-1/PlGF < 38: Descarta preeclampsia (VPN 99.3%, estudio PROGNOSIS) | sFlt-1/PlGF ratio < 38: Rules out preeclampsia (NPV 99.3%, PROGNOSIS study)
- Ratio > 85 (antes de semana 34) o > 110 (despu\u00e9s de semana 34): Confirma preeclampsia | Ratio > 85 (before week 34) or > 110 (after week 34): Confirms preeclampsia
- Utilidad: Triaje en urgencias, reducir hospitalizaciones innecesarias | Utility: Emergency triage, reduce unnecessary hospitalizations

### Modelo de predicci\u00f3n de primer trimestre (FMF) | First Trimester Prediction Model (FMF)
- Combinaci\u00f3n de: presion arterial media, IP de arteria uterina, PAPP-A, PlGF | Combination of: mean arterial pressure, uterine artery PI, PAPP-A, PlGF
- Detecta 75% de preeclampsia pret\u00e9rmino con 10% de falsos positivos | Detects 75% of preterm preeclampsia with 10% false positive rate
- Base del protocolo de aspirina preventiva (ASPRE trial, NEJM 2017) | Basis of preventive aspirin protocol (ASPRE trial, NEJM 2017)

## Espectro de placenta acreta (PAS) | Placenta Accreta Spectrum (PAS)

### Clasificaci\u00f3n | Classification
- **Acreta**: Vellosidades adheridas al miometrio (sin decidua basal) | **Accreta**: Villi attached to myometrium (no decidua basalis)
- **Increta**: Vellosidades invaden el miometrio | **Increta**: Villi invade myometrium
- **Percreta**: Vellosidades penetran la serosa (pueden invadir vejiga/intestino) | **Percreta**: Villi penetrate serosa (may invade bladder/bowel)

### Manejo quir\u00fargico planificado | Planned Surgical Management
- Ces\u00e1rea-histerectom\u00eda planificada a las 34-35+6 semanas con equipo multidisciplinario | Planned cesarean hysterectomy at 34-35+6 weeks with multidisciplinary team
- Colocaci\u00f3n de cat\u00e9teres ureterales preoperatorios | Preoperative ureteral catheter placement
- Disponibilidad de intervencionismo radiol\u00f3gico (embolizaci\u00f3n de arterias il\u00edacas internas) | Availability of interventional radiology (internal iliac artery embolization)
- Banco de sangre: m\u00ednimo 6U de paquete globular, plasma fresco, plaquetas | Blood bank: minimum 6U packed RBCs, FFP, platelets
- Incisi\u00f3n uterina evitando la placenta (gu\u00eda por ultrasonido) | Uterine incision avoiding placenta (ultrasound-guided)

## Protocolo TRUFFLE para RCIU | TRUFFLE Protocol for IUGR

### Manejo basado en Doppler de RCIU temprana (<32 semanas) | Doppler-Based Management of Early-Onset IUGR (<32 weeks)

| Hallazgo Doppler | Doppler Finding | Acci\u00f3n | Action |
|-----------------|-----------------|--------|--------|
| IP arteria umbilical >p95 | Umbilical artery PI >95th | Vigilancia cada 3-4 d\u00edas | Surveillance every 3-4 days |
| Flujo diast\u00f3lico ausente | Absent end-diastolic flow | Hospitalizaci\u00f3n, vigilancia diaria, corticosteroides | Hospitalization, daily monitoring, corticosteroids |
| Flujo diast\u00f3lico invertido | Reversed end-diastolic flow | Parto si \u226530 semanas, considerar a las 28 semanas caso por caso | Delivery if \u226530 weeks, consider at 28 weeks case by case |
| Ductus venoso onda a ausente/invertida | Ductus venosus absent/reversed a-wave | Parto inmediato si \u226526 semanas | Immediate delivery if \u226526 weeks |

### Aloinmunizaci\u00f3n Rh | Rh Alloimmunization
- T\u00edtulo cr\u00edtico: \u22651:16 (o \u22651:32 seg\u00fan laboratorio) | Critical titer: \u22651:16 (or \u22651:32 depending on lab)
- Doppler de velocidad sist\u00f3lica m\u00e1xima de arteria cerebral media (MCA-PSV) | Middle cerebral artery peak systolic velocity Doppler (MCA-PSV)
  - > 1.5 MoM: anemia fetal moderada-severa | > 1.5 MoM: moderate-severe fetal anemia
  - Indica cordocent\u00e9sis y posible transfusi\u00f3n intrauterina | Indicates cordocentesis and possible intrauterine transfusion
- Profilaxis: Anti-D 300 mcg IM a las 28 semanas y dentro de 72h posparto | Prophylaxis: Anti-D 300 mcg IM at 28 weeks and within 72h postpartum

## Momento \u00f3ptimo del parto seg\u00fan indicaci\u00f3n (ACOG/SMFM) | Optimal Delivery Timing by Indication (ACOG/SMFM)

| Indicaci\u00f3n | Indication | Semanas | Weeks |
|------------|------------|---------|-------|
| Preeclampsia sin criterios severos | Preeclampsia without severe features | 37+0 | 37+0 |
| Preeclampsia con criterios severos | Preeclampsia with severe features | 34+0 (o antes si inestable) | 34+0 (or earlier if unstable) |
| Diabetes gestacional controlada con dieta | Diet-controlled GDM | 39+0-40+6 | 39+0-40+6 |
| Diabetes gestacional con medicaci\u00f3n | GDM on medication | 39+0 | 39+0 |
| RCIU con Doppler normal | IUGR with normal Doppler | 37+0-38+6 | 37+0-38+6 |
| Col\u00e9stasis intrahep\u00e1tica | Intrahepatic cholestasis | 36+0-37+0 (si \u00e1cidos biliares \u2265100: 34+0) | 36+0-37+0 (if bile acids \u2265100: 34+0) |
| Placenta previa | Placenta previa | 36+0-37+6 | 36+0-37+6 |`,
      keyTerms: [
        {
          term: 'sFlt-1/PlGF ratio',
          definition:
            'Ratio de biomarcadores angiog\u00e9nicos para predicci\u00f3n y diagn\u00f3stico de preeclampsia; VPN 99.3% si <38. | Angiogenic biomarker ratio for preeclampsia prediction and diagnosis; NPV 99.3% if <38.',
        },
        {
          term: 'Espectro de placenta acreta (PAS) | Placenta Accreta Spectrum',
          definition:
            'Espectro de implantaci\u00f3n placentaria anormal: acreta, increta, percreta; requiere manejo quir\u00fargico multidisciplinario. | Spectrum of abnormal placental implantation: accreta, increta, percreta; requires multidisciplinary surgical management.',
        },
        {
          term: 'Protocolo TRUFFLE | TRUFFLE Protocol',
          definition:
            'Gu\u00eda basada en evidencia para manejo de RCIU temprana usando Doppler de arteria umbilical y ductus venoso. | Evidence-based guideline for managing early-onset IUGR using umbilical artery and ductus venosus Doppler.',
        },
        {
          term: 'MCA-PSV (Velocidad sist\u00f3lica m\u00e1xima de arteria cerebral media)',
          definition:
            'M\u00e9todo no invasivo para detectar anemia fetal; >1.5 MoM sugiere anemia moderada-severa. | Non-invasive method for detecting fetal anemia; >1.5 MoM suggests moderate-severe anemia.',
        },
        {
          term: 'Col\u00e9stasis intrahep\u00e1tica del embarazo | Intrahepatic Cholestasis of Pregnancy',
          definition:
            'Trastorno hep\u00e1tico del embarazo con prurito y \u00e1cidos biliares elevados; asociado con muerte fetal s\u00fabita si no se trata. | Hepatic disorder of pregnancy with pruritus and elevated bile acids; associated with sudden fetal death if untreated.',
        },
      ],
      clinicalNotes:
        'El ratio sFlt-1/PlGF est\u00e1 validado en m\u00faltiples ensayos cl\u00ednicos y es costo-efectivo para triaje de preeclampsia (NICE NG133, 2023). En PAS, la incisi\u00f3n cut\u00e1nea debe ser vertical mediana y la histerotom\u00eda cl\u00e1sica funda, evitando la placenta. La coordinaci\u00f3n multidisciplinaria (obstetricia, urolog\u00eda, cirug\u00eda vascular, banco de sangre, UCIN) es esencial. | The sFlt-1/PlGF ratio is validated in multiple clinical trials and is cost-effective for preeclampsia triage (NICE NG133, 2023). In PAS, the skin incision should be vertical midline and the hysterotomy classical fundal, avoiding the placenta. Multidisciplinary coordination (obstetrics, urology, vascular surgery, blood bank, NICU) is essential.',
    },
  },

  media: [],

  citations: [
    {
      id: 'cit-embarazo-acog-hypertension',
      type: 'guideline',
      title: 'ACOG Practice Bulletin No. 222: Gestational Hypertension and Preeclampsia',
      authors: ['American College of Obstetricians and Gynecologists'],
      source: 'Obstetrics & Gynecology',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin',
    },
    {
      id: 'cit-embarazo-aspre',
      type: 'journal',
      title: 'Aspirin versus Placebo in Pregnancies at High Risk for Preterm Preeclampsia',
      authors: ['Rolnik, D.L.', 'Wright, D.', 'Poon, L.C.'],
      source: 'New England Journal of Medicine',
      page: '377:613-622',
      accessedDate: '2025-01-10',
    },
    {
      id: 'cit-embarazo-prognosis',
      type: 'journal',
      title: 'PROGNOSIS: Prediction of Short-Term Outcome in Pregnant Women with Suspected Preeclampsia Study',
      authors: ['Zeisler, H.', 'Llurba, E.'],
      source: 'New England Journal of Medicine',
      page: '374:13-22',
    },
    {
      id: 'cit-embarazo-truffle',
      type: 'journal',
      title: 'TRUFFLE Study: Randomised Trial on Early-Onset Fetal Growth Restriction',
      authors: ['Lees, C.C.', 'Marlow, N.'],
      source: 'The Lancet',
      page: '385:2162-2172',
    },
    {
      id: 'cit-embarazo-williams',
      type: 'textbook',
      title: 'Williams Obstetrics',
      authors: ['Cunningham, F.G.', 'Leveno, K.J.'],
      source: 'McGraw-Hill Education',
      chapter: 'Chapters 4, 40, 42, 44',
    },
    {
      id: 'cit-embarazo-acog-delivery-timing',
      type: 'guideline',
      title: 'ACOG/SMFM Medically Indicated Late-Preterm and Early-Term Deliveries',
      authors: ['Society for Maternal-Fetal Medicine'],
      source: 'American Journal of Obstetrics & Gynecology',
    },
  ],

  crossReferences: [
    {
      targetId: 'womens-health-ciclo-menstrual-menstrual-cycle',
      targetType: 'process',
      relationship: 'parent',
      label: 'Ciclo menstrual | Menstrual Cycle',
    },
    {
      targetId: 'womens-health-menopausia-menopause',
      targetType: 'process',
      relationship: 'sibling',
      label: 'Menopausia | Menopause',
    },
    {
      targetId: 'womens-health-salud-mamaria-breast-health',
      targetType: 'topic',
      relationship: 'related',
      label: 'Salud mamaria | Breast Health',
    },
    {
      targetId: 'condition-heart-failure',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'Cardiomiopat\u00eda periparto | Peripartum cardiomyopathy',
    },
  ],

  tags: {
    systems: ['reproductive', 'endocrine', 'cardiovascular'],
    topics: ['obstetrics', 'prenatal-care', 'pregnancy', 'womens-health'],
    keywords: [
      'embarazo',
      'pregnancy',
      'prenatal',
      'preeclampsia',
      'diabetes gestacional',
      'gestational diabetes',
      'parto prematuro',
      'preterm labor',
      'RCIU',
      'IUGR',
      'placenta acreta',
      'placenta accreta',
      'vigilancia fetal',
      'fetal surveillance',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology'],
    },
  },

  createdAt: '2025-06-01',
  updatedAt: '2025-06-01',
  version: 1,
  status: 'published',
  contributors: ['SOMA Medical Education Team'],
};
