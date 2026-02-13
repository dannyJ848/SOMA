import { EducationalContent } from '../../types';

export const cSectionContent: EducationalContent = {
  id: 'c-section',
  type: 'topic',
  name: 'Cesarean Section (C-Section)',
  alternateNames: ['C-Section', 'Cesarean Delivery', 'Abdominal Delivery'],
  levels: {
    1: {
      level: 1,
      summary: 'A cesarean section, or C-section, is a surgical procedure used to deliver a baby through incisions made in the mother\'s abdomen and uterus when vaginal birth is not possible or safe.',
      explanation: `## What is a C-Section?

A cesarean section, or C-section, is a surgical procedure used to deliver a baby through incisions made in the mother's abdomen and uterus. It's an alternative to vaginal delivery when vaginal birth is not possible or safe.

### Key Points

- Surgical delivery of a baby
- Incisions through abdomen and uterus
- Can be planned or emergency
- Recovery takes longer than vaginal birth

### Important Terms

- **C-section**: Cesarean section - surgical delivery
- **Uterus**: Womb - organ holding the baby
- **Incision**: Surgical cut`,
      keyTerms: [
        { term: 'C-section', definition: 'Cesarean section - surgical delivery' },
        { term: 'Uterus', definition: 'Womb - organ holding the baby' },
        { term: 'Incision', definition: 'Surgical cut' }
      ],
      patientCounselingPoints: [
        'A C-section is a safe way to deliver babies when vaginal birth is not possible',
        'You will be awake during most C-sections thanks to spinal or epidural anesthesia',
        'Your partner can usually be in the operating room with you',
        'Recovery takes about 6-8 weeks'
      ]
    },
    2: {
      level: 2,
      summary: 'C-sections are classified by timing and urgency with planned (elective) C-sections scheduled in advance and emergency C-sections performed when complications develop during labor.',
      explanation: `## Types of C-Sections

C-sections are classified by timing and urgency. Some are planned in advance, while others become necessary during labor.

### Key Points

- Planned (elective) C-sections are scheduled
- Emergency C-sections happen during labor
- Some C-sections repeat previous ones
- VBAC is vaginal birth after C-section

### Types

**Planned C-Section**
Scheduled in advance for medical reasons. Examples include breech presentation, placenta problems, multiple births, or previous C-section with certain complications.

**Emergency C-Section**
Performed when complications develop during labor. Examples include fetal distress, failure to progress, placental abruption, or cord prolapse.

**Repeat C-Section**
Many women who have had a C-section will have repeat C-sections for subsequent births. Discuss VBAC (Vaginal Birth After Cesarean) with your doctor.

**Primary vs. Secondary**
Primary C-section: first C-section. Secondary C-section: repeat C-section after a previous one.`,
      keyTerms: [
        { term: 'Breech', definition: 'Baby positioned feet/buttocks first' },
        { term: 'Fetal distress', definition: 'Signs baby is not tolerating labor' },
        { term: 'Placental abruption', definition: 'Placenta separating from uterus' },
        { term: 'Cord prolapse', definition: 'Umbilical cord slipping ahead of baby' }
      ],
      patientCounselingPoints: [
        'Your doctor will discuss with you whether a planned C-section is recommended',
        'In an emergency, quick decisions are made to ensure the safety of both mother and baby',
        'VBAC may be an option depending on your previous C-section type'
      ]
    },
    3: {
      level: 3,
      summary: 'C-sections are performed when vaginal delivery would put the mother or baby at risk due to abnormal fetal position, placenta problems, labor complications, or maternal medical conditions.',
      explanation: `## Reasons for C-Section

C-sections are performed when vaginal delivery would put the mother or baby at risk.

### Key Points

- Abnormal fetal position or size
- Placenta problems
- Labor complications
- Maternal medical conditions

### Reasons for C-Section

**Fetal Reasons**
Breech or transverse position, very large baby (macrosomia), multiple gestation (twins/triplets), or fetal abnormalities that might make vaginal birth risky.

**Placental Problems**
Placenta previa (placenta covering cervix), placental abruption (separation), or placenta accreta (abnormal attachment). These conditions make vaginal birth dangerous.

**Labor Complications**
Failure to progress (labor stalls), prolonged labor, cervical dystocia (cervix won't dilate), or umbilical cord complications.

**Maternal Conditions**
Active genital herpes, HIV with high viral load, high blood pressure (preeclampsia), or certain other medical conditions. Previous C-section with classical incision usually requires repeat C-section.`,
      keyTerms: [
        { term: 'Macrosomia', definition: 'Very large baby (over 4000-4500g)' },
        { term: 'Placenta previa', definition: 'Placenta covering cervical opening' },
        { term: 'Cervical dystocia', definition: 'Cervix not dilating properly' },
        { term: 'Classical incision', definition: 'Vertical incision in uterus' }
      ],
      examples: [
        'A baby in breech position may be delivered by planned C-section',
        'Labor that fails to progress may require emergency C-section after many hours'
      ]
    },
    4: {
      level: 4,
      summary: 'A C-section is performed under regional or general anesthesia with a horizontal "bikini cut" incision most common, taking 30-60 minutes with the baby delivered in about 10 minutes.',
      explanation: `## The C-Section Procedure

A C-section is performed under regional or general anesthesia and typically takes 30-60 minutes.

### Key Points

- Usually done with spinal or epidural anesthesia
- A horizontal incision is most common
- The baby is delivered in about 10 minutes
- The rest of the procedure closes the incisions

### Procedure Details

**Anesthesia**
Most C-sections use spinal or epidural anesthesia, numbing you from the waist down while you remain awake. General anesthesia (being asleep) is used for emergencies when regional isn't possible.

**The Procedure**
A catheter drains the bladder. The abdomen is cleaned and draped. An incision is made (usually horizontal "bikini cut"). The uterus is opened, membranes ruptured, and baby delivered. The placenta is removed, and both uterus and abdomen are closed with sutures.

**During Birth**
You may feel pressure and tugging but not pain. The baby is suctioned and handed to the pediatric team. Your partner may be present.

**After Delivery**
The uterus and abdomen are closed in layers. This takes 20-30 minutes. You'll receive oxytocin to help the uterus contract.`,
      keyTerms: [
        { term: 'Spinal anesthesia', definition: 'One-time injection numbing lower body' },
        { term: 'Epidural anesthesia', definition: 'Catheter providing continuous numbing' },
        { term: 'Bikini cut', definition: 'Low horizontal abdominal incision' },
        { term: 'Oxytocin', definition: 'Medication causing uterine contractions' }
      ],
      clinicalNotes: 'Low transverse uterine incision is preferred for VBAC compatibility. The Pfannenstiel incision is cosmetic and strong. Antibiotic prophylaxis is given within 60 minutes of incision.'
    },
    5: {
      level: 5,
      summary: 'Recovery from C-section takes 6-8 weeks with hospital stay of 2-4 days, including incision care, activity restrictions, pain management, and discussion of VBAC for future pregnancies.',
      explanation: `## Recovery After C-Section

Recovery from C-section takes longer than vaginal birth, typically 6-8 weeks for full recovery.

### Key Points

- Hospital stay is usually 2-4 days
- Pain management is important
- Incision care helps prevent infection
- Activity restrictions help healing

### Recovery Details

**Hospital Recovery**
You'll be monitored for bleeding, pain, and mobility. Pain medication will be provided. You'll be encouraged to walk to prevent blood clots. Breastfeeding can usually begin soon after.

**Incision Care**
Keep the incision clean and dry. Showers are usually allowed after 24 hours. Watch for redness, drainage, or fever. Steri-Strips will fall off on their own.

**Activity Restrictions**
No driving while taking narcotics. No heavy lifting (heavier than the baby). Hold a pillow over the incision when coughing or sneezing. Gradually increase activity as tolerated.

**Warning Signs**
Call your doctor for fever over 100.4°F, heavy bleeding (soaking a pad in an hour), severe pain not relieved by medication, redness or drainage from incision, or signs of blood clots (leg swelling, chest pain, shortness of breath).

**Future Pregnancies**
Discuss VBAC (Vaginal Birth After Cesarean) with your doctor. Many women can safely deliver vaginally after a previous C-section, depending on the type of incision and reason for the first C-section.`,
      keyTerms: [
        { term: 'Lochia', definition: 'Postpartum vaginal discharge' },
        { term: 'VBAC', definition: 'Vaginal Birth After Cesarean' },
        { term: 'Puerperium', definition: 'Postpartum recovery period (6 weeks)' },
        { term: 'Bonding', definition: 'Developing parent-infant attachment' },
        { term: 'Skin-to-skin', definition: 'Baby placed on mother\'s chest' }
      ],
      clinicalNotes: 'VBAC success rate is 60-80% for appropriate candidates. Trial of labor after cesarean (TOLAC) carries small risk of uterine rupture (0.5-1%). Postpartum venous thromboembolism prophylaxis is important.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['c-section', 'obstetrics', 'surgery'],
    keywords: ['c-section', 'cesarean', 'delivery', 'birth']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
