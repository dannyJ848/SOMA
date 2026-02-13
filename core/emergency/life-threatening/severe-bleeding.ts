/**
 * SEVERE BLEEDING CONTROL PROTOCOLS
 *
 * CRITICAL: Severe bleeding can lead to death in minutes.
 * Direct pressure and tourniquets save lives.
 */

import {
  EmergencyProtocol,
  EmergencyPriority,
  EmergencyCategory,
  AgeGroup
} from '../types';

/**
 * Severe Bleeding Control Protocol
 */
export const severeBleedingProtocol: EmergencyProtocol = {
  id: 'severe-bleeding',
  name: 'Severe Bleeding Control',
  alternateNames: ['Hemorrhage Control', 'Life-Threatening Bleeding', 'Trauma Bleeding'],
  category: EmergencyCategory.LIFE_THREATENING,
  priority: EmergencyPriority.IMMEDIATE,
  ageGroup: AgeGroup.ALL,

  callEmergencyServices: true,
  emergencyNumber: '911',

  recognitionSigns: [
    {
      sign: 'Blood spurting or pulsing from wound',
      description: 'Arterial bleeding - bright red, pulsating with heartbeat',
      severity: 'critical',
      visualCue: 'Blood spurts in rhythm with pulse'
    },
    {
      sign: 'Blood pooling rapidly',
      description: 'Large amount of blood accumulating quickly',
      severity: 'critical',
      visualCue: 'Pool of blood larger than a dinner plate'
    },
    {
      sign: 'Blood-soaked clothing or bandages',
      description: 'Dressings becoming saturated quickly',
      severity: 'critical'
    },
    {
      sign: 'Amputation or severe laceration',
      description: 'Limb loss or deep wound with visible tissue',
      severity: 'critical'
    },
    {
      sign: 'Signs of shock',
      description: 'Pale, cool, sweaty skin; rapid weak pulse; confusion',
      severity: 'critical',
      visualCue: 'Person appears pale, disoriented, skin feels clammy'
    },
    {
      sign: 'Weakness or dizziness',
      description: 'Indicating significant blood loss',
      severity: 'severe'
    },
    {
      sign: 'Blood coming through multiple layers',
      description: 'Direct pressure not controlling bleeding',
      severity: 'critical'
    }
  ],

  differentialDiagnosis: [
    'Arterial bleeding - bright red, spurting (most dangerous)',
    'Venous bleeding - dark red, steady flow',
    'Capillary bleeding - oozing (usually not life-threatening)',
    'Internal bleeding - may not be visible externally'
  ],

  immediateActions: [
    {
      step: 1,
      action: 'ENSURE YOUR SAFETY',
      technique: 'Wear gloves if available. Assess scene for ongoing dangers.',
      warning: 'Protect yourself from bloodborne pathogens'
    },
    {
      step: 2,
      action: 'CALL 911 OR DIRECT SOMEONE TO CALL',
      technique: 'Call immediately for severe bleeding. Put phone on speaker if alone.'
    },
    {
      step: 3,
      action: 'EXPOSE THE WOUND',
      technique: `
        - Remove or cut away clothing to see the wound clearly
        - Identify the source of bleeding
        - Do NOT remove embedded objects
      `,
      warning: 'Do not waste time - expose wound quickly'
    },
    {
      step: 4,
      action: 'APPLY DIRECT PRESSURE',
      technique: `
        1. Use a clean cloth, gauze, or clothing
        2. Apply FIRM, CONSTANT pressure directly on the wound
        3. Use both hands if needed
        4. Push HARD - pressure should be uncomfortable to patient
        5. Do NOT lift to check - maintain pressure continuously
        6. If blood soaks through, ADD more material on top
        7. Continue pressure for at least 10 minutes
      `,
      visualCue: 'Push down hard with your body weight',
      warning: 'Do NOT remove blood-soaked dressings - add more on top'
    },
    {
      step: 5,
      action: 'PACK DEEP WOUNDS (if trained)',
      technique: `
        For deep wounds where direct surface pressure is not effective:
        1. Pack the wound tightly with gauze or clean cloth
        2. Push material deep into wound cavity
        3. Pack tightly until wound is full
        4. Apply direct pressure on top of packing
        5. Maintain pressure continuously
      `,
      warning: 'Wound packing may be painful - warn the patient'
    },
    {
      step: 6,
      action: 'APPLY TOURNIQUET FOR LIMB BLEEDING (if direct pressure fails)',
      technique: `
        USE TOURNIQUET WHEN:
        - Direct pressure is not controlling bleeding
        - Arterial bleeding (spurting)
        - Multiple casualties and limited help
        - Need to free hands to help others

        TOURNIQUET APPLICATION:
        1. Place tourniquet 2-3 inches ABOVE the wound
        2. Position on single bone (upper arm or upper thigh)
        3. Pull strap tight
        4. Turn windlass until bleeding STOPS
        5. Secure windlass in clip
        6. Note time of application (write on forehead or tourniquet)
        7. Do NOT loosen or remove once applied
      `,
      visualCue: 'Tighten until bleeding completely stops',
      warning: 'Tourniquets are painful but save lives. Do not remove.'
    },
    {
      step: 7,
      action: 'ELEVATION (if no fracture suspected)',
      technique: 'If possible and no broken bones suspected, elevate bleeding limb above heart level while maintaining pressure.'
    },
    {
      step: 8,
      action: 'TREAT FOR SHOCK',
      technique: `
        1. Have person lie down
        2. Elevate legs 8-12 inches (if no head, neck, spine, or leg injury)
        3. Keep person warm with blankets
        4. Do NOT give food or water
        5. Continue to apply pressure and monitor
      `
    },
    {
      step: 9,
      action: 'MONITOR AND REASSESS',
      technique: `
        - Watch for signs of shock
        - Ensure bleeding remains controlled
        - Keep pressure applied
        - Be prepared to apply tourniquet if bleeding worsens
        - Keep person calm and still
      `
    }
  ],

  doNot: [
    {
      action: 'Do NOT lift dressing to check the wound',
      reason: 'Disturbs clotting and increases bleeding',
      consequence: 'Add more material on top, keep constant pressure'
    },
    {
      action: 'Do NOT remove blood-soaked dressings',
      reason: 'Disturbs clotting',
      consequence: 'Stack more material on top'
    },
    {
      action: 'Do NOT remove embedded objects',
      reason: 'Object may be controlling bleeding by blocking vessels',
      consequence: 'Apply pressure around the object, stabilize it in place'
    },
    {
      action: 'Do NOT apply tourniquet directly over a joint',
      reason: 'Less effective and may cause additional injury',
      consequence: 'Place on upper arm or upper thigh (single bone)'
    },
    {
      action: 'Do NOT loosen or remove a tourniquet once applied',
      reason: 'Can cause death from resumed bleeding or toxin release',
      consequence: 'Note time and leave for medical professionals to manage'
    },
    {
      action: 'Do NOT give the person anything to eat or drink',
      reason: 'May need surgery; risk of aspiration',
      consequence: 'Keep patient NPO (nothing by mouth)'
    },
    {
      action: 'Do NOT use a tourniquet that is too loose',
      reason: 'Loose tourniquet can increase bleeding by blocking veins but not arteries',
      consequence: 'Tighten until bleeding COMPLETELY stops'
    },
    {
      action: 'Do NOT delay applying tourniquet if direct pressure fails',
      reason: 'Every second counts with severe arterial bleeding',
      consequence: 'Apply tourniquet quickly and tightly'
    }
  ],

  whenToCall911: [
    'ANY severe or uncontrolled bleeding',
    'Blood spurting from wound',
    'Blood pooling on ground',
    'Amputation or severe laceration',
    'Person showing signs of shock',
    'Direct pressure not controlling bleeding',
    'Bleeding from multiple injuries',
    'Head, chest, or abdominal bleeding'
  ],

  suppliesNeeded: [
    {
      name: 'Commercial Tourniquet (CAT, SOFT-T, etc.)',
      quantity: 2,
      usage: 'Stop life-threatening limb bleeding when direct pressure fails',
      alternatives: ['Improvised tourniquet: belt, necktie, torn cloth (2+ inches wide) with windlass'],
      criticalFor: ['severe-bleeding', 'amputation']
    },
    {
      name: 'Hemostatic Gauze (QuikClot, Celox)',
      quantity: 2,
      usage: 'Pack wounds - promotes rapid clotting',
      alternatives: ['Regular gauze, clean cloth']
    },
    {
      name: 'Gauze Pads/Rolls',
      quantity: 10,
      usage: 'Direct pressure and wound packing',
      alternatives: ['Clean cloth, clothing, towels']
    },
    {
      name: 'Elastic Bandage (ACE wrap)',
      quantity: 2,
      usage: 'Secure dressings, apply pressure',
      alternatives: ['Belt, torn cloth strips']
    },
    {
      name: 'Trauma Dressing/ABD Pad',
      quantity: 2,
      usage: 'Large absorbent dressing for big wounds',
      alternatives: ['Folded towel, multiple gauze pads']
    },
    {
      name: 'Nitrile Gloves',
      quantity: 4,
      usage: 'Personal protection from bloodborne pathogens',
      alternatives: ['Plastic bags over hands if necessary']
    },
    {
      name: 'Trauma Shears',
      quantity: 1,
      usage: 'Cut away clothing to expose wounds',
      alternatives: ['Regular scissors, knife']
    },
    {
      name: 'Marker/Pen',
      quantity: 1,
      usage: 'Write tourniquet time on forehead or tourniquet',
      alternatives: ['Any writing implement']
    },
    {
      name: 'Emergency Blanket',
      quantity: 1,
      usage: 'Keep person warm, treat shock',
      alternatives: ['Regular blankets, coats, clothing']
    }
  ],

  improvizedSupplies: [
    'Tourniquet: Belt, necktie, scarf (minimum 2 inches wide) + stick for windlass',
    'Pressure bandage: Sanitary pad, folded t-shirt, towel',
    'Gloves: Plastic bags over hands',
    'Blanket: Coats, curtains, newspapers for insulation'
  ],

  anatomyOverlay: {
    affectedAreas: ['arteries', 'veins', 'skin', 'subcutaneous_tissue', 'muscle'],
    highlightColor: '#FF0000',
    annotations: [
      {
        structure: 'brachial_artery',
        label: 'Brachial Artery',
        description: 'Major artery in arm - target for arm pressure point',
        position: { x: 0.3, y: 0.4, z: 0.45 }
      },
      {
        structure: 'femoral_artery',
        label: 'Femoral Artery',
        description: 'Major artery in groin - target for leg pressure point',
        position: { x: 0.4, y: 0.55, z: 0.5 }
      },
      {
        structure: 'upper_arm_tourniquet',
        label: 'Upper Arm Tourniquet Site',
        description: 'Apply tourniquet here for lower arm/hand bleeding',
        position: { x: 0.25, y: 0.35, z: 0.5 }
      },
      {
        structure: 'upper_thigh_tourniquet',
        label: 'Upper Thigh Tourniquet Site',
        description: 'Apply tourniquet here for leg bleeding - as high as possible',
        position: { x: 0.4, y: 0.52, z: 0.5 }
      },
      {
        structure: 'wound_packing',
        label: 'Wound Packing',
        description: 'Deep wounds require packing with gauze',
        position: { x: 0.5, y: 0.45, z: 0.55 }
      }
    ],
    viewAngles: [
      {
        name: 'Full Body - Arterial System',
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 0.8,
        description: 'Shows major arteries and tourniquet points'
      },
      {
        name: 'Arm Detail',
        rotation: { x: 0, y: 45, z: 0 },
        zoom: 1.5,
        description: 'Shows brachial artery and tourniquet placement'
      },
      {
        name: 'Leg Detail',
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 1.5,
        description: 'Shows femoral artery and tourniquet placement'
      },
      {
        name: 'Cross-Section - Wound Packing',
        rotation: { x: 90, y: 0, z: 0 },
        zoom: 2.0,
        description: 'Shows technique for packing deep wounds'
      }
    ],
    animationSequence: [
      {
        frame: 1,
        description: 'Identify bleeding source',
        highlightedStructures: ['wound', 'arteries']
      },
      {
        frame: 2,
        description: 'Apply direct pressure',
        highlightedStructures: ['wound']
      },
      {
        frame: 3,
        description: 'Pack deep wound if needed',
        highlightedStructures: ['wound_packing']
      },
      {
        frame: 4,
        description: 'Apply tourniquet if direct pressure fails',
        highlightedStructures: ['upper_arm_tourniquet', 'upper_thigh_tourniquet']
      }
    ]
  },

  videoAnimationConcept: {
    title: 'Controlling Severe Bleeding',
    duration: '6:00',
    keyFrames: [
      {
        timestamp: '0:00',
        description: 'Recognizing severe bleeding',
        visualElements: ['Types of bleeding', 'Signs of shock'],
        audioNarration: 'Severe bleeding can kill in minutes. Look for blood spurting, pooling, or soaking through bandages. Signs of shock include pale, cool, sweaty skin.'
      },
      {
        timestamp: '0:45',
        description: 'Direct pressure technique',
        visualElements: ['Applying gauze', 'Two-handed pressure', 'Maintaining pressure'],
        audioNarration: 'Apply direct, firm pressure with a clean cloth or gauze. Use both hands and push hard. Do not lift to check - maintain constant pressure.'
      },
      {
        timestamp: '1:45',
        description: 'Wound packing for deep wounds',
        visualElements: ['Packing gauze deep into wound', 'Filling cavity'],
        audioNarration: 'For deep wounds, pack gauze tightly into the wound cavity. Push it in firmly until the wound is filled, then apply pressure on top.'
      },
      {
        timestamp: '3:00',
        description: 'Tourniquet application',
        visualElements: ['Placing tourniquet', 'Tightening windlass', 'Noting time'],
        audioNarration: 'If direct pressure does not stop bleeding, apply a tourniquet 2-3 inches above the wound. Tighten until bleeding completely stops. Note the time.'
      },
      {
        timestamp: '4:30',
        description: 'Treating for shock',
        visualElements: ['Positioning patient', 'Elevating legs', 'Keeping warm'],
        audioNarration: 'Lay the person down, elevate their legs if no leg injury, and keep them warm. Continue monitoring and maintaining pressure.'
      }
    ],
    narration: [
      'Severe bleeding can kill in minutes.',
      'Direct pressure is the first line of defense.',
      'Tourniquets save lives when direct pressure fails.'
    ],
    interactiveElements: [
      {
        type: 'quiz',
        timestamp: '2:00',
        content: 'Should you remove a blood-soaked dressing to apply a new one?',
        correctResponse: 'No - add more material on top to avoid disturbing clots'
      },
      {
        type: 'quiz',
        timestamp: '4:00',
        content: 'Where should a tourniquet be placed?',
        correctResponse: '2-3 inches above the wound, on the upper arm or upper thigh'
      }
    ]
  },

  aftercare: [
    'Transfer care to EMS when they arrive',
    'Provide information about blood loss estimate and tourniquet time',
    'Person will need hospital evaluation and possibly surgery',
    'Watch for signs of infection in following days if wound not severe enough for hospital',
    'Tetanus vaccination may be needed'
  ],

  statistics: [
    'Uncontrolled hemorrhage is the leading cause of preventable death in trauma',
    'Death from bleeding can occur in as little as 3-5 minutes with arterial bleeding',
    'Proper tourniquet use has saved thousands of lives in military and civilian settings',
    'Early bleeding control significantly improves survival rates'
  ],

  additionalNotes: [
    'STOP THE BLEED: National campaign teaching public bleeding control - consider taking a course',
    'Tourniquets are safe for extended periods - do not fear using them',
    'Apply tourniquets HIGH and TIGHT - better too tight than too loose',
    'If one tourniquet does not stop bleeding, apply a second above the first',
    'Junctional wounds (groin, armpit, neck) require wound packing and pressure',
    'Internal bleeding cannot be controlled with first aid - rapid transport is critical'
  ],

  preventionTips: [
    'Workplace safety practices',
    'Proper use of tools and equipment',
    'Protective gear when appropriate',
    'Safe driving practices',
    'Keep sharp objects stored safely'
  ],

  references: [
    'American College of Surgeons - Stop the Bleed',
    'Tactical Combat Casualty Care (TCCC) Guidelines',
    'American Heart Association First Aid Guidelines',
    'Hartford Consensus - Active Shooter Response'
  ]
};

