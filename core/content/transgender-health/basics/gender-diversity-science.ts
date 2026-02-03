import { EducationalContent } from '../../types';

export const genderDiversityScienceContent: EducationalContent = {
  id: 'topic-gender-diversity-science',
  type: 'topic',
  name: 'Science of Gender Diversity',
  alternateNames: ['Biology of Gender', 'Gender Development Research'],

  levels: {
    1: {
      level: 1,
      summary: 'Scientists have learned that gender is more than just boy or girl, and being transgender is a natural part of human diversity.',
      explanation: `Scientists study how our brains and bodies develop to understand gender better. Here's what they've learned:

**What Science Tells Us:**
- Being transgender is natural and has existed throughout history
- Gender is not just about body parts
- Our brains play a role in how we understand our gender
- You cannot change someone's gender identity

**Around the World and Through History:**
- Many cultures have recognized more than two genders
- Transgender people have existed in every society
- This is not something new or a modern invention

The most important thing science tells us is that transgender people deserve respect and support, just like everyone else.`,
      keyTerms: [
        { term: 'diversity', definition: 'The variety of different types of people' },
        { term: 'natural', definition: 'Something that occurs in nature without being forced' },
        { term: 'brain', definition: 'The organ in your head that controls thoughts and feelings' },
      ],
      analogies: [
        'Just like people naturally have different eye colors, people naturally have different gender identities.',
      ],
      examples: [
        'In many Native American cultures, two-spirit people have been respected members of their communities for centuries.',
      ],
    },
    2: {
      level: 2,
      summary: 'Scientific research shows that gender diversity is a natural variation in human development, with biological and cultural evidence supporting transgender identities.',
      explanation: `Modern science helps us understand that gender diversity is part of natural human variation.

**Biological Research:**
- Studies show differences in brain structure and function related to gender identity
- Genetics may play a role in gender development
- Hormones during pregnancy may influence gender identity
- The exact causes are complex and still being studied

**Historical and Cultural Evidence:**
Transgender and gender-diverse people appear across all cultures and throughout history:
- Two-Spirit people in many Native American nations
- Hijra in South Asia (recognized for thousands of years)
- Muxe in Mexico
- Fa'afafine in Samoa
- Many other examples worldwide

**What Major Organizations Say:**
- American Medical Association: Being transgender is not a disorder
- American Psychological Association: Gender diversity is natural
- World Health Organization: Removed transgender identity from mental disorders

**Key Understanding:**
Gender identity cannot be changed through therapy or willpower. Attempts to change gender identity (conversion therapy) are harmful and ineffective.`,
      keyTerms: [
        { term: 'biological variation', definition: 'Natural differences in how bodies and brains develop' },
        { term: 'cross-cultural', definition: 'Found in many different cultures around the world' },
        { term: 'conversion therapy', definition: 'Harmful attempts to change someone\'s gender identity or sexual orientation' },
        { term: 'two-spirit', definition: 'Gender identity in some Indigenous cultures that encompasses both masculine and feminine spirits' },
      ],
    },
    3: {
      level: 3,
      summary: 'Research into gender diversity encompasses neuroscience, genetics, endocrinology, and anthropology, supporting a biopsychosocial model of gender identity development.',
      explanation: `The scientific understanding of gender diversity draws from multiple disciplines, revealing complex interactions between biological and environmental factors.

**Neuroscientific Research:**

*Structural Studies:*
- Some studies report differences in specific brain regions (e.g., bed nucleus of stria terminalis)
- White matter connectivity patterns may differ
- Important limitations: small samples, hormonal effects, unclear causality

*Functional Studies:*
- fMRI research shows varied activation patterns
- Self-referential processing studies
- Research is ongoing with improving methodology

**Genetic Factors:**
- Twin studies suggest heritability component (estimates vary)
- Candidate gene studies (androgen receptor, CYP enzymes)
- No single gene identified; likely polygenic
- Epigenetic mechanisms being explored

**Endocrine Hypotheses:**
- Prenatal androgen exposure theory
- Studies of congenital adrenal hyperplasia inform understanding
- Critical periods of brain development
- Complex interaction with genetic factors

**Anthropological Evidence:**
Gender-diverse identities documented across cultures:
- Third genders recognized in many societies
- Historical records from ancient civilizations
- Varied social roles and statuses
- Demonstrates gender diversity is pan-human

**Implications:**
This research supports that gender diversity is a natural aspect of human biology, not a disorder or choice.`,
      keyTerms: [
        { term: 'bed nucleus of stria terminalis', definition: 'Brain region implicated in some studies of gender identity; sexually dimorphic structure', pronunciation: 'BSTc' },
        { term: 'sexually dimorphic', definition: 'Having different characteristics in males versus females' },
        { term: 'epigenetic', definition: 'Changes in gene expression without altering DNA sequence' },
        { term: 'polygenic', definition: 'Influenced by many genes' },
      ],
      clinicalNotes: 'Research supports gender diversity as natural variation, not pathology. This understanding should inform affirming clinical approaches.',
    },
    4: {
      level: 4,
      summary: 'Contemporary research on gender diversity utilizes neuroimaging, genomics, and developmental biology to investigate the biological substrates of gender identity, while acknowledging methodological limitations and the multifactorial nature of gender development.',
      explanation: `The scientific study of gender diversity has advanced significantly, though findings must be interpreted carefully given methodological constraints.

**Neuroimaging Research:**

*Structural MRI Findings:*
- Regions of interest: BSTc, INAH3, corpus callosum
- Zhou et al. (1995): BSTc size in transgender women similar to cisgender women
- Replication attempts have yielded mixed results
- Volumetric differences may be small and overlapping

*DTI (Diffusion Tensor Imaging):*
- White matter microstructure studies
- Some evidence for intermediate patterns
- Rametti et al. studies on trans men and women
- Methodological concerns about motion artifacts, sample size

*Functional MRI:*
- Self-perception and body ownership studies
- Responses to gendered stimuli
- Network connectivity analyses
- Highly variable methodologies limit comparison

**Genetic and Molecular Research:**

*Heritability Studies:*
- Twin concordance rates vary widely (20-50%)
- Familial clustering observed
- Shared environmental factors difficult to disentangle

*Candidate Genes:*
- AR (androgen receptor) repeat length polymorphisms
- CYP17, CYP19 (aromatase) variants
- ERalpha, ERbeta polymorphisms
- Results largely inconsistent across studies

*GWAS Approaches:*
- Limited large-scale studies completed
- No genome-wide significant loci replicated
- Power limitations given sample sizes

**Prenatal Hormone Theory:**

*Supporting Evidence:*
- CAH studies: elevated rates of gender dysphoria
- DES exposure studies
- Finger length ratio (2D:4D) research (inconsistent)

*Limitations:*
- Cannot directly measure prenatal hormone exposure
- Most individuals with hormone conditions are cisgender
- Necessary but not sufficient explanation

**Critical Appraisal:**
- Publication bias likely
- Cross-sectional designs predominate
- Hormone treatment effects confound many findings
- Essentialist interpretations may oversimplify`,
      keyTerms: [
        { term: 'BSTc', definition: 'Bed nucleus of stria terminalis, central subdivision; sexually dimorphic brain region studied in gender identity research' },
        { term: 'DTI', definition: 'Diffusion tensor imaging; MRI technique measuring white matter tract structure' },
        { term: 'CAH', definition: 'Congenital adrenal hyperplasia; condition causing elevated prenatal androgen exposure' },
        { term: '2D:4D ratio', definition: 'Ratio of second to fourth digit length; proposed marker of prenatal androgen exposure' },
      ],
      clinicalNotes: 'Biological research supports gender diversity but is not required to validate patient identities. Clinical care should not depend on proving biological etiology.',
    },
    5: {
      level: 5,
      summary: 'The science of gender diversity represents an evolving field integrating neuroscience, genetics, developmental biology, and social science, with clinical implications for affirming care that recognize both biological substrates and individual variability.',
      explanation: `Current scientific understanding of gender diversity requires integration across multiple levels of analysis while acknowledging significant knowledge gaps.

**State of Neurobiological Research:**

*Meta-Analytic Findings:*
- Mueller et al. (2021): Meta-analysis of structural studies
  - Small but consistent differences in some regions
  - High heterogeneity across studies
  - Publication bias detected
- Functional studies lack sufficient replication

*Methodological Considerations:*
- Most studies pre-date current best practices
- Hormone exposure (endogenous and exogenous) confounds
- Age of onset, sexual orientation as variables
- Need for longitudinal designs

*Emerging Approaches:*
- Machine learning classification studies
- Connectomics and network analysis
- Multi-modal imaging integration
- Larger consortium-based samples

**Genetic and Molecular Landscape:**

*Current Evidence:*
- No replicated genetic associations
- Polygenic architecture likely
- Rare variants potentially enriched (case reports)
- Need for diverse population studies

*Epigenetic Research:*
- X-chromosome inactivation patterns studied
- Methylation differences reported
- Transgenerational effects hypothesized
- Early-stage findings require validation

**Developmental Models:**

*Integrative Frameworks:*
- Biopsychosocial model widely accepted
- Brain organization/activation hypothesis
- Critical period sensitivity
- Gene-environment interactions

*Animal Models:*
- Limited applicability to human gender identity
- Sexual differentiation mechanisms informative
- Cannot model subjective identity

**Anthropological and Historical Context:**

*Cross-Cultural Evidence:*
- Gender diversity documented in majority of societies
- Varied cultural roles and meanings
- Historical continuity demonstrated
- Challenges Western binary model

**Clinical Implications:**

*Evidence-Based Practice:*
- Research supports biological basis without defining single cause
- Validates gender identity as intrinsic
- Informs public policy and legal protections
- Does not require biological proof for clinical care

*Avoiding Biological Determinism:*
- Individual variation within any group
- Social factors shape expression
- Biology does not determine optimal treatment
- Patient autonomy paramount

**Future Directions:**
- Large-scale longitudinal studies
- Integration of multiple data types
- Inclusion of non-binary identities
- Community-engaged research practices`,
      keyTerms: [
        { term: 'brain organization hypothesis', definition: 'Theory that prenatal hormones permanently organize brain structures related to gender' },
        { term: 'connectomics', definition: 'Study of brain connectivity patterns as networks' },
        { term: 'biological essentialism', definition: 'View that biology determines fixed categories; critiqued in gender research' },
        { term: 'gene-environment interaction', definition: 'Concept that genetic effects depend on environmental context and vice versa' },
      ],
      clinicalNotes: `**Clinical Guidance:**
- Research validates gender diversity but doesn't define individual treatment
- Biological uncertainty doesn't diminish validity of patient experience
- Avoid requiring biological "proof" for care access
- Stay current with evolving research literature
- All major medical organizations support gender-affirming care based on current evidence
- WPATH SOC 8 provides evidence-based clinical guidelines`,
    },
  },

  media: [],
  citations: [
    {
      id: 'mueller-2021',
      type: 'article',
      title: 'Brain structure and function in transgender individuals',
      authors: ['Mueller SC', 'et al.'],
      source: 'Lancet Diabetes Endocrinology',
      license: 'Copyright Elsevier',
    },
  ],
  crossReferences: [
    { targetId: 'topic-gender-identity-basics', targetType: 'topic', relationship: 'related', label: 'Gender Identity Basics' },
  ],
  tags: {
    systems: ['nervous', 'endocrine'],
    topics: ['neuroscience', 'genetics', 'gender identity', 'research'],
    keywords: ['brain', 'biology', 'research', 'gender diversity', 'science'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default genderDiversityScienceContent;
