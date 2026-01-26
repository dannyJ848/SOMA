import { EducationalContent } from '../../types';

export const herniaRepairContent: EducationalContent = {
  id: 'hernia-repair',
  type: 'topic',
  name: 'Hernia Repair',
  alternateNames: ['Herniorrhaphy', 'Hernioplasty', 'Hernia Surgery'],
  levels: {
    1: {
      level: 1,
      summary: 'A hernia occurs when an internal organ pushes through a weak area of muscle or tissue, and hernia repair surgery returns the organ to its proper place and strengthens the weakened area.',
      explanation: `## What is a Hernia?

A hernia occurs when an internal organ pushes through a weak area of muscle or tissue. Most hernias happen in the abdomen, between the chest and hips. Hernia repair surgery returns the organ to its proper place and strengthens the weakened area.

### Key Points

- Organ pushes through weakened muscle
- Most common in the abdomen
- Can cause a visible bulge and discomfort
- Surgery is the only effective treatment

### Important Terms

- **Hernia**: Organ/tissue pushing through muscle
- **Inguinal**: Groin area
- **Mesh**: Material reinforcing weak tissue`,
      keyTerms: [
        { term: 'Hernia', definition: 'Organ/tissue pushing through muscle' },
        { term: 'Inguinal', definition: 'Groin area' },
        { term: 'Mesh', definition: 'Material reinforcing weak tissue' }
      ],
      patientCounselingPoints: [
        'Hernias never heal on their own - surgery is the only treatment',
        'Most hernia repairs are outpatient procedures',
        'You can usually return to normal activities within a few weeks',
        'Surgery prevents serious complications like strangulation'
      ]
    },
    2: {
      level: 2,
      summary: 'There are several types of hernias including inguinal (most common in men), femoral (more in women), umbilical (at the navel), and incisional (at surgical scars).',
      explanation: `## Types of Hernias

There are several types of hernias, classified by where they occur in the body.

### Key Points

- Inguinal hernias are most common in men
- Femoral hernias occur more in women
- Umbilical hernias happen at the navel
- Incisional hernias develop at surgical scars

### Hernia Types

**Inguinal Hernia**
Most common type. Occurs in the groin when intestine pushes through the inguinal canal. More common in men due to natural anatomical weakness.

**Femoral Hernia**
Occurs in the upper thigh, more common in women. These have higher risk of complications and need prompt repair.

**Umbilical Hernia**
Occurs at the belly button. Common in infants (usually closes by age 1-2). In adults, often caused by obesity, pregnancy, or fluid in abdomen.

**Incisional Hernia**
Develops at the site of a previous surgical incision. The scar tissue weakens over time, allowing underlying tissue to push through.

**Other Types**
Hiatal hernia (stomach through diaphragm), epigastric hernia (above navel), and Spigelian hernia (side of abdomen).`,
      keyTerms: [
        { term: 'Inguinal canal', definition: 'Passage in groin for spermatic cord' },
        { term: 'Hiatal hernia', definition: 'Stomach pushing through diaphragm' },
        { term: 'Epigastric', definition: 'Area above the navel' },
        { term: 'Spigelian', definition: 'Hernia at the side of abdominal muscles' }
      ],
      patientCounselingPoints: [
        'Inguinal hernias are much more common in men than women',
        'Umbilical hernias in babies often close on their own',
        'Any hernia that becomes painful or cannot be pushed back needs urgent medical attention'
      ]
    },
    3: {
      level: 3,
      summary: 'Hernia repair is needed for painful or enlarging hernias, with incarcerated hernias being medical emergencies requiring urgent attention, and watchful waiting being an option for small symptomless hernias.',
      explanation: `## When is Hernia Repair Needed?

Not all hernias need immediate repair, but surgery is the only way to fix a hernia permanently.

### Key Points

- Painful or enlarging hernias need repair
- Incarcerated hernias are medical emergencies
- Watchful waiting may be an option
- Surgery prevents serious complications

### Repair Timing

**Symptoms Needing Repair**
Pain or discomfort, especially with activity. Hernia that grows larger over time. Symptoms interfering with daily activities. Patient preference for repair.

**Emergency Repair**
Strangulated hernia (blood supply cut off) is an emergency. Incarcerated hernia (stuck and cannot be pushed back) needs urgent attention. Seek immediate care for severe pain, nausea/vomiting, or hernia that becomes hard or red.

**Watchful Waiting**
For small, symptomless hernias, observation may be reasonable. The patient monitors for changes. However, hernias never heal themselves and will eventually enlarge.

**Risks of Not Repairing**
Hernias enlarge over time, making repair harder. Risk of incarceration and strangulation increases. Emergency surgery has higher complication rates than elective repair.`,
      keyTerms: [
        { term: 'Incarcerated', definition: 'Hernia that cannot be pushed back' },
        { term: 'Strangulated', definition: 'Blood supply cut off from hernia' },
        { term: 'Watchful waiting', definition: 'Monitoring condition without treatment' },
        { term: 'Elective repair', definition: 'Planned, non-emergency surgery' }
      ],
      examples: [
        'A small asymptomatic inguinal hernia may be safely observed',
        'A hernia that suddenly becomes painful and hard requires emergency surgery'
      ]
    },
    4: {
      level: 4,
      summary: 'Hernia repair can be performed using open surgery or laparoscopic techniques, with most repairs using mesh to reinforce the weakened area and reduce recurrence risk.',
      explanation: `## The Hernia Repair Procedure

Hernia repair can be performed using open surgery or laparoscopic techniques. Most repairs use mesh to reinforce the weakened area.

### Key Points

- Can be done open or laparoscopically
- Mesh is used to reinforce the repair
- Usually outpatient surgery
- General or local anesthesia possible

### Procedure Options

**Open Repair**
One incision directly over the hernia. The surgeon pushes the protruding tissue back. Mesh is placed over the weakened area. The incision is closed with sutures or staples.

**Laparoscopic Repair**
Several small incisions. The abdomen may be inflated. Camera and instruments are inserted. Mesh is placed from inside the abdomen behind the muscle defect.

**Mesh Benefits**
Mesh reinforces the weak area, reducing recurrence risk. It becomes incorporated into your own tissue over time. Mesh can be synthetic or biological.

**Anesthesia Options**
General anesthesia (being asleep) is common. For some hernias, local anesthesia with sedation (awake but relaxed) may be an option.`,
      keyTerms: [
        { term: 'Recurrence', definition: 'Hernia coming back after repair' },
        { term: 'Synthetic mesh', definition: 'Man-made material for repair' },
        { term: 'Biological mesh', definition: 'Animal or human tissue material' },
        { term: 'Local anesthesia', definition: 'Numbing only the surgical area' }
      ],
      clinicalNotes: 'Laparoscopic repair has faster recovery but longer operative time. Mesh reduces recurrence from 10-15% without mesh to 1-3% with mesh. Chronic pain affects 5-10% after repair.'
    },
    5: {
      level: 5,
      summary: 'Recovery from hernia repair includes same-day discharge, gradual return to activities, heavy lifting restrictions for 4-6 weeks, and measures to prevent recurrence including weight management and proper lifting techniques.',
      explanation: `## Recovery and Prevention

Recovery from hernia repair is usually straightforward, but proper postoperative care is important for healing and preventing recurrence.

### Key Points

- Most go home same day
- Gradual return to normal activities
- Heavy lifting restrictions for several weeks
- Recurrence rate is low with proper repair

### Recovery Details

**Immediate Recovery**
You'll rest in recovery until anesthesia wears off. Pain medication will be provided. You'll be encouraged to walk. Most go home the same day.

**Activity Guidelines**
Walk frequently to promote healing and prevent blood clots. No heavy lifting (10+ lbs) for 4-6 weeks. Gradually increase activity as tolerated. Driving when off narcotics and can move freely.

**Incision Care**
Keep incisions clean and dry. Showers are usually allowed after 24-48 hours. Watch for redness, drainage, or fever. Steri-Strips will fall off on their own.

**Diet and Bowels**
Normal diet when you get home. Drink plenty of water and eat fiber to prevent constipation, which can strain the incision. Stool softeners may be recommended.

**Preventing Recurrence**
Maintain a healthy weight. Use proper lifting techniques (lift with legs, not back). Treat chronic coughing or constipation. Exercise abdominal muscles to strengthen core.`,
      keyTerms: [
        { term: 'Constipation', definition: 'Difficulty having bowel movements' },
        { term: 'Stool softener', definition: 'Medication preventing hard stools' },
        { term: 'Core strengthening', definition: 'Exercises for abdominal muscles' },
        { term: 'Seroma', definition: 'Fluid collection at surgical site' },
        { term: 'Hematoma', definition: 'Collection of blood at surgical site' }
      ],
      clinicalNotes: 'Recurrence rate is approximately 1-3% with mesh repair. Seromas are common and usually resolve spontaneously. Chronic neuropathic pain may require nerve blocks or mesh removal in rare cases.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['hernia repair', 'surgery', 'hernia'],
    keywords: ['hernia', 'hernia repair', 'inguinal', 'surgery']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
