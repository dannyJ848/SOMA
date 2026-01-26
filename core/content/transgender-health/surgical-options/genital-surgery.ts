import { EducationalContent } from '../../types';

export const genitalSurgeryContent: EducationalContent = {
  id: 'topic-genital-surgery',
  type: 'topic',
  name: 'Genital Surgery (Bottom Surgery)',
  alternateNames: ['Bottom Surgery', 'Gender Confirmation Surgery', 'Genital Reconstruction'],

  levels: {
    1: {
      level: 1,
      summary: 'Genital surgery helps some transgender people have body parts that match their gender identity.',
      explanation: `Genital surgery, sometimes called "bottom surgery," is an option for some transgender people.

**Important Things to Know:**
- This is a personal choice - not everyone wants or needs it
- There are different types of surgery
- Experienced surgeons perform these operations
- Recovery takes time
- Most people are very happy with results

Not having surgery doesn't make anyone less transgender. Everyone's journey is different.`,
      keyTerms: [
        { term: 'bottom surgery', definition: 'Surgery on genital area to match gender identity' },
        { term: 'surgeon', definition: 'A doctor trained to do operations' },
        { term: 'recovery', definition: 'The time needed to heal after surgery' },
      ],
      analogies: [
        'Like any major decision, people think carefully about whether this surgery is right for them.',
      ],
      examples: [
        'Some transgender women choose surgery to have a vagina, while others do not.',
      ],
    },
    2: {
      level: 2,
      summary: 'Genital surgery for transgender individuals includes vaginoplasty for transfeminine people and metoidioplasty or phalloplasty for transmasculine people, performed by specialized surgeons.',
      explanation: `Genital surgery is a significant decision with several options depending on individual goals.

**For Transfeminine People:**

*Vaginoplasty:*
- Creates a vagina and vulva
- Uses existing tissue (penis, scrotum)
- Allows for sexual function
- Requires ongoing dilation

*Orchiectomy:*
- Removal of testicles only
- Reduces need for anti-androgens
- Less extensive surgery

**For Transmasculine People:**

*Metoidioplasty:*
- Uses testosterone-enlarged clitoris
- Creates small phallus
- Preserves sexual sensation
- Less complex surgery

*Phalloplasty:*
- Creates larger phallus
- Uses tissue from arm or leg
- Multiple surgeries needed
- Erectile device later

**Important Considerations:**
- Requires experienced surgeons
- Often requires mental health letters
- Hormone therapy typically required first
- Insurance coverage varies
- Wait times can be long

Recovery is significant and requires following care instructions carefully.`,
      keyTerms: [
        { term: 'vaginoplasty', definition: 'Surgery to create a vagina', pronunciation: 'vaj-in-oh-PLAS-tee' },
        { term: 'metoidioplasty', definition: 'Surgery using enlarged clitoris to create phallus', pronunciation: 'met-oid-ee-oh-PLAS-tee' },
        { term: 'phalloplasty', definition: 'Surgery to create a penis using tissue from elsewhere', pronunciation: 'FAL-oh-plas-tee' },
        { term: 'dilation', definition: 'Using a dilator to maintain vaginal depth after surgery' },
      ],
    },
    3: {
      level: 3,
      summary: 'Genital surgery encompasses complex reconstructive procedures including penile inversion vaginoplasty, metoidioplasty, and phalloplasty, requiring specialized surgical expertise and comprehensive pre- and post-operative care.',
      explanation: `Genital surgery is among the most complex gender-affirming procedures, requiring specialized surgical training.

**Transfeminine Genital Surgery:**

*Penile Inversion Vaginoplasty:*
- Standard technique
- Uses penile skin for vaginal canal
- Scrotal skin for labia
- Clitoral tissue preserved for sensation
- Typical depth: 5-6 inches

*Other Techniques:*
- Sigmoid colon vaginoplasty: Uses bowel segment
- Peritoneal: Uses abdominal lining
- Minimal depth: For those not desiring penetrative function

*Requirements:*
- Hormone therapy (usually 12+ months)
- Mental health letters (typically 2)
- Hair removal in surgical area
- Medical clearance

**Transmasculine Genital Surgery:**

*Metoidioplasty:*
- Uses hormonally-enlarged clitoris
- Results: 1-3 inch phallus typically
- Can urinate standing (with urethral lengthening)
- Preserves erogenous sensation
- Single stage possible

*Phalloplasty:*
- Creates larger phallus (typically 5-6 inches)
- Donor sites: Forearm, thigh, back
- Multiple stages (3-5 surgeries)
- Erectile device placed later
- More complex, higher complication rate

**Post-Operative Care:**

*Vaginoplasty:*
- Dilation: Essential, lifelong (decreasing frequency)
- Catheter initially
- Activity restrictions 6-8 weeks

*Phalloplasty:*
- Multiple wound care needs
- Catheter for extended period
- Staged recovery`,
      keyTerms: [
        { term: 'penile inversion', definition: 'Technique using penile skin inverted to create vaginal canal' },
        { term: 'sigmoid colon', definition: 'Part of large intestine; can be used to create vaginal canal' },
        { term: 'peritoneal pull-through', definition: 'Technique using abdominal lining for vaginal canal' },
        { term: 'urethral lengthening', definition: 'Extending urethra to allow urination through phallus' },
      ],
      clinicalNotes: 'Refer to experienced surgeons. Emphasize importance of dilation compliance for vaginoplasty. Discuss realistic outcomes including sensation and function.',
    },
    4: {
      level: 4,
      summary: 'Genital surgery requires comprehensive pre-operative preparation, specialized surgical expertise, careful technique selection based on patient goals, and intensive post-operative care with attention to complications.',
      explanation: `Genital surgery represents highly specialized care requiring detailed understanding of techniques, outcomes, and complications.

**Transfeminine Surgery - Technical:**

*Penile Inversion Vaginoplasty:*
- Standard of care
- Components: Vaginal canal, labia majora/minora, clitoris, urethral meatus
- Depth: 5-7 inches average
- Preservation of neurovascular bundle to glans for clitoris
- Hair removal pre-op essential

*Alternative Techniques:*
- Sigmoid: Self-lubricating, used for revision
- Peritoneal: Newer, self-lubricating potential
- Non-cavity: Vulvoplasty only, no canal
- Combined techniques

*Complications:*
- Wound dehiscence
- Granulation tissue
- Vaginal stenosis (prevented by dilation)
- Rectovaginal fistula (rare, serious)
- Urinary issues

**Transmasculine Surgery - Technical:**

*Metoidioplasty:*
- Based on testosterone-enlarged clitoris
- Components: Phalloplasty, scrotoplasty, urethral lengthening (optional), vaginectomy (optional)
- Size: 1-4 cm typically
- Erogenous sensation preserved
- Lower complication rate

*Phalloplasty:*
- Donor flaps:
  - Radial forearm free flap (RFF): Gold standard, visible scar
  - Anterolateral thigh (ALT): Hidden scar, bulkier
  - MLD (musculocutaneous latissimus dorsi): Less common
- Stages:
  - Flap creation and attachment
  - Urethral lengthening
  - Scrotoplasty/implants
  - Erectile device
- Complications:
  - Urethral stricture (15-40%)
  - Fistula (15-30%)
  - Flap complications

**Pre-Operative Requirements:**

*WPATH SOC 8:*
- Persistent gender incongruence
- Mental health assessment
- Hormone therapy typically 12+ months
- Capacity to consent
- No significant uncontrolled mental health conditions`,
      keyTerms: [
        { term: 'radial forearm free flap', definition: 'Donor tissue from forearm used in phalloplasty; includes artery, vein, nerve' },
        { term: 'stricture', definition: 'Narrowing of urethra; common complication' },
        { term: 'fistula', definition: 'Abnormal connection between urethra and skin' },
        { term: 'neurovascular bundle', definition: 'Nerves and blood vessels preserved for sensation' },
      ],
      clinicalNotes: 'Comprehensive pre-operative education essential. Dilation compliance critical for vaginoplasty. Urethral complications common in phalloplasty - set expectations.',
    },
    5: {
      level: 5,
      summary: 'Genital surgery requires expert surgical technique, comprehensive patient selection, meticulous peri-operative care, and long-term follow-up with attention to sexual function, complications, and patient satisfaction.',
      explanation: `Expert-level care for genital surgery integrates surgical knowledge with comprehensive patient management.

**Transfeminine Surgery - Advanced:**

*Vaginoplasty Outcomes:*
- Depth: 5-7 inches achievable
- Lubrication: Variable, often supplemental needed
- Sensation: Clitoral sensation preserved in 80%+
- Orgasmic capacity: 70-80% report orgasm
- Satisfaction: 90%+ in experienced centers

*Peritoneal Technique:*
- Uses peritoneal lining via laparoscopic harvest
- Advantages: Self-lubricating potential, no hair
- Newer technique, less long-term data
- Growing in popularity

*Complications Management:*
- Granulation: Silver nitrate, excision
- Stenosis: Increased dilation, revision
- Fistula: Staged repair
- Hair in vagina: Laser/electrolysis challenging

*Long-Term Considerations:*
- Dilation: Lifelong but decreasing frequency
- Prostate remains: PSA monitoring, exam
- STI prevention: Standard counseling
- Pelvic exams: Modified technique

**Transmasculine Surgery - Advanced:**

*Metoidioplasty vs. Phalloplasty:*
| Factor | Metoidioplasty | Phalloplasty |
|--------|----------------|--------------|
| Size | 1-4 cm | 12-16 cm |
| Sensation | Preserved | Varies |
| Erection | Natural | Device |
| STP | With UL | With UL |
| Stages | 1-2 | 3-5 |
| Complications | Lower | Higher |

*Phalloplasty Technical:*
- Flap survival: >95% in experienced hands
- Urethral lengthening: Highest complication rate
- Erectile devices: Placed once healed (6-12 months after last stage)
- Types: Malleable, inflatable

*Complication Management:*
- Stricture: Urethroscopy, dilation, revision
- Fistula: Often heal spontaneously; surgical repair if persistent
- Flap compromise: Early recognition critical

**Fertility Considerations:**
- Vaginoplasty: Preserves prostate/testes if desired pre-orchiectomy
- Hysterectomy: Typically included in transmasculine surgery
- Gamete preservation: Discuss before all procedures

**Quality and Outcomes:**

*Surgeon Selection:*
- High-volume centers have better outcomes
- Verify experience and outcomes data
- Complication rates vary widely

*Outcome Assessment:*
- BREAST-Q adaptations
- Sexual function measures
- Quality of life
- Satisfaction surveys`,
      keyTerms: [
        { term: 'STP', definition: 'Stand to pee; ability to urinate standing after urethral lengthening' },
        { term: 'inflatable erectile device', definition: 'Pump-based implant allowing erection on demand' },
        { term: 'flap survival', definition: 'Success rate of transplanted tissue maintaining blood supply' },
        { term: 'BREAST-Q', definition: 'Patient-reported outcome measure adapted for gender-affirming surgery' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Refer to high-volume, experienced surgeons
- Pre-operative hair removal essential for vaginoplasty
- Dilation compliance determines long-term outcomes
- Urethral complications are common in phalloplasty
- Multiple stages expected for phalloplasty
- Set realistic expectations regarding sensation and function
- Long-term follow-up necessary
- Sexual function generally preserved/achieved
- Prostate care continues post-vaginoplasty`,
    },
  },

  media: [],
  citations: [
    {
      id: 'genital-surgery-review',
      type: 'article',
      title: 'Gender-Affirming Genital Surgery',
      source: 'Plastic and Reconstructive Surgery',
      license: 'Copyright',
    },
  ],
  crossReferences: [
    { targetId: 'topic-surgical-overview', targetType: 'topic', relationship: 'parent', label: 'Surgical Overview' },
  ],
  tags: {
    topics: ['surgery', 'genital surgery', 'transgender health'],
    keywords: ['bottom surgery', 'vaginoplasty', 'phalloplasty', 'metoidioplasty'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default genitalSurgeryContent;
