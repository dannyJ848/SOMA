import { EducationalContent } from '../../types';

export const surgicalOverviewContent: EducationalContent = {
  id: 'topic-surgical-overview',
  type: 'topic',
  name: 'Gender-Affirming Surgery Overview',
  alternateNames: ['Transition Surgery', 'GAS', 'Gender Confirmation Surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'Some transgender people choose to have surgeries that help their bodies match their gender identity.',
      explanation: `Gender-affirming surgeries are operations that help some transgender people feel more comfortable with their bodies.

**Important Things to Know:**
- Surgery is a personal choice - not everyone wants or needs it
- There are different types of surgeries
- Surgeries are safe when done by experienced doctors
- Recovery takes time

**Types of Surgery:**
- Chest surgery
- Genital surgery
- Face surgery
- Other procedures

Not having surgery doesn't make anyone "less transgender." Everyone's journey is different.`,
      keyTerms: [
        { term: 'surgery', definition: 'A medical operation performed by a doctor' },
        { term: 'gender-affirming', definition: 'Helping to match the body with gender identity' },
        { term: 'recovery', definition: 'The time it takes to heal after surgery' },
      ],
      analogies: [
        'Surgery is like tailoring clothes - some people want adjustments to feel comfortable, and some are fine as they are.',
      ],
      examples: [
        'A transgender man might choose to have chest surgery to remove breast tissue.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gender-affirming surgeries include chest, genital, and facial procedures performed by specialized surgeons to help align physical characteristics with gender identity.',
      explanation: `Gender-affirming surgery is an option for transgender individuals who experience distress with specific physical characteristics.

**Categories of Surgery:**

*Chest/Top Surgery:*
- Masculinizing: Removal of breast tissue
- Feminizing: Breast augmentation

*Genital/Bottom Surgery:*
- Vaginoplasty: Creation of vagina
- Phalloplasty/Metoidioplasty: Creation of penis
- Orchiectomy/Hysterectomy: Removal of gonads

*Facial Procedures:*
- Facial feminization surgery (FFS)
- Facial masculinization surgery (FMS)

*Other Procedures:*
- Voice surgery
- Body contouring
- Hair removal/transplant

**Important Considerations:**
- Personal decision based on individual needs
- Requires informed consent
- May require referrals/letters
- Insurance coverage varies
- Finding experienced surgeons is important

**Requirements (Varies):**
- Age of majority typically
- Mental health evaluation often
- Hormone therapy may be required for some
- Living as affirmed gender may be suggested`,
      keyTerms: [
        { term: 'top surgery', definition: 'Chest surgery (masculinizing or feminizing)' },
        { term: 'bottom surgery', definition: 'Genital surgery (various procedures)' },
        { term: 'vaginoplasty', definition: 'Surgery to create a vagina', pronunciation: 'vaj-in-oh-PLAS-tee' },
        { term: 'phalloplasty', definition: 'Surgery to create a penis', pronunciation: 'FAL-oh-plas-tee' },
      ],
    },
    3: {
      level: 3,
      summary: 'Gender-affirming surgery encompasses a range of procedures including chest surgery, genital reconstruction, and facial procedures, guided by WPATH SOC 8 with emphasis on informed consent and individualized care.',
      explanation: `Gender-affirming surgical care follows established guidelines while emphasizing individualized treatment planning.

**Surgical Categories:**

*Chest Surgery:*
- Masculinizing: Double incision, periareolar, keyhole
- Feminizing: Augmentation mammaplasty
- One of most common procedures

*Genital Surgery:*
- Transfeminine: Penile inversion vaginoplasty, bowel vaginoplasty, minimal depth/zero depth
- Transmasculine: Metoidioplasty, phalloplasty, vaginectomy
- Often staged procedures

*Facial Surgery:*
- FFS: Forehead, nose, jaw, tracheal shave
- FMS: Less common, similar areas

*Other:*
- Body contouring
- Voice surgery (glottoplasty, etc.)
- Hair procedures

**WPATH SOC 8 Guidance:**

*Recommendations:*
- Informed consent essential
- Flexible criteria for procedures
- Not all procedures require same assessment
- Adolescent considerations differ

*Pre-Surgical Criteria (General):*
- Persistent gender incongruence
- Capacity to consent
- Mental health concerns addressed
- Understanding of procedure, risks, recovery

**Practical Considerations:**

*Finding Surgeons:*
- Limited specialized surgeons
- Geographic considerations
- Experience and outcomes matter
- Long wait times common

*Insurance:*
- Coverage improving
- Prior authorization often required
- Appeals may be necessary
- Documentation of medical necessity

*Recovery:*
- Varies by procedure
- May require time off work
- Post-operative care essential
- Follow-up appointments`,
      keyTerms: [
        { term: 'penile inversion vaginoplasty', definition: 'Most common technique for creating vagina using penile tissue' },
        { term: 'metoidioplasty', definition: 'Procedure using testosterone-enlarged clitoris to create small phallus', pronunciation: 'met-oid-ee-oh-PLAS-tee' },
        { term: 'facial feminization surgery', definition: 'Procedures to feminize facial features (FFS)' },
        { term: 'glottoplasty', definition: 'Voice surgery to raise pitch' },
      ],
      clinicalNotes: 'Refer to experienced surgeons. Support patients through pre-authorization process. Provide post-operative care coordination.',
    },
    4: {
      level: 4,
      summary: 'Gender-affirming surgery requires specialized surgical expertise, comprehensive pre-operative evaluation per WPATH SOC 8, careful patient selection, and coordinated peri-operative care.',
      explanation: `Comprehensive surgical care for transgender patients involves multiple clinical considerations.

**Surgical Techniques:**

*Masculinizing Chest Surgery:*
- Double incision with free nipple graft: Most common for larger chests
- Periareolar/keyhole: For smaller chests
- Button-hole technique
- Outcomes: High satisfaction, revision rates vary

*Feminizing Chest Surgery:*
- Standard augmentation techniques
- May require expanders
- Considerations with hormone-developed breast tissue

*Transfeminine Genital Surgery:*
- Penile inversion: Standard technique
- Sigmoid colon vaginoplasty: Alternative, used for revision
- Peritoneal pull-through: Newer technique
- Non-cavity: For patients not desiring vaginal canal
- Ancillary: Orchiectomy, labiaplasty

*Transmasculine Genital Surgery:*
- Metoidioplasty: Simpler, preserves sensation
- Phalloplasty: Larger size, multiple stages, donor site morbidity
- Urethral lengthening: Complex, higher complication rate
- Scrotoplasty, testicular implants
- Vaginectomy, hysterectomy

**Pre-Operative Considerations:**

*Assessment:*
- Surgical evaluation
- Mental health assessment/letters (varies by procedure)
- Hormone status
- Medical optimization

*Specific Requirements:*
- Chest surgery: May have fewer requirements
- Genital surgery: Often requires letters, hormone use
- WPATH SOC 8: Emphasizes flexibility

**Peri-Operative Care:**

*Hormone Management:*
- Estrogen: Often held for VTE risk
- Testosterone: Usually continued
- Consult with surgeon

*Post-Operative:*
- Dilation for vaginoplasty (lifelong)
- Catheter care for urethral procedures
- Wound care
- Activity restrictions
- Follow-up schedule

**Complications:**
- Vary by procedure
- Wound healing issues
- Urethral complications
- Revision rates
- Discuss thoroughly pre-operatively`,
      keyTerms: [
        { term: 'free nipple graft', definition: 'Technique where nipple is removed and reattached after tissue removal' },
        { term: 'sigmoid colon vaginoplasty', definition: 'Using segment of colon to create vaginal canal' },
        { term: 'dilation', definition: 'Regular insertion of dilator to maintain vaginal depth after vaginoplasty' },
        { term: 'donor site morbidity', definition: 'Complications at site where tissue was taken for reconstruction' },
      ],
      clinicalNotes: 'Ensure comprehensive pre-operative education. Discuss realistic outcomes and complications. Coordinate peri-operative hormone management with surgeon.',
    },
    5: {
      level: 5,
      summary: 'Gender-affirming surgery requires expertise in specific techniques, comprehensive pre-operative evaluation, attention to peri-operative hormone management, complication prevention, and long-term follow-up care.',
      explanation: `Expert-level understanding of gender-affirming surgery integrates surgical knowledge with comprehensive patient care.

**Surgical Techniques - Advanced:**

*Transfeminine Genital Surgery:*

Penile Inversion Vaginoplasty:
- Penile skin for vaginal lining
- Scrotal skin for labia
- Glans for neo-clitoris
- Depth: Typically 5-6 inches
- Outcomes: High satisfaction, orgasmic capacity preserved in many

Alternatives:
- Peritoneal: Self-lubricating potential, newer
- Sigmoid: Good for revision, lubrication
- Minimal/zero depth: Reduced maintenance, appropriate for some
- Combined techniques

*Transmasculine Genital Surgery:*

Metoidioplasty:
- Uses testosterone-enlarged clitoris
- Size: Variable, typically 2-4 cm
- Urethral lengthening optional
- Sensation preserved
- Lower complication rate

Phalloplasty:
- Donor sites: Radial forearm (RFF), anterolateral thigh (ALT), latissimus
- Multiple stages (3-4 typically)
- Urethral lengthening: High stricture rate
- Erectile device later stage
- Size: More typical, donor site scar

*Facial Surgery:*
- FFS: Brow, rhinoplasty, jaw contouring, tracheal shave
- Custom planning per patient
- May significantly impact passing/safety

**Complication Management:**

*Vaginoplasty:*
- Wound dehiscence: Conservative management often
- Granulation tissue: Silver nitrate, excision
- Stenosis: Dilation emphasis, revision
- Rectovaginal fistula: Rare, serious
- Hair in vagina: Prevention preferable

*Phalloplasty:*
- Urethral stricture: Common (15-40%)
- Fistula: Common early
- Flap compromise: Rare with experienced surgeons
- Donor site: Depends on technique

**Pre-Operative Optimization:**

*Medical:*
- Smoking cessation (critical)
- BMI optimization when indicated
- Medical condition management
- HIV/immunosuppression considerations

*Hormonal:*
- Estrogen: Hold 2-4 weeks for VTE (surgeon preference varies)
- Testosterone: Usually continue
- Document discussion

*Mental Health:*
- Active psychosis/mania: Delay
- Depression/anxiety: Stabilize, not absolute contraindication
- Realistic expectations

**Long-Term Follow-Up:**

*Vaginoplasty:*
- Dilation: Indefinite (frequency decreases)
- Pelvic exams as indicated
- STI screening for sexually active
- PSA monitoring (prostate remains)

*Phalloplasty:*
- Erectile device maintenance
- Sensation evaluation
- Urinary function

*General:*
- Satisfaction monitoring
- Revision discussions
- Ongoing primary care`,
      keyTerms: [
        { term: 'RFF phalloplasty', definition: 'Radial forearm free flap phalloplasty; common donor site' },
        { term: 'urethral stricture', definition: 'Narrowing of urethra; common complication of urethral lengthening' },
        { term: 'rectovaginal fistula', definition: 'Abnormal connection between vagina and rectum; rare serious complication' },
        { term: 'erectile device', definition: 'Implant enabling erection; placed in later stage of phalloplasty' },
      ],
      clinicalNotes: `**Surgical Care Pearls:**
- Refer to high-volume, experienced surgeons
- Smoking cessation is critical for outcomes
- Pre-operative education reduces complications
- Hormone management per surgeon protocol
- Dilation compliance is essential for vaginoplasty
- Urethral complications are common in phalloplasty
- Long-term follow-up is necessary
- Revision surgery is common and expected
- Mental health support throughout`,
    },
  },

  media: [],
  citations: [
    {
      id: 'wpath-soc8',
      type: 'article',
      title: 'Standards of Care Version 8',
      authors: ['Coleman E', 'et al.'],
      source: 'International Journal of Transgender Health',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    { targetId: 'topic-chest-surgery', targetType: 'topic', relationship: 'related', label: 'Chest Surgery' },
    { targetId: 'topic-genital-surgery', targetType: 'topic', relationship: 'related', label: 'Genital Surgery' },
  ],
  tags: {
    topics: ['surgery', 'gender-affirming care', 'transgender health'],
    keywords: ['surgery', 'vaginoplasty', 'phalloplasty', 'top surgery', 'FFS'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default surgicalOverviewContent;
