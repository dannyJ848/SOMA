import { EducationalContent } from '../../types';

export const masculinizingHormoneTherapyContent: EducationalContent = {
  id: 'topic-masculinizing-hormone-therapy',
  type: 'topic',
  name: 'Masculinizing Hormone Therapy',
  alternateNames: ['Testosterone Therapy', 'Masculinizing HRT', 'FTM Hormone Therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Masculinizing hormones help transgender men and some non-binary people develop more masculine physical features.',
      explanation: `Masculinizing hormone therapy uses testosterone to help the body develop more masculine features. This is one option for transgender men and some non-binary people who want these changes.

**What Changes Happen:**
- Voice gets deeper
- Facial hair grows
- More body hair
- Body shape becomes more muscular
- Menstrual periods stop

**Important Things to Know:**
- Changes take time (months to years)
- Some changes are permanent (voice, hair)
- A doctor monitors your health with blood tests
- You can stop if you decide it's not right for you`,
      keyTerms: [
        { term: 'testosterone', definition: 'A hormone that causes masculine body changes', pronunciation: 'tes-TOS-ter-one' },
        { term: 'hormone', definition: 'Chemical messengers in your body that cause changes' },
        { term: 'masculinizing', definition: 'Causing body changes toward more masculine features' },
      ],
      analogies: [
        'Taking testosterone is like going through male puberty - it causes similar changes.',
      ],
      examples: [
        'A transgender man might notice his voice starting to crack and deepen within a few months.',
      ],
    },
    2: {
      level: 2,
      summary: 'Masculinizing hormone therapy uses testosterone to induce physical changes including voice deepening, facial hair growth, and menstrual cessation.',
      explanation: `Masculinizing hormone therapy is a medical treatment that produces masculine secondary sex characteristics.

**Medication:**

*Testosterone:*
- The main medication used
- Forms: Injections, gels, patches, pellets
- Causes all the masculinizing changes

**Physical Changes:**

*Early Changes (1-6 months):*
- Increased oiliness/acne
- Menstrual periods stop
- Increased libido
- Clitoral growth (bottom growth)
- Emotional changes

*Later Changes (6-24+ months):*
- Voice deepening
- Facial hair growth
- Body hair increases
- Fat redistribution (waist)
- Increased muscle mass
- Possible male-pattern balding

**What Doesn't Change:**
- Height (bones already fused)
- Hip bone structure
- Breast size (may need surgery)

**Health Monitoring:**
- Regular blood tests (hormone levels, blood counts, liver)
- Blood pressure checks
- Discussion of any side effects`,
      keyTerms: [
        { term: 'bottom growth', definition: 'Clitoral enlargement from testosterone' },
        { term: 'menstrual cessation', definition: 'When periods stop from testosterone' },
        { term: 'secondary sex characteristics', definition: 'Physical features that develop during puberty' },
        { term: 'male-pattern baldness', definition: 'Hair loss on the head that some people get from testosterone' },
      ],
    },
    3: {
      level: 3,
      summary: 'Masculinizing hormone therapy involves testosterone administration to suppress estrogen and induce androgenic effects, with treatment protocols guided by Endocrine Society and WPATH guidelines.',
      explanation: `Masculinizing hormone therapy follows established clinical guidelines with individualized dosing based on patient goals and response.

**Testosterone Regimens:**

*Routes of Administration:*
- Injectable: Cypionate or enanthate 50-100 mg weekly or 100-200 mg every 2 weeks
- Transdermal gel: 50-100 mg daily
- Transdermal patch: 2.5-7.5 mg daily
- Subcutaneous injection: Growing in popularity
- Pellets: Every 3-6 months

*Target Levels:*
- Total testosterone: 400-700 ng/dL (male range)
- Estradiol: Typically falls to <50 pg/mL

**Timeline of Changes:**

| Change | Onset | Maximum Effect |
|--------|-------|----------------|
| Oiliness/acne | 1-6 months | 1-2 years |
| Menses cessation | 2-6 months | - |
| Clitoral growth | 3-6 months | 1-2 years |
| Voice deepening | 3-12 months | 1-2 years |
| Facial hair | 6-12 months | 5+ years |
| Body hair | 6-12 months | 5+ years |
| Muscle increase | 6-12 months | 2-5 years |
| Fat redistribution | 3-6 months | 2-5 years |
| Scalp hair changes | 6-12 months | Variable |

**Monitoring Protocol:**
- Baseline: CBC, CMP, lipids, estradiol, testosterone
- Follow-up labs: 3 months, 6 months, then annually
- Polycythemia (elevated hematocrit) is key concern

**Risks:**
- Polycythemia (most common)
- Acne
- Male-pattern baldness (genetic)
- Vaginal atrophy
- Liver: Rare with modern formulations
- Infertility (variable reversibility)`,
      keyTerms: [
        { term: 'polycythemia', definition: 'Elevated red blood cells; can increase blood thickness', pronunciation: 'pol-ee-sy-THEE-mee-ah' },
        { term: 'hematocrit', definition: 'Percentage of blood that is red blood cells' },
        { term: 'vaginal atrophy', definition: 'Thinning and dryness of vaginal tissue from testosterone' },
        { term: 'testosterone cypionate', definition: 'Long-acting injectable form of testosterone' },
      ],
      clinicalNotes: 'Monitor hematocrit every 3 months initially. If >54%, consider dose reduction, phlebotomy, or route change. Vaginal estrogen is safe if atrophy is symptomatic.',
    },
    4: {
      level: 4,
      summary: 'Masculinizing hormone therapy requires individualized testosterone regimen selection, monitoring for polycythemia and other complications per Endocrine Society guidelines, and management of specific clinical considerations.',
      explanation: `Masculinizing hormone therapy management requires attention to medication selection, dosing, monitoring, and risk mitigation.

**Pharmacology:**

*Testosterone:*
- Mechanism: Binds androgen receptors, induces masculine secondary sex characteristics
- Suppresses gonadotropins, reducing estrogen production
- Half-life varies by formulation

*Formulations:*
- Cypionate/Enanthate: IM or SubQ, half-life ~8 days
- Undecanoate (Aveed): IM every 10 weeks, requires REMS
- Gels (Androgel, Testim): Daily application
- Patches (Androderm): Daily, skin reactions common
- Pellets (Testopel): Every 3-6 months, requires insertion procedure

**Risk Management:**

*Polycythemia:*
- Most significant medical risk
- Monitor hematocrit: Every 3 months x 1 year, then annually
- Threshold: Hematocrit >54% requires intervention
- Management: Reduce dose, change route, therapeutic phlebotomy
- Risk factors: Smoking, sleep apnea, high doses

*Cardiovascular:*
- Data mixed on CV risk in transgender men
- Lipid changes: HDL may decrease, LDL may increase
- Monitor BP, lipids
- Address modifiable risk factors

*Liver:*
- Modern injectable formulations: Minimal hepatic risk
- Oral formulations: Higher risk, generally avoided
- Monitor LFTs periodically

*Gynecologic:*
- Vaginal atrophy: May cause dryness, pain
- Treatment: Topical estrogen is safe and compatible
- Endometrial changes: Limited data, consider screening with persistent bleeding
- Cervical screening: Continue per guidelines

**Special Populations:**
- PCOS: May already have elevated androgens; still candidate for therapy
- Post-hysterectomy: Simpler management, no menses concerns
- Chronic conditions: Adjust monitoring as appropriate`,
      keyTerms: [
        { term: 'REMS', definition: 'Risk Evaluation and Mitigation Strategy; FDA safety program for certain drugs' },
        { term: 'therapeutic phlebotomy', definition: 'Blood removal to reduce elevated red blood cells' },
        { term: 'PCOS', definition: 'Polycystic ovary syndrome; condition with elevated androgens' },
        { term: 'subcutaneous injection', definition: 'Injection into fatty tissue under skin' },
      ],
      clinicalNotes: 'Hematocrit monitoring is essential. SubQ injection is acceptable and often preferred by patients. Vaginal estrogen is safe if needed for atrophy.',
    },
    5: {
      level: 5,
      summary: 'Masculinizing hormone therapy requires comprehensive understanding of testosterone pharmacokinetics, monitoring per Endocrine Society guidelines, management of polycythemia and other complications, and attention to specific clinical scenarios.',
      explanation: `Expert-level management of masculinizing hormone therapy integrates pharmacology, risk stratification, and evidence-based protocols.

**Advanced Pharmacology:**

*Testosterone Formulations:*
- Injectable (Cypionate/Enanthate):
  - Peak at 24-48 hours, nadir before next dose
  - Weekly dosing provides more stable levels
  - SubQ route: Comparable pharmacokinetics, may reduce polycythemia
  - Patient preference often guides selection

- Injectable (Undecanoate - Aveed):
  - Long-acting (10 weeks)
  - REMS required due to pulmonary oil microembolism risk
  - In-office administration required

- Transdermal:
  - More stable levels
  - Less polycythemia risk
  - Skin reactions with patches
  - Transfer risk with gels
  - May not achieve full virilization

*Dosing Optimization:*
- Goal: Testosterone in male range (400-700 ng/dL)
- Check levels at trough (before next injection)
- Adjust dose based on clinical response and labs

**Evidence-Based Monitoring:**

*Endocrine Society (2017):*
- Labs every 3 months for first year, then annually
- Key: Testosterone, hematocrit/hemoglobin, lipids, CMP

*Polycythemia Management Protocol:*
- Hematocrit 50-54%: Closer monitoring, risk factor modification
- Hematocrit >54%: Intervention required
- Options: Reduce dose, change to transdermal, phlebotomy
- Consider: Smoking cessation, sleep apnea evaluation

**Clinical Scenarios:**

*Persistent Menses:*
- Assess testosterone levels (may need higher dose)
- Consider: GnRH agonist or progestin short-term
- If persistent: Evaluate for pathology
- Hysterectomy as definitive option

*Vaginal Atrophy:*
- Common with testosterone
- Topical estrogen is safe (minimal systemic absorption)
- Vaginal moisturizers as alternative
- Important for sexually active patients, GYN exams

*Pre-Operative (Top Surgery):*
- Testosterone typically continued
- No clear evidence for discontinuation
- Discuss with surgical team

*Fertility:*
- Testosterone suppresses ovulation
- Not reliable contraception
- Fertility may return if testosterone stopped
- Preserve oocytes before therapy if future pregnancy desired
- Pregnancy has occurred on testosterone (not recommended)

**Long-Term Considerations:**
- Cardiovascular: Ongoing research
- Osteoporosis: Testosterone is bone-protective; ensure adequate levels
- Cancer screening: Continue cervical, breast based on anatomy
- Metabolic: Monitor for diabetes, lipid changes`,
      keyTerms: [
        { term: 'trough level', definition: 'Lowest hormone level, typically measured before next dose' },
        { term: 'pulmonary oil microembolism', definition: 'Rare complication with long-acting injectable testosterone (Aveed)' },
        { term: 'virilization', definition: 'Development of masculine physical characteristics' },
        { term: 'oocyte preservation', definition: 'Freezing eggs for future fertility' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- SubQ injection is effective and often preferred
- Weekly dosing provides more stable levels than biweekly
- Hematocrit monitoring is the priority safety measure
- Transdermal may be better for polycythemia-prone patients
- Vaginal estrogen is safe and should be offered for atrophy
- Continue cervical cancer screening per guidelines
- Testosterone is NOT reliable contraception
- Pre-surgical testosterone management: Continue unless specific concern`,
    },
  },

  media: [],
  citations: [
    {
      id: 'hembree-2017',
      type: 'article',
      title: 'Endocrine Treatment of Gender-Dysphoric/Gender-Incongruent Persons',
      authors: ['Hembree WC', 'et al.'],
      source: 'Journal of Clinical Endocrinology & Metabolism',
      url: 'https://doi.org/10.1210/jc.2017-01658',
      license: 'Copyright Endocrine Society',
    },
  ],
  crossReferences: [
    { targetId: 'topic-monitoring-and-safety', targetType: 'topic', relationship: 'related', label: 'Monitoring and Safety' },
    { targetId: 'topic-feminizing-hormone-therapy', targetType: 'topic', relationship: 'related', label: 'Feminizing Hormone Therapy' },
  ],
  tags: {
    systems: ['endocrine', 'reproductive'],
    topics: ['hormone therapy', 'transgender health', 'masculinizing'],
    keywords: ['testosterone', 'HRT', 'masculinizing', 'FTM'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default masculinizingHormoneTherapyContent;
