/**
 * CARDIAC ARREST - CPR AND AED PROTOCOL
 *
 * CRITICAL EMERGENCY - CALL 911 IMMEDIATELY
 *
 * Time is critical: Brain damage begins in 4-6 minutes without oxygen.
 * Every minute without CPR decreases survival by 7-10%.
 */

import {
  EmergencyProtocol,
  EmergencyPriority,
  EmergencyCategory,
  AgeGroup,
  RecognitionSign,
  EmergencyStep,
  DoNotItem,
  FirstAidSupply,
  AnatomyOverlay,
  VideoAnimationConcept
} from '../types';

/**
 * Adult CPR Protocol
 */
export const adultCPRProtocol: EmergencyProtocol = {
  id: 'cardiac-arrest-adult',
  name: 'Cardiac Arrest - Adult CPR',
  alternateNames: ['Heart Attack Response', 'CPR', 'Cardiopulmonary Resuscitation'],
  category: EmergencyCategory.LIFE_THREATENING,
  priority: EmergencyPriority.IMMEDIATE,
  ageGroup: AgeGroup.ADULT,

  callEmergencyServices: true,
  emergencyNumber: '911',

  recognitionSigns: [
    {
      sign: 'Unresponsive',
      description: 'Person does not respond to tapping shoulders and shouting',
      severity: 'critical',
      visualCue: 'No eye opening, no movement, no verbal response'
    },
    {
      sign: 'Not breathing normally',
      description: 'No breathing or only gasping (agonal breathing)',
      severity: 'critical',
      visualCue: 'No chest rise, or irregular gasping breaths'
    },
    {
      sign: 'No pulse',
      description: 'No detectable pulse at carotid artery (neck)',
      severity: 'critical',
      visualCue: 'Check for 5-10 seconds maximum'
    },
    {
      sign: 'Skin color changes',
      description: 'Skin may appear pale, gray, or bluish (cyanosis)',
      severity: 'severe',
      visualCue: 'Especially around lips and fingernails'
    },
    {
      sign: 'Sudden collapse',
      description: 'Person suddenly falls or slumps over',
      severity: 'critical',
      visualCue: 'May occur during physical activity or at rest'
    }
  ],

  immediateActions: [
    {
      step: 1,
      action: 'ENSURE SCENE SAFETY',
      duration: '5 seconds',
      warning: 'Do not become a victim - check for hazards',
      technique: 'Look for traffic, fire, electrical hazards, or violence'
    },
    {
      step: 2,
      action: 'CHECK RESPONSIVENESS',
      duration: '5-10 seconds',
      technique: 'Tap shoulders firmly and shout "Are you okay?" loudly',
      visualCue: 'Look for any response - eye opening, movement, sounds'
    },
    {
      step: 3,
      action: 'CALL 911 OR DIRECT SOMEONE TO CALL',
      duration: 'Immediate',
      warning: 'Put phone on speaker so you can continue helping',
      technique: 'If alone with phone, call 911 and put on speaker. If others present, point to specific person: "YOU, call 911 and come back!"'
    },
    {
      step: 4,
      action: 'SEND SOMEONE FOR AED',
      duration: 'Immediate',
      technique: 'Point to specific person: "YOU, get the AED and bring it here!"',
      visualCue: 'AEDs are often in public buildings, gyms, airports'
    },
    {
      step: 5,
      action: 'POSITION THE PERSON',
      duration: '5 seconds',
      technique: 'Gently roll onto back on firm, flat surface. Move away from hazards if safe.',
      warning: 'If spinal injury suspected, support head and neck while rolling'
    },
    {
      step: 6,
      action: 'CHECK FOR BREATHING',
      duration: '5-10 seconds maximum',
      technique: 'Look at chest for rise and fall. Gasping is NOT normal breathing.',
      warning: 'Do not spend more than 10 seconds checking. When in doubt, start CPR.'
    },
    {
      step: 7,
      action: 'BEGIN CHEST COMPRESSIONS',
      duration: 'Continuous',
      repetitions: '30 compressions',
      technique: `
        1. Kneel beside the person's chest
        2. Place heel of one hand on CENTER of chest (lower half of breastbone)
        3. Place other hand on top, interlace fingers
        4. Keep arms straight, shoulders directly over hands
        5. Push HARD and FAST:
           - Depth: At least 2 inches (5 cm)
           - Rate: 100-120 compressions per minute
           - Allow full chest recoil between compressions
        6. Count aloud: "1 and 2 and 3 and 4..."
      `,
      visualCue: 'Compress to the beat of "Stayin\' Alive" by Bee Gees',
      audioInstructions: 'Push hard, push fast, let chest fully rise between each compression'
    },
    {
      step: 8,
      action: 'GIVE RESCUE BREATHS (if trained)',
      duration: '1 second per breath',
      repetitions: '2 breaths',
      technique: `
        1. Open airway: Head tilt-chin lift (tilt head back, lift chin)
        2. Pinch nose closed
        3. Create seal over mouth
        4. Give 2 breaths, 1 second each
        5. Watch for chest rise
        6. If chest doesn't rise, reposition head and try again
      `,
      warning: 'If not trained or unwilling, compression-only CPR is still effective'
    },
    {
      step: 9,
      action: 'CONTINUE CPR CYCLES',
      duration: 'Until help arrives or person responds',
      repetitions: '30 compressions : 2 breaths',
      technique: 'Continue 30:2 cycle without interruption. Switch rescuers every 2 minutes if possible to prevent fatigue.',
      warning: 'Minimize interruptions to compressions - every second without compressions decreases survival'
    },
    {
      step: 10,
      action: 'USE AED AS SOON AS AVAILABLE',
      technique: `
        1. Turn on AED - follow voice prompts
        2. Expose chest - remove clothing, dry if wet
        3. Apply pads as shown on pads (one upper right chest, one lower left side)
        4. Make sure no one is touching person
        5. Allow AED to analyze rhythm
        6. If shock advised: Shout "CLEAR!", ensure no one touching, press shock button
        7. Immediately resume CPR after shock
        8. Continue following AED prompts
      `,
      warning: 'Remove medication patches and jewelry from chest. If hairy chest, shave or remove pads to pull hair off, then apply new pads.'
    }
  ],

  doNot: [
    {
      action: 'Do NOT delay calling 911',
      reason: 'Every second counts in cardiac arrest',
      consequence: 'Delayed emergency response decreases survival significantly'
    },
    {
      action: 'Do NOT give compressions if person is responsive and breathing normally',
      reason: 'CPR is only for cardiac arrest victims',
      consequence: 'Could cause injury to someone who doesn\'t need it'
    },
    {
      action: 'Do NOT push on ribs or the soft area below the breastbone',
      reason: 'Can cause rib fractures or internal injury',
      consequence: 'Push on CENTER of chest, between nipples'
    },
    {
      action: 'Do NOT bend elbows during compressions',
      reason: 'Reduces effectiveness of compressions',
      consequence: 'Adequate depth cannot be achieved'
    },
    {
      action: 'Do NOT lean on chest between compressions',
      reason: 'Prevents full recoil and refilling of heart',
      consequence: 'Reduces blood flow to vital organs'
    },
    {
      action: 'Do NOT stop CPR unless person shows signs of life, help takes over, or you are too exhausted',
      reason: 'Continuous compressions are critical for survival',
      consequence: 'Stopping allows brain damage to progress'
    },
    {
      action: 'Do NOT use AED near water or on metal surface',
      reason: 'Electrical hazard',
      consequence: 'Move person to dry area first'
    },
    {
      action: 'Do NOT place AED pads over medication patches or jewelry',
      reason: 'Can cause burns or interfere with shock',
      consequence: 'Remove patches and avoid placing pads over metal'
    }
  ],

  whenToCall911: [
    'IMMEDIATELY upon recognizing cardiac arrest',
    'Person is unresponsive',
    'Person is not breathing or only gasping',
    'Person has no pulse',
    'Person suddenly collapses',
    'If unsure whether CPR is needed - call and dispatcher will guide you'
  ],

  suppliesNeeded: [
    {
      name: 'AED (Automated External Defibrillator)',
      quantity: 1,
      usage: 'Delivers shock to restore normal heart rhythm',
      alternatives: ['Continue CPR until AED arrives'],
      criticalFor: ['cardiac-arrest-adult', 'cardiac-arrest-child']
    },
    {
      name: 'CPR Barrier Device/Pocket Mask',
      quantity: 1,
      usage: 'Protects rescuer during rescue breaths',
      alternatives: ['Compression-only CPR if unavailable']
    },
    {
      name: 'Gloves',
      quantity: 1,
      usage: 'Personal protection',
      alternatives: ['Can perform CPR without if necessary']
    },
    {
      name: 'Scissors (trauma shears)',
      quantity: 1,
      usage: 'Cut away clothing for AED pads',
      alternatives: ['Tear clothing if necessary']
    },
    {
      name: 'Razor',
      quantity: 1,
      usage: 'Shave hairy chest for AED pad adhesion',
      alternatives: ['Use AED pads to "wax" hair off by applying and removing quickly']
    },
    {
      name: 'Towel or cloth',
      quantity: 1,
      usage: 'Dry wet chest for AED',
      alternatives: ['Any absorbent material']
    }
  ],

  improvizedSupplies: [
    'Hard flat surface (floor, ground) for compressions',
    'Clothing can be torn for access',
    'Cell phone for calling 911 on speaker'
  ],

  recoveryPosition: {
    name: 'Recovery Position',
    description: 'Used if person regains consciousness and is breathing normally',
    steps: [
      'Kneel beside the person',
      'Place arm nearest to you at right angle to body',
      'Place far arm across chest with hand against cheek',
      'Bend far knee up',
      'Roll person toward you onto their side',
      'Tilt head back to keep airway open',
      'Monitor breathing continuously'
    ],
    contraindications: [
      'Do NOT use if spinal injury is suspected',
      'Continue monitoring - be ready to restart CPR if needed'
    ]
  },

  anatomyOverlay: {
    affectedAreas: ['heart', 'lungs', 'brain', 'sternum', 'ribcage'],
    highlightColor: '#FF0000',
    annotations: [
      {
        structure: 'heart',
        label: 'Heart',
        description: 'CPR pumps blood from the heart when it cannot pump itself',
        position: { x: 0.45, y: 0.35, z: 0.3 }
      },
      {
        structure: 'sternum',
        label: 'Compression Point',
        description: 'Center of chest, lower half of breastbone - push here',
        position: { x: 0.5, y: 0.35, z: 0.5 },
        markerType: 'point'
      },
      {
        structure: 'carotid_artery',
        label: 'Pulse Check Point',
        description: 'Check for pulse here (trained rescuers only)',
        position: { x: 0.55, y: 0.15, z: 0.4 }
      },
      {
        structure: 'aed_pad_1',
        label: 'AED Pad 1',
        description: 'Upper right chest, below collarbone',
        position: { x: 0.3, y: 0.25, z: 0.5 }
      },
      {
        structure: 'aed_pad_2',
        label: 'AED Pad 2',
        description: 'Lower left side, below armpit',
        position: { x: 0.7, y: 0.45, z: 0.4 }
      }
    ],
    viewAngles: [
      {
        name: 'Front View',
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 1.0,
        description: 'Shows compression point and AED pad placement'
      },
      {
        name: 'Side View',
        rotation: { x: 0, y: 90, z: 0 },
        zoom: 1.2,
        description: 'Shows proper compression depth'
      },
      {
        name: 'Top View',
        rotation: { x: 90, y: 0, z: 0 },
        zoom: 1.0,
        description: 'Shows hand placement positioning'
      }
    ],
    animationSequence: [
      {
        frame: 1,
        description: 'Locate compression point - center of chest',
        highlightedStructures: ['sternum']
      },
      {
        frame: 2,
        description: 'Position hands correctly',
        highlightedStructures: ['sternum', 'heart']
      },
      {
        frame: 3,
        description: 'Compress 2+ inches deep',
        highlightedStructures: ['heart', 'sternum', 'ribcage']
      },
      {
        frame: 4,
        description: 'Full recoil - let chest rise',
        highlightedStructures: ['heart']
      }
    ]
  },

  videoAnimationConcept: {
    title: 'Adult CPR Step-by-Step',
    duration: '5:00',
    keyFrames: [
      {
        timestamp: '0:00',
        description: 'Scene safety and responsiveness check',
        visualElements: ['Rescuer approaching victim', 'Shoulder tap demonstration'],
        audioNarration: 'First, ensure the scene is safe. Then check if the person is responsive by tapping their shoulders and shouting.'
      },
      {
        timestamp: '0:30',
        description: 'Calling for help',
        visualElements: ['Phone call animation', 'AED location signs'],
        audioNarration: 'Call 911 immediately or direct someone to call. Send another person for an AED.'
      },
      {
        timestamp: '1:00',
        description: 'Positioning and breathing check',
        visualElements: ['Rolling victim onto back', 'Checking breathing'],
        audioNarration: 'Position person on their back on a firm surface. Check for normal breathing for no more than 10 seconds.'
      },
      {
        timestamp: '1:30',
        description: 'Hand placement for compressions',
        visualElements: ['Hand position demonstration', 'Chest anatomy overlay'],
        audioNarration: 'Place the heel of your hand on the center of the chest. Put your other hand on top and interlace fingers.'
      },
      {
        timestamp: '2:00',
        description: 'Compression technique',
        visualElements: ['Compression animation with depth gauge', 'Rate indicator'],
        audioNarration: 'Push hard and fast. At least 2 inches deep, 100-120 times per minute. Let the chest fully rise between compressions.'
      },
      {
        timestamp: '3:00',
        description: 'Rescue breaths (if trained)',
        visualElements: ['Head tilt chin lift', 'Breath delivery'],
        audioNarration: 'If trained, give 2 breaths after every 30 compressions. Watch for chest rise.'
      },
      {
        timestamp: '3:30',
        description: 'AED use',
        visualElements: ['AED operation', 'Pad placement', 'Shock delivery'],
        audioNarration: 'When AED arrives, turn it on and follow the voice prompts. Apply pads as shown and deliver shock if advised.'
      },
      {
        timestamp: '4:30',
        description: 'Continue until help arrives',
        visualElements: ['CPR cycle continuation', 'EMS arrival'],
        audioNarration: 'Continue CPR cycles until professional help arrives, the person shows signs of life, or you are too exhausted to continue.'
      }
    ],
    narration: [
      'In cardiac arrest, every second counts.',
      'The average brain can only survive 4-6 minutes without oxygen.',
      'Your immediate action can mean the difference between life and death.'
    ],
    interactiveElements: [
      {
        type: 'quiz',
        timestamp: '2:30',
        content: 'What is the correct compression rate?',
        correctResponse: '100-120 compressions per minute'
      },
      {
        type: 'practice',
        timestamp: '3:00',
        content: 'Practice compressions to the beat of Stayin Alive'
      }
    ]
  },

  statistics: [
    'Over 350,000 cardiac arrests occur outside hospitals in the US annually',
    'Immediate CPR can double or triple survival rates',
    'Only about 40% of cardiac arrest victims receive bystander CPR',
    'Every minute without CPR decreases survival by 7-10%',
    'AED use within first few minutes can increase survival to over 70%'
  ],

  preventionTips: [
    'Know the signs of heart attack (may precede cardiac arrest)',
    'Maintain healthy lifestyle - exercise, diet, no smoking',
    'Control blood pressure and cholesterol',
    'Get regular medical checkups',
    'Know your family history of heart disease',
    'Learn to recognize warning signs: chest discomfort, shortness of breath, unusual fatigue'
  ],

  additionalNotes: [
    'HANDS-ONLY CPR: If untrained or unwilling to give breaths, compression-only CPR is still effective',
    'Do not stop to check for pulse during CPR - continue until help arrives',
    'If multiple rescuers available, switch compressors every 2 minutes to prevent fatigue',
    'Rib fractures may occur during effective CPR - this is acceptable, continue compressions',
    'Good Samaritan laws protect rescuers who provide reasonable assistance in good faith'
  ],

  references: [
    'American Heart Association Guidelines for CPR and ECC',
    'International Liaison Committee on Resuscitation (ILCOR)',
    'American Red Cross First Aid/CPR/AED Participant\'s Manual'
  ]
};

