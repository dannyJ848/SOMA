/**
 * Ciclo Menstrual | Menstrual Cycle - Comprehensive Educational Content
 *
 * Covers menstrual cycle phases, hormonal regulation, common disorders,
 * and clinical management from basic literacy through OB/GYN protocols.
 * Spanish-first with English translations.
 */

import { EducationalContent } from '../types';

export const cicloMenstrualMenstrualCycle: EducationalContent = {
  id: 'womens-health-ciclo-menstrual-menstrual-cycle',
  type: 'process',
  name: 'Ciclo Menstrual | Menstrual Cycle',
  nameEs: 'Ciclo Menstrual',
  alternateNames: [
    'Periodo menstrual | Menstrual period',
    'Regla | Period',
    'Ciclo ov\u00e1rico | Ovarian cycle',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'El ciclo menstrual es un proceso natural del cuerpo femenino que ocurre cada mes para prepararse para un posible embarazo. | The menstrual cycle is a natural monthly process in the female body that prepares for a possible pregnancy.',
      explanation: `## \u00bfQu\u00e9 es el ciclo menstrual? | What is the menstrual cycle?

Tu cuerpo pasa por cambios cada mes que se llaman el **ciclo menstrual**. Este ciclo prepara tu cuerpo para un posible embarazo. | Your body goes through monthly changes called the **menstrual cycle**. This cycle prepares your body for a possible pregnancy.

### La menstruaci\u00f3n (la regla) | Menstruation (the period)

- La regla es cuando sale sangre de tu vagina durante 3 a 7 d\u00edas | Your period is when blood comes from your vagina for 3 to 7 days
- Es completamente normal y saludable | It is completely normal and healthy
- La mayor\u00eda de las ni\u00f1as tienen su primera regla entre los 10 y 15 a\u00f1os | Most girls get their first period between ages 10 and 15
- El ciclo dura aproximadamente 28 d\u00edas, pero puede variar de 21 a 35 d\u00edas | The cycle lasts about 28 days, but can range from 21 to 35 days

### Las cuatro fases b\u00e1sicas | The four basic phases

1. **Menstruaci\u00f3n (D\u00edas 1-7)** \u2013 Tu cuerpo elimina el revestimiento del \u00fatero | Your body sheds the uterine lining
2. **Fase folicular (D\u00edas 1-13)** \u2013 Tu cuerpo se prepara para liberar un \u00f3vulo | Your body prepares to release an egg
3. **Ovulaci\u00f3n (D\u00eda 14)** \u2013 Se libera un \u00f3vulo del ovario | An egg is released from the ovary
4. **Fase l\u00fatea (D\u00edas 15-28)** \u2013 Tu cuerpo espera para ver si hay embarazo | Your body waits to see if there is a pregnancy

### Qu\u00e9 es normal | What is normal

- Algo de dolor en el vientre (c\u00f3licos) | Some belly pain (cramps)
- Cambios de humor | Mood changes
- Hinchaz\u00f3n | Bloating
- Dolor de senos | Breast tenderness

### Cu\u00e1ndo hablar con tu doctor | When to talk to your doctor

- Si la regla dura m\u00e1s de 7 d\u00edas | If your period lasts more than 7 days
- Si el dolor es muy fuerte y no mejora con medicina | If pain is very strong and doesn't improve with medicine
- Si no has tenido tu regla en 3 meses | If you haven't had your period in 3 months
- Si sangras mucho (cambias toalla/tamp\u00f3n cada hora) | If you bleed heavily (changing pad/tampon every hour)`,
      keyTerms: [
        {
          term: 'Ciclo menstrual | Menstrual cycle',
          definition:
            'Los cambios mensuales que ocurren en el cuerpo de la mujer. | Monthly changes that happen in a woman\u2019s body.',
        },
        {
          term: 'Menstruaci\u00f3n / Regla | Period',
          definition:
            'El sangrado mensual que sale por la vagina. | The monthly bleeding from the vagina.',
        },
        {
          term: 'Ovulaci\u00f3n | Ovulation',
          definition:
            'Cuando un \u00f3vulo sale del ovario. | When an egg is released from the ovary.',
        },
        {
          term: '\u00datero | Uterus',
          definition:
            'El \u00f3rgano donde crece un beb\u00e9 durante el embarazo. | The organ where a baby grows during pregnancy.',
        },
        {
          term: 'Ovario | Ovary',
          definition:
            '\u00d3rgano que produce \u00f3vulos y hormonas. | Organ that produces eggs and hormones.',
        },
      ],
      analogies: [
        'Tu \u00fatero prepara una "cama suave" cada mes para un posible beb\u00e9. Si no llega un beb\u00e9, el cuerpo quita esa cama y empieza de nuevo \u2013 eso es la regla. | Your uterus makes a "soft bed" every month for a possible baby. If no baby comes, the body removes that bed and starts over \u2013 that is your period.',
        'El ciclo menstrual es como las estaciones del a\u00f1o: cada fase tiene su prop\u00f3sito y todas se repiten. | The menstrual cycle is like the seasons of the year: each phase has its purpose and they all repeat.',
      ],
      examples: [
        'Mar\u00eda tiene 13 a\u00f1os y acaba de tener su primera regla. Es normal que al principio sea irregular. | Maria is 13 and just had her first period. It is normal for it to be irregular at first.',
        'Ana nota que sus senos duelen unos d\u00edas antes de su regla \u2013 esto es parte normal del ciclo. | Ana notices her breasts hurt a few days before her period \u2013 this is a normal part of the cycle.',
      ],
      patientCounselingPoints: [
        'La regla es completamente normal y no es algo sucio. | Your period is completely normal and is not something dirty.',
        'Puedes usar toallas, tampones o copas menstruales seg\u00fan tu preferencia. | You can use pads, tampons, or menstrual cups based on your preference.',
        'Lleva un registro de tus ciclos para conocer lo que es normal para ti. | Keep track of your cycles to know what is normal for you.',
      ],
    },

    2: {
      level: 2,
      summary:
        'El ciclo menstrual es regulado por hormonas del cerebro y los ovarios, tiene cuatro fases principales, y los trastornos comunes incluyen dismenorrea, amenorrea y s\u00edndrome premenstrual. | The menstrual cycle is regulated by hormones from the brain and ovaries, has four main phases, and common disorders include dysmenorrhea, amenorrhea, and premenstrual syndrome.',
      explanation: `## Regulaci\u00f3n hormonal b\u00e1sica | Basic Hormonal Regulation

El ciclo menstrual est\u00e1 controlado por cuatro hormonas principales: | The menstrual cycle is controlled by four main hormones:

| Hormona | Hormone | Funci\u00f3n | Function |
|---------|---------|---------|----------|
| Estr\u00f3geno | Estrogen | Engrosa el revestimiento del \u00fatero | Thickens the uterine lining |
| Progesterona | Progesterone | Mantiene el revestimiento listo para el embarazo | Maintains the lining ready for pregnancy |
| FSH | FSH | Estimula el crecimiento de los fol\u00edculos | Stimulates follicle growth |
| LH | LH | Desencadena la ovulaci\u00f3n | Triggers ovulation |

## Las cuatro fases en detalle | The Four Phases in Detail

### 1. Fase menstrual (D\u00edas 1-5) | Menstrual Phase (Days 1-5)
- El revestimiento del \u00fatero se desprende | The uterine lining sheds
- Los niveles de hormonas est\u00e1n bajos | Hormone levels are low
- Se pierde entre 30-80 mL de sangre | 30-80 mL of blood is lost

### 2. Fase folicular (D\u00edas 1-13) | Follicular Phase (Days 1-13)
- La FSH hace crecer los fol\u00edculos en los ovarios | FSH makes follicles grow in the ovaries
- Un fol\u00edculo dominante produce estr\u00f3geno | One dominant follicle produces estrogen
- El revestimiento del \u00fatero se reconstruye | The uterine lining rebuilds

### 3. Ovulaci\u00f3n (\u007eD\u00eda 14) | Ovulation (~Day 14)
- Un pico de LH hace que el ovario libere el \u00f3vulo | An LH surge causes the ovary to release the egg
- El \u00f3vulo viaja por la trompa de Falopio | The egg travels through the fallopian tube
- Este es el momento de mayor fertilidad | This is the time of highest fertility

### 4. Fase l\u00fatea (D\u00edas 15-28) | Luteal Phase (Days 15-28)
- El fol\u00edculo vac\u00edo forma el cuerpo l\u00fatea | The empty follicle forms the corpus luteum
- El cuerpo l\u00fatea produce progesterona | The corpus luteum produces progesterone
- Si no hay embarazo, las hormonas caen y empieza la regla | If no pregnancy, hormones drop and the period starts

## Trastornos comunes del ciclo | Common Cycle Disorders

### Dismenorrea (c\u00f3licos menstruales) | Dysmenorrhea (menstrual cramps)
- **Primaria**: dolor sin enfermedad, causada por prostaglandinas | **Primary**: pain without disease, caused by prostaglandins
- **Secundaria**: dolor causado por condiciones como endometriosis | **Secondary**: pain caused by conditions like endometriosis
- Tratamiento: ibuprofeno, calor, anticonceptivos hormonales | Treatment: ibuprofen, heat, hormonal contraceptives

### Amenorrea (ausencia de regla) | Amenorrhea (absence of period)
- **Primaria**: nunca ha tenido regla a los 15 a\u00f1os | **Primary**: never had a period by age 15
- **Secundaria**: deja de tener regla por 3+ meses | **Secondary**: stops having periods for 3+ months
- Causas comunes: embarazo, estr\u00e9s, bajo peso, SOP | Common causes: pregnancy, stress, low weight, PCOS

### S\u00edndrome Premenstrual (SPM) | Premenstrual Syndrome (PMS)
- S\u00edntomas f\u00edsicos y emocionales 1-2 semanas antes de la regla | Physical and emotional symptoms 1-2 weeks before the period
- Incluye: irritabilidad, hinchaz\u00f3n, fatiga, antojos | Includes: irritability, bloating, fatigue, cravings
- El TDPM es una forma severa del SPM | PMDD is a severe form of PMS

### Menorragia (sangrado abundante) | Menorrhagia (heavy bleeding)
- M\u00e1s de 80 mL de sangre por ciclo | More than 80 mL of blood per cycle
- Regla que dura m\u00e1s de 7 d\u00edas | Period lasting more than 7 days
- Puede causar anemia | Can cause anemia`,
      keyTerms: [
        {
          term: 'Estr\u00f3geno | Estrogen',
          definition:
            'Hormona que engrosa el revestimiento del \u00fatero y regula el ciclo. | Hormone that thickens the uterine lining and regulates the cycle.',
        },
        {
          term: 'Progesterona | Progesterone',
          definition:
            'Hormona que mantiene el revestimiento del \u00fatero despu\u00e9s de la ovulaci\u00f3n. | Hormone that maintains the uterine lining after ovulation.',
        },
        {
          term: 'FSH (Hormona Fol\u00edculo Estimulante) | Follicle-Stimulating Hormone',
          definition:
            'Hormona que estimula el crecimiento de los fol\u00edculos en los ovarios. | Hormone that stimulates follicle growth in the ovaries.',
        },
        {
          term: 'LH (Hormona Luteinizante) | Luteinizing Hormone',
          definition:
            'Hormona que desencadena la liberaci\u00f3n del \u00f3vulo. | Hormone that triggers the release of the egg.',
        },
        {
          term: 'Dismenorrea | Dysmenorrhea',
          definition:
            'Dolor menstrual o c\u00f3licos durante la regla. | Menstrual pain or cramps during the period.',
        },
        {
          term: 'Amenorrea | Amenorrhea',
          definition:
            'Ausencia de menstruaci\u00f3n. | Absence of menstruation.',
        },
      ],
      analogies: [
        'Las hormonas son como directores de orquesta: cada una entra en su momento para que el ciclo funcione con armon\u00eda. | Hormones are like orchestra conductors: each one comes in at the right time so the cycle works in harmony.',
      ],
      examples: [
        'Luisa nota hinchaz\u00f3n y cambios de humor una semana antes de su regla \u2013 esto es SPM (s\u00edndrome premenstrual). | Luisa notices bloating and mood changes a week before her period \u2013 this is PMS (premenstrual syndrome).',
        'Carmen dej\u00f3 de tener su regla por 4 meses despu\u00e9s de empezar una dieta estricta. Su doctor le explic\u00f3 que es amenorrea secundaria. | Carmen stopped getting her period for 4 months after starting a strict diet. Her doctor explained it is secondary amenorrhea.',
      ],
    },

    3: {
      level: 3,
      summary:
        'El eje hipot\u00e1lamo-hip\u00f3fisis-ovario (HPO) regula el ciclo menstrual mediante retroalimentaci\u00f3n positiva y negativa; los trastornos como SOP, endometriosis y sangrado uterino anormal tienen mecanismos fisiopatol\u00f3gicos espec\u00edficos. | The hypothalamic-pituitary-ovarian (HPO) axis regulates the menstrual cycle through positive and negative feedback; disorders such as PCOS, endometriosis, and abnormal uterine bleeding have specific pathophysiological mechanisms.',
      explanation: `## El Eje HPO | The HPO Axis

El ciclo menstrual es controlado por el eje hipot\u00e1lamo-hip\u00f3fisis-ovario (HPO): | The menstrual cycle is controlled by the hypothalamic-pituitary-ovarian (HPO) axis:

1. **Hipot\u00e1lamo** \u2192 Secreta GnRH en pulsos | **Hypothalamus** \u2192 Secretes GnRH in pulses
2. **Hip\u00f3fisis anterior** \u2192 Libera FSH y LH | **Anterior pituitary** \u2192 Releases FSH and LH
3. **Ovarios** \u2192 Producen estr\u00f3genos y progesterona | **Ovaries** \u2192 Produce estrogens and progesterone

### Retroalimentaci\u00f3n | Feedback

- **Retroalimentaci\u00f3n negativa**: Niveles bajos-moderados de estr\u00f3geno inhiben FSH/LH | **Negative feedback**: Low-moderate estrogen levels inhibit FSH/LH
- **Retroalimentaci\u00f3n positiva**: Niveles altos y sostenidos de estr\u00f3geno (\u226520 pg/mL por ~50 horas) desencadenan el pico de LH | **Positive feedback**: High sustained estrogen levels (\u226520 pg/mL for ~50 hours) trigger the LH surge
- **Inhibina B**: Producida por c\u00e9lulas de la granulosa, suprime FSH selectivamente | **Inhibin B**: Produced by granulosa cells, selectively suppresses FSH

## Cambios endometriales detallados | Detailed Endometrial Changes

### Fase proliferativa (estr\u00f3geno-dependiente) | Proliferative Phase (estrogen-dependent)
- Endometrio crece de 1-2 mm a 3-5 mm | Endometrium grows from 1-2 mm to 3-5 mm
- Gl\u00e1ndulas tubulares rectas se elongan | Straight tubular glands elongate
- Arterias espirales se desarrollan | Spiral arteries develop
- Mitosis activa en gl\u00e1ndulas y estroma | Active mitosis in glands and stroma

### Fase secretora (progesterona-dependiente) | Secretory Phase (progesterone-dependent)
- Gl\u00e1ndulas se vuelven tortuosas y secretoras | Glands become tortuous and secretory
- Vacuolas subnucleares de gluc\u00f3geno (d\u00eda 17) | Subnuclear glycogen vacuoles (day 17)
- Edema estromal (d\u00edas 22-23) | Stromal edema (days 22-23)
- Decidualizaci\u00f3n del estroma (d\u00edas 23-28) | Stromal decidualization (days 23-28)

## Trastornos principales | Major Disorders

### S\u00edndrome de Ovario Poliqu\u00edstico (SOP) | Polycystic Ovary Syndrome (PCOS)
**Criterios de Rotterdam (2 de 3):** | **Rotterdam Criteria (2 of 3):**
1. Oligo/anovulaci\u00f3n | Oligo/anovulation
2. Hiperandrogenismo cl\u00ednico o bioqu\u00edmico | Clinical or biochemical hyperandrogenism
3. Ovarios poliqu\u00edsticos en ecograf\u00eda (\u226512 fol\u00edculos o volumen >10 mL) | Polycystic ovaries on ultrasound (\u226512 follicles or volume >10 mL)

**Fisiopatolog\u00eda**: Aumento de frecuencia de pulsos de GnRH \u2192 aumento LH:FSH \u2192 hiperandrogenismo ov\u00e1rico + resistencia a insulina | **Pathophysiology**: Increased GnRH pulse frequency \u2192 increased LH:FSH \u2192 ovarian hyperandrogenism + insulin resistance

### Endometriosis | Endometriosis
- Tejido endometrial fuera del \u00fatero (ovarios, peritoneo, tabique rectovaginal) | Endometrial tissue outside the uterus (ovaries, peritoneum, rectovaginal septum)
- Teor\u00edas: menstruaci\u00f3n retr\u00f3grada, metaplasia cel\u00f3mica, diseminaci\u00f3n linf\u00e1tica/vascular | Theories: retrograde menstruation, coelomic metaplasia, lymphatic/vascular spread
- S\u00edntomas: dispareunia, dismenorrea severa, dolor p\u00e9lvico cr\u00f3nico, infertilidad | Symptoms: dyspareunia, severe dysmenorrhea, chronic pelvic pain, infertility

### Sangrado Uterino Anormal (SUA) | Abnormal Uterine Bleeding (AUB)
**Clasificaci\u00f3n PALM-COEIN de la FIGO:** | **FIGO PALM-COEIN Classification:**
- **PALM** (estructurales): P\u00f3lipo, Adenomiosis, Leiomioma, Malignidad | **PALM** (structural): Polyp, Adenomyosis, Leiomyoma, Malignancy
- **COEIN** (no estructurales): Coagulopat\u00eda, Ovulatoria, Endometrial, Iatrog\u00e9nica, No clasificada | **COEIN** (non-structural): Coagulopathy, Ovulatory, Endometrial, Iatrogenic, Not classified`,
      keyTerms: [
        {
          term: 'Eje HPO | HPO Axis',
          definition:
            'Sistema de comunicaci\u00f3n hipot\u00e1lamo-hip\u00f3fisis-ovario que regula el ciclo menstrual. | Hypothalamic-pituitary-ovarian communication system that regulates the menstrual cycle.',
        },
        {
          term: 'GnRH (Hormona liberadora de gonadotropinas) | Gonadotropin-Releasing Hormone',
          definition:
            'Hormona del hipot\u00e1lamo que estimula la liberaci\u00f3n de FSH y LH. | Hypothalamic hormone that stimulates FSH and LH release.',
        },
        {
          term: 'SOP | PCOS',
          definition:
            'S\u00edndrome de ovario poliqu\u00edstico: trastorno endocrino com\u00fan con anovulaci\u00f3n y hiperandrogenismo. | Polycystic ovary syndrome: common endocrine disorder with anovulation and hyperandrogenism.',
        },
        {
          term: 'Endometriosis | Endometriosis',
          definition:
            'Presencia de tejido endometrial fuera de la cavidad uterina. | Presence of endometrial tissue outside the uterine cavity.',
        },
        {
          term: 'PALM-COEIN',
          definition:
            'Sistema de clasificaci\u00f3n FIGO para sangrado uterino anormal. | FIGO classification system for abnormal uterine bleeding.',
        },
        {
          term: 'Cuerpo l\u00fatea | Corpus Luteum',
          definition:
            'Estructura temporal que se forma despu\u00e9s de la ovulaci\u00f3n y produce progesterona. | Temporary structure that forms after ovulation and produces progesterone.',
        },
      ],
      analogies: [
        'El eje HPO funciona como un termostato: si la temperatura (hormonas) sube demasiado, el sistema se apaga; si baja demasiado, se enciende. | The HPO axis works like a thermostat: if the temperature (hormones) rises too high, the system turns off; if it drops too low, it turns on.',
      ],
      examples: [
        'Una paciente de 22 a\u00f1os con ciclos irregulares, acn\u00e9 y exceso de vello facial podr\u00eda tener SOP. | A 22-year-old patient with irregular cycles, acne, and excess facial hair may have PCOS.',
        'Una mujer con dolor p\u00e9lvico cr\u00f3nico que empeora con la menstruaci\u00f3n y dolor durante las relaciones sexuales puede tener endometriosis. | A woman with chronic pelvic pain that worsens with menstruation and pain during intercourse may have endometriosis.',
      ],
    },

    4: {
      level: 4,
      summary:
        'La regulaci\u00f3n neuroendocrina del ciclo involucra la secrecci\u00f3n puls\u00e1til de GnRH modulada por neuronas KNDy, el modelo de dos c\u00e9lulas-dos gonadotropinas para la esteroidog\u00e9nesis, y la evaluaci\u00f3n sistem\u00e1tica de trastornos menstruales seg\u00fan algoritmos cl\u00ednicos. | Neuroendocrine regulation of the cycle involves pulsatile GnRH secretion modulated by KNDy neurons, the two-cell two-gonadotropin model for steroidogenesis, and systematic evaluation of menstrual disorders using clinical algorithms.',
      explanation: `## Neuroendocrinolog\u00eda avanzada | Advanced Neuroendocrinology

### Neuronas KNDy y control de GnRH | KNDy Neurons and GnRH Control
- Las neuronas **Kisspeptina/Neuroquinina B/Dinorfina (KNDy)** en el n\u00facleo arcuato son el "marcapasos" de la secreci\u00f3n puls\u00e1til de GnRH | **Kisspeptin/Neurokinin B/Dynorphin (KNDy)** neurons in the arcuate nucleus are the "pacemaker" of pulsatile GnRH secretion
- Neuroquinina B estimula la secreci\u00f3n de kisspeptina \u2192 activa neuronas GnRH | Neurokinin B stimulates kisspeptin secretion \u2192 activates GnRH neurons
- Dinorfina termina cada pulso (retroalimentaci\u00f3n negativa intraneural) | Dynorphin terminates each pulse (intraneural negative feedback)
- La frecuencia de pulsos de GnRH determina la proporci\u00f3n FSH:LH | GnRH pulse frequency determines the FSH:LH ratio
  - Pulsos lentos (\u007e cada 90 min): favorecen FSH | Slow pulses (~every 90 min): favor FSH
  - Pulsos r\u00e1pidos (\u007e cada 60 min): favorecen LH | Fast pulses (~every 60 min): favor LH

### Modelo de dos c\u00e9lulas-dos gonadotropinas | Two-Cell Two-Gonadotropin Model
1. **C\u00e9lulas de la teca** (estimuladas por LH): Colesterol \u2192 CYP11A1 \u2192 pregnenolona \u2192 CYP17 \u2192 androstenediona | **Theca cells** (LH-stimulated): Cholesterol \u2192 CYP11A1 \u2192 pregnenolone \u2192 CYP17 \u2192 androstenedione
2. **C\u00e9lulas de la granulosa** (estimuladas por FSH): Androstenediona \u2192 aromatasa (CYP19A1) \u2192 estradiol | **Granulosa cells** (FSH-stimulated): Androstenedione \u2192 aromatase (CYP19A1) \u2192 estradiol

### Mecanismo de la oleada de LH | LH Surge Mechanism
- Estradiol debe alcanzar \u2265200 pg/mL durante \u226550 horas | Estradiol must reach \u2265200 pg/mL for \u226550 hours
- Esto cambia la retroalimentaci\u00f3n de negativa a positiva en la hip\u00f3fisis | This switches feedback from negative to positive at the pituitary
- Aumento de receptores de GnRH en gonadotropos + efecto de autocebado de GnRH | Upregulation of GnRH receptors on gonadotropes + GnRH self-priming effect
- La oleada de LH dura 48-72 horas; la ovulaci\u00f3n ocurre 34-36 horas despu\u00e9s del inicio | The LH surge lasts 48-72 hours; ovulation occurs 34-36 hours after onset

## Evaluaci\u00f3n cl\u00ednica de trastornos menstruales | Clinical Evaluation of Menstrual Disorders

### Algoritmo de estudio para amenorrea secundaria | Secondary Amenorrhea Workup Algorithm
1. Descartar embarazo (\u03b2-hCG) | Rule out pregnancy (\u03b2-hCG)
2. TSH y prolactina | TSH and prolactin
3. Prueba de progesterona (acetato de medroxiprogesterona 10 mg x 10 d\u00edas) | Progesterone challenge test (medroxyprogesterone acetate 10 mg x 10 days)
   - Si hay sangrado: anovulaci\u00f3n (estr\u00f3geno adecuado) | If bleeding: anovulation (adequate estrogen)
   - Si no hay sangrado: verificar FSH | If no bleeding: check FSH
4. FSH elevada (\u226540 mUI/mL): falla ov\u00e1rica prematura | Elevated FSH (\u226540 mIU/mL): premature ovarian failure
5. FSH normal/baja: resonancia magn\u00e9tica de hip\u00f3fisis, considerar amenorrea hipotal\u00e1mica | Normal/low FSH: pituitary MRI, consider hypothalamic amenorrhea

### Manejo del SOP basado en fenotipo | PCOS Management by Phenotype

| Fenotipo | Phenotype | Manejo | Management |
|----------|-----------|--------|------------|
| Hiperandrogenismo + anovulaci\u00f3n | Hyperandrogenism + anovulation | Anticonceptivos combinados + metformina si hay resistencia a insulina | Combined OCP + metformin if insulin resistance |
| Hiperandrogenismo solo | Hyperandrogenism only | Antiandrog\u00e9nicos (espironolactona), cuidado de la piel | Antiandrogens (spironolactone), skin care |
| Deseo de fertilidad | Fertility desire | Letrozol como primera l\u00ednea para inducci\u00f3n de ovulaci\u00f3n | Letrozole as first-line for ovulation induction |

### Defecto de fase l\u00fatea | Luteal Phase Defect
- Producci\u00f3n inadecuada de progesterona (< 10 ng/mL en fase l\u00fatea media) | Inadequate progesterone production (< 10 ng/mL in mid-luteal phase)
- Fase l\u00fatea < 11 d\u00edas | Luteal phase < 11 days
- Asociado con infertilidad y p\u00e9rdida gestacional temprana | Associated with infertility and early pregnancy loss
- Tratamiento: suplementaci\u00f3n de progesterona, inducci\u00f3n de ovulaci\u00f3n | Treatment: progesterone supplementation, ovulation induction`,
      keyTerms: [
        {
          term: 'Neuronas KNDy | KNDy Neurons',
          definition:
            'Neuronas kisspeptina/neuroquinina B/dinorfina que regulan la secreci\u00f3n puls\u00e1til de GnRH. | Kisspeptin/neurokinin B/dynorphin neurons that regulate pulsatile GnRH secretion.',
        },
        {
          term: 'Aromatasa (CYP19A1) | Aromatase',
          definition:
            'Enzima en c\u00e9lulas de la granulosa que convierte andr\u00f3genos en estr\u00f3genos. | Enzyme in granulosa cells that converts androgens to estrogens.',
        },
        {
          term: 'Autocebado de GnRH | GnRH Self-Priming',
          definition:
            'Capacidad de la GnRH de aumentar sus propios receptores en la hip\u00f3fisis. | Ability of GnRH to upregulate its own receptors on the pituitary.',
        },
        {
          term: 'Prueba de progesterona | Progesterone Challenge',
          definition:
            'Prueba diagn\u00f3stica que eval\u00faa si hay suficiente estr\u00f3geno end\u00f3geno para estimular el endometrio. | Diagnostic test evaluating whether there is enough endogenous estrogen to stimulate the endometrium.',
        },
        {
          term: 'Letrozol | Letrozole',
          definition:
            'Inhibidor de aromatasa usado como primera l\u00ednea para inducci\u00f3n de ovulaci\u00f3n en SOP. | Aromatase inhibitor used as first-line for ovulation induction in PCOS.',
        },
      ],
      clinicalNotes:
        'En la evaluaci\u00f3n de amenorrea, siempre descartar embarazo primero. En SOP, el letrozol ha reemplazado al clomifeno como primera l\u00ednea para inducci\u00f3n de ovulaci\u00f3n seg\u00fan el ensayo cl\u00ednico PPCOS II del NICHD. | In amenorrhea workup, always rule out pregnancy first. In PCOS, letrozole has replaced clomiphene as first-line for ovulation induction per the NICHD PPCOS II trial.',
      examples: [
        'Una mujer de 28 a\u00f1os con amenorrea de 6 meses, IMC 18, y ejercicio excesivo: la evaluaci\u00f3n muestra FSH baja y LH baja \u2013 consistente con amenorrea hipotal\u00e1mica funcional. | A 28-year-old woman with 6-month amenorrhea, BMI 18, and excessive exercise: workup shows low FSH and low LH \u2013 consistent with functional hypothalamic amenorrhea.',
      ],
    },

    5: {
      level: 5,
      summary:
        'Protocolos cl\u00ednicos basados en evidencia para el manejo de trastornos menstruales incluyen algoritmos de evaluaci\u00f3n ACOG/FIGO, terapias endocrinas dirigidas, manejo quir\u00fargico de patolog\u00eda estructural, y consideraciones de medicina reproductiva avanzada. | Evidence-based clinical protocols for menstrual disorder management include ACOG/FIGO evaluation algorithms, targeted endocrine therapies, surgical management of structural pathology, and advanced reproductive medicine considerations.',
      explanation: `## Protocolos cl\u00ednicos OB/GYN | OB/GYN Clinical Protocols

### Evaluaci\u00f3n de Sangrado Uterino Anormal (ACOG Practice Bulletin No. 128, actualizado 2023) | AUB Evaluation (ACOG Practice Bulletin No. 128, updated 2023)

**Evaluaci\u00f3n inicial:** | **Initial Evaluation:**
1. Historia menstrual detallada: duraci\u00f3n, volumen (escala PBAC >100 = menorragia), regularidad, s\u00edntomas asociados | Detailed menstrual history: duration, volume (PBAC score >100 = menorrhagia), regularity, associated symptoms
2. Examen f\u00edsico: especulosc\u00f3pico y bimanual | Physical exam: speculum and bimanual
3. Laboratorios: \u03b2-hCG, CBC, TSH, prolactina, panel de coagulaci\u00f3n si < 18 a\u00f1os o sospecha | Labs: \u03b2-hCG, CBC, TSH, prolactin, coagulation panel if <18 years or suspicion
4. Ecograf\u00eda transvaginal: evaluaci\u00f3n de miomas, p\u00f3lipos, grosor endometrial | Transvaginal ultrasound: evaluation for fibroids, polyps, endometrial thickness
5. Biopsia endometrial: si > 45 a\u00f1os, o < 45 con factores de riesgo (obesidad, anovulaci\u00f3n cr\u00f3nica, falla de tratamiento) | Endometrial biopsy: if > 45 years, or < 45 with risk factors (obesity, chronic anovulation, treatment failure)

### Algoritmo de manejo FIGO para SUA | FIGO AUB Management Algorithm

**SUA agudo (hemorragia activa):** | **Acute AUB (active hemorrhage):**
- Estabilizaci\u00f3n hemodin\u00e1mica | Hemodynamic stabilization
- Estr\u00f3genos conjugados IV 25 mg cada 4-6 horas (m\u00e1ximo 6 dosis) | IV conjugated estrogens 25 mg every 4-6 hours (max 6 doses)
- Alternativa: anticonceptivos orales en dosis alta (norgestrel/etinilestradiol cada 6 horas) | Alternative: high-dose oral contraceptive (norgestrel/ethinylestradiol every 6 hours)
- \u00c1cido tranex\u00e1mico 1g IV/VO cada 8 horas | Tranexamic acid 1g IV/PO every 8 hours
- Considerar bal\u00f3n intrauterino (Foley 30 mL) si refractario | Consider intrauterine balloon (Foley 30 mL) if refractory
- Embolizaci\u00f3n arterial uterina o histerectom\u00eda como \u00faltimo recurso | Uterine artery embolization or hysterectomy as last resort

**SUA cr\u00f3nico - manejo m\u00e9dico:** | **Chronic AUB - medical management:**

| L\u00ednea | Line | Tratamiento | Treatment | Eficacia | Efficacy |
|--------|------|-------------|-----------|----------|----------|
| 1ra | 1st | DIU-LNG (Mirena) 52 mg | LNG-IUD 52 mg | Reducci\u00f3n 86-97% sangrado | 86-97% bleeding reduction |
| 2da | 2nd | \u00c1cido tranex\u00e1mico 1.3g TID d\u00edas 1-5 | Tranexamic acid 1.3g TID days 1-5 | Reducci\u00f3n 40-50% | 40-50% reduction |
| 2da | 2nd | AINEs (naproxeno 500 mg BID) | NSAIDs (naproxen 500 mg BID) | Reducci\u00f3n 20-40% | 20-40% reduction |
| 3ra | 3rd | Progest\u00e1genos c\u00edclicos o continuos | Cyclic or continuous progestogens | Variable | Variable |
| 3ra | 3rd | An\u00e1logos de GnRH (pre-quir\u00fargico) | GnRH analogues (pre-surgical) | Amenorrea en 2-3 meses | Amenorrhea in 2-3 months |

### Endometriosis - Clasificaci\u00f3n revisada ASRM y manejo | Endometriosis - Revised ASRM Classification & Management

**Estadificaci\u00f3n (laparosc\u00f3pica):** | **Staging (laparoscopic):**
- Estadio I (m\u00ednima): 1-5 puntos | Stage I (minimal): 1-5 points
- Estadio II (leve): 6-15 puntos | Stage II (mild): 6-15 points
- Estadio III (moderada): 16-40 puntos | Stage III (moderate): 16-40 points
- Estadio IV (severa): >40 puntos | Stage IV (severe): >40 points

**Manejo basado en evidencia:** | **Evidence-based management:**
- **Dolor sin deseo de fertilidad**: Anticonceptivos combinados continuos \u2192 dienogest 2 mg \u2192 an\u00e1logos de GnRH con add-back (noretindrona 5 mg/d) \u2192 laparoscop\u00eda | **Pain without fertility desire**: Continuous combined OCP \u2192 dienogest 2 mg \u2192 GnRH analogues with add-back (norethindrone 5 mg/d) \u2192 laparoscopy
- **Infertilidad**: Laparoscop\u00eda diagn\u00f3stica/terap\u00e9utica \u2192 FIV si estadio III-IV o falla de cirug\u00eda | **Infertility**: Diagnostic/therapeutic laparoscopy \u2192 IVF if stage III-IV or surgical failure
- **Elagolix** (antagonista GnRH oral): Aprobado FDA para dolor de endometriosis, dosis 150 mg diaria o 200 mg BID | **Elagolix** (oral GnRH antagonist): FDA-approved for endometriosis pain, dose 150 mg daily or 200 mg BID

### SOP - Gu\u00edas internacionales 2023 | PCOS - 2023 International Guidelines

**Evaluaci\u00f3n metab\u00f3lica recomendada:** | **Recommended metabolic evaluation:**
- OGTT 75g (no glucosa en ayunas sola) | 75g OGTT (not fasting glucose alone)
- Perfil lip\u00eddico | Lipid profile
- Presi\u00f3n arterial | Blood pressure
- Circunferencia de cintura e IMC | Waist circumference and BMI
- Tamizaje de depresi\u00f3n/ansiedad | Depression/anxiety screening

**Protecci\u00f3n endometrial en anovulaci\u00f3n cr\u00f3nica:** | **Endometrial protection in chronic anovulation:**
- Sin tratamiento, el endometrio no opuesto por progesterona tiene riesgo de hiperplasia y carcinoma | Without treatment, unopposed endometrium is at risk for hyperplasia and carcinoma
- Progest\u00e1genos c\u00edclicos m\u00ednimo cada 3 meses o anticonceptivos combinados | Cyclic progestogens at minimum every 3 months or combined OCP
- DIU-LNG si no hay deseo de fertilidad | LNG-IUD if no fertility desire`,
      keyTerms: [
        {
          term: 'PBAC (Pictorial Blood-loss Assessment Chart)',
          definition:
            'Herramienta validada para cuantificar p\u00e9rdida menstrual; puntaje >100 sugiere menorragia. | Validated tool to quantify menstrual loss; score >100 suggests menorrhagia.',
        },
        {
          term: 'DIU-LNG | LNG-IUD',
          definition:
            'Dispositivo intrauterino con levonorgestrel; primera l\u00ednea para SUA y protecci\u00f3n endometrial. | Levonorgestrel intrauterine device; first-line for AUB and endometrial protection.',
        },
        {
          term: 'Elagolix',
          definition:
            'Antagonista oral de GnRH aprobado para endometriosis y fibromas; permite dosificaci\u00f3n flexible sin efecto flare. | Oral GnRH antagonist approved for endometriosis and fibroids; allows flexible dosing without flare effect.',
        },
        {
          term: 'Clasificaci\u00f3n revisada ASRM | Revised ASRM Classification',
          definition:
            'Sistema de puntos para estadificar endometriosis basado en hallazgos quir\u00fargicos. | Point-based staging system for endometriosis based on surgical findings.',
        },
        {
          term: '\u00c1cido tranex\u00e1mico | Tranexamic Acid',
          definition:
            'Antifibrinol\u00edtico que reduce sangrado menstrual en 40-50%. | Antifibrinolytic that reduces menstrual bleeding by 40-50%.',
        },
      ],
      clinicalNotes:
        'Considerar siempre el riesgo de hiperplasia endometrial en pacientes con anovulaci\u00f3n cr\u00f3nica (SOP, obesidad). La biopsia endometrial est\u00e1 indicada en SUA persistente a pesar de tratamiento, especialmente en mayores de 45 a\u00f1os. El letrozol es superior al clomifeno para inducci\u00f3n de ovulaci\u00f3n en SOP (PPCOS II, NEJM 2014). | Always consider endometrial hyperplasia risk in patients with chronic anovulation (PCOS, obesity). Endometrial biopsy is indicated in persistent AUB despite treatment, especially in women over 45. Letrozole is superior to clomiphene for ovulation induction in PCOS (PPCOS II, NEJM 2014).',
    },
  },

  media: [],

  citations: [
    {
      id: 'cit-ciclo-speroff',
      type: 'textbook',
      title: 'Clinical Gynecologic Endocrinology and Infertility',
      authors: ['Speroff, L.', 'Fritz, M.A.'],
      source: 'Lippincott Williams & Wilkins',
      chapter: 'The Normal Menstrual Cycle',
      page: '187-232',
    },
    {
      id: 'cit-ciclo-acog-128',
      type: 'guideline',
      title: 'ACOG Practice Bulletin No. 128: Diagnosis of Abnormal Uterine Bleeding',
      authors: ['American College of Obstetricians and Gynecologists'],
      source: 'Obstetrics & Gynecology',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin',
    },
    {
      id: 'cit-ciclo-figo-palm',
      type: 'guideline',
      title: 'FIGO Classification System (PALM-COEIN) for Causes of Abnormal Uterine Bleeding',
      authors: ['Munro, M.G.', 'Critchley, H.O.', 'Fraser, I.S.'],
      source: 'International Journal of Gynecology & Obstetrics',
    },
    {
      id: 'cit-ciclo-pcos-2023',
      type: 'guideline',
      title: 'International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome 2023',
      source: 'Monash University / ESHRE / ASRM',
      url: 'https://www.monash.edu/medicine/sphpm/mchri/pcos/guideline',
    },
    {
      id: 'cit-ciclo-ppcos2',
      type: 'journal',
      title: 'Letrozole versus Clomiphene for Infertility in the Polycystic Ovary Syndrome',
      authors: ['Legro, R.S.'],
      source: 'New England Journal of Medicine',
      page: '371:119-129',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'womens-health-embarazo-pregnancy',
      targetType: 'process',
      relationship: 'related',
      label: 'Embarazo | Pregnancy',
    },
    {
      targetId: 'womens-health-menopausia-menopause',
      targetType: 'process',
      relationship: 'related',
      label: 'Menopausia | Menopause',
    },
    {
      targetId: 'womens-health-cancer-ginecologico',
      targetType: 'condition',
      relationship: 'see-also',
      label: 'C\u00e1ncer ginecol\u00f3gico | Gynecologic cancer',
    },
    {
      targetId: 'fertility-overview',
      targetType: 'topic',
      relationship: 'child',
      label: 'Fertilidad | Fertility',
    },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['gynecology', 'endocrinology', 'menstrual-health', 'womens-health'],
    keywords: [
      'ciclo menstrual',
      'menstrual cycle',
      'ovulaci\u00f3n',
      'ovulation',
      'SOP',
      'PCOS',
      'endometriosis',
      'sangrado uterino anormal',
      'abnormal uterine bleeding',
      'dismenorrea',
      'dysmenorrhea',
      'amenorrea',
      'amenorrhea',
    ],
    clinicalRelevance: 'high',
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
