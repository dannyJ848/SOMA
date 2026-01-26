/**
 * CHOKING EMERGENCY PROTOCOLS
 *
 * CRITICAL: Choking can be fatal in minutes if airway is completely blocked.
 * Act immediately when you see signs of severe choking.
 */

import {
  EmergencyProtocol,
  EmergencyPriority,
  EmergencyCategory,
  AgeGroup
} from '../types';

/**
 * Adult Choking Protocol (8+ years)
 */
export const adultChokingProtocol: EmergencyProtocol = {
  id: 'choking-adult',
  name: 'Choking - Adult (8+ years)',
  alternateNames: ['Heimlich Maneuver', 'Abdominal Thrusts', 'Airway Obstruction'],
  category: EmergencyCategory.LIFE_THREATENING,
  priority: EmergencyPriority.IMMEDIATE,
  ageGroup: AgeGroup.ADULT,

  callEmergencyServices: true,
  emergencyNumber: '911',

  recognitionSigns: [
    {
      sign: 'Universal choking sign',
      description: 'Hands clutching throat',
      severity: 'critical',
      visualCue: 'Person grabs their neck with one or both hands'
    },
    {
      sign: 'Cannot speak, cry, or make sounds',
      description: 'Complete or severe airway obstruction prevents vocalization',
      severity: 'critical',
      visualCue: 'Mouth may be moving but no sound'
    },
    {
      sign: 'Cannot cough effectively',
      description: 'Weak, silent cough or no cough at all',
      severity: 'critical'
    },
    {
      sign: 'Difficulty breathing or noisy breathing',
      description: 'High-pitched sounds when trying to inhale',
      severity: 'severe',
      visualCue: 'Stridor or wheezing sound'
    },
    {
      sign: 'Skin color changes',
      description: 'Turning blue (cyanosis), especially lips and face',
      severity: 'critical'
    },
    {
      sign: 'Panic and distress',
      description: 'Wide eyes, extreme agitation',
      severity: 'severe'
    },
    {
      sign: 'Loss of consciousness',
      description: 'If not relieved, person will become unresponsive',
      severity: 'critical'
    }
  ],

  differentialDiagnosis: [
    'Mild choking (can cough and speak) - encourage coughing',
    'Asthma attack - usually has history, can make some sounds',
    'Allergic reaction - may have swelling, hives',
    'Heart attack - different symptoms, can usually speak'
  ],

  immediateActions: [
    {
      step: 1,
      action: 'ASSESS SEVERITY',
      technique: `
        Ask: "Are you choking?"

        MILD OBSTRUCTION (can cough, speak, breathe):
        - Encourage forceful coughing
        - Stay with person and monitor
        - Do NOT perform abdominal thrusts

        SEVERE OBSTRUCTION (cannot cough, speak, or breathe):
        - Proceed to step 2 immediately
      `
    },
    {
      step: 2,
      action: 'CALL FOR HELP',
      technique: 'Tell someone to call 911. If alone with phone, call 911 on speaker while helping.'
    },
    {
      step: 3,
      action: 'PERFORM ABDOMINAL THRUSTS (HEIMLICH MANEUVER)',
      technique: `
        FOR STANDING/SITTING PERSON:

        1. Stand BEHIND the person
        2. Wrap your arms around their waist
        3. Make a fist with one hand
        4. Place thumb side of fist ABOVE navel, BELOW breastbone
        5. Grab fist with other hand
        6. Give quick INWARD and UPWARD thrusts
        7. Each thrust should be a separate, distinct movement
        8. Repeat until object is expelled or person becomes unresponsive
      `,
      visualCue: 'Thrust should be J-shaped: in and up',
      warning: 'Do not squeeze the ribs or press on the breastbone'
    },
    {
      step: 4,
      action: 'ALTERNATE: BACK BLOWS (if trained or if thrusts ineffective)',
      technique: `
        1. Stand to the side and slightly behind
        2. Support their chest with one hand
        3. Lean person forward at waist
        4. Give 5 sharp back blows between shoulder blades
        5. Using heel of your hand
        6. Alternate: 5 back blows, 5 abdominal thrusts
      `
    },
    {
      step: 5,
      action: 'IF PERSON BECOMES UNRESPONSIVE',
      technique: `
        1. Lower person gently to ground
        2. Call 911 if not already done
        3. Begin CPR (30 compressions, 2 breaths)
        4. BEFORE giving breaths, look in mouth for object
        5. If you SEE an object, sweep it out with finger
        6. Do NOT do blind finger sweeps
        7. Continue CPR until help arrives or person responds
      `,
      warning: 'Chest compressions may help dislodge the object'
    },
    {
      step: 6,
      action: 'SELF-TREATMENT (if alone and choking)',
      technique: `
        OPTION 1 - Self-administered abdominal thrusts:
        - Make a fist, place above navel
        - Grab with other hand
        - Thrust inward and upward forcefully

        OPTION 2 - Use fixed object:
        - Find chair back, counter edge, or railing
        - Position edge above navel, below breastbone
        - Thrust yourself forward against edge
        - Repeat until object dislodges

        Call 911 if possible - even if you cannot speak, the call will be traced
      `
    }
  ],

  doNot: [
    {
      action: 'Do NOT perform abdominal thrusts for MILD choking',
      reason: 'If person can cough, speak, or breathe, their own cough is most effective',
      consequence: 'Encourage coughing instead'
    },
    {
      action: 'Do NOT slap back of standing person unless trained',
      reason: 'May force object deeper into airway if done incorrectly',
      consequence: 'Abdominal thrusts are primary technique in US guidelines'
    },
    {
      action: 'Do NOT do blind finger sweeps',
      reason: 'May push object deeper into airway',
      consequence: 'Only remove objects you can clearly SEE'
    },
    {
      action: 'Do NOT give water or attempt to drink',
      reason: 'Will not dislodge solid obstruction, may cause aspiration',
      consequence: 'Physical dislodgement is required'
    },
    {
      action: 'Do NOT leave a choking person alone',
      reason: 'Can lose consciousness rapidly',
      consequence: 'Stay with them and be ready to assist'
    },
    {
      action: 'Do NOT use abdominal thrusts on pregnant women or very obese persons',
      reason: 'Fetus protection / cannot reach proper position',
      consequence: 'Use CHEST THRUSTS instead (see special populations)'
    }
  ],

  whenToCall911: [
    'Person cannot breathe, cough, or speak',
    'Person is turning blue',
    'Abdominal thrusts are not working after multiple attempts',
    'Person becomes unresponsive',
    'If alone and choking, call 911 even if you cannot speak',
    'Even if object is dislodged, seek medical evaluation for internal injuries'
  ],

  suppliesNeeded: [
    {
      name: 'No special supplies needed',
      quantity: 0,
      usage: 'Choking response uses hands-only technique'
    },
    {
      name: 'Phone for 911',
      quantity: 1,
      usage: 'Emergency services notification'
    }
  ],

  aftercare: [
    'Have person evaluated by medical professional after choking incident',
    'Abdominal thrusts can cause internal injuries - bruising, rib fractures, organ damage',
    'Swallowed objects that were partially dislodged may cause problems',
    'Watch for signs of aspiration pneumonia in following days: fever, cough, difficulty breathing'
  ],

  anatomyOverlay: {
    affectedAreas: ['pharynx', 'larynx', 'trachea', 'esophagus', 'diaphragm', 'abdomen'],
    highlightColor: '#FF4444',
    annotations: [
      {
        structure: 'trachea',
        label: 'Trachea (Windpipe)',
        description: 'Where obstruction occurs - food goes "down wrong pipe"',
        position: { x: 0.5, y: 0.15, z: 0.45 }
      },
      {
        structure: 'diaphragm',
        label: 'Diaphragm',
        description: 'Muscle below lungs - abdominal thrusts push it up to force air out',
        position: { x: 0.5, y: 0.45, z: 0.4 }
      },
      {
        structure: 'thrust_point',
        label: 'Thrust Point',
        description: 'Above navel, below breastbone - place fist here',
        position: { x: 0.5, y: 0.52, z: 0.55 }
      },
      {
        structure: 'xiphoid_avoid',
        label: 'Xiphoid Process - AVOID',
        description: 'Bottom of breastbone - do NOT push here',
        position: { x: 0.5, y: 0.42, z: 0.55 }
      },
      {
        structure: 'back_blow_area',
        label: 'Back Blow Area',
        description: 'Between shoulder blades - strike here for back blows',
        position: { x: 0.5, y: 0.25, z: 0.3 }
      }
    ],
    viewAngles: [
      {
        name: 'Anterior View',
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 1.0,
        description: 'Shows thrust point location on abdomen'
      },
      {
        name: 'Lateral View',
        rotation: { x: 0, y: 90, z: 0 },
        zoom: 1.0,
        description: 'Shows rescuer position behind victim'
      },
      {
        name: 'Internal Sagittal View',
        rotation: { x: 0, y: 90, z: 0 },
        zoom: 1.2,
        description: 'Shows how thrust pushes diaphragm to expel air and object'
      },
      {
        name: 'Posterior View',
        rotation: { x: 0, y: 180, z: 0 },
        zoom: 1.0,
        description: 'Shows back blow area between shoulder blades'
      }
    ],
    animationSequence: [
      {
        frame: 1,
        description: 'Object lodges in airway',
        highlightedStructures: ['trachea', 'obstruction']
      },
      {
        frame: 2,
        description: 'Rescuer positions behind victim',
        highlightedStructures: ['abdomen', 'thrust_point']
      },
      {
        frame: 3,
        description: 'Abdominal thrust pushes diaphragm upward',
        highlightedStructures: ['diaphragm', 'lungs']
      },
      {
        frame: 4,
        description: 'Air rushes up, expelling object',
        highlightedStructures: ['trachea', 'object_expelled']
      }
    ]
  },

  videoAnimationConcept: {
    title: 'Adult Choking Response',
    duration: '4:00',
    keyFrames: [
      {
        timestamp: '0:00',
        description: 'Recognizing choking - universal sign',
        visualElements: ['Person clutching throat', 'Unable to speak indicator'],
        audioNarration: 'The universal sign for choking is hands clutched to the throat. If someone cannot speak, cough, or breathe, act immediately.'
      },
      {
        timestamp: '0:30',
        description: 'Positioning for abdominal thrusts',
        visualElements: ['Rescuer moving behind victim', 'Arm wrap demonstration'],
        audioNarration: 'Stand behind the person and wrap your arms around their waist.'
      },
      {
        timestamp: '1:00',
        description: 'Hand placement',
        visualElements: ['Fist formation', 'Thumb-side placement above navel'],
        audioNarration: 'Make a fist with one hand. Place the thumb side above the navel and below the breastbone. Grab your fist with your other hand.'
      },
      {
        timestamp: '1:30',
        description: 'Thrust technique',
        visualElements: ['Inward and upward thrust motion', 'Diaphragm movement animation'],
        audioNarration: 'Give quick, distinct thrusts inward and upward. Each thrust should be separate - not continuous pressure.'
      },
      {
        timestamp: '2:30',
        description: 'If person becomes unresponsive',
        visualElements: ['Lowering to ground', 'Beginning CPR', 'Checking mouth'],
        audioNarration: 'If the person becomes unresponsive, lower them to the ground and begin CPR. Look in the mouth before giving breaths.'
      }
    ],
    narration: [
      'Choking is a leading cause of accidental death.',
      'Acting quickly can save a life.',
      'Everyone should learn how to help a choking person.'
    ],
    interactiveElements: [
      {
        type: 'quiz',
        timestamp: '1:15',
        content: 'Where should you place your fist for abdominal thrusts?',
        correctResponse: 'Above the navel, below the breastbone'
      },
      {
        type: 'practice',
        timestamp: '2:00',
        content: 'Practice the thrust motion: quick, distinct, inward and upward'
      }
    ]
  },

  additionalNotes: [
    'PREGNANT WOMEN: Use CHEST THRUSTS instead of abdominal thrusts - same technique as CPR compressions but standing',
    'VERY OBESE PERSONS: Use CHEST THRUSTS if you cannot reach around the waist',
    'WHEELCHAIR USERS: Can perform thrusts in wheelchair if wheels are locked, or carefully transfer',
    'Most choking deaths are preventable with immediate action',
    'In the US, abdominal thrusts are the primary technique; some countries teach back blows first'
  ],

  preventionTips: [
    'Cut food into small pieces, especially for children and elderly',
    'Chew food thoroughly before swallowing',
    'Avoid talking or laughing while eating',
    'Do not eat while walking or moving quickly',
    'Avoid excessive alcohol which impairs swallowing reflex',
    'Be cautious with foods that commonly cause choking: meat, bread, candy, grapes, hot dogs'
  ],

  references: [
    'American Heart Association Choking Guidelines',
    'American Red Cross First Aid Manual',
    'European Resuscitation Council Guidelines'
  ]
};

