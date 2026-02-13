/**
 * Hormonal Contraception
 *
 * Comprehensive coverage of hormonal contraceptive methods including pills, patches, rings, and injections.
 */

import { EducationalContent } from '../../../types';

export const hormonalContraception: EducationalContent = {
  id: 'obgyn-contraception-hormonal',
  type: 'topic',
  name: 'Hormonal Contraception',
  alternateNames: ['The pill', 'Birth control pills', 'Hormonal birth control'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Hormonal contraception uses hormones to prevent pregnancy and comes in many forms including pills, patches, and rings.',
      explanation: `Hormonal birth control uses hormones (similar to those your body makes) to prevent pregnancy.

**How it works:**
- Stops ovulation (egg release)
- Thickens cervical mucus to block sperm
- Thins uterine lining

**Types:**
- **Pills**: Taken daily, most common type
- **Patch**: Applied to skin weekly
- **Ring**: Inserted in vagina monthly
- **Shot**: Injection every 3 months
- **Implant**: Rod under arm skin, lasts 3 years`,
      keyTerms: [
        { term: 'ovulation', definition: 'Release of an egg from the ovary' },
        { term: 'hormones', definition: 'Chemical messengers that control body functions' },
      ],
    },
    2: {
      level: 2,
      summary: 'Hormonal contraception includes combined estrogen-progestin methods and progestin-only methods with different delivery systems and effectiveness profiles.',
      explanation: `**Combined Hormonal Contraceptives (CHCs):**
- Contain estrogen + progestin
- Pills, patch, ring
- Typical use: 91% effective

**Progestin-Only Methods:**
- No estrogen
- Pills, injection, implant
- Safer for some women

**Mechanisms:**
1. Suppress ovulation (primary)
2. Thicken cervical mucus
3. Alter endometrial lining
4. Slow tubal motility

**Common Formulations:**
| Type | Hormones | Dosing |
|------|----------|--------|
| Combined pill | EE + progestin | Daily |
| Mini-pill | Progestin only | Daily |
| Patch | EE + norelgestromin | Weekly |
| Ring | EE + etonogestrel | 3 weeks in/1 week out |
| Injection | DMPA | Every 12 weeks |
| Implant | Etonogestrel | 3 years |`,
      keyTerms: [
        { term: 'combined hormonal contraceptive', definition: 'Contains both estrogen and progestin' },
        { term: 'progestin', definition: 'Synthetic form of progesterone used in contraception' },
        { term: 'ethinyl estradiol', definition: 'Synthetic estrogen used in most combined contraceptives' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hormonal contraceptive selection requires consideration of estrogen contraindications, progestin side effect profiles, and individual patient factors.',
      explanation: `**Estrogen Contraindications (US MEC 4):**
- History of VTE, PE, DVT
- Known thrombogenic mutations
- Migraine with aura
- Current breast cancer
- Smoking age ≥35 (≥15 cig/day)
- Complicated valvular disease
- Uncontrolled hypertension

**Progestin Characteristics:**

| Generation | Examples | Properties |
|------------|----------|------------|
| 1st | Norethindrone | Higher androgenic |
| 2nd | Levonorgestrel | Less androgenic |
| 3rd | Desogestrel, norgestimate | Least androgenic |
| 4th | Drospirenone | Anti-androgenic, antimineralocorticoid |

**Side Effects:**
- Estrogen: Nausea, breast tenderness, headache
- Progestin: Mood changes, acne, bloating
- DMPA specific: Weight gain, bone density concerns

**Non-Contraceptive Benefits:**
- Decreased dysmenorrhea
- Lighter periods
- Acne improvement
- Decreased ovarian/endometrial cancer risk`,
      keyTerms: [
        { term: 'drospirenone', definition: '4th generation progestin with anti-androgenic effects' },
        { term: 'DMPA', definition: 'Depot medroxyprogesterone acetate - the contraceptive injection' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced management includes extended cycling, breakthrough bleeding management, drug interactions, and evidence-based approaches to missed doses.',
      explanation: `**Extended/Continuous Cycling:**
- Skip placebo week
- Take active pills continuously
- Reduces hormone withdrawal symptoms
- Safe long-term

**Breakthrough Bleeding (BTB):**
- Common first 3 months
- Management options:
  - Reassurance and continuation
  - Short estrogen course
  - Different formulation
  - Rule out other causes

**Drug Interactions:**
- CYP3A4 inducers reduce efficacy:
  - Rifampin (most significant)
  - Some anticonvulsants
  - St. John's wort
- Backup method or alternative needed

**Missed Pill Guidelines:**
- 1 pill: Take ASAP, continue as normal
- 2+ pills: Take 2, backup 7 days
- Missed in week 3: Skip placebo, start new pack

**Implant (Nexplanon):**
- 99.95% effective
- 3-year duration (approved for 5 years)
- Etonogestrel 68mg
- Common side effect: Irregular bleeding`,
      keyTerms: [
        { term: 'CYP3A4', definition: 'Liver enzyme that metabolizes many contraceptives' },
        { term: 'breakthrough bleeding', definition: 'Unscheduled bleeding while on hormonal contraception' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive hormonal contraception knowledge includes pharmacogenomics, VTE risk stratification, and emerging formulations.',
      explanation: `**VTE Risk Stratification:**
- Background risk: 1-5/10,000 women-years
- Combined OC: 3-9/10,000 women-years
- Pregnancy: 5-20/10,000 women-years
- Postpartum: 40-65/10,000 women-years

**Progestin and VTE:**
- Levonorgestrel: Lower VTE risk
- Drospirenone: Slightly higher risk
- Absolute risk remains low

**Newer Formulations:**
- Estetrol (E4): Natural estrogen, may have lower VTE risk
- Extended-cycle pills (84/7, 365)
- Lower estrogen doses (10-20mcg EE)

**Pharmacogenomics:**
- CYP2C9, CYP3A4 polymorphisms
- Factor V Leiden screening (not routine)
- Pharmacogenomic testing not standard practice

**Special Situations:**
- Bariatric surgery: May affect absorption
- Obesity: Efficacy generally maintained
- Solid organ transplant: Consider drug interactions
- HIV on ART: Multiple interactions possible

**Future Directions:**
- Non-daily pills
- Male hormonal contraception
- Targeted progestin delivery`,
      keyTerms: [
        { term: 'estetrol', definition: 'Natural estrogen being studied for contraception with potentially better safety profile' },
        { term: 'Factor V Leiden', definition: 'Genetic mutation increasing VTE risk' },
      ],
      clinicalNotes: 'Routine VTE screening before combined hormonal contraceptive use is not recommended. Patient history should identify personal or family history of clots. Estrogen-containing contraceptives can start immediately postpartum for non-breastfeeding women without VTE risk factors after 21 days.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-hormonal',
      type: 'article',
      title: 'ACOG Practice Bulletin: Combined Hormonal Contraceptives',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-contraception-overview', targetType: 'topic', relationship: 'parent', label: 'Contraception Overview' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: [],
    topics: ['contraception', 'pharmacology'],
    keywords: ['birth control pill', 'hormonal contraception', 'patch', 'ring', 'implant'],
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
