/**
 * Stages of Labor
 *
 * Detailed breakdown of the three stages of labor including timing,
 * physiological changes, and clinical management at each stage.
 */

import { EducationalContent } from '../../../types';

export const stagesOfLabor: EducationalContent = {
  id: 'obgyn-labor-stages-of-labor',
  type: 'process',
  name: 'Stages of Labor',
  alternateNames: ['Labor Phases', 'Labor Progression'],

  levels: {
    1: {
      level: 1,
      summary: 'Labor has three stages: opening the cervix, delivering the baby, and delivering the placenta.',
      explanation: `Labor happens in three stages, like a journey with three main parts.

**Stage 1: Opening Up**
- The longest stage
- Contractions help the cervix (opening to the uterus) open from closed to 10 cm
- Like a doorway slowly getting wider
- Can take many hours (6-20 hours for first babies)

**Stage 2: Baby Arrives**
- Pushing stage!
- The cervix is fully open
- Mom pushes with each contraction
- Baby moves down and is born
- Usually 30 minutes to 3 hours

**Stage 3: Placenta Comes Out**
- Shortest stage (5-30 minutes)
- After baby is born, the placenta (afterbirth) detaches
- A few more pushes and it comes out
- Then recovery begins!`,
      keyTerms: [
        { term: 'stage', definition: 'A part or phase of labor' },
        { term: 'pushing', definition: 'When the mother bears down to help move the baby out' },
        { term: 'placenta', definition: 'The organ that fed the baby during pregnancy; comes out after birth' },
      ],
      analogies: [
        'The three stages are like baking a cake: Stage 1 is preheating the oven (preparation), Stage 2 is the actual baking (main event), Stage 3 is taking it out (finishing up).',
      ],
      examples: [
        'A mom might spend 12 hours in Stage 1, 1 hour in Stage 2, and 15 minutes in Stage 3.',
      ],
    },
    2: {
      level: 2,
      summary: 'Labor consists of three stages: cervical dilation (Stage 1), fetal expulsion (Stage 2), and placental delivery (Stage 3), each with distinct physiological processes and clinical management.',
      explanation: `**Stage 1: Cervical Dilation**

The longest stage, divided into two phases:

*Latent Phase:*
- Cervix dilates from 0 to 6 cm
- Contractions are irregular, mild to moderate
- May take 6-12 hours (longer for first babies)
- Woman can often remain at home

*Active Phase:*
- Cervix dilates from 6 to 10 cm
- Contractions regular, stronger, q2-3 minutes
- Dilation typically 1 cm per hour or more
- Usually in the hospital with monitoring

**Stage 2: Delivery of the Baby**

- Begins at full dilation (10 cm)
- Ends with delivery of the baby
- Mother actively pushes with contractions
- Baby descends through birth canal
- Duration: 30 min to 3 hours

**Stage 3: Delivery of the Placenta**

- Begins after baby's birth
- Ends with placental delivery
- Signs of separation: gush of blood, cord lengthening
- Usually 5-30 minutes
- Active management (oxytocin) helps reduce bleeding`,
      keyTerms: [
        { term: 'latent phase', definition: 'Early Stage 1 labor; cervix dilates slowly from 0-6 cm' },
        { term: 'active phase', definition: 'Later Stage 1 labor; cervix dilates faster from 6-10 cm' },
        { term: 'full dilation', definition: 'When the cervix reaches 10 cm and Stage 2 can begin' },
      ],
    },
    3: {
      level: 3,
      summary: 'The three stages of labor represent distinct physiological processes: Stage 1 (cervical effacement and dilation), Stage 2 (fetal descent and expulsion), and Stage 3 (placental separation and delivery), with specific clinical parameters defining normal progression.',
      explanation: `**Stage 1: Cervical Changes**

*Latent Phase (0-6 cm):*
- Duration: Highly variable; up to 20 hours acceptable
- Contractions: Irregular, mild (25-40 mmHg)
- Cervical effacement progresses
- Management: Supportive care, hydration, rest

*Active Phase (6-10 cm):*
- Duration: Varies by parity and epidural status
- Contractions: Regular, q2-3 min, 40-60 mmHg, 60-90 sec
- Expected progress: ≥1 cm/hour (contemporary data suggest slower is acceptable)
- Transition (8-10 cm): Most intense; nausea, rectal pressure common

**Stage 2: Expulsion**

*Passive Phase:*
- Fetal descent through birth canal
- May delay pushing if no urge (especially with epidural)
- Laboring down reduces maternal exhaustion

*Active Phase (Pushing):*
- Mother actively pushes with contractions
- Open vs. closed glottis techniques
- Duration limits:
  - Nullipara: 3 hours with epidural, 2 without
  - Multipara: 2 hours with epidural, 1 without

*Cardinal Movements:*
1. Engagement: Biparietal diameter enters pelvic inlet
2. Descent: Continuous throughout
3. Flexion: Chin to chest (smallest diameter)
4. Internal rotation: Occiput rotates anterior
5. Extension: Head extends under symphysis
6. External rotation: Head realigns with shoulders
7. Expulsion: Anterior then posterior shoulder

**Stage 3: Placental Stage**

*Mechanisms of Separation:*
- Uterine contraction decreases surface area
- Placenta shears from decidua basalis
- Retroplacental hematoma forms

*Signs of Separation:*
- Gush of blood
- Cord lengthening
- Uterine fundus rises and becomes globular

*Active Management:*
- Oxytocin administration
- Controlled cord traction
- Uterine massage
- Reduces PPH risk by 60%`,
      keyTerms: [
        { term: 'transition', definition: 'The end of Stage 1 (8-10 cm); most intense part of labor' },
        { term: 'laboring down', definition: 'Allowing passive fetal descent before active pushing, often used with epidural' },
        { term: 'active management', definition: 'Interventions during Stage 3 to reduce bleeding (oxytocin, cord traction, massage)' },
      ],
      clinicalNotes: 'Contemporary evidence (Zhang labor curves) shows that 6 cm, not 4 cm, is the threshold for active labor. Slower progress in latent phase is acceptable. Second stage duration limits are flexible with reassuring fetal status.',
    },
    4: {
      level: 4,
      summary: 'Labor stage progression involves complex neuroendocrine regulation of myometrial contractility, cervical biochemical remodeling, and coordinated fetal adaptation, with evidence-based parameters guiding contemporary management of normal and abnormal labor patterns.',
      explanation: `**Stage 1: Detailed Physiology**

*Latent Phase Mechanisms:*
- Cervical ripening: Collagen degradation via MMPs
- Hyaluronan accumulation: Increased water content
- Inflammatory infiltrate: Neutrophils, macrophages
- Prostaglandin synthesis: Local cervical effect

*Active Phase Mechanisms:*
- Coordinated contractility: Gap junction synchronization
- Ferguson reflex: Cervical stretch → oxytocin release
- Positive feedback loop amplifies contractions
- Catecholamine surge: Maternal stress response

*Contemporary Labor Curves (Zhang et al., CSL):*
- Median dilation rate 4-6 cm: 0.5-0.7 cm/hr
- Median dilation rate 6-10 cm: 1.0-1.5 cm/hr
- 95th percentile for 4-5 cm: 6.4 hours
- Epidural prolongs all phases

*Labor Arrest Definitions:*
- First stage: No cervical change for ≥6 hours with adequate contractions (≥200 MVU)
- Or no change for ≥4 hours with adequate contractions and ruptured membranes

**Stage 2: Detailed Physiology**

*Maternal Bearing Down:*
- Valsalva vs. open glottis pushing
- Abdominal muscle contraction
- Pelvic floor relaxation
- Intrauterine pressure: 80-100 mmHg with push

*Fetal Adaptation:*
- Head molding: Overlapping cranial bones
- Caput succedaneum: Scalp edema
- Cord blood gases reflect stress
- Vagal response: Variable decelerations common

*Second Stage Arrest:*
- Nullipara: No descent after 3 hours with epidural
- Multipara: No descent after 2 hours with epidural
- Management: Operative vaginal delivery or cesarean

**Stage 3: Detailed Physiology**

*Placental Separation Mechanisms:*
- Myometrial contraction: Retroplacental space compression
- Nitabuch layer cleavage
- Spiral artery constriction prevents hemorrhage
- Prostaglandins, thromboxane: Hemostasis

*Types of Placental Separation:*
- Schultz mechanism (80%): Fetal side first (shiny Schultz)
- Duncan mechanism (20%): Maternal side first (dirty Duncan)

*Active Management Protocol (AMTSL):*
1. Uterotonic with anterior shoulder/within 1 min
2. Controlled cord traction when uterus contracted
3. Uterine massage after placenta delivers
- Reduces PPH >500 mL: OR 0.34
- WHO recommends for all deliveries`,
      keyTerms: [
        { term: 'Ferguson reflex', definition: 'Neuroendocrine reflex where cervical/vaginal stretch triggers oxytocin release from posterior pituitary' },
        { term: 'Nitabuch layer', definition: 'Zone of fibrinoid degeneration at maternal-fetal interface where placenta separates' },
        { term: 'AMTSL', definition: 'Active Management of Third Stage of Labor; evidence-based bundle to prevent postpartum hemorrhage' },
      ],
      clinicalNotes: 'Contemporary guidelines allow longer labor before diagnosing arrest. First stage arrest requires both adequate contractions (internal monitoring) and sufficient time. Second stage duration norms are extended with epidural.',
    },
    5: {
      level: 5,
      summary: 'Optimization of labor stage management requires integration of contemporary labor progression data, individualized risk assessment, and evidence-based interventions while balancing maternal autonomy and shared decision-making.',
      explanation: `**Evidence-Based Stage 1 Management:**

*Safe Prevention of Primary Cesarean Guidelines:*
- Do not diagnose active labor before 6 cm
- Latent phase up to 24+ hours may be normal
- Prolonged latent phase: Not cesarean indication
- First stage arrest requires:
  - ≥6 cm dilation
  - Ruptured membranes
  - ≥4 hours adequate contractions (≥200 MVU) without change
  - OR ≥6 hours with inadequate contractions without change

*Failed Induction Definition:*
- Unable to achieve active labor
- Requires: ≥24 hours of oxytocin after ROM
- Failed induction ≠ failed labor

*Oxytocin Management:*
- Goal: 3-5 contractions per 10 minutes
- Adequate: ≥200 Montevideo units
- Hyperstimulation: >5 contractions/10 min with FHR changes
- Protocols: Low-dose vs. high-dose (institution-specific)

**Evidence-Based Stage 2 Management:**

*Duration Limits Update (ACOG):*
- Nullipara with epidural: ≥4 hours before arrest diagnosis
- Nullipara without epidural: ≥3 hours
- Multipara with epidural: ≥3 hours
- Multipara without epidural: ≥2 hours
- Longer durations may be appropriate with progress

*Pushing Techniques:*
- Immediate vs. delayed pushing (laboring down)
- Delayed pushing: May reduce operative delivery
- Cochrane: No clear benefit for immediate pushing
- Coached vs. spontaneous: Similar outcomes

*Operative Vaginal Delivery Criteria:*
- Full dilation, ruptured membranes
- Engaged head, known position
- Adequate anesthesia
- No suspected cephalopelvic disproportion

**Evidence-Based Stage 3 Management:**

*Active vs. Physiologic Management:*
- Active: Reduces PPH (RR 0.34), reduces transfusion
- WHO recommends active management for all
- Physiologic management: Patient preference option
- Components can be individualized

*Uterotonic Options:*
- Oxytocin: 10 units IM or IV (standard)
- Carbetocin: Single dose alternative (100 mcg IV)
- Ergometrine: More side effects, avoid in hypertension
- Misoprostol: Option in low-resource settings

*Delayed Cord Clamping:*
- ≥30-60 seconds recommended (WHO, ACOG)
- Increases infant hemoglobin and iron stores
- Preterm: Reduces IVH, NEC, transfusion
- Term: Improved developmental outcomes at 4 years

**Quality and Outcomes:**

*Labor and Delivery Metrics:*
- NTSV cesarean rate
- Severe maternal morbidity rate
- Third/fourth degree laceration rate
- PPH rate
- 5-minute Apgar <7 rate

*Reducing Cesarean:*
- Supportive labor care (doulas)
- Patience with labor progress
- Cephalic version for breech
- TOLAC for eligible candidates
- External cephalic version`,
      keyTerms: [
        { term: 'TOLAC', definition: 'Trial of Labor After Cesarean; attempt at vaginal delivery after previous cesarean' },
        { term: 'delayed cord clamping', definition: 'Waiting ≥30-60 seconds after birth before clamping umbilical cord; improves neonatal outcomes' },
        { term: 'laboring down', definition: 'Delayed pushing technique allowing passive fetal descent; may reduce maternal exhaustion' },
      ],
      clinicalNotes: 'The ARRIVE trial showed that elective induction at 39 weeks in low-risk nulliparas reduced cesarean rates, shifting the paradigm around expectant management. Shared decision-making should include discussion of labor management preferences, monitoring intensity, and intervention thresholds.',
    },
  },

  media: [
    {
      id: 'stages-cervical-dilation',
      type: 'diagram',
      filename: 'cervical-dilation-stages.svg',
      title: 'Cervical Dilation Throughout Labor',
      description: 'Visual progression of cervical dilation from 0-10 cm',
    },
  ],

  citations: [
    {
      id: 'zhang-labor-curves',
      type: 'article',
      title: 'Contemporary Patterns of Spontaneous Labor With Normal Neonatal Outcomes',
      source: 'Obstetrics & Gynecology',
      authors: ['Zhang J', 'Landy HJ', 'Branch DW'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-labor-overview', targetType: 'process', relationship: 'parent', label: 'Labor Overview' },
    { targetId: 'obgyn-labor-induction', targetType: 'process', relationship: 'sibling', label: 'Labor Induction' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'labor'],
    keywords: ['stages of labor', 'cervical dilation', 'pushing', 'placenta'],
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
