// Using custom content structure for history-taking modules


export const negativeFindingsROSContent = {
  title: 'Negative Findings in Review of Systems',
  category: 'History Taking',
  levels: [
    {
      level: 1,
      title: 'Novice',
      description: 'Understanding the importance of negative ROS findings',
      content: [
        {
          heading: 'What are Negative Findings?',
          text: 'Negative findings are symptoms that the patient denies having when asked. When a patient says "no" to a symptom question, that negative answer provides valuable clinical information.'
        },
        {
          heading: 'Documenting Negatives',
          text: 'Document negative findings when they are relevant to the chief complaint or differential diagnosis. Use phrases like "patient denies," "no reported," or "negative for."'
        },
        {
          heading: 'Why Negatives Matter',
          text: 'Negative findings help rule out conditions. If a patient doesn\'t have a symptom that\'s typical for a condition, that condition becomes less likely. This is called ruling out through history.'
        }
      ],
      keyPoints: [
        'Negative findings are symptoms patient denies',
        'Document relevant negatives',
        'Use negatives to rule out conditions',
        'Not all negatives need documentation'
      ],
      clinicalPearls: [
        'The absence of expected symptoms can be as diagnostic as their presence',
        'Negative findings increase confidence in a diagnosis'
      ],
      commonMistakes: [
        'Documenting every negative answer',
        'Not documenting pertinent negatives',
        'Failing to ask about important symptoms'
      ],
      cases: [
        {
          title: 'Documenting Pertinent Negatives',
          scenario: 'Patient presents with headache.',
          correctApproach: 'Document pertinent negatives: "No fever, no neck stiffness, no vision changes, no neurological symptoms."',
          incorrectApproach: 'Only document positive findings without negatives.'
        }
      ]
    },
    {
      level: 2,
      title: 'Advanced Beginner',
      description: 'Identifying pertinent negatives',
      content: [
        {
          heading: 'Pertinent Negatives',
          text: 'Pertinent negatives are symptoms that, if present, would change your diagnostic thinking. They are the absence of symptoms expected for a condition you\'re considering.'
        },
        {
          heading: 'Differential-Guided Negatives',
          text: 'Use your differential diagnosis to guide which negatives to document. For each potential diagnosis, ask: "What symptom would make this more likely?" If absent, document as a pertinent negative.'
        },
        {
          heading: 'Common Pertinent Negatives',
          text: 'For chest pain: no radiation, no diaphoresis, no nausea. For headache: no fever, no stiff neck, no vision changes. For abdominal pain: no fever, no vomiting, no bloody stools.'
        }
      ],
      keyPoints: [
        'Identify pertinent negatives',
        'Use differential diagnosis to guide',
        'Document absence of expected symptoms',
        'Focus on diagnostically useful negatives'
      ],
      clinicalPearls: [
        'A well-chosen pertinent negative can rule out a diagnosis as effectively as a positive finding rules it in',
        'The value of a negative depends on what you\'re trying to rule out'
      ],
      commonMistakes: [
        'Documenting too many negatives',
        'Missing pertinent negatives',
        'Not connecting negatives to differential'
      ],
      cases: [
        {
          title: 'Differential-Guided Negatives',
          scenario: 'Patient with acute chest pain. Considering cardiac, pulmonary, and GI causes.',
          correctApproach: 'Document pertinent negatives for each: "No radiation to arm (cardiac less likely), no pleuritic pain (pulmonary less likely), no burning after meals (GERD less likely)."',
          incorrectApproach: 'Document generic negatives without diagnostic purpose.'
        }
      ]
    },
    {
      level: 3,
      title: 'Competent',
      description: 'Strategic use of negative findings',
      content: [
        {
          heading: 'Ruling Out Diagnoses',
          text: 'Use negative findings strategically to rule out conditions. A patient with headache but no fever or stiff neck makes meningitis much less likely. This is the power of pertinent negatives.'
        },
        {
          heading: 'Likelihood Ratios for Negatives',
          text: 'Understand that some negative findings have high diagnostic value. A negative finding with a high negative likelihood ratio significantly reduces the probability of disease.'
        },
        {
          heading: 'System-Based Negatives',
          text: 'Document negative findings systematically when relevant to the case. "Respiratory: no cough, no shortness of breath, no wheezing. Cardiovascular: no chest pain, no palpitations, no leg swelling."'
        }
      ],
      keyPoints: [
        'Use negatives to rule out diagnoses',
        'Recognize high-value negatives',
        'Document negatives systematically',
        'Understand negative likelihood ratios'
      ],
      clinicalPearls: [
        'Some symptoms are so sensitive that their absence effectively rules out a condition (SnNout)',
        'High-quality negative findings are essential for diagnostic confidence'
      ],
      commonMistakes: [
        'Not recognizing high-value negatives',
        'Being vague about what was asked',
        'Missing system-based negatives'
      ],
      cases: [
        {
          title: 'High-Value Negative Finding',
          scenario: 'Patient presents with possible pulmonary embolism.',
          correctApproach: 'Document high-value negatives: "No chest pain, no shortness of breath at rest, no hemoptysis. Well\'s criteria low risk."',
          incorrectApproach: 'Document "no respiratory complaints" without specifics.'
        }
      ]
    },
    {
      level: 4,
      title: 'Proficient',
      description: 'Advanced interpretation of negative findings',
      content: [
        {
          heading: 'Diagnostic Confidence',
          text: 'Use negative findings to build diagnostic confidence. As you document more pertinent negatives for alternative diagnoses, your confidence in the leading diagnosis increases. This is diagnostic triangulation.'
        },
        {
          heading: 'Disease Exclusion',
          text: 'Some diseases can be effectively excluded by history alone when key symptoms are absent. Migraine without aura is unlikely if headache is bilateral and not throbbing. Pneumonia unlikely without cough or fever.'
        },
        {
          heading: 'Red Flag Exclusion',
          text: 'Documenting the absence of red flags is crucial for safe management. "No thunderclap onset, no neurological deficits, no papilledema" for headache helps safely manage without imaging in many cases.'
        }
      ],
      keyPoints: [
        'Use negatives for diagnostic confidence',
        'Exclude diseases by history when possible',
        'Document red flag absence for safety',
        'Build confidence through negatives'
      ],
      clinicalPearls: [
        'The absence of red flags is often the key to safe, conservative management',
        'Expert clinicians rule out more diagnoses than they rule in'
      ],
      commonMistakes: [
        'Not using negatives to build confidence',
        'Missing red flag exclusions',
        'Ordering tests when history could exclude'
      ],
      cases: [
        {
          title: 'Red Flag Exclusion',
          scenario: 'Patient with acute low back pain.',
          correctApproach: 'Document red flag exclusion: "No trauma, no fever, no weight loss, no bowel/bladder incontinence, no night pain. Red flags absent, conservative management appropriate."',
          incorrectApproach: 'Order imaging without documenting absence of red flags.'
        }
      ]
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Mastery of negative findings in clinical reasoning',
      content: [
        {
          heading: 'Bayesian Reasoning with Negatives',
          text: 'Apply Bayesian reasoning using negative findings. Each pertinent negative reduces the post-test probability of specific diagnoses. High-sensitivity symptoms with negative results have the greatest probability-shifting power.'
        },
        {
          heading: 'Efficient Exclusion',
          text: 'Design history questions to maximize efficient exclusion. Ask the most sensitive questions first—symptoms that if absent, most effectively rule out dangerous conditions. This is the art of diagnostic efficiency.'
        },
        {
          heading: 'Thresholds for Action',
          text: 'Use negative findings to establish thresholds for action. When are negatives sufficient to avoid testing? When do negatives provide enough reassurance for conservative management? This requires understanding disease prevalence and test characteristics.'
        }
      ],
      keyPoints: [
        'Apply Bayesian reasoning with negatives',
        'Design efficient exclusion questions',
        'Set action thresholds based on negatives',
        'Master diagnostic efficiency'
      ],
      clinicalPearls: [
        'Expert clinicians can often exclude more diagnoses through history than many diagnostic tests',
        'The most skillful diagnostic move is often knowing when not to test based on negative findings'
      ],
      commonMistakes: [
        'Not applying Bayesian reasoning',
        'Testing when negatives sufficient for exclusion',
        'Missing efficient exclusion strategies'
      ],
      cases: [
        {
          title: 'Bayesian Exclusion',
          scenario: 'Child with possible acute appendicitis.',
          correctApproach: 'Apply Bayesian reasoning: "Pre-test probability ~30%. No migration of pain (negative LR 0.3), no fever (negative LR 0.4), normal appetite (negative LR 0.4). Post-test probability now <5%. Observe rather than immediate imaging."',
          incorrectApproach: 'Proceed to imaging without using negative findings to reduce probability.'
        }
      ]
    }
  ]
};
