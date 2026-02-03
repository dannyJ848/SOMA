/**
 * Labor Complications
 *
 * Comprehensive coverage of labor and delivery complications including
 * recognition, management, and prevention.
 */

import { EducationalContent } from '../../../types';

export const laborComplications: EducationalContent = {
  id: 'obgyn-labor-complications',
  type: 'condition',
  name: 'Labor Complications',
  alternateNames: ['Obstetric Emergencies', 'Delivery Complications'],

  levels: {
    1: {
      level: 1,
      summary: 'Labor complications are problems that can happen during childbirth that need extra care or treatment.',
      explanation: `Most births go smoothly, but sometimes problems can happen that need quick action from the medical team.

**Common complications:**

*Bleeding:*
- Too much blood loss after delivery
- Can happen if the uterus does not squeeze tight after birth
- Doctors have medicines and treatments to stop it

*Baby in distress:*
- The baby's heart rate shows signs of stress
- May need to be delivered quickly
- Monitoring catches this early

*Cord problems:*
- The umbilical cord can slip down before the baby
- Very rare but serious
- Emergency delivery needed

*Slow labor:*
- Labor stops making progress
- Medicine can help contractions
- Sometimes a C-section is needed

**What the medical team does:**
- Monitors mom and baby closely
- Has emergency supplies ready
- Can call for extra help quickly
- Has blood available if needed`,
      keyTerms: [
        { term: 'fetal distress', definition: 'Signs that the baby is having trouble during labor' },
        { term: 'hemorrhage', definition: 'Very heavy bleeding that needs treatment' },
        { term: 'emergency', definition: 'A situation that needs immediate medical action' },
      ],
      analogies: [
        'The medical team during labor is like a pit crew at a race - ready for anything that might come up.',
      ],
      examples: [
        'If a baby\'s heart rate drops too low, the doctor might decide on an emergency C-section to deliver the baby quickly and safely.',
      ],
    },
    2: {
      level: 2,
      summary: 'Labor complications include conditions affecting labor progress, fetal well-being, and maternal safety, requiring prompt recognition and intervention.',
      explanation: `**Categories of Complications:**

**1. Abnormal Labor Progress:**
- *Prolonged latent phase*: >20 hours (nullipara) or >14 hours (multipara)
- *Labor arrest*: No progress despite adequate contractions
- *Precipitous labor*: <3 hours total labor

**2. Fetal Concerns:**
- *Non-reassuring fetal heart rate*: Patterns suggesting hypoxia
- *Meconium*: Baby's first stool in amniotic fluid
- *Malpresentation*: Baby not head-down (breech, transverse)

**3. Cord Complications:**
- *Cord prolapse*: Cord comes out before baby (emergency!)
- *Nuchal cord*: Cord around baby's neck (usually manageable)
- *Cord compression*: Cord squeezed during contractions

**4. Placental Complications:**
- *Placenta previa*: Placenta covers cervix
- *Placental abruption*: Placenta separates early
- *Retained placenta*: Placenta doesn't deliver

**5. Postpartum Hemorrhage:**
- Blood loss >500 mL (vaginal) or >1000 mL (cesarean)
- Causes: Uterine atony (most common), lacerations, retained tissue
- Treatment: Medications, massage, surgery if needed`,
      keyTerms: [
        { term: 'uterine atony', definition: 'When the uterus does not contract well after delivery, causing bleeding' },
        { term: 'cord prolapse', definition: 'Umbilical cord drops into birth canal before baby; emergency requiring immediate delivery' },
        { term: 'placental abruption', definition: 'Placenta separates from uterine wall before delivery; can cause bleeding' },
      ],
    },
    3: {
      level: 3,
      summary: 'Intrapartum complications require systematic assessment using standardized definitions, evidence-based management algorithms, and multidisciplinary team coordination.',
      explanation: `**Fetal Heart Rate Interpretation:**

*Category III (Abnormal):*
- Absent variability with recurrent late decelerations
- Absent variability with recurrent variable decelerations
- Sinusoidal pattern
- Requires immediate evaluation and intervention

*Intrauterine Resuscitation:*
1. Position change (left lateral)
2. IV fluid bolus
3. Oxygen supplementation
4. Stop oxytocin
5. Consider terbutaline (tocolysis)

**Shoulder Dystocia:**

*Definition:* Head delivers but shoulders impact on pubic symphysis

*Risk Factors:*
- Fetal macrosomia (>4000g)
- Maternal diabetes
- Prior shoulder dystocia
- Prolonged second stage

*McROBERTS Mnemonic:*
- **M**cRoberts position (legs hyperflexed)
- **R**ubin maneuver (pressure on posterior shoulder)
- **O**blique shoulder position
- **B**elly pressure (suprapubic)
- **E**pisiotomy (consider)
- **R**otate to all fours
- **T**ry removing posterior arm
- **S**chedule cesarean (last resort - Zavanelli maneuver)

**Postpartum Hemorrhage:**

*Risk Factors (4 T's):*
- **T**one: Uterine atony (70% of cases)
- **T**rauma: Lacerations, hematoma
- **T**issue: Retained placenta/membranes
- **T**hrombin: Coagulopathy

*Staged Management:*
1. Uterine massage + uterotonics
2. Bakri balloon/uterine packing
3. Uterine compression sutures (B-Lynch)
4. Uterine artery ligation/embolization
5. Hysterectomy (last resort)

**Cord Prolapse:**

*Immediate Actions:*
- Call for help
- Elevate presenting part (examiner's hand in vagina)
- Knee-chest or Trendelenburg position
- Fill bladder (500 mL saline)
- Emergency cesarean delivery`,
      keyTerms: [
        { term: 'shoulder dystocia', definition: 'Obstetric emergency where shoulders cannot deliver after head; requires specific maneuvers' },
        { term: 'McRoberts maneuver', definition: 'Maternal leg hyperflexion to widen pelvic outlet; first-line for shoulder dystocia' },
        { term: 'B-Lynch suture', definition: 'Uterine compression suture technique for postpartum hemorrhage' },
      ],
      clinicalNotes: 'Shoulder dystocia cannot be reliably predicted. Do not pull on the head or use fundal pressure. Document time, maneuvers used, and fetal/maternal outcomes carefully.',
    },
    4: {
      level: 4,
      summary: 'Management of labor complications requires integration of simulation-based training, evidence-based bundles, and system-level preparation to optimize outcomes in time-sensitive obstetric emergencies.',
      explanation: `**Postpartum Hemorrhage Bundles:**

*CMQCC Bundle Elements:*
- Readiness (cart, huddles, drills)
- Recognition (quantified blood loss, vital signs)
- Response (stage-based management)
- Reporting/learning

*Quantitative Blood Loss:*
- Weigh materials before and after
- QBL = wet weight - dry weight (1g = 1mL)
- More accurate than visual estimation
- Triggers based on cumulative loss

*Massive Transfusion Protocol:*
- Activated when EBL >1500 mL or instability
- 6:4:1 ratio (RBC:FFP:platelets)
- Calcium replacement
- Tranexamic acid 1g IV

**Amniotic Fluid Embolism:**

*Classic Triad:*
- Sudden hypoxia/dyspnea
- Cardiovascular collapse
- DIC

*Management:*
- Supportive (there is no specific treatment)
- High-quality CPR if arrest
- Emergent delivery
- Blood product replacement for DIC
- ECMO consideration

**Uterine Rupture:**

*Risk Factors:*
- Prior cesarean (highest risk with classical incision)
- Oxytocin augmentation
- Prostaglandins after prior cesarean

*Signs:*
- Fetal bradycardia (most reliable)
- Loss of station
- Cessation of contractions
- Maternal tachycardia/hypotension
- Vaginal bleeding

*Management:*
- Emergency cesarean
- Repair vs. hysterectomy based on findings
- Massive transfusion readiness

**Eclampsia:**

*Seizure Management:*
- Protect airway
- Left lateral position
- Magnesium sulfate 4-6g IV bolus
- Maintenance: 1-2g/hour
- Avoid polypharmacy

*Delivery Timing:*
- Stabilize mother first
- Delivery after seizure control
- Continuous fetal monitoring`,
      keyTerms: [
        { term: 'amniotic fluid embolism', definition: 'Rare catastrophic complication with amniotic fluid entering maternal circulation' },
        { term: 'quantitative blood loss', definition: 'Measurement of blood loss by weighing materials; more accurate than visual estimation' },
        { term: 'uterine rupture', definition: 'Tearing through uterine wall; obstetric emergency requiring immediate surgery' },
      ],
      clinicalNotes: 'Simulation training for obstetric emergencies improves team performance and outcomes. Regular drills for shoulder dystocia, PPH, and emergency cesarean are essential. Debriefing after emergencies supports learning and emotional processing.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management of obstetric emergencies integrates evidence-based medicine, high-reliability organization principles, and system design to minimize preventable maternal and neonatal morbidity.',
      explanation: `**Severe Maternal Morbidity Prevention:**

*CDC Definition:*
- 21 indicators including transfusion, hysterectomy, ICU admission
- SMM rate: ~144 per 10,000 deliveries
- Rising trend concerning
- Hemorrhage and hypertension major drivers

*Prevention Strategies:*
- Risk assessment on admission
- Evidence-based bundles (hemorrhage, hypertension)
- Early warning systems
- Rapid response teams
- Safety culture improvement

**Maternal Early Warning Criteria:**

*Single Parameters:*
- Systolic BP <90 or >160
- Diastolic BP >100
- Heart rate <50 or >120
- Respiratory rate <10 or >30
- Oxygen saturation <95%
- Oliguria <35 mL/hr x 2 hours
- Maternal agitation/confusion
- Patient or nurse concern

*Response:*
- Bedside RN assessment
- Provider notification
- Team response if multiple triggers

**Hemorrhage Quality Improvement:**

*Key Metrics:*
- Transfusion rate
- Massive transfusion rate
- Time to recognition
- Time to intervention
- Hysterectomy rate

*High Reliability Interventions:*
- Risk stratification tool
- Active management of third stage
- QBL for all deliveries
- Standardized hemorrhage cart
- Debrief after all hemorrhages

**Fetal Monitoring Medico-Legal Aspects:**

*Documentation Essentials:*
- Category of tracing
- Interventions performed
- Communication with physician
- Response to interventions
- Decision-making rationale

*Chain of Communication:*
- Nurse to provider communication
- Escalation pathways
- Documentation of concerns
- Timely response requirements

**Team Training Programs:**

*Examples:*
- ALSO (Advanced Life Support in Obstetrics)
- NRP (Neonatal Resuscitation Program)
- TeamSTEPPS
- In-situ simulation

*Evidence:*
- Simulation training reduces adverse outcomes
- Team training improves communication
- Regular practice essential for rare events

**Root Cause Analysis:**

*After Adverse Events:*
- Non-punitive review
- System-level factors identified
- Action plans developed
- Feedback loop to staff
- Culture of safety promoted`,
      keyTerms: [
        { term: 'severe maternal morbidity', definition: 'Near-miss events indicating significant complications; tracked for quality improvement' },
        { term: 'maternal early warning criteria', definition: 'Vital sign triggers prompting evaluation for clinical deterioration' },
        { term: 'high reliability organization', definition: 'System design principles from aviation/nuclear industry applied to healthcare safety' },
      ],
      clinicalNotes: 'Every maternal death in the US is reviewed, and the majority are deemed preventable. System-level changes including standardized protocols, team training, and early warning systems reduce preventable morbidity and mortality.',
    },
  },

  media: [
    {
      id: 'shoulder-dystocia-maneuvers',
      type: 'diagram',
      filename: 'shoulder-dystocia-management.svg',
      title: 'Shoulder Dystocia Maneuvers',
      description: 'Step-by-step visual guide to shoulder dystocia management',
    },
  ],

  citations: [
    {
      id: 'acog-pph',
      type: 'article',
      title: 'Postpartum Hemorrhage',
      source: 'ACOG Practice Bulletin No. 183',
      authors: ['American College of Obstetricians and Gynecologists'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-labor-overview', targetType: 'process', relationship: 'parent', label: 'Labor Overview' },
    { targetId: 'obgyn-labor-cesarean', targetType: 'process', relationship: 'related', label: 'Cesarean Delivery' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'emergencies', 'complications'],
    keywords: ['PPH', 'shoulder dystocia', 'cord prolapse', 'labor complications'],
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
