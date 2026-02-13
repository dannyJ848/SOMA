import { EducationalContent } from '../../types';

export const chestSurgeryContent: EducationalContent = {
  id: 'topic-chest-surgery',
  type: 'topic',
  name: 'Chest Surgery (Top Surgery)',
  alternateNames: ['Top Surgery', 'Mastectomy', 'Breast Augmentation'],

  levels: {
    1: {
      level: 1,
      summary: 'Chest surgery helps transgender people have a chest that matches their gender identity.',
      explanation: `Chest surgery, also called "top surgery," is one of the most common surgeries for transgender people.

**Types:**
- **For transgender men/transmasculine people**: Removes breast tissue to create a flat chest
- **For transgender women/transfeminine people**: Adds breast implants

**What to Know:**
- It's done by plastic surgeons
- Recovery takes a few weeks
- Results are permanent
- Most people are very happy with results

This surgery helps many transgender people feel more comfortable in their bodies.`,
      keyTerms: [
        { term: 'top surgery', definition: 'Surgery on the chest to match gender identity' },
        { term: 'plastic surgeon', definition: 'A doctor who does surgeries to change how the body looks' },
        { term: 'recovery', definition: 'The time needed to heal after surgery' },
      ],
      analogies: [
        'Top surgery helps create a chest shape that feels right, like finding clothes that fit perfectly.',
      ],
      examples: [
        'A transgender man might have surgery to create a flat, masculine chest.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chest surgery for transgender individuals includes masculinizing mastectomy for transmasculine people and breast augmentation for transfeminine people, with high satisfaction rates.',
      explanation: `Chest surgery is among the most commonly performed gender-affirming surgeries.

**Masculinizing Chest Surgery:**

*Techniques:*
- Double incision with nipple grafts: Most common for larger chests
- Periareolar/keyhole: For smaller chests, minimal scarring
- Results in flat, masculine chest contour

*Recovery:*
- Drains for first week
- Limited arm movement initially
- Return to work: 1-2 weeks (desk job)
- Full activity: 6-8 weeks

**Feminizing Chest Surgery:**

*Procedure:*
- Standard breast augmentation
- May use implants or fat grafting
- Can enhance hormone-developed breast tissue

*Recovery:*
- Similar to typical augmentation
- Support garment for weeks
- Full recovery: 4-6 weeks

**Requirements (General):**
- Often fewer requirements than genital surgery
- May require mental health evaluation
- Some surgeons require hormone use
- Varies by surgeon and location

**Outcomes:**
- Very high satisfaction rates
- Low regret rates
- Improvement in quality of life
- Reduced gender dysphoria`,
      keyTerms: [
        { term: 'double incision', definition: 'Chest surgery with incisions under the chest for removing breast tissue' },
        { term: 'periareolar', definition: 'Technique with incision around the nipple', pronunciation: 'peri-ar-ee-OH-lar' },
        { term: 'nipple graft', definition: 'Moving the nipple to a new position after tissue removal' },
        { term: 'breast augmentation', definition: 'Surgery to increase breast size, typically with implants' },
      ],
    },
    3: {
      level: 3,
      summary: 'Chest surgery techniques are selected based on patient anatomy, with masculinizing options including double incision and periareolar approaches, and feminizing surgery following standard augmentation protocols.',
      explanation: `Technical aspects of chest surgery vary based on patient anatomy and goals.

**Masculinizing Chest Surgery:**

*Technique Selection:*
- Double incision with free nipple graft: Chest size B cup and above
- Periareolar/circumareolar: A-B cup with good skin elasticity
- Keyhole/buttonhole: Similar to periareolar, slightly different approach
- Extended periareolar: Larger than ideal for periareolar

*Double Incision Technique:*
- Incisions along inferior breast crease
- Complete removal of breast tissue
- Skin excised
- Nipple grafted to masculine position
- Results: Flat contour, horizontal scars

*Periareolar Technique:*
- Incision around nipple
- Tissue removed through smaller opening
- Skin tightens over time
- Results: Less scarring, may need revision

**Feminizing Chest Surgery:**

*Considerations:*
- Prior hormone-induced development
- May be sufficient with hormones alone for some
- Implant selection: Size, type, placement
- Fat grafting as alternative or adjunct

*Technique:*
- Standard augmentation approaches
- Submuscular vs. subglandular placement
- Incision options: Inframammary, periareolar

**Pre-Operative:**
- Smoking cessation critical
- Medication review
- Realistic expectations discussion
- Photography for documentation

**Post-Operative Care:**
- Compression garment
- Drain care (if placed)
- Activity restrictions
- Scar management
- Follow-up schedule`,
      keyTerms: [
        { term: 'free nipple graft', definition: 'Technique where nipple is completely detached and reattached' },
        { term: 'buttonhole technique', definition: 'Variation leaving nipple attached on pedicle' },
        { term: 'submuscular', definition: 'Implant placed under chest muscle' },
        { term: 'inframammary', definition: 'Incision in fold under breast' },
      ],
      clinicalNotes: 'Technique selection based on anatomy. Discuss realistic expectations including scarring. Smoking cessation is essential for healing.',
    },
    4: {
      level: 4,
      summary: 'Chest surgery outcomes depend on appropriate technique selection based on patient anatomy, surgical expertise, and comprehensive peri-operative care, with attention to complications and revision rates.',
      explanation: `Detailed understanding of chest surgery techniques informs patient counseling and care coordination.

**Masculinizing Chest Surgery - Technical Details:**

*Double Incision:*
- Indications: Moderate-large chest, skin excess
- Procedure:
  - Bilateral incisions at inframammary fold
  - Tissue excised to fascia
  - Nipple areolar complex removed, resized
  - Skin tailored, closed in layers
  - Drains typically placed
- Outcomes: Flat chest, horizontal scars, nipple sensation variable

*Periareolar Variants:*
- Indications: Small chest (A-B cup), good skin elasticity
- Procedure:
  - Concentric incisions around nipple
  - Tissue removed through opening
  - Purse-string closure
- Advantages: Minimal scarring, nipple on pedicle (preserves sensation)
- Disadvantages: Risk of "donut" appearance, need for revision

**Complications:**

*Early:*
- Hematoma: 1-5%
- Seroma
- Wound dehiscence
- Nipple graft compromise (DI technique)

*Late:*
- Scarring (hypertrophic, keloid)
- Contour irregularities
- Dog ears
- Nipple malposition
- Residual tissue

*Revision Rate:*
- Reported 10-25% depending on technique
- Often for dog ears, contour

**Feminizing Chest Surgery:**

*Considerations:*
- Hormone-induced development affects planning
- Implant selection:
  - Silicone vs. saline
  - Round vs. anatomic
  - Size to patient goals

*Technique:*
- Incision: Inframammary most common
- Pocket: Submuscular usually
- Outcomes: Similar to cisgender augmentation

*Complications:*
- Capsular contracture
- Implant malposition
- Infection
- Need for revision/exchange

**Pre-Operative Optimization:**
- Smoking cessation: 4-6 weeks minimum
- BMI optimization if needed
- Medical clearance
- Mental health assessment per guidelines`,
      keyTerms: [
        { term: 'dog ears', definition: 'Excess tissue at incision ends creating pucker; common revision need' },
        { term: 'capsular contracture', definition: 'Scar tissue around implant tightening; complication of augmentation' },
        { term: 'pedicle', definition: 'Tissue bridge keeping nipple attached to blood supply' },
        { term: 'hematoma', definition: 'Collection of blood requiring drainage' },
      ],
      clinicalNotes: 'Ensure thorough pre-operative counseling on technique-specific outcomes. Discuss revision likelihood. Emphasize smoking cessation.',
    },
    5: {
      level: 5,
      summary: 'Chest surgery outcomes are optimized through appropriate technique selection, smoking cessation, weight optimization, and comprehensive post-operative care, with attention to revision surgery and complication management.',
      explanation: `Expert understanding of chest surgery enables optimal patient selection, counseling, and care coordination.

**Technique Selection Algorithm:**

*Masculinizing:*
- Grade I (A cup, minimal skin): Liposuction alone or keyhole
- Grade II (B cup, minor ptosis): Periareolar
- Grade III (C cup, moderate ptosis): Extended periareolar or DI
- Grade IV (D+ cup, significant ptosis): Double incision

*Factors:*
- Chest size
- Skin elasticity
- Ptosis grade
- Nipple size/position
- Patient preference (scarring vs. contour)

**Advanced Techniques:**

*Button-Hole/T-Anchor:*
- Nipple on inferior pedicle
- Preserves sensation
- For moderate cases
- More complex, potential for nipple distortion

*Revision Approaches:*
- Dog ear excision
- Contour revision (liposuction, excision)
- Nipple revision
- Scar revision

**Feminizing - Advanced:**

*Post-Hormone Development:*
- Hormones produce variable development
- Usually Tanner III-IV equivalent
- Augmentation can enhance

*Fat Grafting:*
- Alternative or adjunct to implants
- More natural result
- May require multiple sessions
- Volume unpredictability

*Combination Approaches:*
- Implant with fat grafting
- Custom implants
- Composite breast augmentation

**Complication Management:**

*Hematoma:*
- Incidence 1-5%
- Early: Drainage required
- Risk factors: Anticoagulants, hypertension

*Nipple Graft Compromise (DI):*
- Partial loss: Conservative management
- Complete loss: Rare, reconstruction options

*Scarring:*
- Silicone sheets
- Steroid injection
- Scar revision if needed

**Long-Term Considerations:**

*Masculinizing:*
- Screening: Per anatomy (minimal tissue remains)
- Sensation: Variable, often reduced
- Satisfaction: High (>95%)

*Feminizing:*
- Implant longevity: 10-20 years
- Revision/exchange expected
- Mammography technique considerations
- Screening per guidelines

**Quality Outcomes:**
- Experienced surgeons have better outcomes
- Volume matters for complication rates
- Patient selection impacts results
- Setting realistic expectations essential`,
      keyTerms: [
        { term: 'ptosis', definition: 'Drooping or sagging of breast tissue', pronunciation: 'TOE-sis' },
        { term: 'composite breast augmentation', definition: 'Combining implants with fat grafting' },
        { term: 'T-anchor technique', definition: 'Technique preserving nipple on pedicle with T-shaped incision' },
        { term: 'Tanner stage', definition: 'Scale for breast development (I-V)' },
      ],
      clinicalNotes: `**Surgical Pearls:**
- Technique selection based on anatomy and goals
- Set realistic expectations regarding scarring
- Smoking cessation non-negotiable
- Discuss revision likelihood (10-25% for DI)
- Nipple sensation often affected in DI
- Refer to experienced, high-volume surgeons
- Post-operative scar management important
- Long-term satisfaction very high with appropriate selection`,
    },
  },

  media: [],
  citations: [
    {
      id: 'top-surgery-review',
      type: 'article',
      title: 'Chest Wall Masculinization Surgery',
      source: 'Plastic and Reconstructive Surgery',
      license: 'Copyright',
    },
  ],
  crossReferences: [
    { targetId: 'topic-surgical-overview', targetType: 'topic', relationship: 'parent', label: 'Surgical Overview' },
  ],
  tags: {
    topics: ['surgery', 'chest surgery', 'transgender health'],
    keywords: ['top surgery', 'mastectomy', 'breast augmentation', 'chest reconstruction'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default chestSurgeryContent;
