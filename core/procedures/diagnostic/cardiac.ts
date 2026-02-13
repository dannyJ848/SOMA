/**
 * Biological Self - Cardiac Diagnostic Procedures
 */

import { MedicalProcedure } from '../types';

export const cardiacProcedures: MedicalProcedure[] = [
  // ============================================================================
  // ELECTROCARDIOGRAM (ECG/EKG)
  // ============================================================================
  {
    id: 'electrocardiogram',
    name: 'Electrocardiogram (ECG/EKG)',
    alternativeNames: ['EKG', 'ECG', '12-Lead ECG', 'Electrocardiography'],
    category: 'diagnostic',
    subcategory: 'cardiac',
    bodySystem: 'Cardiovascular System',

    cptCodes: [
      {
        code: '93000',
        description: 'Electrocardiogram, routine ECG with at least 12 leads; with interpretation and report',
        relativeValueUnits: 0.70
      },
      {
        code: '93005',
        description: 'Electrocardiogram, routine ECG with at least 12 leads; tracing only, without interpretation',
        relativeValueUnits: 0.17
      },
      {
        code: '93010',
        description: 'Electrocardiogram, routine ECG with at least 12 leads; interpretation and report only',
        relativeValueUnits: 0.53
      }
    ],

    description: {
      simple: 'An ECG is a quick, painless test that records the electrical activity of your heart. Small sticky patches are placed on your chest, arms, and legs that detect the electrical signals each time your heart beats.',
      intermediate: 'An electrocardiogram records the electrical impulses that coordinate each heartbeat. The resulting waveform provides information about heart rhythm, rate, and can reveal evidence of heart attacks, arrhythmias, structural abnormalities, and other cardiac conditions.',
      technical: 'A 12-lead ECG provides a multi-dimensional view of cardiac electrical activity via surface electrodes. Standard leads include I, II, III, aVR, aVL, aVF (limb leads) and V1-V6 (precordial leads). Analysis includes assessment of rate, rhythm, axis, intervals (PR, QRS, QT), ST-T wave morphology, and chamber abnormalities.',
      pediatric: 'An ECG is like taking a picture of how your heart beats! The nurse puts stickers on your chest that connect to a machine. The machine draws squiggly lines that show your heartbeat. It does not hurt at all - it just feels like stickers on your skin.'
    },

    purpose: 'To record the electrical activity of the heart to detect arrhythmias, heart attacks, structural abnormalities, and other cardiac conditions.',

    overview: 'The ECG is one of the most frequently performed cardiac tests, providing rapid, non-invasive assessment of cardiac electrical function. First developed in 1903 by Willem Einthoven, it remains a cornerstone of cardiac diagnosis.',

    indications: [
      {
        condition: 'Chest pain',
        explanation: 'Can detect heart attack (myocardial infarction) or ischemia.',
        urgency: 'emergent'
      },
      {
        condition: 'Palpitations',
        explanation: 'Identifies rhythm abnormalities causing the sensation of irregular heartbeat.',
        urgency: 'urgent'
      },
      {
        condition: 'Shortness of breath',
        explanation: 'May reveal heart conditions causing breathing difficulty.',
        urgency: 'urgent'
      },
      {
        condition: 'Syncope (fainting)',
        explanation: 'Detects arrhythmias or conduction abnormalities.',
        urgency: 'urgent'
      },
      {
        condition: 'Pre-operative evaluation',
        explanation: 'Baseline cardiac assessment before surgery.',
        urgency: 'elective'
      },
      {
        condition: 'Medication monitoring',
        explanation: 'Some medications require ECG monitoring for effects on heart rhythm.',
        urgency: 'elective'
      },
      {
        condition: 'Routine health screening',
        explanation: 'Part of comprehensive cardiac evaluation.',
        urgency: 'elective'
      },
      {
        condition: 'Electrolyte abnormalities',
        explanation: 'Potassium and calcium levels affect ECG patterns.',
        urgency: 'urgent'
      }
    ],

    contraindications: {
      absolute: [],
      relative: [
        {
          condition: 'Severe skin conditions at electrode sites',
          reason: 'May prevent proper electrode contact.',
          workaround: 'Find areas of intact skin; use alternative electrode placement.'
        },
        {
          condition: 'Patient unable to remain still',
          reason: 'Movement creates artifact on the tracing.',
          workaround: 'Sedation if medically appropriate; wait for patient to calm.'
        }
      ]
    },

    setting: ['outpatient-clinic', 'hospital-outpatient', 'hospital-inpatient', 'emergency-department', 'intensive-care', 'operating-room', 'bedside'],

    anesthesiaOptions: [
      {
        type: 'none',
        description: 'ECG is completely non-invasive and painless.',
        typical: true
      }
    ],

    duration: {
      minimum: 5,
      typical: 10,
      maximum: 15,
      unit: 'minutes'
    },

    preparation: {
      daysBeforeInstructions: [],
      dayOfInstructions: [
        {
          timing: 'Before appointment',
          instruction: 'Avoid lotions or oils on chest and limbs.',
          rationale: 'Oils can interfere with electrode contact.',
          critical: false
        },
        {
          timing: 'Before appointment',
          instruction: 'Wear a two-piece outfit for easy chest access.',
          rationale: 'You will need to expose your chest for electrode placement.',
          critical: false
        }
      ],
      fastingRequired: false,
      medicationAdjustments: [],
      labsRequired: [],
      imagingRequired: [],
      consentRequired: false
    },

    procedureSteps: [
      {
        stepNumber: 1,
        phase: 'preparation',
        action: 'Patient preparation',
        detailedDescription: 'Patient removes clothing from waist up, puts on gown if preferred. Lies flat on examination table. Skin may be lightly abraded and cleaned for better electrode contact.',
        duration: '2 minutes',
        patientExperience: 'You will lie down on a table. The technician may wipe your chest with alcohol and lightly scrub spots where electrodes will go.',
        equipmentUsed: ['Alcohol swabs', 'Skin prep/abrasive pad']
      },
      {
        stepNumber: 2,
        phase: 'procedure',
        action: 'Limb electrode placement',
        detailedDescription: 'Four electrodes are placed on the limbs: one on each inner wrist (or upper arm) and one on each inner ankle (or lower leg). These record leads I, II, III, aVR, aVL, and aVF.',
        duration: '1 minute',
        patientExperience: 'Sticky patches are placed on your wrists and ankles. They feel like stickers.',
        equipmentUsed: ['Limb electrodes (4)']
      },
      {
        stepNumber: 3,
        phase: 'procedure',
        action: 'Precordial electrode placement',
        detailedDescription: 'Six electrodes are placed across the chest in specific positions: V1 (4th intercostal space, right sternal border), V2 (4th intercostal space, left sternal border), V4 (5th intercostal space, midclavicular line), V3 (between V2 and V4), V5 (anterior axillary line, same level as V4), V6 (mid-axillary line, same level as V4-V5).',
        duration: '2 minutes',
        patientExperience: 'Six more sticky patches are placed across your chest in a specific pattern.',
        criticalPoints: ['Proper placement essential for accurate interpretation'],
        equipmentUsed: ['Precordial electrodes (6)']
      },
      {
        stepNumber: 4,
        phase: 'procedure',
        action: 'Lead wire connection',
        detailedDescription: 'Lead wires from the ECG machine are connected to each electrode, color-coded for proper assignment.',
        duration: '1 minute',
        patientExperience: 'Wires are clipped to each sticker on your body.',
        equipmentUsed: ['ECG lead wires', 'ECG machine']
      },
      {
        stepNumber: 5,
        phase: 'procedure',
        action: 'Recording',
        detailedDescription: 'Patient is asked to lie still, breathe normally, and relax. The ECG machine records electrical activity for approximately 10 seconds, capturing multiple heartbeats in all 12 leads.',
        duration: '30 seconds',
        patientExperience: 'Lie very still and breathe normally. You will not feel anything. The machine prints out your heart rhythm.',
        criticalPoints: ['Patient must remain still to avoid motion artifact', 'Normal breathing only - no deep breaths']
      },
      {
        stepNumber: 6,
        phase: 'completion',
        action: 'Quality check and removal',
        detailedDescription: 'Technician reviews tracing for quality. If acceptable, electrodes are removed. If there is significant artifact, recording may be repeated.',
        duration: '2 minutes',
        patientExperience: 'The stickers are peeled off. There may be brief mild discomfort as adhesive is removed.',
        equipmentUsed: ['ECG printout']
      }
    ],

    riskLevel: 'minimal',

    complications: [
      {
        name: 'Skin irritation',
        description: 'Mild redness or irritation where electrodes were placed.',
        frequency: 'uncommon',
        frequencyPercent: '1-5%',
        severity: 'mild',
        prevention: ['Use hypoallergenic electrodes if sensitive skin', 'Gentle skin prep'],
        treatment: ['Irritation resolves on its own within hours', 'Moisturizing lotion can help'],
        warningSignsToReport: ['Persistent rash', 'Blistering', 'Signs of allergic reaction']
      },
      {
        name: 'Electrode adhesive allergy',
        description: 'Allergic reaction to electrode adhesive.',
        frequency: 'rare',
        frequencyPercent: '<1%',
        severity: 'mild',
        prevention: ['Inform staff of known adhesive allergies', 'Use alternative electrodes'],
        treatment: ['Remove electrodes', 'Topical antihistamine or hydrocortisone'],
        warningSignsToReport: ['Hives', 'Itching spreading beyond electrode sites', 'Difficulty breathing']
      }
    ],

    recovery: {
      immediateRecovery: 'No recovery needed. Resume all activities immediately.',
      returnToNormalActivities: 'Immediately after the test.',
      fullRecovery: 'Instant - the test has no lasting effects.',
      restrictions: [],
      followUpSchedule: [
        'Results often available immediately if physician is present',
        'Otherwise, results within 24 hours',
        'Follow up with ordering physician to discuss findings'
      ]
    },

    patientExperience: {
      beforeProcedure: [
        'You may feel anxious about what the test will show.',
        'The test is done in a private room or behind a curtain.',
        'You will need to expose your chest but will be draped for privacy.'
      ],
      duringProcedure: [
        'You feel nothing during the actual recording.',
        'The electrodes feel like small sticky patches.',
        'You must lie still for about 30 seconds during recording.',
        'The entire process takes 5-10 minutes.'
      ],
      immediatelyAfter: [
        'Electrode removal may pull slightly on skin/hair.',
        'You can get dressed immediately.',
        'There are no restrictions on activities.'
      ],
      daysAfter: [
        'No after-effects from the test itself.',
        'Any skin redness resolves within hours.',
        'You may feel anxious waiting for results.'
      ],
      sensationsToExpect: [
        'Cool, wet feeling when skin is prepped',
        'Mild stickiness of electrodes',
        'No sensation during recording',
        'Mild pulling when electrodes removed'
      ],
      painLevel: {
        during: 'Zero - the test is completely painless.',
        after: 'Zero - no after-effects.',
        managementOptions: ['No pain management needed']
      },
      emotionalConsiderations: [
        'Anxiety about heart problems is common',
        'The test itself cannot cause any heart problems',
        'Abnormal results do not always mean serious problems',
        'Ask your provider to explain results to you'
      ]
    },

    anatomyInvolved: [
      {
        structure: 'Sinoatrial (SA) Node',
        description: 'The heart\'s natural pacemaker, located in the right atrium.',
        relevance: 'Generates the electrical impulse that starts each heartbeat. Seen as the P wave on ECG.',
        visualizationUrl: '/anatomy/cardiac-conduction-3d',
        modelType: '3D'
      },
      {
        structure: 'Atrioventricular (AV) Node',
        description: 'Electrical relay station between atria and ventricles.',
        relevance: 'Delays signal to allow atrial contraction before ventricular. Represented by PR interval.',
        visualizationUrl: '/anatomy/cardiac-conduction-3d',
        modelType: '3D'
      },
      {
        structure: 'Bundle of His and Bundle Branches',
        description: 'Specialized conduction fibers carrying electrical signals through ventricles.',
        relevance: 'Conducts impulse to ventricles. Abnormalities cause bundle branch blocks on ECG.',
        visualizationUrl: '/anatomy/cardiac-conduction-3d',
        modelType: '3D'
      },
      {
        structure: 'Purkinje Fibers',
        description: 'Network of fibers that distribute electrical impulse throughout ventricles.',
        relevance: 'Ensures coordinated ventricular contraction.',
        visualizationUrl: '/anatomy/cardiac-conduction-3d',
        modelType: '3D'
      }
    ],

    alternatives: [
      {
        procedureId: 'holter-monitor',
        name: 'Holter Monitor',
        whenPreferred: 'When symptoms are intermittent and may not occur during a brief ECG.',
        comparisonNotes: 'Records continuously for 24-48 hours to catch sporadic arrhythmias.'
      },
      {
        procedureId: 'event-monitor',
        name: 'Event Monitor/Loop Recorder',
        whenPreferred: 'For infrequent symptoms occurring less often than daily.',
        comparisonNotes: 'Worn for weeks; patient activates during symptoms.'
      },
      {
        procedureId: 'stress-ecg',
        name: 'Stress ECG (Exercise Test)',
        whenPreferred: 'When symptoms occur with exertion.',
        comparisonNotes: 'Records ECG during exercise to detect exertion-related abnormalities.'
      }
    ],

    specialConsiderations: [
      {
        population: 'Women',
        modifications: [
          'V3 and V4 electrodes placed under breast tissue',
          'May need to lift breast for proper placement',
          'Privacy considerations important'
        ],
        additionalRisks: []
      },
      {
        population: 'Obese patients',
        modifications: [
          'May need larger electrodes',
          'Electrode placement may be more challenging',
          'Signal quality may be reduced'
        ],
        additionalRisks: ['May have more artifact']
      },
      {
        population: 'Patients with pacemakers/ICDs',
        modifications: [
          'ECG still performed normally',
          'Device spikes visible on tracing',
          'Interpretation considers paced rhythm'
        ],
        additionalRisks: []
      },
      {
        population: 'Pediatric patients',
        modifications: [
          'Smaller electrodes',
          'Normal values differ by age',
          'May need distraction techniques'
        ],
        additionalRisks: []
      }
    ],

    equipment: [
      {
        name: 'ECG Machine',
        description: 'Device that amplifies and records cardiac electrical signals.',
        purpose: 'Processes signals from electrodes and produces tracing.',
        imageUrl: '/equipment/ecg-machine.jpg'
      },
      {
        name: 'ECG Electrodes',
        description: 'Adhesive patches with conductive gel.',
        purpose: 'Detect electrical signals from the skin surface.',
        imageUrl: '/equipment/ecg-electrodes.jpg'
      },
      {
        name: 'Lead Wires',
        description: 'Cables connecting electrodes to ECG machine.',
        purpose: 'Transmit signals from electrodes to machine.',
        imageUrl: '/equipment/ecg-leads.jpg'
      }
    ],

    successRate: '99% - technical failures are very rare',

    expectedOutcomes: [
      'Clear recording of cardiac electrical activity',
      'Information about heart rate and rhythm',
      'Detection of any acute or chronic cardiac abnormalities',
      'Baseline for future comparison'
    ],

    patientResources: [
      {
        title: 'Understanding Your ECG Results',
        url: '/education/ecg-results',
        type: 'article'
      },
      {
        title: 'What is an ECG?',
        url: '/education/ecg-overview',
        type: 'video'
      },
      {
        title: 'Heart Rhythm Disorders Explained',
        url: '/education/arrhythmias',
        type: 'article'
      }
    ],

    lastUpdated: '2024-01-15',
    references: [
      'Goldberger AL, et al. Goldberger\'s Clinical Electrocardiography. Elsevier, 2023.',
      'American Heart Association. ECG Interpretation Guidelines.',
      'ACC/AHA Clinical Practice Guidelines on Electrocardiography.'
    ]
  },

  // ============================================================================
  // HOLTER MONITOR
  // ============================================================================
  {
    id: 'holter-monitor',
    name: 'Holter Monitor',
    alternativeNames: ['24-Hour ECG', 'Ambulatory ECG Monitoring', 'Continuous ECG Recording', '48-Hour Holter'],
    category: 'diagnostic',
    subcategory: 'cardiac',
    bodySystem: 'Cardiovascular System',

    cptCodes: [
      {
        code: '93224',
        description: 'External electrocardiographic recording up to 48 hours with recording, scanning analysis, report, review and interpretation',
        relativeValueUnits: 1.38
      },
      {
        code: '93225',
        description: 'External electrocardiographic recording up to 48 hours; recording only',
        relativeValueUnits: 0.52
      },
      {
        code: '93226',
        description: 'External electrocardiographic recording up to 48 hours; scanning analysis',
        relativeValueUnits: 0.59
      },
      {
        code: '93227',
        description: 'External electrocardiographic recording up to 48 hours; review and interpretation',
        relativeValueUnits: 0.52
      }
    ],

    description: {
      simple: 'A Holter monitor is a small, portable device you wear for 1-2 days that continuously records your heartbeat. It helps doctors find heart rhythm problems that might not show up during a regular ECG.',
      intermediate: 'Holter monitoring provides continuous ECG recording for 24-48 hours during normal daily activities. The portable device captures every heartbeat, allowing detection of intermittent arrhythmias, assessment of symptoms, and evaluation of pacemaker function.',
      technical: 'Holter monitoring employs multi-lead continuous ambulatory ECG recording for 24-48+ hours. Modern devices record digitally, allowing automated and manual analysis of rhythm, rate trends, ST-segment changes, HRV, and arrhythmia burden. Patient diaries correlate symptoms with ECG findings.',
      pediatric: 'A Holter monitor is like wearing a tiny heart-tracking watch, but for your chest! You wear small stickers connected to a little box that records your heartbeat all day and night. You can still play and do most activities while wearing it.'
    },

    purpose: 'To continuously record heart rhythm over 24-48 hours to detect intermittent arrhythmias and correlate symptoms with ECG findings.',

    overview: 'Named after Norman Holter who invented it in 1961, Holter monitoring has become essential for evaluating patients with suspected intermittent cardiac rhythm disturbances. It captures data during everyday activities that a brief office ECG would miss.',

    indications: [
      {
        condition: 'Unexplained palpitations',
        explanation: 'Captures heart rhythm during symptom episodes.',
        urgency: 'elective'
      },
      {
        condition: 'Unexplained syncope or near-syncope',
        explanation: 'May detect arrhythmia causing fainting.',
        urgency: 'urgent'
      },
      {
        condition: 'Evaluation of atrial fibrillation',
        explanation: 'Assesses rate control and arrhythmia burden.',
        urgency: 'elective'
      },
      {
        condition: 'Post-cardiac event monitoring',
        explanation: 'Monitors for dangerous rhythms after heart attack.',
        urgency: 'urgent'
      },
      {
        condition: 'Pacemaker/ICD evaluation',
        explanation: 'Verifies proper device function during activities.',
        urgency: 'elective'
      },
      {
        condition: 'Medication effect monitoring',
        explanation: 'Evaluates impact of antiarrhythmic drugs.',
        urgency: 'elective'
      },
      {
        condition: 'Silent ischemia detection',
        explanation: 'Identifies ST changes without symptoms.',
        urgency: 'elective'
      }
    ],

    contraindications: {
      absolute: [],
      relative: [
        {
          condition: 'Severe skin allergies to adhesives',
          reason: 'Electrodes must stay in place for 24+ hours.',
          workaround: 'Use hypoallergenic electrodes; skin barrier products.'
        },
        {
          condition: 'Inability to keep diary',
          reason: 'Symptom correlation requires patient input.',
          workaround: 'Family member can help maintain diary.'
        }
      ]
    },

    setting: ['outpatient-clinic', 'hospital-outpatient'],

    anesthesiaOptions: [
      {
        type: 'none',
        description: 'The procedure involves no anesthesia - just electrode application.',
        typical: true
      }
    ],

    duration: {
      minimum: 15,
      typical: 20,
      maximum: 30,
      unit: 'minutes'
    },

    preparation: {
      daysBeforeInstructions: [
        {
          timing: '1-2 days before',
          instruction: 'Shower and bathe thoroughly before appointment.',
          rationale: 'You cannot shower with the monitor on, so bathe beforehand.',
          critical: true
        }
      ],
      dayOfInstructions: [
        {
          timing: 'Day of appointment',
          instruction: 'Do not apply lotions, creams, or powder to chest.',
          rationale: 'These interfere with electrode adhesion.',
          critical: true
        },
        {
          timing: 'Day of appointment',
          instruction: 'Wear a loose-fitting, button-front shirt.',
          rationale: 'Allows easy electrode placement and comfortable monitor wearing.',
          critical: false
        }
      ],
      fastingRequired: false,
      medicationAdjustments: [],
      labsRequired: [],
      imagingRequired: [],
      consentRequired: false
    },

    procedureSteps: [
      {
        stepNumber: 1,
        phase: 'preparation',
        action: 'Patient education',
        detailedDescription: 'Explain the purpose of monitoring, how to care for the device, how to keep the diary, and what activities to avoid. Review how to use event button if present.',
        duration: '5 minutes',
        patientExperience: 'The technician explains how the monitor works and what you need to do during the monitoring period.',
        criticalPoints: ['Patient must understand diary keeping', 'Review event button use']
      },
      {
        stepNumber: 2,
        phase: 'preparation',
        action: 'Skin preparation',
        detailedDescription: 'Areas where electrodes will be placed are cleaned with alcohol and lightly abraded to improve electrode contact and reduce artifact.',
        duration: '3 minutes',
        patientExperience: 'Your chest is cleaned and the skin may be gently scraped with a rough pad. This does not hurt but may feel slightly scratchy.',
        equipmentUsed: ['Alcohol swabs', 'Skin prep pads']
      },
      {
        stepNumber: 3,
        phase: 'procedure',
        action: 'Electrode placement',
        detailedDescription: 'Usually 5-7 electrodes are placed on the chest in specific positions. Placement is similar to precordial leads of standard ECG. Electrodes are pressed firmly to ensure good contact.',
        duration: '3 minutes',
        patientExperience: 'Sticky patches are placed on your chest. They press firmly to make sure they stick well.',
        equipmentUsed: ['Holter electrodes', 'Lead wires']
      },
      {
        stepNumber: 4,
        phase: 'procedure',
        action: 'Lead wire and recorder connection',
        detailedDescription: 'Lead wires are connected to electrodes and the recording device. The recorder is typically worn on a belt or carried in a pouch around the neck.',
        duration: '2 minutes',
        patientExperience: 'Wires connect the chest stickers to a small recorder about the size of a deck of cards. You can carry it on your belt or in a pouch.',
        equipmentUsed: ['Holter recorder', 'Belt clip or pouch']
      },
      {
        stepNumber: 5,
        phase: 'procedure',
        action: 'Signal verification',
        detailedDescription: 'Technician verifies adequate signal quality on all channels. Adjusts electrodes if needed.',
        duration: '2 minutes',
        patientExperience: 'The technician checks that all signals are recording properly.',
        criticalPoints: ['All channels must show clear signal', 'Patient should move to check for artifact']
      },
      {
        stepNumber: 6,
        phase: 'completion',
        action: 'Instructions and diary',
        detailedDescription: 'Patient receives detailed instructions and diary. Diary should record activities, symptoms, medications, and times of sleep.',
        duration: '5 minutes',
        patientExperience: 'You receive a diary to write down your activities and any symptoms you feel, along with the time they occur.',
        equipmentUsed: ['Patient diary', 'Written instructions']
      }
    ],

    riskLevel: 'minimal',

    complications: [
      {
        name: 'Skin irritation',
        description: 'Redness or itching under electrodes.',
        frequency: 'occasional',
        frequencyPercent: '10-20%',
        severity: 'mild',
        prevention: ['Proper skin prep', 'Hypoallergenic electrodes if history of sensitivity'],
        treatment: ['Irritation resolves after electrode removal', 'Moisturizing lotion', 'Hydrocortisone cream if needed'],
        warningSignsToReport: ['Severe itching', 'Blistering', 'Rash spreading beyond electrode sites']
      },
      {
        name: 'Electrode detachment',
        description: 'Electrodes may come loose, especially with sweating or activity.',
        frequency: 'occasional',
        frequencyPercent: '5-10%',
        severity: 'mild',
        prevention: ['Proper skin prep', 'Avoid lotions', 'Tape over electrodes if needed'],
        treatment: ['Reattach with provided tape', 'Call if unable to fix'],
        warningSignsToReport: ['Multiple electrodes falling off', 'Unable to reattach']
      }
    ],

    recovery: {
      immediateRecovery: 'No recovery needed - you leave the office wearing the monitor.',
      returnToNormalActivities: 'Continue normal daily activities except showering/bathing.',
      fullRecovery: 'After monitor removal, any skin irritation resolves within 1-2 days.',
      restrictions: [
        'No showering, bathing, or swimming while wearing monitor',
        'Avoid electric blankets and magnets',
        'Keep monitor dry',
        'Avoid vigorous activities that cause excessive sweating (unless specifically testing exercise)'
      ],
      followUpSchedule: [
        'Return monitor at specified time (24-48 hours)',
        'Results typically available within 1-7 days',
        'Follow-up appointment to review results'
      ]
    },

    patientExperience: {
      beforeProcedure: [
        'You may be curious about how you will manage daily activities with the monitor.',
        'Shower before your appointment since you cannot shower during monitoring.',
        'The application process is quick and painless.'
      ],
      duringProcedure: [
        'Electrode placement feels like stickers being firmly pressed on chest.',
        'The device is lightweight and most people forget they are wearing it.',
        'You leave the office wearing the monitor.'
      ],
      immediatelyAfter: [
        'You may feel self-conscious about the wires and device.',
        'The electrodes may pull on chest hair.',
        'Most people adapt quickly and go about normal activities.'
      ],
      daysAfter: [
        'Sleeping with the monitor takes some adjustment.',
        'You must remember to log activities and symptoms.',
        'Skin under electrodes may become itchy.',
        'Relief when the monitor comes off.'
      ],
      sensationsToExpect: [
        'Awareness of electrodes on chest',
        'Slight pulling from lead wires',
        'Possible itching under electrodes',
        'Weight of recorder on belt or pouch'
      ],
      painLevel: {
        during: 'Zero - completely painless.',
        after: 'Possible itching (1-2/10) from electrodes.',
        managementOptions: [
          'Loosen clothing if wires are pulling',
          'Adjust recorder position for comfort',
          'Moisturizing lotion after removal for dry skin'
        ]
      },
      emotionalConsiderations: [
        'You may feel self-conscious about wearing visible electrodes',
        'Keeping the diary requires diligence',
        'Anticipation about what the monitor might reveal',
        'Some people find sleeping uncomfortable'
      ]
    },

    anatomyInvolved: [
      {
        structure: 'Heart\'s Electrical Conduction System',
        description: 'The network that generates and conducts electrical impulses through the heart.',
        relevance: 'Holter records the electrical activity generated by this system continuously.',
        visualizationUrl: '/anatomy/cardiac-conduction-3d',
        modelType: '3D'
      },
      {
        structure: 'Chest Wall',
        description: 'The surface where electrodes are placed.',
        relevance: 'Electrodes detect cardiac electrical signals through the chest wall.',
        visualizationUrl: '/anatomy/chest-wall-3d',
        modelType: '3D'
      }
    ],

    alternatives: [
      {
        procedureId: 'event-monitor',
        name: 'Event Monitor',
        whenPreferred: 'When symptoms occur less than daily.',
        comparisonNotes: 'Worn for 2-4 weeks, records only during symptoms.'
      },
      {
        procedureId: 'implantable-loop-recorder',
        name: 'Implantable Loop Recorder',
        whenPreferred: 'When rare symptoms occur over months to years.',
        comparisonNotes: 'Inserted under skin, monitors for up to 3 years.'
      },
      {
        procedureId: 'smartwatch-ecg',
        name: 'Smartwatch ECG',
        whenPreferred: 'For simple rhythm monitoring in tech-savvy patients.',
        comparisonNotes: 'Less comprehensive but more convenient for long-term monitoring.'
      },
      {
        procedureId: 'mobile-cardiac-telemetry',
        name: 'Mobile Cardiac Telemetry (MCT)',
        whenPreferred: 'When real-time monitoring is needed.',
        comparisonNotes: 'Transmits data continuously for immediate review.'
      }
    ],

    specialConsiderations: [
      {
        population: 'Elderly patients',
        modifications: [
          'May need help with diary',
          'Clear instructions important',
          'May need assistance with device management'
        ],
        additionalRisks: []
      },
      {
        population: 'Pediatric patients',
        modifications: [
          'Smaller electrodes available',
          'Parent helps with diary',
          'Creative placement to minimize interference with activities'
        ],
        additionalRisks: ['May not cooperate with wearing device', 'More prone to electrode displacement']
      },
      {
        population: 'Active individuals',
        modifications: [
          'Secure electrodes well',
          'Use additional tape',
          'May need extended wear if symptoms only during intense exercise'
        ],
        additionalRisks: ['Electrode detachment', 'Sweat-related artifact']
      }
    ],

    equipment: [
      {
        name: 'Holter Monitor/Recorder',
        description: 'Small, portable digital recording device.',
        purpose: 'Stores continuous ECG data for 24-48+ hours.',
        imageUrl: '/equipment/holter-monitor.jpg'
      },
      {
        name: 'Holter Electrodes',
        description: 'Long-wear adhesive electrodes designed for multi-day use.',
        purpose: 'Detect cardiac electrical signals from skin.',
        imageUrl: '/equipment/holter-electrodes.jpg'
      },
      {
        name: 'Patient Diary',
        description: 'Written log for recording activities, symptoms, and medications.',
        purpose: 'Correlates symptoms with ECG findings.',
        imageUrl: '/equipment/holter-diary.jpg'
      }
    ],

    successRate: '95%+ for adequate recording quality',

    expectedOutcomes: [
      'Complete recording of 24-48 hours of heart rhythm',
      'Detection of any arrhythmias that occurred during monitoring',
      'Correlation of symptoms with heart rhythm',
      'Data to guide treatment decisions'
    ],

    patientResources: [
      {
        title: 'Living with a Holter Monitor',
        url: '/education/holter-living',
        type: 'article'
      },
      {
        title: 'How to Keep Your Holter Diary',
        url: '/education/holter-diary-guide',
        type: 'pdf'
      },
      {
        title: 'Understanding Holter Results',
        url: '/education/holter-results',
        type: 'video'
      }
    ],

    lastUpdated: '2024-01-15',
    references: [
      'Steinberg JS, et al. ISHNE-HRS Expert Consensus Statement on Ambulatory ECG and External Cardiac Monitoring. Heart Rhythm. 2017.',
      'Crawford MH, et al. ACC/AHA Guidelines for Ambulatory Electrocardiography.',
      'Zimetbaum P, Goldman A. Ambulatory Arrhythmia Monitoring. Circulation. 2010.'
    ]
  },

  // ============================================================================
  // ECHOCARDIOGRAM
  // ============================================================================
  {
    id: 'echocardiogram',
    name: 'Echocardiogram',
    alternativeNames: ['Echo', 'Cardiac Echo', 'Cardiac Ultrasound', 'TTE', 'Transthoracic Echocardiogram'],
    category: 'diagnostic',
    subcategory: 'cardiac',
    bodySystem: 'Cardiovascular System',

    cptCodes: [
      {
        code: '93306',
        description: 'Echocardiography, transthoracic, real-time with image documentation, complete, with spectral and color flow Doppler',
        relativeValueUnits: 1.98
      },
      {
        code: '93307',
        description: 'Echocardiography, transthoracic, real-time with image documentation, complete, without spectral or color flow Doppler',
        relativeValueUnits: 1.47
      },
      {
        code: '93308',
        description: 'Echocardiography, transthoracic, real-time with image documentation, limited or follow-up',
        relativeValueUnits: 0.78
      }
    ],

    description: {
      simple: 'An echocardiogram uses sound waves (like ultrasound) to create moving pictures of your heart. A technician moves a small probe over your chest while watching your heart on a screen. It shows how your heart chambers, valves, and muscles are working.',
      intermediate: 'Transthoracic echocardiography (TTE) is a non-invasive ultrasound examination of the heart. Using high-frequency sound waves, it produces real-time images of cardiac anatomy and function, including chamber size, valve function, wall motion, and blood flow patterns.',
      technical: 'TTE utilizes 2D/3D imaging, M-mode, spectral Doppler (pulsed and continuous wave), and color flow Doppler to assess left and right ventricular size and function (EF calculation), valvular morphology and hemodynamics, diastolic function, pericardium, and great vessels. Standard views include parasternal long/short axis, apical 4/2/3/5 chamber, subcostal, and suprasternal.',
      pediatric: 'An echo is like a movie of your heart made with special sound waves! The technician puts some warm jelly on your chest and moves a wand that lets them see your heart beating on a TV screen. You get to watch too! It doesn\'t hurt at all.'
    },

    purpose: 'To visualize the heart structure and function using ultrasound, evaluating chamber size, valve function, wall motion, and blood flow.',

    overview: 'Echocardiography is the most widely used cardiac imaging modality. It provides comprehensive, real-time assessment of heart function without radiation exposure. Modern echocardiography includes advanced techniques like strain imaging and 3D imaging.',

    indications: [
      {
        condition: 'Heart murmur evaluation',
        explanation: 'Identifies cause of abnormal heart sounds - valve problems, structural issues.',
        urgency: 'elective'
      },
      {
        condition: 'Heart failure assessment',
        explanation: 'Measures how well the heart pumps (ejection fraction) and identifies causes.',
        urgency: 'urgent'
      },
      {
        condition: 'Chest pain',
        explanation: 'Evaluates wall motion abnormalities suggesting coronary disease.',
        urgency: 'urgent'
      },
      {
        condition: 'Valve disease monitoring',
        explanation: 'Assesses severity of stenosis or regurgitation and when surgery is needed.',
        urgency: 'elective'
      },
      {
        condition: 'Cardiomyopathy evaluation',
        explanation: 'Identifies types of heart muscle disease.',
        urgency: 'urgent'
      },
      {
        condition: 'Congenital heart disease',
        explanation: 'Evaluates structural heart abnormalities present from birth.',
        urgency: 'elective'
      },
      {
        condition: 'Endocarditis workup',
        explanation: 'Looks for vegetations (infected material) on heart valves.',
        urgency: 'urgent'
      },
      {
        condition: 'Pericardial disease',
        explanation: 'Detects fluid around the heart or pericardial thickening.',
        urgency: 'urgent'
      },
      {
        condition: 'Source of embolism',
        explanation: 'Evaluates for cardiac source of stroke or blood clots.',
        urgency: 'urgent'
      },
      {
        condition: 'Pre-operative assessment',
        explanation: 'Cardiac evaluation before major non-cardiac surgery.',
        urgency: 'elective'
      }
    ],

    contraindications: {
      absolute: [],
      relative: [
        {
          condition: 'Poor acoustic windows',
          reason: 'Obesity, COPD, or chest wall abnormalities may limit image quality.',
          workaround: 'Use contrast agents; consider TEE if critical information needed.'
        },
        {
          condition: 'Open chest wounds',
          reason: 'Cannot place transducer on surgical sites.',
          workaround: 'Use available windows; consider TEE.'
        },
        {
          condition: 'Severe chest pain',
          reason: 'Transducer pressure may be uncomfortable.',
          workaround: 'Pain management; gentle technique.'
        }
      ]
    },

    setting: ['outpatient-clinic', 'hospital-outpatient', 'hospital-inpatient', 'emergency-department', 'intensive-care', 'bedside'],

    anesthesiaOptions: [
      {
        type: 'none',
        description: 'TTE is non-invasive and requires no anesthesia.',
        typical: true
      }
    ],

    duration: {
      minimum: 20,
      typical: 45,
      maximum: 60,
      unit: 'minutes'
    },

    preparation: {
      daysBeforeInstructions: [],
      dayOfInstructions: [
        {
          timing: 'Before appointment',
          instruction: 'No special preparation required.',
          rationale: 'TTE can be performed at any time.',
          critical: false
        },
        {
          timing: 'Before appointment',
          instruction: 'Wear a two-piece outfit with an easy-to-remove top.',
          rationale: 'You will need to expose your chest for the exam.',
          critical: false
        }
      ],
      fastingRequired: false,
      medicationAdjustments: [],
      labsRequired: [],
      imagingRequired: [],
      consentRequired: false
    },

    procedureSteps: [
      {
        stepNumber: 1,
        phase: 'preparation',
        action: 'Patient preparation',
        detailedDescription: 'Patient undresses from waist up, puts on gown, and lies on left side on examination table. ECG leads may be placed for timing purposes.',
        duration: '3 minutes',
        patientExperience: 'You change into a gown and lie on an exam table, usually on your left side. Small ECG stickers may be placed on your chest.',
        equipmentUsed: ['Gown', 'ECG leads']
      },
      {
        stepNumber: 2,
        phase: 'procedure',
        action: 'Gel application and transducer placement',
        detailedDescription: 'Warm ultrasound gel is applied to the chest. The sonographer places the transducer on the chest and obtains initial views.',
        duration: '2 minutes',
        patientExperience: 'Warm jelly is spread on your chest. The sonographer presses a smooth wand against your chest, moving it to different positions.',
        equipmentUsed: ['Ultrasound gel', 'Echo transducer']
      },
      {
        stepNumber: 3,
        phase: 'procedure',
        action: 'Parasternal views',
        detailedDescription: 'Transducer placed at left sternal border to obtain parasternal long-axis and short-axis views. These show left ventricle, mitral valve, aortic valve, left atrium, and aorta.',
        duration: '10 minutes',
        patientExperience: 'The wand is placed to the left of your breastbone. You may be asked to hold your breath briefly. You can see your heart on the screen.',
        criticalPoints: ['Assess LV size, wall motion, valve morphology'],
        equipmentUsed: ['Echo transducer']
      },
      {
        stepNumber: 4,
        phase: 'procedure',
        action: 'Apical views',
        detailedDescription: 'Transducer moved to apex (lower left chest). Obtains apical 4-chamber, 2-chamber, 3-chamber, and 5-chamber views. Doppler assessment of valves performed.',
        duration: '15 minutes',
        patientExperience: 'The wand moves to the lower left part of your chest, near where you feel your heartbeat. You may hear whooshing sounds - that\'s the Doppler detecting blood flow.',
        criticalPoints: ['Critical for ejection fraction, diastolic function, valve assessment'],
        equipmentUsed: ['Echo transducer']
      },
      {
        stepNumber: 5,
        phase: 'procedure',
        action: 'Subcostal and suprasternal views',
        detailedDescription: 'Transducer placed below the ribcage (subcostal) to view IVC and right heart, and above the sternum (suprasternal) to view aortic arch.',
        duration: '5 minutes',
        patientExperience: 'The wand moves to your upper abdomen below your ribs and to your neck/upper chest. These views may require you to lie flat.',
        criticalPoints: ['IVC assessment for volume status'],
        equipmentUsed: ['Echo transducer']
      },
      {
        stepNumber: 6,
        phase: 'procedure',
        action: 'Doppler measurements',
        detailedDescription: 'Spectral Doppler (pulsed and continuous wave) used to measure flow velocities across valves and assess for stenosis or regurgitation.',
        duration: '10 minutes',
        patientExperience: 'You will hear more whooshing and clicking sounds as the machine measures blood flow speeds.',
        criticalPoints: ['Critical for hemodynamic assessment'],
        equipmentUsed: ['Doppler ultrasound']
      },
      {
        stepNumber: 7,
        phase: 'completion',
        action: 'Completion and cleanup',
        detailedDescription: 'Ultrasound gel is wiped off. Patient can dress. Images are reviewed for quality and completeness.',
        duration: '3 minutes',
        patientExperience: 'The jelly is wiped off your chest. You can get dressed. The test is complete.',
        equipmentUsed: ['Towels']
      }
    ],

    riskLevel: 'minimal',

    complications: [
      {
        name: 'Discomfort from transducer pressure',
        description: 'The technician must press firmly to obtain good images, which may be uncomfortable.',
        frequency: 'occasional',
        frequencyPercent: '5-10%',
        severity: 'mild',
        prevention: ['Communicate with sonographer about comfort', 'Repositioning may help'],
        treatment: ['Temporary - resolves when pressure released'],
        warningSignsToReport: ['Bruising (rare)', 'Persistent pain']
      },
      {
        name: 'Skin irritation from gel',
        description: 'Rare allergic reaction to ultrasound gel.',
        frequency: 'rare',
        frequencyPercent: '<1%',
        severity: 'mild',
        prevention: ['Report known allergies', 'Hypoallergenic gel available'],
        treatment: ['Wash area', 'Topical antihistamine if needed'],
        warningSignsToReport: ['Rash', 'Hives', 'Itching']
      }
    ],

    recovery: {
      immediateRecovery: 'No recovery needed - resume all activities immediately.',
      returnToNormalActivities: 'Immediately.',
      fullRecovery: 'Instant - no lasting effects from the test.',
      restrictions: [],
      followUpSchedule: [
        'Preliminary results may be available immediately if cardiologist reviews',
        'Final report typically available within 24-48 hours',
        'Follow-up with ordering physician to discuss findings'
      ]
    },

    patientExperience: {
      beforeProcedure: [
        'You may be curious about seeing your heart.',
        'The echo lab is typically quiet and dim.',
        'You will be asked about your cardiac history.'
      ],
      duringProcedure: [
        'The gel feels warm and slightly slippery.',
        'The transducer pressure ranges from light to moderately firm.',
        'You can watch your heart beating on the screen.',
        'You hear whooshing sounds from Doppler.',
        'You may need to change positions and hold your breath occasionally.'
      ],
      immediatelyAfter: [
        'Gel is wiped off but you may feel slightly sticky.',
        'No restrictions on activities.',
        'You may feel reassured from seeing your heart.'
      ],
      daysAfter: [
        'No after-effects from the test.',
        'You may be anxious waiting for results.',
        'If findings are abnormal, you will discuss next steps with your doctor.'
      ],
      sensationsToExpect: [
        'Warm gel on chest',
        'Firm pressure from transducer',
        'Whooshing sounds from Doppler',
        'Possible brief discomfort between ribs'
      ],
      painLevel: {
        during: 'Usually 0-2/10, though firm pressure between ribs can cause mild discomfort.',
        after: 'Zero - no lasting discomfort.',
        managementOptions: [
          'Communicate with sonographer if uncomfortable',
          'Request lighter pressure if tolerable for imaging'
        ]
      },
      emotionalConsiderations: [
        'Seeing your heart can be reassuring or anxiety-provoking',
        'Sonographer may not provide interpretation - that comes from the physician',
        'Abnormal findings will be explained by your doctor',
        'It is normal to have questions about what you saw'
      ]
    },

    anatomyInvolved: [
      {
        structure: 'Left Ventricle',
        description: 'The main pumping chamber that sends blood to the body.',
        relevance: 'Echo measures its size, thickness, and how well it contracts (ejection fraction).',
        visualizationUrl: '/anatomy/heart-chambers-3d',
        modelType: '3D'
      },
      {
        structure: 'Right Ventricle',
        description: 'The chamber that pumps blood to the lungs.',
        relevance: 'Echo assesses size and function; important in pulmonary hypertension.',
        visualizationUrl: '/anatomy/heart-chambers-3d',
        modelType: '3D'
      },
      {
        structure: 'Mitral Valve',
        description: 'Valve between left atrium and left ventricle.',
        relevance: 'Echo evaluates for stenosis, regurgitation, and structural abnormalities.',
        visualizationUrl: '/anatomy/heart-valves-3d',
        modelType: '3D'
      },
      {
        structure: 'Aortic Valve',
        description: 'Valve between left ventricle and aorta.',
        relevance: 'Echo assesses for stenosis, regurgitation, and calcification.',
        visualizationUrl: '/anatomy/heart-valves-3d',
        modelType: '3D'
      },
      {
        structure: 'Tricuspid Valve',
        description: 'Valve between right atrium and right ventricle.',
        relevance: 'Echo evaluates function and estimates pulmonary pressures.',
        visualizationUrl: '/anatomy/heart-valves-3d',
        modelType: '3D'
      },
      {
        structure: 'Pericardium',
        description: 'The sac surrounding the heart.',
        relevance: 'Echo detects pericardial effusion and signs of constrictive pericarditis.',
        visualizationUrl: '/anatomy/pericardium-3d',
        modelType: '3D'
      }
    ],

    alternatives: [
      {
        procedureId: 'transesophageal-echo',
        name: 'Transesophageal Echocardiogram (TEE)',
        whenPreferred: 'When TTE windows are poor or more detailed views of posterior structures needed.',
        comparisonNotes: 'More invasive (probe in esophagus) but provides clearer images of some structures.'
      },
      {
        procedureId: 'stress-echo',
        name: 'Stress Echocardiogram',
        whenPreferred: 'To evaluate for coronary artery disease.',
        comparisonNotes: 'Combines echo with exercise or medication stress to detect ischemia.'
      },
      {
        procedureId: 'cardiac-mri',
        name: 'Cardiac MRI',
        whenPreferred: 'For tissue characterization, viability assessment, or when echo quality is poor.',
        comparisonNotes: 'More detailed imaging but more expensive and time-consuming.'
      },
      {
        procedureId: 'cardiac-ct',
        name: 'Cardiac CT',
        whenPreferred: 'For coronary artery imaging or detailed structural assessment.',
        comparisonNotes: 'Excellent for coronary arteries but involves radiation.'
      }
    ],

    specialConsiderations: [
      {
        population: 'Obese patients',
        modifications: [
          'May have suboptimal windows',
          'Consider contrast echo for LV visualization',
          'May need TEE for complete evaluation'
        ],
        additionalRisks: ['Incomplete study possible']
      },
      {
        population: 'Patients with COPD',
        modifications: [
          'Hyperinflated lungs limit acoustic windows',
          'Subcostal views may be best',
          'May need contrast or TEE'
        ],
        additionalRisks: ['Limited image quality']
      },
      {
        population: 'Pediatric patients',
        modifications: [
          'Smaller transducers available',
          'May need sedation for younger children',
          'Higher imaging frequency for better resolution'
        ],
        additionalRisks: ['May not cooperate', 'May need sedation']
      },
      {
        population: 'Critically ill patients',
        modifications: [
          'Bedside/portable echo performed',
          'Limited views may be acceptable for focused questions',
          'Patient position may be constrained'
        ],
        additionalRisks: ['Suboptimal images', 'May need TEE']
      }
    ],

    equipment: [
      {
        name: 'Echocardiography Machine',
        description: 'Ultrasound system with cardiac imaging capabilities.',
        purpose: 'Generates and processes ultrasound images and Doppler data.',
        imageUrl: '/equipment/echo-machine.jpg'
      },
      {
        name: 'Transducer (Probe)',
        description: 'Handheld device that emits and receives ultrasound waves.',
        purpose: 'Creates sound waves and detects returning echoes to form images.',
        imageUrl: '/equipment/echo-transducer.jpg'
      },
      {
        name: 'Ultrasound Gel',
        description: 'Water-based conducting gel.',
        purpose: 'Eliminates air gap between transducer and skin for clear imaging.',
        imageUrl: '/equipment/ultrasound-gel.jpg'
      },
      {
        name: 'ECG Leads',
        description: 'Electrode patches and wires.',
        purpose: 'Provides cardiac timing for image acquisition.',
        imageUrl: '/equipment/ecg-leads.jpg'
      }
    ],

    successRate: '95%+ for technically adequate study in patients without limiting factors',

    expectedOutcomes: [
      'Visualization of cardiac chambers and valves',
      'Measurement of ejection fraction',
      'Assessment of valve function',
      'Identification of structural abnormalities',
      'Guidance for further testing or treatment'
    ],

    patientResources: [
      {
        title: 'Understanding Your Echo Results',
        url: '/education/echo-results',
        type: 'article'
      },
      {
        title: 'What is an Echocardiogram?',
        url: '/education/echo-overview',
        type: 'video'
      },
      {
        title: 'Heart Valve Disease Explained',
        url: '/education/valve-disease',
        type: 'article'
      }
    ],

    lastUpdated: '2024-01-15',
    references: [
      'Mitchell C, et al. ASE Guidelines for Performing a Comprehensive Transthoracic Echocardiographic Examination in Adults.',
      'Lang RM, et al. Recommendations for Cardiac Chamber Quantification by Echocardiography in Adults.',
      'Otto CM. Textbook of Clinical Echocardiography. Elsevier, 2023.'
    ]
  },

  // ============================================================================
  // STRESS TEST (EXERCISE TOLERANCE TEST)
  // ============================================================================
  {
    id: 'stress-test',
    name: 'Cardiac Stress Test',
    alternativeNames: ['Exercise Stress Test', 'Treadmill Test', 'Exercise Tolerance Test', 'ETT', 'Exercise ECG', 'Bruce Protocol'],
    category: 'diagnostic',
    subcategory: 'cardiac',
    bodySystem: 'Cardiovascular System',

    cptCodes: [
      {
        code: '93015',
        description: 'Cardiovascular stress test using maximal or submaximal treadmill or bicycle exercise, continuous ECG monitoring, and/or pharmacological stress; with supervision, interpretation and report',
        relativeValueUnits: 1.50
      },
      {
        code: '93016',
        description: 'Cardiovascular stress test; supervision only',
        relativeValueUnits: 0.45
      },
      {
        code: '93017',
        description: 'Cardiovascular stress test; tracing only',
        relativeValueUnits: 0.20
      },
      {
        code: '93018',
        description: 'Cardiovascular stress test; interpretation and report only',
        relativeValueUnits: 0.70
      }
    ],

    description: {
      simple: 'A stress test makes your heart work harder while doctors watch it with an ECG. You usually walk on a treadmill that gradually gets faster and steeper. This shows if your heart gets enough blood when it is working hard.',
      intermediate: 'Cardiac stress testing evaluates the heart\'s response to physical exertion. While monitoring ECG, blood pressure, and symptoms, the patient exercises on a treadmill or bicycle with progressively increasing intensity. The test detects coronary artery disease by revealing ischemia (inadequate blood flow to the heart) that occurs during exercise.',
      technical: 'Exercise stress testing utilizes graded exercise protocols (Bruce, modified Bruce, or Naughton) with continuous 12-lead ECG monitoring. Assessment includes maximal heart rate achieved (percent predicted), exercise capacity (METs), blood pressure response, ST-segment changes (≥1mm horizontal or downsloping depression), arrhythmias, and symptom reproduction. Duke Treadmill Score provides prognostic information.',
      pediatric: 'A stress test is like running on a special treadmill while doctors watch your heart. The treadmill starts slow and easy, then gets a little faster. It helps doctors see how strong your heart is when you exercise. It\'s like your heart is doing push-ups!'
    },

    purpose: 'To evaluate the heart\'s response to physical stress, detect coronary artery disease, assess exercise capacity, and evaluate symptoms that occur with exertion.',

    overview: 'Exercise stress testing has been a cornerstone of cardiac diagnosis for over 60 years. It remains a first-line test for evaluating patients with suspected coronary artery disease, providing both diagnostic and prognostic information.',

    indications: [
      {
        condition: 'Chest pain evaluation',
        explanation: 'Detects ischemia suggesting coronary artery disease.',
        urgency: 'urgent'
      },
      {
        condition: 'Risk assessment for coronary disease',
        explanation: 'Evaluates intermediate-risk patients for CAD.',
        urgency: 'elective'
      },
      {
        condition: 'Exercise-induced symptoms',
        explanation: 'Reproduces and evaluates shortness of breath or palpitations during exertion.',
        urgency: 'elective'
      },
      {
        condition: 'Pre-operative cardiac evaluation',
        explanation: 'Assesses cardiac function before major surgery.',
        urgency: 'elective'
      },
      {
        condition: 'Post-revascularization assessment',
        explanation: 'Evaluates success of stent or bypass surgery.',
        urgency: 'elective'
      },
      {
        condition: 'Exercise prescription',
        explanation: 'Determines safe exercise levels for cardiac rehabilitation.',
        urgency: 'elective'
      },
      {
        condition: 'Arrhythmia evaluation',
        explanation: 'Assesses exercise-induced arrhythmias.',
        urgency: 'elective'
      }
    ],

    contraindications: {
      absolute: [
        {
          condition: 'Acute myocardial infarction (within 2 days)',
          reason: 'Exercise could extend damage or cause complications.'
        },
        {
          condition: 'Unstable angina',
          reason: 'Exercise could precipitate heart attack.'
        },
        {
          condition: 'Severe symptomatic aortic stenosis',
          reason: 'Exercise could cause syncope or sudden death.'
        },
        {
          condition: 'Uncontrolled arrhythmias',
          reason: 'Exercise could worsen dangerous rhythms.'
        },
        {
          condition: 'Active endocarditis',
          reason: 'Risk of embolization and hemodynamic instability.'
        },
        {
          condition: 'Acute pulmonary embolism',
          reason: 'Exercise could be fatal.'
        },
        {
          condition: 'Acute aortic dissection',
          reason: 'Exercise increases aortic wall stress.'
        },
        {
          condition: 'Acute myocarditis or pericarditis',
          reason: 'Exercise could worsen inflammation.'
        }
      ],
      relative: [
        {
          condition: 'Left main coronary stenosis',
          reason: 'Higher risk of ischemia.',
          workaround: 'May proceed with careful monitoring.'
        },
        {
          condition: 'Moderate aortic stenosis',
          reason: 'Limited cardiac output reserve.',
          workaround: 'Careful monitoring; submaximal protocol.'
        },
        {
          condition: 'Uncontrolled hypertension (>200/110)',
          reason: 'Exercise further increases blood pressure.',
          workaround: 'Control blood pressure before test.'
        },
        {
          condition: 'Physical limitation preventing exercise',
          reason: 'Cannot reach adequate workload.',
          workaround: 'Use pharmacologic stress test instead.'
        },
        {
          condition: 'Left bundle branch block',
          reason: 'Limits ECG interpretation.',
          workaround: 'Combine with imaging (echo or nuclear).'
        }
      ]
    },

    setting: ['outpatient-clinic', 'hospital-outpatient'],

    anesthesiaOptions: [
      {
        type: 'none',
        description: 'No anesthesia needed - patient exercises voluntarily.',
        typical: true
      }
    ],

    duration: {
      minimum: 30,
      typical: 45,
      maximum: 60,
      unit: 'minutes'
    },

    preparation: {
      daysBeforeInstructions: [
        {
          timing: '24 hours before',
          instruction: 'Avoid caffeine (coffee, tea, chocolate, energy drinks).',
          rationale: 'Caffeine affects heart rate and may interfere with test interpretation.',
          critical: true
        },
        {
          timing: '24 hours before',
          instruction: 'Avoid alcohol.',
          rationale: 'Alcohol affects heart rhythm and blood pressure.',
          critical: false
        }
      ],
      dayOfInstructions: [
        {
          timing: '2-4 hours before',
          instruction: 'Eat a light meal. Avoid heavy meals.',
          rationale: 'Light food provides energy; heavy meals divert blood flow to gut.',
          critical: true
        },
        {
          timing: 'Day of test',
          instruction: 'Wear comfortable walking/running shoes and loose, comfortable clothing.',
          rationale: 'You will be exercising vigorously.',
          critical: true
        },
        {
          timing: 'Day of test',
          instruction: 'Ask about your medications - some may need to be held.',
          rationale: 'Beta-blockers especially may affect results.',
          critical: true
        }
      ],
      fastingRequired: false,
      fastingDuration: 'Light meal 2-4 hours before',
      medicationAdjustments: [
        {
          medication: 'Beta-blockers (metoprolol, atenolol)',
          instruction: 'Usually held 24-48 hours before if testing for ischemia detection.',
          reason: 'Beta-blockers limit heart rate response and may mask ischemia.'
        },
        {
          medication: 'Calcium channel blockers (diltiazem, verapamil)',
          instruction: 'May be held if testing for ischemia.',
          reason: 'Can affect heart rate and blood pressure response.'
        },
        {
          medication: 'Other cardiac medications',
          instruction: 'Consult with ordering physician.',
          reason: 'Individual medications handled on case-by-case basis.'
        }
      ],
      labsRequired: [],
      imagingRequired: [],
      consentRequired: true
    },

    procedureSteps: [
      {
        stepNumber: 1,
        phase: 'preparation',
        action: 'Pre-test assessment',
        detailedDescription: 'Review medical history, current medications, and symptoms. Obtain informed consent. Measure resting blood pressure and heart rate. Ensure contraindications have been evaluated.',
        duration: '5 minutes',
        patientExperience: 'You will answer questions about your health, medications, and any chest pain or shortness of breath you have experienced.',
        criticalPoints: ['Screen for contraindications', 'Document informed consent'],
        equipmentUsed: ['Blood pressure cuff', 'Consent forms']
      },
      {
        stepNumber: 2,
        phase: 'preparation',
        action: 'Electrode placement',
        detailedDescription: 'Skin is prepared (shaved if needed, cleaned, lightly abraded) and 10 electrodes are placed for 12-lead ECG monitoring. Electrodes secured with tape for stability during exercise.',
        duration: '5-10 minutes',
        patientExperience: 'Sticky patches are placed on your chest. Some chest hair may be shaved. The technician ensures they are stuck well since you will be moving.',
        equipmentUsed: ['ECG electrodes', 'Razors', 'Alcohol swabs', 'Medical tape']
      },
      {
        stepNumber: 3,
        phase: 'preparation',
        action: 'Baseline measurements',
        detailedDescription: 'Resting 12-lead ECG obtained in supine and standing positions. Resting blood pressure recorded. Patient familiarized with treadmill and emergency stop button.',
        duration: '5 minutes',
        patientExperience: 'You lie down for a baseline ECG, then stand. Blood pressure is taken. You learn how to use the treadmill and how to tell us if you need to stop.',
        criticalPoints: ['Baseline ECG must be interpretable', 'Ensure patient understands how to communicate during test'],
        equipmentUsed: ['ECG monitor', 'Blood pressure cuff', 'Treadmill']
      },
      {
        stepNumber: 4,
        phase: 'procedure',
        action: 'Exercise phase',
        detailedDescription: 'Patient begins walking on treadmill using selected protocol (typically Bruce). Speed and incline increase every 3 minutes. Continuous ECG monitoring with blood pressure every 2-3 minutes. Target is 85% of age-predicted maximal heart rate (220 minus age).',
        duration: '6-15 minutes',
        patientExperience: 'You start walking slowly. Every 3 minutes, it gets faster and steeper. You will be encouraged to continue as long as safely possible. Tell us about any symptoms - chest pain, shortness of breath, leg fatigue, dizziness.',
        criticalPoints: ['Monitor for symptoms and ECG changes', 'Blood pressure must not drop with exercise', 'Watch for arrhythmias'],
        equipmentUsed: ['Treadmill', 'ECG monitor', 'Blood pressure cuff']
      },
      {
        stepNumber: 5,
        phase: 'procedure',
        action: 'Peak exercise and symptom assessment',
        detailedDescription: 'At peak exercise, 12-lead ECG recorded. Blood pressure measured. Patient asked about symptoms using standardized scales (Borg for exertion, angina scale for chest pain).',
        duration: '1-2 minutes',
        patientExperience: 'At your maximum effort, we take a final ECG and blood pressure. Tell us exactly how you feel - especially any chest discomfort.',
        criticalPoints: ['Document peak heart rate, blood pressure, workload', 'Assess for ischemic ECG changes'],
        equipmentUsed: ['ECG monitor', 'Blood pressure cuff']
      },
      {
        stepNumber: 6,
        phase: 'recovery',
        action: 'Recovery phase',
        detailedDescription: 'Treadmill slowed to cool-down pace. Patient continues walking for 1-2 minutes, then rests sitting or lying down. ECG and blood pressure monitored for 5-10 minutes. Recovery of heart rate and blood pressure documented.',
        duration: '5-10 minutes',
        patientExperience: 'The treadmill slows down. You cool down with slow walking, then sit or lie down. We continue watching your heart rhythm and blood pressure until they return to normal.',
        criticalPoints: ['Watch for delayed ischemic changes', 'Heart rate should recover normally', 'Blood pressure should not drop excessively'],
        equipmentUsed: ['ECG monitor', 'Blood pressure cuff', 'Recovery chair/bed']
      },
      {
        stepNumber: 7,
        phase: 'completion',
        action: 'Post-test wrap-up',
        detailedDescription: 'Electrodes removed. Patient monitored until stable. Preliminary results discussed if appropriate. Instructions for follow-up provided.',
        duration: '5 minutes',
        patientExperience: 'The stickers are removed. You rest until feeling normal. The supervising provider may give you preliminary results. You will discuss full results with your doctor.',
        equipmentUsed: ['Towels']
      }
    ],

    riskLevel: 'low',

    complications: [
      {
        name: 'Fatigue and muscle soreness',
        description: 'Normal effects of exercise, especially if not regularly active.',
        frequency: 'common',
        frequencyPercent: '20-30%',
        severity: 'mild',
        prevention: ['Warm up properly', 'Cool down adequately'],
        treatment: ['Rest', 'Gentle stretching', 'Resolves in 1-2 days'],
        warningSignsToReport: ['Chest pain that persists', 'Unusual shortness of breath']
      },
      {
        name: 'Hypotension',
        description: 'Blood pressure drops during or after exercise, causing lightheadedness.',
        frequency: 'uncommon',
        frequencyPercent: '2-5%',
        severity: 'mild',
        prevention: ['Adequate hydration', 'Proper cool-down'],
        treatment: ['Lie down', 'Elevate legs', 'IV fluids if severe'],
        warningSignsToReport: ['Fainting', 'Persistent dizziness', 'Chest pain']
      },
      {
        name: 'Arrhythmia',
        description: 'Abnormal heart rhythm triggered by exercise.',
        frequency: 'uncommon',
        frequencyPercent: '1-3%',
        severity: 'moderate',
        prevention: ['Proper screening', 'Supervision by trained personnel'],
        treatment: ['Stop exercise', 'Most resolve with rest', 'Medications if needed', 'Emergency equipment available'],
        warningSignsToReport: ['Palpitations that persist after rest', 'Chest pain', 'Shortness of breath']
      },
      {
        name: 'Chest pain/angina',
        description: 'Chest discomfort caused by inadequate blood flow to heart muscle.',
        frequency: 'uncommon',
        frequencyPercent: '1-5%',
        severity: 'moderate',
        prevention: ['This is actually a desired finding if present - it indicates the test has detected a problem'],
        treatment: ['Stop exercise', 'Nitroglycerin if available', 'Most resolves with rest', 'Emergency protocols if severe'],
        warningSignsToReport: ['Chest pain that persists after rest', 'Pain radiating to arm/jaw', 'Shortness of breath']
      },
      {
        name: 'Heart attack',
        description: 'Acute myocardial infarction triggered by exercise.',
        frequency: 'rare',
        frequencyPercent: '<0.05%',
        severity: 'life-threatening',
        prevention: ['Proper screening for contraindications', 'Continuous monitoring', 'Stopping at warning signs'],
        treatment: ['Emergency protocols', 'Emergency medications', 'Transfer to catheterization lab'],
        warningSignsToReport: ['Severe chest pain', 'Shortness of breath', 'Profuse sweating', 'Nausea']
      },
      {
        name: 'Cardiac arrest',
        description: 'Heart stops beating - extremely rare.',
        frequency: 'rare',
        frequencyPercent: '<0.01%',
        severity: 'life-threatening',
        prevention: ['Proper screening', 'Continuous monitoring', 'Trained supervision'],
        treatment: ['Immediate CPR', 'Defibrillation', 'Advanced cardiac life support'],
        warningSignsToReport: ['Sudden collapse', 'Loss of consciousness']
      }
    ],

    recovery: {
      immediateRecovery: 'Rest in the lab for 5-10 minutes until heart rate and blood pressure normalize.',
      returnToNormalActivities: 'Most people can resume normal activities within 30 minutes to a few hours.',
      fullRecovery: 'Any muscle soreness from exercise resolves within 1-2 days.',
      restrictions: [
        'Avoid driving for 30 minutes after test',
        'Stay hydrated',
        'Light activity for remainder of day if feeling fatigued',
        'Resume normal medications unless instructed otherwise'
      ],
      followUpSchedule: [
        'Preliminary results often available immediately',
        'Final report within 24-48 hours',
        'Follow-up with ordering physician to discuss results and next steps'
      ]
    },

    patientExperience: {
      beforeProcedure: [
        'You may be anxious about exercising to your maximum.',
        'Dress comfortably - you will be working hard.',
        'Avoid caffeine and heavy meals before the test.',
        'The staff will explain everything before starting.'
      ],
      duringProcedure: [
        'You start with an easy walk that progressively gets harder.',
        'Your heart rate and blood pressure are monitored continuously.',
        'You will be asked about symptoms throughout.',
        'Most people walk 6-12 minutes before reaching their limit.',
        'You stop when you cannot continue or when staff stop the test.',
        'You may feel winded, sweaty, and tired - this is expected.'
      ],
      immediatelyAfter: [
        'You walk slowly to cool down, then rest.',
        'You may feel tired and sweaty.',
        'Your heart rate and blood pressure are monitored as they return to normal.',
        'You should feel recovered within 15-30 minutes.'
      ],
      daysAfter: [
        'Some leg muscle soreness is normal, especially if you do not exercise regularly.',
        'You should feel completely normal within 24-48 hours.',
        'Contact your doctor if you have any chest pain or unusual symptoms.'
      ],
      sensationsToExpect: [
        'Progressive increase in heart rate',
        'Breathing harder and faster',
        'Sweating',
        'Leg muscle fatigue and possibly burning',
        'Feeling of exertion - this is the goal',
        'Relief when it is over'
      ],
      painLevel: {
        during: 'No pain unless ischemia occurs. Muscle fatigue rated 5-8/10 at peak effort. Chest pain should be reported immediately.',
        after: 'Zero unless muscle soreness develops (1-3/10).',
        managementOptions: [
          'Push through muscle fatigue - this is expected and safe',
          'Report any chest discomfort immediately',
          'Over-the-counter pain relievers for post-exercise soreness'
        ]
      },
      emotionalConsiderations: [
        'You may feel anxious about being pushed to your limit',
        'Remember the staff is highly trained and monitoring you closely',
        'Emergency equipment is immediately available',
        'You can stop at any time if you feel unsafe',
        'Many people feel accomplished after completing the test'
      ]
    },

    anatomyInvolved: [
      {
        structure: 'Coronary Arteries',
        description: 'Blood vessels that supply the heart muscle with oxygen.',
        relevance: 'Stress testing detects narrowings that limit blood flow during exercise.',
        visualizationUrl: '/anatomy/coronary-arteries-3d',
        modelType: '3D'
      },
      {
        structure: 'Myocardium (Heart Muscle)',
        description: 'The muscle layer of the heart that contracts to pump blood.',
        relevance: 'Ischemia occurs when myocardium does not receive adequate blood flow.',
        visualizationUrl: '/anatomy/heart-wall-3d',
        modelType: '3D'
      },
      {
        structure: 'Cardiac Conduction System',
        description: 'Electrical system that controls heart rhythm.',
        relevance: 'Exercise may trigger arrhythmias or conduction abnormalities.',
        visualizationUrl: '/anatomy/cardiac-conduction-3d',
        modelType: '3D'
      }
    ],

    alternatives: [
      {
        procedureId: 'pharmacologic-stress-test',
        name: 'Pharmacologic Stress Test',
        whenPreferred: 'When patient cannot exercise adequately (mobility issues, severe lung disease, etc.).',
        comparisonNotes: 'Uses medications (adenosine, regadenoson, dobutamine) to stress heart instead of exercise.'
      },
      {
        procedureId: 'stress-echo',
        name: 'Stress Echocardiogram',
        whenPreferred: 'When ECG is uninterpretable or higher sensitivity/specificity needed.',
        comparisonNotes: 'Combines exercise with echocardiogram imaging for better diagnostic accuracy.'
      },
      {
        procedureId: 'nuclear-stress-test',
        name: 'Nuclear Stress Test (Myocardial Perfusion Imaging)',
        whenPreferred: 'When higher sensitivity needed or baseline ECG abnormal.',
        comparisonNotes: 'Uses radioactive tracer to image blood flow to heart; more sensitive.'
      },
      {
        procedureId: 'coronary-cta',
        name: 'Coronary CT Angiography',
        whenPreferred: 'Direct visualization of coronary arteries preferred.',
        comparisonNotes: 'Anatomical test that visualizes arteries directly but does not assess functional significance.'
      }
    ],

    specialConsiderations: [
      {
        population: 'Elderly patients',
        modifications: [
          'Modified or slower protocols may be used',
          'Lower target heart rate expectations',
          'More careful monitoring',
          'May need handrail support'
        ],
        additionalRisks: ['Falls', 'Exaggerated blood pressure response', 'Lower exercise capacity']
      },
      {
        population: 'Patients with diabetes',
        modifications: [
          'Monitor blood glucose before test',
          'May have silent ischemia',
          'Watch for hypoglycemia'
        ],
        additionalRisks: ['Silent ischemia', 'Hypoglycemia']
      },
      {
        population: 'Patients on beta-blockers',
        modifications: [
          'Heart rate response blunted',
          'May not reach target heart rate',
          'Medication may be held if assessing for ischemia'
        ],
        additionalRisks: ['May miss ischemia if heart rate does not increase adequately']
      },
      {
        population: 'Women',
        modifications: [
          'Baseline ST changes may be more common',
          'False positive rates higher',
          'Consider imaging stress test for better accuracy'
        ],
        additionalRisks: ['Higher false positive rate with ECG alone']
      }
    ],

    equipment: [
      {
        name: 'Treadmill',
        description: 'Motorized treadmill with variable speed and incline.',
        purpose: 'Provides controlled, progressively intense exercise.',
        imageUrl: '/equipment/stress-treadmill.jpg'
      },
      {
        name: '12-Lead ECG Monitor',
        description: 'Continuous ECG monitoring system.',
        purpose: 'Detects arrhythmias and ischemic changes during exercise.',
        imageUrl: '/equipment/stress-ecg-monitor.jpg'
      },
      {
        name: 'Blood Pressure Monitor',
        description: 'Automated or manual blood pressure cuff.',
        purpose: 'Tracks blood pressure response to exercise.',
        imageUrl: '/equipment/bp-monitor.jpg'
      },
      {
        name: 'Emergency Equipment',
        description: 'Defibrillator, crash cart, emergency medications.',
        purpose: 'Immediate response to rare serious complications.',
        imageUrl: '/equipment/crash-cart.jpg'
      }
    ],

    successRate: '90%+ for adequate study if patient can exercise; sensitivity ~70% for CAD detection, specificity ~80%',

    expectedOutcomes: [
      'Assessment of exercise capacity (in METs)',
      'Detection or exclusion of exercise-induced ischemia',
      'Evaluation of blood pressure response to exercise',
      'Assessment of heart rate response and recovery',
      'Detection of exercise-induced arrhythmias',
      'Prognostic information about cardiac risk'
    ],

    patientResources: [
      {
        title: 'Understanding Your Stress Test Results',
        url: '/education/stress-test-results',
        type: 'article'
      },
      {
        title: 'What is a Cardiac Stress Test?',
        url: '/education/stress-test-overview',
        type: 'video'
      },
      {
        title: 'Preparing for Your Stress Test',
        url: '/education/stress-test-prep',
        type: 'pdf'
      }
    ],

    lastUpdated: '2024-01-15',
    references: [
      'Gibbons RJ, et al. ACC/AHA 2002 Guideline Update for Exercise Testing.',
      'Fletcher GF, et al. Exercise Standards for Testing and Training: AHA Scientific Statement.',
      'Mark DB, et al. Prognostic Value of the Duke Treadmill Score.'
    ]
  },

  // ============================================================================
  // CARDIAC CATHETERIZATION
  // ============================================================================
  {
    id: 'cardiac-catheterization',
    name: 'Cardiac Catheterization',
    alternativeNames: ['Heart Cath', 'Coronary Angiogram', 'Cardiac Angiography', 'Left Heart Catheterization', 'Coronary Catheterization'],
    category: 'diagnostic',
    subcategory: 'cardiac',
    bodySystem: 'Cardiovascular System',

    cptCodes: [
      {
        code: '93458',
        description: 'Catheter placement in coronary arteries for coronary angiography, including intraprocedural injection(s) for coronary angiography, imaging supervision and interpretation; with left heart catheterization including intraprocedural injection(s) for left ventriculography',
        relativeValueUnits: 8.63
      },
      {
        code: '93454',
        description: 'Catheter placement in coronary arteries for coronary angiography, including intraprocedural injection(s) for coronary angiography, imaging supervision and interpretation',
        relativeValueUnits: 7.28
      },
      {
        code: '93460',
        description: 'Catheter placement in coronary arteries for coronary angiography, including intraprocedural injection(s) for coronary angiography, imaging supervision and interpretation; with right and left heart catheterization',
        relativeValueUnits: 10.43
      }
    ],

    description: {
      simple: 'Cardiac catheterization is a procedure where a long, thin tube is inserted into a blood vessel in your wrist or groin and threaded up to your heart. Special dye is injected so doctors can see your heart arteries on X-ray and find any blockages.',
      intermediate: 'Cardiac catheterization involves inserting a catheter through a peripheral artery (radial or femoral) and advancing it to the heart and coronary arteries. Contrast dye is injected to visualize the coronary arteries (coronary angiography), measure pressures in the heart chambers, and assess cardiac function. It is the gold standard for diagnosing coronary artery disease.',
      technical: 'Left heart catheterization involves retrograde arterial access via femoral or radial approach. Selective cannulation of coronary ostia with specific catheters (Judkins, Amplatz) allows coronary angiography with iodinated contrast. Fluoroscopy provides real-time visualization. LV angiography assesses EF and wall motion. Hemodynamic assessment includes aortic and LV pressures, transvalvular gradients, and cardiac output.',
      pediatric: 'A heart cath is when doctors put a very thin tube into a blood vessel in your wrist or leg and guide it to your heart using a special X-ray TV. They use special dye to take pictures of the blood vessels in your heart. You will be given medicine so you do not feel pain and may sleep through the whole thing.'
    },

    purpose: 'To directly visualize the coronary arteries for blockages, measure heart pressures, assess heart function, and potentially treat blockages with stents.',

    overview: 'Cardiac catheterization is the definitive diagnostic test for coronary artery disease. Introduced in 1929 by Werner Forssmann (who catheterized his own heart), it has evolved into a commonly performed procedure with therapeutic as well as diagnostic capabilities.',

    indications: [
      {
        condition: 'Acute coronary syndrome (heart attack)',
        explanation: 'Emergency catheterization to find and treat blocked arteries.',
        urgency: 'emergent'
      },
      {
        condition: 'Stable angina unresponsive to medical therapy',
        explanation: 'Identify blockages that may benefit from revascularization.',
        urgency: 'urgent'
      },
      {
        condition: 'Abnormal stress test',
        explanation: 'Define coronary anatomy when non-invasive test suggests disease.',
        urgency: 'urgent'
      },
      {
        condition: 'Heart failure workup',
        explanation: 'Determine if coronary disease is contributing to heart failure.',
        urgency: 'urgent'
      },
      {
        condition: 'Pre-operative for cardiac surgery',
        explanation: 'Define coronary anatomy before valve or other heart surgery.',
        urgency: 'urgent'
      },
      {
        condition: 'Valvular heart disease evaluation',
        explanation: 'Assess hemodynamic severity and look for concurrent coronary disease.',
        urgency: 'elective'
      },
      {
        condition: 'Cardiomyopathy evaluation',
        explanation: 'Rule out ischemic cause of heart muscle weakness.',
        urgency: 'elective'
      }
    ],

    contraindications: {
      absolute: [
        {
          condition: 'Patient refusal',
          reason: 'Informed consent is required.'
        },
        {
          condition: 'Severe anaphylactic contrast allergy without premedication',
          reason: 'Risk of life-threatening reaction.'
        }
      ],
      relative: [
        {
          condition: 'Acute kidney injury',
          reason: 'Contrast can worsen kidney function.',
          workaround: 'Minimize contrast volume; hydration; consider CO2 angiography.'
        },
        {
          condition: 'Chronic kidney disease',
          reason: 'Risk of contrast nephropathy.',
          workaround: 'Pre-procedure hydration; N-acetylcysteine; minimize contrast.'
        },
        {
          condition: 'Severe coagulopathy',
          reason: 'Bleeding risk at access site.',
          workaround: 'Correct if possible; use radial access; closure device.'
        },
        {
          condition: 'Active infection/sepsis',
          reason: 'Risk of endocarditis or septic emboli.',
          workaround: 'Treat infection first if procedure is elective.'
        },
        {
          condition: 'Uncontrolled hypertension',
          reason: 'Increased risk of stroke and complications.',
          workaround: 'Control blood pressure before procedure.'
        },
        {
          condition: 'Severe anemia',
          reason: 'Reduced oxygen-carrying capacity; bleeding risk.',
          workaround: 'Transfuse if symptomatic or Hgb <8.'
        }
      ]
    },

    setting: ['cardiac-cath-lab', 'hospital-inpatient'],

    anesthesiaOptions: [
      {
        type: 'local',
        description: 'Lidocaine at access site for numbing.',
        typical: true
      },
      {
        type: 'sedation',
        description: 'Conscious sedation with versed and fentanyl for comfort and anxiety.',
        typical: true
      },
      {
        type: 'general',
        description: 'General anesthesia used in rare cases or complex procedures.',
        typical: false
      }
    ],

    duration: {
      minimum: 30,
      typical: 60,
      maximum: 180,
      unit: 'minutes'
    },

    preparation: {
      daysBeforeInstructions: [
        {
          timing: '3-7 days before',
          instruction: 'Blood tests will be ordered (CBC, kidney function, coagulation tests).',
          rationale: 'Ensure safe procedure and plan contrast volume.',
          critical: true
        },
        {
          timing: '3-5 days before (if applicable)',
          instruction: 'Warfarin may be held and bridged with heparin.',
          rationale: 'Reduces bleeding risk at access site.',
          critical: true
        },
        {
          timing: '24 hours before',
          instruction: 'Arrange for someone to drive you home.',
          rationale: 'You cannot drive yourself after sedation.',
          critical: true
        }
      ],
      dayOfInstructions: [
        {
          timing: 'After midnight',
          instruction: 'Do not eat or drink anything after midnight.',
          rationale: 'Empty stomach required for sedation safety.',
          critical: true
        },
        {
          timing: 'Morning of procedure',
          instruction: 'Take blood pressure and heart medications with small sips of water unless otherwise instructed.',
          rationale: 'These medications are usually continued.',
          critical: true
        },
        {
          timing: 'Morning of procedure',
          instruction: 'Do not take diabetes medications if fasting.',
          rationale: 'Risk of low blood sugar while fasting.',
          critical: true
        }
      ],
      fastingRequired: true,
      fastingDuration: '6-8 hours (after midnight)',
      medicationAdjustments: [
        {
          medication: 'Metformin',
          instruction: 'Hold the day of procedure and for 48 hours after.',
          reason: 'Risk of lactic acidosis with contrast; monitor kidney function.'
        },
        {
          medication: 'Anticoagulants (warfarin)',
          instruction: 'Usually held 3-5 days before; may need bridging.',
          reason: 'Reduces bleeding risk at access site.'
        },
        {
          medication: 'Newer anticoagulants (DOACs)',
          instruction: 'Usually held 24-48 hours before.',
          reason: 'Reduces bleeding risk.'
        },
        {
          medication: 'Insulin',
          instruction: 'Usually half of long-acting dose; hold short-acting while fasting.',
          reason: 'Avoid hypoglycemia while fasting.'
        },
        {
          medication: 'ACE inhibitors/ARBs',
          instruction: 'Often held on day of procedure.',
          reason: 'May cause low blood pressure; protect kidneys from contrast.'
        }
      ],
      labsRequired: ['Complete blood count', 'Basic metabolic panel (creatinine)', 'Coagulation panel (PT/INR, PTT)', 'Type and screen'],
      imagingRequired: [],
      consentRequired: true
    },

    procedureSteps: [
      {
        stepNumber: 1,
        phase: 'preparation',
        action: 'Pre-procedure preparation',
        detailedDescription: 'IV line placed for medications and fluids. Pre-procedure checklist completed including consent, labs, medication review. Patient changes into gown. Groin or wrist prepared and may be shaved.',
        duration: '30 minutes',
        patientExperience: 'You change into a gown. An IV is placed. The area where the catheter will be inserted is cleaned and may be shaved. You will sign consent forms.',
        equipmentUsed: ['IV supplies', 'Prep kit', 'Consent forms']
      },
      {
        stepNumber: 2,
        phase: 'positioning',
        action: 'Transfer to catheterization lab',
        detailedDescription: 'Patient moved to cath lab table. Arms positioned, ECG leads applied, blood pressure cuff placed, pulse oximeter attached. Access site prepped with sterile technique. Patient draped with sterile drapes.',
        duration: '10 minutes',
        patientExperience: 'You lie on a narrow table. Monitor leads are attached. The room has large X-ray equipment around you. The area is cleaned with cold antiseptic and covered with sterile drapes.',
        equipmentUsed: ['Cath lab table', 'Monitors', 'Sterile drapes']
      },
      {
        stepNumber: 3,
        phase: 'anesthesia',
        action: 'Sedation and local anesthesia',
        detailedDescription: 'IV sedation administered (typically midazolam and fentanyl). Local anesthetic (lidocaine) injected at access site - either right radial artery (wrist) or femoral artery (groin).',
        duration: '5 minutes',
        patientExperience: 'You receive medications through your IV that make you relaxed and drowsy. You feel a sting as numbing medicine is injected at your wrist or groin. After that, you should not feel sharp pain.',
        criticalPoints: ['Adequate local anesthesia essential', 'Monitor vital signs during sedation'],
        equipmentUsed: ['Sedation medications', 'Lidocaine', 'Needles']
      },
      {
        stepNumber: 4,
        phase: 'procedure',
        action: 'Vascular access',
        detailedDescription: 'Artery punctured using modified Seldinger technique. Needle inserted, wire advanced under fluoroscopy, needle removed, sheath inserted over wire. This provides access for catheter insertion.',
        duration: '5 minutes',
        patientExperience: 'You feel pressure as the access is obtained. You should not feel sharp pain due to numbing medicine. This part is quick.',
        criticalPoints: ['Confirm arterial (not venous) access', 'Sheath must be stable before proceeding'],
        equipmentUsed: ['Access needle', 'Guidewire', 'Arterial sheath']
      },
      {
        stepNumber: 5,
        phase: 'procedure',
        action: 'Coronary angiography',
        detailedDescription: 'Catheters advanced through sheath to aortic root. Left and right coronary arteries selectively engaged. Contrast injected while X-ray movies (cine) are obtained in multiple angles.',
        duration: '10-15 minutes',
        patientExperience: 'You may feel warm flushing when dye is injected - this is normal and lasts a few seconds. The table may move and tilt to different positions for different views.',
        criticalPoints: ['Careful catheter manipulation to avoid dissection', 'Adequate visualization of all coronary segments'],
        equipmentUsed: ['Diagnostic catheters', 'Contrast', 'Fluoroscopy']
      },
      {
        stepNumber: 6,
        phase: 'procedure',
        action: 'Left ventriculography (if performed)',
        detailedDescription: 'Pigtail catheter advanced into left ventricle. Larger contrast bolus injected while cine obtained, showing ventricular contraction and wall motion.',
        duration: '5 minutes',
        patientExperience: 'You feel a stronger warm flush as more dye is injected. This lasts 10-20 seconds. Some patients feel like they need to urinate (you will not actually urinate).',
        criticalPoints: ['Watch for arrhythmias during LV injection'],
        equipmentUsed: ['Pigtail catheter', 'Contrast']
      },
      {
        stepNumber: 7,
        phase: 'procedure',
        action: 'Hemodynamic measurements',
        detailedDescription: 'Pressures measured in aorta and left ventricle. Gradient across aortic valve assessed if stenosis present. Cardiac output may be calculated.',
        duration: '5 minutes',
        patientExperience: 'You will not feel the pressure measurements. This is a time of waiting while the doctor evaluates data.',
        equipmentUsed: ['Pressure transducers', 'Hemodynamic monitoring system']
      },
      {
        stepNumber: 8,
        phase: 'completion',
        action: 'Catheter removal and hemostasis',
        detailedDescription: 'Catheters and sheath removed. Hemostasis achieved - for radial: TR band compression device; for femoral: manual pressure 15-20 min or closure device. Access site inspected.',
        duration: '15-30 minutes',
        patientExperience: 'The catheters are removed. For wrist access, a bracelet-like device is placed to stop bleeding. For groin access, someone presses on the area firmly for 15-20 minutes or a device is used.',
        criticalPoints: ['Adequate hemostasis critical', 'Check distal pulses after hemostasis'],
        equipmentUsed: ['TR band (radial)', 'Closure device or manual pressure (femoral)']
      },
      {
        stepNumber: 9,
        phase: 'recovery',
        action: 'Post-procedure monitoring',
        detailedDescription: 'Patient transferred to recovery area. Vital signs monitored every 15 minutes initially. Access site checked frequently. Radial patients may sit up immediately; femoral patients lie flat 2-6 hours.',
        duration: '2-6 hours',
        patientExperience: 'You are taken to a recovery area. If wrist access was used, you can sit up soon. If groin access was used, you must lie flat for 2-6 hours. Nurses check your blood pressure and access site frequently.',
        criticalPoints: ['Monitor for bleeding', 'Check distal pulses', 'Watch for chest pain or arrhythmias'],
        equipmentUsed: ['Monitoring equipment']
      }
    ],

    riskLevel: 'moderate',

    complications: [
      {
        name: 'Access site bleeding/hematoma',
        description: 'Bleeding or blood collection at the puncture site.',
        frequency: 'occasional',
        frequencyPercent: '2-5%',
        severity: 'mild',
        prevention: ['Proper hemostasis', 'Radial access when possible', 'Careful anticoagulation management'],
        treatment: ['Manual pressure', 'Ice', 'Most resolve without intervention'],
        warningSignsToReport: ['Large or expanding bruising', 'Severe pain', 'Numbness or weakness']
      },
      {
        name: 'Contrast reaction',
        description: 'Allergic reaction to contrast dye ranging from mild hives to severe anaphylaxis.',
        frequency: 'uncommon',
        frequencyPercent: '1-3%',
        severity: 'moderate',
        prevention: ['Pre-medication if previous reaction', 'Use low-osmolar contrast', 'Report allergies'],
        treatment: ['Antihistamines', 'Steroids', 'Epinephrine if severe'],
        warningSignsToReport: ['Hives', 'Difficulty breathing', 'Swelling of face or throat']
      },
      {
        name: 'Contrast-induced nephropathy',
        description: 'Temporary worsening of kidney function from contrast dye.',
        frequency: 'uncommon',
        frequencyPercent: '2-5%',
        severity: 'moderate',
        prevention: ['Hydration', 'Minimize contrast volume', 'Hold metformin'],
        treatment: ['IV fluids', 'Usually resolves within 1-2 weeks', 'Rarely requires dialysis'],
        warningSignsToReport: ['Decreased urination', 'Swelling', 'Nausea']
      },
      {
        name: 'Arrhythmia',
        description: 'Abnormal heart rhythm triggered by catheter or contrast.',
        frequency: 'occasional',
        frequencyPercent: '1-3%',
        severity: 'moderate',
        prevention: ['Careful catheter manipulation', 'Monitoring'],
        treatment: ['Most resolve spontaneously', 'Medications if needed', 'Defibrillation rarely needed'],
        warningSignsToReport: ['Palpitations', 'Dizziness', 'Chest pain']
      },
      {
        name: 'Stroke',
        description: 'Blood clot or plaque debris travels to brain causing stroke.',
        frequency: 'rare',
        frequencyPercent: '0.1-0.2%',
        severity: 'severe',
        prevention: ['Careful technique', 'Flush catheters', 'Anticoagulation'],
        treatment: ['Emergency stroke protocols', 'May need intervention'],
        warningSignsToReport: ['Sudden weakness', 'Speech difficulty', 'Vision changes', 'Confusion']
      },
      {
        name: 'Heart attack (MI)',
        description: 'Damage to heart muscle from catheter-induced blockage or dissection.',
        frequency: 'rare',
        frequencyPercent: '0.1-0.2%',
        severity: 'severe',
        prevention: ['Careful catheter manipulation', 'Avoid prolonged coronary engagement'],
        treatment: ['Emergency intervention (PCI)', 'Supportive care'],
        warningSignsToReport: ['Chest pain', 'Shortness of breath', 'Sweating']
      },
      {
        name: 'Vascular complications',
        description: 'Damage to blood vessels including dissection, pseudoaneurysm, AV fistula.',
        frequency: 'uncommon',
        frequencyPercent: '0.5-2%',
        severity: 'moderate',
        prevention: ['Careful access technique', 'Ultrasound-guided access if difficult'],
        treatment: ['May require surgical repair', 'Observation for minor issues'],
        warningSignsToReport: ['Swelling at access site', 'Pulsating mass', 'Bruit (whooshing sound)']
      },
      {
        name: 'Death',
        description: 'Very rare but possible with any invasive cardiac procedure.',
        frequency: 'rare',
        frequencyPercent: '0.1%',
        severity: 'life-threatening',
        prevention: ['Careful patient selection', 'Experienced operators', 'Emergency equipment available'],
        treatment: ['Full resuscitative measures'],
        warningSignsToReport: ['Any severe symptoms should prompt immediate medical attention']
      }
    ],

    recovery: {
      immediateRecovery: 'Stay in recovery for 2-6 hours depending on access site. Lie flat if femoral access was used.',
      returnToNormalActivities: 'Most patients go home same day. Avoid heavy lifting for 3-5 days. Can return to work in 1-2 days for desk jobs.',
      fullRecovery: 'Access site heals within 1-2 weeks. Bruising resolves in 2-3 weeks.',
      restrictions: [
        'No driving for 24 hours',
        'No heavy lifting (>10 lbs) for 3-5 days',
        'Avoid baths, swimming, hot tubs for 5-7 days (showers OK after 24 hours)',
        'If radial access: avoid heavy use of that wrist for 24-48 hours',
        'If femoral access: avoid bending at hip, climbing stairs minimally for 24-48 hours'
      ],
      followUpSchedule: [
        'Results usually discussed before discharge',
        'Follow-up with cardiologist within 1-2 weeks',
        'Kidney function may be rechecked if contrast used',
        'Call immediately if any concerning symptoms'
      ]
    },

    patientExperience: {
      beforeProcedure: [
        'You may be anxious about having a catheter in your heart.',
        'Fasting may leave you hungry and a bit irritable.',
        'The pre-procedure area may be busy with other patients.',
        'You will meet the team and have time to ask questions.'
      ],
      duringProcedure: [
        'The room is cool and bright with large equipment.',
        'You lie on a narrow, hard table that may move.',
        'Sedation makes you relaxed and drowsy - you may doze.',
        'You feel pressure but not sharp pain at the access site.',
        'You feel warm flushing when contrast is injected - this is normal.',
        'The procedure typically takes 30-60 minutes but time passes quickly with sedation.'
      ],
      immediatelyAfter: [
        'You may feel groggy from sedation.',
        'Lying flat after femoral access can be uncomfortable.',
        'Your access site will be checked frequently.',
        'You will be encouraged to drink fluids to flush out contrast.',
        'Results are usually discussed before you leave.'
      ],
      daysAfter: [
        'Some bruising at the access site is normal.',
        'Mild soreness at the access site for a few days.',
        'You may feel tired for 1-2 days.',
        'Call if you have concerning symptoms.'
      ],
      sensationsToExpect: [
        'Stinging from local anesthetic',
        'Pressure during catheter insertion',
        'Warm flushing from contrast injection',
        'Brief feeling like you need to urinate during LV injection',
        'Drowsiness from sedation'
      ],
      painLevel: {
        during: '1-3/10 with adequate local anesthesia and sedation.',
        after: '1-3/10, mostly access site soreness. Lying flat can cause back discomfort.',
        managementOptions: [
          'Local anesthesia at access site',
          'IV sedation for comfort and anxiety',
          'Post-procedure pain medication if needed',
          'Ice to access site for bruising'
        ]
      },
      emotionalConsiderations: [
        'Anxiety about the procedure is very common',
        'Knowing what to expect helps reduce anxiety',
        'Sedation helps most patients feel calm',
        'Getting answers about your heart condition can bring relief',
        'Finding blockages can be scary but allows for treatment planning'
      ]
    },

    anatomyInvolved: [
      {
        structure: 'Radial Artery',
        description: 'Artery in the wrist, increasingly used for catheter access.',
        relevance: 'Preferred access site in many centers due to lower complication rate.',
        visualizationUrl: '/anatomy/wrist-arteries-3d',
        modelType: '3D'
      },
      {
        structure: 'Femoral Artery',
        description: 'Large artery in the groin.',
        relevance: 'Traditional access site, larger sheath sizes possible.',
        visualizationUrl: '/anatomy/femoral-artery-3d',
        modelType: '3D'
      },
      {
        structure: 'Aorta',
        description: 'Main artery leaving the heart.',
        relevance: 'Catheter travels through aorta to reach coronary arteries.',
        visualizationUrl: '/anatomy/aorta-3d',
        modelType: '3D'
      },
      {
        structure: 'Left Coronary Artery (Left Main, LAD, Circumflex)',
        description: 'Supplies blood to the front and side of the heart.',
        relevance: 'Primary target for angiography - blockages here cause heart attacks.',
        visualizationUrl: '/anatomy/coronary-arteries-3d',
        modelType: '3D'
      },
      {
        structure: 'Right Coronary Artery',
        description: 'Supplies blood to the bottom and right side of the heart.',
        relevance: 'Visualized during angiography; blockages can cause heart attacks.',
        visualizationUrl: '/anatomy/coronary-arteries-3d',
        modelType: '3D'
      },
      {
        structure: 'Left Ventricle',
        description: 'Main pumping chamber of the heart.',
        relevance: 'Ventriculography shows how well it contracts.',
        visualizationUrl: '/anatomy/heart-chambers-3d',
        modelType: '3D'
      }
    ],

    alternatives: [
      {
        procedureId: 'coronary-cta',
        name: 'Coronary CT Angiography',
        whenPreferred: 'For lower-risk patients with stable symptoms; excellent negative predictive value.',
        comparisonNotes: 'Non-invasive but uses radiation; cannot treat blockages.'
      },
      {
        procedureId: 'stress-test',
        name: 'Stress Testing (various types)',
        whenPreferred: 'Initial evaluation of chest pain when probability of CAD is intermediate.',
        comparisonNotes: 'Non-invasive functional test; if positive, may still need catheterization.'
      },
      {
        procedureId: 'cardiac-mri',
        name: 'Cardiac MRI with Stress',
        whenPreferred: 'For detailed tissue characterization and stress perfusion.',
        comparisonNotes: 'No radiation; excellent imaging but longer, more expensive.'
      }
    ],

    specialConsiderations: [
      {
        population: 'Chronic kidney disease',
        modifications: [
          'Pre-procedure hydration',
          'Minimize contrast volume',
          'Consider N-acetylcysteine',
          'May use CO2 angiography',
          'Monitor creatinine after'
        ],
        additionalRisks: ['Contrast nephropathy', 'May need dialysis']
      },
      {
        population: 'Patients on anticoagulation',
        modifications: [
          'Coordinate with anticoagulation team',
          'May need bridging',
          'Radial access preferred',
          'Closure devices for femoral'
        ],
        additionalRisks: ['Bleeding', 'Hematoma']
      },
      {
        population: 'Elderly patients',
        modifications: [
          'Lower doses of sedation',
          'Careful fluid management',
          'Higher risk overall'
        ],
        additionalRisks: ['Vascular complications', 'Kidney injury', 'Confusion']
      },
      {
        population: 'Emergency/STEMI patients',
        modifications: [
          'Expedited access - door-to-balloon time',
          'Limited workup possible',
          'Higher contrast allergy risk if not premedicated'
        ],
        additionalRisks: ['Higher complication rates due to instability']
      }
    ],

    equipment: [
      {
        name: 'Cardiac Catheterization Table',
        description: 'Specialized table that moves and tilts for optimal imaging.',
        purpose: 'Positions patient for X-ray imaging from multiple angles.',
        imageUrl: '/equipment/cath-lab-table.jpg'
      },
      {
        name: 'Fluoroscopy System',
        description: 'Real-time X-ray imaging system.',
        purpose: 'Provides live visualization of catheters and contrast.',
        imageUrl: '/equipment/cath-lab-fluoro.jpg'
      },
      {
        name: 'Diagnostic Catheters',
        description: 'Various shaped catheters (Judkins, Amplatz, etc.).',
        purpose: 'Engage coronary arteries for contrast injection.',
        imageUrl: '/equipment/diagnostic-catheters.jpg'
      },
      {
        name: 'Arterial Sheath',
        description: 'Short tube inserted into artery for catheter access.',
        purpose: 'Provides stable access for catheter insertion and removal.',
        imageUrl: '/equipment/arterial-sheath.jpg'
      },
      {
        name: 'Contrast Injector',
        description: 'Automated or manual contrast injection system.',
        purpose: 'Delivers precise amounts of contrast for imaging.',
        imageUrl: '/equipment/contrast-injector.jpg'
      },
      {
        name: 'Hemodynamic Monitoring System',
        description: 'Pressure measurement and recording system.',
        purpose: 'Measures and displays intracardiac pressures.',
        imageUrl: '/equipment/hemodynamic-monitor.jpg'
      }
    ],

    successRate: '98-99% for diagnostic completion; findings lead to treatment decisions in most patients',

    expectedOutcomes: [
      'Clear visualization of all coronary arteries',
      'Identification of any blockages or narrowings',
      'Assessment of blockage severity and location',
      'Measurement of heart function (ejection fraction)',
      'Treatment planning (medical, PCI, or surgery)'
    ],

    patientResources: [
      {
        title: 'Understanding Your Cardiac Catheterization Results',
        url: '/education/cath-results',
        type: 'article'
      },
      {
        title: 'What is Cardiac Catheterization?',
        url: '/education/cath-overview',
        type: 'video'
      },
      {
        title: 'Preparing for Your Heart Catheterization',
        url: '/education/cath-prep',
        type: 'pdf'
      },
      {
        title: 'Recovery After Cardiac Catheterization',
        url: '/education/cath-recovery',
        type: 'article'
      }
    ],

    lastUpdated: '2024-01-15',
    references: [
      'Kern MJ, et al. The Cardiac Catheterization Handbook. Elsevier, 2023.',
      'ACC/AHA Guidelines for Coronary Angiography.',
      'Bashore TM, et al. ACCF/SCAI Expert Consensus Document on Cardiac Catheterization Laboratory Standards.'
    ]
  }
];

export default cardiacProcedures;
