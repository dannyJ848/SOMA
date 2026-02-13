/**
 * Contraception Overview
 *
 * Comprehensive overview of contraceptive methods, effectiveness, and selection criteria.
 */

import { EducationalContent } from '../../../types';

export const contraceptionOverview: EducationalContent = {
  id: 'obgyn-contraception-overview',
  type: 'topic',
  name: 'Contraception Overview',
  alternateNames: ['Birth control', 'Family planning'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Contraception includes different methods to prevent pregnancy, from daily pills to long-acting devices.',
      explanation: `Contraception, or birth control, helps prevent pregnancy when you are not ready to have a baby.

**Types of birth control:**
- **Pills**: Taken daily
- **IUDs**: Small devices placed in the uterus (lasts years)
- **Implants**: Small rod under the skin (lasts years)
- **Condoms**: Used each time you have sex
- **Shots**: Given every 3 months
- **Permanent**: Surgery for people who never want children

**Effectiveness varies:**
- Most effective: IUDs, implants, permanent methods
- Very effective: Pills, patches, rings (when used correctly)
- Moderate: Condoms, fertility awareness`,
      keyTerms: [
        { term: 'contraception', definition: 'Methods to prevent pregnancy' },
        { term: 'IUD', definition: 'Intrauterine device - a small T-shaped device placed in the uterus' },
      ],
    },
    2: {
      level: 2,
      summary: 'Contraceptive methods are classified by mechanism (hormonal, barrier, intrauterine, behavioral) and effectiveness (perfect use vs. typical use).',
      explanation: `**Classification of Methods:**

**Hormonal:**
- Combined (estrogen + progestin): Pills, patch, ring
- Progestin-only: Pills, injection, implant

**Intrauterine:**
- Copper IUD (non-hormonal)
- Hormonal IUD (levonorgestrel)

**Barrier:**
- Male and female condoms
- Diaphragm, cervical cap
- Spermicides

**Behavioral:**
- Fertility awareness methods
- Withdrawal

**Permanent:**
- Tubal ligation/occlusion
- Vasectomy

**Effectiveness Tiers:**
| Tier | Methods | Typical Use Failure Rate |
|------|---------|-------------------------|
| Tier 1 | Implant, IUDs, sterilization | <1% |
| Tier 2 | Injection, pills, patch, ring | 4-7% |
| Tier 3 | Condoms, diaphragm | 12-18% |`,
      keyTerms: [
        { term: 'typical use', definition: 'Effectiveness with normal, imperfect human use' },
        { term: 'perfect use', definition: 'Effectiveness when used exactly as directed every time' },
        { term: 'LARC', definition: 'Long-acting reversible contraception (IUDs and implants)' },
      ],
    },
    3: {
      level: 3,
      summary: 'Contraceptive counseling considers medical eligibility, patient preferences, effectiveness needs, and non-contraceptive benefits using shared decision-making.',
      explanation: `**Medical Eligibility:**
- CDC US Medical Eligibility Criteria (US MEC)
- Category 1: No restriction
- Category 2: Benefits outweigh risks
- Category 3: Risks usually outweigh benefits
- Category 4: Unacceptable health risk

**Key Contraindications:**
- Combined hormonal: History of VTE, migraine with aura, uncontrolled HTN
- All hormonal: Breast cancer
- Copper IUD: Wilson disease, copper allergy

**Non-Contraceptive Benefits:**
- Hormonal methods: Dysmenorrhea, menorrhagia, acne, PCOS, endometriosis
- Hormonal IUD: Menstrual suppression
- Condoms: STI prevention

**Counseling Approach:**
- Elicit patient preferences
- Discuss efficacy tiers
- Review medical eligibility
- Address misconceptions
- Support autonomous choice`,
      keyTerms: [
        { term: 'US MEC', definition: 'CDC guidelines for contraceptive eligibility based on medical conditions' },
        { term: 'Category 4', definition: 'Contraindicated - unacceptable health risk' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced contraceptive management includes evidence-based extended use, quick start protocols, and management of side effects to improve continuation.',
      explanation: `**Extended/Continuous Use:**
- Combined hormonal: Skip placebo week
- Reduces menstrual symptoms
- No harm from menstrual suppression

**Quick Start Protocol:**
- Start any method at any time
- Pregnancy test negative or low probability
- Backup contraception for 7 days
- Improves initiation rates

**Side Effect Management:**
- Irregular bleeding: Common with progestin-only methods
- Usually improves after 3-6 months
- Short course of estrogen may help

**LARC Promotion:**
- Highly effective, forgettable
- Cost-effective long-term
- Immediate fertility return
- Same-day insertion improves uptake

**Special Populations:**
- Postpartum: Consider VTE risk, breastfeeding
- Adolescents: Confidentiality, LARC first-line
- Perimenopause: Consider non-contraceptive benefits`,
      keyTerms: [
        { term: 'quick start', definition: 'Initiating contraception immediately rather than waiting for next period' },
        { term: 'continuation rate', definition: 'Percentage of users still using method after one year' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive contraceptive care integrates reproductive justice principles, addresses disparities, and applies shared decision-making frameworks to optimize outcomes.',
      explanation: `**Reproductive Justice Framework:**
- Right to have children
- Right to not have children
- Right to parent in safe environments
- Address historical coercion
- Ensure informed, autonomous choice

**Addressing Disparities:**
- Access barriers: Cost, distance, time
- Provider implicit bias
- Culturally competent counseling
- Language access
- Tiered counseling to avoid coercion

**Shared Decision-Making:**
- Decision aids improve knowledge
- Patient values drive choice
- No method "best" for everyone
- Respect ambivalence

**Emerging Methods:**
- Male contraception research
- Non-hormonal options in development
- Extended-use formulations

**Policy Considerations:**
- Contraceptive mandate coverage
- Age-based access restrictions
- Conscience clause implications
- Title X funding`,
      keyTerms: [
        { term: 'reproductive justice', definition: 'Framework ensuring all people have rights and resources for reproductive decisions' },
        { term: 'tiered counseling', definition: 'Presenting options by effectiveness while respecting patient autonomy' },
      ],
      clinicalNotes: 'All contraceptive methods should be immediately available without delay. Same-day LARC insertion significantly improves uptake. Quick start is evidence-based and recommended by ACOG.',
    },
  },

  media: [],

  citations: [
    {
      id: 'cdc-mec',
      type: 'article',
      title: 'US Medical Eligibility Criteria for Contraceptive Use',
      source: 'CDC',
      url: 'https://www.cdc.gov/reproductivehealth/contraception/mmwr/mec/summary.html',
      license: 'Public Domain',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-contraception-hormonal', targetType: 'topic', relationship: 'child', label: 'Hormonal Contraception' },
    { targetId: 'obgyn-contraception-iud', targetType: 'topic', relationship: 'child', label: 'IUDs' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: [],
    topics: ['contraception', 'family planning'],
    keywords: ['contraception', 'birth control', 'family planning', 'LARC'],
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
