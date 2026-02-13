import { LegacyWomensHealthContent } from '../types';

export const laborAndDeliveryOverview: LegacyWomensHealthContent = {
  id: 'concept-labor-and-delivery-overview',
  type: 'concept',
  name: 'Labor and Delivery Overview',
  alternateNames: ['Childbirth', 'Birth process', 'Parturition'],

  levels: {
    1: {
      level: 1,
      summary: 'Labor is the process of childbirth, including contractions that open your cervix and push your baby out.',
      explanation: `**Signs Labor is Starting:**
- Contractions that get stronger, longer, and closer together
- Water breaking (fluid leaking or gushing from vagina)
- Bloody show (mucus tinged with blood)
- Lower back pain that doesn't go away

**When to Go to the Hospital:**
- Contractions every 5 minutes, lasting 1 minute, for 1 hour
- Your water breaks
- Heavy bleeding
- Baby isn't moving normally
- Any concerns

**Stages of Labor:**

*Stage 1: Opening the Cervix*
- Longest stage (hours to a day for first babies)
- Contractions dilate cervix from 0 to 10 cm
- Early labor: Mild contractions, stay home
- Active labor: Stronger, closer contractions, go to hospital

*Stage 2: Pushing and Delivery*
- Cervix fully open (10 cm)
- You feel urge to push
- Baby moves down and out
- Usually 30 minutes to 3 hours

*Stage 3: Delivering the Placenta*
- After baby is born
- Placenta separates and comes out
- Usually 5-30 minutes

**Pain Relief Options:**
- Breathing techniques
- Movement and position changes
- Pain medication
- Epidural (numbing from waist down)`,
      keyTerms: [
        { term: 'contractions', definition: 'Tightening of your uterus muscles that helps push baby out' },
        { term: 'cervix dilation', definition: 'The opening of your cervix measured in centimeters, from 0 to 10' },
        { term: 'epidural', definition: 'Medication placed near your spine to numb you from the waist down' },
      ],
      analogies: ['Think of your cervix like a door that needs to open wide enough for baby to pass through - contractions are what push the door open.'],
      examples: ['Contractions starting 20 minutes apart and gradually getting closer to 5 minutes apart', 'Feeling pressure like you need to push when fully dilated'],
    },
    2: {
      level: 2,
      summary: 'Labor involves progressive cervical change from uterine contractions, culminating in delivery of the fetus and placenta through three distinct stages.',
      explanation: `**Onset of Labor:**

*Signs of Labor:*
- Regular, progressive contractions
- Cervical dilation and effacement
- May have spontaneous rupture of membranes
- Bloody show (cervical mucus with blood)

*True vs. False Labor:*
- True: Regular, progressive, don't stop with rest
- False (Braxton Hicks): Irregular, don't progress, stop with rest

**Stage 1: Cervical Dilation**

*Latent Phase:*
- 0-6 cm dilation
- Variable duration (hours)
- Contractions irregular, mild to moderate
- Can be at home

*Active Phase:*
- 6-10 cm dilation
- Faster dilation (~1 cm/hour or more)
- Contractions stronger, 3-5 minutes apart
- Should be in hospital

*Transition:*
- 8-10 cm
- Most intense contractions
- May feel urge to push

**Stage 2: Expulsion**
- Complete dilation (10 cm) to delivery
- Active pushing with contractions
- Cardinal movements of labor
- Duration varies (nulliparous longer than multiparous)

**Stage 3: Placental Delivery**
- Signs of separation: Cord lengthening, gush of blood
- Usually within 30 minutes
- Active management reduces hemorrhage

**Fetal Monitoring:**
- External: Doppler, continuous monitoring
- Internal: Fetal scalp electrode (if needed)
- Monitoring patterns interpreted for fetal wellbeing

**Pain Management:**
- Non-pharmacologic: Position, hydrotherapy, breathing
- Systemic analgesia: IV opioids
- Regional anesthesia: Epidural, combined spinal-epidural`,
      keyTerms: [
        { term: 'effacement', definition: 'Thinning of the cervix, measured as percentage (0-100%)' },
        { term: 'nulliparous', definition: 'Woman who has never given birth', pronunciation: 'nuh-LIP-er-us' },
        { term: 'cardinal movements', definition: 'Sequence of fetal position changes during descent through birth canal' },
        { term: 'active management', definition: 'Oxytocin and gentle cord traction to speed placental delivery and reduce bleeding' },
      ],
    },
    3: {
      level: 3,
      summary: 'Labor management requires assessment of maternal and fetal status, understanding of normal labor progress, recognition of abnormal labor patterns, and appropriate interventions including augmentation and operative delivery.',
      explanation: `**Initial Assessment:**

*Maternal:*
- Vital signs, general health
- Contraction pattern (frequency, duration, intensity)
- Cervical exam: Dilation, effacement, station, position
- Membrane status

*Fetal:*
- Presentation and position
- Estimated fetal weight
- Heart rate pattern

**First Stage Management:**

*Normal Progress:*
- Latent phase: May be prolonged (>20 hours nulliparous, >14 hours multiparous)
- Active phase: At least 1 cm/hour dilation

*Arrest Disorders:*
- Active phase arrest: No change for ≥6 hours with adequate contractions and ruptured membranes
- Consider: Amniotomy, oxytocin augmentation
- 4 Ps: Power (contractions), Passenger (fetal size/position), Passage (pelvis), Psyche

*Augmentation:*
- Oxytocin protocols (low-dose vs. high-dose)
- Goal: Montevideo units 200-250 (adequate contractions)

**Fetal Heart Rate Monitoring:**

*Category I (Normal):*
- Baseline 110-160
- Moderate variability
- Accelerations present
- No late or variable decelerations

*Category II (Indeterminate):*
- Neither I nor III
- Requires continued monitoring, evaluation

*Category III (Abnormal):*
- Absent variability with recurrent late or variable decelerations, or bradycardia
- Sinusoidal pattern
- Requires intervention, possible delivery

**Second Stage:**
- Active pushing vs. laboring down with epidural
- Position options (lithotomy, squatting, lateral)
- Prolonged second stage: Consider operative delivery

**Operative Delivery:**
- Vacuum or forceps: Vertex, fully dilated, engaged, ruptured membranes
- Cesarean: Abnormal FHR, arrest of labor, malpresentation`,
      keyTerms: [
        { term: 'station', definition: 'Position of fetal presenting part relative to ischial spines (-3 to +3)' },
        { term: 'Montevideo units', definition: 'Measure of contraction strength: amplitude x frequency per 10 minutes' },
        { term: 'Category II tracing', definition: 'Indeterminate fetal heart pattern requiring evaluation and continued monitoring' },
        { term: 'operative vaginal delivery', definition: 'Use of vacuum or forceps to assist vaginal delivery' },
      ],
      clinicalNotes: 'Arrest of dilation requires 6 hours of adequate contractions (with AROM) before diagnosing; arrest of descent requires 3 hours with epidural or 2 hours without. Category III tracings require immediate intervention and preparation for delivery.',
    },
    4: {
      level: 4,
      summary: 'Advanced labor management involves nuanced interpretation of labor progress, fetal heart rate pattern management, operative delivery techniques, and managing complications including shoulder dystocia and postpartum hemorrhage.',
      explanation: `**Labor Curve Management:**

*Contemporary Approach:*
- Zhang labor curve: Slower early active phase
- 6 cm as start of active phase (not 4 cm)
- Patience with latent phase
- Avoid early intervention

*Protraction vs. Arrest:*
- Protraction: Slower than expected but progressing
- Arrest: Complete cessation of progress

**Fetal Heart Rate Management:**

*Category II Management:*
- Intrauterine resuscitation: Position, fluids, oxygen, tocolysis
- Identify reversible causes
- Fetal scalp stimulation for assessment
- Amnioinfusion for variable decelerations

*Category III Response:*
- Immediate intervention
- Prepare for emergent delivery
- If pattern resolves, may continue

*Intrauterine Resuscitation:*
- Left lateral position
- IV fluid bolus
- Discontinue oxytocin
- Oxygen (controversial, short-term)
- Terbutaline if tachysystole
- Amnioinfusion

**Operative Vaginal Delivery:**

*Prerequisites:*
- Vertex presentation
- Complete dilation
- Ruptured membranes
- Engaged (≥+2 station for outlet)
- Empty bladder
- Adequate anesthesia
- Informed consent

*Vacuum vs. Forceps:*
- Vacuum: Higher failure rate, less maternal trauma
- Forceps: Better for rotation, more maternal trauma

**Cesarean Delivery Decision-Making:**
- Balancing maternal and fetal risks
- Non-reassuring fetal status
- Failed trial of labor
- Arrest disorders
- Malpresentation

**Shoulder Dystocia Management:**
- Call for help
- McRoberts + suprapubic pressure (first)
- Episiotomy (only if more room needed)
- Rubin or Woods corkscrew
- Posterior arm delivery
- Gaskin (all fours) if mobile
- Zavanelli + cesarean (last resort)
- Documentation: Time, maneuvers, Apgars, injuries`,
      keyTerms: [
        { term: 'Zhang labor curve', definition: 'Contemporary labor progression expectations showing slower active phase than Friedman curve' },
        { term: 'amnioinfusion', definition: 'Infusing saline into uterus to cushion cord and reduce variable decelerations' },
        { term: 'tachysystole', definition: 'More than 5 contractions in 10 minutes' },
        { term: 'Zavanelli maneuver', definition: 'Cephalic replacement for irreducible shoulder dystocia; rare, cesarean follows' },
      ],
      clinicalNotes: 'Sequential use of vacuum then forceps increases neonatal injury risk significantly. Pop-offs with vacuum (>3) should prompt cesarean. Document shoulder dystocia thoroughly including exact time (head-to-body interval), all maneuvers used, and outcomes.',
    },
    5: {
      level: 5,
      summary: 'Expert labor and delivery care involves evidence synthesis for controversial practices, reduction of primary cesarean rates, management of complex cases, simulation training, and quality improvement initiatives.',
      explanation: `**Reducing Primary Cesarean Rate:**

*SMFM/ACOG Strategies:*
- Allowing longer latent phase
- Active phase definition at 6 cm
- Longer pushing with epidural (≥3 hours nulliparous)
- EFM interpretation standardization
- Operative vaginal delivery training
- External cephalic version for breech

*Specific Interventions:*
- Continuous labor support
- Avoiding elective inductions before 39 weeks
- Laborist models
- Peer review and feedback

**Trial of Labor After Cesarean (TOLAC):**

*Candidate Selection:*
- Prior low transverse incision
- No prior rupture
- Candidate for vaginal delivery
- Appropriate facilities for emergency cesarean

*VBAC Success Predictors:*
- Prior vaginal delivery (strongest)
- Spontaneous labor
- Favorable cervix
- Non-recurring indication for prior cesarean

*Counseling:*
- Success rate 60-80%
- Uterine rupture 0.5-1%
- Failed TOLAC vs. planned repeat cesarean risks

**Complex Situations:**

*Malpresentation:*
- External cephalic version at 37 weeks
- Breech: Consider vaginal if experienced provider, meeting criteria
- Transverse lie: Cesarean required

*Multiple Gestation:*
- Twin A vertex: Trial of labor appropriate
- Twin A non-vertex: Cesarean usually recommended
- Monoamniotic: Cesarean recommended

**Simulation and Team Training:**
- Shoulder dystocia drills
- Postpartum hemorrhage simulation
- Code OB/crash cesarean
- Team communication exercises
- Debriefing after emergencies

**Quality Metrics:**
- NTSV cesarean rate (nulliparous, term, singleton, vertex)
- Episiotomy rate
- Severe perineal laceration rate
- Maternal and neonatal outcomes

**Emerging Practices:**
- Physiologic (delayed) cord clamping
- Immediate skin-to-skin
- Gentle cesarean techniques
- Enhanced recovery after cesarean (ERAS)
- Peanut ball for labor
- Adjunct monitoring (STAN, fetal lactate)`,
      keyTerms: [
        { term: 'NTSV cesarean rate', definition: 'Primary cesarean rate in low-risk population; key quality metric' },
        { term: 'TOLAC', definition: 'Trial of labor after cesarean; attempting vaginal birth after prior cesarean' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery; protocol to optimize cesarean recovery' },
        { term: 'physiologic cord clamping', definition: 'Delayed cord clamping (30-60 seconds) to improve neonatal blood volume' },
      ],
      clinicalNotes: 'NTSV cesarean rate is the most controllable cesarean metric. TOLAC success is highest with prior vaginal delivery. Ensure informed consent documents risks of both TOLAC (rupture) and repeat cesarean (surgical risks, future pregnancy implications). Immediate skin-to-skin improves breastfeeding and bonding outcomes.',
    },
  },
  media: [],
  citations: [
    {
      id: 'acog-intrapartum-pb',
      type: 'article',
      title: 'ACOG Practice Bulletins on Intrapartum Management',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyright ACOG',
    },
    {
      id: 'smfm-cesarean',
      type: 'article',
      title: 'Safe Prevention of the Primary Cesarean Delivery',
      source: 'Society for Maternal-Fetal Medicine',
      license: 'Copyright SMFM',
    },
  ],
  crossReferences: [
    { targetId: 'concept-warning-signs-in-pregnancy', targetType: 'concept', relationship: 'related', label: 'Warning Signs' },
    { targetId: 'concept-postpartum-care', targetType: 'concept', relationship: 'related', label: 'Postpartum Care' },
    { targetId: 'concept-prenatal-care-schedule', targetType: 'concept', relationship: 'related', label: 'Prenatal Care' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'patient-education', 'womens-health', 'labor-delivery'],
    keywords: ['labor', 'delivery', 'childbirth', 'contractions', 'epidural', 'cesarean'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['obgyn'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
