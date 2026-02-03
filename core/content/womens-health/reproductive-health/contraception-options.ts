import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const contraceptionOptions: LegacyWomensHealthContent = {
  id: 'concept-contraception-options',
  type: 'concept',
  name: 'Contraception Options',
  alternateNames: ['Birth control', 'Family planning methods', 'Pregnancy prevention'],

  levels: {
    1: {
      level: 1,
      summary: 'Contraception, or birth control, includes methods to prevent pregnancy, ranging from daily pills to long-lasting devices.',
      explanation: `There are many ways to prevent pregnancy. The best method for you depends on your lifestyle, health, and future plans.

**Types of Birth Control:**

*Daily Methods:*
- **Pills:** Take one every day at the same time
- **Patch:** Stick on your skin, change weekly
- **Ring:** Insert in vagina, change monthly

*Long-Acting Methods (set it and forget it):*
- **IUD:** Small device placed in uterus, lasts 3-12 years
- **Implant:** Tiny rod in arm, lasts 3 years
- **Shot:** Injection every 3 months

*Barrier Methods (use each time):*
- **Condoms:** Also protect against STIs
- **Diaphragm:** Cup placed over cervix

*Permanent Methods:*
- **Tubal ligation:** Surgery to block fallopian tubes
- **Vasectomy:** Surgery for male partners

**Key Points:**
- Only condoms protect against sexually transmitted infections
- Some methods have hormones, some don't
- Most methods are reversible (you can get pregnant after stopping)`,
      keyTerms: [
        { term: 'IUD', definition: 'Intrauterine device - a small T-shaped device placed inside the uterus' },
        { term: 'barrier method', definition: 'Birth control that physically blocks sperm from reaching an egg' },
        { term: 'hormonal contraception', definition: 'Birth control that uses hormones to prevent pregnancy' },
      ],
      analogies: ['Think of contraception like locking a door - there are many types of locks (methods), and some are stronger than others.'],
      examples: ['Taking a pill every morning with breakfast', 'Getting an IUD that lasts 5 years', 'Using a condom each time you have sex'],
    },
    2: {
      level: 2,
      summary: 'Contraceptive methods vary in effectiveness, hormonal content, duration of action, and reversibility, with long-acting reversible contraceptives (LARCs) being the most effective reversible options.',
      explanation: `**Effectiveness Tiers:**

*Tier 1 - Most Effective (>99%):*
- IUDs (hormonal and copper)
- Implant (etonogestrel)
- Sterilization

*Tier 2 - Very Effective with Perfect Use (91-99%):*
- Combined pill, patch, ring
- Progestin-only pill
- Injection (Depo-Provera)

*Tier 3 - Moderately Effective (76-88%):*
- Male condoms
- Diaphragm
- Fertility awareness methods
- Withdrawal

**How Hormonal Methods Work:**
- Prevent ovulation (no egg released)
- Thicken cervical mucus (sperm can't get through)
- Thin uterine lining

**How Non-Hormonal Methods Work:**
- Copper IUD: Toxic to sperm
- Barrier methods: Physical block
- Fertility awareness: Avoiding fertile days

**Choosing a Method:**
Consider:
- Effectiveness needs
- Hormone tolerance
- Frequency of use (daily vs. long-acting)
- STI protection needs
- Future fertility plans`,
      keyTerms: [
        { term: 'LARC', definition: 'Long-acting reversible contraception - IUDs and implants that last 3+ years', pronunciation: 'lark' },
        { term: 'combined hormonal', definition: 'Contraception containing both estrogen and progestin' },
        { term: 'progestin-only', definition: 'Contraception containing only progestin hormone, no estrogen' },
        { term: 'typical use effectiveness', definition: 'How well a method works with normal, real-world use including human error' },
      ],
    },
    3: {
      level: 3,
      summary: 'Contraceptive counseling requires understanding of mechanism of action, contraindications (particularly for estrogen-containing methods), non-contraceptive benefits, and evidence-based guidance using tools like the US MEC.',
      explanation: `**Mechanisms of Action:**

*Combined Hormonal Contraceptives (estrogen + progestin):*
- Primary: Inhibition of LH surge, preventing ovulation
- Secondary: Cervical mucus thickening, endometrial changes

*Progestin-Only Methods:*
- Ovulation inhibition (variable)
- Cervical mucus thickening (primary for POP)
- Endometrial atrophy

*Copper IUD:*
- Sterile inflammatory response
- Spermicidal effect
- Prevents fertilization and implantation

**US Medical Eligibility Criteria (MEC) Categories:**
- Category 1: No restriction
- Category 2: Benefits outweigh risks
- Category 3: Risks usually outweigh benefits
- Category 4: Unacceptable health risk

**Key Estrogen Contraindications (Category 4):**
- Migraine with aura
- History of VTE or thrombophilia
- Breast cancer
- Smoking >15 cigarettes/day if age >35
- Severe hypertension
- Coronary artery disease/stroke history

**Non-Contraceptive Benefits:**
- CHC: Acne, dysmenorrhea, menorrhagia, endometriosis, PCOS management
- LNG-IUD: Heavy menstrual bleeding treatment
- DMPA: Endometriosis, sickle cell crises`,
      keyTerms: [
        { term: 'US MEC', definition: 'US Medical Eligibility Criteria - CDC guidelines for contraceptive safety by medical condition' },
        { term: 'VTE', definition: 'Venous thromboembolism - blood clots in veins, a risk with estrogen use' },
        { term: 'CHC', definition: 'Combined hormonal contraceptive - contains both estrogen and progestin' },
        { term: 'DMPA', definition: 'Depot medroxyprogesterone acetate - injectable progestin given every 3 months' },
      ],
      clinicalNotes: 'Always screen for estrogen contraindications before prescribing CHC. LARCs are safe for nulliparous women and adolescents. Quick start initiation (starting same day) improves uptake.',
    },
    4: {
      level: 4,
      summary: 'Advanced contraceptive management includes addressing special populations, drug interactions, managing side effects, emergency contraception, and optimizing LARC insertion/removal timing.',
      explanation: `**Special Populations:**

*Adolescents:*
- LARCs recommended as first-line (AAP, ACOG)
- Confidentiality considerations
- Quick start appropriate
- Dual method counseling (LARC + condoms for STI protection)

*Postpartum:*
- Immediate postplacental IUD insertion safe and effective
- CHC: Category 4 for <21 days postpartum (VTE risk)
- Breastfeeding: Progestin-only or non-hormonal preferred

*Perimenopause:*
- Continued contraception needed until menopause confirmed
- CHC may help with vasomotor symptoms if no contraindications
- Age >35 smoker: Switch to progestin-only or non-hormonal

**Drug Interactions:**
- CYP3A4 inducers reduce CHC effectiveness:
  - Rifampin (significant)
  - Certain anticonvulsants (phenytoin, carbamazepine)
  - St. John's Wort
- Solutions: Higher-dose CHC, DMPA, copper IUD, or LNG-IUD

**Emergency Contraception:**
- Copper IUD: Most effective, up to 5 days
- Ulipristal (Ella): Up to 5 days, more effective than LNG
- Levonorgestrel (Plan B): Up to 72 hours, efficacy decreases with BMI >25
- Note: EC does not disrupt established pregnancy

**Managing Side Effects:**
- Unscheduled bleeding on CHC: Reassurance, rule out STI, consider estrogen increase
- DMPA weight gain: 5-6 lbs average over 2 years
- IUD expulsion: Higher in immediate postpartum, nulliparous`,
      keyTerms: [
        { term: 'quick start', definition: 'Initiating contraception on day of visit regardless of cycle day, with backup method for 7 days' },
        { term: 'ulipristal', definition: 'Selective progesterone receptor modulator used for emergency contraception' },
        { term: 'immediate postplacental', definition: 'IUD insertion within 10 minutes of placental delivery' },
        { term: 'CYP3A4 inducer', definition: 'Medication that increases metabolism of hormonal contraceptives through liver enzyme induction' },
      ],
      clinicalNotes: 'Ulipristal is more effective than levonorgestrel EC especially approaching 5 days and with higher BMI. After ulipristal EC, wait 5 days before starting hormonal contraception. IUD can be inserted at any time in cycle if pregnancy reasonably excluded.',
    },
    5: {
      level: 5,
      summary: 'Expert contraceptive care involves shared decision-making, addressing barriers to LARC access, understanding comparative effectiveness data, managing complex patients, and familiarity with emerging contraceptive technologies.',
      explanation: `**Shared Decision-Making Framework:**
- Explore reproductive goals and timeline
- Assess medical eligibility
- Present effectiveness data in understandable terms
- Discuss side effects without deterrence
- Address misconceptions (fertility return, IUD safety in nulliparous)
- Support patient autonomy in final choice

**LARC Access Barriers:**
- Cost (addressed by ACA, Title X)
- Provider training gaps
- Same-day insertion logistics
- Removal access concerns

**Comparative Effectiveness Evidence:**
- CHOICE Project data: LARC continuation rates 80%+ at 2 years
- Typical use failure rates:
  - Implant: 0.1%
  - LNG-IUD: 0.1-0.4%
  - Copper IUD: 0.8%
  - Pill/patch/ring: 7-9%
  - DMPA: 4-6%

**Complex Patient Management:**

*Obesity:*
- CHC: Slight increased VTE risk, but benefits generally outweigh risks
- Implant: Effective regardless of BMI
- LNG EC: Consider higher dose or ulipristal

*Anticoagulation:*
- Avoid estrogen
- IUD insertion during therapeutic anticoagulation requires planning
- Progestin-only methods reduce menstrual blood loss

*Solid Organ Transplant:*
- Drug interactions with immunosuppressants
- LARC preferred
- Avoid estrogen if hepatic dysfunction

**Emerging Technologies:**
- Lower-dose hormonal IUDs
- Self-administered subcutaneous DMPA
- Non-hormonal male contraception (in trials)
- Biodegradable implants
- Multipurpose prevention technologies (contraception + HIV prevention)`,
      keyTerms: [
        { term: 'reproductive autonomy', definition: 'Patient right to make informed, uncoerced decisions about contraception and childbearing' },
        { term: 'tiered-effectiveness counseling', definition: 'Presenting contraceptive options organized by effectiveness to support informed choice' },
        { term: 'same-day insertion', definition: 'Providing LARC on the day of request when pregnancy is reasonably excluded' },
        { term: 'multipurpose prevention technology', definition: 'Products designed to prevent pregnancy and STIs/HIV simultaneously' },
      ],
      clinicalNotes: 'Focus on patient-centered counseling rather than directive approaches. Ensure removal access is as easy as insertion. Document contraceptive counseling in EMR with shared decision-making language. Stay current with US MEC updates.',
    },
  },
  media: [],
  citations: [
    {
      id: 'cdc-us-mec',
      type: 'website',
      title: 'US Medical Eligibility Criteria for Contraceptive Use',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/reproductivehealth/contraception/mmwr/mec/summary.html',
      license: 'Public domain',
    },
    {
      id: 'acog-larc-pb',
      type: 'article',
      title: 'ACOG Practice Bulletin: Long-Acting Reversible Contraception',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyright ACOG',
    },
  ],
  crossReferences: [
    { targetId: 'concept-menstrual-cycle-explained', targetType: 'concept', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'concept-fertility-basics', targetType: 'concept', relationship: 'related', label: 'Fertility Basics' },
    { targetId: 'concept-preconception-care', targetType: 'concept', relationship: 'related', label: 'Preconception Care' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'patient-education', 'womens-health', 'family-planning'],
    keywords: ['birth control', 'IUD', 'implant', 'pill', 'LARC', 'contraception', 'family planning'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, shelf: ['obgyn'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
