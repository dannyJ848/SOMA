/**
 * Menopause Symptom Management
 *
 * Comprehensive coverage of managing menopausal symptoms
 * with both hormonal and non-hormonal approaches.
 */

import { EducationalContent } from '../../../types';

export const menopauseSymptomManagement: EducationalContent = {
  id: 'obgyn-menopause-symptoms',
  type: 'topic',
  name: 'Menopause Symptom Management',
  alternateNames: ['Hot Flash Treatment', 'VMS Management', 'Menopause Treatment'],

  levels: {
    1: {
      level: 1,
      summary: 'Menopause symptoms like hot flashes and vaginal dryness can be treated with hormones, other medicines, or lifestyle changes.',
      explanation: `Many women have bothersome symptoms during menopause that can be helped.

**Common symptoms and treatments:**

*Hot flashes and night sweats:*
- Dress in layers
- Keep room cool
- Avoid triggers (spicy food, alcohol, stress)
- Hormone therapy (most effective)
- Other prescription medicines
- Some supplements may help

*Vaginal dryness:*
- Water-based lubricants
- Vaginal moisturizers (use regularly)
- Low-dose vaginal estrogen (very effective, minimal absorption)
- DHEA vaginal inserts

*Sleep problems:*
- Good sleep habits
- Treat hot flashes if causing wake-ups
- Avoid caffeine and alcohol late
- Talk to doctor if persistent

*Mood changes:*
- Stay active
- Connect with others
- Consider counseling
- Medication if needed

**Remember:**
- Not everyone needs treatment
- Many options are available
- Talk to your doctor about what bothers you most`,
      keyTerms: [
        { term: 'lubricant', definition: 'A product used during sex to reduce friction and dryness' },
        { term: 'vaginal moisturizer', definition: 'A product used regularly to keep vaginal tissues moist and healthy' },
        { term: 'triggers', definition: 'Things that can set off hot flashes, like spicy food or stress' },
      ],
      analogies: [
        'Managing menopause symptoms is like managing any chronic condition - you have a toolkit of options and find what works best for you.',
      ],
      examples: [
        'A woman bothered mainly by vaginal dryness might use just a vaginal estrogen cream without needing pills or patches.',
      ],
    },
    2: {
      level: 2,
      summary: 'Menopause symptom management includes hormonal options (systemic and local), non-hormonal medications, and lifestyle modifications tailored to the primary symptoms.',
      explanation: `**Vasomotor Symptoms (VMS):**

*Hormonal Options:*
- Systemic estrogen (most effective)
- Low-dose HT formulations
- Transdermal preferred for many

*Non-Hormonal Medications:*
- SSRIs/SNRIs (paroxetine, venlafaxine)
- Gabapentin
- Clonidine
- Fezolinetant (newest option)

*Lifestyle:*
- Cooling techniques
- Trigger avoidance
- Weight loss (if overweight)
- Regular exercise
- Cognitive behavioral therapy

**Genitourinary Syndrome of Menopause (GSM):**

*Non-Hormonal:*
- Lubricants during sex
- Vaginal moisturizers (2-3x/week)
- Regular sexual activity
- Pelvic floor therapy

*Hormonal:*
- Vaginal estrogen (cream, tablet, ring)
- DHEA vaginal insert (Intrarosa)
- Ospemifene (oral SERM)

*Note: Vaginal estrogen is local, minimal systemic absorption*

**Sleep Disturbance:**
- Sleep hygiene measures
- Treat underlying VMS
- CBT for insomnia
- Consider sleep study if snoring/apnea suspected
- Low-dose trazodone if needed

**Mood Symptoms:**
- Lifestyle (exercise, stress management)
- SSRIs/SNRIs effective
- Hormone therapy may help some
- Referral for significant depression

**Joint Pain:**
- Exercise, stretching
- Anti-inflammatory approaches
- HT may help some women
- Rule out other causes`,
      keyTerms: [
        { term: 'fezolinetant', definition: 'A new non-hormonal medication for hot flashes that works on the brain\'s temperature control' },
        { term: 'ospemifene', definition: 'Oral medication (SERM) for vaginal dryness and painful sex' },
        { term: 'vaginal estrogen', definition: 'Low-dose estrogen applied directly to the vagina; minimal body-wide absorption' },
      ],
    },
    3: {
      level: 3,
      summary: 'Effective symptom management requires matching treatment to symptom burden, considering contraindications, and utilizing multimodal approaches when needed.',
      explanation: `**VMS Treatment Algorithm:**

*First Assessment:*
- Severity and frequency
- Impact on quality of life
- Contraindications to hormones
- Patient preferences

*If Eligible for HT:*
1. Low-dose systemic estrogen (+progestogen if uterus)
2. Transdermal preferred for many
3. Titrate to symptom control

*If HT Contraindicated/Declined:*
1. Fezolinetant (newest, very effective)
2. Paroxetine 7.5 mg (Brisdelle - FDA approved)
3. Venlafaxine, desvenlafaxine
4. Gabapentin (especially for sleep)
5. Clonidine (less effective)

*Non-Pharmacologic:*
- CBT: Reduces symptom impact
- Hypnosis: Some evidence for efficacy
- Paced respirations
- Cooling devices

**GSM Management:**

*Mild Symptoms:*
- Lubricants for sex
- Moisturizers for daily comfort
- Regular use important

*Moderate-Severe:*
- Vaginal estrogen first-line
  - Cream: 0.5-1g 2-3x/week
  - Tablet: 10 mcg 2x/week
  - Ring: Replace every 90 days
- DHEA (Intrarosa): 6.5 mg nightly
- Ospemifene: 60 mg daily

*Safety of Vaginal Estrogen:*
- Minimal systemic absorption
- Safe for most women
- Even breast cancer survivors may use (discuss with oncology)
- No progestogen needed at low doses

**Cognitive Symptoms:**

*"Brain Fog" Assessment:*
- Sleep quality impact
- VMS disruption
- Mood effects
- True cognitive decline (rare)

*Management:*
- Treat underlying factors
- Sleep optimization
- HT may help some
- Cognitive exercises
- Reassurance if mild

**Sexual Health:**

*Decreased Desire:*
- Multifactorial
- Address GSM symptoms
- Relationship factors
- Consider testosterone (off-label)

*Dyspareunia:*
- Treat GSM
- Pelvic floor PT
- Dilators if needed
- Sexual counseling`,
      keyTerms: [
        { term: 'Brisdelle', definition: 'FDA-approved low-dose paroxetine for hot flashes; non-hormonal option' },
        { term: 'CBT for VMS', definition: 'Cognitive behavioral therapy adapted for vasomotor symptoms; reduces impact' },
        { term: 'dilators', definition: 'Graduated devices to gently stretch vaginal tissues; used for GSM and dyspareunia' },
      ],
      clinicalNotes: 'Vaginal estrogen is safe for most women including many breast cancer survivors - the doses are much lower than systemic HT. Discuss with oncology if history of hormone-sensitive cancer, but don\'t automatically avoid.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive menopause symptom management integrates evidence-based treatments with attention to patient preferences, breast cancer survivor needs, and emerging therapeutic options.',
      explanation: `**Breast Cancer Survivors:**

*VMS Management:*
- Hot flashes often severe (aromatase inhibitors)
- HT generally contraindicated
- Venlafaxine well-studied
- Gabapentin effective
- Fezolinetant may be option (awaiting data)
- Oxybutynin studied

*GSM Management:*
- Non-hormonal first: lubricants, moisturizers
- Vaginal estrogen controversial but often used
- Ultra-low doses may be acceptable
- Discuss with oncology team
- Ospemifene contraindicated (SERM)
- DHEA likely acceptable

**Evidence for Non-Hormonal Treatments:**

| Treatment | VMS Reduction | Notes |
|-----------|---------------|-------|
| Fezolinetant | ~60% | Newest, NK3R antagonist |
| Paroxetine | ~40-65% | FDA approved (Brisdelle) |
| Venlafaxine | ~40-60% | Most evidence in BC survivors |
| Gabapentin | ~40-50% | Good for sleep |
| Clonidine | ~20-40% | Side effects limit use |
| CBT | ~40% (bother) | Reduces impact |

**Compounding Controversies:**

*Concerns:*
- Not FDA regulated
- Variable potency
- Unproven claims
- Higher cost
- No safety monitoring

*Counseling:*
- FDA-approved bioidentical options exist
- Compounding rarely needed
- Educate on risks
- Avoid saliva testing

**Sexual Health Integration:**

*Hypoactive Sexual Desire:*
- Multifactorial assessment
- Relationship issues
- Depression, fatigue
- GSM symptoms
- Medication effects

*Testosterone:*
- Not FDA approved for women
- Some evidence for desire in postmenopause
- Off-label use with counseling
- Monitor for androgenic effects
- Global Consensus supports limited use

**Weight Management:**

*Menopause-Related Changes:*
- Redistribution to visceral fat
- May not be weight gain per se
- Metabolic changes
- Activity often decreases

*Approach:*
- Physical activity (strength training important)
- Dietary modifications
- HT may help prevent abdominal fat
- Address as part of comprehensive care`,
      keyTerms: [
        { term: 'NK3R antagonist', definition: 'Neurokinin 3 receptor antagonist; fezolinetant blocks this to reduce hot flashes' },
        { term: 'aromatase inhibitors', definition: 'Breast cancer medications that block estrogen; often cause severe menopause symptoms' },
        { term: 'hypoactive sexual desire disorder', definition: 'Persistent lack of sexual desire causing distress' },
      ],
      clinicalNotes: 'Fezolinetant represents a significant advance for women who cannot or prefer not to use hormones. It\'s the first in a new class specifically targeting the mechanism of hot flashes. Efficacy approaches that of HT.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art menopause symptom management emphasizes patient-centered care, addresses the full symptom burden, and incorporates emerging evidence on novel therapeutics and combination approaches.',
      explanation: `**Novel Therapeutics:**

*Neurokinin Antagonists:*
- Target hypothalamic thermoregulatory neurons
- Fezolinetant: NK3R antagonist, approved 2023
- Elinzanetant: NK1R/NK3R antagonist in trials
- Pavinetant: NK3R in development
- Non-hormonal, mechanism-based

*Selective Estrogen Receptor Modulators:*
- Bazedoxifene (in Duavee - TSEC)
- Lasofoxifene in trials
- Tissue selectivity goal

*Other Pipeline:*
- GPER agonists (non-classical estrogen receptor)
- Estetrol (E4) - selective tissue activity
- Novel delivery systems

**Multimodal Approaches:**

*Combination Strategies:*
- HT + sleep hygiene
- Non-hormonal + CBT
- Local + systemic treatment
- Pharmacologic + lifestyle

*Integrated Care Model:*
- Menopause specialty clinic
- Mental health integration
- Sexual health services
- Physical therapy access
- Nutrition counseling

**Quality Metrics:**

*Patient-Centered Outcomes:*
- Symptom severity scores (Greene, MRS)
- Quality of life measures
- Sleep quality
- Sexual function
- Treatment satisfaction

*Process Measures:*
- Documented symptom assessment
- Treatment options discussed
- Follow-up arranged
- Contraindications reviewed

**Disparities:**

*Known Inequities:*
- Black women: More severe VMS, less treatment
- Lower SES: Access barriers
- Rural: Specialist unavailable
- Transgender: Unique needs underaddressed

*Addressing Gaps:*
- Telemedicine expansion
- Primary care training
- Cultural sensitivity
- Insurance advocacy

**Research Priorities:**

*Identified Needs:*
- Long-term safety data (non-hormonal)
- Comparative effectiveness
- Optimal combinations
- Symptom prediction models
- Diverse population studies
- Implementation science

**Patient Education:**

*Key Messages:*
- Symptoms are real and treatable
- Many options available
- Find what works for you
- Treatment can be adjusted
- Long-term health matters too

*Resources:*
- NAMS website
- Menopause societies
- Peer support groups
- Educational materials`,
      keyTerms: [
        { term: 'elinzanetant', definition: 'Investigational dual NK1/NK3 receptor antagonist for vasomotor symptoms' },
        { term: 'MRS', definition: 'Menopause Rating Scale; validated symptom assessment tool' },
        { term: 'GPER', definition: 'G protein-coupled estrogen receptor; novel target for selective estrogen effects' },
      ],
      clinicalNotes: 'The menopause symptom management landscape is rapidly evolving. Non-hormonal neurokinin antagonists represent a paradigm shift for women who cannot use hormones. Multimodal approaches addressing the full symptom burden improve quality of life more than single-symptom treatment.',
    },
  },

  media: [
    {
      id: 'vms-treatment-algorithm',
      type: 'diagram',
      filename: 'hot-flash-treatment-options.svg',
      title: 'VMS Treatment Algorithm',
      description: 'Decision tree for vasomotor symptom management',
    },
  ],

  citations: [
    {
      id: 'nams-nonhormonal',
      type: 'article',
      title: 'Nonhormonal Management of Menopause-Associated Vasomotor Symptoms',
      source: 'Menopause',
      authors: ['North American Menopause Society'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-menopause-overview', targetType: 'process', relationship: 'parent', label: 'Menopause Overview' },
    { targetId: 'obgyn-menopause-hormone-therapy', targetType: 'topic', relationship: 'related', label: 'Hormone Therapy' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['menopause', 'symptom management', 'treatment'],
    keywords: ['hot flashes', 'vaginal dryness', 'menopause treatment', 'VMS'],
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
