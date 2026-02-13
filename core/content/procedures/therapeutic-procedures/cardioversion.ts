import { EducationalContent } from '../../types';

export const cardioversionContent: EducationalContent = {
  id: 'cardioversion',
  type: 'topic',
  name: 'Cardioversion',
  alternateNames: ['Electrical Cardioversion', 'DC Cardioversion', 'Synchronized Shock'],
  levels: {
    1: {
      level: 1,
      summary: 'Cardioversion is a procedure used to restore a normal heart rhythm when your heart is beating irregularly or too fast, using an electrical shock to reset your heart\'s electrical system.',
      explanation: `## What is Cardioversion?

Cardioversion is a procedure used to restore a normal heart rhythm when your heart is beating irregularly or too fast. It uses an electrical shock to reset your heart's electrical system.

### Key Points

- Resets abnormal heart rhythm to normal
- Uses controlled electrical shock
- Treats atrial fibrillation and other arrhythmias
- Can prevent complications like stroke

### Important Terms

- **Arrhythmia**: Irregular heartbeat
- **Atrial fibrillation**: Irregular, rapid heart rhythm
- **Normal sinus rhythm**: Normal heart rhythm`,
      keyTerms: [
        { term: 'Arrhythmia', definition: 'Irregular heartbeat' },
        { term: 'Atrial fibrillation', definition: 'Irregular, rapid heart rhythm' },
        { term: 'Normal sinus rhythm', definition: 'Normal heart rhythm' }
      ],
      patientCounselingPoints: [
        'Cardioversion can restore normal heart rhythm and reduce stroke risk',
        'You will be asleep during the procedure and won\'t feel the shock',
        'Most people go home the same day after a short recovery',
        'You may need to take blood thinners before and after the procedure'
      ]
    },
    2: {
      level: 2,
      summary: 'There are two main types of cardioversion: electrical (using shock) and chemical (using medication), with electrical being more effective for many arrhythmias.',
      explanation: `## Types of Cardioversion

There are two main types of cardioversion: electrical (using shock) and chemical (using medication). Each has its advantages and specific uses.

### Key Points

- Electrical cardioversion uses a shock
- Chemical cardioversion uses medication
- Electrical is more effective for many arrhythmias
- Chemical may be tried first in some cases

### Cardioversion Types

**Electrical Cardioversion**
An electrical shock is delivered to the heart through patches on the chest. This briefly stops all electrical activity, allowing the heart's natural pacemaker to restart with normal rhythm.

**Chemical Cardioversion**
Antiarrhythmic medications are given intravenously or by mouth to restore normal rhythm. May be used first or when electrical cardioversion isn't appropriate.

**Synchronized Cardioversion**
The shock is timed with the heartbeat (synchronized) to avoid triggering dangerous rhythms. Used for most arrhythmias.

**Emergency vs. Elective**
Emergency: for unstable arrhythmias causing severe symptoms. Elective: scheduled for stable arrhythmias after appropriate preparation.`,
      keyTerms: [
        { term: 'Antiarrhythmic', definition: 'Medication treating irregular heartbeat' },
        { term: 'Synchronized shock', definition: 'Shock timed with heartbeat' },
        { term: 'Defibrillation', definition: 'Unsynchronized shock for cardiac arrest' },
        { term: 'Elective', definition: 'Planned, non-emergency procedure' }
      ],
      patientCounselingPoints: [
        'Your doctor will discuss which type of cardioversion is best for you',
        'Chemical cardioversion may be tried first in some cases',
        'Electrical cardioversion has a higher success rate for many arrhythmias'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper preparation for cardioversion includes blood thinners for weeks before if you have atrial fibrillation, fasting for several hours, and arranging for someone to drive you home.',
      explanation: `## Preparing for Cardioversion

Proper preparation is essential for a safe and successful cardioversion procedure.

### Key Points

- You may need blood thinners for weeks before
- Fasting is required for several hours
- Bring your medications to the hospital
- Arrange for someone to drive you home

### Preparation Details

**Anticoagulation**
If you have atrial fibrillation for more than 48 hours, you'll need blood thinners for at least 3 weeks before cardioversion to prevent stroke. A transesophageal echo may be done instead.

**Medication Adjustments**
Your doctor may adjust your antiarrhythmic medications before the procedure. Bring a complete list of all medications you take.

**Before the Procedure**
Don't eat or drink for 6-8 hours before. Remove jewelry and nail polish. Arrive at the hospital or clinic at your scheduled time. Sign consent forms.

**What to Bring**
List of medications, insurance information, comfortable clothing for going home, and a responsible adult to drive you home.`,
      keyTerms: [
        { term: 'Anticoagulation', definition: 'Blood thinning treatment' },
        { term: 'Transesophageal echo', definition: 'Heart scan through swallowing probe' },
        { term: 'TEE', definition: 'Transesophageal echocardiogram' },
        { term: 'Consent forms', definition: 'Documents giving permission for procedure' }
      ],
      examples: [
        'A patient with atrial fibrillation for 3 months takes warfarin for 4 weeks before cardioversion',
        'Someone with a new arrhythmia may have cardioversion without extended blood thinners'
      ]
    },
    4: {
      level: 4,
      summary: 'During cardioversion you receive brief general anesthesia, patches are placed on your chest, and a controlled shock is delivered to restore normal heart rhythm.',
      explanation: `## The Cardioversion Procedure

During electrical cardioversion, you'll be asleep while a controlled shock is delivered to restore your heart rhythm.

### Key Points

- You receive brief general anesthesia
- Patches are placed on your chest
- A controlled shock is delivered
- The procedure takes about 30 minutes

### Procedure Details

**Getting Started**
An IV is placed. You're connected to heart and blood pressure monitors. Oxygen may be given. You'll lie on a table with your chest exposed.

**Anesthesia**
Short-acting anesthesia is given through the IV. You'll be unconscious for just a few minutes. You won't feel the shock or remember the procedure.

**The Shock**
Patches or paddles are placed on your chest. A synchronized shock is delivered. The medical team watches the heart monitor to see if normal rhythm is restored.

**If Rhythm Doesn't Convert**
The shock may be repeated with higher energy. Sometimes different pad positions are tried. If unsuccessful, medication management or other approaches are considered.`,
      keyTerms: [
        { term: 'Patches', definition: 'Adhesive electrodes delivering shock' },
        { term: 'Paddles', definition: 'Handheld electrodes for shock delivery' },
        { term: 'Joules', definition: 'Unit of electrical energy for shocks' },
        { term: 'Conversion', definition: 'Successfully restoring normal rhythm' }
      ],
      clinicalNotes: 'Biphasic waveform shocks are more effective than monophasic. Success rate for atrial fibrillation is 60-90% depending on duration. Post-cardioversion anticoagulation is required for at least 4 weeks.'
    },
    5: {
      level: 5,
      summary: 'After cardioversion, most people go home the same day and continue blood thinners, with the arrhythmia possibly returning over time requiring repeat procedures or medication management.',
      explanation: `## Recovery and Results

Most people go home the same day after cardioversion. Continued treatment is important to maintain normal rhythm.

### Key Points

- You'll be monitored until fully awake
- You'll need to keep taking blood thinners
- Normal rhythm may be maintained long-term
- The arrhythmia may return over time

### Recovery Details

**Immediate Recovery**
You'll wake up within minutes. Your heart rhythm and vital signs are monitored. You may have minor chest discomfort or skin redness where patches were placed.

**Going Home**
Most people go home after a few hours. Someone must drive you. Rest for the remainder of the day. Resume normal activities the next day unless told otherwise.

**Maintaining Normal Rhythm**
Continue blood thinners for at least 4 weeks after successful cardioversion. You may be started on antiarrhythmic medication. Treat underlying causes (thyroid, sleep apnea).

**Recurrence Risk**
Arrhythmia may return, especially atrial fibrillation. Risk depends on underlying heart condition, duration of arrhythmia, and other factors. Repeat cardioversion may be needed.

**When to Call Your Doctor**
Chest pain, palpitations, dizziness, fainting, shortness of breath, signs of stroke (face drooping, arm weakness, speech difficulty).`,
      keyTerms: [
        { term: 'Maintenance therapy', definition: 'Treatment to keep normal rhythm' },
        { term: 'Recurrence', definition: 'Return of the arrhythmia' },
        { term: 'Palpitations', definition: 'Awareness of heart beating' },
        { term: 'Stroke symptoms', definition: 'Signs of brain blood flow problem' },
        { term: 'Antiarrhythmic', definition: 'Medication preventing arrhythmias' }
      ],
      clinicalNotes: 'Long-term sinus rhythm maintenance after AF cardioversion is approximately 20-30% without antiarrhythmic drugs. Rate control and anticoagulation remain mainstays of AF management regardless of rhythm.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['cardioversion', 'cardiology', 'arrhythmia'],
    keywords: ['cardioversion', 'arrhythmia', 'atrial fibrillation', 'defibrillation']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
