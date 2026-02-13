/**
 * Hirsutism - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const hirsutism: EducationalContent = {
  id: 'condition-hirsutism',
  type: 'condition',
  name: 'Hirsutism',
  alternateNames: ['Excess Hair Growth', 'Male-Pattern Hair Growth', 'Hypertrichosis (incorrect synonym)'],
  hpoId: 'HP:0001007',

  levels: {
    1: {
      level: 1,
      summary: 'Hirsutism is excess hair growth in women in areas where men typically grow hair, such as the face, chest, and back.',
      explanation: `Hirsutism is when women grow coarse, dark hair in areas typically seen in men. This is different from having fine, light hair all over the body.

**Common areas affected:**
- Upper lip and chin
- Chest and breasts
- Abdomen
- Back
- Inner thighs

**What causes it:**
- Higher than normal levels of male hormones (androgens)
- Family tendency
- Polycystic ovary syndrome (PCOS)
- Certain medications
- Less commonly, tumors or other conditions

**Who is affected:**
- Affects about 5-10% of women
- More common in certain ethnic groups (Mediterranean, Middle Eastern, South Asian)
- Often runs in families

**Impact:**
- Can cause distress and affect self-esteem
- May indicate underlying medical condition

**Treatment options:**
- Hair removal methods (shaving, waxing, laser)
- Medications to reduce hair growth
- Treating underlying cause
- Combination approaches work best`,
      keyTerms: [
        { term: 'hirsutism', definition: 'Male-pattern hair growth in women' },
        { term: 'androgens', definition: 'Male hormones that women also produce' },
        { term: 'PCOS', definition: 'Polycystic ovary syndrome; common cause of hirsutism' },
      ],
      analogies: [
        'Think of androgens like fertilizer for hair follicles. In hirsutism, certain hair follicles are getting too much fertilizer and growing like lawn grass instead of fine peach fuzz.',
      ],
      examples: [
        'A woman who notices dark hair growing on her chin and chest that requires regular shaving may have hirsutism.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hirsutism is terminal hair growth in women in androgen-dependent areas. Assessed by Ferriman-Gallwey score. Causes include PCOS, idiopathic, non-classical adrenal hyperplasia, and androgen-secreting tumors.',
      explanation: `## Definition and Assessment

**Hirsutism vs Hypertrichosis:**
- Hirsutism: Androgen-dependent areas (male-pattern)
- Hypertrichosis: Generalized excess hair (non-androgen dependent)

**Ferriman-Gallwey Score:**
- Rates 9 body areas (0-4 scale)
- Score >=4-8 (depending on ethnicity) indicates hirsutism
- Modified version for diverse populations

**Androgen-Dependent Areas:**
- Upper lip
- Chin
- Chest
- Abdomen
- Upper back
- Upper arms
- Thighs

## Pathophysiology

**Androgen Sources:**
- Ovaries: Testosterone, androstenedione
- Adrenals: DHEAS, androstenedione
- Periphery: Conversion in skin/hair follicles

**Mechanism:**
- Androgens stimulate hair follicle transformation
- Vellus (fine) -> Terminal (coarse) hair
- Requires sustained androgen exposure

## Etiology

**Common Causes:**
| Cause | Frequency | Features |
|-------|-----------|----------|
| PCOS | 70-80% | Irregular periods, acne, obesity |
| Idiopathic | 10-20% | Normal periods, normal androgens |
| NCCAH | 1-10% | Early onset, severe, Ashkenazi Jewish |
| Drug-induced | Variable | History of androgenic medications |

**Rare Causes:**
- Ovarian tumors (Sertoli-Leydig)
- Adrenal tumors
- Cushing syndrome
- Acromegaly
- HAIR-AN syndrome
- Pregnancy (transient)
- Menopause

## Evaluation

**History:**
- Age of onset
- Menstrual history
- Family history
- Medications
- Virilization symptoms

**Physical:**
- Ferriman-Gallwey score
- Acne, alopecia
- Acanthosis nigricans
- Virilization (clitoromegaly, deepening voice)

**Laboratory:**
- Total testosterone
- Free testosterone (if total borderline)
- DHEAS
- 17-OH progesterone (morning, follicular phase)
- TSH, prolactin
- LH, FSH

**Imaging:**
- Pelvic ultrasound (if PCOS suspected)
- Adrenal CT (if DHEAS markedly elevated)
- Ovarian imaging (if tumor suspected)`,
      keyTerms: [
        { term: 'Ferriman-Gallwey score', definition: 'Standardized scoring system for hirsutism' },
        { term: 'NCCAH', definition: 'Non-classical congenital adrenal hyperplasia' },
        { term: 'terminal hair', definition: 'Coarse, pigmented hair (vs vellus hair)' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hirsutism management combines mechanical hair removal with pharmacologic therapy including oral contraceptives and anti-androgens. Treatment requires 6-12 months for visible improvement and must continue long-term.',
      explanation: `## Mechanical/Physical Methods

**Temporary:**
- Shaving: Safe, does not increase growth
- Depilatory creams: Chemical dissolution
- Waxing/threading: Removes from root
- Bleaching: Lightens hair color

**Semi-Permanent:**
- Electrolysis: Destroys follicle individually
- Effective for all hair colors
- Time-intensive
- Permanent after multiple sessions

**Laser/Photoepilation:**
- Diode, alexandrite, Nd:YAG lasers
- Best for dark hair on light skin
- Multiple sessions required
- Long-term reduction (not always permanent)
- Maintenance treatments needed

## Pharmacologic Therapy

**Oral Contraceptives:**
- First-line for most women
- Reduce ovarian androgens
- Increase SHBG
- Combine with anti-androgen if needed
- Any estrogen-containing contraceptive effective

**Anti-androgens:**

*Spironolactone:*
- Most commonly used
- 50-200 mg daily
- Androgen receptor blocker, weak inhibitor of androgen synthesis
- Side effects: Menstrual irregularity, breast tenderness, fatigue
- Monitor potassium

*Finasteride:*
- 5-alpha reductase inhibitor
- 5 mg daily
- Blocks conversion of testosterone to DHT
- Category X (teratogenic)

*Flutamide:*
- Not first-line
- Hepatotoxicity risk
- Requires monitoring

**Other:**
- Metformin (if PCOS, insulin resistant)
- Topical eflornithine (inhibits ornithine decarboxylase)
- Glucocorticoids (if NCCAH)

## Treatment Strategy

**First-Line:**
- OCP alone (6 months)
- Mechanical methods as needed

**Second-Line:**
- OCP + spironolactone
- Monitor response at 6 months

**Third-Line:**
- OCP + finasteride
- Or triple therapy
- Consider specialist referral

**Duration:**
- Minimum 6 months for initial assessment
- Continue indefinitely (regrowth occurs if stopped)
- Regular follow-up for side effects

**Pregnancy:**
- Stop anti-androgens before conception
- Use reliable contraception while on therapy
- Category X medications require strict avoidance`,
      keyTerms: [
        { term: 'spironolactone', definition: 'Anti-androgen medication commonly used for hirsutism' },
        { term: 'finasteride', definition: '5-alpha reductase inhibitor; blocks DHT formation' },
        { term: 'eflornithine', definition: 'Topical cream that slows facial hair growth' },
      ],
      clinicalNotes: 'Combination therapy with oral contraceptives plus spironolactone is more effective than either alone for moderate to severe hirsutism.',
    },
    4: {
      level: 4,
      summary: 'Advanced hirsutism management addresses severe cases requiring combination therapies, idiopathic hirsutism approaches, ethnic variations in presentation, and the psychological impact requiring holistic care.',
      explanation: `## Severe Hirsutism

**When to Suspect Tumor:**
- Rapid onset/progression
- Virilization present
- Testosterone >200 ng/dL
- DHEAS >700 mcg/dL

**Workup for Severe Cases:**
- Detailed imaging
- Selective venous sampling
- Tumor markers if indicated
- Refer to endocrinology

**Intensive Treatment:**
- Triple therapy (OCP + spironolactone + finasteride)
- Regular electrolyte monitoring
- Liver function monitoring (if flutamide)
- GnRH agonists (severe cases, temporary)

## Idiopathic Hirsutism

**Definition:**
- Hirsutism with normal menses
- Normal androgen levels
- No underlying cause identified

**Mechanism:**
- Increased peripheral 5-alpha reductase activity
- Enhanced androgen receptor sensitivity
- Hair follicle hypersensitivity

**Management:**
- Same as other causes
- Often responds well to OCP
- May need lower anti-androgen doses
- Consider topical therapy first

## Ethnic Variations

**Ferriman-Gallwey Modifications:**
- Original designed for Northern European women
- Different thresholds for different ethnicities
- Mediterranean, Middle Eastern, South Asian: Higher baseline hair

**Cultural Considerations:**
- Different societal acceptance
- Impact on quality of life varies
- Treatment preferences differ

**Laser Considerations:**
- Less effective for light hair (blonde, gray, red)
- Fitzpatrick skin type affects laser choice
- Risk of dyspigmentation in darker skin
- Nd:YAG safest for skin types IV-VI

## Psychological Impact

**Quality of Life:**
- Often significantly impaired
- Depression and anxiety increased
- Social avoidance
- Sexual dysfunction

**Screening:**
- Assess psychological impact
- Screen for depression
- Evaluate coping mechanisms

**Support:**
- Counseling
- Support groups
- Patient education
- Address stigma

## Adolescent Considerations

**Diagnostic Challenges:**
- Androgens normally higher in adolescence
- Irregular periods common
- Family history important

**Treatment:**
- Start with OCP
- Add anti-androgen if needed
- Sensitive approach
- Address self-esteem
- Avoid overtreatment

## Special Populations

**Postmenopausal Women:**
- New-onset hirsutism requires workup
- May indicate tumor
- Ovarian or adrenal source
- Do not attribute to menopause alone

**Pregnancy:**
- Androgens rise normally
- Some increase in hair growth expected
- Reassurance usually sufficient
- Anti-androgens contraindicated`,
      keyTerms: [
        { term: 'idiopathic hirsutism', definition: 'Hirsutism with normal androgens and regular periods' },
        { term: 'virilization', definition: 'Development of male characteristics in women' },
        { term: '5-alpha reductase', definition: 'Enzyme converting testosterone to more potent DHT' },
      ],
      clinicalNotes: 'New-onset hirsutism or rapidly progressive hirsutism in postmenopausal women requires thorough evaluation for androgen-secreting tumors.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hirsutism research addresses novel topical treatments, laser technology advances, psychological intervention studies, and understanding ethnic and genetic variations in hair growth patterns and treatment response.',
      explanation: `## Emerging Pharmacologic Therapies

**Topical Anti-androgens:**
- Clascoterone (approved for acne, potential for hirsutism)
- Better safety profile than systemic
- Reduced systemic absorption

**New 5-Alpha Reductase Inhibitors:**
- Dutasteride (more potent than finasteride)
- Longer half-life
- Limited data for hirsutism

**Insulin Sensitizers:**
- SGLT2 inhibitors
- GLP-1 agonists
- Indirect benefit through weight/insulin

**Novel Androgen Receptor Blockers:**
- Enzalutamide (research)
- More selective agents in development

## Laser and Light Technology

**Advances:**
- Home devices (lower efficacy but convenient)
- Combination radiofrequency and laser
- Long-pulse Nd:YAG for darker skin
- Diode lasers with cooling

**Intense Pulsed Light (IPL):**
- Broad spectrum
- Less specific than laser
- Multiple devices available
- Variable results

**Selection Factors:**
- Skin type
- Hair color
- Area being treated
- Cost considerations
- Patient preference

## Genetics and Pharmacogenomics

**Androgen Receptor Variants:**
- CAG repeat length affects sensitivity
- Shorter repeats = more androgen effect
- May predict treatment response

**5-Alpha Reductase Polymorphisms:**
- Type 1 and 2 enzymes
- Genetic variants affect activity
- May explain ethnic variations

**Research Applications:**
- Personalized treatment selection
- Predicting response
- Understanding idiopathic cases

## Psychological Interventions

**Cognitive Behavioral Therapy:**
- Body image focused
- Reduces distress
- Improves quality of life

**Mindfulness:**
- Stress reduction
- Coping with chronic condition
- Complement to medical treatment

**Support Interventions:**
- Online communities
- Peer support
- Patient advocacy

## Quality of Life Research

**Outcome Measures:**
- Hirsutism-specific QoL instruments
- Patient-reported outcomes
- Beyond Ferriman-Gallwey

**Treatment Satisfaction:**
- Realistic expectations
- Combination approaches preferred
- Long-term adherence challenges

**Cost-Effectiveness:**
- Laser vs pharmacologic therapy
- Quality-adjusted life years
- Insurance coverage issues

## Future Directions

**Personalized Medicine:**
- Genetic testing for treatment selection
- Biomarkers of response
- Tailored combinations

**Technology:**
- Improved home devices
- Artificial intelligence in laser settings
- Telemedicine for monitoring

**Research Priorities:**
- Ethnic differences
- Long-term safety data
- Novel drug targets
- Psychological interventions
- Patient-centered outcomes`,
      keyTerms: [
        { term: 'clascoterone', definition: 'Topical androgen receptor antagonist' },
        { term: 'dutasteride', definition: 'Dual 5-alpha reductase inhibitor' },
        { term: 'CAG repeats', definition: 'Trinucleotide repeats in androgen receptor affecting sensitivity' },
      ],
      clinicalNotes: 'The future of hirsutism management lies in personalized approaches considering genetics, ethnicity, and patient preferences for optimal outcomes.',
    },
  },

  media: [],
  citations: [
    {
      id: 'hirsutism-guidelines-2018',
      type: 'article',
      title: 'Evaluation and Treatment of Hirsutism in Premenopausal Women',
      source: 'Endocrine Society Guidelines',
      authors: ['Martin KA', 'Anderson RR', 'Chang RJ', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
    { targetId: 'condition-infertility-endocrine', targetType: 'condition', relationship: 'related', label: 'Infertility' },
  ],
  tags: {
    systems: ['endocrine', 'integumentary'],
    topics: ['endocrinology', 'dermatology', 'gynecology'],
    keywords: ['hirsutism', 'androgen', 'hair growth', 'PCOS', 'hypertrichosis'],
    clinicalRelevance: 'medium',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'ob-gyn'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hirsutism;
