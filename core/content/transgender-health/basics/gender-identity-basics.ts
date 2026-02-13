import { EducationalContent } from '../../types';

export const genderIdentityBasicsContent: EducationalContent = {
  id: 'topic-gender-identity-basics',
  type: 'topic',
  name: 'Gender Identity Basics',
  alternateNames: ['Understanding Gender Identity', 'Gender 101'],

  levels: {
    1: {
      level: 1,
      summary: 'Gender identity is your inner sense of who you are - whether you feel like a boy, girl, both, or neither.',
      explanation: `Everyone has a gender identity. It's the way you feel inside about being a boy, a girl, both, or neither. This feeling is very personal and comes from within you.

**Key Points:**
- Gender identity is how you feel inside
- It's different from your body parts
- Everyone's feelings about their gender are valid
- Some people feel their gender matches their body, and some don't

Most people feel like their gender matches what the doctor said when they were born. But some people feel different. This is completely natural and has always been part of human experience.`,
      keyTerms: [
        { term: 'gender identity', definition: 'Your inner feeling of being a boy, girl, both, or neither' },
        { term: 'transgender', definition: 'When someone feels their gender is different from what was expected at birth' },
        { term: 'cisgender', definition: 'When someone feels their gender matches what was expected at birth' },
      ],
      analogies: [
        'Gender identity is like knowing your favorite color - you just know it inside, even if others can\'t see it.',
      ],
      examples: [
        'A child might say "I feel like a girl inside" even if they were called a boy at birth.',
      ],
    },
    2: {
      level: 2,
      summary: 'Gender identity is a person\'s internal sense of their own gender, which may or may not correspond with their sex assigned at birth.',
      explanation: `Gender identity refers to a person's deeply felt, inherent sense of being male, female, a blend of both, or neither. This is distinct from biological sex and sexual orientation.

**Understanding Gender:**
- **Sex assigned at birth**: Based on physical characteristics (anatomy, chromosomes)
- **Gender identity**: Internal sense of one's gender
- **Gender expression**: How one presents gender externally (clothing, behavior)
- **Sexual orientation**: Who you are attracted to (separate from gender)

**Diversity in Gender:**
Transgender individuals have a gender identity that differs from their sex assigned at birth. Non-binary individuals may identify as neither exclusively male nor female. All gender identities are valid expressions of human diversity.

Research shows that gender identity typically develops in early childhood and is influenced by a complex interplay of biological and social factors.`,
      keyTerms: [
        { term: 'sex assigned at birth', definition: 'The designation of male or female given at birth, typically based on external anatomy' },
        { term: 'gender expression', definition: 'The external display of gender through clothing, behavior, and appearance' },
        { term: 'non-binary', definition: 'Gender identity that is neither exclusively male nor female' },
        { term: 'gender dysphoria', definition: 'Distress that can occur when gender identity differs from sex assigned at birth' },
      ],
      analogies: [
        'Sex is what the doctor writes on a birth certificate; gender identity is what you know in your heart.',
      ],
    },
    3: {
      level: 3,
      summary: 'Gender identity is a multidimensional construct encompassing biological, psychological, and social components, recognized as distinct from sex assigned at birth.',
      explanation: `Gender identity represents an individual's fundamental sense of their gender, existing on a spectrum that includes binary and non-binary identities. Major medical organizations recognize gender identity as an intrinsic aspect of human experience.

**Biological Factors:**
Research suggests potential contributions from:
- Prenatal hormone exposure
- Genetic factors
- Neuroanatomical differences
- The interaction between these elements is complex and not fully understood

**Developmental Aspects:**
- Gender identity typically emerges between ages 2-4
- Gender constancy (understanding that gender is stable) develops around age 5-7
- Many transgender individuals report awareness of their gender identity from early childhood

**Key Terminology:**
- **Transgender**: Umbrella term for people whose gender identity differs from sex assigned at birth
- **Cisgender**: People whose gender identity aligns with sex assigned at birth
- **Non-binary/Genderqueer**: Identities outside the male/female binary
- **Gender fluid**: Gender identity that varies over time

**Medical Recognition:**
The American Medical Association, American Psychiatric Association, and World Health Organization all recognize that being transgender is not a mental disorder. Gender dysphoria, when present, is a recognized condition that may benefit from treatment.`,
      keyTerms: [
        { term: 'gender spectrum', definition: 'The conceptualization of gender as existing along a continuum rather than as a binary' },
        { term: 'gender constancy', definition: 'The developmental understanding that gender is a stable characteristic' },
        { term: 'gender incongruence', definition: 'ICD-11 term for marked incongruence between experienced gender and assigned sex' },
        { term: 'assigned sex', definition: 'The sex designation given at birth, typically based on external genitalia' },
      ],
      clinicalNotes: 'Gender identity should be assessed through careful, affirming clinical interview. Do not assume gender identity based on appearance.',
    },
    4: {
      level: 4,
      summary: 'Gender identity develops through complex interactions of genetic, hormonal, neurological, and psychosocial factors, with neuroimaging and genetic studies providing insights into its biological underpinnings.',
      explanation: `Gender identity is understood as an emergent property of developmental processes involving multiple biological and environmental factors.

**Neurobiological Research:**

*Structural Studies:*
- Some studies report brain structure patterns in transgender individuals that differ from cisgender controls
- White matter microstructure may show intermediate patterns
- Important caveats: Small sample sizes, heterogeneous methodology, unclear causality

*Functional Studies:*
- fMRI studies suggest differences in neural responses
- Connectivity patterns may differ
- Research is ongoing and findings require replication

**Genetic Factors:**
- Twin studies suggest heritability component
- Candidate genes include androgen receptor variants, estrogen pathway genes
- No single "gender identity gene" has been identified
- Epigenetic factors likely play a role

**Hormonal Influences:**
- Prenatal androgen exposure hypothesis
- Studies of individuals with disorders of sex development inform understanding
- Timing of hormone exposure may be critical

**Developmental Psychology:**
- Gender identity typically crystallizes by age 6-7
- Transgender identity often emerges in childhood but may not be recognized until later
- Social factors influence expression but not core identity

**Clinical Implications:**
Understanding the biological basis helps combat stigma and supports the need for affirming care. Gender identity is not a choice or lifestyle, but an intrinsic aspect of personhood.`,
      keyTerms: [
        { term: 'sexual differentiation', definition: 'The process by which biological sex develops during fetal development' },
        { term: 'prenatal androgen exposure', definition: 'Exposure to androgens during fetal development, hypothesized to influence gender identity' },
        { term: 'brain sex differences', definition: 'Documented structural and functional differences between male and female brains on average' },
        { term: 'gender salience', definition: 'The degree to which gender is personally significant and central to identity' },
      ],
      clinicalNotes: 'While research into biological factors continues, clinical care should not require proof of biological etiology. Patient-reported gender identity is definitive.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of gender identity integrates neurobiological, genetic, endocrine, and developmental research within a biopsychosocial framework, with clinical guidelines emphasizing patient autonomy and evidence-based affirming care.',
      explanation: `Gender identity represents a complex phenotype with multifactorial etiology. Current research and clinical practice is informed by major guidelines including WPATH SOC 8 and Endocrine Society recommendations.

**Current Research Landscape:**

*Neuroimaging Findings:*
- Meta-analyses suggest differences in certain brain regions (BSTc, INAH3)
- White matter studies (DTI) show mixed results
- Methodological limitations: cross-sectional designs, hormone treatment effects, small samples
- No diagnostic imaging criteria exist or are recommended

*Genetic Studies:*
- GWAS studies underway
- Candidate gene studies (CYP17, CYP19, ESR1, AR) show inconsistent results
- Familial clustering observed but unclear inheritance pattern
- Epigenetic mechanisms increasingly implicated

*Endocrine Research:*
- Prenatal hormone hypothesis supported by CAH studies
- Timing of exposure may be critical (organizational vs. activational effects)
- Limited ability to measure prenatal hormone exposure directly

**Clinical Framework:**

*Assessment:*
- Comprehensive biopsychosocial evaluation
- Gender history across development
- Co-occurring mental health assessment
- Assessment of decisional capacity for interventions

*Gender-Affirming Care Principles:*
- Individualized approach
- Informed consent model widely adopted
- Multidisciplinary team when available
- Regular monitoring and follow-up

**Evidence Base:**
- Multiple systematic reviews support benefits of gender-affirming care
- Reduced depression, anxiety, suicidality with affirmation
- Quality of life improvements documented
- Long-term follow-up studies generally positive

**Ethical Considerations:**
- Autonomy and self-determination central
- Beneficence balanced with non-maleficence
- Access to care as health equity issue
- Special considerations for youth`,
      keyTerms: [
        { term: 'WPATH SOC 8', definition: 'World Professional Association for Transgender Health Standards of Care Version 8 (2022), evidence-based clinical guidelines' },
        { term: 'informed consent model', definition: 'Clinical model emphasizing patient autonomy and shared decision-making in accessing gender-affirming care' },
        { term: 'biopsychosocial model', definition: 'Framework integrating biological, psychological, and social factors in understanding health and illness' },
        { term: 'gender-affirming care', definition: 'Healthcare that is respectful of and sensitive to gender identity, including medical interventions to align physical characteristics with gender identity' },
      ],
      clinicalNotes: `**Key Clinical Guidelines:**
- WPATH SOC 8 (2022): Comprehensive standards for transgender healthcare
- Endocrine Society Guidelines (2017): Hormone therapy recommendations
- AAP Policy Statement: Affirming care for youth
- AMA, APA: Position statements supporting access to care

Assessment should be affirming while ensuring informed consent and appropriate mental health support.`,
    },
  },

  media: [],
  citations: [
    {
      id: 'wpath-soc8',
      type: 'article',
      title: 'Standards of Care Version 8',
      authors: ['World Professional Association for Transgender Health'],
      source: 'International Journal of Transgender Health',
      url: 'https://www.wpath.org/soc8',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    { targetId: 'topic-terminology-glossary', targetType: 'topic', relationship: 'related', label: 'Terminology and Glossary' },
    { targetId: 'topic-gender-diversity-science', targetType: 'topic', relationship: 'related', label: 'Science of Gender Diversity' },
  ],
  tags: {
    systems: ['endocrine', 'nervous'],
    topics: ['gender identity', 'transgender health', 'LGBTQ health'],
    keywords: ['gender', 'identity', 'transgender', 'non-binary', 'affirming care'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default genderIdentityBasicsContent;
