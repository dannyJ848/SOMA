// Using custom content structure for history-taking modules


export const historyPresentIllnessContent = {
  title: 'History of Present Illness',
  category: 'History Taking',
  levels: [
    {
      level: 1,
      title: 'Novice',
      description: 'Introduction to documenting the current medical problem',
      content: [
        {
          heading: 'What is HPI?',
          text: 'The History of Present Illness (HPI) is a detailed chronological account of the patient\'s current medical problem. It expands on the chief complaint to provide a complete picture of the illness from onset to the present.'
        },
        {
          heading: 'Starting Point',
          text: 'Begin with the onset of symptoms and progress chronologically to the present. Document when the problem started, how it has evolved, and the current status.'
        },
        {
          heading: 'Basic Components',
          text: 'Include the timing and sequence of events, any treatments tried, and the patient\'s current condition. This tells the story of the illness.'
        }
      ],
      keyPoints: [
        'Chronological narrative from onset to present',
        'Expand on the chief complaint',
        'Include treatments tried',
        'Document current status'
      ],
      clinicalPearls: [
        'A good HPI reads like a story with a clear beginning, middle, and current status',
        'The HPI should be detailed enough that another clinician could reconstruct the illness course'
      ],
      commonMistakes: [
        'Jumping between time periods',
        'Missing key events in the illness course',
        'Including information that belongs in other sections'
      ],
      cases: [
        {
          title: 'Basic HPI Structure',
          scenario: 'Patient presents with worsening cough for one week.',
          correctApproach: 'Document: "Patient developed cough 7 days ago after a cold. Initially dry, now productive of yellow sputum. No fever. Tried over-the-counter cough syrup with minimal improvement. Symptoms have worsened over past 2 days."',
          incorrectApproach: 'Document: "Cough for one week. Productive now. Tried syrup."'
        }
      ]
    },
    {
      level: 2,
      title: 'Advanced Beginner',
      description: 'Expanding the HPI with symptom evolution and context',
      content: [
        {
          heading: 'Symptom Progression',
          text: 'Document how symptoms have changed over time. Have they improved, worsened, or stayed the same? Have new symptoms appeared? Track the evolution of the illness.'
        },
        {
          heading: 'Interventions and Response',
          text: 'Record any treatments the patient has tried, including medications, home remedies, or previous medical care. Document the response to each intervention.'
        },
        {
          heading: 'Precipitating Factors',
          text: 'Identify events that may have triggered the illness. This could include trauma, stress, dietary changes, medication changes, or exposure to illness.'
        }
      ],
      keyPoints: [
        'Document symptom progression',
        'Record interventions and responses',
        'Identify precipitating factors',
        'Maintain chronological flow'
      ],
      clinicalPearls: [
        'The response to previous treatments often guides future management',
        'Precipitating factors can reveal the underlying cause'
      ],
      commonMistakes: [
        'Not documenting response to treatments',
        'Missing precipitating factors',
        'Losing chronological organization'
      ],
      cases: [
        {
          title: 'Documenting Progression',
          scenario: 'Patient with abdominal pain.',
          correctApproach: 'Document progression: "Pain began around umbilicus 2 days ago, migrated to right lower quadrant yesterday. Initially mild (3/10), now severe (8/10). Associated with nausea, vomiting yesterday. No bowel movement today."',
          incorrectApproach: 'Document: "Abdominal pain, nausea, vomiting, constipation present."'
        }
      ]
    },
    {
      level: 3,
      title: 'Competent',
      description: 'Comprehensive HPI with detail and context',
      content: [
        {
          heading: 'Quality HPI Components',
          text: 'A complete HPI includes: chronological symptom narrative, location, duration, character, aggravating/relieving factors, radiation, severity, timing, associated symptoms, and modifying factors.'
        },
        {
          heading: 'Contextual Information',
          text: 'Include relevant context about the patient\'s baseline. How does this illness compare to similar episodes in the past? What is the patient\'s usual health status?'
        },
        {
          heading: 'Negative Findings in HPI',
          text: 'Include pertinent negatives—symptoms that would be expected but are absent. These help rule out differential diagnoses.'
        }
      ],
      keyPoints: [
        'Include all HPI quality components',
        'Compare to baseline and past episodes',
        'Document pertinent negatives',
        'Maintain narrative flow'
      ],
      clinicalPearls: [
        'Pertinent negatives are as important as positive findings in narrowing differential diagnosis',
        'Comparison to past episodes helps distinguish recurrence from new problems'
      ],
      commonMistakes: [
        'Missing pertinent negatives',
        'Not comparing to baseline',
        'Including too many irrelevant details'
      ],
      cases: [
        {
          title: 'Including Pertinent Negatives',
          scenario: 'Patient presents with chest pain.',
          correctApproach: 'Include negatives: "Chest pressure, 8/10, radiates to left arm. Associated with diaphoresis and shortness of breath. No fever, no cough, pain worse with exertion. No history of similar pain. Denies chest trauma."',
          incorrectApproach: 'Only document positive findings without relevant negatives.'
        }
      ]
    },
    {
      level: 4,
      title: 'Proficient',
      description: 'Nuanced HPI with differential diagnosis integration',
      content: [
        {
          heading: 'Differential-Guided History',
          text: 'Shape the HPI to address your differential diagnosis. Include information that supports or rules out specific diagnoses. Each detail should serve a diagnostic purpose.'
        },
        {
          heading: 'Risk Factor Assessment',
          text: 'Integrate relevant risk factors into the HPI narrative. Age, comorbidities, medications, exposures, and family history can all modify pre-test probability.'
        },
        {
          heading: 'Red Flag Documentation',
          text: 'Explicitly document presence or absence of red flag symptoms. These are findings that suggest serious or life-threatening conditions requiring urgent attention.'
        }
      ],
      keyPoints: [
        'Guide history by differential diagnosis',
        'Integrate relevant risk factors',
        'Document red flag presence/absence',
        'Make every detail count diagnostically'
      ],
      clinicalPearls: [
        'A well-crafted HPI demonstrates clinical reasoning by including discriminating details',
        'Red flags must be systematically addressed for each presenting complaint'
      ],
      commonMistakes: [
        'Including information that doesn\'t change management',
        'Missing red flags for the condition',
        'Not connecting findings to diagnostic reasoning'
      ],
      cases: [
        {
          title: 'Differential-Guided HPI',
          scenario: 'Elderly patient with acute abdominal pain.',
          correctApproach: 'Address differentials: "Acute RLQ pain suggests appendicitis, but patient is 75 (atypical presentation common). No fever (unusual for appendicitis). No cardiac symptoms (reduces likelihood of referred cardiac pain). No vascular risk factors (reduces mesenteric ischemia likelihood)."',
          incorrectApproach: 'Document symptoms without connecting to diagnostic possibilities.'
        }
      ]
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Mastery of HPI as a clinical reasoning tool',
      content: [
        {
          heading: 'HPI as Clinical Narrative',
          text: 'Craft the HPI as a compelling clinical narrative that leads the reader to your assessment. Every element should build toward a logical conclusion about the diagnosis and severity.'
        },
        {
          heading: 'Temporal Pattern Recognition',
          text: 'Identify and document temporal patterns that indicate specific diagnoses. Patterns like episodic vs continuous, progressive vs stable, morning vs evening symptoms all have diagnostic significance.'
        },
        {
          heading: 'Synthesis of Information',
          text: 'Weave together symptom details, risk factors, red flags, and differential considerations into a cohesive narrative that demonstrates clinical reasoning and justifies the assessment and plan.'
        }
      ],
      keyPoints: [
        'Craft a compelling clinical narrative',
        'Recognize and document temporal patterns',
        'Synthesize information into cohesive story',
        'Demonstrate clinical reasoning in documentation'
      ],
      clinicalPearls: [
        'The HPI is often the most important part of the medical record for diagnosis',
        'Expert clinicians use the HPI to demonstrate their thinking process'
      ],
      commonMistakes: [
        'Letting the HPI become a list of facts without narrative',
        'Failing to synthesize information',
        'Not demonstrating clinical reasoning'
      ],
      cases: [
        {
          title: 'Expert HPI Narrative',
          scenario: '45-year-old man with acute chest pain.',
          correctApproach: 'Document: "This 45-year-old smoker presented with acute onset retrosternal chest pressure that began at rest 3 hours ago. Pain is constant, 8/10, radiates to left jaw and arm. Associated with diaphoresis and dyspnea. No fever, no pleuritic features, no reproducibility on palpation. Pattern and risk factors (age, smoking) are concerning for acute coronary syndrome. No prior similar episodes."',
          incorrectApproach: 'Document: "Patient has chest pain. Smoker. Pain started 3 hours ago at rest. 8/10 severity."'
        }
      ]
    }
  ]
};
