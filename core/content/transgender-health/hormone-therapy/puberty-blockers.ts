import { EducationalContent } from '../../types';

export const pubertyBlockersContent: EducationalContent = {
  id: 'topic-puberty-blockers',
  type: 'topic',
  name: 'Puberty Blockers',
  alternateNames: ['GnRH Agonists', 'Puberty Suppression', 'Hormone Blockers'],

  levels: {
    1: {
      level: 1,
      summary: 'Puberty blockers are medicines that can pause puberty to give young people more time to understand their gender.',
      explanation: `Puberty blockers are medicines used by some transgender young people. They pause the body changes that happen during puberty.

**What They Do:**
- Pause puberty temporarily
- Give more time to think and understand
- The effects go away if you stop taking them

**Important Things to Know:**
- They are only used after puberty has started
- A doctor and team help make this decision
- Parents or guardians are involved
- It's a reversible option - puberty resumes if stopped

These medicines have been used safely for many years for various medical reasons.`,
      keyTerms: [
        { term: 'puberty', definition: 'The time when your body changes from a child to an adult' },
        { term: 'puberty blockers', definition: 'Medicines that pause the changes of puberty' },
        { term: 'reversible', definition: 'Something that can be undone or goes back to normal' },
      ],
      analogies: [
        'Puberty blockers are like pressing pause on a video - the changes stop, and when you unpause, it continues.',
      ],
      examples: [
        'A 12-year-old who feels distressed about puberty might use blockers while working with a counselor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Puberty blockers (GnRH agonists) reversibly suppress puberty in gender-diverse adolescents, providing time for exploration and reducing distress from unwanted pubertal changes.',
      explanation: `Puberty blockers are medications that temporarily pause puberty in adolescents experiencing gender dysphoria.

**How They Work:**
- Block signals that tell the body to start puberty
- Suppress development of secondary sex characteristics
- Effects are reversible when stopped

**Why They're Used:**
- Give time for psychosocial maturation
- Reduce distress from unwanted body changes
- Allow informed decision about gender-affirming hormones
- Prevent need for some surgeries later

**Eligibility:**
- Puberty must have started (Tanner stage 2+)
- Persistent gender dysphoria
- Comprehensive assessment by qualified team
- Parental/guardian involvement

**Effects:**

*Assigned Male at Birth:*
- Prevents voice deepening
- Prevents facial hair growth
- Prevents growth spurts
- Prevents genital development

*Assigned Female at Birth:*
- Stops menstrual periods
- Prevents breast development
- Prevents hip widening

**Safety:**
- Used for decades for precocious puberty
- Reversible: Puberty resumes if stopped
- Bone density monitoring recommended
- Regular follow-up required`,
      keyTerms: [
        { term: 'GnRH agonist', definition: 'Type of medication that suppresses puberty by affecting hormone signals', pronunciation: 'G-N-R-H' },
        { term: 'Tanner stage', definition: 'System for measuring how far along puberty is' },
        { term: 'secondary sex characteristics', definition: 'Body changes that happen during puberty' },
        { term: 'precocious puberty', definition: 'When puberty starts too early' },
      ],
    },
    3: {
      level: 3,
      summary: 'GnRH agonists suppress gonadotropin secretion to pause pubertal development, providing a reversible intervention for gender-diverse adolescents per WPATH SOC 8 and Endocrine Society guidelines.',
      explanation: `Puberty suppression with GnRH agonists is an established intervention for adolescents with persistent gender dysphoria.

**Mechanism:**
- GnRH agonists initially stimulate, then downregulate pituitary GnRH receptors
- Result: Suppression of LH and FSH secretion
- Effect: Reduced gonadal sex hormone production
- Puberty is paused, not ended

**Clinical Guidelines:**

*WPATH SOC 8 (2022):*
- Eligibility at Tanner stage 2 or higher
- Documented persistent gender diversity
- Comprehensive assessment
- Multidisciplinary team involvement
- Informed consent from adolescent and parents

*Endocrine Society (2017):*
- Similar criteria
- Emphasizes psychological support
- Monitoring recommendations

**Medications:**

| Medication | Route | Frequency |
|------------|-------|-----------|
| Leuprolide | IM | Monthly or every 3 months |
| Histrelin | Implant | Annual |
| Goserelin | SubQ | Monthly or every 3 months |

**Monitoring:**
- Height, weight, Tanner staging at each visit
- LH, FSH, sex steroids every 3-6 months
- Bone density (DEXA) annually
- Psychological assessment ongoing

**Outcomes:**
- Alleviates gender dysphoria
- Improves mental health outcomes
- Reduces need for future surgeries
- Buys time for maturation and decision-making

**Considerations:**
- Long-term data still accumulating
- Bone density requires monitoring
- Fertility implications discussed
- Financial/insurance barriers may exist`,
      keyTerms: [
        { term: 'gonadotropin', definition: 'Hormones (LH, FSH) that stimulate sex hormone production', pronunciation: 'go-NAD-oh-TRO-pin' },
        { term: 'leuprolide', definition: 'Common GnRH agonist used for puberty suppression', pronunciation: 'loo-PRO-lide' },
        { term: 'histrelin', definition: 'GnRH agonist available as annual implant', pronunciation: 'HIS-tre-lin' },
        { term: 'DEXA scan', definition: 'Test that measures bone density' },
      ],
      clinicalNotes: 'Initiate at Tanner stage 2 or higher. Monitor bone density annually. Effects fully reversible if discontinued. Transition to gender-affirming hormones typically around age 16.',
    },
    4: {
      level: 4,
      summary: 'Puberty suppression with GnRH agonists requires comprehensive assessment, multidisciplinary care, informed consent, and monitoring per WPATH SOC 8 and Endocrine Society guidelines, with attention to bone health and psychosocial outcomes.',
      explanation: `GnRH agonist therapy for puberty suppression is a specialized intervention requiring expertise in adolescent transgender care.

**Pharmacology:**

*Mechanism:*
- Initial stimulation of pituitary GnRH receptors (flare)
- Subsequent receptor downregulation
- Suppression of LH/FSH pulsatility
- Reduced gonadal steroid production

*Formulations:*
- Leuprolide acetate: 7.5 mg IM monthly, 22.5 mg every 3 months
- Histrelin: 50 mg implant (Supprelin LA) annual replacement
- Goserelin: 3.6 mg monthly or 10.8 mg every 3 months

**Assessment Protocol:**

*Eligibility:*
- Tanner stage 2+ (breast budding or testicular volume >4 mL)
- Persistent, well-documented gender diversity
- Intensified gender dysphoria with puberty onset
- No acute psychiatric crisis
- Capacity for informed assent

*Multidisciplinary Evaluation:*
- Mental health assessment
- Medical evaluation
- Family assessment
- Discussion of fertility implications
- Informed consent documentation

**Monitoring Protocol:**

| Parameter | Frequency |
|-----------|-----------|
| Height, weight, Tanner | Every 3-6 months |
| LH, FSH, estradiol/testosterone | Every 3-6 months |
| Bone density (DEXA) | Baseline, then annually |
| Mental health assessment | Ongoing |

**Bone Health Considerations:**
- Puberty is critical for bone mineral accrual
- GnRH agonists may delay bone density gains
- Generally recovers with gender-affirming hormones
- Calcium/vitamin D supplementation recommended
- Monitor DEXA; Z-scores may decrease during treatment

**Transition to Gender-Affirming Hormones:**
- Typically around age 16 (guidelines vary)
- May be earlier with careful consideration
- GnRH agonist continued until gonadectomy or adequate suppression from hormones

**Evidence Base:**
- Dutch protocol pioneered approach
- Improved mental health outcomes documented
- High continuation rates to gender-affirming hormones
- Long-term outcome studies ongoing`,
      keyTerms: [
        { term: 'flare reaction', definition: 'Initial hormone surge before suppression with GnRH agonists' },
        { term: 'Z-score', definition: 'Bone density measure compared to age-matched peers' },
        { term: 'Dutch protocol', definition: 'Influential treatment approach developed in Netherlands for transgender youth' },
        { term: 'assent', definition: 'Agreement from minor to participate in treatment' },
      ],
      clinicalNotes: 'Bone density Z-scores may decrease during suppression; generally normalize with gender-affirming hormones. Document comprehensive informed consent. Multidisciplinary team is standard of care.',
    },
    5: {
      level: 5,
      summary: 'GnRH agonist puberty suppression requires evidence-based assessment protocols, multidisciplinary care, comprehensive informed consent, bone health monitoring, and attention to evolving research on long-term outcomes.',
      explanation: `Expert management of puberty suppression integrates clinical guidelines, emerging evidence, and individualized care.

**Clinical Framework:**

*WPATH SOC 8 (2022) Key Points:*
- Eligibility at Tanner 2+
- Requires comprehensive assessment
- Multidisciplinary team essential
- No specific duration of gender diversity required
- Emphasizes individualized care

*Endocrine Society (2017):*
- Similar framework
- Specifies monitoring protocols
- Update anticipated

**Assessment Best Practices:**

*Components:*
- Developmental history of gender identity
- Pubertal history and response
- Mental health evaluation (comorbidities, capacity)
- Family assessment and support
- Social environment
- Understanding of interventions

*Documentation:*
- Comprehensive gender history
- Diagnosis of gender dysphoria/incongruence
- Informed consent/assent process
- MDT discussion and recommendations

**Pharmacologic Management:**

*Drug Selection:*
- Leuprolide: Most common in US, monthly or depot
- Histrelin implant: Convenient, annual; insertion procedure
- Consider: Cost, insurance, patient/family preference

*Efficacy Monitoring:*
- Suppressed LH/FSH (typically <1 mIU/mL)
- Prepubertal sex steroid levels
- Halted or regressed Tanner staging

*Duration:*
- Until decision regarding gender-affirming hormones
- Or discontinuation and natural puberty resumption
- Bridge to GAH typically at 14-16+ (individualized)

**Bone Health Management:**

*Concerns:*
- Puberty critical for peak bone mass acquisition
- Prolonged suppression may impact BMD
- Data suggests recovery with cross-sex hormones

*Monitoring:*
- Baseline DEXA
- Annual DEXA during treatment
- Z-score interpretation (compare to age-matched)

*Interventions:*
- Calcium: 1000-1300 mg/day
- Vitamin D: 600-1000 IU/day
- Weight-bearing exercise encouraged

**Controversies and Evidence:**

*Debate Areas:*
- Appropriate age of intervention
- Duration of gender diversity required
- Long-term outcomes data
- Consent/capacity in adolescents

*Current Evidence:*
- Amsterdam cohort: High continuation rates, improved outcomes
- Mental health improvements documented
- Regret rates very low
- Long-term bone, cognitive, fertility data evolving

*Balanced Approach:*
- Acknowledge evidence limitations
- Weigh benefits against potential risks
- Individualized risk-benefit discussion
- Ongoing monitoring and assessment

**Fertility Considerations:**
- Early suppression may limit gamete maturation
- Discuss preservation options before treatment
- May need to pause suppression for gamete retrieval
- Uncertain fertility outcomes with prolonged use + GAH`,
      keyTerms: [
        { term: 'peak bone mass', definition: 'Maximum bone density achieved, typically in early adulthood' },
        { term: 'Amsterdam cohort', definition: 'Long-term follow-up study of youth treated with Dutch protocol' },
        { term: 'GAH', definition: 'Gender-affirming hormones (estrogen or testosterone)' },
        { term: 'gamete', definition: 'Reproductive cells (eggs or sperm)' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Multidisciplinary team is standard of care
- Document comprehensive assessment and informed consent
- Monitor bone density annually with DEXA
- Calcium/vitamin D supplementation for all
- Effects are reversible; puberty resumes if discontinued
- Transition to GAH typically age 14-16, individualized
- Address fertility preservation early
- Long-term outcome data continues to accumulate
- Stay current with evolving guidelines and evidence
- Psychological support throughout is essential`,
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
      url: 'https://doi.org/10.1080/26895269.2022.2100644',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    { targetId: 'topic-monitoring-and-safety', targetType: 'topic', relationship: 'related', label: 'Monitoring and Safety' },
    { targetId: 'topic-gender-dysphoria', targetType: 'topic', relationship: 'related', label: 'Gender Dysphoria' },
  ],
  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['puberty suppression', 'adolescent health', 'transgender health'],
    keywords: ['puberty blockers', 'GnRH agonists', 'adolescents', 'puberty suppression'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pubertyBlockersContent;
