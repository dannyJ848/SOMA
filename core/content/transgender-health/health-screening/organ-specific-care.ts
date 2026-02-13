import { EducationalContent } from '../../types';

export const organSpecificCareContent: EducationalContent = {
  id: 'topic-organ-specific-care',
  type: 'topic',
  name: 'Organ-Specific Care for Transgender Individuals',
  alternateNames: ['Anatomy-Based Care', 'Transgender Organ Health'],

  levels: {
    1: {
      level: 1,
      summary: 'Transgender people need healthcare based on the body parts they have, which helps doctors provide the right care.',
      explanation: `Good healthcare means taking care of all your body parts. For transgender people, doctors need to know what organs you have.

**Why This Matters:**
- You might need care for organs some people don't expect
- Hormones can affect how organs work
- After surgery, care needs may change
- Your doctor should ask what body parts you have

Being open with your doctor helps you get the best care.`,
      keyTerms: [
        { term: 'organ', definition: 'A part of your body that does a specific job' },
        { term: 'healthcare', definition: 'Taking care of your body and health' },
        { term: 'hormone', definition: 'Chemical messenger that affects how your body works' },
      ],
      analogies: [
        'Just like cars need different maintenance based on their parts, your body needs care based on your specific organs.',
      ],
      examples: [
        'A transgender woman still has a prostate and should talk to her doctor about prostate health.',
      ],
    },
    2: {
      level: 2,
      summary: 'Organ-specific healthcare for transgender individuals addresses the unique needs of reproductive and other organs based on anatomy, hormone status, and surgical history.',
      explanation: `Healthcare for specific organs in transgender patients depends on anatomy, hormones, and any surgeries.

**Key Organ Systems:**

*Reproductive Organs:*
- Uterus/ovaries: Until removed
- Testes/prostate: Until removed
- Breast tissue: Affected by hormones
- Effects of hormone therapy on these organs

*Post-Surgical Care:*
- Neo-vagina care
- Phalloplasty/metoidioplasty care
- Post-chest surgery considerations

*Hormone Effects:*
- Estrogen: Effects on prostate, breast tissue
- Testosterone: Effects on uterus, ovaries, vagina

**Common Issues:**

*Transmasculine:*
- Vaginal atrophy from testosterone
- Ovarian/uterine considerations
- Bleeding changes

*Transfeminine:*
- Prostate health (PSA may be lower)
- Erectile tissue changes
- Post-orchiectomy considerations`,
      keyTerms: [
        { term: 'vaginal atrophy', definition: 'Thinning and drying of vaginal tissue' },
        { term: 'neo-vagina', definition: 'Surgically created vagina' },
        { term: 'erectile tissue', definition: 'Tissue that fills with blood; affected by hormones and surgery' },
        { term: 'post-surgical', definition: 'After surgery' },
      ],
    },
    3: {
      level: 3,
      summary: 'Organ-specific care addresses reproductive organs, hormone effects, and post-surgical anatomy with attention to unique clinical considerations for transgender patients.',
      explanation: `Comprehensive organ-specific care requires understanding anatomy, hormone effects, and surgical changes.

**Pelvic Organs:**

*Transmasculine (Pre-Hysterectomy):*
- Uterus: Testosterone usually causes amenorrhea
- Breakthrough bleeding: May indicate need for evaluation
- Endometrial: Atrophy common on testosterone
- Ovaries: May develop cystic changes

*Transmasculine (Vaginal Care):*
- Testosterone causes atrophy
- May cause dryness, pain, vulnerability to infection
- Topical estrogen: Safe and appropriate
- Pelvic exam technique modifications

*Transfeminine (Prostate):*
- Remains after vaginoplasty
- PSA typically 50% lower on estrogen
- DRE: Access anterior to vagina
- BPH: May occur, lower incidence

*Transfeminine (Neo-Vagina):*
- Dilation: Essential, lifelong (decreasing frequency)
- Discharge: Some is normal
- Granulation tissue: Common, treatable
- Infections: UTI, bacterial vaginosis possible
- STI prevention: Standard counseling

**Chest/Breast:**

*Transfeminine:*
- Development from hormones
- May need augmentation
- Cancer risk considerations

*Transmasculine Post-Top Surgery:*
- Residual tissue possible
- Clinical exam appropriate
- Chest wall/scar considerations

**Other Organs:**

*Bone:*
- Adequate hormone levels protective
- Monitor if inadequate or interrupted
- DEXA if risk factors

*Cardiovascular:*
- Hormone effects on risk factors
- Standard prevention`,
      keyTerms: [
        { term: 'amenorrhea', definition: 'Absence of menstruation' },
        { term: 'BPH', definition: 'Benign prostatic hyperplasia; prostate enlargement' },
        { term: 'granulation tissue', definition: 'Healing tissue that can be over-abundant; common in neo-vagina' },
        { term: 'atrophy', definition: 'Thinning and weakening of tissue' },
      ],
      clinicalNotes: 'Topical estrogen safe for vaginal atrophy on testosterone. PSA interpretation: Expect lower values on estrogen. Neo-vagina requires ongoing care education.',
    },
    4: {
      level: 4,
      summary: 'Organ-specific transgender care requires detailed understanding of hormone effects on reproductive organs, post-surgical anatomy considerations, and evidence-based management of common clinical issues.',
      explanation: `Comprehensive organ-specific care addresses common clinical scenarios in transgender patients.

**Pelvic Organ Care:**

*Transmasculine - Uterus/Ovaries:*
- Testosterone typically causes amenorrhea within 6 months
- Endometrial atrophy is expected
- Persistent bleeding: Evaluate (endometrial sampling if indicated)
- Ovarian changes: PCOS-like appearance possible
- Pre-hysterectomy monitoring: Limited evidence for routine imaging

*Transmasculine - Vaginal Health:*
- Atrophic vaginitis common
- Symptoms: Dryness, irritation, dyspareunia, susceptibility to infection
- Treatment: Topical estrogen (0.01% estradiol cream, estradiol tablets)
- Safety: Minimal systemic absorption; does not interfere with testosterone
- Barrier methods for sexually active

*Transfeminine - Prostate:*
- Size: May decrease on estrogen
- PSA: Lower on estrogen (often <1.0 ng/mL)
- BPH: Less common but occurs
- Cancer screening: Standard discussions; adjusted reference
- Post-vaginoplasty access: Anterior vaginal wall

*Neo-Vagina Care:*
- Dilation schedule: Frequent initially, decreasing over time
- Depth maintenance: Use it or lose it principle
- Granulation: Silver nitrate, excision if persistent
- Discharge: Normal; evaluate if excessive or malodorous
- Infections: Yeast, bacterial vaginosis, UTI
- STI: Full range possible; cervix not present (no Pap needed)

**Chest/Breast:**

*Post-Top Surgery:*
- Residual tissue: May remain especially subareolar
- Monitoring: Clinical exam; imaging if indicated
- Revisions: Common (dog ears, contour)

*Transfeminine Breast:*
- Development over 2-3 years
- May plateau; augmentation option
- Cancer screening after hormone exposure

**Specific Clinical Issues:**

*Testicular/Scrotal (Pre-Orchiectomy):*
- Testicular atrophy from estrogen
- Decreased fertility
- Exam still appropriate

*Post-Orchiectomy:*
- No longer need anti-androgen
- Estrogen may be reduced
- Monitor for osteoporosis if no estrogen`,
      keyTerms: [
        { term: 'dyspareunia', definition: 'Painful intercourse' },
        { term: 'atrophic vaginitis', definition: 'Inflammation due to thinning vaginal tissue' },
        { term: 'endometrial sampling', definition: 'Biopsy of uterine lining' },
        { term: 'silver nitrate', definition: 'Chemical used to treat granulation tissue' },
      ],
      clinicalNotes: 'Topical vaginal estrogen is safe and effective for testosterone-induced atrophy. Adjust PSA expectations for transfeminine patients. Dilation compliance is critical for neo-vaginal depth.',
    },
    5: {
      level: 5,
      summary: 'Expert organ-specific care integrates detailed anatomical knowledge, hormone effects, post-surgical changes, and evidence-based management protocols for reproductive organs, neo-organs, and systemic considerations.',
      explanation: `Comprehensive organ-specific care requires nuanced clinical knowledge and practical management strategies.

**Pelvic Floor Considerations:**

*Transmasculine:*
- Testosterone effects: Atrophy, pelvic floor changes
- Symptoms: Dryness, pain, urinary symptoms, prolapse rare
- Physical therapy: May benefit for pain/dysfunction
- Hysterectomy: Often desired; surgical approach considerations

*Transfeminine (Post-Vaginoplasty):*
- Neo-vagina: Skin-lined (penile inversion) or mucosal (peritoneal/bowel)
- Dilation physiology: Prevents stenosis
- Pelvic floor: May contribute to depth issues
- Prostate: Accessed anteriorly; G-spot analog for some

**Reproductive Organ Management:**

*Uterine/Ovarian (Transmasculine):*
- Bleeding on testosterone:
  - First: Confirm compliance
  - Evaluate: Pregnancy test, exam
  - Consider: Increased testosterone dose, progestin, IUD
  - Investigate: Ultrasound, sampling if indicated
- Endometrial cancer: No increased risk on testosterone (likely decreased)
- Ovarian cancer: No increased risk documented
- Hysterectomy: Reduces bleeding concerns, possible lower dose testosterone after

*Prostate (Transfeminine):*
- Hormonal effects: Size reduction, PSA suppression
- PSA interpretation: <1.0 ng/mL typical; elevation requires investigation
- Cancer: Case reports; appears less common than cisgender males
- Screening: Shared decision-making per general guidelines

**Neo-Organ Care:**

*Neo-Vagina:*
- First year: Frequent dilation (3-4x daily initially)
- Long-term: Maintain schedule (minimum 1-2x weekly)
- Sexual activity: Counts toward dilation
- Complications:
  - Stenosis: Increased dilation, revision
  - Prolapse: Rare, surgical management
  - Hair: Prevention is key; difficult to treat after
  - Fistula: Rare, surgical repair

*Phalloplasty/Metoidioplasty:*
- Urethral maintenance: If extended
- Erectile device: Regular function maintains tissue
- Sensation: Variable, may develop over years
- Complications: Stricture, fistula

**Integration with Primary Care:**

*Documentation:*
- Organ inventory in EHR
- Update post-surgically
- Trigger appropriate reminders

*Approach:*
- Ask about all organs present
- Explain rationale for care
- Trauma-informed approach
- Offer modifications for comfort`,
      keyTerms: [
        { term: 'stenosis', definition: 'Narrowing; concerning for vaginal depth loss' },
        { term: 'IUD', definition: 'Intrauterine device; can help with bleeding on testosterone' },
        { term: 'pelvic floor therapy', definition: 'Physical therapy for pelvic muscles; may help with pain/dysfunction' },
        { term: 'G-spot analog', definition: 'Prostate may provide similar function in neo-vagina' },
      ],
      clinicalNotes: `**Organ Care Pearls:**
- Vaginal estrogen safe on testosterone for atrophy
- Bleeding on testosterone: Evaluate before attributing to breakthrough
- PSA <1.0 typical on estrogen; elevation warrants investigation
- Neo-vagina: Dilation is essential; education critical
- Prostate remains post-vaginoplasty; access anteriorly
- Hysterectomy eliminates bleeding concerns
- Post-top surgery: Residual tissue possible; clinical exam appropriate
- Pelvic PT may help for dyspareunia or pain
- Update organ inventory post-surgery in EHR`,
    },
  },

  media: [],
  citations: [
    {
      id: 'ucsf-guidelines',
      type: 'website',
      title: 'Guidelines for Primary and Gender-Affirming Care',
      source: 'UCSF Transgender Care',
      url: 'https://transcare.ucsf.edu/guidelines',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    { targetId: 'topic-screening-guidelines', targetType: 'topic', relationship: 'related', label: 'Screening Guidelines' },
  ],
  tags: {
    topics: ['organ health', 'primary care', 'transgender health'],
    keywords: ['pelvic health', 'prostate', 'neo-vagina', 'organ care'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default organSpecificCareContent;
