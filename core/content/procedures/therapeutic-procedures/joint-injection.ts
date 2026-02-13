import { EducationalContent } from '../../types';

export const jointInjectionContent: EducationalContent = {
  id: 'joint-injection',
  type: 'topic',
  name: 'Joint Injection',
  alternateNames: ['Intra-articular Injection', 'Steroid Injection', 'Viscosupplementation'],
  levels: {
    1: {
      level: 1,
      summary: 'A joint injection is a procedure where a needle is inserted into a joint to deliver medication directly that can include corticosteroids to reduce inflammation, hyaluronic acid to lubricate the joint, or numbing medicine for pain relief.',
      explanation: `## What is a Joint Injection?

A joint injection is a procedure where a needle is inserted into a joint to deliver medication directly. This can include corticosteroids to reduce inflammation, hyaluronic acid to lubricate the joint, or numbing medicine for pain relief.

### Key Points

- Medication injected directly into a joint
- Reduces pain and inflammation
- Can delay or avoid surgery
- Commonly used for arthritis

### Important Terms

- **Corticosteroid**: Powerful anti-inflammatory medication
- **Hyaluronic acid**: Natural joint lubricant
- **Arthritis**: Joint inflammation causing pain`,
      keyTerms: [
        { term: 'Corticosteroid', definition: 'Powerful anti-inflammatory medication' },
        { term: 'Hyaluronic acid', definition: 'Natural joint lubricant' },
        { term: 'Arthritis', definition: 'Joint inflammation causing pain' }
      ],
      patientCounselingPoints: [
        'Joint injections can provide significant pain relief lasting weeks to months',
        'The procedure takes just a few minutes',
        'You may have some soreness afterward that improves within a day or two',
        'Injections can be repeated if they provide relief'
      ]
    },
    2: {
      level: 2,
      summary: 'Different medications can be injected into joints including corticosteroids for inflammation, hyaluronic acid for lubrication, platelet-rich plasma (PRP) for healing, and local anesthetic for immediate pain relief.',
      explanation: `## Types of Joint Injections

Different medications can be injected into joints depending on the condition being treated and the desired effect.

### Key Points

- Corticosteroid injections reduce inflammation
- Hyaluronic acid lubricates the joint
- Platelet-rich plasma (PRP) promotes healing
- Local anesthetic provides immediate pain relief

### Injection Types

**Corticosteroid Injections**
Powerful anti-inflammatory medications that reduce swelling, heat, and pain in arthritic joints. Effects typically last weeks to months.

**Hyaluronic Acid Injections**
Also called viscosupplementation. Mimics natural joint fluid. Used primarily for knee osteoarthritis. Course of 3-5 injections over several weeks.

**Platelet-Rich Plasma (PRP)**
Uses your own concentrated platelets to promote healing. May help with tendon injuries and early arthritis. Still being studied.

**Local Anesthetic**
Numbs the joint immediately. Often combined with steroids for both immediate and lasting relief.`,
      keyTerms: [
        { term: 'Viscosupplementation', definition: 'Adding lubricating fluid to joint' },
        { term: 'PRP', definition: 'Platelet-Rich Plasma from your blood' },
        { term: 'Osteoarthritis', definition: 'Wear-and-tear joint degeneration' },
        { term: 'Rheumatoid arthritis', definition: 'Autoimmune joint inflammation' }
      ],
      patientCounselingPoints: [
        'Your doctor will recommend which type of injection is best for your condition',
        'Steroid injections are usually limited to 3-4 per year per joint',
        'Hyaluronic acid injections require a series of treatments for best effect'
      ]
    },
    3: {
      level: 3,
      summary: 'Most joints in the body can be injected with the knee being the most common, followed by shoulder, hip, and small joints in hands and feet, with procedures often using imaging guidance.',
      explanation: `## Which Joints Can Be Injected?

Most joints in the body can be injected, but some are more commonly treated than others.

### Key Points

- Knee is the most common joint injected
- Shoulder injections treat rotator cuff problems
- Hip injections help with arthritis pain
- Small joints in hands and feet can be treated

### Common Injection Sites

**Knee Injections**
Very commonly performed. Used for osteoarthritis, rheumatoid arthritis, meniscal tears, and other painful knee conditions. Both steroids and hyaluronic acid used.

**Shoulder Injections**
Treat rotator cuff tendonitis, bursitis, arthritis, and frozen shoulder. May be performed in the joint or subacromial bursa.

**Hip Injections**
Usually done with X-ray or ultrasound guidance due to deep location. Treat arthritis, bursitis, and labral tears.

**Other Joints**
Ankle, wrist, elbow, sacroiliac joints, facet joints in the spine, and small joints of hands and feet (for inflammatory arthritis).`,
      keyTerms: [
        { term: 'Rotator cuff', definition: 'Group of muscles stabilizing shoulder' },
        { term: 'Bursitis', definition: 'Inflammation of fluid-filled sacs' },
        { term: 'Subacromial bursa', definition: 'Fluid sac above shoulder joint' },
        { term: 'Sacroiliac joint', definition: 'Joint connecting spine to pelvis' }
      ],
      examples: [
        'A patient with knee osteoarthritis gets a steroid injection for pain relief',
        'Someone with frozen shoulder has a steroid injection combined with physical therapy'
      ]
    },
    4: {
      level: 4,
      summary: 'The joint injection procedure takes just a few minutes with local anesthesia, using imaging guidance to ensure proper needle placement, and you can go home immediately afterward.',
      explanation: `## The Joint Injection Procedure

Joint injections are typically quick, office-based procedures.

### Key Points

- Takes just a few minutes
- Local anesthesia numbs the area
- Imaging guidance ensures accuracy
- You can go home immediately afterward

### Procedure Details

**Preparation**
The skin is cleaned with antiseptic. You may have numbing spray applied to the skin.

**Needle Placement**
Using ultrasound or X-ray guidance, a thin needle is advanced into the joint space. The doctor watches the needle position on the screen.

**Medication Injection**
Once the needle is in the correct position, medication is injected. You may feel pressure as the fluid enters the joint.

**After the Procedure**
A bandage may be applied. You'll rest for a few minutes and then can go home. You should avoid strenuous activity for 24-48 hours.`,
      keyTerms: [
        { term: 'Ultrasound guidance', definition: 'Using ultrasound to visualize needle' },
        { term: 'Fluoroscopy', definition: 'Real-time X-ray imaging' },
        { term: 'Joint space', definition: 'Area between bones in joint' },
        { term: 'Aspiration', definition: 'Removing fluid from joint' }
      ],
      clinicalNotes: 'Ultrasound guidance improves accuracy for both superficial and deep joints. Aspiration of joint effusion before injection may improve outcomes and confirm diagnosis. Infection risk is approximately 1 in 10,000-50,000.'
    },
    5: {
      level: 5,
      summary: 'After joint injection, most people experience pain relief within a few days with effects lasting weeks to months, and repeat injections may be needed depending on the condition and medication type.',
      explanation: `## Recovery and Results

Recovery from joint injection is typically quick, and many people experience significant pain relief.

### Key Points

- Pain relief usually begins within days
- Effects can last weeks to months
- Repeat injections may be needed
- Most people can return to normal activities quickly

### Recovery Details

**Immediate Recovery**
Rest for 24 hours. Avoid strenuous activity. Ice the area for 15-20 minutes at a time, 3-4 times per day if sore. Over-the-counter pain relievers can help.

**Expected Results**
Steroid injections usually provide relief within 3-7 days, lasting 6 weeks to 6 months. Hyaluronic acid injections provide cumulative relief over the treatment course.

**Repeat Injections**
Steroid injections are usually limited to 3-4 per year per joint to avoid side effects. Hyaluronic acid may be repeated every 6 months if effective.

**When to Call Your Doctor**
Severe pain that doesn't improve after 2-3 days, fever, redness, swelling, warmth around the injection site, or inability to move the joint.

**Long-Term Management**
Injections are part of a comprehensive treatment plan that includes physical therapy, weight management, exercise, and other treatments.`,
      keyTerms: [
        { term: 'Corticosteroid side effects', definition: 'Cartilage weakening, bone thinning' },
        { term: 'Flare', definition: 'Temporary pain increase after injection' },
        { term: 'Infection risk', definition: 'Joint infection from injection' },
        { term: 'Cartilage damage', definition: 'Joint surface deterioration' },
        { term: 'Tendon rupture', definition: 'Tear from steroid weakening' }
      ],
      clinicalNotes: 'Repeated steroid injections can accelerate cartilage loss. Intra-articular corticosteroids can cause transient elevation of blood glucose. Post-injection flare occurs in 2-10% of patients.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['joint injection', 'orthopedics', 'pain management'],
    keywords: ['joint injection', 'steroid', 'corticosteroid', 'injection']
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
