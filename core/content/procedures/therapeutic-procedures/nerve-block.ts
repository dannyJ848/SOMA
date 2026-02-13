import { EducationalContent } from '../../types';

export const nerveBlockContent: EducationalContent = {
  id: 'nerve-block',
  type: 'topic',
  name: 'Nerve Block',
  alternateNames: ['Nerve Block Injection', 'Neural Blockade', 'Regional Block'],
  levels: {
    1: {
      level: 1,
      summary: 'A nerve block is a procedure where medication is injected near or around a nerve or group of nerves to block pain signals from traveling through that nerve to your brain, providing pain relief.',
      explanation: `## What is a Nerve Block?

A nerve block is a procedure where medication is injected near or around a nerve or group of nerves. The medication blocks pain signals from traveling through that nerve to your brain, providing pain relief.

### Key Points

- Injects medication near specific nerves
- Blocks pain signals from reaching the brain
- Can provide temporary or long-lasting relief
- Used for both diagnosis and treatment

### Important Terms

- **Nerve**: Bundle of fibers carrying signals
- **Anesthetic**: Medication that numbs sensation
- **Pain signals**: Messages sent to brain indicating pain`,
      keyTerms: [
        { term: 'Nerve', definition: 'Bundle of fibers carrying signals' },
        { term: 'Anesthetic', definition: 'Medication that numbs sensation' },
        { term: 'Pain signals', definition: 'Messages sent to brain indicating pain' }
      ],
      patientCounselingPoints: [
        'Nerve blocks can provide significant pain relief without surgery',
        'The procedure is usually quick and done with local anesthesia',
        'Pain relief can last from hours to months depending on the type',
        'Nerve blocks can help identify where your pain is coming from'
      ]
    },
    2: {
      level: 2,
      summary: 'Nerve blocks are categorized by duration (temporary vs. long-lasting) and type (sympathetic blocks for autonomic nerves, peripheral blocks for specific nerves, neurolytic blocks for long-term relief).',
      explanation: `## Types of Nerve Blocks

Nerve blocks can be categorized by the location treated, duration of effect, and whether they're used for diagnosis or treatment.

### Key Points

- Sympathetic nerve blocks affect autonomic nerves
- Peripheral nerve blocks target specific nerves
- Neurolytic blocks provide longer-term relief
- Diagnostic blocks identify pain sources

### Block Types

**By Duration**
Temporary blocks: local anesthetic lasts hours to days. Long-acting blocks: include steroids that last weeks to months. Neurolytic blocks: destroy nerve tissue for months to years of relief.

**Common Sympathetic Blocks**
Stellate ganglion block (upper body/face), lumbar sympathetic block (lower extremities), celiac plexus block (abdominal organs).

**Common Peripheral Blocks**
Intercostal (rib nerves), suprascapular (shoulder), genicular (knee), ilioinguinal (groin), occipital (head).

**Spinal and Epidural**
Epidural steroid injections (spinal), facet joint blocks (spine joints), sacroiliac joint blocks (pelvis).`,
      keyTerms: [
        { term: 'Sympathetic nerves', definition: 'Autonomic nerves controlling involuntary functions' },
        { term: 'Neurolytic', definition: 'Destroying nerve tissue' },
        { term: 'Stellate ganglion', definition: 'Nerve cluster in neck' },
        { term: 'Celiac plexus', definition: 'Nerve network in abdomen' }
      ],
      patientCounselingPoints: [
        'Different types of nerve blocks are used for different pain conditions',
        'Your doctor will recommend the best type for your specific pain problem',
        'Some blocks are diagnostic to help find the source of your pain'
      ]
    },
    3: {
      level: 3,
      summary: 'Nerve blocks are used to treat various painful conditions including complex regional pain syndrome (CRPS), shingles pain (postherpetic neuralgia), cancer pain, chronic back pain, and neuropathic pain syndromes.',
      explanation: `## Why are Nerve Blocks Performed?

Nerve blocks are used to treat various painful conditions and can help identify the specific source of pain.

### Key Points

- Treat chronic pain conditions
- Manage acute post-surgical pain
- Diagnose the source of pain
- Treat certain types of headaches

### Conditions Treated

**Chronic Pain Conditions**
Complex regional pain syndrome (CRPS), shingles pain (postherpetic neuralgia), cancer pain, chronic back pain, and neuropathic pain syndromes.

**Surgical Applications**
Used during and after surgery to reduce pain and opioid use. Common for orthopedic surgeries, chest surgeries, and procedures on extremities.

**Diagnostic Applications**
A diagnostic block uses only local anesthetic. If pain resolves, the targeted nerve is confirmed as the pain source. Guides further treatment.

**Headache Treatment**
Occipital nerve blocks for migraines and occipital neuralgia. Sphenopalatine ganglion blocks for cluster headaches and facial pain.`,
      keyTerms: [
        { term: 'CRPS', definition: 'Complex Regional Pain Syndrome - chronic nerve pain' },
        { term: 'Postherpetic neuralgia', definition: 'Pain after shingles' },
        { term: 'Neuropathic pain', definition: 'Pain from nerve damage' },
        { term: 'Occipital neuralgia', definition: 'Pain from occipital nerve irritation' }
      ],
      examples: [
        'A patient with shingles gets a nerve block to treat persistent pain',
        'Someone with chronic low back pain has a facet joint block to identify the pain source'
      ]
    },
    4: {
      level: 4,
      summary: 'Nerve block procedures are performed using imaging guidance (fluoroscopy or ultrasound) with local anesthesia and possibly sedation, taking 15-30 minutes for the actual injection.',
      explanation: `## The Nerve Block Procedure

Nerve blocks are performed using imaging guidance to ensure precise needle placement.

### Key Points

- Uses imaging guidance for accuracy
- Local anesthesia numbs the skin
- Usually takes 15-30 minutes
- Can be done in an office or clinic setting

### Procedure Details

**Preparation**
You lie on a table or sit in a comfortable position. The area is cleaned with antiseptic. Monitors track your vital signs.

**Imaging Guidance**
Fluoroscopy (live X-ray) or ultrasound shows the needle position in real time. This ensures accurate placement near the target nerve.

**Needle Placement**
Local anesthesia numbs the skin and deeper tissue. A thin needle is advanced toward the target nerve under imaging guidance.

**Injection**
Once positioned correctly, medication is injected. You may feel pressure during the injection. The needle is removed and a bandage is applied.`,
      keyTerms: [
        { term: 'Fluoroscopy', definition: 'Live X-ray imaging' },
        { term: 'Live X-ray', definition: 'Real-time X-ray imaging' },
        { term: 'Contrast dye', definition: 'Dye confirming needle position' },
        { term: 'Sedation', definition: 'Medication for relaxation' }
      ],
      clinicalNotes: 'Ultrasound offers real-time visualization without radiation. Fluoroscopy provides excellent bone detail. Sedation may be anxious patients or complex procedures. Steroid preparations can be particulate or non-particulate.'
    },
    5: {
      level: 5,
      summary: 'After nerve block, pain relief can begin within minutes to hours and last days to months, with possible side effects including temporary numbness, soreness at the injection site, and rare serious complications.',
      explanation: `## Recovery and Results

Recovery from nerve block is usually quick, with pain relief beginning soon after the procedure.

### Key Points

- Pain relief often begins within minutes
- Duration varies by type of block
- Some soreness at injection site is normal
- Most people can return to normal activities quickly

### Recovery Details

**Immediate Recovery**
You'll be monitored for 20-30 minutes after the procedure. You may notice immediate relief if the block is successful. You can go home after a short observation period.

**Expected Duration**
Temporary blocks: hours to days. Steroid blocks: weeks to months. Neurolytic blocks: months to years. Effects vary by individual and condition.

**Side Effects**
Temporary numbness in the area, soreness or bruising at the injection site, rare temporary weakness if motor nerve affected. Most side effects resolve within hours to days.

**Return to Activities**
Rest for the remainder of the day. Gradually return to normal activities the next day as tolerated. Your doctor will discuss specific restrictions.

**When to Call Your Doctor**
Severe pain not relieved by medication, fever, signs of infection at injection site, weakness or paralysis lasting more than 24 hours, or new neurological symptoms.`,
      keyTerms: [
        { term: 'Motor nerve', definition: 'Nerve controlling movement' },
        { term: 'Sensory nerve', definition: 'Nerve carrying sensation' },
        { term: 'Paresthesia', definition: 'Tingling or numb sensation' },
        { term: 'Neuritis', definition: 'Nerve inflammation' },
        { term: 'Neuroma', definition: 'Painful nerve scar tissue' }
      ],
      clinicalNotes: 'Success rates vary by block type and condition. Repeated blocks may provide cumulative benefit. Neurolytic blocks using alcohol or phenol provide longer relief but carry higher risk of neuritis. Systemic steroid effects are minimal with local administration.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['nerve block', 'pain management', 'anesthesiology'],
    keywords: ['nerve block', 'pain management', 'regional anesthesia']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
