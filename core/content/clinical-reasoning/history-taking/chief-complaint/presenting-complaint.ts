// Using custom content structure for history-taking modules


export const presentingComplaintContent = {
  title: 'Presenting Complaint',
  category: 'History Taking',
  levels: [
    {
      level: 1,
      title: 'Novice',
      description: 'Introduction to understanding the patient\'s main reason for seeking care',
      content: [
        {
          heading: 'What is a Chief Complaint?',
          text: 'The chief complaint is the primary reason why a patient seeks medical attention. It is usually expressed in the patient\'s own words and should be recorded as a brief, direct statement.'
        },
        {
          heading: 'Basic Documentation',
          text: 'Always document the chief complaint exactly as the patient states it. Use quotation marks to indicate these are the patient\'s words. For example: "I have chest pain" or "My stomach hurts."'
        },
        {
          heading: 'Open-Ended Questions',
          text: 'Start with open-ended questions to let patients describe their problem in their own way. Ask "What brings you in today?" or "How can I help you?"'
        }
      ],
      keyPoints: [
        'Record the complaint in patient\'s own words',
        'Keep it brief and direct',
        'Use quotation marks for direct quotes',
        'Start with open-ended questions'
      ],
      clinicalPearls: [
        'The chief complaint sets the direction for the entire encounter',
        'A well-documented chief complaint helps with accurate coding'
      ],
      commonMistakes: [
        'Rewording the patient\'s complaint in medical terminology',
        'Making the chief complaint too verbose',
        'Skipping directly to closed questions'
      ],
      cases: [
        {
          title: 'Documenting Chief Complaint',
          scenario: 'A patient enters the clinic holding their chest and appears uncomfortable.',
          correctApproach: 'Ask "What brings you in today?" and document: "I have chest pain" (patient\'s exact words).',
          incorrectApproach: 'Document "Patient presents with chest discomfort" without using patient\'s words.'
        }
      ]
    },
    {
      level: 2,
      title: 'Advanced Beginner',
      description: 'Expanding the chief complaint with essential follow-up',
      content: [
        {
          heading: 'Duration of Symptoms',
          text: 'Always establish when the symptoms started. The duration provides critical context for urgency and potential causes. Ask "How long have you had this?" or "When did it start?"'
        },
        {
          heading: 'Location and Specificity',
          text: 'Clarify the specific location of the problem. For pain, ask the patient to point to where it hurts. For other symptoms, ask about the affected area or system.'
        },
        {
          heading: 'Initial Severity Assessment',
          text: 'Begin to assess the severity through open-ended questioning. Ask "How bad is it?" or "How would you rate the discomfort?"'
        }
      ],
      keyPoints: [
        'Always establish duration',
        'Clarify specific location',
        'Begin severity assessment',
        'Use a combination of open and focused questions'
      ],
      clinicalPearls: [
        'Duration can differentiate acute from chronic conditions',
        'Sudden onset often suggests different etiologies than gradual onset'
      ],
      commonMistakes: [
        'Assuming duration without asking',
        'Being too vague about location',
        'Leading the patient with suggestive questions'
      ],
      cases: [
        {
          title: 'Adding Duration',
          scenario: 'Patient states their chief complaint is abdominal pain.',
          correctApproach: 'Immediately follow with "How long have you had this pain?" Document: "Abdominal pain for 3 days."',
          incorrectApproach: 'Assume it\'s acute without confirming duration.'
        }
      ]
    },
    {
      level: 3,
      title: 'Competent',
      description: 'Comprehensive characterization of the presenting complaint',
      content: [
        {
          heading: 'OPQRST Framework',
          text: 'Use OPQRST to systematically characterize symptoms: Onset (sudden/gradual), Provocation/Palliation (what makes it better/worse), Quality (descriptors), Radiation (does it spread), Severity (0-10 scale), Timing (constant/intermittent).'
        },
        {
          heading: 'Context and Setting',
          text: 'Understand the circumstances surrounding symptom onset. Was the patient at rest, active, at work, or sleeping? What were they doing when it started?'
        },
        {
          heading: 'Associated Symptoms',
          text: 'Identify any symptoms that accompany the chief complaint. These can provide important diagnostic clues and help differentiate between conditions.'
        }
      ],
      keyPoints: [
        'Apply OPQRST systematically',
        'Establish context of symptom onset',
        'Identify associated symptoms',
        'Document timing patterns clearly'
      ],
      clinicalPearls: [
        'Provoking and relieving factors are among the most discriminating questions',
        'Associated symptoms often narrow the differential diagnosis significantly'
      ],
      commonMistakes: [
        'Skipping OPQRST elements',
        'Not asking about associated symptoms',
        'Failing to establish the context'
      ],
      cases: [
        {
          title: 'OPQRST Application',
          scenario: 'Patient presents with headache.',
          correctApproach: 'Systematically apply OPQRST: When did it start? What makes it better/worse? What does it feel like? Does it spread anywhere? How bad is it? Is it constant or comes and goes?',
          incorrectApproach: 'Only ask about severity and location.'
        }
      ]
    },
    {
      level: 4,
      title: 'Proficient',
      description: 'Nuanced understanding of complaint patterns and red flags',
      content: [
        {
          heading: 'Red Flag Identification',
          text: 'Systematically assess for dangerous conditions associated with the presenting complaint. For chest pain: cardiac features. For headache: thunderclap onset, neurologic deficits. For abdominal pain: peritoneal signs.'
        },
        {
          heading: 'Symptom Clusters',
          text: 'Recognize patterns of symptoms that suggest specific syndromes. A combination of symptoms often provides more diagnostic weight than any single symptom alone.'
        },
        {
          heading: 'Functional Impact',
          text: 'Assess how the complaint affects the patient\'s life. Ask specifically about work, activities of daily living, sleep, and quality of life. This guides urgency and treatment priorities.'
        }
      ],
      keyPoints: [
        'Identify red flags for each complaint',
        'Recognize symptom patterns and clusters',
        'Assess functional impact',
        'Consider life-threatening possibilities first'
      ],
      clinicalPearls: [
        'Every chief complaint has associated red flags that must be ruled out',
        'The functional impact often determines the treatment approach more than symptom severity'
      ],
      commonMistakes: [
        'Missing red flags in the history',
        'Not asking about functional impact',
        'Anchoring on the first diagnosis considered'
      ],
      cases: [
        {
          title: 'Red Flag Assessment',
          scenario: 'Patient presents with "the worst headache of my life."',
          correctApproach: 'Immediately recognize this as a red flag for subarachnoid hemorrhage. Ask about onset (thunderclap?), neck stiffness, photophobia, altered consciousness.',
          incorrectApproach: 'Treat as a typical tension headache without further red flag assessment.'
        }
      ]
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Mastery of chief complaint evaluation with clinical reasoning integration',
      content: [
        {
          heading: 'Hypothesis Generation',
          text: 'Use the initial description of the chief complaint to begin generating a differential diagnosis. Each question should be designed to simultaneously characterize the complaint and test hypotheses.'
        },
        {
          heading: 'Diagnostic Triage',
          text: 'Rapidly categorize the patient\'s complaint into urgency tiers: emergent (immediate intervention needed), urgent (same-day evaluation needed), or routine (can wait for scheduled appointment).'
        },
        {
          heading: 'Patient-Centered Exploration',
          text: 'Adapt questioning style to the patient. Use clear language for non-medical patients. Acknowledge and address multiple complaints by establishing priorities and understanding the patient\'s perspective.'
        }
      ],
      keyPoints: [
        'Generate and test hypotheses simultaneously',
        'Perform rapid diagnostic triage',
        'Adapt to patient communication style',
        'Prioritize multiple complaints effectively'
      ],
      clinicalPearls: [
        'The best questions serve dual purposes: characterizing symptoms and testing diagnostic hypotheses',
        'Expert clinicians often reach a working diagnosis within the first 60 seconds of the encounter'
      ],
      commonMistakes: [
        'Premature closure on a diagnosis',
        'Ignoring the patient\'s primary concern',
        'Failing to recognize communication barriers'
      ],
      cases: [
        {
          title: 'Hypothesis-Driven History',
          scenario: 'A 65-year-old smoker presents with "chest discomfort."',
          correctApproach: 'Immediately consider cardiac, pulmonary, and musculoskeletal causes. Ask questions that characterize the pain while testing these hypotheses: "Does exertion make it worse?" (cardiac), "Is it worse with breathing?" (pleuritic), "Can you reproduce it by pressing?" (musculoskeletal).',
          incorrectApproach: 'Ask a generic list of questions without connecting them to potential diagnoses.'
        }
      ]
    }
  ]
};