/**
 * Child CPR Protocol (1-8 years)
 */
export const childCPRProtocol: EmergencyProtocol = {
  id: 'cardiac-arrest-child',
  name: 'Cardiac Arrest - Child CPR (1-8 years)',
  alternateNames: ['Pediatric CPR', 'Child Resuscitation'],
  category: EmergencyCategory.LIFE_THREATENING,
  priority: EmergencyPriority.IMMEDIATE,
  ageGroup: AgeGroup.CHILD,

  callEmergencyServices: true,
  emergencyNumber: '911',

  recognitionSigns: [
    {
      sign: 'Unresponsive',
      description: 'Child does not respond to tapping and calling name loudly',
      severity: 'critical'
    },
    {
      sign: 'Not breathing normally',
      description: 'No breathing or only occasional gasps',
      severity: 'critical'
    },
    {
      sign: 'No pulse',
      description: 'No pulse felt at brachial artery (inner upper arm) or carotid',
      severity: 'critical'
    },
    {
      sign: 'Pale or blue skin',
      description: 'Cyanosis, especially around lips and fingernails',
      severity: 'severe'
    }
  ],

  immediateActions: [
    {
      step: 1,
      action: 'ENSURE SCENE SAFETY',
      duration: '5 seconds'
    },
    {
      step: 2,
      action: 'CHECK RESPONSIVENESS',
      duration: '5-10 seconds',
      technique: 'Tap shoulder and call name loudly'
    },
    {
      step: 3,
      action: 'CALL FOR HELP',
      technique: 'If alone, give 2 minutes of CPR first (5 cycles), then call 911. If with others, have them call immediately.'
    },
    {
      step: 4,
      action: 'OPEN AIRWAY',
      technique: 'Head tilt-chin lift. Do not hyper-extend neck in children.'
    },
    {
      step: 5,
      action: 'CHECK BREATHING',
      duration: '5-10 seconds',
      technique: 'Look, listen, feel for breathing'
    },
    {
      step: 6,
      action: 'GIVE 2 RESCUE BREATHS',
      technique: 'Mouth-to-mouth, ensure seal, watch for chest rise. Give 1 second per breath.'
    },
    {
      step: 7,
      action: 'BEGIN CHEST COMPRESSIONS',
      repetitions: '30 compressions',
      technique: `
        - Use ONE hand for smaller children
        - Use TWO hands for larger children
        - Place heel of hand on center of chest
        - Compress 1/3 depth of chest (about 2 inches)
        - Rate: 100-120 per minute
        - Allow full recoil
      `
    },
    {
      step: 8,
      action: 'CONTINUE CPR CYCLES',
      repetitions: '30:2 (30 compressions, 2 breaths)',
      technique: 'Continue until help arrives or child responds'
    },
    {
      step: 9,
      action: 'USE PEDIATRIC AED PADS IF AVAILABLE',
      technique: 'Use pediatric pads if available. If only adult pads, can use but ensure pads do not touch each other. May need to place one on chest, one on back.'
    }
  ],

  doNot: [
    {
      action: 'Do NOT hyperextend the neck',
      reason: 'Child airways are more flexible and can be occluded',
      consequence: 'Keep head in neutral or slight sniffing position'
    },
    {
      action: 'Do NOT compress too deep',
      reason: 'Risk of injury',
      consequence: 'Compress about 2 inches (1/3 chest depth)'
    },
    {
      action: 'Do NOT skip rescue breaths in children',
      reason: 'Pediatric arrests are often respiratory in origin',
      consequence: 'Rescue breaths are more important in children than adults'
    },
    {
      action: 'Do NOT delay CPR to call 911 if alone',
      reason: 'Children need immediate oxygenation',
      consequence: 'Give 2 minutes of CPR first, then call'
    }
  ],

  whenToCall911: [
    'Child is unresponsive',
    'Child is not breathing normally',
    'After 2 minutes (5 cycles) of CPR if alone',
    'Immediately if another person is present'
  ],

  suppliesNeeded: [
    {
      name: 'Pediatric AED pads',
      quantity: 1,
      usage: 'Lower energy shock appropriate for children',
      alternatives: ['Adult pads can be used if pediatric not available']
    },
    {
      name: 'CPR barrier device',
      quantity: 1,
      usage: 'Protects during rescue breaths',
      alternatives: ['Direct mouth-to-mouth if unavailable']
    }
  ],

  anatomyOverlay: {
    affectedAreas: ['heart', 'lungs', 'sternum'],
    highlightColor: '#FF0000',
    annotations: [
      {
        structure: 'sternum',
        label: 'Compression Point',
        description: 'Center of chest - use one or two hands depending on child size',
        position: { x: 0.5, y: 0.35, z: 0.5 }
      },
      {
        structure: 'chest_depth',
        label: 'Compression Depth',
        description: 'About 2 inches or 1/3 depth of chest',
        position: { x: 0.5, y: 0.35, z: 0.3 }
      }
    ],
    viewAngles: [
      {
        name: 'Front View',
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 1.0,
        description: 'Shows compression point'
      }
    ]
  },

  additionalNotes: [
    'In children, cardiac arrest is often caused by respiratory problems - breaths are crucial',
    'If alone and must leave to call 911, carry child with you if small enough',
    'Pediatric AED pads provide lower energy dose appropriate for children',
    'If pediatric pads unavailable, adult pads can be used - ensure pads do not touch'
  ],

  references: [
    'American Heart Association Pediatric Basic Life Support',
    'Pediatric Advanced Life Support (PALS) Guidelines'
  ]
};

