/**
 * Intrauterine Devices
 *
 * Comprehensive coverage of IUD types, insertion, management, and clinical considerations.
 */

import { EducationalContent } from '../../../types';

export const intrauterineDevices: EducationalContent = {
  id: 'obgyn-contraception-iud',
  type: 'topic',
  name: 'Intrauterine Devices (IUDs)',
  alternateNames: ['IUD', 'Intrauterine contraception', 'Coil'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'An IUD is a small, T-shaped device placed in the uterus that provides long-lasting birth control.',
      explanation: `An IUD (intrauterine device) is one of the most effective forms of birth control.

**Key facts:**
- Small T-shaped device inserted into the uterus
- Works for 3-12 years depending on type
- Over 99% effective
- Reversible - fertility returns quickly after removal

**Two types:**
- **Hormonal IUD**: Releases a small amount of hormone
- **Copper IUD**: Non-hormonal, uses copper to prevent pregnancy

**Benefits:**
- "Set it and forget it" - nothing to remember daily
- Can be removed anytime
- Safe for most women`,
      keyTerms: [
        { term: 'IUD', definition: 'Intrauterine device - a small contraceptive placed in the uterus' },
        { term: 'intrauterine', definition: 'Inside the uterus' },
      ],
    },
    2: {
      level: 2,
      summary: 'IUDs include copper and levonorgestrel-releasing types with different mechanisms, durations, and side effect profiles.',
      explanation: `**Copper IUD (Paragard):**
- Non-hormonal
- Duration: 10-12 years
- Mechanism: Copper is toxic to sperm, creates inflammatory response
- May increase menstrual bleeding

**Hormonal IUDs:**
| Name | Levonorgestrel | Duration | Size |
|------|----------------|----------|------|
| Mirena | 52mg | 8 years | Standard |
| Liletta | 52mg | 8 years | Standard |
| Kyleena | 19.5mg | 5 years | Smaller |
| Skyla | 13.5mg | 3 years | Smallest |

**Hormonal IUD Mechanisms:**
- Thickens cervical mucus
- Thins endometrium
- May suppress ovulation (inconsistent)

**Effectiveness:**
- >99% effective (failure rate <1%)
- Similar to sterilization
- No user compliance required`,
      keyTerms: [
        { term: 'levonorgestrel', definition: 'Progestin hormone released by hormonal IUDs' },
        { term: 'Paragard', definition: 'Brand name of the copper IUD' },
      ],
    },
    3: {
      level: 3,
      summary: 'IUD placement requires counseling on eligibility, insertion technique, and management of complications including expulsion and infection.',
      explanation: `**Medical Eligibility:**
- Most women eligible (US MEC 1 or 2)
- Contraindications: Active pelvic infection, unexplained bleeding, cervical/uterine cancer

**Insertion Timing:**
- Any time in cycle if not pregnant
- Immediate postpartum safe
- Post-abortion safe

**Insertion Procedure:**
1. Bimanual exam to assess uterine position
2. Speculum placement
3. Cervical cleansing
4. Sound uterus (6-9 cm typical)
5. Load and insert IUD
6. Trim strings to 3-4 cm

**Complications:**
- Expulsion: 2-10% (higher if postpartum, nulliparous)
- Perforation: 1/1000 insertions
- Infection: No increased risk after first 20 days
- Pain: NSAIDs and lidocaine options

**Non-Contraceptive Benefits:**
- Hormonal IUD: Treats heavy menstrual bleeding
- Reduces dysmenorrhea (hormonal)
- Endometrial protection`,
      keyTerms: [
        { term: 'uterine sounding', definition: 'Measuring uterine depth before IUD insertion' },
        { term: 'expulsion', definition: 'When the IUD is pushed out of the uterus' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced IUD management includes difficult insertions, special populations, use as emergency contraception, and management of pregnancy with IUD in place.',
      explanation: `**Difficult Insertions:**
- Cervical stenosis: Dilators, misoprostol
- Severe anteflexion/retroflexion: Adjust technique
- Failed insertion: Ultrasound guidance

**Special Populations:**
- Nulliparous: Safe, consider smaller IUD
- Adolescents: Excellent choice, higher expulsion risk
- Postpartum: Immediate insertion safe, 10-20% expulsion
- Post-abortion: Immediate insertion recommended

**Copper IUD for Emergency Contraception:**
- Most effective EC method
- Effective up to 5 days after unprotected sex
- Failure rate <0.1%
- Provides ongoing contraception

**Pregnancy with IUD:**
- Risk of pregnancy: <1%
- If pregnant, remove IUD if strings visible
- If left in place: Higher miscarriage risk
- No increased congenital anomaly risk
- Higher ectopic rate if failure occurs

**PID and IUDs:**
- PID risk not increased after initial period
- Treat PID without removing IUD
- Remove only if no improvement in 48-72 hours`,
      keyTerms: [
        { term: 'emergency contraception', definition: 'Methods used after unprotected sex to prevent pregnancy' },
        { term: 'cervical stenosis', definition: 'Narrowing of the cervical canal making insertion difficult' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive IUD knowledge includes evidence-based practice updates, off-label uses, and addressing access barriers.',
      explanation: `**Evidence Updates:**
- Extended duration: Mirena/Liletta FDA-approved 8 years
- Off-label use up to 10+ years supported by data
- Paragard effective at least 12 years

**Off-Label Uses:**
- Endometrial hyperplasia treatment
- Endometrial cancer in select cases
- Endometriosis management
- Perimenopause bleeding control

**IUD and Imaging:**
- MRI safe (1.5T and 3T)
- May cause artifact
- Ultrasound: Confirm position

**Actinomyces on Pap:**
- Common colonizer with IUD
- Asymptomatic: No treatment needed
- Symptomatic (rare): Remove IUD, treat

**Access Considerations:**
- Cost barrier addressed by ACA
- Same-day insertion improves uptake
- Training gaps limit access
- Telehealth can support counseling

**Global Perspective:**
- Most commonly used reversible method worldwide
- Copper IUD widely available
- Cost-effective for health systems`,
      keyTerms: [
        { term: 'Actinomyces', definition: 'Bacteria sometimes found on Pap smears with IUD use' },
      ],
      clinicalNotes: 'Same-day IUD insertion should be offered whenever possible. Pain management options include NSAIDs and local anesthesia. Misoprostol for cervical ripening is not routinely recommended as it increases cramping without clear benefit.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-iud',
      type: 'article',
      title: 'ACOG Practice Bulletin: Long-Acting Reversible Contraception',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-contraception-overview', targetType: 'topic', relationship: 'parent', label: 'Contraception Overview' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['uterus'],
    topics: ['contraception', 'procedures'],
    keywords: ['IUD', 'intrauterine device', 'Mirena', 'Paragard', 'LARC'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
