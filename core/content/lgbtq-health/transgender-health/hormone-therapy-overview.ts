/**
 * Hormone Therapy Overview - Gender-Affirming Hormone Treatment
 *
 * Covers the principles, medications, effects, monitoring, and considerations
 * for feminizing and masculinizing hormone therapy in transgender individuals.
 */

import { EducationalContent } from '../../types';

export const hormoneTherapyOverview: EducationalContent = {
  id: 'lgbtq-hormone-therapy-overview',
  type: 'concept',
  name: 'Hormone Therapy Overview',
  alternateNames: ['Gender-Affirming Hormones', 'Transgender HRT', 'Cross-Sex Hormone Therapy'],

  levels: {
    1: {
      level: 1,
      summary: 'Hormone therapy uses medicine to help transgender people develop physical traits that match their gender identity.',
      explanation: `Hormones are natural chemicals in your body that control many things, including how your body looks. Hormone therapy gives transgender people hormones to help their body match who they are inside.

**What Are Hormones?**

- Hormones are like messengers in your body
- They tell your body how to grow and change
- Everyone has both estrogen and testosterone, but in different amounts

**Types of Hormone Therapy:**

1. **Feminizing Hormones** (for transgender women)
   - Uses estrogen (the main hormone in cisgender women)
   - Helps develop breasts and softer skin
   - Changes where body fat is stored

2. **Masculinizing Hormones** (for transgender men)
   - Uses testosterone (the main hormone in cisgender men)
   - Deepens voice and grows facial hair
   - Increases muscle mass

**What Changes to Expect:**

Changes happen slowly over months and years, similar to puberty.

*Feminizing Changes:*
- Breast growth
- Softer, smoother skin
- Less body hair
- Emotions may feel different

*Masculinizing Changes:*
- Deeper voice
- Facial hair growth
- More muscle
- Body fat moves to different places

**How Hormone Therapy Works:**

- You take medicine regularly (pills, patches, shots, or gel)
- You see a doctor regularly to make sure everything is going well
- Blood tests check that hormone levels are healthy

**Important Things to Know:**

- Changes take time - be patient
- Some changes are permanent, some are not
- You will need regular check-ups
- Not everyone experiences the same changes

**Is It Safe?**

- Hormone therapy is safe when supervised by a doctor
- Like any medicine, there are some risks
- Your doctor will monitor your health closely`,
      keyTerms: [
        { term: 'hormone', definition: 'A chemical messenger in your body that controls growth and development' },
        { term: 'estrogen', definition: 'A hormone that develops feminine physical traits' },
        { term: 'testosterone', definition: 'A hormone that develops masculine physical traits' },
        { term: 'hormone therapy', definition: 'Taking hormones as medicine to change how your body looks and feels' },
      ],
      analogies: [
        'Hormones are like instruction manuals - they tell your body how to develop',
        'Hormone therapy is like going through a second puberty - changes happen gradually over time',
      ],
      examples: [
        'Maria takes estrogen pills every day and has started to develop breasts over the past year',
        'Alex gets testosterone shots every two weeks and his voice has gotten deeper',
      ],
      patientCounselingPoints: [
        'Changes from hormone therapy happen slowly - be patient',
        'Keep all your doctor appointments for check-ups and blood tests',
        'Tell your doctor about any changes or concerns',
        'Take your medicine exactly as prescribed',
      ],
    },
    2: {
      level: 2,
      summary: 'Gender-affirming hormone therapy involves feminizing or masculinizing regimens that produce physical and emotional changes over time, requiring regular monitoring and informed consent.',
      explanation: `## How Hormone Therapy Works

Gender-affirming hormone therapy (GAHT) changes the body by altering hormone levels:
- Feminizing therapy adds estrogen and blocks testosterone
- Masculinizing therapy adds testosterone

## Feminizing Hormone Therapy

**Medications Used:**
- **Estrogen**: Main feminizing hormone (estradiol)
  - Pills, patches, injections, or gel
- **Anti-androgens**: Block testosterone effects
  - Spironolactone (most common in US)
  - Other options: Bicalutamide, cyproterone acetate

**Expected Changes:**

| Change | Onset | Maximum Effect |
|--------|-------|----------------|
| Breast development | 3-6 months | 2-3 years |
| Softer skin | 3-6 months | Unknown |
| Decreased muscle mass | 3-6 months | 1-2 years |
| Body fat redistribution | 3-6 months | 2-5 years |
| Decreased sex drive | 1-3 months | Variable |
| Decreased erections | 1-3 months | 3-6 months |
| Decreased testicular size | 3-6 months | 2-3 years |
| Decreased body hair | 6-12 months | 3+ years |

**Permanent Changes:**
- Breast growth
- Some fertility effects

**Reversible Changes:**
- Skin softening
- Muscle changes (if hormones stopped)

## Masculinizing Hormone Therapy

**Medications Used:**
- **Testosterone**: Main masculinizing hormone
  - Injections (most common), gel, patches

**Expected Changes:**

| Change | Onset | Maximum Effect |
|--------|-------|----------------|
| Voice deepening | 3-12 months | 1-2 years |
| Facial hair growth | 6-12 months | 4-5 years |
| Body hair increase | 3-6 months | 3-5 years |
| Increased muscle mass | 6-12 months | 2-5 years |
| Body fat redistribution | 3-6 months | 2-5 years |
| Clitoral growth | 3-6 months | 1-2 years |
| Menstruation stops | 2-6 months | - |
| Increased sex drive | Weeks to months | Variable |

**Permanent Changes:**
- Voice deepening
- Facial and body hair
- Clitoral growth
- Some fertility effects

**Reversible Changes:**
- Menstruation (may return if stopped)
- Muscle mass changes

## Monitoring and Safety

**Regular Monitoring:**
- Blood tests every 3 months initially, then every 6-12 months
- Check hormone levels
- Monitor liver function, blood counts, lipids

**Potential Risks:**

*Estrogen Risks:*
- Blood clots (higher with pills, lower with patches/injections)
- Weight changes
- Mood changes
- Elevated liver enzymes (rare)

*Testosterone Risks:*
- High red blood cell count (polycythemia)
- Acne
- Male pattern baldness
- Elevated cholesterol
- Potential liver effects

## Starting Hormone Therapy

**Informed Consent Process:**
- Understanding risks and benefits
- Reviewing expected and permanent changes
- Discussing fertility preservation options
- Consent documentation

**Not Required:**
- Mental health letter (in informed consent model)
- Specific duration of living as affirmed gender
- Mandatory waiting periods`,
      keyTerms: [
        { term: 'estradiol', definition: 'The primary form of estrogen used in feminizing hormone therapy' },
        { term: 'anti-androgen', definition: 'Medication that blocks the effects of testosterone' },
        { term: 'informed consent', definition: 'Process of understanding and agreeing to treatment after learning risks and benefits' },
        { term: 'polycythemia', definition: 'Elevated red blood cell count, a potential risk of testosterone therapy' },
        { term: 'GAHT', definition: 'Gender-Affirming Hormone Therapy' },
      ],
      patientCounselingPoints: [
        'Discuss fertility preservation before starting hormones if pregnancy might be desired later',
        'Understand which changes are permanent and which may reverse if hormones are stopped',
        'Keep all monitoring appointments for blood tests',
        'Report any concerning symptoms to your healthcare provider',
      ],
    },
    3: {
      level: 3,
      summary: 'Gender-affirming hormone therapy follows established protocols for feminizing and masculinizing treatment, with specific monitoring requirements, risk management, and considerations for special populations.',
      explanation: `## Clinical Protocols

**Feminizing Regimens:**

*Estrogen Options:*
- Oral estradiol: 2-6 mg/day
- Transdermal: 0.1-0.4 mg/day (patches)
- IM estradiol valerate: 5-20 mg every 2 weeks
- SQ estradiol cypionate: 2-5 mg weekly

*Anti-Androgen Options:*
- Spironolactone: 100-300 mg/day
- Bicalutamide: 50 mg/day
- Cyproterone acetate: 10-50 mg/day (not US)
- GnRH agonists: Complete suppression

*Progesterone:*
- Debated benefits for breast development
- May help with mood, sleep
- 100-200 mg at bedtime if used

**Masculinizing Regimens:**

*Testosterone Options:*
- IM testosterone cypionate: 50-100 mg weekly or 100-200 mg every 2 weeks
- SQ testosterone: Same dosing as IM
- Transdermal gel: 25-100 mg/day
- Transdermal patch: 2.5-7.5 mg/day

**Monitoring Protocol:**

*Baseline Labs:*
- CBC, CMP, lipid panel
- Estradiol, testosterone, LH, FSH
- Prolactin (if starting estrogen)
- A1C if diabetic

*Follow-up Labs:*
- Every 3 months in first year
- Every 6-12 months thereafter
- Adjust dosing based on levels and clinical response

**Target Ranges:**
- Feminizing: Estradiol 100-200 pg/mL, testosterone <50 ng/dL
- Masculinizing: Testosterone 300-1000 ng/dL (cisgender male range)

## Risk Management

**Venous Thromboembolism (Estrogen):**
- Risk factors: Age, smoking, obesity, immobility
- Route matters: Transdermal lowest risk
- Screening for clotting disorders in high-risk patients

**Polycythemia (Testosterone):**
- Monitor hematocrit regularly
- If Hct >54%, consider dose reduction, phlebotomy
- More common with IM injections

**Cardiovascular Considerations:**
- Limited data on long-term CV risk
- Standard CV risk factor management
- Smoking cessation especially important

**Mental Health:**
- Monitor mood, especially early in treatment
- Hormone therapy generally improves mental health
- Adjustment period may occur

## Special Populations

**Adolescents:**
- Puberty suppression with GnRH agonists
- Hormone therapy typically after age 16 (varies)
- Close monitoring required
- Parental involvement considerations

**Older Adults:**
- Lower starting doses
- Increased cardiovascular monitoring
- Consider comorbidities
- Similar benefits for gender affirmation

**Non-Binary Individuals:**
- Tailored regimens
- Partial masculinization or feminization
- Microdosing protocols
- Individualized goals

**Pre-Surgical Considerations:**
- Estrogen holds for some procedures (VTE risk)
- Generally continue testosterone
- Coordination with surgical team
- Resume post-operatively per surgeon guidance

## Fertility Considerations

**Pre-Treatment Counseling:**
- Discuss fertility before starting
- Sperm/egg banking options
- Cost and access considerations

**Effects on Fertility:**
- Estrogen: Decreased sperm production (often reversible)
- Testosterone: Ovulation suppression (often reversible)
- Long-term effects uncertain

**Pregnancy:**
- Testosterone must be stopped if pregnancy desired/occurs
- Pregnancy possible after testosterone in many cases
- Specialized prenatal care recommended`,
      keyTerms: [
        { term: 'GnRH agonist', definition: 'Medication suppressing pituitary hormone release, used for puberty suppression or testosterone suppression' },
        { term: 'transdermal', definition: 'Medication delivery through the skin via patch or gel' },
        { term: 'hematocrit', definition: 'Percentage of blood volume occupied by red blood cells; monitored on testosterone' },
        { term: 'microdosing', definition: 'Using lower hormone doses for partial or slower changes' },
        { term: 'VTE', definition: 'Venous thromboembolism; blood clots in veins, a risk with estrogen therapy' },
      ],
      clinicalNotes: 'Route of estrogen administration significantly impacts VTE risk - transdermal is preferred for patients with risk factors. Monitor hematocrit on testosterone and intervene if >54%. Fertility preservation counseling is essential before initiating therapy. Adjust monitoring based on individual risk factors.',
    },
    4: {
      level: 4,
      summary: 'Advanced hormone therapy management involves optimizing regimens for individual response, managing complex cases, understanding pharmacology and drug interactions, and addressing long-term outcomes.',
      explanation: `## Advanced Pharmacology

**Estrogen Pharmacology:**
- Oral estradiol: First-pass hepatic metabolism, higher SHBG/clotting factors
- Transdermal: Avoids first-pass, more physiologic
- Injectable: Peaks and troughs, may mimic natural cycling
- Sublingual: Rapid absorption, avoids first-pass

**Anti-Androgen Mechanisms:**
- Spironolactone: Aldosterone antagonist, androgen receptor blockade, inhibits steroidogenesis
- Bicalutamide: Pure androgen receptor antagonist
- Cyproterone: Progestin with anti-androgen effects, hepatotoxicity risk
- 5-alpha reductase inhibitors: Block DHT conversion, preserve some testosterone effects

**Testosterone Pharmacology:**
- Esters vary in half-life
- Cypionate/enanthate: Weekly to biweekly dosing
- Undecanoate: Long-acting, less frequent
- Conversion to estradiol and DHT

## Complex Case Management

**Inadequate Feminization:**
- Verify compliance and absorption
- Check testosterone suppression
- Consider anti-androgen adjustment
- Evaluate estrogen levels at various timepoints
- Individual variation in receptor sensitivity

**Inadequate Masculinization:**
- Verify compliance
- Check for elevated estrogen (aromatization)
- Consider dose optimization
- Evaluate timing of labs relative to injection

**Managing Side Effects:**

*Estrogen-Related:*
- Breast pain: Usually temporary, supportive care
- Mood changes: Monitor, consider dose adjustment
- Sexual dysfunction: Expected, discuss expectations
- Migraine: May worsen or improve

*Testosterone-Related:*
- Acne: Topical treatments, isotretinoin if severe
- Hair loss: Finasteride (discuss masculinization effects)
- Polycythemia: Dose reduction, phlebotomy, route change
- Elevated liver enzymes: Usually transient, monitor

## Drug Interactions

**Estrogen Interactions:**
- CYP3A4 inducers (decrease levels): Rifampin, phenytoin, carbamazepine
- CYP3A4 inhibitors (increase levels): Ketoconazole, clarithromycin
- Smoking: Induces metabolism, increases VTE risk

**Testosterone Interactions:**
- May affect insulin sensitivity
- Warfarin: Enhanced effect, monitor INR
- Corticosteroids: Additive fluid retention

**Spironolactone Interactions:**
- ACE inhibitors/ARBs: Hyperkalemia risk
- NSAIDs: Reduced effectiveness
- Digoxin: Increased levels

## Long-term Considerations

**Cardiovascular:**
- Limited long-term data
- Estrogen: Possible increased MI risk in older adults
- Testosterone: Lipid changes, uncertain clinical significance
- Standard risk factor modification essential

**Bone Health:**
- Pre-gonadectomy: Generally preserved with adequate hormones
- Post-gonadectomy: Continued hormone replacement essential
- DEXA screening considerations

**Cancer Risk:**
- Breast cancer: Likely similar to cisgender population with similar hormone exposure
- Prostate: Rare case reports in trans women; screening controversial
- Cervical/uterine: Screen based on organs present

**Metabolic:**
- Weight changes common
- Insulin sensitivity changes
- Lipid monitoring

## Post-Gonadectomy Management

**Trans Women (Post-Orchiectomy):**
- Anti-androgen no longer needed
- Estrogen dose may be reduced
- Monitor for symptoms of insufficiency

**Trans Men (Post-Oophorectomy/Hysterectomy):**
- Continue testosterone
- Lifelong replacement recommended
- Consider bone health

## Research and Evidence Gaps

**Areas of Limited Data:**
- Long-term cardiovascular outcomes
- Cancer incidence
- Optimal dosing protocols
- Non-binary specific outcomes

**Emerging Research:**
- Cardiovascular outcome studies
- Novel delivery systems
- Selective estrogen receptor modulators
- Optimal monitoring protocols`,
      keyTerms: [
        { term: 'SHBG', definition: 'Sex Hormone Binding Globulin; protein that binds sex hormones, increased by oral estrogen' },
        { term: 'DHT', definition: 'Dihydrotestosterone; potent androgen converted from testosterone, responsible for some masculinizing effects' },
        { term: 'aromatization', definition: 'Conversion of testosterone to estrogen; can limit masculinization' },
        { term: 'CYP3A4', definition: 'Cytochrome P450 enzyme involved in estrogen metabolism; inducers and inhibitors affect levels' },
        { term: 'first-pass metabolism', definition: 'Drug metabolism in liver before reaching systemic circulation; avoided by non-oral routes' },
      ],
      clinicalNotes: `Clinical pearls:
1. Estrogen levels drawn at trough (before next dose) for most accurate assessment
2. Testosterone levels drawn 2-4 days post-injection for cypionate/enanthate
3. Consider sublingual estradiol if hepatic effects concern
4. Bicalutamide gaining favor for lack of spironolactone side effects
5. Baseline and annual DEXA consideration for bone health monitoring
6. Document informed consent including fertility, permanent changes, and risks`,
    },
    5: {
      level: 5,
      summary: 'Expert-level hormone therapy management encompasses advanced endocrinology, research translation, quality improvement, training leadership, and systems-level optimization of gender-affirming care delivery.',
      explanation: `## Advanced Endocrine Considerations

**Complex Regimen Optimization:**
- Individualized dosing based on genetics/pharmacogenomics
- Combination approaches for non-binary goals
- Managing inadequate response
- Optimization for surgical preparation

**Estrogen Optimization:**
- Estrone:estradiol ratios (oral vs. parenteral)
- Role of progesterone (evidence and practice)
- Managing hyperprolactinemia
- Osteoporosis prevention strategies

**Testosterone Optimization:**
- Managing polycythemia while maintaining effect
- DHT role in masculinization
- Aromatase inhibitor use considerations
- Topical DHT for genital growth

**Special Endocrine Situations:**
- Thyroid disease interactions
- Adrenal insufficiency considerations
- PCOS in transmasculine individuals
- Prolactinoma management

## Research and Evidence Generation

**Clinical Trials Participation:**
- STRONG study and others
- Long-term outcome registries
- Novel agent investigation
- Comparative effectiveness

**Research Methodology:**
- Cohort study design
- Registry development
- PRO measure development
- Equity in research participation

**Evidence Gaps:**
- Cardiovascular long-term outcomes
- Cancer incidence
- Non-binary specific outcomes
- Adolescent long-term outcomes
- Optimal monitoring protocols

## Quality Improvement

**Metrics Development:**
- Process measures: Screening, monitoring adherence
- Outcome measures: Patient satisfaction, goal attainment
- Safety measures: Adverse events, complications
- Equity measures: Access, disparities

**Protocol Standardization:**
- Evidence-based protocols
- Order sets
- Clinical decision support
- Documentation templates

**Patient Experience:**
- Satisfaction measurement
- Shared decision-making
- Communication quality
- Access and continuity

## Systems-Level Considerations

**Workforce Development:**
- Primary care capacity building
- Specialist training
- Interdisciplinary collaboration
- Telehealth capabilities

**Access Optimization:**
- Geographic distribution
- Wait time management
- Telehealth applications
- Financial access

**Coverage and Reimbursement:**
- Insurance coverage advocacy
- Prior authorization processes
- Appeals expertise
- Financial assistance programs

## Training and Education

**Curriculum Development:**
- Competency-based education
- Simulation-based training
- Longitudinal exposure
- Assessment methods

**Faculty Development:**
- Train-the-trainer programs
- Continuing education
- Scholarly activity
- Clinical leadership

**Trainee Supervision:**
- Graduated responsibility
- Feedback and coaching
- Case-based learning
- Quality improvement participation

## Policy and Advocacy

**Coverage Policy:**
- Medical necessity criteria
- Utilization management
- Appeals processes
- Employer coverage

**Regulatory Landscape:**
- State law variations
- FDA drug approval/labeling
- Scope of practice
- Youth care legislation

**Professional Organizations:**
- Guideline development participation
- Position statement development
- Public education
- Coalition building

## Emerging Directions

**Novel Therapeutics:**
- Selective hormone receptor modulators
- Novel delivery systems
- Targeted therapies
- Fertility preservation advances

**Precision Medicine:**
- Pharmacogenomics
- Biomarker development
- Personalized protocols
- Response prediction

**Technology Integration:**
- Digital health tools
- Remote monitoring
- AI applications
- Patient-facing technology

## Program Development

**Comprehensive Program Elements:**
- Medical services
- Mental health integration
- Surgical referral pathways
- Support services

**Sustainability:**
- Financial models
- Staffing approaches
- Quality maintenance
- Growth planning

**Community Partnership:**
- Patient advisory
- Community organization engagement
- Peer support integration
- Cultural responsiveness`,
      keyTerms: [
        { term: 'pharmacogenomics', definition: 'Study of how genetics affect drug response; potentially applicable to hormone therapy optimization' },
        { term: 'STRONG study', definition: 'Study of Transition, Outcomes and Gender; major longitudinal study of transgender health outcomes' },
        { term: 'PRO', definition: 'Patient-Reported Outcome; measures of health status reported directly by patients' },
        { term: 'clinical decision support', definition: 'Health IT tools providing clinicians with knowledge and patient-specific information' },
        { term: 'SERM', definition: 'Selective Estrogen Receptor Modulator; drugs with tissue-specific estrogen effects' },
      ],
      clinicalNotes: `Leadership priorities:
1. Develop standardized protocols based on current evidence
2. Build quality metrics specific to gender-affirming care
3. Create training infrastructure for workforce development
4. Advocate for coverage improvements
5. Participate in research advancing the evidence base
6. Establish comprehensive care programs

Key resources:
- WPATH Global Education Initiative
- Endocrine Society CME
- UCSF Center of Excellence for Transgender Health
- Fenway Health National LGBTQIA+ Health Education Center
- TransLine provider consultation
- GLMA guidelines and resources`,
    },
  },

  media: [],

  citations: [
    {
      id: 'hembree-guidelines',
      type: 'article',
      title: 'Endocrine Treatment of Gender-Dysphoric/Gender-Incongruent Persons: An Endocrine Society Clinical Practice Guideline',
      authors: ['Hembree, W.C.', 'Cohen-Kettenis, P.T.', 'Gooren, L.', 'et al.'],
      source: 'Journal of Clinical Endocrinology & Metabolism',
    },
    {
      id: 'wpath-soc8',
      type: 'article',
      title: 'Standards of Care for the Health of Transgender and Gender Diverse People, Version 8',
      authors: ['Coleman, E.', 'et al.'],
      source: 'International Journal of Transgender Health',
    },
    {
      id: 'ucsf-protocols',
      type: 'website',
      title: 'Transgender Care Guidelines: Hormone Therapy Protocols',
      source: 'UCSF Center of Excellence for Transgender Health',
      url: 'https://transcare.ucsf.edu/guidelines/hormones',
    },
  ],

  crossReferences: [
    { targetId: 'lgbtq-gender-affirming-care', targetType: 'concept', relationship: 'parent', label: 'Gender-Affirming Care' },
    { targetId: 'lgbtq-mental-health-lgbtq', targetType: 'concept', relationship: 'sibling', label: 'LGBTQ Mental Health' },
    { targetId: 'endocrinology-hormone-replacement', targetType: 'concept', relationship: 'related', label: 'Hormone Replacement Therapy' },
  ],

  tags: {
    systems: ['lgbtq-health'],
    topics: ['hormone therapy', 'transgender health', 'endocrinology', 'gender-affirming care'],
    keywords: ['estrogen', 'testosterone', 'hormone therapy', 'transgender', 'HRT', 'feminizing', 'masculinizing'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default hormoneTherapyOverview;