/**
 * Infant CPR Protocol (0-12 months)
 */
export const infantCPRProtocol: EmergencyProtocol = {
  id: 'cardiac-arrest-infant',
  name: 'Cardiac Arrest - Infant CPR (0-12 months)',
  alternateNames: ['Infant Resuscitation', 'Baby CPR'],
  category: EmergencyCategory.LIFE_THREATENING,
  priority: EmergencyPriority.IMMEDIATE,
  ageGroup: AgeGroup.INFANT,

  callEmergencyServices: true,
  emergencyNumber: '911',

  recognitionSigns: [
    {
      sign: 'Unresponsive',
      description: 'Infant does not respond to gentle stimulation',
      severity: 'critical',
      visualCue: 'Flick bottom of foot - no response'
    },
    {
      sign: 'Not breathing',
      description: 'No breathing or only gasping',
      severity: 'critical'
    },
    {
      sign: 'No pulse',
      description: 'No pulse at brachial artery (inside of upper arm)',
      severity: 'critical'
    },
    {
      sign: 'Blue, pale, or mottled skin',
      description: 'Color changes especially around mouth',
      severity: 'severe'
    },
    {
      sign: 'Limp, floppy body',
      description: 'No muscle tone',
      severity: 'critical'
    }
  ],

  immediateActions: [
    {
      step: 1,
      action: 'ENSURE SCENE SAFETY',
      duration: '5 seconds'
    },
    {
      step: 2,
      action: 'CHECK RESPONSIVENESS',
      technique: 'Flick bottom of foot gently. Tap shoulder. Call infant\'s name.',
      warning: 'Never shake an infant'
    },
    {
      step: 3,
      action: 'CALL FOR HELP',
      technique: 'If alone, give 2 minutes of CPR first, then call 911. If others present, have them call immediately. Carry infant to phone if needed.'
    },
    {
      step: 4,
      action: 'POSITION INFANT',
      technique: 'Place on back on firm, flat surface'
    },
    {
      step: 5,
      action: 'OPEN AIRWAY',
      technique: 'Neutral position or slight head tilt (sniffing position). Do NOT hyperextend neck - this can close infant airway.',
      visualCue: 'Imagine infant sniffing a flower - slight tilt only'
    },
    {
      step: 6,
      action: 'CHECK BREATHING',
      duration: '5-10 seconds',
      technique: 'Look for chest rise, listen for breath sounds, feel for air from nose/mouth'
    },
    {
      step: 7,
      action: 'GIVE 2 RESCUE BREATHS',
      technique: `
        - Cover infant's mouth AND nose with your mouth
        - Give gentle puffs (not full breaths)
        - Just enough to see chest rise
        - 1 second per breath
      `,
      warning: 'Do not give forceful breaths - can cause lung injury'
    },
    {
      step: 8,
      action: 'CHECK BRACHIAL PULSE',
      duration: '5-10 seconds',
      technique: 'Feel for pulse on inside of upper arm between elbow and shoulder',
      visualCue: 'Press gently with 2-3 fingers'
    },
    {
      step: 9,
      action: 'BEGIN CHEST COMPRESSIONS',
      repetitions: '30 compressions',
      technique: `
        TWO-FINGER TECHNIQUE (one rescuer):
        - Place 2 fingers just below nipple line
        - On the breastbone (sternum)
        - Compress about 1.5 inches (1/3 chest depth)
        - Rate: 100-120 per minute
        - Allow full recoil

        TWO-THUMB TECHNIQUE (two rescuers):
        - Encircle chest with both hands
        - Place thumbs side by side on sternum just below nipple line
        - Compress with thumbs
        - Squeeze chest with fingers for support
      `,
      visualCue: 'Compressions should be smooth and rhythmic'
    },
    {
      step: 10,
      action: 'CONTINUE CPR CYCLES',
      repetitions: '30:2 (one rescuer) or 15:2 (two rescuers)',
      technique: 'Continue until help arrives or infant responds'
    }
  ],

  doNot: [
    {
      action: 'Do NOT shake the infant',
      reason: 'Can cause severe brain injury (shaken baby syndrome)',
      consequence: 'Use gentle stimulation only'
    },
    {
      action: 'Do NOT hyperextend the neck',
      reason: 'Infant airways are soft and can collapse',
      consequence: 'Keep head in neutral or slight sniffing position'
    },
    {
      action: 'Do NOT blow forcefully',
      reason: 'Infant lungs are small and delicate',
      consequence: 'Give gentle puffs, just enough for chest rise'
    },
    {
      action: 'Do NOT compress over the xiphoid (lower tip of sternum)',
      reason: 'Can damage internal organs',
      consequence: 'Compress on breastbone just below nipple line'
    },
    {
      action: 'Do NOT use AED on infants under 1 year unless pediatric settings available',
      reason: 'Standard AED may deliver too much energy',
      consequence: 'Continue manual CPR, use AED only if has infant/pediatric setting'
    }
  ],

  whenToCall911: [
    'Infant is unresponsive',
    'Infant is not breathing normally',
    'After 2 minutes (5 cycles) of CPR if alone',
    'Immediately if another person is present'
  ],

  suppliesNeeded: [
    {
      name: 'Infant CPR barrier device',
      quantity: 1,
      usage: 'Protects rescuer during breaths',
      alternatives: ['Mouth-to-mouth-and-nose if unavailable']
    }
  ],

  anatomyOverlay: {
    affectedAreas: ['heart', 'sternum', 'brachial_artery'],
    highlightColor: '#FF0000',
    annotations: [
      {
        structure: 'sternum_infant',
        label: 'Compression Point',
        description: 'Just below nipple line on breastbone',
        position: { x: 0.5, y: 0.35, z: 0.5 }
      },
      {
        structure: 'brachial_artery',
        label: 'Pulse Check Point',
        description: 'Inside of upper arm, between elbow and shoulder',
        position: { x: 0.3, y: 0.4, z: 0.4 }
      },
      {
        structure: 'mouth_nose',
        label: 'Rescue Breath Seal',
        description: 'Cover both mouth AND nose for rescue breaths',
        position: { x: 0.5, y: 0.1, z: 0.5 }
      }
    ],
    viewAngles: [
      {
        name: 'Front View',
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 1.5,
        description: 'Shows finger placement for compressions'
      },
      {
        name: 'Side View - Two-Thumb Technique',
        rotation: { x: 0, y: 90, z: 0 },
        zoom: 1.5,
        description: 'Shows encircling hands technique'
      }
    ]
  },

  additionalNotes: [
    'Infant cardiac arrest is usually caused by breathing problems - rescue breaths are critical',
    'Two-thumb encircling technique is preferred when two rescuers available',
    'Compressions should be deep enough to see visible effect',
    'If infant was choking and becomes unresponsive, begin CPR and look for object in mouth before breaths',
    'It is safe to perform CPR even if you are not certain the infant needs it'
  ],

  references: [
    'American Heart Association Infant CPR Guidelines',
    'Pediatric Basic Life Support and First Aid Guidelines'
  ]
};

