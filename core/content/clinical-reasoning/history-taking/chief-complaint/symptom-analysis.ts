// Using custom content structure for history-taking modules


export const symptomAnalysisContent = {
  title: 'Symptom Analysis',
  category: 'History Taking',
  levels: [
    {
      level: 1,
      title: 'Novice',
      description: 'Introduction to systematic symptom evaluation',
      content: [
        {
          heading: 'What is Symptom Analysis?',
          text: 'Symptom analysis is a structured approach to understanding a patient\'s symptoms in detail. It transforms vague complaints into clear, actionable clinical information through systematic questioning.'
        },
        {
          heading: 'Basic Descriptive Questions',
          text: 'Start with simple descriptive questions. Ask what the symptom feels like, where it is located, and how severe it is. These basic questions begin to characterize the symptom.'
        },
        {
          heading: 'Patient-Centered Language',
          text: 'Use language the patient understands. Avoid medical jargon. If you must use technical terms, explain them clearly. Let the patient describe the symptom in their own words first.'
        }
      ],
      keyPoints: [
        'Use a structured approach',
        'Start with simple questions',
        'Use patient-friendly language',
        'Document patient\'s descriptions'
      ],
      clinicalPearls: [
        'The patient\'s description often provides more diagnostic information than physical examination',
        'Symptoms are subjective—only the patient can truly describe them'
      ],
      commonMistakes: [
        'Using medical terminology with patients',
        'Interrupting the patient\'s description',
        'Leading the patient with suggestions'
      ],
      cases: [
        {
          title: 'Basic Symptom Description',
          scenario: 'Patient reports feeling "dizzy."',
          correctApproach: 'Ask "Can you describe what you mean by dizzy? Do you feel like things are spinning, or like you might faint, or something else?"',
          incorrectApproach: 'Assume dizziness means vertigo without further clarification.'
        }
      ]
    },
    {
      level: 2,
      title: 'Advanced Beginner',
      description: 'Using structured frameworks for symptom characterization',
      content: [
        {
          heading: 'Onset and Timing',
          text: 'Establish when the symptom started and whether it was sudden or gradual. Determine if it is constant, intermittent, or progressive. The timing pattern often reveals the underlying cause.'
        },
        {
          heading: 'Location and Radiation',
          text: 'For physical symptoms, identify the precise location. Ask if the symptom spreads or moves to other areas. Radiation patterns are particularly important for pain.'
        },
        {
          heading: 'Severity Assessment',
          text: 'Use consistent scales to measure severity. The 0-10 scale is common for pain. For other symptoms, use descriptive terms (mild, moderate, severe) or frequency measures.'
        }
      ],
      keyPoints: [
        'Characterize onset (sudden vs gradual)',
        'Identify precise location and radiation',
        'Use consistent severity scales',
        'Document timing patterns'
      ],
      clinicalPearls: [
        'Sudden onset suggests different etiologies than gradual onset',
        'Radiation patterns can pinpoint the source of symptoms'
      ],
      commonMistakes: [
        'Not clarifying what the patient means by location terms',
        'Failing to establish timing patterns',
        'Inconsistent severity measurement'
      ],
      cases: [
        {
          title: 'Characterizing Pain Location',
          scenario: 'Patient reports stomach pain.',
          correctApproach: 'Ask "Can you point to exactly where it hurts? Does the pain move anywhere else?"',
          incorrectApproach: 'Document "abdominal pain" without clarifying specific location or radiation.'
        }
      ]
    },
    {
      level: 3,
      title: 'Competent',
      description: 'Comprehensive analysis using standard mnemonics',
      content: [
        {
          heading: 'OPQRST for Pain Symptoms',
          text: 'Onset: When did it start? Was it sudden or gradual? Provocation/Palliation: What makes it worse or better? Quality: How would you describe it (burning, sharp, dull)? Radiation: Does it spread? Severity: Rate it 0-10. Time: Is it constant or intermittent?'
        },
        {
          heading: 'SOCRATES for Pain Assessment',
          text: 'Site: Where is it? Onset: When did it start? Character: What does it feel like? Radiation: Does it spread? Associations: Any other symptoms? Time: Timing pattern? Exacerbating/Relieving factors: What makes it worse or better? Severity: How bad is it?'
        },
        {
          heading: 'Quality Descriptors',
          text: 'Learn specific quality descriptors: burning, sharp, dull, aching, throbbing, cramping, pressure, heaviness, squeezing. These terms help differentiate causes. Let patients use their own words, but clarify specifics.'
        }
      ],
      keyPoints: [
        'Apply OPQRST or SOCRATES systematically',
        'Document specific quality descriptors',
        'Identify exacerbating and relieving factors',
        'Understand timing patterns'
      ],
      clinicalPearls: [
        'Provoking and relieving factors are often the most discriminating questions',
        'Quality descriptors help differentiate visceral from somatic pain'
      ],
      commonMistakes: [
        'Skipping elements of the framework',
        'Accepting vague descriptions without clarification',
        'Not asking about modifying factors'
      ],
      cases: [
        {
          title: 'Complete OPQRST Assessment',
          scenario: 'Patient presents with chest pain.',
          correctApproach: 'Systematically go through OPQRST: Onset (at rest during sleep), Provocation (worse with movement), Quality (sharp/stabbing), Radiation (none), Severity (6/10), Time (worse with breathing).',
          incorrectApproach: 'Only assess severity and location.'
        }
      ]
    },
    {
      level: 4,
      title: 'Proficient',
      description: 'Advanced discrimination through targeted symptom analysis',
      content: [
        {
          heading: 'Discriminators for Specific Symptoms',
          text: 'Learn key discriminating questions for common symptoms. For headache: aura, photophobia, phonophobia, neurologic symptoms. For diarrhea: blood, mucus, frequency, recent travel. For cough: duration, sputum production, triggers.'
        },
        {
          heading: 'Symptom Relationships',
          text: 'Identify how symptoms relate to each other. Does one symptom trigger another? Do they occur together in a pattern? These relationships can clarify causality and syndrome recognition.'
        },
        {
          heading: 'Progression Over Time',
          text: 'Understand the trajectory of symptoms. Is it getting worse, better, or staying the same? Has the character of the symptom changed? Progression patterns provide important diagnostic clues.'
        }
      ],
      keyPoints: [
        'Use discriminating questions for specific symptoms',
        'Identify symptom relationships',
        'Document progression over time',
        'Recognize symptom patterns'
      ],
      clinicalPearls: [
        'Specific discriminating questions can rule in or out diagnoses with high probability',
        'Symptom progression often indicates the underlying pathology'
      ],
      commonMistakes: [
        'Using generic questions instead of discriminating ones',
        'Missing relationships between symptoms',
        'Not tracking progression over time'
      ],
      cases: [
        {
          title: 'Headache Discriminators',
          scenario: 'Patient presents with headache.',
          correctApproach: 'Ask discriminating questions: Any visual changes before pain (aura)? Light sensitivity (photophobia)? Sound sensitivity (phonophobia)? Numbness or weakness? Worst headache of your life?',
          incorrectApproach: 'Only ask about location and severity without discriminating features.'
        }
      ]
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Mastery of symptom analysis integrated with clinical reasoning',
      content: [
        {
          heading: 'Hypothesis-Driven Questioning',
          text: 'Design questions to test specific diagnostic hypotheses while characterizing symptoms. Each question should serve dual purposes: understanding the symptom better and differentiating between possible causes.'
        },
        {
          heading: 'Symptom Syndrome Recognition',
          text: 'Recognize constellations of symptoms that define specific syndromes. Expert clinicians identify patterns that point to diagnoses faster than analyzing symptoms individually.'
        },
        {
          heading: 'Red Flag Integration',
          text: 'Simultaneously assess for dangerous conditions while characterizing symptoms. Every symptom has associated red flags that must be systematically evaluated.'
        }
      ],
      keyPoints: [
        'Design hypothesis-testing questions',
        'Recognize symptom syndromes rapidly',
        'Integrate red flag assessment',
        'Use symptom patterns for efficient diagnosis'
      ],
      clinicalPearls: [
        'Expert clinicians can often narrow to 2-3 diagnoses within the first few minutes through hypothesis-driven questioning',
        'The most discriminating questions are often those that rule out, not rule in, diagnoses'
      ],
      commonMistakes: [
        'Asking questions that don\'t change management',
        'Focusing on one hypothesis and ignoring alternatives',
        'Missing red flags in pursuit of rare diagnoses'
      ],
      cases: [
        {
          title: 'Hypothesis-Driven Chest Pain Analysis',
          scenario: 'A 58-year-old man presents with chest discomfort.',
          correctApproach: 'Generate hypotheses (cardiac, pulmonary, GI, musculoskeletal) and ask discriminating questions: "Does exertion bring it on?" (cardiac), "Is it worse when you take a deep breath?" (pulmonary), "Does eating make it worse?" (GI), "Can you make it hurt by pressing on your chest?" (musculoskeletal).',
          incorrectApproach: 'Ask generic symptom questions without using them to test specific hypotheses.'
        }
      ]
    }
  ]
};
