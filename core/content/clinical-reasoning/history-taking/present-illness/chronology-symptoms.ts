// Using custom content structure for history-taking modules


export const chronologySymptomsContent = {
  title: 'Chronology of Symptoms',
  category: 'History Taking',
  levels: [
    {
      level: 1,
      title: 'Novice',
      description: 'Introduction to understanding symptom timing and sequence',
      content: [
        {
          heading: 'Why Chronology Matters',
          text: 'The timing and sequence of symptoms provide crucial diagnostic information. When symptoms appear in relation to each other can reveal cause and effect relationships and suggest specific diagnoses.'
        },
        {
          heading: 'Onset Time',
          text: 'Establish exactly when each symptom began. Be specific: "3 days ago" is better than "a few days ago." Use precise time references when relevant to acute conditions.'
        },
        {
          heading: 'Sequence Recording',
          text: 'Document the order in which symptoms appeared. Which symptom came first? Did others follow? The sequence can differentiate between conditions.'
        }
      ],
      keyPoints: [
        'Establish precise onset times',
        'Document symptom sequence',
        'Use specific time references',
        'Note the order of appearance'
      ],
      clinicalPearls: [
        'The order of symptom appearance is often more diagnostic than the symptoms themselves',
        'Acute onset suggests different causes than gradual onset'
      ],
      commonMistakes: [
        'Using vague time references',
        'Not documenting symptom sequence',
        'Confusing when different symptoms started'
      ],
      cases: [
        {
          title: 'Establishing Onset Time',
          scenario: 'Patient reports fever and cough.',
          correctApproach: 'Ask "Which started first?" and get specific times: "Fever started 3 days ago. Cough began yesterday."',
          incorrectApproach: 'Document "Fever and cough for a few days."'
        }
      ]
    },
    {
      level: 2,
      title: 'Advanced Beginner',
      description: 'Tracking symptom evolution and patterns',
      content: [
        {
          heading: 'Symptom Progression',
          text: 'Document how each symptom has changed over time. Is it worsening, improving, or stable? Has the character of the symptom changed? Progression patterns are diagnostically valuable.'
        },
        {
          heading: 'Time-Based Patterns',
          text: 'Identify patterns related to time of day, meals, activity, or sleep. Symptoms that occur at specific times often have identifiable triggers or mechanisms.'
        },
        {
          heading: 'Duration of Each Symptom',
          text: 'Record how long each symptom has been present. This includes both the total duration and whether the symptom is continuous or episodic.'
        }
      ],
      keyPoints: [
        'Track symptom progression over time',
        'Identify time-based patterns',
        'Document symptom duration',
        'Note if continuous or episodic'
      ],
      clinicalPearls: [
        'Worsening symptoms suggest progression of disease or treatment failure',
        'Time-based patterns can suggest specific diagnoses (e.g., morning stiffness in inflammatory arthritis)'
      ],
      commonMistakes: [
        'Not tracking progression',
        'Missing time-based patterns',
        'Confusing total duration with current status'
      ],
      cases: [
        {
          title: 'Tracking Progression',
          scenario: 'Patient with abdominal pain.',
          correctApproach: 'Document progression: "Pain began periumbilical 2 days ago (mild, 4/10), migrated to RLQ 24 hours ago (moderate, 6/10), now severe (8/10) with localized tenderness."',
          incorrectApproach: 'Document: "Abdominal pain for 2 days, now severe."'
        }
      ]
    },
    {
      level: 3,
      title: 'Competent',
      description: 'Comprehensive chronological documentation',
      content: [
        {
          heading: 'Timeline Construction',
          text: 'Create a clear chronological timeline of the illness. Start with the first symptom and document each subsequent event in order. This creates a visual representation of the illness course.'
        },
        {
          heading: 'Symptom Clusters',
          text: 'Identify groups of symptoms that appeared together or in close succession. These clusters can represent specific phases of illness or specific syndromes.'
        },
        {
          heading: 'Temporally-Related Events',
          text: 'Document other events that occurred around the same time as symptoms: medications started, dietary changes, exposures, stress, travel, injuries. These may be causally related.'
        }
      ],
      keyPoints: [
        'Construct clear illness timeline',
        'Identify symptom clusters',
        'Document temporally-related events',
        'Maintain chronological organization'
      ],
      clinicalPearls: [
        'A clear timeline can reveal exposure-disease relationships',
        'Symptom clusters often indicate specific syndromes or disease stages'
      ],
      commonMistakes: [
        'Creating confusing timelines',
        'Missing related events',
        'Not recognizing symptom clusters'
      ],
      cases: [
        {
          title: 'Building a Timeline',
          scenario: 'Patient with new rash and joint pain.',
          correctApproach: 'Construct timeline: "Day 1: Started new antibiotic. Day 3: Developed fever. Day 5: Rash appeared on trunk. Day 7: Joint pain began in knees. Day 10: Presenting today."',
          incorrectApproach: 'Document: "Rash, joint pain, fever after starting antibiotic."'
        }
      ]
    },
    {
      level: 4,
      title: 'Proficient',
      description: 'Advanced chronological analysis for diagnosis',
      content: [
        {
          heading: 'Incubation Periods',
          text: 'Use the time between exposure and symptom onset to identify possible causes. Different conditions have characteristic incubation periods that can support or rule out diagnoses.'
        },
        {
          heading: 'Symptom Latency',
          text: 'For conditions with delayed onset after exposure, document the latency period. This is crucial for occupational exposures, drug reactions, and infectious diseases.'
        },
        {
          heading: 'Chronopathology',
          text: 'Recognize diseases based on their characteristic time course. Some conditions have predictable patterns of progression that can be identified through careful chronology.'
        }
      ],
      keyPoints: [
        'Calculate incubation periods',
        'Document symptom latency',
        'Recognize disease time patterns',
        'Use chronology for differential diagnosis'
      ],
      clinicalPearls: [
        'Incubation periods can narrow differential diagnosis to specific pathogens',
        'The time course often distinguishes organic from functional disorders'
      ],
      commonMistakes: [
        'Not calculating incubation periods',
        'Missing characteristic time patterns',
        'Not using chronology to narrow differential'
      ],
      cases: [
        {
          title: 'Using Incubation Period',
          scenario: 'Patient with fever and diarrhea after travel.',
          correctApproach: 'Calculate incubation: "Returned from Mexico 10 days ago. Diarrhea started 2 days after return (8-day incubation). No fever initially, fever developed day 6. Pattern suggests bacterial gastroenteritis with incubation 6-72 hours for most bacteria."',
          incorrectApproach: 'Not connect timing to potential pathogens based on incubation.'
        }
      ]
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Mastery of chronology as a diagnostic tool',
      content: [
        {
          heading: 'Kinetic Diagnosis',
          text: 'Use the dynamic evolution of symptoms over time to make diagnoses. The pattern of change, the rate of progression, and the sequence of events can be more diagnostic than static findings.'
        },
        {
          heading: 'Timeline-Based Probability',
          text: 'Adjust pre-test probability based on timing. A symptom present for months has different diagnostic implications than the same symptom present for days.'
        },
        {
          heading: 'Predictive Chronology',
          text: 'Use the established timeline to predict disease course and response to treatment. The trajectory of illness often indicates prognosis and guides management decisions.'
        }
      ],
      keyPoints: [
        'Use dynamic symptom evolution',
        'Adjust probability based on timing',
        'Predict disease course from timeline',
        'Let chronology guide management'
      ],
      clinicalPearls: [
        'The rate of symptom progression often determines urgency more than the symptoms themselves',
        'Expert clinicians can often diagnose based primarily on the tempo of the illness'
      ],
      commonMistakes: [
        'Treating all timelines the same regardless of tempo',
        'Not using chronology for prognostication',
        'Missing urgency indicated by progression rate'
      ],
      cases: [
        {
          title: 'Kinetic Diagnosis',
          scenario: 'Patient with progressive weakness.',
          correctApproach: 'Use chronology: "Weakness began in toes 2 weeks ago, ascended to calves by day 5, thighs by day 7, now hands affected. Progressive ascending pattern over 14 days suggests Guillain-Barré syndrome. Rapid progression (days) distinguishes from chronic neuropathies."',
          incorrectApproach: 'Treat all weakness presentations the same without analyzing progression pattern.'
        }
      ]
    }
  ]
};
