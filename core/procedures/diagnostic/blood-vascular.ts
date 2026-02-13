/**
 * Biological Self - Blood and Vascular Diagnostic Procedures
 */

import { MedicalProcedure } from '../types';

export const bloodVascularProcedures: MedicalProcedure[] = [
  // ============================================================================
  // VENIPUNCTURE / BLOOD DRAW
  // ============================================================================
  {
    id: 'venipuncture',
    name: 'Venipuncture (Blood Draw)',
    alternativeNames: ['Phlebotomy', 'Blood Test', 'Blood Work', 'Blood Collection'],
    category: 'diagnostic',
    subcategory: 'blood-vascular',
    bodySystem: 'Circulatory System',

    cptCodes: [
      {
        code: '36415',
        description: 'Collection of venous blood by venipuncture',
        relativeValueUnits: 0.17
      },
      {
        code: '36416',
        description: 'Collection of capillary blood specimen (finger/heel/ear stick)',
        relativeValueUnits: 0.10
      }
    ],

    description: {
      simple: 'A blood draw is when a healthcare worker uses a needle to take a small amount of blood from a vein in your arm. This blood is then tested in a laboratory to check your health.',
      intermediate: 'Venipuncture is a routine medical procedure where blood is collected from a vein, typically in the arm, using a needle and collection tubes. The blood samples are analyzed to measure various markers including blood cell counts, chemistry panels, hormone levels, and disease markers.',
      technical: 'Venipuncture involves percutaneous puncture of a superficial vein, typically the median cubital, cephalic, or basilic vein in the antecubital fossa, using a multi-sample needle with vacuum collection tubes or syringe aspiration. Proper technique requires tourniquet application 3-4 inches above the site, antiseptic preparation, needle insertion at 15-30 degrees, and sequential tube collection following correct order of draw.',
      pediatric: 'A blood draw is like a tiny pinch in your arm. The doctor or nurse will put a small needle in your arm for just a few seconds to collect some blood. It helps doctors check that your body is healthy and working well.'
    },

    purpose: 'To collect blood samples for laboratory analysis to diagnose conditions, monitor health, check organ function, and screen for diseases.',

    overview: 'Venipuncture is the most common medical procedure performed worldwide, with billions of blood draws conducted annually. It is fundamental to modern medicine, enabling diagnosis and monitoring of countless conditions from diabetes to infections to cancer.',

    indications: [
      {
        condition: 'Routine health screening',
        explanation: 'Annual checkups include blood tests to monitor overall health, cholesterol, blood sugar, and organ function.',
        urgency: 'elective'
      },
      {
        condition: 'Diagnosis of symptoms',
        explanation: 'Blood tests help identify the cause of symptoms like fatigue, fever, pain, or unexplained weight loss.',
        urgency: 'urgent'
      },
      {
        condition: 'Monitoring chronic conditions',
        explanation: 'Regular blood tests track conditions like diabetes, thyroid disorders, kidney disease, and liver problems.',
        urgency: 'elective'
      },
      {
        condition: 'Medication monitoring',
        explanation: 'Certain medications require blood tests to ensure proper dosing and check for side effects.',
        urgency: 'elective'
      },
      {
        condition: 'Pre-surgical evaluation',
        explanation: 'Blood tests before surgery assess clotting function, blood type, and overall health status.',
        urgency: 'urgent'
      },
      {
        condition: 'Infection workup',
        explanation: 'Blood cultures and other tests identify bacterial, viral, or other infections.',
        urgency: 'emergent'
      }
    ],

    contraindications: {
      absolute: [
        {
          condition: 'IV infusion at the site',
          reason: 'Drawing blood from an arm receiving IV fluids will dilute the sample and give inaccurate results.'
        },
        {
          condition: 'Mastectomy or lymph node removal on that side',
          reason: 'Risk of lymphedema and compromised lymphatic drainage; use opposite arm.'
        },
        {
          condition: 'AV fistula or graft for dialysis',
          reason: 'Risk of damaging the dialysis access; never use that arm for blood draws.'
        }
      ],
      relative: [
        {
          condition: 'Severe bruising or hematoma at site',
          reason: 'Increased risk of further injury and inaccurate results.',
          workaround: 'Use alternative site on other arm or hand.'
        },
        {
          condition: 'Bleeding disorders or anticoagulant therapy',
          reason: 'Increased bleeding risk and bruising.',
          workaround: 'Apply pressure for extended time (5+ minutes) after draw.'
        },
        {
          condition: 'Extremely dehydrated patient',
          reason: 'Veins may be difficult to locate and prone to collapse.',
          workaround: 'Hydrate patient first if possible; use smaller gauge needle.'
        },
        {
          condition: 'History of fainting with blood draws',
          reason: 'Vasovagal response risk.',
          workaround: 'Have patient lie down during procedure.'
        }
      ]
    },

    setting: ['outpatient-clinic', 'hospital-outpatient', 'hospital-inpatient', 'emergency-department', 'home'],

    anesthesiaOptions: [
      {
        type: 'none',
        description: 'Most blood draws are performed without any anesthesia.',
        typical: true
      },
      {
        type: 'topical',
        description: 'Numbing cream (EMLA or LMX) may be applied for children or anxious patients.',
        typical: false
      }
    ],

    duration: {
      minimum: 2,
      typical: 5,
      maximum: 15,
      unit: 'minutes'
    },

    preparation: {
      daysBeforeInstructions: [
        {
          timing: '1-2 days before',
          instruction: 'Confirm if fasting is required for your specific tests.',
          rationale: 'Some tests like glucose and lipid panels require fasting for accurate results.',
          critical: true
        },
        {
          timing: '24 hours before',
          instruction: 'Stay well hydrated by drinking plenty of water.',
          rationale: 'Good hydration makes veins easier to find and reduces discomfort.',
          critical: false
        }
      ],
      dayOfInstructions: [
        {
          timing: 'Morning of procedure',
          instruction: 'If fasting is required, do not eat or drink anything except water for 8-12 hours before.',
          rationale: 'Food intake affects blood sugar, cholesterol, and other test results.',
          critical: true
        },
        {
          timing: 'Before appointment',
          instruction: 'Wear a short-sleeved shirt or loose sleeves that can be easily rolled up.',
          rationale: 'Easy access to the arm speeds up the procedure.',
          critical: false
        },
        {
          timing: 'Before appointment',
          instruction: 'Continue taking medications unless specifically instructed otherwise.',
          rationale: 'Most medications should be continued; some may be held.',
          critical: true
        }
      ],
      fastingRequired: false, // Depends on tests ordered
      fastingDuration: '8-12 hours if required',
      medicationAdjustments: [
        {
          medication: 'Blood thinners (warfarin, aspirin)',
          instruction: 'Continue taking unless instructed otherwise; inform phlebotomist.',
          reason: 'May cause more bruising; extra pressure needed after draw.'
        },
        {
          medication: 'Biotin supplements',
          instruction: 'Stop 48-72 hours before certain tests.',
          reason: 'Biotin can interfere with some hormone and cardiac tests.'
        }
      ],
      labsRequired: [],
      imagingRequired: [],
      consentRequired: false
    },

    procedureSteps: [
      {
        stepNumber: 1,
        phase: 'preparation',
        action: 'Patient identification and verification',
        detailedDescription: 'The phlebotomist verifies the patient identity using two identifiers (name and date of birth), confirms ordered tests, and checks for any special requirements such as fasting status.',
        duration: '1 minute',
        patientExperience: 'You will be asked to confirm your name and birthdate. The technician will ask about your fasting status and any concerns.',
        criticalPoints: ['Proper patient identification prevents wrong-patient errors'],
        equipmentUsed: ['Lab requisition form', 'Patient ID band (if hospitalized)']
      },
      {
        stepNumber: 2,
        phase: 'preparation',
        action: 'Equipment assembly',
        detailedDescription: 'The phlebotomist assembles supplies including appropriate gauge needle (typically 21-gauge), vacuum tubes in correct order of draw, tourniquet, antiseptic wipes, gauze, and bandage.',
        duration: '30 seconds',
        patientExperience: 'You may see the technician organizing various colored tubes and supplies.',
        equipmentUsed: ['Multi-sample needle or butterfly needle', 'Tube holder', 'Vacuum collection tubes', 'Tourniquet', 'Alcohol swabs', 'Gauze', 'Bandage']
      },
      {
        stepNumber: 3,
        phase: 'positioning',
        action: 'Patient positioning and site selection',
        detailedDescription: 'The patient sits comfortably with arm extended and supported. The phlebotomist applies the tourniquet 3-4 inches above the intended site and palpates for suitable veins, typically selecting the median cubital vein in the antecubital fossa.',
        duration: '30 seconds',
        patientExperience: 'You will sit with your arm extended, palm up. A stretchy band will be wrapped around your upper arm, which may feel tight. The technician will feel for a vein.',
        criticalPoints: ['Tourniquet should not be left on more than 1 minute', 'Avoid areas with scarring, edema, or previous complications'],
        equipmentUsed: ['Tourniquet']
      },
      {
        stepNumber: 4,
        phase: 'procedure',
        action: 'Site cleansing',
        detailedDescription: 'The selected site is cleaned with 70% isopropyl alcohol using a circular motion from center outward. The area is allowed to air dry for 30 seconds.',
        duration: '30 seconds',
        patientExperience: 'The technician will clean your arm with a cold, wet alcohol swab. It dries quickly.',
        criticalPoints: ['Do not touch the cleaned area', 'Allow alcohol to dry completely to prevent hemolysis and reduce sting'],
        equipmentUsed: ['Alcohol prep pad']
      },
      {
        stepNumber: 5,
        phase: 'procedure',
        action: 'Vein puncture',
        detailedDescription: 'The phlebotomist anchors the vein by pulling the skin taut below the insertion site. The needle is inserted bevel up at a 15-30 degree angle. A flash of blood in the hub confirms successful venipuncture.',
        duration: '5 seconds',
        patientExperience: 'You will feel a quick pinch or sting as the needle enters. This lasts only a second or two. Try to keep your arm still.',
        criticalPoints: ['Proper anchoring prevents vein rolling', 'Correct angle prevents through-and-through puncture'],
        equipmentUsed: ['Venipuncture needle']
      },
      {
        stepNumber: 6,
        phase: 'procedure',
        action: 'Blood collection',
        detailedDescription: 'Vacuum tubes are inserted into the holder and fill automatically. Tubes are collected in the proper order of draw: blood cultures, light blue (coagulation), red/gold (serum), green (heparin), lavender (EDTA), gray (glucose).',
        duration: '30 seconds to 2 minutes',
        patientExperience: 'You may see blood flowing into tubes. You might feel a slight pulling sensation. The technician may fill several tubes of different colors.',
        criticalPoints: ['Correct order of draw prevents cross-contamination', 'Tubes must be inverted immediately after filling'],
        equipmentUsed: ['Vacuum collection tubes', 'Tube holder']
      },
      {
        stepNumber: 7,
        phase: 'completion',
        action: 'Tourniquet release and needle withdrawal',
        detailedDescription: 'The tourniquet is released before the last tube finishes filling. Gauze is placed over the site without pressure, and the needle is withdrawn smoothly at the same angle as insertion.',
        duration: '5 seconds',
        patientExperience: 'The band around your arm will be removed. You will feel slight relief as the needle is taken out.',
        criticalPoints: ['Release tourniquet before removing needle to prevent hematoma', 'Do not bend arm immediately'],
        equipmentUsed: ['Gauze pad']
      },
      {
        stepNumber: 8,
        phase: 'completion',
        action: 'Pressure application and bandaging',
        detailedDescription: 'Firm pressure is applied to the puncture site with gauze for 2-5 minutes (longer for patients on anticoagulants). Once bleeding stops, a bandage is applied.',
        duration: '2-5 minutes',
        patientExperience: 'Press firmly on the gauze. Keep your arm straight - do not bend it. A bandage will be applied when bleeding stops.',
        criticalPoints: ['Adequate pressure prevents hematoma', 'Patients on blood thinners need extended pressure'],
        equipmentUsed: ['Gauze', 'Adhesive bandage or tape']
      },
      {
        stepNumber: 9,
        phase: 'recovery',
        action: 'Post-procedure instructions',
        detailedDescription: 'The patient is instructed to keep the bandage on for 15-30 minutes, avoid heavy lifting with that arm for several hours, and watch for signs of complications.',
        duration: '1 minute',
        patientExperience: 'You will be told when to remove the bandage and what to watch for. You can resume normal activities immediately.',
        criticalPoints: ['Patients prone to fainting should sit for 5-10 minutes before leaving']
      }
    ],

    riskLevel: 'minimal',

    complications: [
      {
        name: 'Bruising (Hematoma)',
        description: 'Blood leaks into surrounding tissue causing a bruise at the puncture site.',
        frequency: 'common',
        frequencyPercent: '5-15%',
        severity: 'mild',
        prevention: ['Apply adequate pressure after needle removal', 'Do not bend arm immediately', 'Keep arm straight'],
        treatment: ['Apply ice for 20 minutes', 'Keep arm elevated', 'Bruise will resolve in 1-2 weeks'],
        warningSignsToReport: ['Excessive swelling', 'Numbness or tingling', 'Bruise that continues to grow']
      },
      {
        name: 'Fainting (Vasovagal Response)',
        description: 'A nervous system reaction causing lightheadedness, dizziness, or loss of consciousness.',
        frequency: 'uncommon',
        frequencyPercent: '2-5%',
        severity: 'mild',
        prevention: ['Inform staff of history of fainting', 'Lie down during procedure', 'Stay hydrated', 'Avoid looking at the needle'],
        treatment: ['Lie flat with legs elevated', 'Cool cloth on forehead', 'Remain seated until symptoms resolve'],
        warningSignsToReport: ['Chest pain', 'Shortness of breath', 'Irregular heartbeat']
      },
      {
        name: 'Infection',
        description: 'Bacteria enter through the puncture site causing local or systemic infection.',
        frequency: 'rare',
        frequencyPercent: '<0.1%',
        severity: 'moderate',
        prevention: ['Proper antiseptic technique', 'Clean bandage', 'Good hand hygiene'],
        treatment: ['Antibiotics if infection develops', 'Warm compresses for local infection'],
        warningSignsToReport: ['Increasing redness or swelling', 'Warmth at site', 'Pus or discharge', 'Fever', 'Red streaks up arm']
      },
      {
        name: 'Nerve Injury',
        description: 'Needle contacts or damages a nerve causing pain, numbness, or tingling.',
        frequency: 'rare',
        frequencyPercent: '<0.1%',
        severity: 'moderate',
        prevention: ['Proper site selection', 'Appropriate needle depth', 'Experienced phlebotomist'],
        treatment: ['Immediate needle removal if nerve symptoms occur', 'Most resolve spontaneously in days to weeks', 'Referral to specialist if persistent'],
        warningSignsToReport: ['Persistent numbness or tingling', 'Shooting pain down arm', 'Weakness in hand']
      },
      {
        name: 'Vein Damage (Phlebitis)',
        description: 'Inflammation of the vein causing redness, warmth, and pain along the vein.',
        frequency: 'rare',
        frequencyPercent: '<0.5%',
        severity: 'mild',
        prevention: ['Proper technique', 'Use appropriate needle size', 'Avoid multiple attempts in same area'],
        treatment: ['Warm compresses', 'Over-the-counter pain relievers', 'Usually resolves in 1-2 weeks'],
        warningSignsToReport: ['Increasing pain or swelling', 'Fever', 'Hard cord-like feeling in vein']
      }
    ],

    recovery: {
      immediateRecovery: 'Most people can leave immediately after the procedure. Those who feel faint should sit for 5-10 minutes.',
      returnToNormalActivities: 'Immediately - you can drive, work, and continue normal activities right after.',
      fullRecovery: 'The puncture site heals within 1-2 days. Any bruising fades within 1-2 weeks.',
      restrictions: [
        'Avoid heavy lifting with the affected arm for 4-6 hours',
        'Keep bandage on for 15-30 minutes',
        'Avoid submerging the site in water for 24 hours'
      ],
      followUpSchedule: [
        'Test results typically available within 24-72 hours depending on the tests ordered',
        'Your healthcare provider will contact you with results or next steps'
      ]
    },

    patientExperience: {
      beforeProcedure: [
        'You may feel nervous, especially if you do not like needles. This is completely normal.',
        'The waiting area may have other patients also waiting for blood draws.',
        'You will be called by name and taken to a chair or private area.'
      ],
      duringProcedure: [
        'The tourniquet around your upper arm feels tight, like a blood pressure cuff.',
        'The alcohol wipe feels cold and wet.',
        'The needle insertion feels like a quick pinch or bee sting that lasts 1-2 seconds.',
        'You may feel a dull pressure or pulling sensation while blood is being collected.',
        'The entire process from needle in to needle out takes about 30 seconds to 2 minutes.'
      ],
      immediatelyAfter: [
        'The puncture site may feel slightly sore, like a small bruise.',
        'You may feel relieved that it is over.',
        'If you feel lightheaded, tell the technician immediately.'
      ],
      daysAfter: [
        'A small bruise may develop and is normal.',
        'Mild tenderness at the site for 1-2 days is common.',
        'You may feel anxious waiting for test results.'
      ],
      sensationsToExpect: [
        'Quick pinch or sting during needle insertion',
        'Tight pressure from the tourniquet',
        'Mild pulling or pressure during collection',
        'Cool wetness from alcohol prep',
        'Possible brief dizziness in some people'
      ],
      painLevel: {
        during: 'Most people rate the pain as 1-3 out of 10, similar to a brief pinch.',
        after: 'Usually 0-1 out of 10, just mild tenderness if anything.',
        managementOptions: [
          'Numbing cream can be applied 30-60 minutes before for needle-phobic patients',
          'Over-the-counter pain relievers rarely needed',
          'Ice pack for bruising or swelling'
        ]
      },
      emotionalConsiderations: [
        'Needle anxiety is very common - let your healthcare team know so they can help',
        'Looking away during the procedure helps many people',
        'Deep breathing or distraction techniques can reduce anxiety',
        'Bringing a support person is always allowed',
        'Waiting for results can cause anxiety - ask your provider when to expect them'
      ]
    },

    anatomyInvolved: [
      {
        structure: 'Median Cubital Vein',
        description: 'The most commonly used vein, located in the bend of the elbow (antecubital fossa). It is usually visible, stable, and close to the surface.',
        relevance: 'Primary site for routine blood draws due to accessibility and size.',
        visualizationUrl: '/anatomy/arm-veins-3d',
        modelType: '3D'
      },
      {
        structure: 'Cephalic Vein',
        description: 'Runs along the outer (lateral) aspect of the arm, from the hand up to the shoulder.',
        relevance: 'Alternative site when median cubital is not accessible.',
        visualizationUrl: '/anatomy/arm-veins-3d',
        modelType: '3D'
      },
      {
        structure: 'Basilic Vein',
        description: 'Runs along the inner (medial) aspect of the arm. Deeper and closer to nerves.',
        relevance: 'Used as last resort in the antecubital area due to proximity to nerves.',
        visualizationUrl: '/anatomy/arm-veins-3d',
        modelType: '3D'
      },
      {
        structure: 'Dorsal Hand Veins',
        description: 'Network of visible veins on the back of the hand.',
        relevance: 'Alternative site when arm veins are not accessible. Smaller gauge needle used.',
        visualizationUrl: '/anatomy/hand-veins-3d',
        modelType: '3D'
      }
    ],

    alternatives: [
      {
        procedureId: 'capillary-blood-collection',
        name: 'Capillary Blood Collection (Finger Stick)',
        whenPreferred: 'When only small amounts of blood are needed, such as for glucose testing or in infants.',
        comparisonNotes: 'Less painful for small volumes but not suitable for most lab tests.'
      },
      {
        procedureId: 'arterial-blood-gas',
        name: 'Arterial Blood Draw',
        whenPreferred: 'When arterial blood is specifically needed, such as for blood gas analysis.',
        comparisonNotes: 'More painful and higher risk; only used when arterial sample is required.'
      }
    ],

    specialConsiderations: [
      {
        population: 'Pediatric patients',
        modifications: [
          'Use smaller gauge needles (23-25 gauge)',
          'Consider butterfly needles for better control',
          'Apply topical anesthetic cream 30-60 minutes before',
          'Use distraction techniques (videos, toys)',
          'May use heel stick for newborns'
        ],
        additionalRisks: ['Higher anxiety levels', 'Smaller veins more prone to collapse']
      },
      {
        population: 'Elderly patients',
        modifications: [
          'Fragile veins may require smaller gauge needles',
          'Skin may be thin - use gentle technique',
          'May need longer time for bleeding to stop',
          'Veins may roll - anchor more firmly'
        ],
        additionalRisks: ['Increased bruising risk', 'Fragile veins prone to rupture']
      },
      {
        population: 'Patients on anticoagulants',
        modifications: [
          'Apply pressure for 5-10 minutes after draw',
          'Use smaller gauge needle when possible',
          'Avoid multiple attempts'
        ],
        additionalRisks: ['Significant bruising', 'Prolonged bleeding']
      },
      {
        population: 'Patients with needle phobia',
        modifications: [
          'Allow patient to lie down',
          'Use distraction or relaxation techniques',
          'Consider topical anesthetic',
          'Allow support person to be present',
          'Provide plenty of time and reassurance'
        ],
        additionalRisks: ['Vasovagal response', 'Movement during procedure']
      },
      {
        population: 'Obese patients',
        modifications: [
          'Use longer needle if needed',
          'May need to palpate deeper',
          'Consider ultrasound-guided draw if very difficult access'
        ],
        additionalRisks: ['Difficult vein location', 'May require multiple attempts']
      }
    ],

    equipment: [
      {
        name: 'Multi-sample Needle',
        description: 'Double-ended needle that connects to tube holder, allowing multiple tubes to be filled with single puncture.',
        purpose: 'Primary needle for standard blood draws.',
        imageUrl: '/equipment/multi-sample-needle.jpg'
      },
      {
        name: 'Butterfly Needle (Winged Infusion Set)',
        description: 'Small, winged needle with flexible tubing, available in 21-25 gauge.',
        purpose: 'Used for difficult veins, hand draws, or pediatric patients.',
        imageUrl: '/equipment/butterfly-needle.jpg'
      },
      {
        name: 'Vacuum Collection Tubes',
        description: 'Color-coded tubes with different additives for specific tests.',
        purpose: 'Each color indicates a specific additive for different test types.',
        imageUrl: '/equipment/blood-collection-tubes.jpg'
      },
      {
        name: 'Tourniquet',
        description: 'Elastic band applied to upper arm to distend veins.',
        purpose: 'Makes veins more visible and palpable.',
        imageUrl: '/equipment/tourniquet.jpg'
      },
      {
        name: 'Alcohol Prep Pads',
        description: '70% isopropyl alcohol-soaked pads.',
        purpose: 'Antiseptic preparation of puncture site.',
        imageUrl: '/equipment/alcohol-prep.jpg'
      }
    ],

    successRate: '98-99% first attempt success rate with experienced phlebotomist',

    expectedOutcomes: [
      'Successful collection of required blood volume',
      'Minimal discomfort during procedure',
      'No significant bruising or complications',
      'Laboratory results available within 24-72 hours'
    ],

    patientResources: [
      {
        title: 'Understanding Your Blood Test Results',
        url: '/education/blood-test-results',
        type: 'article'
      },
      {
        title: 'How to Prepare for a Blood Draw',
        url: '/education/blood-draw-preparation',
        type: 'video'
      },
      {
        title: 'Overcoming Needle Anxiety',
        url: '/education/needle-anxiety',
        type: 'article'
      }
    ],

    lastUpdated: '2024-01-15',
    references: [
      'Clinical and Laboratory Standards Institute (CLSI). GP41-A7: Procedures for Collection of Diagnostic Blood Specimens by Venipuncture.',
      'World Health Organization. WHO Guidelines on Drawing Blood: Best Practices in Phlebotomy.',
      'Ernst DJ. Applied Phlebotomy. Lippincott Williams & Wilkins, 2023.'
    ]
  },

  // ============================================================================
  // INTRAVENOUS (IV) CATHETER PLACEMENT
  // ============================================================================
  {
    id: 'iv-catheter-placement',
    name: 'Intravenous (IV) Catheter Placement',
    alternativeNames: ['IV Start', 'IV Access', 'Peripheral IV Insertion', 'IV Line Placement'],
    category: 'diagnostic',
    subcategory: 'blood-vascular',
    bodySystem: 'Circulatory System',

    cptCodes: [
      {
        code: '36000',
        description: 'Introduction of needle or intracatheter, vein',
        relativeValueUnits: 0.35
      },
      {
        code: '36410',
        description: 'Venipuncture, age 3 years or older, necessitating physician skill',
        relativeValueUnits: 0.42
      }
    ],

    description: {
      simple: 'An IV is a small, flexible plastic tube that is placed into a vein in your arm or hand. It allows doctors and nurses to give you fluids and medicines directly into your bloodstream.',
      intermediate: 'Intravenous catheter placement involves inserting a thin, flexible plastic tube (cannula) into a peripheral vein, typically in the arm or hand. This provides continuous access to the circulatory system for administering fluids, medications, blood products, and for drawing blood samples.',
      technical: 'Peripheral intravenous catheter insertion involves cannulation of a superficial vein using an over-the-needle catheter (typically 18-24 gauge). The procedure requires aseptic technique, proper vein selection avoiding areas of flexion and previous infiltration, catheter insertion at 10-30 degrees, advancement upon flashback, and secure fixation with transparent dressing.',
      pediatric: 'An IV is like a tiny straw that goes into a vein in your arm. It only hurts for a moment when it goes in. Then the straw stays there so doctors can give you medicine or special water without any more pokes.'
    },

    purpose: 'To establish venous access for administering fluids, medications, blood products, and contrast agents, or for repeated blood sampling.',

    overview: 'IV catheter placement is one of the most common invasive procedures in healthcare. Approximately 80% of hospitalized patients require IV access during their stay. Modern catheters are made of flexible materials that conform to the vein, allowing for extended use.',

    indications: [
      {
        condition: 'Fluid replacement',
        explanation: 'Patients who cannot drink enough fluids or need rapid hydration.',
        urgency: 'urgent'
      },
      {
        condition: 'Medication administration',
        explanation: 'Many medications work best or only work when given directly into the bloodstream.',
        urgency: 'urgent'
      },
      {
        condition: 'Blood transfusion',
        explanation: 'Blood products must be given through IV access.',
        urgency: 'urgent'
      },
      {
        condition: 'Contrast administration for imaging',
        explanation: 'CT scans and MRIs often require IV contrast agents.',
        urgency: 'elective'
      },
      {
        condition: 'Surgical preparation',
        explanation: 'All surgeries require IV access for medications and fluids.',
        urgency: 'urgent'
      },
      {
        condition: 'Emergency resuscitation',
        explanation: 'Life-saving medications and fluids in emergencies.',
        urgency: 'emergent'
      }
    ],

    contraindications: {
      absolute: [
        {
          condition: 'Arm with AV fistula or graft',
          reason: 'Risk of damaging dialysis access - never use that arm.'
        },
        {
          condition: 'Arm on side of mastectomy with lymph node dissection',
          reason: 'Risk of lymphedema and impaired drainage.'
        },
        {
          condition: 'Active cellulitis or infection at insertion site',
          reason: 'Risk of introducing infection into bloodstream.'
        }
      ],
      relative: [
        {
          condition: 'Previous infiltration at site',
          reason: 'Damaged tissue may not support catheter.',
          workaround: 'Use alternative site.'
        },
        {
          condition: 'Burned or scarred skin',
          reason: 'Altered anatomy and increased infection risk.',
          workaround: 'Use unaffected areas.'
        },
        {
          condition: 'Paralyzed limb',
          reason: 'Patient cannot report pain or problems.',
          workaround: 'Use if necessary with frequent monitoring.'
        },
        {
          condition: 'Severe coagulopathy',
          reason: 'Increased bleeding risk.',
          workaround: 'Apply extra pressure, consider central line.'
        }
      ]
    },

    setting: ['outpatient-clinic', 'hospital-outpatient', 'hospital-inpatient', 'emergency-department', 'intensive-care', 'operating-room', 'home'],

    anesthesiaOptions: [
      {
        type: 'none',
        description: 'Most IV starts are done without anesthesia.',
        typical: true
      },
      {
        type: 'local',
        description: 'Intradermal lidocaine (0.1-0.2 mL) may be used for larger gauge catheters.',
        typical: false
      },
      {
        type: 'topical',
        description: 'EMLA or LMX cream applied 30-60 minutes before, especially in children.',
        typical: false
      }
    ],

    duration: {
      minimum: 2,
      typical: 5,
      maximum: 20,
      unit: 'minutes'
    },

    preparation: {
      daysBeforeInstructions: [
        {
          timing: 'Day before',
          instruction: 'Stay well hydrated to keep veins visible.',
          rationale: 'Dehydration makes veins smaller and harder to access.',
          critical: false
        }
      ],
      dayOfInstructions: [
        {
          timing: 'Before procedure',
          instruction: 'Inform staff of any previous difficulties with IV placement.',
          rationale: 'Helps staff choose the best approach and site.',
          critical: true
        },
        {
          timing: 'Before procedure',
          instruction: 'Remove jewelry from hands and arms.',
          rationale: 'May interfere with placement or become a constriction.',
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
        action: 'Patient identification and assessment',
        detailedDescription: 'Verify patient identity, review orders, assess for contraindications, examine both arms for suitable veins, and select optimal site based on vein quality, patient activities, and duration of therapy needed.',
        duration: '1-2 minutes',
        patientExperience: 'The nurse will ask your name, examine both arms, and feel for good veins.',
        criticalPoints: ['Avoid dominant arm if possible', 'Consider future needs'],
        equipmentUsed: ['Patient chart/orders']
      },
      {
        stepNumber: 2,
        phase: 'preparation',
        action: 'Equipment gathering and site preparation',
        detailedDescription: 'Gather appropriately sized catheter (typically 20-22 gauge for adults), tourniquet, antiseptic, dressing supplies, flush, and extension tubing. Apply tourniquet and select final insertion site.',
        duration: '1 minute',
        patientExperience: 'You will see the nurse gathering supplies. A tight band will be wrapped around your arm.',
        equipmentUsed: ['IV catheter', 'Tourniquet', 'Antiseptic', 'Transparent dressing', 'Saline flush', 'Tape']
      },
      {
        stepNumber: 3,
        phase: 'procedure',
        action: 'Skin preparation',
        detailedDescription: 'Clean the insertion site with chlorhexidine or alcohol using a back-and-forth friction motion for 30 seconds. Allow to dry completely.',
        duration: '30 seconds',
        patientExperience: 'Your arm will be cleaned with a cold, wet antiseptic. It needs to dry before the IV is placed.',
        criticalPoints: ['Do not touch cleaned area', 'Allow complete drying'],
        equipmentUsed: ['Chlorhexidine or alcohol swab']
      },
      {
        stepNumber: 4,
        phase: 'procedure',
        action: 'Vein cannulation',
        detailedDescription: 'Anchor the vein by applying traction on the skin below the insertion site. Insert the catheter at a 10-30 degree angle, bevel up. Observe for blood flashback in the chamber. Lower the angle and advance the catheter slightly, then advance the plastic catheter off the needle into the vein.',
        duration: '10-30 seconds',
        patientExperience: 'You will feel a pinch or stick as the needle goes in. This is the most uncomfortable part and lasts only a moment.',
        criticalPoints: ['Stabilize vein to prevent rolling', 'Do not advance needle once flashback seen', 'Advance catheter, not needle'],
        equipmentUsed: ['IV catheter']
      },
      {
        stepNumber: 5,
        phase: 'procedure',
        action: 'Catheter advancement and needle removal',
        detailedDescription: 'While holding the catheter hub, fully advance the plastic catheter into the vein. Release the tourniquet. Apply gentle pressure over the catheter tip to prevent bleeding while removing the needle. Dispose of needle in sharps container.',
        duration: '10 seconds',
        patientExperience: 'The tight band comes off. You may feel some pressure but should not feel sharp pain.',
        criticalPoints: ['Never reinsert needle through catheter', 'Immediate sharps disposal'],
        equipmentUsed: ['Sharps container']
      },
      {
        stepNumber: 6,
        phase: 'completion',
        action: 'Catheter securement and dressing',
        detailedDescription: 'Connect extension tubing or flush the catheter with normal saline to confirm patency and absence of infiltration. Apply transparent dressing over the insertion site. Secure tubing with tape. Document date, time, catheter size, and site.',
        duration: '1-2 minutes',
        patientExperience: 'The nurse will flush the IV with fluid. You may feel a cool sensation in your arm. A clear bandage will be applied.',
        criticalPoints: ['Flush should flow freely without swelling', 'Document insertion'],
        equipmentUsed: ['Normal saline flush', 'Transparent dressing', 'Tape', 'Securement device']
      },
      {
        stepNumber: 7,
        phase: 'recovery',
        action: 'Patient education',
        detailedDescription: 'Instruct patient on signs of complications to report, activity modifications, and importance of not pulling on the IV. Ensure patient comfort.',
        duration: '1 minute',
        patientExperience: 'The nurse will explain what to watch for and how to care for your IV.',
        criticalPoints: ['Ensure patient understands warning signs']
      }
    ],

    riskLevel: 'low',

    complications: [
      {
        name: 'Infiltration',
        description: 'IV fluid leaks into surrounding tissue instead of entering the vein, causing swelling and pain.',
        frequency: 'common',
        frequencyPercent: '20-40%',
        severity: 'mild',
        prevention: ['Proper catheter placement', 'Secure fixation', 'Regular assessment'],
        treatment: ['Stop infusion immediately', 'Remove IV', 'Elevate extremity', 'Apply warm or cold compress depending on fluid type'],
        warningSignsToReport: ['Swelling around IV site', 'Pain at site', 'Cool skin around IV', 'Slow or stopped infusion']
      },
      {
        name: 'Phlebitis',
        description: 'Inflammation of the vein causing redness, warmth, pain, and a palpable cord along the vein.',
        frequency: 'occasional',
        frequencyPercent: '10-20%',
        severity: 'mild',
        prevention: ['Appropriate catheter size', 'Proper dilution of medications', 'Site rotation every 72-96 hours'],
        treatment: ['Remove IV', 'Apply warm compress', 'Monitor for infection'],
        warningSignsToReport: ['Red streak along vein', 'Increasing pain', 'Warmth at site', 'Fever']
      },
      {
        name: 'Hematoma',
        description: 'Blood collects in tissue around the puncture site, causing bruising and swelling.',
        frequency: 'occasional',
        frequencyPercent: '5-15%',
        severity: 'mild',
        prevention: ['Apply pressure if vein is punctured through', 'Avoid multiple attempts in same area'],
        treatment: ['Apply pressure', 'Ice for 20 minutes', 'Elevate arm'],
        warningSignsToReport: ['Rapidly expanding swelling', 'Numbness or tingling']
      },
      {
        name: 'Infection (Catheter-Related)',
        description: 'Bacteria enter through the catheter causing local or bloodstream infection.',
        frequency: 'uncommon',
        frequencyPercent: '0.5-2%',
        severity: 'moderate',
        prevention: ['Sterile technique', 'Proper site care', 'Site change per protocol'],
        treatment: ['Remove catheter', 'Culture tip if indicated', 'Antibiotics if systemic infection'],
        warningSignsToReport: ['Pus or discharge from site', 'Fever or chills', 'Increasing redness', 'Red streaks up arm']
      },
      {
        name: 'Nerve Injury',
        description: 'Needle or catheter contacts or damages a nerve.',
        frequency: 'rare',
        frequencyPercent: '<0.1%',
        severity: 'moderate',
        prevention: ['Proper site selection', 'Stop if patient reports shooting pain'],
        treatment: ['Remove catheter immediately', 'Document', 'Most resolve spontaneously'],
        warningSignsToReport: ['Persistent numbness', 'Tingling', 'Weakness', 'Shooting pain']
      },
      {
        name: 'Air Embolism',
        description: 'Air enters the bloodstream through the IV line.',
        frequency: 'rare',
        frequencyPercent: '<0.1%',
        severity: 'severe',
        prevention: ['Remove air from tubing before connection', 'Proper line management'],
        treatment: ['Clamp line', 'Position patient left side down', 'Oxygen', 'Emergency response'],
        warningSignsToReport: ['Sudden shortness of breath', 'Chest pain', 'Confusion']
      }
    ],

    recovery: {
      immediateRecovery: 'No recovery time needed. The IV can be used immediately after placement.',
      returnToNormalActivities: 'Most activities can continue with the IV in place. Avoid getting the site wet.',
      fullRecovery: 'After IV removal, the site heals within 1-2 days.',
      restrictions: [
        'Avoid bending the arm if IV is in the elbow area',
        'Do not submerge the IV site in water',
        'Avoid heavy lifting with the IV arm',
        'Keep dressing clean and dry'
      ],
      followUpSchedule: [
        'IV site assessed every shift (every 8-12 hours)',
        'Catheter changed every 72-96 hours per facility protocol',
        'After removal, monitor site for 24-48 hours'
      ]
    },

    patientExperience: {
      beforeProcedure: [
        'You may be nervous about the IV, especially if you have had difficult placements before.',
        'The nurse will examine your arms to find the best vein.',
        'You can ask for numbing cream if you are very anxious about the stick.'
      ],
      duringProcedure: [
        'The tourniquet feels tight on your upper arm.',
        'The antiseptic may feel cold.',
        'The needle stick feels like a quick pinch or bee sting.',
        'Once the needle is out and the plastic tube is in, you should not feel sharp pain.',
        'The saline flush may create a cool sensation traveling up your arm.'
      ],
      immediatelyAfter: [
        'The IV site may feel slightly tender.',
        'You will see a clear dressing over the insertion site.',
        'The area may look slightly bruised.',
        'You should be able to move your arm normally.'
      ],
      daysAfter: [
        'The IV may become uncomfortable over time, especially if in an area that bends.',
        'Some bruising around the site is normal.',
        'After IV removal, minor bruising heals within a week.'
      ],
      sensationsToExpect: [
        'Brief pinch during needle insertion',
        'Possible cool or cold sensation when fluids infuse',
        'Mild tenderness at the site',
        'Awareness of the catheter in your arm'
      ],
      painLevel: {
        during: 'Sharp pinch lasting 1-3 seconds, rated 2-4 out of 10.',
        after: 'Minimal discomfort, rated 0-2 out of 10, mostly tenderness.',
        managementOptions: [
          'Topical anesthetic cream before placement',
          'Intradermal lidocaine for larger catheters',
          'Warm compress for discomfort',
          'Request repositioning if persistently uncomfortable'
        ]
      },
      emotionalConsiderations: [
        'IV anxiety is common - communicate your concerns to staff',
        'You can look away during insertion',
        'Request the most experienced person if you have difficult veins',
        'It is okay to take breaks if multiple attempts are needed',
        'Having an IV does not mean you are seriously ill'
      ]
    },

    anatomyInvolved: [
      {
        structure: 'Cephalic Vein',
        description: 'Large vein on the outer (lateral) side of the forearm, excellent for IV placement.',
        relevance: 'Preferred site due to size, stability, and distance from nerves.',
        visualizationUrl: '/anatomy/arm-veins-3d',
        modelType: '3D'
      },
      {
        structure: 'Basilic Vein',
        description: 'Large vein on the inner (medial) side of the forearm and upper arm.',
        relevance: 'Good size but closer to nerves and brachial artery.',
        visualizationUrl: '/anatomy/arm-veins-3d',
        modelType: '3D'
      },
      {
        structure: 'Median Antebrachial Vein',
        description: 'Vein running up the center of the forearm.',
        relevance: 'Alternative site when lateral veins are not accessible.',
        visualizationUrl: '/anatomy/arm-veins-3d',
        modelType: '3D'
      },
      {
        structure: 'Dorsal Hand Veins',
        description: 'Network of veins on the back of the hand.',
        relevance: 'Used when forearm veins are not available. More prone to dislodgement.',
        visualizationUrl: '/anatomy/hand-veins-3d',
        modelType: '3D'
      }
    ],

    alternatives: [
      {
        procedureId: 'central-venous-catheter',
        name: 'Central Venous Catheter (Central Line)',
        whenPreferred: 'When peripheral access is not obtainable, for certain medications, or for long-term access.',
        comparisonNotes: 'More invasive with higher risks but provides more reliable access.'
      },
      {
        procedureId: 'midline-catheter',
        name: 'Midline Catheter',
        whenPreferred: 'When IV therapy is needed for 1-4 weeks.',
        comparisonNotes: 'Longer than peripheral IV but not as invasive as central line.'
      },
      {
        procedureId: 'picc-line',
        name: 'PICC Line (Peripherally Inserted Central Catheter)',
        whenPreferred: 'Long-term IV access, certain chemotherapy, or total parenteral nutrition.',
        comparisonNotes: 'Provides central access from peripheral insertion.'
      },
      {
        procedureId: 'intraosseous-access',
        name: 'Intraosseous (IO) Access',
        whenPreferred: 'Emergency when IV access cannot be obtained quickly.',
        comparisonNotes: 'Faster in emergencies but more painful; not for long-term use.'
      }
    ],

    specialConsiderations: [
      {
        population: 'Pediatric patients',
        modifications: [
          'Use smaller gauge catheters (22-24 gauge)',
          'Consider scalp veins in infants',
          'Use topical anesthetics liberally',
          'Utilize child life specialists for distraction',
          'Secure with age-appropriate methods'
        ],
        additionalRisks: ['Smaller veins', 'Higher anxiety', 'Movement']
      },
      {
        population: 'Elderly patients',
        modifications: [
          'Use gentle technique - fragile veins',
          'Avoid excessive tourniquet pressure',
          'Use smaller gauge when possible',
          'Take extra care with skin integrity'
        ],
        additionalRisks: ['Fragile veins', 'Thin skin', 'Easy bruising']
      },
      {
        population: 'Patients with chronic illness',
        modifications: [
          'May have limited access sites',
          'Consider ultrasound guidance',
          'Document difficult access in chart',
          'Consider longer-term access options early'
        ],
        additionalRisks: ['Scarred veins', 'Difficult access']
      },
      {
        population: 'IV drug users',
        modifications: [
          'May have very difficult venous access',
          'Consider ultrasound guidance',
          'Non-judgmental approach',
          'May need central access sooner'
        ],
        additionalRisks: ['Scarred/thrombosed veins', 'Infection risk']
      }
    ],

    equipment: [
      {
        name: 'Peripheral IV Catheter',
        description: 'Over-the-needle catheter with flash chamber, available in various gauges (18-24 most common).',
        purpose: 'The plastic tube that remains in the vein after needle removal.',
        imageUrl: '/equipment/iv-catheter.jpg'
      },
      {
        name: 'Tourniquet',
        description: 'Elastic band to distend veins during insertion.',
        purpose: 'Makes veins more visible and palpable.',
        imageUrl: '/equipment/tourniquet.jpg'
      },
      {
        name: 'Transparent Dressing',
        description: 'Sterile, see-through adhesive dressing.',
        purpose: 'Protects site while allowing visual inspection.',
        imageUrl: '/equipment/iv-dressing.jpg'
      },
      {
        name: 'Normal Saline Flush',
        description: 'Pre-filled syringe with 0.9% sodium chloride.',
        purpose: 'Confirms placement and maintains patency.',
        imageUrl: '/equipment/saline-flush.jpg'
      },
      {
        name: 'Extension Tubing',
        description: 'Short tubing that connects catheter to IV line.',
        purpose: 'Reduces manipulation of the catheter itself.',
        imageUrl: '/equipment/extension-tubing.jpg'
      }
    ],

    successRate: '80-90% first attempt success rate; higher with ultrasound guidance',

    expectedOutcomes: [
      'Successful venous access for therapy',
      'Ability to administer medications and fluids',
      'Minimal discomfort after initial placement',
      'IV remains functional for intended duration (72-96 hours)'
    ],

    patientResources: [
      {
        title: 'Caring for Your IV at Home',
        url: '/education/iv-home-care',
        type: 'article'
      },
      {
        title: 'What to Expect with IV Therapy',
        url: '/education/iv-therapy-overview',
        type: 'video'
      },
      {
        title: 'Signs of IV Complications',
        url: '/education/iv-complications',
        type: 'article'
      }
    ],

    lastUpdated: '2024-01-15',
    references: [
      'Infusion Nurses Society. Infusion Therapy Standards of Practice. J Infus Nurs. 2021.',
      'Gorski LA. Phillips\'s Manual of I.V. Therapeutics. F.A. Davis Company, 2023.',
      'CDC Guidelines for the Prevention of Intravascular Catheter-Related Infections.'
    ]
  },

  // ============================================================================
  // ARTERIAL BLOOD GAS (ABG)
  // ============================================================================
  {
    id: 'arterial-blood-gas',
    name: 'Arterial Blood Gas (ABG)',
    alternativeNames: ['ABG', 'Arterial Puncture', 'Blood Gas Analysis'],
    category: 'diagnostic',
    subcategory: 'blood-vascular',
    bodySystem: 'Respiratory/Circulatory System',

    cptCodes: [
      {
        code: '36600',
        description: 'Arterial puncture, withdrawal of blood for diagnosis',
        relativeValueUnits: 0.62
      },
      {
        code: '82803',
        description: 'Blood gases, any combination of pH, pCO2, pO2, CO2, HCO3',
        relativeValueUnits: 0.37
      }
    ],

    description: {
      simple: 'An arterial blood gas is a test where blood is taken from an artery (usually in your wrist) instead of a vein. This blood tells doctors how well your lungs are working and whether your blood has the right balance of oxygen, carbon dioxide, and acid.',
      intermediate: 'ABG analysis involves drawing blood from an artery to measure oxygen levels, carbon dioxide levels, and acid-base balance. Unlike venous blood, arterial blood reflects the respiratory system\'s function and the body\'s metabolic state, providing critical information for managing respiratory and metabolic disorders.',
      technical: 'Arterial blood gas analysis measures PaO2, PaCO2, pH, HCO3, base excess, and oxygen saturation from a percutaneous arterial puncture. The radial artery is preferred due to collateral circulation from the ulnar artery. Modified Allen test should precede puncture. Sample requires anaerobic collection, immediate icing, and prompt analysis to prevent in vitro metabolism affecting results.',
      pediatric: 'An ABG is a special blood test from the inside of your wrist where you can feel your pulse. It tells doctors how well you are breathing and if your body has the right amount of oxygen. It might hurt a little more than regular blood tests, but it is very quick.'
    },

    purpose: 'To assess gas exchange in the lungs, measure blood oxygen and carbon dioxide levels, and evaluate acid-base balance.',

    overview: 'ABG analysis is essential in critical care, pulmonology, and emergency medicine. It provides real-time information about respiratory function and metabolic status that cannot be obtained from venous blood or pulse oximetry alone.',

    indications: [
      {
        condition: 'Respiratory failure',
        explanation: 'Assesses severity and type of respiratory failure to guide ventilator settings.',
        urgency: 'emergent'
      },
      {
        condition: 'Acid-base disorders',
        explanation: 'Determines if patient has acidosis or alkalosis and whether respiratory or metabolic in origin.',
        urgency: 'urgent'
      },
      {
        condition: 'Ventilator management',
        explanation: 'Guides adjustments to mechanical ventilation settings.',
        urgency: 'urgent'
      },
      {
        condition: 'Shock assessment',
        explanation: 'Lactate and base deficit indicate tissue perfusion.',
        urgency: 'emergent'
      },
      {
        condition: 'Diabetic ketoacidosis',
        explanation: 'Monitors severity of metabolic acidosis.',
        urgency: 'urgent'
      },
      {
        condition: 'Chronic lung disease exacerbation',
        explanation: 'Determines need for oxygen therapy or ventilatory support.',
        urgency: 'urgent'
      },
      {
        condition: 'Carbon monoxide poisoning',
        explanation: 'Carboxyhemoglobin level requires arterial blood.',
        urgency: 'emergent'
      }
    ],

    contraindications: {
      absolute: [
        {
          condition: 'Absent collateral circulation (negative Allen test)',
          reason: 'Risk of hand ischemia if radial artery is damaged and no ulnar backup.'
        },
        {
          condition: 'Active infection over puncture site',
          reason: 'Risk of introducing infection into artery.'
        },
        {
          condition: 'AV fistula or graft in that arm',
          reason: 'Cannot use arm with dialysis access.'
        }
      ],
      relative: [
        {
          condition: 'Anticoagulation or bleeding disorders',
          reason: 'Increased risk of hematoma and bleeding.',
          workaround: 'Apply prolonged pressure; consider alternative site.'
        },
        {
          condition: 'Previous arterial surgery at site',
          reason: 'Altered anatomy may make puncture difficult.',
          workaround: 'Use alternative site; consider ultrasound guidance.'
        },
        {
          condition: 'Severe peripheral vascular disease',
          reason: 'Compromised circulation.',
          workaround: 'Assess collateral flow carefully; use femoral if needed.'
        }
      ]
    },

    setting: ['emergency-department', 'intensive-care', 'hospital-inpatient', 'operating-room'],

    anesthesiaOptions: [
      {
        type: 'local',
        description: 'Subcutaneous lidocaine (0.5-1 mL of 1%) reduces pain significantly.',
        typical: true
      },
      {
        type: 'none',
        description: 'May be omitted in emergencies or when speed is critical.',
        typical: false
      },
      {
        type: 'topical',
        description: 'Numbing cream less effective due to depth of artery.',
        typical: false
      }
    ],

    duration: {
      minimum: 2,
      typical: 5,
      maximum: 15,
      unit: 'minutes'
    },

    preparation: {
      daysBeforeInstructions: [],
      dayOfInstructions: [
        {
          timing: 'Before procedure',
          instruction: 'Inform healthcare provider of any blood thinners you take.',
          rationale: 'Affects bleeding risk and duration of pressure needed.',
          critical: true
        }
      ],
      fastingRequired: false,
      medicationAdjustments: [
        {
          medication: 'Anticoagulants',
          instruction: 'Continue unless instructed otherwise; inform provider.',
          reason: 'Extended pressure will be needed after puncture.'
        }
      ],
      labsRequired: [],
      imagingRequired: [],
      consentRequired: false
    },

    procedureSteps: [
      {
        stepNumber: 1,
        phase: 'preparation',
        action: 'Modified Allen test',
        detailedDescription: 'Patient makes a fist while examiner compresses both radial and ulnar arteries. Patient opens hand (should be pale). Release ulnar artery only. Color should return within 5-10 seconds, indicating adequate collateral circulation.',
        duration: '30 seconds',
        patientExperience: 'Make a tight fist while the provider presses on your wrist. Open your hand - it may look pale. Color should return quickly when pressure is released.',
        criticalPoints: ['Positive test (color returns) indicates safe to proceed', 'If negative, use other arm or femoral artery'],
        equipmentUsed: []
      },
      {
        stepNumber: 2,
        phase: 'positioning',
        action: 'Wrist positioning',
        detailedDescription: 'Place rolled towel under wrist to hyperextend it approximately 30 degrees. This brings the radial artery closer to the surface.',
        duration: '15 seconds',
        patientExperience: 'Your wrist will be positioned bent backwards over a small towel roll.',
        equipmentUsed: ['Rolled towel or wrist support']
      },
      {
        stepNumber: 3,
        phase: 'procedure',
        action: 'Site preparation',
        detailedDescription: 'Palpate the radial artery pulse. Clean area with antiseptic using circular motion. Allow to dry.',
        duration: '30 seconds',
        patientExperience: 'The provider will feel for your pulse and clean the area with cold antiseptic.',
        equipmentUsed: ['Chlorhexidine or alcohol swabs']
      },
      {
        stepNumber: 4,
        phase: 'anesthesia',
        action: 'Local anesthesia (optional)',
        detailedDescription: 'Inject 0.5-1 mL of 1% lidocaine subcutaneously over the artery. Wait 1-2 minutes for effect. Care taken not to puncture artery.',
        duration: '2 minutes',
        patientExperience: 'You may receive a small numbing injection that stings briefly. After a minute or two, the area will feel numb.',
        criticalPoints: ['Do not inject into artery', 'Wait for anesthesia to take effect'],
        equipmentUsed: ['1% Lidocaine', 'Small gauge needle (25-27G)']
      },
      {
        stepNumber: 5,
        phase: 'procedure',
        action: 'Arterial puncture',
        detailedDescription: 'Palpate artery with non-dominant hand. Hold pre-heparinized syringe like a dart. Insert needle at 30-45 degree angle, bevel up, aiming toward pulsation. Blood should flash back and fill syringe by arterial pressure (bright red, pulsatile).',
        duration: '15-30 seconds',
        patientExperience: 'You will feel pressure and possibly a sharp sting as the needle enters. With numbing, this is significantly reduced. Try to stay still.',
        criticalPoints: ['Bright red pulsatile blood confirms arterial sample', 'Do not aspirate - let arterial pressure fill syringe', 'Collect 1-3 mL'],
        equipmentUsed: ['Pre-heparinized ABG syringe', '22-25 gauge needle']
      },
      {
        stepNumber: 6,
        phase: 'completion',
        action: 'Needle removal and pressure',
        detailedDescription: 'Withdraw needle smoothly. Immediately apply firm pressure with gauze for minimum 5 minutes (10-15 minutes if on anticoagulation). Do not release to check - maintain continuous pressure.',
        duration: '5-15 minutes',
        patientExperience: 'The needle comes out and firm pressure is applied. You or the provider will hold this pressure steadily for at least 5 minutes.',
        criticalPoints: ['Arterial pressure requires more compression than venous', 'Do not release pressure early'],
        equipmentUsed: ['Gauze pads']
      },
      {
        stepNumber: 7,
        phase: 'completion',
        action: 'Sample handling',
        detailedDescription: 'Expel any air bubbles from syringe. Cap syringe. Mix by rolling between hands for 5 seconds. Place on ice immediately. Sample must be analyzed within 15-30 minutes.',
        duration: '30 seconds',
        patientExperience: 'You will continue holding pressure while the sample is prepared.',
        criticalPoints: ['Air bubbles affect results', 'Icing prevents cell metabolism', 'Prompt analysis essential'],
        equipmentUsed: ['Ice cup/bag', 'Sample label']
      },
      {
        stepNumber: 8,
        phase: 'recovery',
        action: 'Site assessment and bandaging',
        detailedDescription: 'After 5+ minutes, briefly check site. If still bleeding, apply pressure for additional time. Once hemostasis achieved, apply pressure dressing.',
        duration: '1 minute',
        patientExperience: 'Once bleeding has stopped, a bandage will be applied. Your hand will be checked for color and warmth.',
        criticalPoints: ['Check hand for color, warmth, and pulse before discharge', 'Document any complications'],
        equipmentUsed: ['Pressure bandage or tape and gauze']
      }
    ],

    riskLevel: 'low',

    complications: [
      {
        name: 'Hematoma',
        description: 'Blood accumulates under the skin at the puncture site.',
        frequency: 'common',
        frequencyPercent: '10-20%',
        severity: 'mild',
        prevention: ['Proper technique', 'Adequate pressure time', 'Single puncture attempt when possible'],
        treatment: ['Apply pressure', 'Ice', 'Elevate arm', 'Usually resolves in 1-2 weeks'],
        warningSignsToReport: ['Rapidly expanding swelling', 'Numbness in hand', 'Color change in fingers']
      },
      {
        name: 'Pain',
        description: 'Arterial puncture is more painful than venous due to depth and nerve proximity.',
        frequency: 'common',
        frequencyPercent: '30-50%',
        severity: 'mild',
        prevention: ['Local anesthetic', 'Skilled technique'],
        treatment: ['Local anesthetic reduces pain', 'Over-the-counter analgesics if needed'],
        warningSignsToReport: ['Severe or worsening pain', 'Pain radiating to fingers']
      },
      {
        name: 'Arterial spasm',
        description: 'Artery constricts in response to puncture, making blood collection difficult.',
        frequency: 'occasional',
        frequencyPercent: '5-10%',
        severity: 'mild',
        prevention: ['Smooth technique', 'Local anesthetic may help'],
        treatment: ['Wait briefly', 'May need alternative site'],
        warningSignsToReport: ['No concerning signs - this is a temporary response']
      },
      {
        name: 'Thrombosis',
        description: 'Blood clot forms in the artery.',
        frequency: 'rare',
        frequencyPercent: '<1%',
        severity: 'moderate',
        prevention: ['Positive Allen test before procedure', 'Single puncture attempt', 'Proper technique'],
        treatment: ['Anticoagulation', 'Monitoring', 'Surgical intervention rarely needed'],
        warningSignsToReport: ['Cold hand', 'Pale fingers', 'Numbness', 'Weak or absent pulse']
      },
      {
        name: 'Nerve damage',
        description: 'Needle contacts median nerve or nerve branches.',
        frequency: 'rare',
        frequencyPercent: '<0.5%',
        severity: 'moderate',
        prevention: ['Proper technique', 'Stop if patient reports shooting pain'],
        treatment: ['Remove needle immediately if nerve symptoms', 'Most recover spontaneously'],
        warningSignsToReport: ['Persistent tingling or numbness', 'Weakness in fingers', 'Burning pain']
      },
      {
        name: 'Infection',
        description: 'Bacterial infection at puncture site.',
        frequency: 'rare',
        frequencyPercent: '<0.1%',
        severity: 'moderate',
        prevention: ['Sterile technique', 'Clean site properly'],
        treatment: ['Antibiotics', 'Monitor for spread'],
        warningSignsToReport: ['Increasing redness', 'Warmth', 'Pus', 'Fever']
      }
    ],

    recovery: {
      immediateRecovery: 'Maintain pressure on the site for at least 5 minutes. The wrist may be tender.',
      returnToNormalActivities: 'Most activities can resume immediately. Avoid heavy lifting with that arm for 24 hours.',
      fullRecovery: 'Site heals in 1-3 days. Any bruising resolves in 1-2 weeks.',
      restrictions: [
        'Keep pressure bandage on for 2-4 hours',
        'Avoid heavy lifting with that arm for 24 hours',
        'Do not bend wrist excessively for a few hours',
        'Avoid blood pressure cuffs on that arm for 24 hours'
      ],
      followUpSchedule: [
        'Results typically available within 15-30 minutes',
        'Follow up with ordering provider for interpretation',
        'Return if any signs of complications'
      ]
    },

    patientExperience: {
      beforeProcedure: [
        'You may be anxious knowing this is more uncomfortable than a regular blood draw.',
        'The procedure is done in situations where this information is important for your care.',
        'Ask about numbing medicine - it significantly reduces discomfort.'
      ],
      duringProcedure: [
        'You will feel the provider pressing on your wrist to find the pulse.',
        'If numbing medicine is used, you will feel a brief sting then numbness.',
        'The arterial puncture feels like sharp pressure - more intense than a regular blood draw.',
        'Without numbing, the pain is rated 3-6 out of 10 but very brief.',
        'With numbing, the pain is rated 1-3 out of 10.'
      ],
      immediatelyAfter: [
        'You must hold firm pressure on the site for at least 5 minutes.',
        'Your wrist may ache for a few hours.',
        'The area may be tender and bruised.'
      ],
      daysAfter: [
        'Some bruising at the wrist is common.',
        'Tenderness usually resolves in 1-3 days.',
        'Monitor your hand for any changes in color or sensation.'
      ],
      sensationsToExpect: [
        'Sharp sting during puncture',
        'Deep pressure sensation',
        'Aching at site after procedure',
        'Tightness from pressure bandage'
      ],
      painLevel: {
        during: 'Without anesthesia: 4-6/10. With local anesthesia: 1-3/10. The pain is brief.',
        after: 'Tenderness rated 1-3/10 for a few hours to a day.',
        managementOptions: [
          'Request local anesthesia before puncture',
          'Ice pack after procedure',
          'Over-the-counter pain relievers if needed',
          'Keep arm elevated'
        ]
      },
      emotionalConsiderations: [
        'This test is done because your care team needs important information about your breathing or metabolism.',
        'It is more uncomfortable than regular blood draws but is very quick.',
        'The information gained is often critical for guiding your treatment.',
        'Do not hesitate to ask for numbing medicine.'
      ]
    },

    anatomyInvolved: [
      {
        structure: 'Radial Artery',
        description: 'Main artery on the thumb side of the wrist, palpable as the radial pulse.',
        relevance: 'Primary site for ABG due to superficial location and collateral circulation from ulnar artery.',
        visualizationUrl: '/anatomy/wrist-arteries-3d',
        modelType: '3D'
      },
      {
        structure: 'Ulnar Artery',
        description: 'Main artery on the pinky side of the wrist.',
        relevance: 'Provides collateral circulation to hand. Tested with Allen test.',
        visualizationUrl: '/anatomy/wrist-arteries-3d',
        modelType: '3D'
      },
      {
        structure: 'Femoral Artery',
        description: 'Large artery in the groin.',
        relevance: 'Alternative site when radial access not possible.',
        visualizationUrl: '/anatomy/femoral-artery-3d',
        modelType: '3D'
      },
      {
        structure: 'Brachial Artery',
        description: 'Artery in the upper arm/elbow.',
        relevance: 'Occasionally used but higher risk of complications.',
        visualizationUrl: '/anatomy/arm-arteries-3d',
        modelType: '3D'
      }
    ],

    alternatives: [
      {
        procedureId: 'venous-blood-gas',
        name: 'Venous Blood Gas (VBG)',
        whenPreferred: 'For acid-base assessment when arterial oxygenation data is not critical.',
        comparisonNotes: 'Less painful, from regular blood draw. pH and CO2 approximate arterial values; oxygen values differ.'
      },
      {
        procedureId: 'pulse-oximetry',
        name: 'Pulse Oximetry',
        whenPreferred: 'For continuous oxygen saturation monitoring.',
        comparisonNotes: 'Non-invasive but only measures oxygen saturation; no acid-base or CO2 information.'
      },
      {
        procedureId: 'arterial-line',
        name: 'Arterial Line Placement',
        whenPreferred: 'When multiple ABGs are anticipated or continuous blood pressure monitoring is needed.',
        comparisonNotes: 'Indwelling catheter allows repeated sampling without multiple punctures.'
      }
    ],

    specialConsiderations: [
      {
        population: 'Patients on anticoagulation',
        modifications: [
          'Apply pressure for 10-15 minutes minimum',
          'May need pressure dressing',
          'More prone to significant hematoma'
        ],
        additionalRisks: ['Larger hematomas', 'Prolonged bleeding']
      },
      {
        population: 'Patients in shock or with weak pulses',
        modifications: [
          'May be difficult to palpate artery',
          'Consider femoral site',
          'Ultrasound guidance may help'
        ],
        additionalRisks: ['Multiple attempts may be needed', 'Compromised circulation']
      },
      {
        population: 'Pediatric patients',
        modifications: [
          'Use smaller needles',
          'Restrain appropriately',
          'Consider capillary blood gas as alternative',
          'Extra attention to comfort measures'
        ],
        additionalRisks: ['Smaller arteries', 'Difficulty holding still']
      }
    ],

    equipment: [
      {
        name: 'Pre-heparinized ABG Syringe',
        description: 'Specially designed syringe with dried heparin to prevent clotting, self-filling plunger.',
        purpose: 'Collects arterial blood without clotting for analysis.',
        imageUrl: '/equipment/abg-syringe.jpg'
      },
      {
        name: '22-25 Gauge Needle',
        description: 'Small gauge needle appropriate for arterial puncture.',
        purpose: 'Minimizes trauma while allowing blood collection.',
        imageUrl: '/equipment/abg-needle.jpg'
      },
      {
        name: '1% Lidocaine',
        description: 'Local anesthetic solution.',
        purpose: 'Numbs the area to reduce pain.',
        imageUrl: '/equipment/lidocaine.jpg'
      },
      {
        name: 'Ice Cup/Bag',
        description: 'Container of ice.',
        purpose: 'Keeps sample cold to prevent cell metabolism that would alter results.',
        imageUrl: '/equipment/ice-cup.jpg'
      }
    ],

    successRate: '90-95% first attempt in experienced hands',

    expectedOutcomes: [
      'Successful arterial blood collection',
      'Accurate measurement of PaO2, PaCO2, pH, and bicarbonate',
      'Information to guide respiratory therapy or metabolic management',
      'Minimal complications with proper technique'
    ],

    patientResources: [
      {
        title: 'Understanding Your ABG Results',
        url: '/education/abg-results',
        type: 'article'
      },
      {
        title: 'Why Your Doctor Ordered an ABG',
        url: '/education/abg-purpose',
        type: 'article'
      },
      {
        title: 'Breathing Tests Explained',
        url: '/education/breathing-tests',
        type: 'video'
      }
    ],

    lastUpdated: '2024-01-15',
    references: [
      'Davis MD, et al. American Association for Respiratory Care Clinical Practice Guideline: Blood Gas Analysis.',
      'Castro D, et al. Arterial Blood Gas. StatPearls. 2024.',
      'Higgins C. The use of heparin in preparing samples for blood gas analysis. MLO Med Lab Obs. 2007.'
    ]
  }
];

export default bloodVascularProcedures;
