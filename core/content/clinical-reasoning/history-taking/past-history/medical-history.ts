// Using custom content structure for history-taking modules


export const medicalHistoryContent = {
  title: 'Medical History',
  category: 'History Taking',
  levels: [
    {
      level: 1,
      title: 'Novice',
      description: 'Introduction to documenting past medical history',
      content: [
        {
          heading: 'What is Past Medical History?',
          text: 'Past Medical History (PMH) includes all previously diagnosed medical conditions, chronic illnesses, and significant health events. It provides context for the current problem and guides management decisions.'
        },
        {
          heading: 'Basic Documentation',
          text: 'Document each condition with the year of diagnosis if known. Include both active conditions and those that have resolved. Common conditions to ask about: hypertension, diabetes, asthma, heart disease, cancer.'
        },
        {
          heading: 'Why It Matters',
          text: 'Past conditions affect current health in many ways. They can cause symptoms, influence treatment options, modify diagnostic likelihood, and require ongoing management.'
        }
      ],
      keyPoints: [
        'Document all diagnosed conditions',
        'Include year of diagnosis when possible',
        'Note both active and resolved conditions',
        'Ask about common chronic conditions'
      ],
      clinicalPearls: [
        'Past medical history often provides the key to understanding current symptoms',
        'A condition may have resolved but still influence current health'
      ],
      commonMistakes: [
        'Not asking about specific conditions',
        'Missing resolved conditions',
        'Not recording dates of diagnosis'
      ],
      cases: [
        {
          title: 'Basic PMH Documentation',
          scenario: 'New patient visit.',
          correctApproach: 'Ask "Do you have any medical conditions like high blood pressure, diabetes, asthma, heart problems, or cancer?" Document each condition with diagnosis year.',
          incorrectApproach: 'Ask "Any medical problems?" without specific prompting.'
        }
      ]
    },
    {
      level: 2,
      title: 'Advanced Beginner',
      description: 'Comprehensive medical history taking',
      content: [
        {
          heading: 'Organ System Approach',
          text: 'Use an organ system approach to ensure completeness. Cardiovascular (heart attack, heart failure, arrhythmias), Pulmonary (asthma, COPD, sleep apnea), Endocrine (diabetes, thyroid disorders), Renal (kidney disease, stones), Neurologic (stroke, seizures), Hematologic (anemia, clotting disorders).'
        },
        {
          heading: 'Condition Severity',
          text: 'For each condition, establish severity. Is it well-controlled or poorly controlled? How often does it cause symptoms? Has it required hospitalization or specialist care?'
        },
        {
          heading: 'Condition Status',
          text: 'Clarify if each condition is active, in remission, or resolved. Active conditions need ongoing attention. Remitted conditions may recur. Resolved conditions may have sequelae.'
        }
      ],
      keyPoints: [
        'Use organ system approach',
        'Assess condition severity',
        'Clarify active versus resolved status',
        'Document control level for chronic diseases'
      ],
      clinicalPearls: [
        'The same diagnosis can have very different implications depending on severity and control',
        'Patients often don\'t volunteer conditions they consider "under control"'
      ],
      commonMistakes: [
        'Not clarifying severity',
        'Assuming conditions are active without asking',
        'Missing organ system conditions'
      ],
      cases: [
        {
          title: 'Assessing Condition Severity',
          scenario: 'Patient reports diabetes.',
          correctApproach: 'Ask "What type of diabetes? How long? How well controlled? What\'s your last A1C? Any complications?"',
          incorrectApproach: 'Document "diabetes" without assessing severity or control.'
        }
      ]
    },
    {
      level: 3,
      title: 'Competent',
      description: 'Detailed medical history with context',
      content: [
        {
          heading: 'Complications and Sequelae',
          text: 'Document complications of chronic conditions. Diabetes: retinopathy, nephropathy, neuropathy. Hypertension: heart disease, kidney disease, stroke. Heart failure: arrhythmias, kidney dysfunction.'
        },
        {
          heading: 'Prior Hospitalizations',
          text: 'Ask about all previous hospitalizations and their causes. Hospitalizations indicate disease severity and may have long-term consequences. Document year and reason for each admission.'
        },
        {
          heading: 'Specialist Involvement',
          text: 'Document which specialists care for which conditions. This indicates condition complexity and provides referral sources if needed. Cardiology, nephrology, endocrinology, neurology, etc.'
        }
      ],
      keyPoints: [
        'Document condition complications',
        'Ask about all hospitalizations',
        'Record specialist involvement',
        'Note procedures related to conditions'
      ],
      clinicalPearls: [
        'The presence of complications dramatically changes management of chronic disease',
        'Hospitalizations often represent turning points in disease progression'
      ],
      commonMistakes: [
        'Missing complications',
        'Not asking about hospitalizations',
        'Forgetting specialist involvement'
      ],
      cases: [
        {
          title: 'Diabetes Complications',
          scenario: 'Patient with 15-year history of type 2 diabetes.',
          correctApproach: 'Ask about complications: "Any eye problems (retinopathy)? Kidney issues (nephropathy)? Numbness or tingling in feet (neuropathy)? Foot ulcers?"',
          incorrectApproach: 'Document "diabetes" without complication assessment.'
        }
      ]
    },
    {
      level: 4,
      title: 'Proficient',
      description: 'Advanced medical history interpretation',
      content: [
        {
          heading: 'Disease Connections',
          text: 'Recognize connections between past conditions and current symptoms. Prior rheumatic fever may explain new murmur. History of Kawasaki disease may explain coronary issues. Gallstones may cause pancreatitis.'
        },
        {
          heading: 'Risk Accumulation',
          text: 'Understand how multiple conditions interact. Diabetes + hypertension + hyperlipidemia = metabolic syndrome with high cardiovascular risk. Each additional condition compounds risk.'
        },
        {
          heading: 'Latent Effects',
          text: 'Consider long-term effects of past conditions. Cancer treatment may cause cardiac or pulmonary problems years later. Severe infections may have sequelae. Trauma may cause chronic pain.'
        }
      ],
      keyPoints: [
        'Connect past conditions to current symptoms',
        'Recognize risk accumulation',
        'Consider latent disease effects',
        'Understand disease interactions'
      ],
      clinicalPearls: [
        'Many current problems have their roots in past medical events',
        'The cumulative burden of disease often predicts outcomes better than any single condition'
      ],
      commonMistakes: [
        'Missing connections to current symptoms',
        'Not recognizing risk accumulation',
        'Forgetting latent effects'
      ],
      cases: [
        {
          title: 'Connecting Past to Present',
          scenario: 'Patient presents with joint pain. History includes psoriasis.',
          correctApproach: 'Recognize connection: "Psoriatic arthritis is a known complication of psoriasis. This joint pain may represent psoriatic arthritis rather than osteoarthritis."',
          incorrectApproach: 'Treat joint pain without considering psoriasis connection.'
        }
      ]
    },
    {
      level: 5,
      title: 'Expert',
      description: 'Mastery of medical history in clinical context',
      content: [
        {
          heading: 'Historical Diagnosis',
          text: 'Use the pattern of past medical history to make diagnoses. The constellation of conditions can suggest underlying causes. Multiple autoimmune conditions suggests immunologic dysregulation. Early cardiovascular disease suggests genetic predisposition.'
        },
        {
          heading: 'Predictive Value of PMH',
          text: 'Past medical history predicts future health. The conditions a patient has already developed indicate their predispositions. Use PMH to anticipate future problems and guide preventive care.'
        },
        {
          heading: 'Treatment Implications',
          text: 'Past conditions influence treatment options. Prior conditions may contraindicate certain treatments. Prior medication reactions may limit options. Past treatment responses inform current choices.'
        }
      ],
      keyPoints: [
        'Diagnose from PMH patterns',
        'Use PMH to anticipate future issues',
        'Consider PMH for treatment decisions',
        'Recognize predisposition patterns'
      ],
      clinicalPearls: [
        'A patient\'s past medical history is often their best predictor of future health',
        'Expert clinicians use PMH to anticipate complications before they occur'
      ],
      commonMistakes: [
        'Not recognizing diagnostic patterns in PMH',
        'Failing to anticipate future risks',
        'Not considering PMH in treatment decisions'
      ],
      cases: [
        {
          title: 'Pattern Recognition in PMH',
          scenario: 'Patient has history of: autoimmune thyroid disease, pernicious anemia, vitiligo. Now presents with new fatigue.',
          correctApproach: 'Recognize pattern: "Multiple autoimmune conditions suggests autoimmune polyglandular syndrome. New fatigue could indicate development of another autoimmune condition such as adrenal insufficiency. Check cortisol and ACTH."',
          incorrectApproach: 'Evaluate fatigue without considering autoimmune pattern.'
        }
      ]
    }
  ]
};
