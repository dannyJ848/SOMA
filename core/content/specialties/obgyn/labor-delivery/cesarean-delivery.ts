/**
 * Cesarean Delivery
 *
 * Comprehensive coverage of cesarean section including indications,
 * surgical technique, complications, and recovery.
 */

import { EducationalContent } from '../../../types';

export const cesareanDelivery: EducationalContent = {
  id: 'obgyn-labor-cesarean',
  type: 'process',
  name: 'Cesarean Delivery',
  alternateNames: ['C-section', 'Cesarean Section', 'Surgical Delivery'],

  levels: {
    1: {
      level: 1,
      summary: 'A cesarean section is surgery to deliver a baby through a cut in the mother\'s belly and uterus.',
      explanation: `Sometimes a baby needs to be delivered through surgery instead of through the birth canal. This is called a cesarean section or C-section.

**Why might you need a C-section?**
- The baby is not in the right position (like feet first)
- The baby is too big or the pelvis is too small
- Labor is not progressing
- The baby shows signs of distress
- There is a problem with the placenta
- The mother has had a C-section before

**What happens during a C-section?**
- Medicine numbs the lower body (epidural or spinal)
- A cut is made across the lower belly (usually low, near the bikini line)
- The doctor opens the uterus and delivers the baby
- The baby is checked and given to the parents
- The uterus and belly are closed with stitches

**Recovery:**
- Hospital stay of 2-4 days
- Full recovery takes about 6 weeks
- Most mothers can hold and feed their babies right away`,
      keyTerms: [
        { term: 'C-section', definition: 'Surgery to deliver a baby through cuts in the belly and uterus' },
        { term: 'spinal', definition: 'Medicine injected in the back to numb the lower body for surgery' },
        { term: 'incision', definition: 'The cut made by the doctor during surgery' },
      ],
      analogies: [
        'A C-section is like a special door when the regular exit is not working well for the baby.',
      ],
      examples: [
        'About 1 in 3 babies in the United States are born by C-section.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cesarean delivery is the surgical delivery of a fetus through incisions in the abdominal wall and uterus, performed for maternal, fetal, or obstetric indications.',
      explanation: `**Common Indications:**

*Absolute (almost always require cesarean):*
- Complete placenta previa (placenta covers cervix)
- Cord prolapse
- Uterine rupture
- Certain fetal malpresentations

*Relative (cesarean may be best choice):*
- Non-reassuring fetal heart rate
- Labor dystocia (not progressing)
- Failed induction
- Prior cesarean delivery
- Breech presentation
- Fetal macrosomia (large baby)

**Types of Incisions:**

*Skin Incision:*
- Pfannenstiel (low transverse): Most common, better cosmesis
- Vertical midline: Faster access, used in emergencies

*Uterine Incision:*
- Low transverse: Most common, lower rupture risk in future
- Classical (vertical): Higher rupture risk, used for specific situations
- Low vertical: Occasionally used

**Surgical Steps:**
1. Skin incision
2. Abdominal wall layers opened
3. Bladder flap created
4. Uterine incision
5. Delivery of baby
6. Delivery of placenta
7. Uterine closure
8. Abdominal closure`,
      keyTerms: [
        { term: 'Pfannenstiel incision', definition: 'Low transverse (bikini line) skin incision for cesarean; most common', pronunciation: 'FAN-en-steel' },
        { term: 'labor dystocia', definition: 'Abnormal labor progress; common indication for cesarean' },
        { term: 'low transverse incision', definition: 'Horizontal cut in lower uterus; allows for future vaginal birth' },
      ],
    },
    3: {
      level: 3,
      summary: 'Cesarean delivery involves systematic dissection through abdominal layers and uterus, with technique variations based on urgency, prior surgery, and specific clinical factors affecting maternal and neonatal outcomes.',
      explanation: `**Indication Categories:**

*Maternal:*
- Prior classical cesarean/myomectomy
- Active genital herpes
- Maternal cardiac disease (some)
- Obstructive pelvic mass

*Fetal:*
- Non-reassuring fetal status (Category III tracing)
- Malpresentation (breech, transverse)
- Cord prolapse
- Some congenital anomalies

*Obstetric:*
- Placenta previa/accreta spectrum
- Vasa previa
- Labor arrest (first or second stage)
- Failed operative vaginal delivery

**Surgical Technique:**

*Layers of Dissection:*
1. Skin
2. Subcutaneous fat (Camper's and Scarpa's fascia)
3. Rectus fascia
4. Rectus muscles (separated, not cut)
5. Peritoneum
6. Vesicouterine peritoneum (bladder flap)
7. Uterus

*Low Transverse Uterine Incision:*
- Made in lower uterine segment
- 10-12 cm length
- Blunt extension preferred (less vessel injury)
- Lower risk of extension into vessels or cervix

*Classical Incision Indications:*
- Poorly developed lower segment (<28 weeks)
- Anterior placenta previa
- Transverse lie with back down
- Lower segment fibroids/adhesions

**Anesthesia:**

*Regional (preferred):*
- Spinal: Rapid onset, single injection
- Epidural: Can use existing labor epidural
- Combined spinal-epidural

*General (when regional contraindicated):*
- True emergency with no time for regional
- Coagulopathy
- Patient refusal of regional
- Airway management critical

**Complications:**

*Intraoperative:*
- Hemorrhage (average blood loss 800-1000 mL)
- Bladder/bowel injury
- Uterine artery injury
- Extension of incision

*Postoperative:*
- Infection (endometritis, wound)
- Venous thromboembolism
- Ileus
- Wound complications`,
      keyTerms: [
        { term: 'bladder flap', definition: 'Peritoneal fold mobilized to protect bladder during cesarean' },
        { term: 'classical incision', definition: 'Vertical uterine incision; higher rupture risk in subsequent pregnancy' },
        { term: 'endometritis', definition: 'Post-cesarean uterine infection; most common infectious complication' },
      ],
      clinicalNotes: 'Type of uterine incision determines future delivery options. Low transverse allows TOLAC; classical requires repeat cesarean. Document incision type clearly in operative note.',
    },
    4: {
      level: 4,
      summary: 'Cesarean delivery technique optimization balances surgical efficiency with complication avoidance, with evidence-based practices including antibiotic prophylaxis, delayed cord clamping, and enhanced recovery protocols.',
      explanation: `**Evidence-Based Practices:**

*Surgical Technique Evidence:*
- Blunt uterine extension: Less blood loss than sharp
- Single-layer uterine closure: Equivalent to double-layer
- Non-closure of peritoneum: Safe, shorter operative time
- Subcuticular skin closure: Better cosmesis vs. staples

*Infection Prevention Bundle:*
- Preoperative antibiotics (cefazolin 2g IV within 60 min)
- Chlorhexidine skin prep
- Vaginal prep with povidone-iodine (reduces endometritis)
- Azithromycin 500 mg added in labor (labored cesarean)

*Hemorrhage Prevention:*
- Oxytocin after delivery (10-40 units in 1L)
- Uterine massage
- Tranexamic acid (1g IV) if bleeding >1000 mL
- Have blood bank sample ready

**Enhanced Recovery After Cesarean (ERAC):**

*Preoperative:*
- Clear liquids until 2 hours before
- Carbohydrate loading
- Minimize fasting

*Intraoperative:*
- Goal-directed fluid therapy
- Normothermia
- Multimodal analgesia (TAP block, intrathecal morphine)

*Postoperative:*
- Early oral intake (within 4-8 hours)
- Early mobilization
- Early Foley removal
- Scheduled NSAIDs + acetaminophen
- Opioid-sparing analgesia

**Emergency Cesarean Categories:**

| Category | Definition | Decision-to-Delivery |
|----------|------------|---------------------|
| 1 | Immediate threat to life | <30 minutes goal |
| 2 | Maternal/fetal compromise | <75 minutes |
| 3 | Needs early delivery | <24 hours |
| 4 | At time to suit patient | Scheduled |

**Special Situations:**

*Placenta Accreta Spectrum:*
- Multidisciplinary planning essential
- Cell saver, massive transfusion protocol
- Cesarean hysterectomy may be needed
- Consider interventional radiology

*Perimortem Cesarean:*
- Maternal cardiac arrest
- Begin within 4 minutes if no ROSC
- Delivery improves maternal resuscitation
- Goal: Delivery by 5 minutes`,
      keyTerms: [
        { term: 'ERAC', definition: 'Enhanced Recovery After Cesarean; evidence-based protocol to improve recovery' },
        { term: 'TAP block', definition: 'Transversus abdominis plane block; regional technique for post-cesarean analgesia' },
        { term: 'perimortem cesarean', definition: 'Cesarean performed during maternal cardiac arrest to improve resuscitation' },
      ],
      clinicalNotes: 'Chlorhexidine-alcohol skin prep is superior to iodine for reducing surgical site infection. Azithromycin addition to standard prophylaxis reduces post-cesarean infection in laboring patients. Document blood loss accurately.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cesarean delivery practice integrates surgical technique optimization, evidence-based bundles, and system-level quality improvement to minimize morbidity while maintaining emergency response capability.',
      explanation: `**Quality Metrics and Outcomes:**

*NTSV Cesarean Rate:*
- Primary cesarean in low-risk nulliparas
- Healthy People 2030 goal: 23.6%
- Hospital-level variation significant
- Driver: Labor management practices

*Cesarean Reduction Strategies:*
- Supportive labor care
- Patience with labor progress
- External cephalic version for breech
- TOLAC promotion for eligible candidates
- Peer review of cesarean decisions

**Reducing Primary Cesarean:**

*Labor Management:*
- Avoid early admission in latent labor
- Allow adequate time before arrest diagnosis
- Consider operative vaginal delivery
- Continuous labor support

*Decision Support:*
- MFMU cesarean calculator
- Real-time labor progress tools
- Physician feedback on rates

**TOLAC/VBAC Counseling:**

*Candidates:*
- Prior low transverse cesarean
- No contraindications to labor
- Available emergency response

*Success Predictors:*
- Prior vaginal delivery (strongest predictor)
- Spontaneous labor
- Non-recurrent indication
- Favorable cervix

*Risks:*
- Uterine rupture: 0.5-0.9%
- Emergency cesarean: ~25%
- Success rate: 60-80%

**Surgical Technique Details:**

*Joel-Cohen vs. Pfannenstiel:*
- Joel-Cohen: Higher skin incision, blunt dissection
- May be faster with less blood loss
- Institutional preference varies

*Uterine Closure Controversies:*
- Single vs. double layer
- Locked vs. unlocked
- Impact on future uterine rupture unclear
- Most use single unlocked

*Closing the Peritoneum:*
- Evidence supports non-closure
- Reduces operative time
- No increase in adhesions

**Morbidly Adherent Placenta:**

*Risk Factors:*
- Prior cesarean (risk increases with number)
- Placenta previa + prior cesarean

*Imaging:*
- Ultrasound: Loss of clear zone, lacunae, bladder line disruption
- MRI: Problem-solving role

*Surgical Planning:*
- Delivery at center of excellence
- Blood products immediately available
- ICU bed reserved
- Urology, IR available
- Plan for hysterectomy

**System Readiness:**

*Emergency Cesarean Capability:*
- 30-minute decision-to-delivery capability
- Anesthesia immediately available
- OR staff on call or in-house
- Neonatal team available
- Massive transfusion protocol`,
      keyTerms: [
        { term: 'NTSV', definition: 'Nulliparous Term Singleton Vertex; population used for primary cesarean rate benchmarking' },
        { term: 'Joel-Cohen incision', definition: 'Modified transverse skin incision with blunt dissection technique' },
        { term: 'decision-to-delivery interval', definition: 'Time from cesarean decision to delivery; quality metric for emergencies' },
      ],
      clinicalNotes: 'Each cesarean increases risk of placenta accreta spectrum in future pregnancies. Counsel patients about cumulative risks with multiple cesareans. Family planning counseling at time of cesarean is important.',
    },
  },

  media: [
    {
      id: 'cesarean-incisions',
      type: 'diagram',
      filename: 'cesarean-incision-types.svg',
      title: 'Cesarean Incision Types',
      description: 'Comparison of skin and uterine incision options',
    },
  ],

  citations: [
    {
      id: 'acog-cesarean',
      type: 'article',
      title: 'Cesarean Delivery on Maternal Request',
      source: 'ACOG Committee Opinion No. 761',
      authors: ['American College of Obstetricians and Gynecologists'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-labor-overview', targetType: 'process', relationship: 'parent', label: 'Labor Overview' },
    { targetId: 'obgyn-labor-complications', targetType: 'condition', relationship: 'related', label: 'Labor Complications' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['obstetrics', 'surgery', 'cesarean'],
    keywords: ['cesarean', 'C-section', 'surgical delivery', 'TOLAC', 'VBAC'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
