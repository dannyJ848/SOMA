import { EducationalContent } from '../../types';

export const terminologyGlossaryContent: EducationalContent = {
  id: 'topic-terminology-glossary',
  type: 'topic',
  name: 'Transgender Health Terminology',
  alternateNames: ['Gender Terminology Glossary', 'LGBTQ+ Terms'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning the right words to use when talking about gender helps everyone feel respected and understood.',
      explanation: `Using the right words matters because it shows respect. Here are some important words to know:

**Common Terms:**
- **Transgender (trans)**: Someone whose gender is different from what was expected at birth
- **Cisgender (cis)**: Someone whose gender matches what was expected at birth
- **Non-binary**: Someone who doesn't feel completely like a boy or a girl
- **Pronouns**: Words like he/him, she/her, or they/them that people use

**Being Respectful:**
- Use the name someone asks you to use
- Use the pronouns someone tells you
- If you make a mistake, say sorry and try again
- It's okay to ask politely what words someone prefers`,
      keyTerms: [
        { term: 'pronouns', definition: 'Words we use instead of someone\'s name, like he, she, or they' },
        { term: 'respect', definition: 'Treating others the way they want to be treated' },
        { term: 'identity', definition: 'Who you know yourself to be' },
      ],
      analogies: [
        'Using someone\'s correct name and pronouns is like calling a friend by their nickname instead of a name they don\'t like.',
      ],
      examples: [
        'If Alex uses they/them pronouns, you would say "They are my friend" instead of "He is my friend."',
      ],
    },
    2: {
      level: 2,
      summary: 'Understanding transgender-related terminology promotes respectful communication and helps create inclusive healthcare environments.',
      explanation: `Accurate terminology is essential for respectful communication. Language around gender continues to evolve.

**Identity Terms:**
- **Transgender**: Umbrella term for those whose gender differs from assigned sex
- **Cisgender**: Those whose gender aligns with assigned sex
- **Non-binary**: Identities outside the male/female binary
- **Genderqueer**: Similar to non-binary; gender outside conventional categories
- **Gender fluid**: Gender identity that changes over time
- **Agender**: Having no gender identity
- **Two-Spirit**: Term used by some Indigenous peoples for gender-diverse individuals

**Transition-Related Terms:**
- **Social transition**: Changing name, pronouns, appearance, without medical intervention
- **Medical transition**: Hormones and/or surgery to align body with gender
- **Gender affirmation**: Actions that support one's gender identity

**Terms to Avoid:**
- "Preferred pronouns" (just say "pronouns")
- "Born a man/woman" (say "assigned male/female at birth")
- "Sex change" (say "gender-affirming surgery")
- "Transgendered" (say "transgender" - no -ed)`,
      keyTerms: [
        { term: 'AFAB/AMAB', definition: 'Assigned female/male at birth', pronunciation: 'A-fab, A-mab' },
        { term: 'deadname', definition: 'A name someone no longer uses, often their birth name' },
        { term: 'misgender', definition: 'Using incorrect pronouns or gendered language for someone' },
        { term: 'passing', definition: 'Being perceived as one\'s affirmed gender by others' },
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical terminology for transgender health has evolved to reflect current understanding of gender as distinct from sex, with emphasis on affirming language in healthcare settings.',
      explanation: `Healthcare terminology must balance clinical precision with respect for patient identity and dignity.

**Clinical and Diagnostic Terms:**

*Current Terminology (DSM-5-TR, ICD-11):*
- **Gender dysphoria** (DSM-5-TR): Distress from incongruence between experienced and assigned gender
- **Gender incongruence** (ICD-11): Marked incongruence between experienced and assigned gender

*Historical/Deprecated Terms:*
- "Gender identity disorder" - removed from DSM-5
- "Transsexualism" - largely deprecated in clinical use
- "Transvestism" - refers to cross-dressing, not gender identity

**Anatomical Language:**
Using inclusive anatomical terms helps provide affirming care:
- "Chest" may be preferred to "breasts" for transmasculine patients
- Refer to organs by function when possible
- Ask patients about their preferred terminology

**Pronoun Usage:**
- Document patient pronouns in medical records
- Use consistently across care settings
- Correct colleagues respectfully when errors occur

**Population Terms:**
- TGNC: Transgender and gender non-conforming
- TGNB: Transgender and non-binary
- Gender-diverse: Broad inclusive term`,
      keyTerms: [
        { term: 'gender dysphoria', definition: 'DSM-5-TR diagnosis of clinically significant distress from gender incongruence', pronunciation: 'dis-FOR-ee-ah' },
        { term: 'gender incongruence', definition: 'ICD-11 classification for marked incongruence between experienced and assigned gender' },
        { term: 'TGNC', definition: 'Transgender and gender non-conforming; broad inclusive term' },
        { term: 'affirming language', definition: 'Language that validates and supports a person\'s gender identity' },
      ],
      clinicalNotes: 'Always ask patients what terms they prefer for themselves and their bodies. Document this in the chart.',
    },
    4: {
      level: 4,
      summary: 'Clinical terminology for gender diversity has evolved through diagnostic criteria revisions, reflecting shifts from pathologizing frameworks toward affirming care models while maintaining clinical utility.',
      explanation: `The evolution of terminology reflects changing clinical understanding and advocacy for depathologization.

**Diagnostic Evolution:**

*DSM Progression:*
- DSM-III (1980): "Gender Identity Disorder" - highly pathologizing
- DSM-IV (1994): Retained GID, criteria refined
- DSM-5 (2013): "Gender Dysphoria" - focus on distress, not identity
- DSM-5-TR (2022): Maintained gender dysphoria, updated text

*ICD Changes:*
- ICD-10: "Transsexualism" under mental disorders
- ICD-11 (2022): "Gender Incongruence" moved to sexual health chapter
- Significance: Removal from mental disorders reduces stigma

**Clinical Documentation:**

*EHR Considerations:*
- Sexual Orientation and Gender Identity (SOGI) data collection
- Two-step gender documentation (current gender + assigned sex)
- Name and pronoun fields
- Legal vs. affirmed name in records

*Insurance and Coding:*
- Diagnosis codes may be required for coverage
- ICD-10-CM codes: F64.0-F64.9 for gender dysphoria
- Balancing access to care with avoiding over-pathologization

**Research Terminology:**

*Population Definitions:*
- Binary transgender: Trans men and trans women
- Non-binary: All identities outside the binary
- Gender expansive: Alternative to "gender diverse"
- Variability in definitions creates research challenges

*Measurement:*
- Two-step method (assigned sex + current identity) is gold standard
- Single-item measures miss non-binary identities
- Avoid conflating gender identity with sexual orientation`,
      keyTerms: [
        { term: 'depathologization', definition: 'The movement to remove transgender identity from classifications of mental disorders' },
        { term: 'two-step gender question', definition: 'Method of assessing gender by asking both current identity and sex assigned at birth' },
        { term: 'SOGI data', definition: 'Sexual Orientation and Gender Identity data in health records' },
        { term: 'ICD-11', definition: 'International Classification of Diseases 11th revision, effective 2022' },
      ],
      clinicalNotes: 'The shift from GID to gender dysphoria to gender incongruence represents progress toward affirming care. Use current terminology in documentation.',
    },
    5: {
      level: 5,
      summary: 'Contemporary clinical terminology balances diagnostic utility for accessing care with depathologization efforts, requiring nuanced understanding of historical context, current standards, and ongoing debates in transgender healthcare.',
      explanation: `Terminology in transgender health reflects broader tensions between medicalization necessary for care access and advocacy for depathologization.

**Historical Context and Evolution:**

*Medicalization History:*
- 1950s-60s: Early gender clinics, highly gatekept access
- 1966: Harry Benjamin's "The Transsexual Phenomenon"
- 1980: DSM-III "Gender Identity Disorder"
- 2013: DSM-5 shift to "Gender Dysphoria"
- 2022: ICD-11 "Gender Incongruence" in sexual health

*Critique of Diagnostic Categories:*
- Medicalization required for insurance coverage
- Diagnosis can be stigmatizing
- Power dynamics in gatekeeping
- Informed consent model as alternative framework

**Current Professional Standards:**

*WPATH SOC 8 (2022):*
- Uses "transgender and gender diverse" as umbrella term
- Emphasizes individualized assessment
- Supports informed consent for adults
- Flexibility in requirement for dysphoria diagnosis

*Endocrine Society (2017):*
- "Gender-dysphoric/gender-incongruent" terminology
- Focuses on clinical presentation
- Due for update with new evidence

**Clinical Practice:**

*Documentation Best Practices:*
- Record affirmed name and pronouns prominently
- Use two-step gender documentation
- Note preferred anatomical terminology
- Update records when patient requests

*Communication:*
- Model correct pronoun usage
- Correct errors promptly without over-apologizing
- Educate staff on affirming language
- Create inclusive intake forms

**Emerging Terminology:**

*Evolving Terms:*
- "Gender expansive" gaining use
- "Transmasculine/transfeminine" for spectrum
- "Xenogender" in some communities
- Regional and cultural variations exist

*Research Implications:*
- Definitional inconsistency complicates meta-analyses
- Need for standardized measures
- Balance between specificity and inclusivity`,
      keyTerms: [
        { term: 'gatekeeping', definition: 'Clinical practice of requiring certain criteria before approving transition-related care' },
        { term: 'informed consent model', definition: 'Care model emphasizing patient autonomy in decisions about gender-affirming care' },
        { term: 'transmasculine/transfeminine', definition: 'Broad terms for those on masculine or feminine side of gender spectrum relative to assigned sex' },
        { term: 'medicalization', definition: 'The process by which human conditions become defined as medical issues' },
      ],
      clinicalNotes: `**Key Points for Practice:**
- Language evolves; stay current with guidelines
- Ask patients for their terminology preferences
- Document SOGI data consistently
- Use affirming language in all interactions
- Balance diagnostic requirements with depathologizing approach
- ICD-11 gender incongruence codes (HA60-HA6Z) are now in sexual health chapter`,
    },
  },

  media: [],
  citations: [
    {
      id: 'glaad-reference',
      type: 'website',
      title: 'GLAAD Media Reference Guide',
      source: 'GLAAD',
      url: 'https://glaad.org/reference/',
      license: 'Public resource',
    },
  ],
  crossReferences: [
    { targetId: 'topic-gender-identity-basics', targetType: 'topic', relationship: 'related', label: 'Gender Identity Basics' },
  ],
  tags: {
    topics: ['terminology', 'communication', 'LGBTQ health', 'transgender health'],
    keywords: ['pronouns', 'terminology', 'language', 'affirming care'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default terminologyGlossaryContent;