/**
 * Internal Bleeding Protocol
 */
export const internalBleedingProtocol: EmergencyProtocol = {
  id: 'internal-bleeding',
  name: 'Internal Bleeding Recognition',
  alternateNames: ['Internal Hemorrhage', 'Hidden Bleeding'],
  category: EmergencyCategory.LIFE_THREATENING,
  priority: EmergencyPriority.IMMEDIATE,
  ageGroup: AgeGroup.ALL,

  callEmergencyServices: true,
  emergencyNumber: '911',

  recognitionSigns: [
    {
      sign: 'Bruising in unexpected areas',
      description: 'Large bruises appearing without obvious injury',
      severity: 'severe',
      visualCue: 'Spreading bruises, especially on abdomen or flanks'
    },
    {
      sign: 'Abdominal pain and rigidity',
      description: 'Abdomen is tender and may feel hard (guarding)',
      severity: 'severe'
    },
    {
      sign: 'Signs of shock without visible bleeding',
      description: 'Pale, cold, sweaty; rapid weak pulse; confusion',
      severity: 'critical'
    },
    {
      sign: 'Blood in vomit, stool, or urine',
      description: 'Vomit looks like coffee grounds; black tarry stool; bloody urine',
      severity: 'critical'
    },
    {
      sign: 'Coughing up blood',
      description: 'Bright red blood or pink frothy sputum',
      severity: 'critical'
    },
    {
      sign: 'Vaginal bleeding in non-pregnant women',
      description: 'Heavy unexpected bleeding',
      severity: 'severe'
    },
    {
      sign: 'Dizziness, weakness, fainting',
      description: 'Signs of blood volume loss',
      severity: 'severe'
    },
    {
      sign: 'Recent trauma history',
      description: 'Symptoms appearing after car accident, fall, or blow to body',
      severity: 'severe'
    }
  ],

  immediateActions: [
    {
      step: 1,
      action: 'CALL 911 IMMEDIATELY',
      technique: 'Internal bleeding requires emergency medical care - cannot be controlled with first aid'
    },
    {
      step: 2,
      action: 'POSITION THE PERSON',
      technique: `
        - Have person lie down on their back
        - If breathing is difficult, allow position of comfort
        - Elevate legs 8-12 inches if no leg, spine, or head injury
        - If nauseous, turn on side to prevent aspiration
      `
    },
    {
      step: 3,
      action: 'KEEP PERSON WARM',
      technique: 'Cover with blankets to prevent hypothermia'
    },
    {
      step: 4,
      action: 'MONITOR VITAL SIGNS',
      technique: `
        - Check breathing
        - Monitor pulse (may become rapid and weak)
        - Watch for changes in consciousness
        - Note skin color and temperature
      `
    },
    {
      step: 5,
      action: 'DO NOT GIVE FOOD OR WATER',
      technique: 'Person may need surgery - keep nothing by mouth',
      warning: 'Even if they are thirsty, do not give fluids'
    },
    {
      step: 6,
      action: 'COLLECT INFORMATION',
      technique: `
        Gather information for EMS:
        - Mechanism of injury (what happened)
        - Time of injury
        - Medications (especially blood thinners)
        - Medical conditions
        - Last time person ate/drank
      `
    },
    {
      step: 7,
      action: 'BE PREPARED FOR CPR',
      technique: 'If person becomes unresponsive and stops breathing, begin CPR'
    }
  ],

  doNot: [
    {
      action: 'Do NOT give food, water, or medication',
      reason: 'Person may need emergency surgery',
      consequence: 'Keep NPO (nothing by mouth)'
    },
    {
      action: 'Do NOT allow person to move unnecessarily',
      reason: 'Movement can worsen internal bleeding',
      consequence: 'Keep still and calm'
    },
    {
      action: 'Do NOT apply pressure to abdomen',
      reason: 'Can worsen internal injury',
      consequence: 'Let person lie comfortably'
    },
    {
      action: 'Do NOT assume internal bleeding will stop on its own',
      reason: 'Internal bleeding can be rapidly fatal',
      consequence: 'Always seek emergency care'
    }
  ],

  whenToCall911: [
    'Any suspected internal bleeding',
    'Signs of shock without visible injury',
    'Blood in vomit, stool, or urine',
    'Abdominal pain after trauma',
    'Unexplained weakness, dizziness, or fainting',
    'History of recent significant trauma'
  ],

  suppliesNeeded: [
    {
      name: 'Blankets',
      quantity: 1,
      usage: 'Keep person warm'
    },
    {
      name: 'Phone',
      quantity: 1,
      usage: 'Call 911'
    }
  ],

  anatomyOverlay: {
    affectedAreas: ['liver', 'spleen', 'kidneys', 'large_blood_vessels', 'pelvis'],
    highlightColor: '#AA0000',
    annotations: [
      {
        structure: 'spleen',
        label: 'Spleen',
        description: 'Common site of internal bleeding after left-side trauma',
        position: { x: 0.6, y: 0.4, z: 0.35 }
      },
      {
        structure: 'liver',
        label: 'Liver',
        description: 'Large blood-filled organ - can bleed heavily if injured',
        position: { x: 0.4, y: 0.38, z: 0.35 }
      },
      {
        structure: 'aorta',
        label: 'Aorta',
        description: 'Major artery - injury can be rapidly fatal',
        position: { x: 0.5, y: 0.45, z: 0.3 }
      },
      {
        structure: 'pelvis',
        label: 'Pelvis',
        description: 'Pelvic fractures can cause massive internal bleeding',
        position: { x: 0.5, y: 0.55, z: 0.35 }
      }
    ],
    viewAngles: [
      {
        name: 'Anterior Abdominal',
        rotation: { x: 0, y: 0, z: 0 },
        zoom: 1.2,
        description: 'Shows organs commonly involved in internal bleeding'
      },
      {
        name: 'Cross-Section',
        rotation: { x: 0, y: 90, z: 0 },
        zoom: 1.3,
        description: 'Shows depth of abdominal organs'
      }
    ]
  },

  additionalNotes: [
    'Internal bleeding is a medical emergency requiring surgery or other intervention',
    'First aid for internal bleeding is limited to supportive care and rapid transport',
    'Trust your instincts - if something seems wrong after trauma, get medical evaluation',
    'Blood thinners greatly increase risk of serious internal bleeding',
    'Elderly patients may have internal bleeding with minimal trauma history'
  ],

  references: [
    'Emergency Medical Services Protocols',
    'American College of Surgeons Trauma Guidelines'
  ]
};

// Export all bleeding protocols
export const bleedingProtocols = {
  severe: severeBleedingProtocol,
  internal: internalBleedingProtocol
};

export default bleedingProtocols;
