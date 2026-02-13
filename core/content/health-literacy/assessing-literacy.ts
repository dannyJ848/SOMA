/**
 * Health Literacy Assessment
 *
 * Tools and methods for evaluating a patient's ability to obtain, process,
 * and understand basic health information and services needed to make appropriate
 * health decisions.
 */

import { EducationalContent, ComplexityLevel } from '../types';

export const assessingLiteracyContent: EducationalContent = {
  id: 'health-literacy-assessing-literacy',
  type: 'topic',
  name: 'Health Literacy Assessment',
  alternateNames: [
    'Literacy Screening',
    'Health Literacy Evaluation',
    'Patient Literacy Assessment'
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Health literacy assessment helps healthcare providers understand how well patients can read and understand health information.',
      explanation: `Health literacy is the ability to read, understand, and use health information to make good decisions about your care. Just like a teacher checks if students understand a lesson, healthcare providers need to know if patients understand their health instructions.

Health literacy assessment is like checking if someone has the right tools for a job. Imagine trying to build furniture without instructions - it would be very difficult! The same is true for healthcare. If health information is too hard to understand, patients might not take medicines correctly or follow treatment plans.

Healthcare providers use simple questions and short tests to check health literacy. These are not regular school tests - there are no right or wrong answers. The goal is to help providers explain things in a way that works best for each patient.

Why It Matters

Low health literacy is like trying to read a book in a language you barely know. Even smart people can have low health literacy if they've never seen medical words before. Studies show that nearly half of American adults have trouble understanding health information.

When providers know about health literacy, they can:
- Use simpler words
- Give written instructions at the right reading level
- Ask patients to repeat back what they learned
- Use pictures and videos to help explain

This helps patients stay healthier and avoid mistakes with medicines.

Signs Someone Might Need Help

- Trouble filling out medical forms
- Not knowing when to ask questions
- Nodding but not really understanding
- Making mistakes with medicines in the past
- Difficulty explaining symptoms`,

      keyTerms: [
        {
          term: 'Health Literacy',
          definition: 'The ability to read, understand, and use health information to make good decisions about medical care.'
        },
        {
          term: 'Assessment',
          definition: 'A way of checking or testing something to learn more about it.'
        },
        {
          term: 'Medical Words',
          definition: 'Special words used by doctors and nurses that can be hard for regular people to understand.'
        }
      ],

      analogies: [
        'Health literacy assessment is like checking what tools you have before starting a project - you need to know what you\'re working with.',
        'Having low health literacy is like being in a foreign country where you don\'t speak the language - everything is confusing and scary.',
        'Assessing health literacy is like a coach checking if players understand the game plan before the big match.'
      ],

      examples: [
        'A patient receives a prescription but doesn\'t understand that "twice daily" means two times per day, not all at once.',
        'Someone with diabetes doesn\'t understand blood sugar numbers and can\'t tell when their levels are too high or too low.',
        'An older adult can\'t read the small print on medicine bottles and guesses at the dosage.'
      ],

      patientCounselingPoints: [
        'It\'s okay to say when you don\'t understand something - your healthcare provider wants to help.',
        'Ask for written instructions that use simple words and large print.',
        'Bring a family member or friend to appointments to help remember information.',
        'Don\'t be embarrassed to ask questions - healthcare can be confusing for everyone.',
        'Repeat back what you heard to make sure you understood correctly.'
      ]
    },

    2: {
      level: 2,
      summary: 'Health literacy assessment tools help providers identify patients who may struggle with medical information so they can adjust their communication approach.',
      explanation: `Health literacy assessment is a systematic way to evaluate how well patients can obtain, process, and understand health information. According to the U.S. Department of Health and Human Services, only 12% of adults have proficient health literacy skills. This means nearly 9 out of 10 adults may lack the skills needed to manage their health effectively.

Health literacy is not just about reading ability. It includes:
- Reading comprehension - understanding written health information
- Numeracy - working with numbers (dosages, lab results, statistics)
- Listening skills - following verbal instructions
- Decision-making - weighing options and making choices about care

Screening Tools

Several brief screening tools are commonly used in clinical settings:

1. Brief Health Literacy Screen (BHLS) - Three questions:
   - "How often do you need someone to help you read hospital materials?"
   - "How confident are you filling out medical forms by yourself?"
   - "How often do you have problems learning about your medical condition because of difficulty reading hospital materials?"

2. Newest Vital Sign - Patients read a nutrition label and answer six questions about it. Takes about 3 minutes.

3. Single Item Literacy Screener (SILS) - One question: "How confident are you filling out medical forms by yourself?"

4. Rapid Estimate of Adult Literacy in Medicine (REALM) - Word recognition test where patients read medical words aloud. Takes 2-3 minutes.

Red Flags for Low Health Literacy

Patients may demonstrate behaviors that suggest literacy challenges:
- Incomplete intake forms or sections left blank
- "Forgetting" glasses at home
- Making excuses to avoid reading aloud
- Frequently missed appointments
- Medication errors or non-adherence
- Inability to name their medications or explain why they take them

Impact on Health Outcomes

Research consistently shows that low health literacy is associated with:
- Higher hospitalization rates
- More emergency department visits
- poorer ability to manage chronic conditions
- Higher healthcare costs
- Increased mortality risk

Patients with limited health literacy are also less likely to:
- Get preventive care like vaccinations and cancer screenings
- Understand their diagnosis and treatment options
- Recognize warning signs that require urgent care`,

      keyTerms: [
        {
          term: 'Health Literacy',
          definition: 'The degree to which individuals can obtain, process, and understand basic health information and services needed to make appropriate health decisions.'
        },
        {
          term: 'Numeracy',
          definition: 'The ability to understand and work with numbers, especially as they relate to health information like medication dosages and lab results.',
          pronunciation: 'NOO-mer-see'
        },
        {
          term: 'Screening',
          definition: 'A brief test or check to identify people who may have a certain condition or need further assessment.'
        },
        {
          term: 'Adherence',
          definition: 'Following medical advice, including taking medications as prescribed and keeping appointments.',
          relatedTerms: ['Compliance', 'Concordance']
        },
        {
          term: 'REALM',
          definition: 'Rapid Estimate of Adult Literacy in Medicine - a word-recognition test used to assess health literacy.'
        }
      ],

      analogies: [
        'Health literacy screening is like a pre-test check - it doesn\'t grade the student, it helps the teacher know how to teach better.',
        'Low health literacy is like trying to follow a recipe when you\'ve never cooked before - even if the instructions are clear, you might still get confused.',
        'Health literacy assessment is like checking the weather before planning an outdoor event - it helps you prepare and adjust your plans.'
      ],

      examples: [
        'A patient with low numeracy might not understand that "your A1C is 8.5%" is high and concerning.',
        'Someone with limited health literacy might not realize that an antibiotic for an ear infection won\'t help a cold.',
        'A patient might take "every 6 hours" to mean three times a day (with sleep) rather than four times in 24 hours.'
      ],

      clinicalNotes: 'Health literacy should be assessed universally - don\'t rely on appearance, education level, or occupation to predict literacy. Patients often hide their difficulty due to shame.'
    },

    3: {
      level: 3,
      summary: 'Health literacy assessment encompasses valid and reliable screening instruments that measure functional literacy, numeracy, and comprehension skills essential for navigating the healthcare system.',
      explanation: `Health literacy is a multidimensional construct defined by the Institute of Medicine as "the degree to which individuals have the capacity to obtain, process, and understand basic health information and services needed to make appropriate health decisions." Assessment of health literacy is critical because it directly influences health outcomes, healthcare utilization, and patient safety.

Conceptual Framework

Health literacy consists of several domains:
- Functional literacy: Basic reading and writing skills in health contexts
- Interactive literacy: Communication skills for engaging with healthcare providers
- Critical literacy: Ability to critically analyze and apply health information

The conceptual model proposed by Sørensen et al. (2012) identifies four domains:
1. Access information - Ability to seek and find health information
2. Understand information - Comprehension of health content
3. Process/appraise - Cognitive filtering and evaluation
4. Apply information - Using information to make decisions

Validated Assessment Instruments

Performance-Based Tests:

1. Test of Functional Health Literacy in Adults (TOFHLA)
   - Reading comprehension section (50 items)
   - Numeracy section (17 items)
   - Takes 22 minutes
   - Yields scores: inadequate, marginal, adequate

2. Short TOFHLA (S-TOFHLA)
   - Abbreviated version with 36 reading items and 4 numeracy items
   - Takes 12 minutes
   - Widely used in research

3. Rapid Estimate of Adult Literacy in Medicine (REALM)
   - Word recognition test with 66 medical terms
   - Takes 2-3 minutes
   - Correlates highly with standardized reading tests
   - Cannot be used with patients who cannot read aloud

4. Newest Vital Sign (NVS)
   - Requires reading a nutrition label and answering 6 questions
   - Tests both literacy and numeracy
   - Takes 3 minutes
   - Sensitivity: 72%, Specificity: 74% for identifying limited literacy

Self-Reported Measures:

1. Brief Health Literacy Screening Tool (BRIEF)
   - 4 items, each on 5-point scale
   - Psychometrically validated
   - Less threatening than performance tests

2. Health Literacy Skills Instrument (HLSI)
   - Self-assessment across multiple domains
   - 10 items measuring comprehension, navigation, etc.

Challenges in Assessment

- Social desirability bias: Patients overestimate their understanding
- Shame and stigma: Literacy difficulties are often hidden
- Time constraints: Comprehensive assessment is impractical in busy clinics
- Cultural and linguistic factors: Tests may not be valid across populations
- Dynamic nature: Health literacy varies with context, stress, and fatigue

Universal Precautions Approach

Given limitations of individual assessment, the Agency for Healthcare Research and Quality (AHRQ) recommends universal precautions:
- Assume all patients may have difficulty understanding
- Use plain language for all patients
- Provide information in multiple formats
- Always verify understanding with teach-back
- Create a shame-free environment for asking questions

This approach eliminates the need for screening while ensuring all patients receive clear communication.`,

      keyTerms: [
        {
          term: 'Health Literacy',
          definition: 'The capacity to obtain, process, and understand basic health information and services needed to make appropriate health decisions.',
          relatedTerms: ['Functional literacy', 'Patient comprehension']
        },
        {
          term: 'TOFHLA',
          definition: 'Test of Functional Health Literacy in Adults - a validated reading comprehension and numeracy assessment instrument.',
          pronunciation: 'TAW-full'
        },
        {
          term: 'REALM',
          definition: 'Rapid Estimate of Adult Literacy in Medicine - a word-recognition screening tool using 66 health-related terms.',
          pronunciation: 'REE-uhl-m'
        },
        {
          term: 'NVS',
          definition: 'Newest Vital Sign - a 6-item health literacy assessment using a nutrition label.',
          relatedTerms: ['Newest Vital Sign']
        },
        {
          term: 'Sensitivity',
          definition: 'A test\'s ability to correctly identify those with a condition (true positive rate).'
        },
        {
          term: 'Specificity',
          definition: 'A test\'s ability to correctly identify those without a condition (true negative rate).'
        },
        {
          term: 'Universal Precautions',
          definition: 'An approach that assumes all patients may have limited literacy and provides clear communication to everyone.'
        }
      ],

      analogies: [
        'Health literacy is like language proficiency - someone may be fluent in everyday conversation but struggle with technical or professional discussions.',
        'Performance-based health literacy tests are like driving tests - they measure actual skill, while self-reports are like asking "Are you a good driver?"'
      ],

      examples: [
        'A patient scores "inadequate" on TOFHLA but can successfully manage daily medications using pill organizers and reminder apps.',
        'Research shows REALM correlates strongly (r=0.84) with the WRAT-R reading test, validating its use as a literacy screener.',
        'The NVS identifies a patient who can read medical terms but cannot calculate dosage adjustments, revealing a numeracy-specific deficit.'
      ]
    },

    4: {
      level: 4,
      summary: 'Health literacy assessment involves validated instruments measuring functional, interactive, and critical literacy domains, with evidence linking low literacy to poor health outcomes independent of socioeconomic factors.',
      explanation: `Health literacy assessment has evolved from simple reading tests to multidimensional evaluations capturing the complex cognitive and social skills required for health decision-making. The Institute of Medicine's landmark 2004 report established health literacy as a distinct public health concern, identifying it as an independent predictor of health outcomes even after controlling for education, income, race, and other demographic factors.

Theoretical Foundations

Health literacy operates within the conceptual framework proposed by Nutbeam (2000), which describes three levels:
1. Functional health literacy: Basic skills in reading and writing sufficient to function in healthcare contexts
2. Interactive health literacy: More advanced cognitive and literacy skills that enable active participation in healthcare encounters
3. Critical health literacy: Advanced cognitive skills and social skills that enable critical analysis of information and ability to exert greater control over life events and situations

Baker's conceptual model (2006) identifies two pathways through which health literacy affects health:
- Access pathway: Literacy affects access to and utilization of healthcare services
- Processing pathway: Literacy affects comprehension of health information and self-care abilities

Measurement Properties of Assessment Tools

TOFHLA/S-TOFHLA:
- Cronbach's alpha: 0.97 for reading section, 0.69 for numeracy
- Criterion validity: Correlates 0.74 with WRAT-R
- Reading passages use the Cloze procedure (every 5th to 7th word deleted)
- Cutoffs: 0-16 inadequate, 17-22 marginal, 23-36 adequate (S-TOFHLA)
- Limitations: English only, time-intensive, ceiling effects

REALM:
- Correlates 0.84 with WRAT-R, 0.88 with TOFHLA
- Test-retest reliability: 0.99
- Words arranged by difficulty and syllable count
- Grade-level equivalents: 0-18 (0-3rd grade), 19-44 (4th-6th grade), 45-60 (7th-8th grade), 61-66 (9th grade+)
- Advantages: Quick, non-threatening, no mathematical component
- Disadvantages: Cannot assess comprehension, limited to word recognition

NVS:
- Area under ROC curve: 0.72
- Identifies limited health literacy with sensitivity 0.72, specificity 0.74
- Assesses both reading comprehension and numeracy
- Most strongly correlated with REALM among brief screeners (r=0.57)
- Independent of education level

Health Literacy and Health Disparities

Research demonstrates that low health literacy disproportionately affects:
- Older adults (80% of English-speaking US adults age 65+ have inadequate health literacy)
- Racial and ethnic minorities
- Low-income populations
- Individuals with limited English proficiency
- Those with chronic conditions requiring self-management

The "staleness effect" is observed among older adults: health literacy declines with age even in those with adequate baseline literacy, possibly due to cognitive decline.

Neurocognitive Correlates

Functional MRI studies reveal that low health literacy is associated with:
- Reduced activation in left inferior frontal gyrus during health information processing
- Differences in working memory and executive function
- Impaired integration of new information with existing knowledge

These findings suggest that health literacy involves domain-general cognitive processes rather than simply reading ability.

Health Literacy and Patient Safety

The Joint Commission identifies health literacy as a critical patient safety issue. Low literacy contributes to:
- Medication errors: Patients unable to interpret dosing instructions
- Informed consent failures: Patients don't understand procedures or risks
- Misdiagnosis: Inaccurate history due to poor communication
- Preventable hospital admissions: Estimated cost of $17-69 billion annually`,

      keyTerms: [
        {
          term: 'Cloze Procedure',
          definition: 'A testing method where every nth word is deleted from a passage and the reader must supply the correct word, measuring reading comprehension.',
          pronunciation: 'KLOH-z'
        },
        {
          term: 'ROC Curve',
          definition: 'Receiver Operating Characteristic curve - a graphical plot of sensitivity versus specificity for a binary classifier system.',
          relatedTerms: ['Area under the curve', 'AUC']
        },
        {
          term: 'WRAT-R',
          definition: 'Wide Range Achievement Test-Revised - a standardized academic achievement test used as a criterion measure for validating health literacy tests.',
          relatedTerms: ['Wide Range Achievement Test']
        },
        {
          term: 'Cronbach\'s Alpha',
          definition: 'A measure of internal consistency reliability for scales or tests, ranging from 0 to 1, with values above 0.7 considered acceptable.'
        },
        {
          term: 'Test-Retest Reliability',
          definition: 'The consistency of a measure when repeated over time, indicating stability of the construct being measured.'
        },
        {
          term: 'Ceiling Effect',
          definition: 'When a test fails to measure high levels of ability because items are too easy for the target population.'
        },
        {
          term: 'Staleness Effect',
          definition: 'The decline in health literacy skills among older adults over time, independent of baseline literacy level.'
        }
      ],

      analogies: [
        'Health literacy is to health what financial literacy is to wealth management - both require domain-specific knowledge and skills that aren\'t guaranteed by general intelligence or education.',
        'The staleness effect in health literacy is similar to muscle atrophy - skills not regularly used in healthcare contexts may deteriorate over time.'
      ],

      examples: [
        'The AHRQ Health Literacy Universal Precautions Toolkit provides a systematic approach to implementing health-literacy-friendly practices without individual screening.',
        'A study of Medicare enrollees found that those with inadequate health literacy had 50% higher mortality risk over 6 years compared to those with adequate literacy.',
        'Functional MRI studies show that during processing of health information, high-literacy individuals activate the left inferior frontal gyrus more robustly than low-literacy individuals.'
      ],

      clinicalNotes: 'Assessment of health literacy should be paired with universal precautions approaches. Even patients who score well on screening may struggle in stressful situations or when fatigued.'
    },

    5: {
      level: 5,
      summary: 'Advanced health literacy assessment integrates multidimensional measurement frameworks, neurocognitive evaluation, and health systems interventions to address literacy as a modifiable social determinant of health.',
      explanation: `Health literacy assessment at the professional level requires understanding of measurement theory, health disparities research, implementation science, and systems-based practice. Health literacy is now recognized as a social determinant of health, an independent risk factor for poor outcomes, and a modifiable target for quality improvement interventions.

Conceptual Evolution and Measurement Theory

Health literacy has evolved through several conceptual frameworks:
- Procedural/knowledge-based view (1990s): Focus on reading skills and medical knowledge
- Functional view (2000s): Include navigation, communication, and decision-making
- Capability view (2010s): Incorporate empowerment, social capital, and contextual factors
- Public health view: Consider health literacy as both individual and community-level attribute

The HLS-EU (European Health Literacy Survey) conceptual framework identifies 12 integrated domains across 4 information processing stages:
1. Access: 2 domains (finding, obtaining)
2. Understand: 2 domains (comprehending, appraising)
3. Appraise: 4 domains (filtering, evaluating, judging, decision-making)
4. Apply: 4 domains (applying to self, others, to prevention, to healthcare utilization)

Advanced Assessment Instruments

HLS-EU-Q47 and HLS-EU-Q16:
- Developed through Delphi consensus process with 72 experts from 27 countries
- Measures 12 domains across healthcare, disease prevention, and health promotion
- Psychometric properties: Cronbach's alpha 0.93 (Q47), 0.84 (Q16)
- Rasch model validation confirms unidimensionality
- Available in 30+ languages
- Provides four-level categorization: insufficient, problematic, sufficient, excellent

Health Literacy Skills Instrument (HLSI):
- Self-assessment of 25 health literacy tasks
- Based on the Institute of Medicine's 10 attributes of health literacy
- Measures functional, communicative, and critical domains
- Item response theory (IRT) analysis confirms reliability

eHealth Literacy Scale (eHEALS):
- Measures ability to find, evaluate, and apply electronic health information
- 8 items on 5-point Likert scale
- Increasing relevance with telemedicine and patient portals
- Correlates with both general health literacy and digital literacy

Pharmacogenomics and Literacy:

Pharmacogenomics testing reveals additional literacy considerations:
- Patients must understand probabilistic risk information
- Multi-locus testing results require interpretation
- Implications for medication choices are nuanced

The IGNITE Network has developed literacy-adapted materials for pharmacogenomics results, demonstrating how genomics and literacy intersect.

Systems-Level Interventions

The AHRQ Health Literacy Universal Precautions Toolkit (2nd ed., 2020) outlines 21 tools organized into 4 domains:

1. Spoken Communication: Teach-back, plain language, "Ask Me 3"
2. Written Communication: Patient-friendly materials, clear signage, post-discharge instructions
3. Self-Management and Empowerment: Action plans, medication reconciliation, brown bag review
4. Systems Support: Electronic health record prompts, visual medication schedules, community resources

Implementation Science Considerations:

Successful health literacy interventions demonstrate:
- Leadership buy-in: Executive support for cultural transformation
- Staff training: All team members, not just clinicians
- Workflow integration: Tools embedded into existing processes
- Patient engagement: Co-design of materials and processes
- Continuous measurement: Ongoing assessment and feedback

Health Literacy and Quality Metrics:

Health literacy is increasingly incorporated into value-based payment models:
- CMS Accountable Health Communities Model includes health literacy screening
- Hospital Consumer Assessment of Healthcare Providers and Systems (HCAHPS) includes communication items
- Readmission reduction efforts target literacy barriers
- Medication reconciliation quality measures address literacy-related errors

Research Frontiers:

Current research explores:
- Health literacy and epigenetics: How literacy-related stress may influence gene expression
- Artificial intelligence: NLP tools to assess readability of patient materials in real-time
- Digital health literacy: Assessing ability to navigate patient portals and telehealth
- Organizational health literacy: The HL-ORG framework for assessing health literacy responsiveness of healthcare organizations`,

      keyTerms: [
        {
          term: 'Delphi Process',
          definition: 'A structured communication technique using iterative surveys to gather expert consensus, often used to develop consensus-based measures.',
          relatedTerms: ['Consensus methodology']
        },
        {
          term: 'Rasch Model',
          definition: 'A psychometric model for analyzing categorical data to measure latent traits, providing fundamental measurement properties like interval scaling.',
          relatedTerms: ['Item response theory', 'IRT', 'Psychometrics']
        },
        {
          term: 'Item Response Theory',
          definition: 'A paradigm for designing, analyzing, and scoring tests, questionnaires, and similar instruments measuring abilities, attitudes, or other variables.',
          pronunciation: 'I-R-T',
          relatedTerms: ['IRT', 'Latent trait theory']
        },
        {
          term: 'Universal Design',
          definition: 'Design of products and environments to be usable by all people, to the greatest extent possible, without adaptation or specialized design.',
          relatedTerms: ['Universal precautions for health literacy']
        },
        {
          term: 'Implementation Science',
          definition: 'The study of methods to promote the systematic uptake of research findings and other evidence-based practices into routine practice.'
        },
        {
          term: 'Value-Based Payment',
          definition: 'Healthcare payment models that reward providers for quality and value rather than volume of services.'
        },
        {
          term: 'HCAHPS',
          definition: 'Hospital Consumer Assessment of Healthcare Providers and Systems - a standardized survey of patients\' perspectives on hospital care.',
          pronunciation: 'H-caps'
        },
        {
          term: 'eHealth Literacy',
          definition: 'The ability to seek, find, understand, and appraise health information from electronic sources and apply the knowledge gained to addressing or solving a health problem.'
        }
      ],

      analogies: [
        'Health literacy assessment in clinical practice is analogous to vital signs measurement - it provides essential information about the patient\'s capacity to engage in care.',
        'Universal precautions for health literacy is like wearing gloves for every patient - you protect everyone, not just those you know are infectious.'
      ],

      examples: [
        'The Health Literate Care Model (Koh et al., 2013) integrates health literacy into the Chronic Care Model, describing 10 attributes of a health literate healthcare organization.',
        'A multisite RCT of the AHRQ Health Literacy Universal Precautions Toolkit showed significant improvements in patient communication scores and reduced hospital readmissions.',
        'The Agency for Healthcare Research and Quality\'s "Health Literacy Universal Precautions Toolkit" has been implemented in over 5,000 healthcare organizations nationwide.'
      ],

      clinicalNotes: 'The AMA Council on Medical Education recommends that all physicians receive training in health literacy communication strategies. However, few medical schools provide dedicated curriculum on this topic.'
    }
  },

  media: [],
  citations: [
    {
      id: 'iom-2004',
      type: 'article',
      title: 'Health Literacy: A Prescription to End Confusion',
      authors: ['Institute of Medicine'],
      source: 'National Academies Press',
      url: 'https://www.nap.edu/catalog/10883/health-literacy-a-prescription-to-end-confusion'
    },
    {
      id: 'sorensen-2012',
      type: 'article',
      title: 'Towards a Conceptual Definition of Health Literacy: Results of a Systematic Review and Qualitative Study',
      authors: ['K. Sørensen', 'S. Van den Broucke', 'J. Fullam', 'G. Doyle', 'J. Pelikan', 'Z. Slonska', 'H. Brand'],
      source: 'BMC Public Health',
      page: '80'
    },
    {
      id: 'ahrq-toolkit',
      type: 'website',
      title: 'Health Literacy Universal Precautions Toolkit',
      authors: ['Agency for Healthcare Research and Quality'],
      source: 'AHRQ',
      url: 'https://www.ahrq.gov/health-literacy/improve/precautions-toolkit/index.html'
    },
    {
      id: 'weiss-2005',
      type: 'article',
      title: 'Rapid Estimate of Adult Literacy in Medicine (REALM): A Quick Reading Test for Patients',
      authors: ['B.D. Weiss', 'M. Mays', 'W. Martz', 'K.M. Castro', 'D.A. DeWalt', 'M.A. Pignone', 'J. Mockbee', 'F. Hale'],
      source: 'Journal of General Internal Medicine',
      page: '1107-1113'
    },
    {
      id: 'parker-1995',
      type: 'article',
      title: 'The Test of Functional Health Literacy in Adults (TOFHLA): A New Instrument for Measuring Patients\' Literacy Skills',
      authors: ['R.M. Parker', 'D.W. Baker', 'M.V. Williams', 'J.R. Nurss'],
      source: 'Journal of General Internal Medicine',
      page: '537-541'
    }
  ],
  crossReferences: [
    {
      targetId: 'health-literacy-teach-back',
      targetType: 'topic',
      relationship: 'related',
      label: 'Teach-Back Method'
    },
    {
      targetId: 'health-literacy-informed-consent',
      targetType: 'topic',
      relationship: 'related',
      label: 'Informed Consent'
    },
    {
      targetId: 'health-literacy-discharge-instructions',
      targetType: 'topic',
      relationship: 'related',
      label: 'Discharge Instructions'
    }
  ],
  tags: {
    systems: ['communication', 'patient-education'],
    topics: ['health-literacy', 'assessment', 'patient-safety', 'health-disparities'],
    keywords: ['literacy screening', 'patient comprehension', 'numeracy', 'health communication'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine', 'psychiatry']
    }
  },

  createdAt: '2024-01-15T10:00:00Z',
  updatedAt: '2024-01-15T10:00:00Z',
  version: 1,
  status: 'published',
  contributors: ['Medical Education Team']
};

// Export with alias for index.ts compatibility
export { assessingLiteracyContent as assessingHealthLiteracy };
export default assessingLiteracyContent;
