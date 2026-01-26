// Using custom content structure for history-taking modules


export const systemSpecificROSContent = {
  title: 'System-Specific Review of Systems',
  category: 'History Taking',
  levels: [
    {
      level: 1,
      title: 'Novice',
      description: 'Introduction to organ system-based symptom review',
      content: [
        {
          heading: 'What is System-Specific ROS?',
          text: 'System-specific ROS involves asking about symptoms related to each body system individually. This ensures comprehensive coverage and helps identify problems in organs not directly related to the chief complaint.'
        },
        {
          heading: 'Major Body Systems',
          text: 'The major systems covered include: cardiovascular (chest pain, palpitations), respiratory (cough, shortness of breath), gastrointestinal (nausea, bowel changes), genitourinary (urinary changes), neurological (headache, weakness), and musculoskeletal (joint pain).'
        },
        {
          heading: 'Systematic Approach',
          text: 'Go through each system systematically. Ask about common symptoms for each system. Use clear, non-technical language that patients understand.'
        }
      ],
      keyPoints: [
        'Review each major body system',
        'Ask about common symptoms',
        'Use patient-friendly language',
        'Be systematic and comprehensive'
      ],
      clinicalPearls: [
        'Many serious conditions are discovered incidentally through a thorough ROS',
        'Patients often don\'t connect symptoms from different systems as being related'
      ],
      commonMistakes: [
        'Skipping body systems',
        'Using medical terminology',
        'Being inconsistent in what is asked'
      ],
      cases: [
        {
          title: 'Systematic ROS Approach',
          scenario: 'Conducting ROS on a new patient.',
          correctApproach: 'Systematically go through systems: "Any chest pain, breathing problems, stomach issues, urinary changes, headaches, or joint pain?"',
          incorrectApproach: 'Randomly ask about various symptoms without structure.'
        }
      ]
    },
    {
      level: 2,
      title: 'Advanced Beginner',
      description: 'Key symptoms for each body system',
      content: [
        {
          heading: 'Cardiovascular Symptoms',
          text: 'Ask about chest pain/discomfort, palpitations, shortness of breath with activity, leg swelling, and fainting. These are the most significant cardiovascular symptoms.'
        },
        {
          heading: 'Respiratory Symptoms',
          text: 'Inquire about cough, shortness of breath, wheezing, and hemoptysis (coughing up blood). Ask about duration and triggers for respiratory symptoms.'
        },
        {
          heading: 'Gastrointestinal Symptoms',
          text: 'Cover difficulty swallowing, heartburn, nausea, vomiting, abdominal pain, changes in bowel movements, rectal bleeding, and jaundice.'
        }
      ],
      keyPoints: [
        'Memorize key symptoms per system',
        'Focus on most significant symptoms',
        'Cover bleeding symptoms specifically',
        'Ask about functional changes'
      ],
      clinicalPearls: [
        'Bleeding symptoms always warrant specific questioning in affected systems',
        'Functional changes (dysphagia, dyspnea on exertion) often indicate significant disease'
      ],
      commonMistakes: [
        'Asking about too many minor symptoms',
        'Missing key symptoms',
        'Not asking about bleeding'
      ],
      cases: [
        {
          title: 'Cardiovascular ROS',
          scenario: 'Screening a middle-aged patient for cardiovascular symptoms.',
          correctApproach: 'Ask key questions: "Any chest pain or discomfort? Heart palpitations or racing heart? Shortness of breath when active? Swelling in your legs? Any fainting or near-fainting?"',
          incorrectApproach: 'Ask "Any heart problems?" without specific symptoms.'
        }
      ]
    },
    {
      level: 3,
      title: 'Competent',
      description: 'Comprehensive system-specific ROS',
      content: [
        {
          heading: 'Complete System Coverage',
          text: 'Comprehensive ROS includes: Constitutional (general), Eyes (vision changes), ENT (hearing, sore throat), Cardiovascular, Respiratory, Gastrointestinal, Genitourinary, Musculoskeletal, Neurological/Psychiatric, Skin (rashes, changes), Endocrine (heat/cold intolerance), Hematologic/ Lymphatic (bruising, swollen nodes).'
        },
        {
          heading: 'System-Specific Red Flags',
          text: 'Each system has red flag symptoms requiring urgent attention: Cardiovascular—chest pain with exertion; Respiratory—hemoptysis; GI—melena (dark stools); Neurological—sudden weakness; Skin—changing moles.'
        },
        {
          heading: 'Positive vs Negative ROS',
          text: 'Document both positive findings (symptoms present) and pertinent negatives (absence of expected symptoms). Pertinent negatives help rule out diagnoses.'
        }
      ],
      keyPoints: [
        'Cover all major body systems',
        'Know red flags for each system',
        'Document pertinent negatives',
        'Be thorough but efficient'
      ],
      clinicalPearls: [
        'The absence of symptoms can be as diagnostic as their presence',
        'Red flags in any system require immediate follow-up regardless of chief complaint'
      ],
      commonMistakes: [
        'Missing entire body systems',
        'Not documenting pertinent negatives',
        'Overlooking red flag symptoms'
      ],
      cases: [
        {
          title: 'Complete ROS with Pertinent Negatives',
          scenario: 'Patient presents with headache.',
          correctApproach: 'Include pertinent negatives: "Headache for 3 days. No fever, no neck stiffness, no vision changes, no neurological symptoms. No recent head trauma. Denies chest pain, shortness of breath, abdominal pain, or other systemic symptoms."',
          incorrectApproach: 'Only document positive headache finding.'
        }
      ]
    },
    {
      level: 4,
      title: 'Proficient',
      description: 'Advanced ROS interpretation and cross-system connections',
      content: [
        {
          heading: 'Cross-System Connections',
          text: 'Recognize how symptoms in different systems may be related. Shortness of breath + ankle swelling suggests heart failure. Joint pain + rash + fever suggests autoimmune disease. Fatigue + weight gain + cold intolerance suggests hypothyroidism.'
        },
        {
          heading: 'System Clusters',
          text: 'Identify symptom clusters across systems that define syndromes. Metabolic syndrome (obesity, hypertension, diabetes). CREST syndrome (calcinosis, Raynaud\'s, esophageal dysmotility, sclerodactyly, telangiectasia).'
        },
        {
          heading: 'Differential-Guided ROS',
          text: 'Use the ROS to test diagnostic hypotheses generated from the HPI. Ask about symptoms that would support or rule out specific diagnoses across multiple systems.'
        }
      ],
      keyPoints: [
        'Recognize cross-system symptom patterns',
        'Identify multi-system syndromes',
        'Use ROS for differential diagnosis',
        'Connect findings across systems'
      ],
      clinicalPearls: [
        'Multi-system involvement often points to specific categories of disease: autoimmune, endocrine, metastatic, infectious',
        'The ROS is an efficient way to test multiple diagnostic hypotheses simultaneously'
      ],
      commonMistakes: [
        'Treating each system in isolation',
        'Missing cross-system patterns',
        'Not using ROS for hypothesis testing'
      ],
      cases: [
        {
          title: 'Cross-System Pattern Recognition',
          scenario: 'Patient reports fatigue, weight gain, and constipation.',
          correctApproach: 'Recognize pattern: "Hypothyroidism can explain fatigue (constitutional), weight gain (endocrine/metabolic), and constipation (gastrointestinal). Check TSH."',
          incorrectApproach: 'Address each symptom separately without recognizing unifying diagnosis.'
        }
      ]
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Mastery of ROS as a diagnostic tool',
      content: [
        {
          heading: 'Hypothesis-Driven ROS',
          text: 'Design ROS questions based on diagnostic hypotheses generated from the chief complaint and HPI. Each question should help rule in or rule out specific conditions. This transforms ROS from a checklist into a diagnostic tool.'
        },
        {
          heading: 'Risk-Stratified ROS',
          text: 'Adapt ROS depth based on patient risk factors. Patients with high risk for cardiovascular disease get more detailed cardiovascular ROS. Smokers get detailed respiratory ROS. Family history guides targeted questioning.'
        },
        {
          heading: 'Efficiency Mastery',
          text: 'Group related symptoms across systems. Use compound questions efficiently. Recognize when a comprehensive ROS is needed versus when a targeted ROS suffices. Maximize diagnostic yield per question.'
        }
      ],
      keyPoints: [
        'Design hypothesis-driven ROS questions',
        'Adapt ROS to patient risk factors',
        'Maximize efficiency through grouping',
        'Use ROS as a primary diagnostic tool'
      ],
      clinicalPearls: [
        'An expert clinician can often narrow a differential diagnosis significantly through efficient ROS alone',
        'The best ROS questions serve multiple purposes: screening, hypothesis testing, and patient education'
      ],
      commonMistakes: [
        'Using ROS as a mindless checklist',
        'Not adapting to patient-specific risks',
        'Asking low-yield questions'
      ],
      cases: [
        {
          title: 'Hypothesis-Driven ROS',
          scenario: '65-year-old smoker presents with chronic cough.',
          correctApproach: 'Generate hypotheses (COPD, lung cancer, TB, CHF) and target ROS: "Any unintentional weight loss? Night sweats? Hemoptysis? Leg swelling? Chest pain? Fever?" Each question tests specific diagnoses.',
          incorrectApproach: 'Go through standard ROS checklist without tailoring to likely diagnoses.'
        }
      ]
    }
  ]
};
