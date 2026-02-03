import { EducationalContent } from '../../types';

export const recoveryBasicsContent: EducationalContent = {
  id: 'recovery-basics',
  type: 'topic',
  name: 'Post-Procedure Recovery Basics',
  alternateNames: ['Recovery After Procedure', 'Postoperative Recovery', 'Healing After Surgery'],
  levels: {
    1: {
      level: 1,
      summary: 'Recovery is the time your body needs to heal after a medical procedure. How long recovery takes depends on the type of procedure you had, your overall health, and how well you follow your care instructions.',
      explanation: `## Understanding Recovery

Recovery is the time your body needs to heal after a medical procedure. How long recovery takes depends on the type of procedure you had, your overall health, and how well you follow your care instructions.

### Key Points

- Recovery time varies by procedure
- Everyone heals at their own pace
- Following instructions helps you heal faster
- Rest is an important part of recovery

### Important Terms

- **Recovery**: Time needed to heal after procedure
- **Healing**: Process of tissue repair
- **Discharge**: Leaving the hospital after procedure`,
      keyTerms: [
        { term: 'Recovery', definition: 'Time needed to heal after procedure' },
        { term: 'Healing', definition: 'Process of tissue repair' },
        { term: 'Discharge', definition: 'Leaving the hospital after procedure' }
      ],
      patientCounselingPoints: [
        'Everyone recovers at their own pace - don\'t compare yourself to others',
        'Rest is not being lazy - it\'s an essential part of healing',
        'Following your care instructions helps prevent complications'
      ]
    },
    2: {
      level: 2,
      summary: 'The hours and days immediately after your procedure are critical for starting your recovery on the right track. You\'ll be monitored until stable, pain management begins, you\'ll receive discharge instructions, and should arrange for someone to help you.',
      explanation: `## Immediate Post-Procedure Period

The hours and days immediately after your procedure are critical for starting your recovery on the right track.

### Key Points

- You'll be monitored until stable
- Pain management begins right away
- You'll receive discharge instructions
- Arrange for someone to help you

### What to Expect

**Recovery Room**
After the procedure, you'll spend time in a recovery area where nurses monitor your vital signs (heart rate, blood pressure, oxygen). You'll gradually wake from anesthesia.

**Pain Management**
Pain control starts before discharge. You may receive IV medication, pills, or patches. Rating your pain helps staff adjust your medication.

**Discharge Planning**
Before leaving, you'll receive written instructions. Make sure you understand them. Ask questions about medications, activity restrictions, and warning signs.

**Getting Home**
If you had sedation or anesthesia, someone else must drive you. You shouldn't drive for 24 hours. Have your prescriptions filled before going home.`,
      keyTerms: [
        { term: 'Vital signs', definition: 'Measurements of body functions (BP, HR, etc.)' },
        { term: 'Anesthesia', definition: 'Medication preventing pain/sensation' },
        { term: 'Discharge instructions', definition: 'Written home care guidelines' },
        { term: 'Responsible adult', definition: 'Person to drive and help you' }
      ],
      patientCounselingPoints: [
        'You may feel groggy for several hours after sedation or anesthesia',
        'Have someone stay with you the first night after your procedure',
        'Read your discharge instructions carefully and ask questions'
      ]
    },
    3: {
      level: 3,
      summary: 'The first week after a procedure is a crucial time for healing. Expect to tire easily and need extra rest, manage your pain as directed, watch for signs of complications, and accept help from others.',
      explanation: `## The First Week at Home

The first week after a procedure is a crucial time for healing. Expect to tire easily and need extra rest.

### Key Points

- Rest is your priority this week
- Manage your pain as directed
- Watch for signs of complications
- Accept help from others

### First Week Expectations

**Energy Levels**
You'll likely feel more tired than usual. This is normal. Plan short activities with rest periods in between. Nap when your body tells you to.

**Medication Management**
Take medications exactly as prescribed. Don't skip doses or wait until pain is severe. Some pain meds cause constipation - you may need stool softeners.

**Incision Care**
Keep incisions clean and dry. You may have Steri-Strips or small bandages. Don't submerge in water (baths, swimming) until cleared. Watch for redness or drainage.

**Nutrition and Hydration**
Eat when you feel hungry. Focus on protein for healing and fiber to prevent constipation. Drink plenty of water unless you have fluid restrictions.`,
      keyTerms: [
        { term: 'Sterile technique', definition: 'Clean method for wound care' },
        { term: 'Constipation', definition: 'Difficulty having bowel movements' },
        { term: 'Stool softener', definition: 'Medication preventing hard stools' },
        { term: 'Incision', definition: 'Surgical cut' }
      ],
      examples: [
        'A patient naps twice daily during their first week of recovery',
        'Someone sets phone reminders to take their pain medication on schedule'
      ]
    },
    4: {
      level: 4,
      summary: 'Balancing rest and gentle activity helps prevent complications while your body heals. Walk frequently to prevent complications, avoid strenuous activity as directed, gradually increase your activity, and listen to your body.',
      explanation: `## Activity During Recovery

Balancing rest and gentle activity helps prevent complications while your body heals.

### Key Points

- Walk frequently to prevent complications
- Avoid strenuous activity as directed
- Gradually increase your activity
- Listen to your body

### Activity Guidelines

**Why Activity Matters**
Moving around prevents blood clots in your legs. It helps prevent pneumonia after anesthesia. It improves circulation and healing. It reduces constipation.

**Safe Activities**
Short, frequent walks are excellent. Light household tasks as tolerated. Climbing stairs is usually okay. Gentle stretching if approved.

**Activities to Avoid**
No heavy lifting (usually 10+ pounds). No strenuous exercise. No driving while on narcotics. No baths, swimming, or soaking incisions until cleared.

**Returning to Work**
Depends on your procedure and job type. Desk work: 1-2 weeks. Physical labor: 4-8 weeks. Discuss timing with your doctor before returning.`,
      keyTerms: [
        { term: 'Deep vein thrombosis', definition: 'Blood clot in deep veins' },
        { term: 'Pneumonia', definition: 'Lung infection' },
        { term: 'Narcotics', definition: 'Strong pain medications' },
        { term: 'Atrial fibrillation', definition: 'Irregular heartbeat' }
      ],
      clinicalNotes: 'Early ambulation within 24 hours reduces VTE risk by up to 60%. Pulmonary complications are reduced with incentive spirometry and deep breathing.'
    },
    5: {
      level: 5,
      summary: 'Taking an active role in your recovery can help you heal faster and return to normal activities sooner. Prepare your home before your procedure, follow all postoperative instructions, attend all follow-up appointments, and communicate concerns to your healthcare team.',
      explanation: `## Optimizing Your Recovery

Taking an active role in your recovery can help you heal faster and return to normal activities sooner.

### Key Points

- Prepare your home before your procedure
- Follow all postoperative instructions
- Attend all follow-up appointments
- Communicate concerns to your healthcare team

### Recovery Optimization

**Pre-Procedure Preparation**
Arrange help for meals, childcare, and transportation. Prepare and freeze meals. Set up a recovery area with pillows, blankets, phone charger, and entertainment within reach. Remove tripping hazards.

**Medication Optimization**
Understand your medications - what each does and when to take it. Use pain medication before activities. Stay ahead of pain rather than chasing it. Discuss weaning off medications with your doctor.

**Nutrition for Healing**
Protein builds tissue (lean meats, eggs, beans). Vitamin C helps wounds heal (citrus, peppers, strawberries). Zinc supports immune function. Iron helps if you had blood loss. Stay hydrated.

**Mental Health During Recovery**
Mood changes during recovery are common. Frustration, boredom, and temporary sadness are normal. Stay connected with friends and family. Ask for help if you feel overwhelmed.

**When to Contact Your Doctor**
Fever over 101°F, increasing pain, redness or drainage from incisions, nausea/vomiting, inability to urinate, leg swelling or pain, shortness of breath, or any symptom that concerns you.`,
      keyTerms: [
        { term: 'Prehabilitation', definition: 'Preparing before surgery for better recovery' },
        { term: 'Macronutrients', definition: 'Protein, carbs, fats for healing' },
        { term: 'Micronutrients', definition: 'Vitamins and minerals' },
        { term: 'Depression', definition: 'Persistent sadness needing treatment' },
        { term: 'Anxiety', definition: 'Excessive worry or nervousness' }
      ],
      clinicalNotes: 'Enhanced Recovery After Surgery (ERAS) protocols reduce hospital stay and complications. Multimodal pain management reduces opioid requirements.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['recovery', 'post-procedure care', 'healing'],
    keywords: ['recovery', 'postoperative', 'healing', 'discharge', 'activity']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
