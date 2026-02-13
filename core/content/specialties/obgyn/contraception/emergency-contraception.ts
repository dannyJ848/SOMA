/**
 * Emergency Contraception
 *
 * Comprehensive coverage of emergency contraceptive options including pills and copper IUD.
 */

import { EducationalContent } from '../../../types';

export const emergencyContraception: EducationalContent = {
  id: 'obgyn-contraception-emergency',
  type: 'topic',
  name: 'Emergency Contraception',
  alternateNames: ['Morning-after pill', 'Plan B', 'EC'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Emergency contraception can prevent pregnancy after unprotected sex if used quickly.',
      explanation: `Emergency contraception (EC) helps prevent pregnancy after unprotected sex or contraceptive failure.

**When to use:**
- Condom broke or slipped
- Missed birth control pills
- Unprotected sex
- Sexual assault

**Options:**
- **Pills**: Available at pharmacies without prescription
- **Copper IUD**: Most effective, placed by healthcare provider

**Important:**
- Works best the sooner you take it
- Does NOT cause abortion
- Does NOT harm an existing pregnancy`,
      keyTerms: [
        { term: 'emergency contraception', definition: 'Methods used after sex to prevent pregnancy' },
        { term: 'Plan B', definition: 'Brand name of a common emergency contraceptive pill' },
      ],
    },
    2: {
      level: 2,
      summary: 'Emergency contraception options include levonorgestrel, ulipristal acetate, and copper IUD with varying effectiveness windows.',
      explanation: `**Emergency Contraception Options:**

| Method | Timing | Effectiveness |
|--------|--------|---------------|
| Levonorgestrel (Plan B) | Up to 72 hours | 85-89% |
| Ulipristal (ella) | Up to 120 hours | 85% (maintained) |
| Copper IUD | Up to 120 hours | >99% |

**Levonorgestrel (LNG):**
- Available over-the-counter
- Single 1.5mg dose
- Works by delaying ovulation
- Decreased effectiveness >72 hours

**Ulipristal Acetate (UPA):**
- Prescription required
- Single 30mg dose
- More effective than LNG days 3-5
- Progesterone receptor modulator

**Copper IUD:**
- Most effective EC method
- Provides ongoing contraception
- Inserted up to 5 days after sex`,
      keyTerms: [
        { term: 'levonorgestrel', definition: 'Progestin hormone used in emergency contraception' },
        { term: 'ulipristal', definition: 'Prescription emergency contraceptive effective up to 5 days' },
      ],
    },
    3: {
      level: 3,
      summary: 'EC mechanisms involve ovulation delay without affecting implantation, with effectiveness varying by timing and weight.',
      explanation: `**Mechanisms of Action:**

**Levonorgestrel:**
- Primary: Delays or prevents ovulation
- LH surge suppression
- No effect after ovulation occurs
- Does NOT prevent implantation

**Ulipristal:**
- Delays ovulation even after LH surge begins
- Effective closer to ovulation than LNG
- Progesterone receptor modulator

**Copper IUD:**
- Toxic to sperm and egg
- May prevent fertilization
- Possibly prevents implantation

**Weight Considerations:**
- LNG less effective if weight >75 kg (165 lbs)
- Consider UPA or copper IUD for higher weight
- UPA less affected by weight
- Copper IUD effective regardless of weight

**Timing is Critical:**
- LNG: Decreases effectiveness each day
- UPA: Maintains effectiveness through day 5
- Both most effective before ovulation`,
      keyTerms: [
        { term: 'LH surge', definition: 'Hormone spike that triggers ovulation' },
        { term: 'implantation', definition: 'Embryo attaching to uterine lining (EC does not affect this)' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced EC management includes repeat use guidance, drug interactions, and transition to ongoing contraception.',
      explanation: `**Repeat Use:**
- Safe to use multiple times
- Not intended as primary method
- Provide ongoing contraception counseling
- UPA: Wait 5 days before starting hormonal contraception

**Drug Interactions:**
- UPA + hormonal contraception: Reduced efficacy of both
- Enzyme-inducing drugs reduce LNG efficacy
- Consider double-dose LNG or copper IUD

**Clinical Scenarios:**
- Assault: Offer EC + STI prophylaxis
- Missed pills: EC if high-risk window
- Late injection: Assess risk, offer EC

**Transition to Contraception:**
- LNG: Start hormonal method same day
- UPA: Wait 5 days, use backup
- Copper IUD: Ongoing protection immediate

**Access Issues:**
- LNG: OTC, no age restriction
- UPA: Prescription only
- State conscience clauses may limit access
- Pharmacist refusal policies vary`,
      keyTerms: [
        { term: 'conscience clause', definition: 'Laws allowing pharmacists to refuse to dispense based on beliefs' },
        { term: 'quick start', definition: 'Beginning contraception immediately rather than waiting' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive EC knowledge includes mechanism controversies, advance provision evidence, and global access considerations.',
      explanation: `**Mechanism Controversies:**
- Scientific evidence: EC works pre-fertilization
- No evidence of post-fertilization effect
- Labeling vs. evidence discrepancy
- FDA labeling includes "may prevent implantation"

**Advance Provision:**
- Providing EC before needed
- Increases use when needed
- Does not decrease regular contraception use
- Does not increase risk-taking
- Supported by evidence

**Global Considerations:**
- OTC status varies by country
- LNG most widely available
- UPA availability limited
- Copper IUD access challenges

**Special Populations:**
- Adolescents: May face access barriers
- Breastfeeding: LNG preferred over UPA
- After bariatric surgery: Absorption concerns

**Advocacy and Policy:**
- Conscience objections
- Hospital policies
- Insurance coverage
- Over-the-counter expansion

**Research Directions:**
- Improved weight effectiveness
- Longer effective windows
- Non-hormonal oral options`,
      keyTerms: [
        { term: 'advance provision', definition: 'Providing EC prescription/supply before it is needed' },
      ],
      clinicalNotes: 'EC should be provided without unnecessary barriers. Advance provision is evidence-based and recommended. The copper IUD is the most effective EC and should be offered when feasible. UPA requires waiting 5 days before starting hormonal contraception.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-ec',
      type: 'article',
      title: 'ACOG Practice Bulletin: Emergency Contraception',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-contraception-overview', targetType: 'topic', relationship: 'parent', label: 'Contraception Overview' },
    { targetId: 'obgyn-contraception-iud', targetType: 'topic', relationship: 'related', label: 'IUDs' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: [],
    topics: ['contraception', 'emergency'],
    keywords: ['emergency contraception', 'Plan B', 'morning after pill', 'ella'],
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