/**
 * AED Operation Protocol
 */
export const aedProtocol: EmergencyProtocol = {
  id: 'aed-operation',
  name: 'AED (Automated External Defibrillator) Operation',
  alternateNames: ['Defibrillator Use', 'AED Protocol'],
  category: EmergencyCategory.LIFE_THREATENING,
  priority: EmergencyPriority.IMMEDIATE,
  ageGroup: AgeGroup.ALL,

  callEmergencyServices: true,
  emergencyNumber: '911',

  recognitionSigns: [
    {
      sign: 'Person in cardiac arrest',
      description: 'Unresponsive, not breathing normally, no pulse',
      severity: 'critical'
    },
    {
      sign: 'CPR already in progress',
      description: 'AED should be used as soon as available during CPR',
      severity: 'critical'
    }
  ],

  immediateActions: [
    {
      step: 1,
      action: 'TURN ON THE AED',
      technique: 'Press power button or open lid (some activate automatically)',
      visualCue: 'Voice prompts will guide you through each step'
    },
    {
      step: 2,
      action: 'PREPARE THE CHEST',
      technique: `
        - Remove clothing from chest
        - Wipe chest dry if wet
        - Remove medication patches (wear gloves if possible)
        - Shave excessive hair if it prevents pad contact
      `,
      warning: 'Do not use AED if person is in water - move to dry area first'
    },
    {
      step: 3,
      action: 'ATTACH AED PADS',
      technique: `
        ADULT PAD PLACEMENT:
        - Pad 1: Upper right chest, below collarbone
        - Pad 2: Lower left side, below armpit

        CHILD/INFANT PAD PLACEMENT:
        - Use pediatric pads if available
        - If pads might touch, use front-back placement:
          - Pad 1: Center of chest
          - Pad 2: Center of back
      `,
      visualCue: 'Pictures on pads show correct placement'
    },
    {
      step: 4,
      action: 'PLUG IN CONNECTOR',
      technique: 'If pads are not pre-connected, plug connector into AED'
    },
    {
      step: 5,
      action: 'ALLOW AED TO ANALYZE',
      technique: 'Say "STAND CLEAR" and stop CPR while AED analyzes heart rhythm',
      warning: 'Do not touch patient during analysis - movement can affect reading'
    },
    {
      step: 6,
      action: 'IF SHOCK ADVISED',
      technique: `
        1. Shout "EVERYONE STAND CLEAR!"
        2. Visually confirm no one is touching the person
        3. Say "SHOCKING" and press the shock button
        4. AED will deliver shock
        5. IMMEDIATELY resume CPR starting with compressions
      `,
      warning: 'Do not touch patient during shock delivery'
    },
    {
      step: 7,
      action: 'IF NO SHOCK ADVISED',
      technique: 'Immediately resume CPR. AED will re-analyze after 2 minutes.'
    },
    {
      step: 8,
      action: 'CONTINUE FOLLOWING AED PROMPTS',
      technique: 'AED will guide through cycles of CPR and analysis. Continue until emergency services take over.'
    }
  ],

  doNot: [
    {
      action: 'Do NOT use AED in water',
      reason: 'Electrical shock hazard',
      consequence: 'Move person to dry area, dry chest before applying pads'
    },
    {
      action: 'Do NOT place pads over medication patches',
      reason: 'Can cause burns or block shock delivery',
      consequence: 'Remove patches and wipe area clean'
    },
    {
      action: 'Do NOT place pads over pacemaker/ICD bulge',
      reason: 'Can damage device or reduce effectiveness',
      consequence: 'Place pad at least 1 inch away from device bulge'
    },
    {
      action: 'Do NOT let pads touch each other',
      reason: 'Shock will arc between pads instead of through heart',
      consequence: 'On small children/infants, use front-back placement'
    },
    {
      action: 'Do NOT touch patient during analysis or shock',
      reason: 'Can interfere with reading and shock delivery, risk to rescuer',
      consequence: 'Clear everyone away and confirm visually'
    },
    {
      action: 'Do NOT delay CPR while setting up AED',
      reason: 'Compressions are critical for survival',
      consequence: 'One rescuer continues CPR while another prepares AED'
    }
  ],

  whenToCall911: [
    'Should already be called when AED is being used',
    'If not called yet, call immediately'
  ],

  suppliesNeeded: [
    {
      name: 'AED Device',
      quantity: 1,
      usage: 'Analyzes heart rhythm and delivers shock if needed'
    },
    {
      name: 'AED Pads (pre-connected or packaged)',
      quantity: 1,
      usage: 'Deliver shock and allow rhythm analysis',
      alternatives: ['Some AEDs have integrated pads in lid']
    },
    {
      name: 'Razor',
      quantity: 1,
      usage: 'Shave hair if necessary for pad adhesion'
    },
    {
      name: 'Scissors',
      quantity: 1,
      usage: 'Cut away clothing'
    },
    {
      name: 'Towel/dry cloth',
      quantity: 1,
      usage: 'Dry wet chest'
    },
    {
      name: 'Gloves',
      quantity: 1,
      usage: 'Protection when removing medication patches'
    }
  ],

  anatomyOverlay: {
    affectedAreas: ['heart', 'chest_surface'],
    highlightColor: '#FFFF00',
    annotations: [
      {
        structure: 'aed_pad_upper',
        label: 'Pad 1 Position',
        description: 'Upper right chest, below collarbone, right of sternum',
        position: { x: 0.3, y: 0.22, z: 0.55 }
      },
      {
        structure: 'aed_pad_lower',
        label: 'Pad 2 Position',
        description: 'Lower left side, below armpit, along left ribcage',
        position: { x: 0.7, y: 0.42, z: 0.45 }
      },
      {
        structure: 'heart',
        label: 'Target: Heart',
        description: 'Shock travels through heart between pads to restore rhythm',
        position: { x: 0.45, y: 0.32, z: 0.35 }
      },
      {
        structure: 'pacemaker_location',
        label: 'Pacemaker (if present)',
        description: 'Usually upper left chest - keep pad at least 1 inch away',
        position: { x: 0.35, y: 0.2, z: 0.5 }
      }
    ],
    viewAngles: [
      {
        name: 'Anterior View',
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 1.0,
        description: 'Standard adult pad placement'
      },
      {
        name: 'Anterior-Posterior View',
        rotation: { x: 0, y: 90, z: 0 },
        zoom: 1.0,
        description: 'Alternative placement for children - front and back'
      }
    ]
  },

  additionalNotes: [
    'AEDs are designed to be used by anyone - follow voice prompts',
    'Public AEDs are often in airports, schools, gyms, shopping centers',
    'AED will NOT shock a normal rhythm - it is safe to use even if unsure',
    'Some AEDs have pediatric mode - switch to this for children under 8',
    'Do NOT remove AED pads once placed - EMS will need the rhythm data',
    'Good Samaritan laws protect AED users acting in good faith'
  ],

  references: [
    'American Heart Association AED Guidelines',
    'AED Manufacturer Instructions'
  ]
};

// Export all cardiac arrest protocols
export const cardiacArrestProtocols = {
  adult: adultCPRProtocol,
  child: childCPRProtocol,
  infant: infantCPRProtocol,
  aed: aedProtocol
};

export default cardiacArrestProtocols;
