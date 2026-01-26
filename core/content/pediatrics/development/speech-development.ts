/**
 * Speech and Language Development
 *
 * Comprehensive guide to speech and language milestones, typical
 * acquisition patterns, red flags, and early intervention approaches.
 */

import { EducationalContent } from '../../types';

export const SPEECH_DEVELOPMENT: EducationalContent = {
  id: 'concept-speech-development',
  type: 'concept',
  name: 'Speech and Language Development',
  alternateNames: ['Language milestones', 'Communication development', 'Speech acquisition'],

  levels: {
    1: {
      level: 1,
      summary: 'Children learn to talk in stages, starting with coos and babbles as babies, then first words around age 1, and sentences by age 2-3. Every child learns at their own pace.',
      explanation: `Learning to talk is one of the most amazing things children do!

**How Babies Start Communicating:**

**Birth to 3 Months:**
- Cries to communicate needs
- Coos (makes "ooh" and "aah" sounds)
- Smiles when you talk to them
- Startles at loud sounds
- Quiets down when hearing your voice

**4 to 6 Months:**
- Laughs and squeals
- Makes different sounds for different feelings
- Babbles with sounds like "ba" and "ga"
- Looks toward sounds
- Responds to their name

**7 to 12 Months:**
- Babbles chains of sounds ("bababa")
- Copies sounds you make
- Understands "no" and "bye-bye"
- Says first words like "mama" or "dada"
- Points to things they want
- Waves and claps

**First Words (12-18 Months):**
- Knows 1-20 words
- Understands much more than they can say
- Points to show you things
- Follows simple directions like "get your shoes"
- Tries to copy words you say

**Word Explosion (18-24 Months):**
- Vocabulary grows rapidly
- Puts two words together ("more milk," "daddy go")
- Asks questions by raising voice ("doggy?")
- Follows two-step directions

**Talking in Sentences (2-3 Years):**
- Uses 2-4 word sentences
- Strangers can understand about half of what they say
- Asks lots of questions
- Knows colors and shapes
- Can tell you about their day

**Becoming a Talker (3-5 Years):**
- Speaks in full sentences
- Tells stories
- Most speech is understandable
- Uses grammar mostly correctly
- Asks "why" constantly!

**Ways to Help Your Child Talk:**
- Talk to your baby from day one
- Read books together every day
- Sing songs and nursery rhymes
- Name things you see
- Wait for them to respond
- Limit screen time

**When to Talk to Your Doctor:**
- No babbling by 12 months
- No words by 16 months
- Doesn't point or wave by 12 months
- Loses words they used to say
- You're worried about their hearing`,
      keyTerms: [
        { term: 'babbling', definition: 'Making repeated sounds like "bababa" - it is practice for talking' },
        { term: 'vocabulary', definition: 'All the words a child knows and uses' },
        { term: 'language', definition: 'Using words and sentences to communicate thoughts and ideas' },
      ],
      analogies: [
        'Learning to talk is like learning to walk - babies need practice, they fall down sometimes, and everyone learns at a slightly different pace.',
        'First words are like seeds - with talking and reading, they grow into a garden of language.',
      ],
      examples: [
        'A 15-month-old might say "ba" for ball and "mo" for more - this counts as using words!',
        'A 2-year-old saying "want cookie" is combining words to make a sentence.',
      ],
    },
    2: {
      level: 2,
      summary: 'Speech and language develop through predictable stages involving receptive language (understanding), expressive language (speaking), and speech sound production. Early identification of delays allows for effective intervention.',
      explanation: `**Components of Language:**

1. **Receptive Language** - Understanding what is heard
2. **Expressive Language** - Producing words and sentences
3. **Speech** - Physical production of sounds
4. **Pragmatics** - Social use of language

**Detailed Milestones:**

**Prelinguistic Stage (0-12 months):**

| Age | Receptive | Expressive |
|-----|-----------|------------|
| 0-3 mo | Startles to sound, calms to voice | Crying, cooing |
| 4-6 mo | Turns to sounds, recognizes name | Babbles (consonant-vowel) |
| 7-9 mo | Responds to "no," understands routine words | Reduplicated babbling (mamama) |
| 10-12 mo | Follows simple commands with gesture | Variegated babbling, jargon, first words |

**Early Words (12-24 months):**

| Age | Receptive | Expressive |
|-----|-----------|------------|
| 12 mo | Points to familiar objects | 1-3 words |
| 15 mo | Follows 1-step commands | 4-6 words |
| 18 mo | Points to body parts | 10-50 words |
| 21 mo | Follows 2-step commands | Combines 2 words |
| 24 mo | Understands 300+ words | 50-200+ words, 2-word phrases |

**Language Explosion (2-3 years):**

| Age | Receptive | Expressive |
|-----|-----------|------------|
| 2 yr | Follows 2-step unrelated commands | 2-3 word sentences |
| 2.5 yr | Understands size concepts | 3+ word sentences, pronouns |
| 3 yr | Understands "who, what, where" | 4+ word sentences, tells stories |

**Preschool (3-5 years):**

| Age | Skills |
|-----|--------|
| 3 yr | Uses plurals, past tense, counts to 3, answers questions |
| 4 yr | Tells longer stories, asks questions, knows colors |
| 5 yr | Uses complex sentences, defines words, follows 3-step commands |

**Speech Sound Development:**

| Age | Expected Sounds |
|-----|-----------------|
| 2 yr | p, b, m, h, w |
| 3 yr | k, g, d, t, n, ng |
| 4 yr | f, y |
| 5 yr | v, l, bl, ch, j, sh |
| 6 yr | r, th, s, z |

**Intelligibility Guidelines:**
- 2 years: 50% intelligible to strangers
- 3 years: 75% intelligible to strangers
- 4 years: Nearly 100% intelligible

**Red Flags by Age:**

| Age | Warning Signs |
|-----|---------------|
| 6 mo | No response to sounds, no cooing/babbling |
| 12 mo | No babbling, no gestures (pointing, waving) |
| 16 mo | No words |
| 18 mo | Fewer than 6 words, not following simple commands |
| 24 mo | Fewer than 50 words, no 2-word combinations |
| 3 yr | Strangers can't understand, no sentences |
| Any age | Loss of previously acquired skills |

**Risk Factors for Language Delay:**
- Family history of speech/language problems
- Prematurity
- Hearing loss
- Chronic ear infections
- Limited language exposure
- Autism spectrum disorder
- Developmental disabilities

**Supporting Language Development:**
- Responsive communication (follow child's lead)
- Reading aloud daily
- Narrating activities
- Expanding child's utterances
- Limiting screen time (especially under 2)
- Addressing hearing concerns promptly`,
      keyTerms: [
        { term: 'receptive language', definition: 'Ability to understand spoken language' },
        { term: 'expressive language', definition: 'Ability to produce and use spoken language' },
        { term: 'jargon', definition: 'Speech-like babbling with sentence intonation but no real words' },
        { term: 'intelligibility', definition: 'How understandable a child\'s speech is to listeners' },
        { term: 'pragmatics', definition: 'Social rules of language use, like taking turns in conversation' },
      ],
      analogies: [
        'Receptive language is like filling a cup - children understand far more than they can say, building up before the words overflow.',
      ],
    },
    3: {
      level: 3,
      summary: 'Language acquisition involves complex neurological processes, progresses through established stages, and can be affected by various organic and environmental factors. Standardized assessment guides identification and intervention.',
      explanation: `**Neurobiology of Language:**

*Critical Periods:*
- Phonetic discrimination: Birth to 10 months (narrows to native phonemes)
- Grammar acquisition: 0-7 years (optimal)
- Syntax: Sensitive period through puberty

*Neural Substrates:*
| Structure | Function |
|-----------|----------|
| Broca's area (left IFG) | Speech production, grammar |
| Wernicke's area (left STG) | Comprehension |
| Arcuate fasciculus | Connects Broca's and Wernicke's |
| Angular gyrus | Reading, semantic processing |

**Theories of Language Acquisition:**

| Theory | Key Concepts |
|--------|--------------|
| Nativist (Chomsky) | Innate universal grammar, LAD |
| Social interactionist | Language through social interaction |
| Usage-based | Statistical learning from input |
| Connectionist | Neural network pattern recognition |

**Assessment Approach:**

**Screening Tools:**
| Tool | Age | Administration |
|------|-----|----------------|
| MCDI (MacArthur-Bates) | 8-30 mo | Parent report |
| LENA | 2-48 mo | Automated analysis |
| CSBS | 6-24 mo | Clinician + parent |
| REEL-4 | 0-36 mo | Clinician administered |

**Diagnostic Evaluation:**
| Test | Age | Measures |
|------|-----|----------|
| Preschool Language Scales-5 | 0-7:11 | Auditory comprehension, expressive |
| CELF-5 | 5-21 | Core language, language memory |
| PPVT-5 | 2:6-90 | Receptive vocabulary |
| EVT-3 | 2:6-90 | Expressive vocabulary |
| Goldman-Fristoe-3 | 2-21 | Articulation |
| GFTA-3 | 2-21 | Phonological processes |

**Differential Diagnosis:**

*Language Delay vs. Disorder:*
| Feature | Delay | Disorder |
|---------|-------|----------|
| Pattern | Follows normal sequence, slower | Deviant patterns |
| Prognosis | Often catches up | Persistent difficulties |
| Intervention | Monitoring, enrichment | Direct therapy |

*Types of Language Disorders:*
| Type | Characteristics |
|------|-----------------|
| Expressive only | Comprehension intact, output limited |
| Mixed receptive-expressive | Both domains affected |
| Speech sound disorder | Articulation/phonological errors |
| Childhood apraxia of speech | Motor planning deficit |
| Social communication disorder | Pragmatic deficits, not ASD |

**Speech Sound Disorders:**

*Articulation vs. Phonological:*
| Feature | Articulation | Phonological |
|---------|--------------|--------------|
| Deficit | Motor production | Sound system organization |
| Errors | Distortions | Patterns (e.g., fronting) |
| Impact | Individual sounds | Classes of sounds |
| Treatment | Motor drill | Pattern-based |

*Common Phonological Processes:*
| Process | Example | Typical Resolution |
|---------|---------|-------------------|
| Final consonant deletion | "ca" for cat | 3 years |
| Fronting | "tat" for cat | 3.5 years |
| Stopping | "top" for shop | 4 years |
| Gliding | "wabbit" for rabbit | 6 years |
| Cluster reduction | "poon" for spoon | 4-5 years |

**Hearing and Language:**

*Hearing Loss Impact:*
| Degree | Impact on Language |
|--------|-------------------|
| Mild (26-40 dB) | May miss 25-40% of speech |
| Moderate (41-55 dB) | Misses most conversational speech |
| Severe (56-70 dB) | Needs amplification for speech |
| Profound (>70 dB) | Likely needs cochlear implant consideration |

*Screening Recommendations:*
- Universal newborn hearing screen
- Rescreen if risk factors or concerns
- Audiological evaluation for all speech delays

**Evidence-Based Interventions:**

| Approach | Evidence | Population |
|----------|----------|------------|
| Naturalistic developmental behavioral | Strong | Language delay |
| Enhanced milieu teaching | Strong | Developmental delays |
| Hanen (It Takes Two to Talk) | Moderate | Parent-implemented |
| PROMPT | Moderate | Motor speech |
| Phonological awareness training | Strong | SSD, literacy risk |`,
      keyTerms: [
        { term: 'LAD', definition: 'Language Acquisition Device; theoretical innate capacity for language' },
        { term: 'phonological process', definition: 'Systematic sound pattern simplification used by developing children' },
        { term: 'childhood apraxia of speech', definition: 'Motor planning disorder affecting sequencing of speech sounds' },
        { term: 'CELF', definition: 'Clinical Evaluation of Language Fundamentals; comprehensive language assessment' },
        { term: 'critical period', definition: 'Developmental window of optimal plasticity for acquiring specific skills' },
      ],
      clinicalNotes: 'Always check hearing in any child with speech/language concerns. Late talkers with good comprehension often catch up; mixed delays require early intervention. Consider ASD screening for any child with language delay, especially if pragmatics affected.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of language disorders requires integration of neuropsychological profiles, genetic contributions, comorbidity patterns, and evidence-based treatment selection to optimize outcomes across the lifespan.',
      explanation: `**Genetic and Neurobiological Factors:**

**Genetic Contributions:**
| Gene | Association | Phenotype |
|------|-------------|-----------|
| FOXP2 | Monogenic disorder | Verbal dyspraxia, grammar deficits |
| CNTNAP2 | Risk variant | SLI, ASD language |
| ATP2C2 | Risk variant | SLI |
| CMIP | Risk variant | SLI |
| DCDC2 | Risk variant | Dyslexia, language |
| KIAA0319 | Risk variant | Dyslexia, language |

*Heritability Estimates:*
- SLI: 50-70% heritable
- Speech sound disorders: 40-60%
- Stuttering: 70-80%

**Neuroimaging Findings:**

*Structural Differences:*
| Finding | Population |
|---------|------------|
| Atypical perisylvian asymmetry | DLD, SLI |
| Reduced left IFG volume | DLD |
| White matter differences | DLD, SSD |
| Corpus callosum differences | Severe DLD |

*Functional Differences:*
- Reduced left lateralization for language
- Different activation patterns during language tasks
- Atypical connectivity patterns

**Comorbidity Patterns:**

| Primary Diagnosis | Common Comorbidities |
|-------------------|---------------------|
| DLD (Developmental Language Disorder) | Reading disorder (50%), ADHD (30%), DCD (30%) |
| Speech sound disorder | Language disorder (40%), reading disorder (25%) |
| Childhood apraxia | Fine motor difficulties, sensory issues |
| Stuttering | Anxiety (20-40%), social phobia |

**Developmental Language Disorder (DLD):**

*Diagnostic Criteria:*
- Language difficulties causing functional impairment
- Not better explained by biomedical condition
- Persisting beyond age 5
- Replacing term "SLI" (Specific Language Impairment)

*Clinical Markers:*
| Marker | Evidence Level |
|--------|---------------|
| Nonword repetition deficit | Strong |
| Sentence repetition deficit | Strong |
| Grammatical morphology errors | Strong |
| Processing speed deficits | Moderate |
| Verbal working memory limitations | Moderate |

*Long-term Outcomes:*
| Domain | Outcome |
|--------|---------|
| Language | Persistent weaknesses into adulthood |
| Reading | 50% develop reading disorder |
| Academic | Lower achievement |
| Social | Peer relationship difficulties |
| Employment | Lower occupational status |
| Mental health | Increased anxiety, depression risk |

**Childhood Apraxia of Speech (CAS):**

*Diagnostic Features:*
1. Inconsistent errors on consonants/vowels
2. Lengthened and disrupted coarticulatory transitions
3. Inappropriate prosody (lexical or phrasal stress)

*Differential from SSD:*
| Feature | CAS | SSD |
|---------|-----|-----|
| Vowel errors | Common | Rare |
| Inconsistency | High | Low |
| Prosodic errors | Present | Absent |
| Automatic vs. volitional | Difference | Similar |
| Response to motor practice | Required | Not necessary |

*Evidence-Based Treatments for CAS:*
| Treatment | Evidence | Approach |
|-----------|----------|----------|
| Integral stimulation | Strong | Multimodal cueing |
| PROMPT | Moderate | Tactile cues |
| ReST (Rapid Syllable Transitions) | Moderate | Prosody focus |
| DTTC (Dynamic Temporal/Tactile Cueing) | Moderate | Hierarchy |

**Stuttering:**

*Developmental Features:*
- Onset typically 2-5 years
- Higher incidence in boys (3-4:1)
- 75-80% spontaneous recovery
- Risk factors for persistence:
  - Family history
  - Male sex
  - Onset after age 3.5
  - Other speech-language concerns
  - Persisting >12 months

*Treatment Approaches:*
| Approach | Age | Evidence |
|----------|-----|----------|
| Lidcombe Program | 2-6 yr | Strong |
| Palin PCI | Preschool | Moderate |
| Fluency shaping | School-age+ | Moderate |
| Stuttering modification | Older | Moderate |
| Comprehensive approaches | Adolescent/adult | Moderate |

**Bilingual Language Development:**

*Normal Patterns:*
- Similar milestones as monolinguals
- Vocabulary distributed across languages
- Code-switching is normal, not confusion
- May have temporary cross-linguistic effects

*Assessment Considerations:*
- Assess in both languages
- Use language sample analysis
- Consider total vocabulary (conceptual scoring)
- Be cautious with standardized tests
- Avoid misidentifying typical bilingual patterns as disorder`,
      keyTerms: [
        { term: 'DLD', definition: 'Developmental Language Disorder; persistent language difficulties without known cause' },
        { term: 'FOXP2', definition: 'Transcription factor gene; mutations cause severe speech-language disorder' },
        { term: 'nonword repetition', definition: 'Clinical marker task where child repeats nonsense words' },
        { term: 'coarticulatory transitions', definition: 'Smooth connections between speech sounds; disrupted in CAS' },
        { term: 'code-switching', definition: 'Normal bilingual behavior of alternating between languages' },
      ],
      clinicalNotes: 'DLD often overlooked compared to ASD but has significant long-term impact. CAS requires motor-based therapy, not traditional articulation approaches. Monitor stuttering risk factors; early intervention improves outcomes. Assess bilingual children appropriately to avoid over- or under-identification.',
    },
    5: {
      level: 5,
      summary: 'Contemporary speech-language science integrates computational linguistics, advanced neuroimaging, precision diagnostics, and personalized intervention to address the heterogeneity of communication disorders across development.',
      explanation: `**Computational and Biomarker Approaches:**

**Language Sample Analysis Advances:**
| Technology | Application | Status |
|------------|-------------|--------|
| SALT | Traditional transcription analysis | Clinical standard |
| CLAN/CHILDES | Research database analysis | Research |
| Automated speech recognition | Transcription efficiency | Emerging |
| NLP for language samples | Automated metrics | Research |
| LENA | Automated word counts, turn analysis | Clinical use |

*Automated Metrics Under Development:*
- Mean length of utterance (automated)
- Lexical diversity indices
- Syntactic complexity measures
- Discourse cohesion analysis
- Sentiment/pragmatic markers

**Neuroimaging in Clinical Practice:**

*Research to Clinical Translation:*
| Modality | Findings | Clinical Utility |
|----------|----------|------------------|
| Structural MRI | Volume differences | Not diagnostic |
| DTI | White matter integrity | Research |
| fMRI | Activation patterns | Research |
| ERP | Processing differences | Emerging biomarker |
| MEG | Temporal resolution | Research |

*ERP Markers Under Investigation:*
| Component | Function | Clinical Relevance |
|-----------|----------|-------------------|
| MMN (Mismatch Negativity) | Auditory discrimination | Predicts language outcomes |
| P600 | Grammatical processing | Sensitive to SLI |
| N400 | Semantic processing | Language comprehension |

**Precision Medicine Approaches:**

*Phenotyping Framework:*
| Dimension | Assessment | Implications |
|-----------|------------|--------------|
| Language phenotype | Comprehensive testing | Intervention targets |
| Cognitive profile | IQ, memory, processing | Expectations, supports |
| Motor profile | Oromotor, fine motor | CAS identification |
| Sensory processing | Auditory processing | Modifications needed |
| Genetic profile | Targeted testing | Prognosis, family |
| Neurobiological | EEG, imaging (research) | Biomarkers |

*Genetic Testing Considerations:*
| Indication | Testing |
|------------|---------|
| Severe CAS | Consider FOXP2 |
| Global delay + language | Chromosomal microarray |
| Regression | Metabolic workup |
| Syndromic features | Targeted panel or WES |
| Family history | Genetic counseling |

**Treatment Intensity and Dosage:**

*Dose-Response Research:*
| Parameter | Definition | Evidence |
|-----------|------------|----------|
| Dose | Teaching episodes per session | Higher generally better |
| Dose frequency | Sessions per week | 3-4x more effective than 1x |
| Total intervention duration | Weeks/months | Variable by diagnosis |
| Cumulative intervention intensity | Dose x frequency x duration | Key predictor |

*Optimal Intensity by Condition:*
| Condition | Recommended Intensity | Evidence |
|-----------|----------------------|----------|
| DLD | 3-4x/week | Moderate |
| CAS | High intensity (4-5x/week initially) | Strong |
| Stuttering (Lidcombe) | Daily practice | Strong |
| ASD | High (embedded in comprehensive) | Strong |

**Implementation Science:**

*Service Delivery Models:*
| Model | Advantages | Challenges |
|-------|------------|------------|
| Traditional clinic | Direct, controlled | Access, generalization |
| School-based | Naturalistic, access | Caseload, time |
| Telepractice | Access, flexibility | Technology, young children |
| Hybrid | Flexibility | Coordination |
| Parent-implemented | Generalization, dose | Training, fidelity |

*Telepractice Evidence:*
- Equivalent outcomes for many populations
- CAS: Effective with high intensity
- Stuttering: Lidcombe effective via telehealth
- Parent training: Strong evidence
- Barriers: Technology access, young children

**Long-term Outcomes and Transitions:**

*Academic Implications:*
| Preschool Profile | School-age Risk |
|-------------------|-----------------|
| Phonological awareness deficit | Decoding difficulties |
| Vocabulary weakness | Comprehension problems |
| Grammar difficulties | Written language challenges |
| Narrative weakness | Reading comprehension, writing |

*Transition Planning:*
| Stage | Considerations |
|-------|---------------|
| Early intervention to preschool | IFSP to IEP, continued services |
| Preschool to kindergarten | Literacy preparation, academic support |
| Elementary to middle school | Written language, study skills |
| High school to adulthood | Self-advocacy, accommodations |

**Research Frontiers:**

*Emerging Interventions:*
| Approach | Target | Status |
|----------|--------|--------|
| Transcranial stimulation | Augment therapy | Early research |
| Pharmacological (language) | No effective agents | Negative trials |
| Gamification/apps | Engagement, dose | Mixed evidence |
| Virtual reality | Pragmatics, social | Early research |
| AI-driven personalization | Adaptive therapy | Development |

*Prevention and Early Identification:*
| Approach | Status | Population |
|----------|--------|------------|
| Universal language screening | Recommended | All children |
| Targeted surveillance | Standard | At-risk groups |
| Early literacy screening | Recommended | Kindergarten |
| Machine learning prediction | Research | Risk identification |

**Global Perspectives:**

*Cross-linguistic Considerations:*
- Milestone timing varies by language
- Grammatical morphology acquisition varies
- Assessment tools often not available
- Intervention approaches may need adaptation

*Resource-Limited Settings:*
- Task-shifting to community health workers
- Parent-mediated approaches primary
- Technology for service delivery
- Simplified screening tools needed`,
      keyTerms: [
        { term: 'cumulative intervention intensity', definition: 'Total dose of therapy considering session dose, frequency, and duration' },
        { term: 'ERP', definition: 'Event-Related Potential; brain response to stimuli used as potential biomarker' },
        { term: 'MMN', definition: 'Mismatch Negativity; automatic brain response to acoustic change' },
        { term: 'telepractice', definition: 'Remote delivery of speech-language services via technology' },
        { term: 'task-shifting', definition: 'Training non-specialists to deliver interventions in resource-limited settings' },
      ],
      clinicalNotes: `**Clinical Integration:**
- Stay current on DLD diagnostic criteria and nomenclature
- Consider genetic testing for severe/syndromic presentations
- Optimize intervention intensity where possible
- Use telepractice to increase access and intensity
- Monitor literacy development in all children with language concerns
- Plan for transitions across educational settings
- Advocate for evidence-based service delivery models
- Consider cultural and linguistic diversity in assessment`,
    },
  },

  media: [
    {
      id: 'language-milestones-timeline',
      type: 'diagram',
      filename: 'speech-language-milestones.svg',
      title: 'Speech and Language Milestones Timeline',
      description: 'Visual representation of expected language development from birth to 5 years',
    },
  ],

  citations: [
    {
      id: 'asha-milestones',
      type: 'website',
      title: 'Speech and Language Developmental Milestones',
      source: 'American Speech-Language-Hearing Association',
      url: 'https://www.asha.org/public/speech/development/',
      accessedDate: '2025-01-24',
    },
    {
      id: 'catalise',
      type: 'article',
      title: 'CATALISE: A Multinational and Multidisciplinary Delphi Consensus Study of Problems with Language Development',
      authors: ['Bishop DVM', 'et al.'],
      source: 'PLOS ONE',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-developmental-milestones', targetType: 'concept', relationship: 'related', label: 'Developmental Milestones' },
    { targetId: 'concept-autism-spectrum-disorder', targetType: 'condition', relationship: 'related', label: 'Autism Spectrum Disorder' },
    { targetId: 'concept-hearing-screening', targetType: 'concept', relationship: 'related', label: 'Hearing Screening' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pediatrics', 'development', 'speech-language', 'communication'],
    keywords: ['language development', 'speech delay', 'language disorder', 'articulation', 'stuttering', 'DLD'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'neurology', 'psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
