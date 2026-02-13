import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const laborDelivery: WomensHealthContent = {
  id: 'labor-delivery',
  title: 'Labor and Delivery',
  category: 'Pregnancy',
  complexityLevels: [
    {
      level: 1,
      title: 'Understanding Labor and Delivery',
      content: `Labor is the process of giving birth. It happens when your uterus contracts and your cervix opens to let the baby out.

**The Three Stages of Labor:**

**Stage 1: Early and Active Labor**
- Cervix opens (dilates) to 10 cm
- Contractions get stronger and closer together
- Longest stage (first-time moms: 12-24 hours)
- Baby moves down into the birth canal

**Stage 2: Pushing and Birth**
- Cervix is fully open (10 cm)
- You push with each contraction
| Baby moves down and out |
- This stage can last 20 minutes to 3 hours |
- Baby is born!

**Stage 3: Delivering the Placenta**
- Baby is already born
| Uterus contracts to push out placenta |
| Takes 5-30 minutes |
| You might feel some cramping |

**Signs Labor is Starting:**
- Contractions that get regular and stronger
| Water breaks (fluid leaks or gushes) |
- "Bloody show" (mucus plug comes out) |
- Lower back pain or cramping |
| Nesting instinct (burst of energy) |

**True Labor vs. False Labor:**

| True Labor | False Labor (Braxton Hicks) |
|-----------|---------------------------|
| Contractions get stronger | Contractions stay the same |
| Get closer together | Stay irregular |
| Continue with movement | Often stop with activity |
| Feel stronger over time | Don't get stronger |

**When to Go to the Hospital:**
- Contractions every 5 minutes for 1 hour
- Water breaks
- Bleeding (not just bloody show)
| Baby not moving as much |
| Severe pain that doesn't go away |

**Remember:** Every labor is different. Trust your body and call your healthcare provider if you're unsure!
`,
      keyPoints: [
        'Labor has three stages: dilation, pushing/birth, and placenta delivery',
        'True labor contractions get stronger, longer, and closer together',
        'Go to hospital when contractions are 5 minutes apart for 1 hour',
        'Every labor is different',
      ],
      vocabulary: [
        { term: 'Contractions', definition: 'Tightening of the uterus during labor' },
        { term: 'Dilate', definition: 'Opening of the cervix' },
        { term: 'Placenta', definition: 'Organ that provides nutrients to baby during pregnancy' },
        { term: 'Bloody Show', definition: 'Mucus tinged with blood, a labor sign' }
      ],
      quiz: [
        {
          question: 'What is the standard guideline for when to go to the hospital in labor?',
          options: [
            'As soon as you have one contraction',
            'When contractions are 5 minutes apart for 1 hour',
            'When you lose your mucus plug',
            'Wait until water breaks',
          ],
          correctAnswer: 1,
          explanation: 'The general guideline is to go to the hospital when contractions are 5 minutes apart, lasting for about 1 minute, for at least 1 hour. However, always follow your healthcare provider\'s specific instructions.',
        },
        {
          question: 'What happens during the second stage of labor?',
          options: [
            'Cervix dilates to 10 cm',
            'Pushing and birth of the baby',
            'Delivery of the placenta',
            'Water breaks',
          ],
          correctAnswer: 1,
          explanation: 'The second stage of labor is the pushing stage when the cervix is fully dilated (10 cm) and the mother pushes to deliver the baby.',
        },
        {
          question: 'What is the main difference between an epidural and spinal block?',
          options: [
            'Epidural is a one-time injection, spinal is continuous',
            'Spinal is a one-time injection, epidural uses a catheter for continuous medication',
            'There is no difference',
            'Spinal provides no pain relief',
          ],
          correctAnswer: 1,
          explanation: 'A spinal block involves a one-time injection into the spinal fluid and provides rapid but shorter-lasting pain relief. An epidural uses a catheter placed in the epidural space for continuous medication.',
        }
      ]
    },
    {
      level: 2,
      title: 'Labor Stages and Pain Management',
      content: `Understanding the stages of labor and pain management options helps prepare for childbirth.

**Stage 1: Dilation (0-10 cm)**

**Phase 1: Early Labor (0-6 cm)**
- Contractions: mild to moderate
| Duration: 8-12 hours (first pregnancy) |
| Shorter for subsequent births |
- Cervix effaces (thins) and dilates |
- Typically at home
- Comfort measures: rest, hydration, distraction

**Phase 2: Active Labor (6-10 cm)**
- Contractions: stronger, closer (2-5 min apart)
| Duration: 4-8 hours (first pregnancy) |
- Cervix dilates more rapidly
- Transition (8-10 cm): intense, short contractions
- Time to go to hospital/birth center

**Stage 2: Fetal Descent and Birth**
- Begins at complete dilation (10 cm)
| Duration: 20 minutes to 3 hours |
| Contractions every 2-3 minutes |
- Pushing with contractions
- Perineum stretches
- Crowning: baby's head visible
- Delivery of head, shoulders, body

**Stage 3: Placental Separation**
- Begins after baby born
| Duration: 5-30 minutes |
- Placenta separates from uterine wall
- Small amount of blood
| Uterus firms up |

**Stage 4: Immediate Postpartum**
- First 1-2 hours after birth
| Monitoring: bleeding, uterine firmness |
| Baby bonding, breastfeeding initiation |

**Pain Management Options:**

**Non-Medical Options:**
- Breathing techniques
- Position changes
- Hydrotherapy (shower, tub)
- Massage
- Heat/cold therapy
- Birthing ball
- Fetal monitoring (reassurance)

**Medical Options:**

**Systemic Analgesia:**
- IV medications (morphine, fentanyl, nalbuphine)
| Take the edge off |
- Can cause drowsiness in mother/baby
| Given in active labor |

**Regional Anesthesia:**

**Epidural:**
- Catheter in epidural space
| Continuous medication |
- Very effective pain relief |
| Can slow labor slightly |
| May affect pushing ability |

**Spinal Block:**
- One-time injection
| Faster than epidural |
| Used for C-sections |
| Shorter duration |

**Combined Spinal-Epidural (CSE):**
- Rapid onset + continuous option
| "Walking epidural" |

**Nitrous Oxide:**
- Inhaled during contractions
| Self-administered |
| Minimal side effects |
| Not widely available in US |

**Monitoring During Labor:**

**Fetal Monitoring:**
- **Intermittent auscultation:**
  - Doppler to listen to heartbeat
  - Every 15-30 minutes in active labor

- **Continuous electronic monitoring:**
  - Internal or external monitors
  - High-risk pregnancies
  - Limits movement

**Maternal Monitoring:**
- Blood pressure every 1-2 hours
| Temperature periodically |
| IV fluids |
| Bladder care |

**Labor Positions:**
- Walking
- Sitting/birthing ball
| Squatting |
- Hands and knees |
- Side-lying
- Birthing stool
`,
      keyPoints: [
        'Stage 1 includes early labor (0-6 cm) and active labor (6-10 cm)',
        'Stage 2 is the pushing stage leading to birth',
        'Epidural anesthesia provides effective regional pain relief',
        'Various positions can facilitate labor progress',
      ],
      vocabulary: [
        { term: 'Effacement', definition: 'Thinning and shortening of the cervix' },
        { term: 'Transition', definition: 'Intense phase of labor (8-10 cm) before pushing' },
        { term: 'Crowning', definition: 'When baby\'s head becomes visible at vaginal opening' },
        { term: 'Perineum', definition: 'Area between vagina and anus' }
      ],
      quiz: [
        {
          question: 'What cervical dilation marks the beginning of the pushing stage?',
          options: [
            '6 cm',
            '8 cm',
            '10 cm',
            '12 cm',
          ],
          correctAnswer: 2,
          explanation: 'Complete cervical dilation (10 cm) marks the beginning of the second stage of labor, when pushing begins.',
        },
        {
          question: 'What is the main difference between an epidural and spinal block?',
          options: [
            'Epidural is a one-time injection, spinal is continuous',
            'Spinal is a one-time injection, epidural uses a catheter for continuous medication',
            'There is no difference',
            'Spinal provides no pain relief',
          ],
          correctAnswer: 1,
          explanation: 'A spinal block involves a one-time injection into the spinal fluid and provides rapid but shorter-lasting pain relief. An epidural uses a catheter placed in the epidural space for continuous medication.',
        }
      ]
    },
    {
      level: 3,
      title: 'Labor Physiology and Clinical Management',
      content: `The physiology of labor involves complex hormonal and mechanical processes that result in cervical dilation and fetal descent.

**Labor Initiation:**

**Hormonal Factors:**
- **Prostaglandins:** Ripen cervix, stimulate contractions
- **Oxytocin:** Stimulates uterine contractions
- **Progesterone withdrawal:** Removes uterine quiescence
- **Cortisol:** Fetal cortisol increases placental estrogen

**Mechanical Factors:**
- Uterine overdistension
| Pressure on cervix |
- Fetal signals (e.g., surfactant)

**Labor Progress Assessment:**

**Cervical Examination:**

| Parameter | Assessment |
|-----------|------------|
| Dilation | 0-10 cm (complete) |
| Effacement | 0-100% (complete) |
| Station | -3 to +3 (fetal position relative to ischial spines) |
| Position | Anterior, posterior, transverse |
| Consistency | Soft, medium, firm |
| Cervical rim | Anterior lip or residual rim |

**Friedman Curve (Normal Labor Progress):**

| Phase | Dilation | Rate (cm/hr) |
|-------|----------|--------------|
| Latent | 0-6 | 0.5-0.8 |
| Active | 6-10 | 1.2-1.5 |
| Second stage | 10 cm | Variable |

**Labor Abnormalities:**

**Prolonged Latent Phase:**
- >20 hours (nulliparous) or >14 hours (multiparous)
| Often false labor |
- Management: observation, rest, sedation

**Protraction Disorders:**
- Slower than expected labor progress
- Dilation <1.2 cm/hr (active phase)
- Descent <1 cm/hr (second stage)

**Arrest Disorders:**
- No cervical change for ≥2 hours
| No descent for ≥1 hour (second stage) |
| Requires intervention |

**Cardiotocography (CTG):**

**External Monitoring:**
- Tocotransducer: contractions
- Ultrasound: fetal heart rate

**Internal Monitoring:**
- Fetal scalp electrode (FSE): accurate FHR
| Intrauterine pressure catheter (IUPC): contraction strength |

**Fetal Heart Rate Patterns:**

**Baseline FHR:**
- Normal: 110-160 bpm
| Bradycardia: <110 bpm |
| Tachycardia: >160 bpm |

**Variability:**
- Moderate: 6-25 bpm (reassuring)
| Minimal: ≤5 bpm |
| Marked: >25 bpm |

**Accelerations:**
- Abrupt increase ≥15 bpm for ≥15 sec
| Indicates fetal well-being |
| Reassuring sign |

**Decelerations:**

| Type | Timing | Significance |
|------|--------|--------------|
| Early | Start/end with contraction | Head compression (benign) |
| Late | Start after, end after contraction | Uteroplacental insufficiency (concerning) |
| Variable | Unrelated to contractions | Cord compression |

**Category System:**

| Category | Interpretation | Action |
|----------|----------------|--------|
| I | Normal | Routine care |
| II | Indeterminate | Observation, evaluate |
| III | Abnormal | Immediate intervention |

**Amniotomy:**
- Artificial rupture of membranes
| May accelerate labor |
- Allows internal monitoring |
| Risks: cord prolapse, infection |

**Oxytocin Administration:**
- Synthetic hormone to stimulate contractions
| Start: 1-2 mU/min |
- Increase: 1-2 mU/min every 15-30 min |
| Maximum: typically 20 mU/min |
- Monitor for uterine tachysystole

**Operative Vaginal Delivery:**

**Indications:**
- Prolonged second stage
| Non-reassuring fetal status |
| Maternal exhaustion (rarely) |

**Instruments:**
- **Vacuum:** chignon on fetal head, less trauma to mother
| **Forceps:** direct traction, more traumatic |

**Requirements:**
- Complete dilation
| Ruptured membranes |
| Known fetal position |
| Adequate anesthesia |
| Station at least +2
| Pelvis adequate |
`,
      keyPoints: [
        'Normal labor progresses at ~1.2 cm/hr in active phase',
        'Category I FHR tracing is normal, Category III is abnormal requiring intervention',
        'Oxytocin requires careful monitoring for hyperstimulation',
        'Operative delivery requires specific prerequisites',
      ],
      vocabulary: [
        { term: 'Tachysystole', definition: 'More than 5 contractions in 10 minutes averaged over 30 minutes' },
        { term: 'FSE', definition: 'Fetal Scalp Electrode - internal fetal heart rate monitor' },
        { term: 'IUPC', definition: 'Intrauterine Pressure Catheter - measures contraction strength' },
        { term: 'Chignon', definition: 'Temporary swelling from vacuum extraction' }
      ],
      quiz: [
        {
          question: 'What is the normal rate of cervical dilation in the active phase of labor?',
          options: [
            '0.5-0.8 cm/hour',
            '1.2-1.5 cm/hour',
            '2-3 cm/hour',
            '4-5 cm/hour',
          ],
          correctAnswer: 1,
          explanation: 'The active phase of labor normally progresses at a rate of 1.2-1.5 cm per hour. Slower progress may indicate a protraction disorder requiring evaluation.',
        },
        {
          question: 'What type of deceleration is associated with umbilical cord compression?',
          options: [
            'Early decelerations',
            'Late decelerations',
            'Variable decelerations',
            'Prolonged decelerations',
          ],
          correctAnswer: 2,
          explanation: 'Variable decelerations are characterized by abrupt decreases in fetal heart rate that vary in timing, shape, and duration. They are typically caused by umbilical cord compression.',
        }
      ]
    },
    {
      level: 4,
      title: 'Complicated Labor and Delivery',
      content: `Labor complications require prompt recognition and appropriate intervention to optimize maternal and fetal outcomes.

**Labor Dystocia:**

**Definition:**
- Abnormal labor progress requiring intervention
- Affects 10-20% of labors

**Types:**
- **Prolonged latent phase:** >20 hours (nulliparous) or >14 hours (multiparous)
| **Protraction:** Slower than normal progress |
- **Arrest:** Complete cessation of progress

**Causes:**
- **Power (uterine contractility):** hypotonic contractions
| **Passenger (fetal):** size, position, anomaly |
| **Passage (pelvis):** size, shape |
- **Psychosocial:** anxiety, fear |

**Management:**

**Prolonged Latent Phase:**
- Often false labor
| Therapeutic rest (morphine, hydration) |
- Ambulation
- Reassess after rest

**Protraction/Arrest Disorders:**
- Rule out contraindications to vaginal delivery
- Labor stimulation (oxytocin)
| Amniotomy |
- Position changes |
- Consider operative delivery if no progress

**Shoulder Dystocia:**

**Definition:**
- Failure of fetal shoulders to deliver after head
| Obstetric emergency |
- Incidence: 0.2-3%

**Risk Factors:**
- Macrosomia (>4000 g)
| Maternal diabetes |
- Obesity
- Prolonged second stage
| Operative vaginal delivery |

**Recognition:**
- "Turtle sign" - head retracts against perineum
| Difficulty delivering anterior shoulder |
- No body delivery with gentle traction

**Management (HELPERR):**
- **H**elp (call for assistance)
| **E**valuate (for episiotomy) |
| **L**egs (McRoberts maneuver) |
- **P**ressure (suprapubic pressure)
| **E**nter maneuvers (internal rotation) |
- **R**oll over (all-fours position)
| **R**emove posterior arm |

**Fetal Complications:**
- Brachial plexus injury
| Hypoxic-ischemic encephalopathy |
- Clavicle fracture
- Death (rare)

**Uterine Rupture:**

**Risk Factors:**
- Prior cesarean delivery (transverse incision: 0.5-1%)
| Tachysystole with oxytocin |
| Trauma (abdominal) |
- Induction/augmentation
| Grand multiparity |

**Signs:**
- Fetal heart rate abnormalities (bradycardia)
| Loss of fetal station |
| Abdominal pain |
| Vaginal bleeding |
- Loss of uterine tone

**Management:**
- Immediate delivery (usually emergency C-section)
| Fluid resuscitation |
| Blood products |
- Possible hysterectomy

**Umbilical Cord Prolapse:**

**Definition:**
- Umbilical cord precedes fetal presenting part
| Obstetric emergency |
- Incidence: 0.1-0.6%

**Risk Factors:**
- Malpresentation (breech, transverse)
| Prematurity |
| Polyhydramnios |
- Unengaged presenting part
| Artificial rupture of membranes (high head)

**Management:**
- Relieve cord compression
| Manual elevation of presenting part |
- Emergency C-section
| Avoid palpating cord (causes vasospasm)
- Oxygen, position changes
| Prepare for neonatal resuscitation |

**Amniotic Fluid Embolism:**

**Definition:**
- Amniotic fluid enters maternal circulation
| Rare, catastrophic |
- Incidence: 1:40,000

**Presentation:**
- Sudden hypotension
| Hypoxia |
| Coagulopathy |
- Cardiac arrest

**Management:**
- Resuscitative measures
| Oxygen, ventilation |
| Fluid resuscitation |
| Blood products |
- Consider perimortem C-section
- Multidisciplinary support

**Postpartum Hemorrhage (PPH):**

**Definition:**
- Blood loss ≥1000 mL or signs of hypovolemia
| Occurs in 3-5% of deliveries |
- Leading cause of maternal mortality worldwide

**Causes (4 T's):**
- **T**one: uterine atony (most common, 80%)
| **T**rauma: lacerations, rupture |
| **T**issue: retained placenta |
| **T**hrombin: coagulopathy

**Management:**
- Uterine massage
| Oxytocin, ergotamine, prostaglandins |
| Tranexamic acid |
- Balloon tamponade (Bakri)
- Uterine artery embolization
| B-Lynch suture |
- Hysterectomy (refractory)

**Operative Vaginal Delivery:**

**Indications:**
- Prolonged second stage
| Non-reassuring fetal status |
| Maternal medical conditions |

**Vacuum vs. Forceps:**

| Feature | Vacuum | Forceps |
|---------|--------|---------|
| Success rate | Slightly lower | Higher |
| Maternal trauma | Less | More |
| Fetal trauma | More (cephalohematoma) | Less |
| Anesthesia | Less | More |
| Training | Easier | More difficult |

**Complications:**
- **Maternal:** perineal lacerations, bleeding
| **Fetal:** scalp trauma, facial nerve injury, fractures |
`,
      keyPoints: [
        'Shoulder dystocia management follows the HELPERR mnemonic',
        'Uterine rupture requires immediate emergency delivery',
        'Cord prolapse is managed by relieving compression and emergency delivery',
        'PPH is most commonly caused by uterine atony',
      ],
      vocabulary: [
        { term: 'Dystocia', definition: 'Difficult or abnormal labor' },
        { term: 'McRoberts Maneuver', definition: 'Sharp flexion of maternal thighs for shoulder dystocia' },
        { term: 'Bakri Balloon', definition: 'Intrauterine balloon for postpartum hemorrhage control' },
        { term: 'Atony', definition: 'Lack of uterine tone after delivery' }
      ],
      quiz: [
        {
          question: 'What is the most common cause of postpartum hemorrhage?',
          options: [
            'Genital tract lacerations',
            'Uterine atony',
            'Retained placenta',
            'Coagulopathy',
          ],
          correctAnswer: 1,
          explanation: 'Uterine atony (failure of the uterus to contract adequately after delivery) is the most common cause of postpartum hemorrhage, accounting for approximately 80% of cases.',
        },
        {
          question: 'What is the first step in managing umbilical cord prolapse?',
          options: [
            'Immediate cord clamping',
            'Relieve cord compression manually and prepare for emergency delivery',
            'Administer oxytocin',
            'Wait for spontaneous delivery',
          ],
          correctAnswer: 1,
          explanation: 'Umbilical cord prolapse requires immediate manual elevation of the presenting part off the cord to relieve compression, followed by emergency cesarean delivery. Time is critical to prevent fetal hypoxia.',
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced Labor Management and Decision-Making',
      content: `Complex labor scenarios require sophisticated assessment, risk stratification, and individualized management strategies.

**Fetal Heart Rate Analysis:**

**Advanced Pattern Recognition:**

**Sinusoidal Pattern:**
- Smooth, sine wave-like FHR tracing
| Fixed variability |
- No accelerations/decelerations
| Pathologic |
- Associated with fetal anemia, hypoxia

**Prolonged Deceleration:**
- ≥2 minutes duration but <10 minutes
| If ≥10 minutes = baseline change |
- Requires immediate evaluation
- May indicate cord compression, placental abruption

**Amplitude Integrated EEG (aEEG):**
- Background brain activity
| Sleep-wake cycles |
| Neuroprognostication in compromised infants |

**Academic FHR Interpretation:**

**Category II Sub-classification:**
- Majority of tracings (80%)
| Wide spectrum |
- Clinical context crucial
- May warrant closer monitoring

**Category III Characteristics:**
- Absent variability with recurrent late or variable decelerations
| Bradycardia |
| Sinusoidal pattern |
- Immediate intervention required

**Cesarean Delivery Decision-Making:**

**Indications:**

**Non-reassuring fetal status:**
- Category III tracing
- Persistent Category II without improvement
| Acidosis confirmed (scalp pH <7.20) |

**Labor arrest:**
- Arrest of dilation: ≥2 hours despite adequate contractions
| Arrest of descent: ≥1 hour in second stage |
- Adequate trial of labor (both phases)

**Malpresentation:**
- Breech presentation
| Transverse lie |
- Face or brow presentation (persistent)

**Cord presentation/prolapse:**
- Emergency indication

**Placental abruption:**
- Significant bleeding with fetal distress

**Cesarean Techniques:**

**Low Transverse (Kerr):**
- Standard approach
| Bladder flap reflection |
- Low rupture risk in future pregnancies (0.5-1%)

**Low Vertical (Kronig):**
- Indicated for:
  - Transverse lie
  - Some contractions malpositions
  - Prior myomectomy

**Classical:**
- Upper uterine segment
| Indicated for: |
  - Very preterm |
  - Some placenta previa |
  - Dense adhesions |
- High rupture risk (4-9%) in future pregnancies

**Operative Vaginal Delivery:**

**Advanced Indications:**

**Maternal:**
- Avoiding maternal expulsive efforts (cardiac disease)
| Exhaustion (relative) |

**Fetal:**
- Non-reassuring FHR pattern
| Second stage >3 hours (nulliparous) or >2 hours (multiparous) with epidural |

**Vacuum Extraction:**

**Contraindications:**
- Gestational age <34 weeks
| Face or brow presentation |
| Unknown fetal position |
| Estimated fetal weight >4000 g

**Procedure:**
- Proper placement on flexion point
| Maximum 3 pop-offs or 3 contractions |
| Traction limited to contractions |
- No rotation >45 degrees

**Forceps Delivery:**

**Classifications:**

| Outlet | Low | Mid | High |
|--------|-----|-----|------|
| Station | +2 | +2 | +1 | -2 |
| Rotation | ≤45° | ≤45° | >45° | any |
| Skipped | No | No | No | Yes |

**Breech Delivery:**

**Types:**
- **Frank:** Flexed hips, extended legs (most common, 50-70%)
| **Complete:** Flexed hips and flexed knees |
- **Footling:** One or both feet presenting

**Vaginal Breech Criteria:**
- Frank breech presentation
| Estimated fetal weight 2500-4000 g |
- No hyperextended fetal head
| Adequate pelvis |
| Experienced provider |

**Technique:**
- Assisted breech (most common)
| Total breech (rare) |
- Avoid excessive traction
| Head entrapment risk |

**Twin Delivery:**

**Mode of Delivery:**

**Vertex-Vertex:**
| Vaginal delivery acceptable |

**Vertex-Nonvertex:**
| Cesarean often recommended |

**Both Nonvertex:|
| Cesarean delivery |

**Delivery Process:**
- First twin: standard vaginal delivery
| Second twin: |
  - Confirm position (ultrasound) |
  - Consider version if breech |
  - Deliver within 20-30 minutes |
  - Monitor continuously between deliveries |

**Postpartum Sterilization:**

**Timing:**
- Immediately postpartum (within 24 hours)
| Via minilaparotomy |
- Easier surgical access

**Advantages:**
- Convenient
| Already hospitalized |
- High efficacy

**Disadvantages:**
- Regret risk if decision made under stress |
| Higher failure rate if placed >7 days postpartum |

**Decision Counseling:**
- Discuss permanence
| Ensure patient decision is voluntary |
- Document informed consent |
`,
      keyPoints: [
        'Category III FHR tracings require immediate intervention',
        'Cesarean decision requires balancing maternal and fetal risks',
        'Operative vaginal delivery has specific station and rotation criteria',
        'Breech vaginal delivery requires strict criteria and experienced provider',
      ],
      vocabulary: [
        { term: 'Frank Breech', definition: 'Breech presentation with flexed hips and extended legs' },
        { term: 'Outlet Forceps', definition: 'Forceps applied at station +2 or below, minimal rotation' },
        { term: 'Bladder Flap', definition: 'Reflection of bladder during cesarean to enter uterus' },
        { term: 'Puerpera', definition: 'Woman who has recently given birth' }
      ],
      quiz: [
        {
          question: 'What defines a Category III fetal heart rate tracing?',
          options: [
          'Normal baseline with moderate variability',
          'Sinusoidal pattern or absent variability with recurrent late/variable decelerations',
          'Variable decelerations with normal variability',
          'Minimal variability with accelerations present',
          ],
          correctAnswer: 1,
          explanation: 'Category III tracings are abnormal and include sinusoidal pattern or absent variability with recurrent late or variable decelerations without accelerations, indicating possible fetal acidemia and requiring immediate intervention.',
        },
        {
          question: 'What is the maximum number of contractions or pop-offs allowed for vacuum extraction?',
          options: [
          'Unlimited',
          '2 contractions or pop-offs',
          '3 contractions or pop-offs',
          '5 contractions or pop-offs',
          ],
          correctAnswer: 2,
          explanation: 'Vacuum extraction should be limited to a maximum of 3 pop-offs or 3 contractions, whichever comes first. If delivery is not achieved within this limit, conversion to cesarean delivery should be considered.',
        }
      ]
    }
  ],
  relatedTopics: [
    'pregnancy-overview',
    'postpartum-care',
    'pregnancy-complications',
  ],
  lastUpdated: '2025-01-25',
  references: [
    'ACOG Practice Bulletin No. 227',
    'ACOG Practice Bulletin No. 166',
    'Williams Obstetrics 26th Edition',
  ]
};