/**
 * Child Choking Protocol (1-8 years)
 */
export const childChokingProtocol: EmergencyProtocol = {
  id: 'choking-child',
  name: 'Choking - Child (1-8 years)',
  alternateNames: ['Pediatric Choking', 'Child Heimlich'],
  category: EmergencyCategory.LIFE_THREATENING,
  priority: EmergencyPriority.IMMEDIATE,
  ageGroup: AgeGroup.CHILD,

  callEmergencyServices: true,
  emergencyNumber: '911',

  recognitionSigns: [
    {
      sign: 'Unable to cry, cough, or make sounds',
      description: 'Silent distress',
      severity: 'critical'
    },
    {
      sign: 'High-pitched sounds when breathing',
      description: 'Stridor indicating partial obstruction',
      severity: 'severe'
    },
    {
      sign: 'Skin turning blue',
      description: 'Cyanosis from lack of oxygen',
      severity: 'critical'
    },
    {
      sign: 'Clutching throat',
      description: 'May or may not do this - younger children may not',
      severity: 'severe'
    },
    {
      sign: 'Panic and distress',
      description: 'Wide eyes, reaching out',
      severity: 'severe'
    }
  ],

  immediateActions: [
    {
      step: 1,
      action: 'ASSESS SEVERITY',
      technique: `
        MILD: Child can cough, cry, or speak
        - Encourage coughing
        - Do NOT intervene with back blows or thrusts
        - Stay close and monitor

        SEVERE: Cannot cough, cry, or breathe effectively
        - Begin intervention immediately
      `
    },
    {
      step: 2,
      action: 'CALL FOR HELP',
      technique: 'Have someone call 911. If alone, help for 2 minutes then call.'
    },
    {
      step: 3,
      action: 'FOR CONSCIOUS CHILD - ABDOMINAL THRUSTS',
      technique: `
        STANDING CHILD:
        - Kneel or stand behind child (at their level)
        - Wrap arms around waist
        - Make fist, place thumb side above navel, below breastbone
        - Give quick inward and upward thrusts
        - Use less force than for an adult
        - Continue until object expelled or child becomes unresponsive

        SMALL CHILD:
        - May place child across your lap face up
        - Use 2 fingers to give thrusts if child is very small
      `,
      warning: 'Use appropriate force for child\'s size - less than adult'
    },
    {
      step: 4,
      action: 'ALTERNATE: 5 BACK BLOWS, 5 ABDOMINAL THRUSTS',
      technique: `
        1. Give 5 back blows between shoulder blades
        2. Give 5 abdominal thrusts
        3. Repeat cycle
        4. Continue until object dislodged or child unresponsive
      `
    },
    {
      step: 5,
      action: 'IF CHILD BECOMES UNRESPONSIVE',
      technique: `
        1. Lower child gently to ground
        2. Call 911 if not done
        3. Begin CPR (30 compressions, 2 breaths)
        4. LOOK in mouth before breaths
        5. Remove object only if you SEE it
        6. Continue CPR until help arrives
      `
    }
  ],

  doNot: [
    {
      action: 'Do NOT use excessive force',
      reason: 'Children are smaller and more fragile',
      consequence: 'Adjust force to child\'s size'
    },
    {
      action: 'Do NOT do blind finger sweeps',
      reason: 'May push object deeper',
      consequence: 'Only remove visible objects'
    },
    {
      action: 'Do NOT interfere if child can cough effectively',
      reason: 'Their own cough is most effective',
      consequence: 'Encourage coughing, monitor closely'
    }
  ],

  whenToCall911: [
    'Child cannot breathe, cough, or cry',
    'Skin is turning blue',
    'Child becomes unresponsive',
    'After object removed - for medical evaluation'
  ],

  suppliesNeeded: [
    {
      name: 'No special supplies needed',
      quantity: 0,
      usage: 'Hands-only technique'
    }
  ],

  anatomyOverlay: {
    affectedAreas: ['pharynx', 'trachea', 'abdomen'],
    highlightColor: '#FF4444',
    annotations: [
      {
        structure: 'child_thrust_point',
        label: 'Thrust Point (Child)',
        description: 'Above navel, below breastbone - use less force than adult',
        position: { x: 0.5, y: 0.48, z: 0.55 }
      }
    ],
    viewAngles: [
      {
        name: 'Anterior View',
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 1.2,
        description: 'Scaled for pediatric anatomy'
      }
    ]
  },

  additionalNotes: [
    'Adjust technique for child\'s size',
    'May need to kneel to be at appropriate height',
    'Food and small objects are common causes in this age group',
    'Common choking hazards: grapes, hot dogs, coins, small toys, popcorn, nuts'
  ],

  references: [
    'American Heart Association Pediatric BLS',
    'American Academy of Pediatrics Choking Guidelines'
  ]
};

