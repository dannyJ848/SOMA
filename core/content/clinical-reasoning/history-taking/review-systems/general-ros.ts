// Using custom content structure for history-taking modules


export const generalROSContent = {
  title: 'General Review of Systems',
  category: 'History Taking',
  levels: [
    {
      level: 1,
      title: 'Novice',
      description: 'Introduction to the general review of systems',
      content: [
        {
          heading: 'What is ROS?',
          text: 'The Review of Systems (ROS) is a systematic approach to identifying symptoms in body systems beyond the chief complaint. It helps uncover additional problems and provides a complete health picture.'
        },
        {
          heading: 'General Symptoms',
          text: 'The general ROS covers constitutional symptoms that affect the whole body. These include fever, weight changes, fatigue, weakness, and general malaise.'
        },
        {
          heading: 'Why It Matters',
          text: 'The general ROS can reveal serious conditions that patients may not mention. Weight loss, night sweats, or fatigue can indicate underlying disease even if the patient is concerned about something else.'
        }
      ],
      keyPoints: [
        'Systematic review of all body systems',
        'Covers constitutional/general symptoms',
        'Reveals undiagnosed conditions',
        'Completes the health picture'
      ],
      clinicalPearls: [
        'Constitutional symptoms are often the first sign of serious systemic disease',
        'Patients may not mention symptoms they consider "normal" or "unimportant"'
      ],
      commonMistakes: [
        'Skipping the ROS entirely',
        'Not asking about general constitutional symptoms',
        'Assuming no symptoms without asking'
      ],
      cases: [
        {
          title: 'Uncovering Constitutional Symptoms',
          scenario: 'Patient presents for a routine physical.',
          correctApproach: 'Ask general ROS questions: "Any fever, weight changes, fatigue, or night sweats?"',
          incorrectApproach: 'Skip ROS because patient says they "feel fine."'
        }
      ]
    },
    {
      level: 2,
      title: 'Advanced Beginner',
      description: 'Systematic general symptom assessment',
      content: [
        {
          heading: 'Fever and Temperature',
          text: 'Ask about fever, chills, and temperature abnormalities. Document measured temperatures if available. Ask about patterns of fever if present.'
        },
        {
          heading: 'Weight Changes',
          text: 'Inquire about unintentional weight loss or gain. Establish approximate amount and time frame. Intentional weight changes are less concerning than unintentional ones.'
        },
        {
          heading: 'Energy and Function',
          text: 'Assess fatigue, weakness, and changes in activity level. Differentiate from tiredness that resolves with sleep. Ask about impact on daily activities.'
        }
      ],
      keyPoints: [
        'Ask about fever and temperature',
        'Document weight changes and intent',
        'Assess fatigue versus tiredness',
        'Determine impact on function'
      ],
      clinicalPearls: [
        'Unintentional weight loss of >5% body weight warrants investigation',
        'Fatigue that persists despite rest is different from ordinary tiredness'
      ],
      commonMistakes: [
        'Not establishing if weight change was intentional',
        'Confusing fatigue with sleepiness',
        'Not quantifying weight changes'
      ],
      cases: [
        {
          title: 'Assessing Weight Loss',
          scenario: 'Patient mentions losing weight.',
          correctApproach: 'Ask "How much weight have you lost? Over what time period? Were you trying to lose weight?"',
          incorrectApproach: 'Document "weight loss" without details.'
        }
      ]
    },
    {
      level: 3,
      title: 'Competent',
      description: 'Comprehensive general ROS with red flag recognition',
      content: [
        {
          heading: 'Constitutional Red Flags',
          text: 'Recognize concerning general symptoms: unexplained weight loss >10 lbs, night sweats (drenching), persistent fatigue >2 weeks, fever of unknown origin, generalized weakness progressing over time.'
        },
        {
          heading: 'Appetite Changes',
          text: 'Inquire about appetite changes, early satiety, and changes in taste. These can indicate gastrointestinal, psychiatric, or systemic disease.'
        },
        {
          heading: 'Sleep Disturbances',
          text: 'Assess sleep quality, insomnia, hypersomnia, and sleep patterns. Sleep issues can indicate physical or mental health conditions.'
        }
      ],
      keyPoints: [
        'Recognize constitutional red flags',
        'Ask about appetite and eating changes',
        'Assess sleep quality and patterns',
        'Document concerning combinations of symptoms'
      ],
      clinicalPearls: [
        'The combination of weight loss, night sweats, and fatigue is classic for malignancy or chronic infection',
        'Appetite loss with early satiety should raise concern for gastric or intra-abdominal pathology'
      ],
      commonMistakes: [
        'Missing combinations of concerning symptoms',
        'Not asking about sleep',
        'Failing to recognize red flag significance'
      ],
      cases: [
        {
          title: 'Constitutional Red Flags',
          scenario: 'During ROS, patient reports fatigue and weight loss.',
          correctApproach: 'Immediately explore further: "How much weight loss? Any night sweats? How long has fatigue lasted? Any fevers?"',
          incorrectApproach: 'Document findings without recognizing potential significance.'
        }
      ]
    },
    {
      level: 4,
      title: 'Proficient',
      description: 'Nuanced ROS interpretation and disease patterns',
      content: [
        {
          heading: 'Symptom Clusters',
          text: 'Recognize patterns of general symptoms that suggest specific conditions. Weight loss + palpitations + heat intolerance = hyperthyroidism. Fatigue + weight gain + cold intolerance = hypothyroidism.'
        },
        {
          heading: 'Constitutional Syndrome Patterns',
          text: 'Identify classic syndromes: wasting syndrome (weight loss + muscle loss), sickness behavior (fatigue + anorexia + sleep disturbance), cancer cachexia (progressive weight loss + anorexia + weakness).'
        },
        {
          heading: 'Temporal Patterns',
          text: 'Note temporal relationships in general symptoms. Morning fatigue vs evening fatigue, progressive vs intermittent weakness, seasonal patterns of symptoms.'
        }
      ],
      keyPoints: [
        'Recognize symptom clusters',
        'Identify constitutional syndromes',
        'Note temporal symptom patterns',
        'Connect general symptoms to specific diagnoses'
      ],
      clinicalPearls: [
        'Constitutional symptoms often represent the final common pathway of many diseases',
        'The pattern of symptoms is more diagnostic than any single symptom'
      ],
      commonMistakes: [
        'Not recognizing symptom patterns',
        'Missing temporal patterns',
        'Treating constitutional symptoms in isolation'
      ],
      cases: [
        {
          title: 'Symptom Pattern Recognition',
          scenario: 'Patient reports weight loss, heat intolerance, and palpitations.',
          correctApproach: 'Recognize pattern: "Constitutional symptoms of weight loss with heat intolerance and palpitations suggest hyperthyroidism. Confirm with TSH and free T4."',
          incorrectApproach: 'Address each symptom separately without recognizing the pattern.'
        }
      ]
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Mastery of ROS in clinical context',
      content: [
        {
          heading: 'Context-Driven ROS',
          text: 'Tailor the ROS depth to the clinical situation. Comprehensive ROS for new patients, focused ROS for urgent visits, targeted ROS for symptom-specific visits. Every ROS should consider pre-test probability.'
        },
        {
          heading: 'ROS Efficiency',
          text: 'Use screening questions efficiently. Group related symptoms. Ask about the most concerning symptoms first. Use symptom clusters to guide focused questioning.'
        },
        {
          heading: 'ROS Integration',
          text: 'Integrate ROS findings with the rest of the history. Constitutional symptoms modify the likelihood of many diagnoses. Use ROS findings to generate or rule out hypotheses.'
        }
      ],
      keyPoints: [
        'Tailor ROS to clinical context',
        'Use efficient screening questions',
        'Integrate ROS with overall history',
        'Let ROS findings guide diagnostic reasoning'
      ],
      clinicalPearls: [
        'A negative ROS is as important as a positive one—it provides diagnostic confidence',
        'Expert clinicians can complete a thorough ROS in 2-3 minutes through efficient questioning'
      ],
      commonMistakes: [
        'Doing the same ROS for every patient regardless of context',
        'Making ROS too lengthy and inefficient',
        'Not integrating ROS findings into diagnostic reasoning'
      ],
      cases: [
        {
          title: 'Context-Driven ROS',
          scenario: 'New patient presenting for annual physical vs established patient with acute sinusitis.',
          correctApproach: 'For new patient: comprehensive ROS covering all systems. For established patient with sinusitis: focused ROS (headache, facial pain, nasal symptoms) + screening for any new general symptoms.',
          incorrectApproach: 'Do identical comprehensive ROS for both situations.'
        }
      ]
    }
  ]
};
