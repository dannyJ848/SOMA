import { EducationalContent } from '../../types';

export const careOverviewContent: EducationalContent = {
  id: 'topic-care-overview',
  type: 'topic',
  name: 'Gender-Affirming Care Overview',
  alternateNames: ['Transgender Healthcare', 'Gender Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Gender-affirming care helps transgender people feel more comfortable in their bodies and live as their true selves.',
      explanation: `Gender-affirming care is healthcare that helps transgender people. There are different types of care, and not everyone needs or wants all of them.

**Types of Care:**
- **Social changes**: Using a new name, pronouns, or clothing
- **Mental health support**: Talking to a counselor who understands
- **Medical care**: Sometimes medicines or treatments that help the body match gender identity

**Important Things to Know:**
- Everyone's journey is different
- No one has to do anything they don't want to
- Good healthcare providers listen and respect you
- This care has been shown to help people feel better

Getting this care is about helping people live happier, healthier lives.`,
      keyTerms: [
        { term: 'gender-affirming care', definition: 'Healthcare that helps transgender people feel comfortable with their bodies and selves' },
        { term: 'transition', definition: 'The steps someone takes to live as their true gender' },
        { term: 'support', definition: 'Help from doctors, counselors, family, and friends' },
      ],
      analogies: [
        'Gender-affirming care is like getting glasses - it helps you see and be seen as your true self.',
      ],
      examples: [
        'A transgender teen might start by using a new name at school, and later talk to a doctor about other options.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gender-affirming care encompasses social, psychological, and medical interventions that support transgender individuals in aligning their gender expression and body with their gender identity.',
      explanation: `Gender-affirming care is an umbrella term for healthcare that supports transgender people. It is individualized and may include various components.

**Components of Care:**

*Social Transition:*
- Name and pronoun changes
- Gender expression (clothing, hairstyle)
- Social role changes
- No medical intervention required

*Mental Health Support:*
- Individual therapy
- Family counseling
- Support groups
- Not required to "prove" transgender identity

*Medical Interventions:*
- Hormone therapy (when appropriate)
- Surgical options (for adults)
- Puberty blockers (for adolescents)
- Each is separate and optional

**Evidence for Care:**
Research consistently shows that gender-affirming care:
- Reduces depression and anxiety
- Decreases suicidal thoughts and attempts
- Improves quality of life
- Helps people function better at work/school

**Access to Care:**
- Covered by many insurance plans
- Recognized as medically necessary
- Best provided by knowledgeable, affirming providers`,
      keyTerms: [
        { term: 'social transition', definition: 'Non-medical steps to live as one\'s affirmed gender' },
        { term: 'hormone therapy', definition: 'Medications that change physical characteristics to align with gender identity' },
        { term: 'puberty blockers', definition: 'Medications that pause puberty to give time for decision-making' },
        { term: 'medically necessary', definition: 'Healthcare that is needed for health and well-being' },
      ],
    },
    3: {
      level: 3,
      summary: 'Gender-affirming care follows established clinical guidelines to provide comprehensive, individualized treatment including psychosocial support, hormone therapy, and surgical options based on patient needs.',
      explanation: `Gender-affirming care is evidence-based healthcare guided by professional standards including WPATH Standards of Care and Endocrine Society Guidelines.

**Framework for Care:**

*Assessment:*
- Comprehensive evaluation (not gatekeeping)
- Mental health assessment
- Medical history and exam
- Discussion of goals and options
- Informed consent process

*Treatment Modalities:*

1. **Psychosocial Support**
   - Individual therapy (not required but beneficial)
   - Family therapy especially for youth
   - Peer support and community connection
   - School/workplace advocacy

2. **Hormone Therapy**
   - Feminizing: Estrogen + anti-androgens
   - Masculinizing: Testosterone
   - Effects, timeline, and monitoring
   - Typically lifelong treatment

3. **Surgical Interventions**
   - Chest/top surgery
   - Genital/bottom surgery
   - Facial procedures
   - Other gender-affirming surgeries

4. **Other Interventions**
   - Voice therapy
   - Hair removal
   - Fertility preservation

**Clinical Guidelines:**
- WPATH SOC 8 (2022): Comprehensive standards
- Endocrine Society (2017): Hormone protocols
- AAP: Pediatric guidance
- Guidelines emphasize individualization

**Outcomes Research:**
Meta-analyses and systematic reviews consistently demonstrate positive outcomes with appropriate care.`,
      keyTerms: [
        { term: 'WPATH', definition: 'World Professional Association for Transgender Health; publishes Standards of Care', pronunciation: 'W-path' },
        { term: 'informed consent', definition: 'Process ensuring patients understand and agree to treatment' },
        { term: 'fertility preservation', definition: 'Options to save eggs or sperm before hormone therapy' },
        { term: 'SOC 8', definition: 'Standards of Care Version 8 (2022); current WPATH guidelines' },
      ],
      clinicalNotes: 'Care should be individualized. Not all patients need or want all interventions. Support patient autonomy in decision-making.',
    },
    4: {
      level: 4,
      summary: 'Gender-affirming care integrates psychosocial, endocrine, and surgical treatments within a multidisciplinary framework, guided by WPATH SOC 8 and Endocrine Society guidelines emphasizing informed consent and individualized care.',
      explanation: `Comprehensive gender-affirming care requires understanding clinical guidelines, treatment protocols, and the multidisciplinary care model.

**WPATH Standards of Care Version 8 (2022):**

*Key Updates from SOC 7:*
- Removed requirement for mental health diagnosis for adults
- Increased emphasis on informed consent
- Recognition of non-binary identities
- Updated criteria for adolescents
- New chapters (eunuchs, institutionalized populations)

*Core Principles:*
- Flexibility in pathways to care
- Competence of providers
- Cultural humility
- Harm reduction approach

**Clinical Pathways:**

*Adult Care:*
- Informed consent model widely adopted
- No mandatory mental health evaluation in many settings
- Hormone initiation at qualified clinics
- Referral for surgical consultation as desired

*Adolescent Care:*
- More thorough evaluation recommended
- Multidisciplinary team involvement
- Puberty suppression (Tanner 2+)
- Hormone therapy typically at 16+ (varies)
- Surgery recommendations vary

*Pediatric Care:*
- Supportive, exploratory approach
- Social transition as developmentally appropriate
- No medical intervention before puberty
- Family involvement crucial

**Medical Treatments:**

*Hormone Therapy:*
- Feminizing: Estradiol (oral, patch, injection) + spironolactone/bicalutamide
- Masculinizing: Testosterone (injection, gel, patch)
- Monitoring: Labs, cardiovascular risk, bone health
- Timeline of effects varies by individual

*Surgical Considerations:*
- Top surgery: Often first surgical step
- Genital surgery: Complex, requires experienced surgeons
- Pre-operative requirements vary
- Post-operative care and follow-up

**Outcomes Literature:**
- Multiple meta-analyses show improvement in mental health
- Regret rates consistently low (<1-3%)
- Quality of life improvements documented
- Cardiovascular and other medical risks manageable`,
      keyTerms: [
        { term: 'Tanner staging', definition: 'System for describing pubertal development stages', pronunciation: 'TAN-er' },
        { term: 'multidisciplinary team', definition: 'Team of specialists from different fields working together' },
        { term: 'harm reduction', definition: 'Approach minimizing negative consequences while supporting patient goals' },
        { term: 'regret rate', definition: 'Percentage of patients who later regret transition-related decisions' },
      ],
      clinicalNotes: 'WPATH SOC 8 represents current best practices. Stay current with updates. Local regulations may affect care delivery.',
    },
    5: {
      level: 5,
      summary: 'Gender-affirming care is delivered through evidence-based protocols guided by WPATH SOC 8, integrating medical, surgical, and psychosocial interventions with attention to special populations, informed consent, and long-term outcomes.',
      explanation: `Comprehensive gender-affirming care requires synthesis of current guidelines, clinical evidence, and attention to evolving best practices.

**Current Evidence Base:**

*Systematic Reviews:*
- Cornell systematic review: 93% positive outcomes
- Multiple Cochrane reviews in progress
- Quality of evidence improving
- Long-term outcome data accumulating

*Key Outcome Studies:*
- Amsterdam cohort: Long-term follow-up data
- UK GIDS studies
- US military healthcare data
- Swedish registry studies

**WPATH SOC 8 in Detail:**

*Assessment Recommendations:*
- Emphasis on collaborative assessment
- Move away from gatekeeping models
- Recognition of diverse presentations
- Cultural considerations

*Hormone Therapy:*
- Detailed protocols for feminizing/masculinizing therapy
- Monitoring recommendations
- Special considerations (VTE risk, etc.)
- Dose ranges and adjustments

*Surgical Standards:*
- Surgeon competence requirements
- Pre-operative criteria (flexible)
- Informed consent documentation
- Post-operative follow-up

**Special Populations:**

*Adolescents:*
- Comprehensive assessment recommended
- Puberty suppression at Tanner 2+
- Hormone therapy timing (typically 16+, flexible)
- Multidisciplinary involvement
- Reversibility discussions

*Non-Binary Individuals:*
- Individualized goals
- Partial interventions may be desired
- Hormone dosing flexibility
- Creative surgical approaches

*Older Adults:*
- Late transition considerations
- Cardiovascular risk assessment
- Hormone therapy benefits and risks
- Social support needs

**Controversies and Debates:**

*Youth Care:*
- Appropriate timing of interventions
- Assessment standards
- Long-term outcome data
- Balancing access with caution

*Informed Consent vs. Assessment Models:*
- Varying international approaches
- Balancing autonomy with appropriate evaluation
- Harm reduction perspective

**Implementation:**

*Healthcare System Considerations:*
- Training and competency development
- Insurance coverage advocacy
- Electronic health record optimization
- Quality metrics and outcomes tracking

*Future Directions:*
- More robust outcome studies
- Precision medicine approaches
- Integration with primary care
- Telemedicine expansion`,
      keyTerms: [
        { term: 'Cornell systematic review', definition: 'Comprehensive review of gender-affirming care outcomes showing predominantly positive results' },
        { term: 'Amsterdam cohort', definition: 'Long-running study of individuals who underwent gender transition' },
        { term: 'precision medicine', definition: 'Tailoring treatment to individual characteristics' },
        { term: 'GIDS', definition: 'Gender Identity Development Service; UK pediatric gender service' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- WPATH SOC 8 emphasizes flexibility and individualization
- Informed consent model appropriate for adults
- Adolescent care requires careful, supportive assessment
- Stay current with evolving guidelines and evidence
- Multidisciplinary care improves outcomes
- Document thoroughly, especially informed consent discussions
- Consider fertility preservation before hormone therapy`,
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
    { targetId: 'topic-informed-consent-model', targetType: 'topic', relationship: 'related', label: 'Informed Consent Model' },
    { targetId: 'topic-care-team', targetType: 'topic', relationship: 'related', label: 'Care Team' },
  ],
  tags: {
    topics: ['gender-affirming care', 'transgender health', 'clinical guidelines'],
    keywords: ['WPATH', 'SOC 8', 'transition', 'healthcare'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default careOverviewContent;
