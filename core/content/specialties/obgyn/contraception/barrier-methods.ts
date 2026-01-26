/**
 * Barrier Methods of Contraception
 *
 * Coverage of barrier contraceptive methods including condoms, diaphragms, and spermicides.
 */

import { EducationalContent } from '../../../types';

export const barrierMethods: EducationalContent = {
  id: 'obgyn-contraception-barrier',
  type: 'topic',
  name: 'Barrier Methods of Contraception',
  alternateNames: ['Condoms', 'Diaphragm', 'Non-hormonal contraception'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Barrier methods prevent pregnancy by physically blocking sperm from reaching the egg.',
      explanation: `Barrier methods create a physical block between sperm and egg.

**Types:**
- **Male condom**: Worn on the penis
- **Female condom**: Inserted into the vagina
- **Diaphragm**: Dome-shaped cup placed over cervix
- **Cervical cap**: Smaller cup that fits over cervix
- **Spermicide**: Chemical that kills sperm

**Advantages:**
- Available without prescription (condoms, spermicides)
- No hormones
- Condoms protect against STIs
- Used only when needed`,
      keyTerms: [
        { term: 'barrier method', definition: 'Contraception that physically blocks sperm' },
        { term: 'spermicide', definition: 'Chemical that kills or immobilizes sperm' },
      ],
    },
    2: {
      level: 2,
      summary: 'Barrier methods vary in effectiveness, with typical use failure rates of 12-28% depending on method and proper use.',
      explanation: `**Male Condoms:**
- Typical use: 13% failure rate
- Perfect use: 2% failure rate
- Only method protecting against STIs
- Latex or polyurethane options

**Female Condoms:**
- Typical use: 21% failure rate
- Polyurethane or nitrile
- Can be inserted hours before sex

**Diaphragm:**
- Typical use: 17% failure rate
- Silicone dome with flexible rim
- Must use with spermicide
- Caya: One-size-fits-most option

**Cervical Cap:**
- Typical use: 17-23% failure rate
- Higher failure in parous women
- Less effective than diaphragm

**Spermicide Alone:**
- Typical use: 28% failure rate
- Nonoxynol-9 most common
- Does NOT protect against STIs`,
      keyTerms: [
        { term: 'nonoxynol-9', definition: 'Most common spermicide active ingredient' },
        { term: 'parous', definition: 'Having given birth' },
      ],
    },
    3: {
      level: 3,
      summary: 'Effective barrier method use requires proper technique, understanding of STI protection, and awareness of potential adverse effects.',
      explanation: `**Condom Best Practices:**
- Check expiration date
- Use new condom for each act
- Pinch tip to leave space
- Hold base during withdrawal
- Store away from heat/light

**Diaphragm Use:**
- Insert up to 2 hours before sex
- Apply spermicide each time
- Leave in place 6 hours after
- Maximum 24 hours insertion time

**STI Considerations:**
- Latex condoms: Best STI protection
- Consistent use reduces HIV risk 80%
- Does not eliminate HPV/HSV risk
- Spermicide may increase HIV risk

**Adverse Effects:**
- Latex allergy: Use polyurethane
- Spermicide irritation
- Diaphragm: UTI risk increased
- Cervical cap: Rare toxic shock syndrome

**Combining Methods:**
- Condom + another method increases effectiveness
- Condom + withdrawal
- Important for STI protection with other methods`,
      keyTerms: [
        { term: 'latex allergy', definition: 'Allergic reaction to natural rubber latex' },
        { term: 'dual protection', definition: 'Using condoms plus another method for both pregnancy and STI prevention' },
      ],
    },
    4: {
      level: 4,
      summary: 'Barrier method counseling addresses user-dependent effectiveness, partner negotiation, and integration with other contraceptive strategies.',
      explanation: `**Improving Effectiveness:**
- Education on correct use
- Practice with models
- Advance planning
- Emergency contraception backup

**Partner Dynamics:**
- Condom negotiation skills
- Power imbalances affect use
- Internal condom as alternative
- Discreet options

**Integration Strategies:**
- LARC + condoms for STI protection
- Withdrawal + condoms
- Fertility awareness + barriers

**Special Populations:**
- Adolescents: Readily accessible
- Latex allergy: Polyurethane options
- Spermicide sensitivity: Non-N9 options limited

**Diaphragm Fitting (if applicable):**
- Sizes 65-80mm (Caya is one-size)
- Proper fit: Covers cervix, stays in place
- Refit after pregnancy or weight change`,
      keyTerms: [
        { term: 'internal condom', definition: 'Female condom - inserted into the vagina' },
        { term: 'Caya', definition: 'One-size-fits-most contoured diaphragm' },
      ],
    },
    5: {
      level: 5,
      summary: 'Advanced understanding includes emerging products, global access considerations, and the role of barriers in comprehensive reproductive health.',
      explanation: `**Emerging Products:**
- Dapivirine ring: Microbicide for HIV prevention
- Multipurpose prevention technologies (MPT)
- Novel spermicides without N9
- On-demand PrEP integration

**Global Perspective:**
- Condoms: Most widely distributed method
- Resource-limited settings: Critical role
- Male circumcision synergy
- Culturally appropriate options

**Research Directions:**
- Broadly neutralizing antibodies
- Plant-based microbicides
- Self-dissolving films
- Long-acting barrier options

**Public Health Role:**
- STI prevention programs
- Dual protection messaging
- Access without prescription
- Youth-friendly services

**Limitations to Address:**
- User dependency
- Coitus-dependent timing
- Partner resistance
- Sensation concerns`,
      keyTerms: [
        { term: 'microbicide', definition: 'Product applied to prevent STI transmission' },
        { term: 'multipurpose prevention technology', definition: 'Product designed to prevent both pregnancy and STIs' },
      ],
      clinicalNotes: 'Condoms remain the only method protecting against STIs. Counseling should include correct use demonstration. N9 spermicides should not be used for anal sex or by those at high HIV risk due to mucosal irritation.',
    },
  },

  media: [],

  citations: [
    {
      id: 'cdc-barrier',
      type: 'article',
      title: 'Contraception Guidance',
      source: 'CDC',
      license: 'Public Domain',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-contraception-overview', targetType: 'topic', relationship: 'parent', label: 'Contraception Overview' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: [],
    topics: ['contraception', 'STI prevention'],
    keywords: ['condom', 'diaphragm', 'barrier methods', 'spermicide'],
    clinicalRelevance: 'high',
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
