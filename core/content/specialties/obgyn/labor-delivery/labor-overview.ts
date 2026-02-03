/**
 * Labor Overview
 *
 * Comprehensive overview of labor and delivery including the physiological
 * processes, stages, monitoring, and clinical management.
 */

import { EducationalContent } from '../../../types';

export const laborOverview: EducationalContent = {
  id: 'obgyn-labor-overview',
  type: 'process',
  name: 'Labor Overview',
  alternateNames: ['Childbirth', 'Parturition', 'Delivery'],

  levels: {
    1: {
      level: 1,
      summary: 'Labor is the process of giving birth, where the baby moves from the uterus through the birth canal.',
      explanation: `Labor is how a baby is born. It happens when the body is ready to deliver the baby.

**What happens during labor:**
- The uterus (womb) squeezes to push the baby out
- These squeezes are called contractions
- The cervix (opening of the uterus) opens wider
- The baby moves down and out through the vagina

**Signs that labor is starting:**
- Regular contractions that get stronger and closer together
- Water breaking (fluid leaking from the birth sac)
- Backache that doesn't go away
- Mucus plug coming out (thick mucus that blocks the cervix)

**How long does labor take?**
- First babies usually take longer (12-18 hours)
- Later babies are often faster (6-8 hours)
- Every birth is different!`,
      keyTerms: [
        { term: 'labor', definition: 'The process of giving birth to a baby' },
        { term: 'contractions', definition: 'When the uterus squeezes to help push the baby out' },
        { term: 'cervix', definition: 'The opening at the bottom of the uterus that opens during labor' },
      ],
      analogies: [
        'Labor contractions are like waves at the beach - they come and go, getting stronger and closer together.',
        'The cervix opening is like a turtleneck sweater stretching to let your head through.',
      ],
      examples: [
        'A first-time mom might have contractions 5 minutes apart for several hours before the cervix fully opens.',
        'When contractions are 3-5 minutes apart and lasting 45-60 seconds, it is usually time to go to the hospital.',
      ],
    },
    2: {
      level: 2,
      summary: 'Labor involves progressive cervical dilation and effacement through regular uterine contractions, culminating in delivery of the fetus and placenta.',
      explanation: `**What is Labor?**

Labor is the physiological process by which the fetus, placenta, and membranes are expelled from the uterus. It involves:
- Progressive uterine contractions
- Cervical changes (dilation and effacement)
- Descent of the fetus through the birth canal

**Three Stages of Labor:**

**Stage 1: Cervical Dilation**
- Latent phase: 0-6 cm dilation (can take many hours)
- Active phase: 6-10 cm dilation (faster, about 1 cm/hour)

**Stage 2: Delivery of Baby**
- From full dilation (10 cm) until baby is born
- Pushing phase
- Usually 1-3 hours for first-time moms

**Stage 3: Delivery of Placenta**
- From baby's birth until placenta delivered
- Usually 5-30 minutes

**Important Monitoring:**
- Fetal heart rate
- Contraction frequency and strength
- Cervical progress
- Mother's vital signs`,
      keyTerms: [
        { term: 'dilation', definition: 'The opening of the cervix, measured in centimeters (0-10 cm)', pronunciation: 'die-LAY-shun' },
        { term: 'effacement', definition: 'The thinning and shortening of the cervix during labor', pronunciation: 'eh-FACE-ment' },
        { term: 'fetal heart rate', definition: 'The baby\'s heartbeat, normally 110-160 beats per minute' },
      ],
      analogies: [
        'Effacement is like a thick donut becoming a thin pancake - the cervix thins from about 4 cm thick to paper thin.',
      ],
    },
    3: {
      level: 3,
      summary: 'Labor encompasses the coordinated physiological processes of uterine contractility, cervical remodeling, and fetal descent, divided into three distinct stages with specific clinical parameters and management considerations.',
      explanation: `**Physiology of Labor Onset:**

Labor initiation involves complex hormonal interplay:
- Decreased progesterone activity (functional withdrawal)
- Increased estrogen/progesterone ratio
- Prostaglandin release (PGE2, PGF2α)
- Oxytocin receptor upregulation
- Gap junction formation (connexin-43)

**Stage 1: Cervical Dilation**

*Latent Phase:*
- Cervix 0-6 cm
- Irregular contractions
- Duration highly variable (nullipara: 6-20 hours)
- Cervical effacement and early dilation

*Active Phase:*
- Cervix 6-10 cm
- Regular, progressive contractions (q2-3 min)
- Expected dilation: ≥1 cm/hour
- Includes transition (8-10 cm): most intense

**Stage 2: Expulsion**
- Full dilation to delivery
- Passive descent + active pushing
- Duration: Nullipara up to 3 hours, multipara up to 2 hours
- Cardinal movements of labor

**Stage 3: Placental Delivery**
- Signs of placental separation:
  - Gush of blood
  - Cord lengthening
  - Uterine fundal rise
- Active management reduces hemorrhage risk

**Cardinal Movements:**
1. Engagement
2. Descent
3. Flexion
4. Internal rotation
5. Extension
6. External rotation (restitution)
7. Expulsion`,
      keyTerms: [
        { term: 'cardinal movements', definition: 'The series of positional changes the fetus undergoes during passage through the birth canal' },
        { term: 'nullipara', definition: 'A woman who has never given birth', pronunciation: 'null-IP-a-ra' },
        { term: 'multipara', definition: 'A woman who has given birth two or more times', pronunciation: 'mult-IP-a-ra' },
        { term: 'station', definition: 'Descent of presenting part relative to ischial spines (-5 to +5)' },
      ],
      clinicalNotes: 'The Friedman curve has been updated by contemporary labor curves (Zhang et al.), which show that labor progress, especially in the latent phase, may be slower than previously expected, particularly in nulliparous women with epidural analgesia.',
    },
    4: {
      level: 4,
      summary: 'Labor involves the integration of myometrial contractile mechanisms, cervical biochemical remodeling, and the mechanical processes of fetal descent, with contemporary evidence guiding intervention thresholds and management protocols.',
      explanation: `**Molecular Mechanisms of Labor:**

**Myometrial Activation:**
- Gap junction formation: Connexin-43 upregulation allows synchronized contractions
- Oxytocin receptors: 100-200 fold increase by term
- Prostaglandin receptors: FP and EP receptors mediate contractility
- Calcium signaling: Myosin light chain kinase activation

**Cervical Remodeling Phases:**
1. *Softening* (weeks before labor): Increased hyaluronan, decreased collagen cross-linking
2. *Ripening* (days-hours before): Neutrophil infiltration, collagenase activity
3. *Dilation* (during labor): Mechanical stretching, further degradation
4. *Repair* (postpartum): Rapid reconstitution

**Contemporary Labor Curves:**

*Zhang et al. (2010) findings:*
- 6 cm is new threshold for active labor (not 4 cm)
- Slower expected dilation rates
- Longer second stage acceptable with reassuring fetal status
- Epidural analgesia prolongs labor

**Fetal Monitoring:**

*Category I (Normal):*
- Baseline 110-160 bpm
- Moderate variability
- Accelerations present
- No late or variable decelerations

*Category II (Indeterminate):*
- Tachycardia/bradycardia
- Minimal/marked variability
- Variable decelerations with characteristics

*Category III (Abnormal):*
- Absent variability with recurrent late decelerations
- Absent variability with recurrent variable decelerations
- Sinusoidal pattern

**Labor Dystocia:**
- First stage arrest: No cervical change for ≥6 hours with adequate contractions
- Second stage arrest: No descent for ≥3 hours (nullipara with epidural)
- Management: Oxytocin augmentation, amniotomy, cesarean delivery`,
      keyTerms: [
        { term: 'labor dystocia', definition: 'Abnormally slow labor progress that may require intervention' },
        { term: 'connexin-43', definition: 'Gap junction protein that enables electrical coupling between myometrial cells' },
        { term: 'Montevideo units', definition: 'Measurement of uterine activity (contraction intensity × frequency); adequate labor ≥200 MVU' },
      ],
      clinicalNotes: 'ACOG recommends allowing longer labor before diagnosing arrest disorders. Active phase should not be diagnosed before 6 cm. Cesarean for failed induction should not be performed before 24 hours of oxytocin with ruptured membranes.',
    },
    5: {
      level: 5,
      summary: 'Labor management requires integration of contemporary evidence on labor progression, fetal surveillance interpretation, and risk stratification to optimize maternal and neonatal outcomes while minimizing unnecessary interventions.',
      explanation: `**Current Evidence and Guidelines:**

**Safe Prevention of Primary Cesarean (ACOG/SMFM):**
- Prolonged latent phase not an indication for cesarean
- Active phase: 6 cm threshold
- Adequate time in second stage (minimum 2-3 hours pushing)
- Failed induction: oxytocin for ≥12-18 hours after ROM before cesarean

**Intermittent Auscultation vs. Continuous EFM:**
- IA appropriate for low-risk labor
- Cochrane reviews: Continuous EFM increases cesarean rate without improving neonatal outcomes
- Consider in context of institutional resources and patient preferences

**Intrapartum Resuscitation:**
- Category II patterns: Position changes, IV fluids, oxygen, reduce oxytocin
- Category III patterns: Immediate delivery if unresolved
- Amnioinfusion for variable decelerations
- Terbutaline for tachysystole

**Partogram Use:**
- WHO recommends for labor monitoring
- Alert and action lines guide intervention
- Variable implementation in high-resource settings

**Epidural Analgesia Considerations:**
- Does not increase cesarean rate (meta-analyses)
- May prolong second stage
- Delayed pushing protocol may reduce operative delivery

**Oxytocin Protocols:**
- Low-dose (1-2 mU/min, increase q30-40 min)
- High-dose (4-6 mU/min, increase q15-40 min)
- High-dose may shorten labor but increase hyperstimulation

**Operative Vaginal Delivery:**
- Vacuum vs. forceps: Similar success rates
- Vacuum: Higher neonatal scalp trauma
- Forceps: Higher maternal perineal trauma
- Sequential use increases complication risk

**Quality Metrics:**
- NTSV cesarean rate (Nulliparous, Term, Singleton, Vertex)
- Healthy People 2030 goal: 23.6%
- Hospital variation significant
- QI interventions: Labor support, standardized protocols, peer review`,
      keyTerms: [
        { term: 'NTSV cesarean rate', definition: 'Primary cesarean rate in low-risk nulliparous women with singleton term vertex pregnancies; key quality metric' },
        { term: 'tachysystole', definition: 'More than 5 contractions in 10 minutes; may cause fetal hypoxia' },
        { term: 'amnioinfusion', definition: 'Infusion of saline into amniotic cavity to relieve cord compression or dilute meconium' },
      ],
      clinicalNotes: 'Contemporary practice emphasizes patience in labor to reduce cesarean rates. The ARRIVE trial showed elective induction at 39 weeks in low-risk nulliparas reduced cesarean rates, challenging prior assumptions. Shared decision-making regarding induction, pain management, and monitoring intensity is essential.',
    },
  },

  media: [
    {
      id: 'labor-stages-diagram',
      type: 'diagram',
      filename: 'labor-stages.svg',
      title: 'Stages of Labor',
      description: 'Visual representation of the three stages of labor with cervical dilation and fetal descent',
    },
  ],

  citations: [
    {
      id: 'acog-labor-management',
      type: 'article',
      title: 'Safe Prevention of the Primary Cesarean Delivery',
      source: 'ACOG Obstetric Care Consensus No. 1',
      authors: ['American College of Obstetricians and Gynecologists'],
      url: 'https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2014/03/safe-prevention-of-the-primary-cesarean-delivery',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-labor-stages-of-labor', targetType: 'process', relationship: 'child', label: 'Stages of Labor' },
    { targetId: 'obgyn-labor-complications', targetType: 'condition', relationship: 'related', label: 'Labor Complications' },
    { targetId: 'obgyn-pregnancy-third-trimester', targetType: 'process', relationship: 'parent', label: 'Third Trimester' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'labor', 'delivery'],
    keywords: ['labor', 'childbirth', 'parturition', 'delivery', 'contractions'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
