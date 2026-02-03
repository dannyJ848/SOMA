// Using custom content structure for history-taking modules


export const positiveFindingsROSContent = {
  title: 'Positive Findings in Review of Systems',
  category: 'History Taking',
  levels: [
    {
      level: 1,
      title: 'Novice',
      description: 'Identifying and documenting positive ROS findings',
      content: [
        {
          heading: 'What are Positive Findings?',
          text: 'Positive findings in the ROS are symptoms that the patient reports experiencing. These are the "yes" answers when asking about symptoms. They require documentation and often further investigation.'
        },
        {
          heading: 'Documentation Basics',
          text: 'Document positive findings clearly with relevant details. Include the symptom, duration, severity, and any associated characteristics. Use the patient\'s words when helpful.'
        },
        {
          heading: 'Follow-Up Questions',
          text: 'Every positive finding should prompt follow-up questions. When a patient reports a symptom, you need to understand more about it before moving on.'
        }
      ],
      keyPoints: [
        'Positive findings are symptoms patient reports',
        'Document with relevant details',
        'Always follow up on positive findings',
        'Include duration and basic characteristics'
      ],
      clinicalPearls: [
        'A positive finding is often the starting point for discovering significant disease',
        'What seems minor may be significant once explored'
      ],
      commonMistakes: [
        'Not following up on positive findings',
        'Documenting without sufficient detail',
        'Dismissing symptoms as "minor"'
      ],
      cases: [
        {
          title: 'Following Up Positive Findings',
          scenario: 'Patient reports "yes" to chest pain during ROS.',
          correctApproach: 'Immediately follow up: "Tell me about this chest pain. When does it occur? What does it feel like? How long has it been happening?"',
          incorrectApproach: 'Document "chest pain" and continue ROS checklist.'
        }
      ]
    },
    {
      level: 2,
      title: 'Advanced Beginner',
      description: 'Characterizing positive ROS findings',
      content: [
        {
          heading: 'Characterizing Symptoms',
          text: 'For each positive finding, establish basic characteristics: onset, duration, frequency, severity, location, associated symptoms, and aggravating/relieving factors.'
        },
        {
          heading: 'Temporal Context',
          text: 'Place positive findings in temporal context. When did the symptom start relative to the chief complaint? Is it new, chronic, or recurrent? This helps determine relevance.'
        },
        {
          heading: 'Establishing Relevance',
          text: 'Determine if the positive finding is related to the chief complaint, a separate chronic issue, or an incidental finding. This guides how much detail is needed.'
        }
      ],
      keyPoints: [
        'Characterize each positive symptom',
        'Establish temporal context',
        'Determine relevance to chief complaint',
        'Document chronic versus new symptoms'
      ],
      clinicalPearls: [
        'Chronic stable symptoms need less detail than new or changing symptoms',
        'Timing often reveals whether symptoms are related'
      ],
      commonMistakes: [
        'Not establishing temporal context',
        'Not differentiating new from chronic',
        'Failing to assess relevance'
      ],
      cases: [
        {
          title: 'Establishing Context',
          scenario: 'Patient reports joint pain during ROS for a respiratory visit.',
          correctApproach: 'Ask "Is this joint pain new or something you\'ve had for a while? How does it relate to your breathing issues?"',
          incorrectApproach: 'Document joint pain without context.'
        }
      ]
    },
    {
      level: 3,
      title: 'Competent',
      description: 'Prioritizing and investigating positive findings',
      content: [
        {
          heading: 'Priority Assessment',
          text: 'Not all positive findings are equal. Prioritize based on severity, urgency, and potential relationship to serious disease. Red flags take precedence over minor complaints.'
        },
        {
          heading: 'Cluster Recognition',
          text: 'Look for clusters of positive findings that suggest a specific diagnosis or syndrome. Multiple related symptoms across systems can point to a unifying condition.'
        },
        {
          heading: 'Appropriate Depth',
          text: 'Adjust the depth of investigation based on the potential importance of the finding. Minor chronic issues need brief documentation. New or concerning symptoms need comprehensive evaluation.'
        }
      ],
      keyPoints: [
        'Prioritize positive findings',
        'Recognize symptom clusters',
        'Adjust depth based on importance',
        'Identify red flags quickly'
      ],
      clinicalPearls: [
        'Positive findings in multiple systems often indicate systemic disease',
        'New symptoms in a patient with known disease may indicate progression or complications'
      ],
      commonMistakes: [
        'Treating all positive findings equally',
        'Missing symptom clusters',
        'Not recognizing red flags'
      ],
      cases: [
        {
          title: 'Prioritizing Findings',
          scenario: 'During ROS, patient reports: (1) dry skin for years, (2) new chest pain, (3) occasional headaches.',
          correctApproach: 'Prioritize: Chest pain needs immediate detailed evaluation (potentially urgent). Headaches need characterization. Dry skin needs brief documentation.',
          incorrectApproach: 'Spend equal time on all three findings.'
        }
      ]
    },
    {
      level: 4,
      title: 'Proficient',
      description: 'Advanced interpretation of positive ROS findings',
      content: [
        {
          heading: 'Diagnostic Significance',
          text: 'Evaluate the diagnostic significance of positive findings. Which findings are pathognomonic (diagnostic) for specific conditions? Which are non-specific but concerning? Which are likely benign?'
        },
        {
          heading: 'Pattern Recognition',
          text: 'Recognize patterns of positive findings that define clinical syndromes. Positivity in specific combinations across systems can establish diagnoses that individual symptoms cannot.'
        },
        {
          heading: 'Likelihood Ratios',
          text: 'Understand how different symptoms change the probability of disease. Some positive findings greatly increase likelihood of specific conditions, while others have minimal predictive value.'
        }
      ],
      keyPoints: [
        'Assess diagnostic significance',
        'Recognize clinical syndromes',
        'Understand symptom predictive value',
        'Use findings to modify disease probability'
      ],
      clinicalPearls: [
        'Some symptoms have high likelihood ratios for specific conditions (e.g., fever and night sweats for TB)',
        'The pattern of symptoms is often more diagnostic than individual findings'
      ],
      commonMistakes: [
        'Over-interpreting non-specific findings',
        'Missing high-predictive-value symptoms',
        'Not recognizing classic syndromes'
      ],
      cases: [
        {
          title: 'Pattern Recognition',
          scenario: 'ROS positive findings: fatigue, weight loss, heat intolerance, palpitations, tremor.',
          correctApproach: 'Recognize hyperthyroidism pattern: "This constellation is classic for hyperthyroidism. Check TSH and free T4."',
          incorrectApproach: 'Treat each symptom as separate issue.'
        }
      ]
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Mastery of positive findings in clinical context',
      content: [
        {
          heading: 'Bayesian Integration',
          text: 'Use positive ROS findings to update pre-test probability in a Bayesian framework. Each finding modifies the likelihood of different diagnoses based on its sensitivity and specificity for those conditions.'
        },
        {
          heading: 'Synthesis with Other Data',
          text: 'Integrate positive ROS findings with history, physical examination, and laboratory data. The ROS findings should either confirm your diagnostic hypotheses or prompt reconsideration.'
        },
        {
          heading: 'Clinical Thresholds',
          text: 'Use positive findings to determine clinical thresholds for testing and treatment. When do positive findings warrant investigation? When is watchful waiting appropriate? When is treatment indicated without testing?'
        }
      ],
      keyPoints: [
        'Use Bayesian reasoning with findings',
        'Integrate ROS with all clinical data',
        'Set appropriate testing thresholds',
        'Let findings guide diagnostic confidence'
      ],
      clinicalPearls: [
        'Expert clinicians continuously update their diagnostic probabilities as each ROS question is answered',
        'A few well-chosen questions yielding positive findings can be as diagnostic as extensive testing'
      ],
      commonMistakes: [
        'Not using findings to update probabilities',
        'Treating ROS in isolation from other data',
        'Over-testing based on low-yield findings'
      ],
      cases: [
        {
          title: 'Bayesian Integration',
          scenario: '45-year-old smoker presents with cough. ROS reveals hemoptysis and 20 lb weight loss.',
          correctApproach: 'Apply Bayesian reasoning: "Pre-test probability of lung cancer in 45-year-old smoker is moderate. Hemoptysis increases likelihood significantly. Weight loss further increases probability. High enough to proceed directly to CT imaging rather than trial of other therapies."',
          incorrectApproach: 'Treat symptoms separately without integrating into diagnostic probability.'
        }
      ]
    }
  ]
};
