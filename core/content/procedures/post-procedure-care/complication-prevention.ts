import { EducationalContent } from '../../types';

export const complicationPreventionContent: EducationalContent = {
  id: 'complication-prevention',
  type: 'topic',
  name: 'Preventing Post-Procedure Complications',
  alternateNames: ['Complication Prevention', 'Post-Procedure Safety', 'Recovery Safety'],
  levels: {
    1: {
      level: 1,
      summary: 'Complications are unexpected problems that can occur after a medical procedure. Knowing what to watch for and how to prevent problems helps you recover safely.',
      explanation: `## Understanding Complications

Complications are unexpected problems that can occur after a medical procedure. Knowing what to watch for and how to prevent problems helps you recover safely.

### Key Points

- Complications are uncommon but possible
- Early recognition leads to better outcomes
- Following instructions reduces your risk
- When in doubt, call your doctor

### Important Terms

- **Complication**: Unexpected medical problem
- **Prevention**: Stopping problems before they occur
- **Warning signs**: Symptoms indicating a problem`,
      keyTerms: [
        { term: 'Complication', definition: 'Unexpected medical problem' },
        { term: 'Prevention', definition: 'Stopping problems before they occur' },
        { term: 'Warning signs', definition: 'Symptoms indicating a problem' }
      ],
      patientCounselingPoints: [
        'Most procedures go smoothly without any complications',
        'Following your care instructions is the best way to prevent problems',
        'Call your doctor if something doesn\'t seem right'
      ]
    },
    2: {
      level: 2,
      summary: 'Being aware of common complications helps you recognize them early and get prompt treatment. Common complications include infection, bleeding, blood clots, and medication reactions.',
      explanation: `## Common Complications

Being aware of common complications helps you recognize them early and get prompt treatment.

### Key Points

- Infection at the procedure site
- Bleeding or hematoma
- Blood clots in legs or lungs
- Adverse medication reactions

### Types of Complications

**Infection**
Can occur at incision sites, IV sites, or internally. Signs include redness, warmth, swelling, drainage, or fever. Prompt treatment with antibiotics is essential.

**Bleeding**
Some bruising is normal. Excessive bleeding or expanding hematoma (collection of blood) requires attention. Certain medications increase bleeding risk.

**Blood Clots**
Deep vein thrombosis (DVT) in legs can travel to lungs (pulmonary embolism). Risk factors include surgery type, immobility, and personal history. Prevention includes walking, compression devices, and blood thinners.

**Medication Issues**
Allergic reactions, side effects, or interactions can occur. Know what medications you're taking and their potential effects.`,
      keyTerms: [
        { term: 'DVT', definition: 'Deep Vein Thrombosis - blood clot in deep vein' },
        { term: 'Pulmonary embolism', definition: 'Blood clot in lungs' },
        { term: 'Hematoma', definition: 'Collection of blood' },
        { term: 'Antibiotics', definition: 'Medications treating infection' }
      ],
      patientCounselingPoints: [
        'Infection can develop even after you go home - watch for increasing redness',
        'Mild bruising around the incision is normal',
        'Blood clots are a serious but preventable complication'
      ]
    },
    3: {
      level: 3,
      summary: 'Proper wound care and hygiene are crucial for preventing infection after your procedure. This includes hand washing, keeping incisions clean and dry, and completing all prescribed antibiotics.',
      explanation: `## Preventing Infection

Proper wound care and hygiene are crucial for preventing infection after your procedure.

### Key Points

- Wash hands before touching your incision
- Keep incisions clean and dry
- Watch for signs of infection
- Complete all prescribed antibiotics

### Infection Prevention

**Hand Hygiene**
Wash hands thoroughly with soap and water before touching incisions or dressings. Ask anyone helping you to wash their hands too.

**Wound Care**
Follow specific instructions for your incision type. Some are kept dry, others can be showered. Don't apply creams or ointments unless directed. Change dressings as instructed.

**Recognizing Infection**
Increasing redness spreading from incision. Fever over 101°F. Pus or unusual drainage. Increasing pain after initial improvement. Warmth around the site.

**Antibiotic Compliance**
Take all antibiotics as prescribed, even if you feel better. Don't skip doses. Don't share antibiotics. Report any side effects to your doctor.`,
      keyTerms: [
        { term: 'Aseptic technique', definition: 'Infection-preventing method' },
        { term: 'Purulent', definition: 'Pus-containing' },
        { term: 'Erythema', definition: 'Redness of skin' },
        { term: 'Cellulitis', definition: 'Spreading skin infection' }
      ],
      patientCounselingPoints: [
        'Hand washing is the most important thing you can do to prevent infection',
        'Take all antibiotics even if you feel better',
        'Redness that spreads away from the incision needs attention'
      ]
    },
    4: {
      level: 4,
      summary: 'Blood clots are a serious complication that can often be prevented with proper measures including early and frequent walking, compression devices, blood thinners, and adequate hydration.',
      explanation: `## Preventing Blood Clots

Blood clots are a serious complication that can often be prevented with proper measures.

### Key Points

- Early and frequent walking
- Compression stockings or devices
- Blood thinners when prescribed
- Adequate hydration

### Blood Clot Prevention

**Mobility**
Walk frequently - the most effective prevention. Move your feet in circles while sitting. Avoid long periods of sitting still. Perform ankle pumps regularly.

**Compression Devices**
Sequential compression devices (SCD) squeeze legs in the hospital. Compression stockings may be prescribed for home use. Both improve blood flow.

**Blood Thinners**
Some people receive heparin shots after surgery. Others take pills like aspirin, warfarin, or DOACs. Take exactly as prescribed. Report unusual bruising or bleeding.

**Recognizing Clots**
DVT: leg swelling, warmth, redness, pain (usually one leg). PE: sudden shortness of breath, chest pain, coughing blood, rapid heartbeat. Call emergency services for PE symptoms.`,
      keyTerms: [
        { term: 'Ankle pumps', definition: 'Moving feet up and down to improve flow' },
        { term: 'SCD', definition: 'Sequential Compression Device' },
        { term: 'DOACs', definition: 'Direct oral anticoagulants - blood thinner pills' },
        { term: 'Heparin', definition: 'Injectable blood thinner' }
      ],
      clinicalNotes: 'Caprini risk assessment stratifies DVT risk. Extended prophylaxis may be indicated for high-risk abdominal/pelvic cancer surgery.'
    },
    5: {
      level: 5,
      summary: 'Knowing when to seek emergency care can save your life. Some symptoms require immediate medical attention including chest pain, difficulty breathing, severe bleeding, and neurological symptoms.',
      explanation: `## Recognizing Emergencies

Knowing when to seek emergency care can save your life. Some symptoms require immediate medical attention.

### Key Points

- Chest pain requires emergency care
- Difficulty breathing is urgent
- Severe bleeding needs attention
- Neurological symptoms are emergencies

### Emergency Symptoms

**Cardiac Emergencies**
Chest pain or pressure. Pain spreading to arm, neck, or jaw. Shortness of breath. Cold sweats. Nausea. Feeling of doom. These can indicate heart attack - call 911.

**Respiratory Emergencies**
Sudden shortness of breath. Difficulty breathing. Wheezing. Coughing up blood. Blue lips or nails. These can indicate pulmonary embolism or other serious problems.

**Stroke Symptoms (BE FAST)**
B - Balance: sudden loss of coordination. E - Eyes: vision changes. F - Face: drooping on one side. A - Arms: weakness on one side. S - Speech: slurred or absent. T - Time: call 911 immediately.

**Bleeding Emergencies**
Bleeding that doesn't stop after 10 minutes of pressure. Vomiting blood (red or coffee-ground appearance). Black, tarry stools. Large expanding bruise.

**Other Emergencies**
High fever (over 103°F). Severe headache with stiff neck. Severe abdominal pain. Sudden, severe pain anywhere. Loss of consciousness. Seizure.`,
      keyTerms: [
        { term: 'Myocardial infarction', definition: 'Heart attack' },
        { term: 'Cerebrovascular accident', definition: 'Stroke' },
        { term: 'Hypovolemic shock', definition: 'Low blood volume from bleeding' },
        { term: 'Sepsis', definition: 'Life-threatening body response to infection' },
        { term: 'Anaphylaxis', definition: 'Severe allergic reaction' }
      ],
      clinicalNotes: 'Time is critical for stroke and MI treatment. "Door to needle" times under 60 minutes for thrombolysis improves outcomes.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['complication prevention', 'post-procedure care', 'patient safety'],
    keywords: ['complications', 'infection prevention', 'blood clots', 'DVT', 'emergency']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
