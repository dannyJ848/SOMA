/**
 * Permanent Contraception
 *
 * Coverage of permanent contraceptive methods including tubal procedures and vasectomy.
 */

import { EducationalContent } from '../../../types';

export const permanentContraception: EducationalContent = {
  id: 'obgyn-contraception-permanent',
  type: 'topic',
  name: 'Permanent Contraception',
  alternateNames: ['Sterilization', 'Tubal ligation', 'Getting tubes tied'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Permanent contraception is surgery that prevents pregnancy forever by blocking the tubes.',
      explanation: `Permanent contraception (sterilization) is for people who are certain they never want to become pregnant.

**Options:**
- **Female sterilization**: Surgery on the fallopian tubes
- **Vasectomy**: Surgery on the male tubes that carry sperm

**Key points:**
- Over 99% effective
- Should be considered permanent (reversal is difficult)
- Does not protect against STIs
- Does not affect sex drive or hormones`,
      keyTerms: [
        { term: 'sterilization', definition: 'Permanent surgical contraception' },
        { term: 'tubal ligation', definition: 'Surgery to block the fallopian tubes' },
        { term: 'vasectomy', definition: 'Surgery to block the tubes carrying sperm' },
      ],
    },
    2: {
      level: 2,
      summary: 'Female sterilization techniques include laparoscopic methods and bilateral salpingectomy, while vasectomy offers male sterilization with simpler procedures.',
      explanation: `**Female Sterilization Methods:**

**Bilateral Salpingectomy:**
- Complete removal of fallopian tubes
- Reduces ovarian cancer risk
- Now preferred over tubal ligation

**Tubal Ligation Techniques:**
- Partial salpingectomy (Pomeroy, Parkland)
- Clips (Filshie, Hulka)
- Silastic bands (Falope ring)
- Electrocoagulation

**Timing:**
- Interval (any time)
- Postpartum (immediately after delivery)
- Post-abortion

**Vasectomy:**
- Office procedure under local anesthesia
- Vas deferens cut and sealed
- Simpler, safer, cheaper than female sterilization
- Not immediately effective (need confirmation)

**Effectiveness:**
- Female: 99.5% (failure rate 0.5%)
- Vasectomy: 99.85% after confirmation`,
      keyTerms: [
        { term: 'bilateral salpingectomy', definition: 'Surgical removal of both fallopian tubes' },
        { term: 'vas deferens', definition: 'Tube carrying sperm from testicle' },
      ],
    },
    3: {
      level: 3,
      summary: 'Sterilization counseling must ensure informed consent, address regret factors, and explain ectopic pregnancy risk in rare failures.',
      explanation: `**Counseling Requirements:**
- Voluntary and informed consent
- Alternatives discussed (LARC equally effective)
- Permanence emphasized
- Regret risk factors reviewed

**Regret Risk Factors:**
- Young age (<30)
- Low parity
- Relationship instability
- Marital discord
- Pressure from others
- Decision during pregnancy/abortion

**Failure and Ectopic Pregnancy:**
- 10-year cumulative failure: 1-3%
- If pregnancy occurs, 30% ectopic risk
- Salpingectomy has lowest failure rate

**Regulatory Considerations:**
- Medicaid: 30-day waiting period
- Age restrictions vary by state
- Documentation requirements

**Vasectomy Details:**
- Semen analysis at 8-16 weeks (or 20 ejaculations)
- Backup method until confirmed azoospermia
- Failure rate: 1-2/1000 after confirmation`,
      keyTerms: [
        { term: 'regret', definition: 'Wishing sterilization could be reversed' },
        { term: 'azoospermia', definition: 'Absence of sperm in semen - confirms vasectomy success' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced management includes opportunistic salpingectomy for cancer prevention, reversal considerations, and comparative effectiveness analysis.',
      explanation: `**Opportunistic Salpingectomy:**
- Salpingectomy preferred over tubal ligation
- Reduces ovarian cancer risk 40-65%
- Many ovarian cancers arise from fallopian tube fimbria
- ACOG/SGO recommend counseling for all pelvic surgeries

**Surgical Approaches:**
- Laparoscopic: Most common for interval
- Mini-laparotomy: Postpartum, resource-limited settings
- At cesarean delivery: Convenient timing

**Reversal Considerations:**
- Tubal anastomosis possible but not guaranteed
- Success depends on technique used, length remaining
- IVF may be more successful than reversal
- Salpingectomy: IVF only option

**Vasectomy Reversal:**
- Vasovasostomy success: 30-90% depending on interval
- Patency rates higher than pregnancy rates
- Sperm antibodies may affect fertility

**LARC Comparison:**
- IUDs and implants equally effective
- Reversible alternatives
- Cost-effective over time
- May be better choice for young patients`,
      keyTerms: [
        { term: 'opportunistic salpingectomy', definition: 'Removing tubes during other surgery for cancer prevention' },
        { term: 'tubal anastomosis', definition: 'Surgical reversal of tubal ligation' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive understanding encompasses reproductive autonomy issues, health system considerations, and evolving evidence on cancer prevention.',
      explanation: `**Reproductive Autonomy:**
- Historical coerced sterilization
- Vulnerable populations protection
- Balance access with safeguards
- Avoid paternalistic barriers

**Health System Issues:**
- Hospital policies (religious restrictions)
- Insurance coverage variations
- Medicaid requirements
- Training availability

**Ovarian Cancer Prevention:**
- Serous tubal intraepithelial carcinoma (STIC) lesions
- Fimbrial origin of high-grade serous carcinoma
- Salpingectomy for BRCA carriers
- Opportunistic salpingectomy guidelines

**Evidence Base:**
- CREST study: Long-term failure data
- ACOG Committee Opinion on salpingectomy
- Cochrane reviews on techniques

**Global Considerations:**
- Female sterilization common globally
- Access disparities
- Post-campaign sterilization ethics
- Quality of consent

**Future Directions:**
- Less invasive techniques
- Improved reversal methods
- Male contraception alternatives`,
      keyTerms: [
        { term: 'STIC', definition: 'Serous tubal intraepithelial carcinoma - precursor lesion in tubes' },
        { term: 'CREST study', definition: 'Major US collaborative study on sterilization effectiveness' },
      ],
      clinicalNotes: 'Bilateral salpingectomy is now preferred over tubal ligation when permanent sterilization is desired. Counsel patients on ovarian cancer risk reduction. Ensure informed consent is truly voluntary without coercion.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-sterilization',
      type: 'article',
      title: 'ACOG Committee Opinion: Opportunistic Salpingectomy',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-contraception-overview', targetType: 'topic', relationship: 'parent', label: 'Contraception Overview' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['fallopian tubes'],
    topics: ['contraception', 'surgery'],
    keywords: ['sterilization', 'tubal ligation', 'salpingectomy', 'vasectomy'],
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