/**
 * Infant Choking Protocol (0-12 months)
 */
export const infantChokingProtocol: EmergencyProtocol = {
  id: 'choking-infant',
  name: 'Choking - Infant (0-12 months)',
  alternateNames: ['Baby Choking', 'Infant Airway Obstruction'],
  category: EmergencyCategory.LIFE_THREATENING,
  priority: EmergencyPriority.IMMEDIATE,
  ageGroup: AgeGroup.INFANT,

  callEmergencyServices: true,
  emergencyNumber: '911',

  recognitionSigns: [
    {
      sign: 'Sudden onset of difficulty breathing',
      description: 'May occur after feeding or playing with small objects',
      severity: 'critical'
    },
    {
      sign: 'Unable to cry or make sounds',
      description: 'Silent or very weak cry',
      severity: 'critical'
    },
    {
      sign: 'Weak or ineffective cough',
      description: 'Cannot cough forcefully',
      severity: 'critical'
    },
    {
      sign: 'Skin turning blue',
      description: 'Especially around lips and fingernails',
      severity: 'critical'
    },
    {
      sign: 'High-pitched sounds or wheezing',
      description: 'Stridor on inhalation',
      severity: 'severe'
    },
    {
      sign: 'Loss of consciousness',
      description: 'If not relieved, infant will become unresponsive',
      severity: 'critical'
    }
  ],

  immediateActions: [
    {
      step: 1,
      action: 'ASSESS SEVERITY',
      technique: `
        MILD: Infant can cough, cry, or breathe
        - Do NOT interfere
        - Monitor closely
        - Let infant cough

        SEVERE: Cannot cough, cry, or breathe effectively
        - Begin back blows and chest thrusts immediately
      `
    },
    {
      step: 2,
      action: 'POSITION FOR BACK BLOWS',
      technique: `
        1. Sit down
        2. Hold infant face DOWN along your forearm
        3. Rest your forearm on your thigh
        4. Support infant's head and jaw with your hand
        5. Keep head lower than body
        6. Make sure you have firm grip
      `,
      visualCue: 'Infant should be face down, head lower than chest',
      warning: 'Support head and neck at all times - never shake'
    },
    {
      step: 3,
      action: 'GIVE 5 BACK BLOWS',
      technique: `
        1. Using heel of your free hand
        2. Give 5 firm back blows between shoulder blades
        3. Each blow should be distinct and forceful
        4. Check if object is expelled after each blow
      `,
      visualCue: 'Strike area between shoulder blades'
    },
    {
      step: 4,
      action: 'TURN OVER FOR CHEST THRUSTS',
      technique: `
        1. Support back of head with free hand
        2. Turn infant over (face UP)
        3. Keep head lower than body
        4. Rest infant on your thigh
        5. Support head and neck
      `
    },
    {
      step: 5,
      action: 'GIVE 5 CHEST THRUSTS',
      technique: `
        1. Place 2 fingers on breastbone just below nipple line
        2. Give 5 quick chest thrusts (like CPR compressions)
        3. About 1.5 inches deep
        4. Each thrust should be separate attempt to dislodge object
        5. Check if object is expelled
      `,
      warning: 'Do NOT use abdominal thrusts on infants - only chest thrusts'
    },
    {
      step: 6,
      action: 'REPEAT CYCLES',
      technique: `
        Continue alternating:
        - 5 back blows
        - 5 chest thrusts

        Until:
        - Object is expelled
        - Infant can breathe/cry
        - Infant becomes unresponsive
      `
    },
    {
      step: 7,
      action: 'IF INFANT BECOMES UNRESPONSIVE',
      technique: `
        1. Place infant on firm, flat surface
        2. Call 911 (or send someone to call)
        3. Begin infant CPR (30 compressions, 2 breaths)
        4. LOOK in mouth before each breath
        5. Remove object ONLY if you SEE it
        6. Do NOT do blind finger sweeps
        7. Continue CPR until help arrives
      `
    }
  ],

  doNot: [
    {
      action: 'Do NOT use abdominal thrusts on infants',
      reason: 'Can damage internal organs in infants',
      consequence: 'Use CHEST thrusts instead (between nipples)'
    },
    {
      action: 'Do NOT shake the infant',
      reason: 'Can cause severe brain injury',
      consequence: 'Use controlled back blows and chest thrusts'
    },
    {
      action: 'Do NOT do blind finger sweeps',
      reason: 'May push object deeper into airway',
      consequence: 'Only remove objects you can clearly see'
    },
    {
      action: 'Do NOT hold infant upside down',
      reason: 'Dangerous and ineffective',
      consequence: 'Hold face down along forearm with head lower than chest'
    },
    {
      action: 'Do NOT give water or pat on back gently',
      reason: 'Will not dislodge object',
      consequence: 'Forceful back blows are required'
    },
    {
      action: 'Do NOT interfere if infant can cough effectively',
      reason: 'Their cough may dislodge object',
      consequence: 'Monitor and be ready to help if cough becomes ineffective'
    }
  ],

  whenToCall911: [
    'Infant cannot breathe, cry, or cough',
    'Infant is turning blue',
    'Back blows and chest thrusts are not working',
    'Infant becomes unresponsive',
    'After object is dislodged - for medical evaluation'
  ],

  suppliesNeeded: [
    {
      name: 'No special supplies needed',
      quantity: 0,
      usage: 'Technique uses hands only'
    }
  ],

  anatomyOverlay: {
    affectedAreas: ['pharynx', 'trachea', 'chest', 'back'],
    highlightColor: '#FF4444',
    annotations: [
      {
        structure: 'infant_back_blow_area',
        label: 'Back Blow Area',
        description: 'Between shoulder blades - strike here',
        position: { x: 0.5, y: 0.25, z: 0.3 }
      },
      {
        structure: 'infant_chest_thrust_point',
        label: 'Chest Thrust Point',
        description: 'On breastbone, just below nipple line',
        position: { x: 0.5, y: 0.35, z: 0.55 }
      },
      {
        structure: 'infant_trachea',
        label: 'Infant Airway',
        description: 'Smaller and more flexible than adult - obstruction point',
        position: { x: 0.5, y: 0.12, z: 0.45 }
      }
    ],
    viewAngles: [
      {
        name: 'Back Blow Position',
        rotation: { x: -30, y: 0, z: 0 },
        zoom: 1.5,
        description: 'Shows positioning for back blows - face down on forearm'
      },
      {
        name: 'Chest Thrust Position',
        rotation: { x: 30, y: 0, z: 0 },
        zoom: 1.5,
        description: 'Shows positioning for chest thrusts - face up on forearm'
      },
      {
        name: 'Posterior View',
        rotation: { x: 0, y: 180, z: 0 },
        zoom: 1.5,
        description: 'Shows back blow target area'
      }
    ],
    animationSequence: [
      {
        frame: 1,
        description: 'Position infant face down on forearm',
        highlightedStructures: ['back']
      },
      {
        frame: 2,
        description: 'Give 5 back blows between shoulder blades',
        highlightedStructures: ['infant_back_blow_area']
      },
      {
        frame: 3,
        description: 'Turn infant face up',
        highlightedStructures: ['chest']
      },
      {
        frame: 4,
        description: 'Give 5 chest thrusts below nipple line',
        highlightedStructures: ['infant_chest_thrust_point']
      }
    ]
  },

  videoAnimationConcept: {
    title: 'Infant Choking Response',
    duration: '4:30',
    keyFrames: [
      {
        timestamp: '0:00',
        description: 'Recognizing infant choking',
        visualElements: ['Infant in distress', 'Signs of choking'],
        audioNarration: 'An infant who is choking cannot cry, cough effectively, or may be turning blue. Act immediately.'
      },
      {
        timestamp: '0:45',
        description: 'Back blow positioning',
        visualElements: ['Placing infant on forearm', 'Head lower than body'],
        audioNarration: 'Sit down and hold the infant face down along your forearm. Support the head and keep it lower than the body.'
      },
      {
        timestamp: '1:15',
        description: 'Delivering back blows',
        visualElements: ['5 back blows demonstration', 'Target area'],
        audioNarration: 'Give 5 firm back blows between the shoulder blades using the heel of your hand.'
      },
      {
        timestamp: '2:00',
        description: 'Turning for chest thrusts',
        visualElements: ['Supporting head', 'Turning infant face up'],
        audioNarration: 'Support the head and turn the infant face up. Rest on your forearm with head still lower than body.'
      },
      {
        timestamp: '2:30',
        description: 'Chest thrusts',
        visualElements: ['2 fingers on chest', '5 thrust demonstration'],
        audioNarration: 'Place 2 fingers just below the nipple line. Give 5 quick chest thrusts, about one and a half inches deep.'
      },
      {
        timestamp: '3:30',
        description: 'Continue cycle and what to do if unresponsive',
        visualElements: ['Continuing cycle', 'Starting infant CPR'],
        audioNarration: 'Continue alternating back blows and chest thrusts. If the infant becomes unresponsive, begin CPR immediately.'
      }
    ],
    narration: [
      'Infant choking requires a different approach than adults.',
      'Use back blows and chest thrusts - never abdominal thrusts.',
      'Always support the head and neck carefully.'
    ],
    interactiveElements: [
      {
        type: 'quiz',
        timestamp: '2:00',
        content: 'Why do we use chest thrusts instead of abdominal thrusts for infants?',
        correctResponse: 'Abdominal thrusts can damage infant internal organs'
      }
    ]
  },

  additionalNotes: [
    'REMEMBER: Back blows then chest thrusts - NOT abdominal thrusts for infants',
    'Always support head and neck',
    'Common choking hazards for infants: formula/milk, small toy parts, coins, buttons, balloons',
    'Even after successful removal, have infant evaluated by healthcare provider',
    'Prevention is key - keep small objects away from infants'
  ],

  preventionTips: [
    'Never leave infant unattended while eating',
    'Keep small objects out of reach (coins, buttons, batteries, small toys)',
    'Cut foods into small pieces appropriate for age',
    'Avoid high-risk foods before age appropriate: whole grapes, hot dogs, popcorn, nuts',
    'Keep balloons and plastic bags away from infants',
    'Check toys for small parts that could break off',
    'Follow age recommendations on toy packaging'
  ],

  references: [
    'American Heart Association Infant BLS',
    'American Academy of Pediatrics Safe Sleep and Choking Prevention',
    'European Resuscitation Council Pediatric Guidelines'
  ]
};

// Export all choking protocols
export const chokingProtocols = {
  adult: adultChokingProtocol,
  child: childChokingProtocol,
  infant: infantChokingProtocol
};

export default chokingProtocols;
