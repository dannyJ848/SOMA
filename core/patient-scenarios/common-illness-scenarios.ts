/**
 * Common Illness Scenarios Database
 *
 * Quick reference scenarios for commonly encountered illnesses.
 * Designed for rapid guidance on home care, when to worry, and
 * what to expect.
 */

// =============================================================================
// COMMON COLD / UPPER RESPIRATORY INFECTION
// =============================================================================

const COMMON_COLD = {
  id: 'common-cold',
  title: 'Common Cold (Upper Respiratory Infection)',
  category: 'respiratory',
  applicableLifeStages: ['infant', 'toddler', 'child', 'adolescent', 'adult', 'geriatric'],
  keywords: ['cold', 'runny nose', 'congestion', 'cough', 'sore throat', 'URI'],

  situationDescription: {
    simple: 'You or your child has cold symptoms - runny nose, congestion, cough, mild sore throat.',
    detailed: 'You\'re experiencing typical cold symptoms: nasal congestion, runny nose, sneezing, mild cough, possibly a low-grade fever, mild sore throat, and general malaise. You want to know how to feel better and when these symptoms might indicate something more serious.',
    comprehensive: 'The common cold is caused by over 200 different viruses (rhinoviruses most common). It typically lasts 7-10 days with symptoms peaking around day 3-4. While uncomfortable, colds are self-limiting and require only supportive care. The challenge is distinguishing a cold from more serious conditions that may require medical treatment.',
  },

  quickFacts: {
    cause: 'Viral infection (200+ different viruses)',
    duration: '7-10 days typically',
    contagious: 'Yes, especially first 2-3 days',
    treatment: 'Supportive care only - no antibiotics',
    prevention: 'Hand washing, avoiding sick contacts',
  },

  typicalSymptoms: [
    { symptom: 'Runny/stuffy nose', timing: 'First symptom, peaks day 2-4' },
    { symptom: 'Sneezing', timing: 'Early symptom' },
    { symptom: 'Sore throat', timing: 'Often first symptom, usually mild' },
    { symptom: 'Cough', timing: 'Develops as nasal drainage increases' },
    { symptom: 'Low-grade fever', timing: 'If present, usually first 2-3 days' },
    { symptom: 'Mild body aches', timing: 'Variable' },
    { symptom: 'Fatigue', timing: 'Throughout illness' },
  ],

  homeCare: {
    adults: [
      'Rest and stay hydrated',
      'Saline nasal spray/rinse for congestion',
      'Honey for cough (not in children under 1)',
      'Throat lozenges for sore throat',
      'Acetaminophen or ibuprofen for discomfort',
      'Decongestants (pseudoephedrine) if needed - avoid if high blood pressure',
      'Humidifier to add moisture to air',
    ],
    children: [
      'Keep well hydrated - fluids more important than food',
      'Saline nose drops + suction for infants',
      'Cool mist humidifier in bedroom',
      'Honey for cough (only if over age 1)',
      'Acetaminophen or ibuprofen for comfort (ibuprofen only if over 6 months)',
      'Elevate head of bed/crib slightly',
      'NO cold medications for children under 4-6 years',
    ],
  },

  whenToSeekCare: [
    'Fever over 103°F (or any fever in infant under 2 months)',
    'Symptoms lasting more than 10 days without improvement',
    'Symptoms that worsen after initial improvement',
    'Severe headache or facial pain (may be sinus infection)',
    'Difficulty breathing or wheezing',
    'Ear pain (may be ear infection)',
    'Sore throat with no cold symptoms + high fever (may be strep)',
    'Infant under 3 months with any cold symptoms',
  ],

  commonMisconceptions: [
    {
      myth: 'Green mucus means bacterial infection needing antibiotics',
      truth: 'Mucus color changes throughout a cold and does NOT indicate bacterial infection',
    },
    {
      myth: 'You should starve a cold/feed a fever',
      truth: 'Stay hydrated and eat as tolerated for both',
    },
    {
      myth: 'Being cold or wet causes colds',
      truth: 'Colds are caused by viruses, not temperature. However, cold weather means more time indoors where viruses spread.',
    },
    {
      myth: 'Antibiotics help colds',
      truth: 'Antibiotics do nothing for viral infections and contribute to antibiotic resistance',
    },
  ],
};

// =============================================================================
// EAR INFECTION
// =============================================================================

const EAR_INFECTION = {
  id: 'ear-infection',
  title: 'Ear Infection (Otitis Media)',
  category: 'childhood-illness',
  applicableLifeStages: ['infant', 'toddler', 'child'],
  keywords: ['ear infection', 'ear pain', 'pulling ears', 'otitis media'],

  situationDescription: {
    simple: 'Your child has ear pain, may be pulling at their ear, and may have fever.',
    detailed: 'Your child is irritable, may be pulling at their ear, has ear pain, possibly has fever, and may have had a cold recently. Ear infections are extremely common in young children and are a leading reason for pediatrician visits.',
    comprehensive: 'Acute otitis media (middle ear infection) occurs when fluid behind the eardrum becomes infected, usually by bacteria but sometimes viruses. It\'s most common in children 6 months to 3 years due to anatomy of the Eustachian tube. Most ear infections resolve on their own, but some need antibiotics.',
  },

  quickFacts: {
    cause: 'Bacterial or viral infection of middle ear fluid',
    riskFactors: 'Young age, recent cold, daycare, bottle-propping, secondhand smoke',
    duration: 'Most improve in 2-3 days; full resolution 7-14 days',
    treatment: 'Pain management always; antibiotics sometimes',
    prevention: 'Breastfeeding, vaccines, avoiding secondhand smoke',
  },

  typicalSymptoms: [
    { symptom: 'Ear pain (older child) or fussiness (infant)', timing: 'Main symptom' },
    { symptom: 'Pulling or rubbing ear', timing: 'Common in infants/toddlers' },
    { symptom: 'Fever', timing: 'Variable - not always present' },
    { symptom: 'Trouble sleeping', timing: 'Lying down worsens pressure' },
    { symptom: 'Trouble hearing', timing: 'During infection' },
    { symptom: 'Drainage from ear', timing: 'If eardrum ruptures - relieves pain' },
    { symptom: 'Recent or concurrent cold symptoms', timing: 'Often precedes ear infection' },
  ],

  homeCare: {
    painManagement: [
      'Acetaminophen or ibuprofen as directed for pain',
      'Warm compress on affected ear',
      'Keep head elevated when lying down',
      'Distraction and comfort',
    ],
    whatToAvoid: [
      'Do NOT put anything in the ear without doctor guidance',
      'Do NOT fly or change altitude if possible (pressure changes)',
      'Avoid getting water in ear if drainage present',
    ],
  },

  whenToSeekCare: [
    'Child under 6 months with suspected ear infection',
    'Severe ear pain',
    'Fever over 102.2°F',
    'Symptoms lasting more than 2-3 days without improvement',
    'Pus or blood draining from ear',
    'Child appears very ill',
    'Swelling or redness around the ear',
    'Recent ear infection that didn\'t fully resolve',
  ],

  treatmentGuidance: {
    watchfulWaiting: {
      when: 'Children 6-23 months with mild symptoms in one ear, or children 2+ with mild symptoms',
      howLong: '48-72 hours',
      what: 'Pain management while watching for improvement',
      antibioticsIf: 'Not improving or worsening',
    },
    immediateAntibiotics: {
      when: 'Under 6 months, severe symptoms, both ears infected in young child, high fever',
      usual: 'Amoxicillin is first-line',
      duration: '5-10 days depending on age and severity',
    },
  },

  commonMisconceptions: [
    {
      myth: 'All ear infections need antibiotics',
      truth: 'Many ear infections are viral or mild bacterial that resolve without antibiotics. Watchful waiting is appropriate in many cases.',
    },
    {
      myth: 'Ear tubes are always needed for recurrent infections',
      truth: 'Tubes are considered after multiple infections in a short time. Most children outgrow ear infections.',
    },
    {
      myth: 'Swimming causes ear infections',
      truth: 'Swimming causes outer ear infections (swimmer\'s ear), not middle ear infections.',
    },
  ],
};

// =============================================================================
// STREP THROAT
// =============================================================================

const STREP_THROAT = {
  id: 'strep-throat',
  title: 'Strep Throat',
  category: 'childhood-illness',
  applicableLifeStages: ['toddler', 'child', 'adolescent', 'adult'],
  keywords: ['strep', 'strep throat', 'sore throat', 'streptococcus'],

  situationDescription: {
    simple: 'Sudden severe sore throat with fever, no cough - could be strep.',
    detailed: 'You or your child has a suddenly very painful throat, high fever, possibly swollen lymph nodes, maybe a headache or stomach ache, but notably WITHOUT cough or runny nose. These features suggest strep throat, which needs testing and treatment.',
    comprehensive: 'Strep throat is a bacterial infection caused by Group A Streptococcus. Unlike viral sore throats, strep requires antibiotic treatment to prevent complications like rheumatic fever. It\'s most common in school-age children (5-15 years) and presents differently than viral pharyngitis.',
  },

  quickFacts: {
    cause: 'Group A Streptococcus bacteria',
    incidence: 'Most common in ages 5-15, rare under 3',
    contagious: 'Very - spread by respiratory droplets',
    treatment: 'Antibiotics required',
    prevention: 'Hand hygiene, not sharing utensils',
  },

  strepVsViralComparison: {
    morelikelyStrep: [
      'Sudden onset severe sore throat',
      'High fever (over 101°F)',
      'Swollen, tender neck lymph nodes',
      'Red throat with white patches or pus',
      'NO cough',
      'NO runny nose',
      'Headache, stomach ache common',
      'Possible scarlet fever rash (sandpaper-like)',
    ],
    morelikelyViral: [
      'Gradual onset',
      'Lower or no fever',
      'Cough present',
      'Runny nose, sneezing',
      'Voice changes (laryngitis)',
      'Red eyes',
      'Generally milder sore throat',
    ],
  },

  homeCare: {
    whileAwaitingTesting: [
      'Pain relief: acetaminophen or ibuprofen',
      'Throat lozenges (older children/adults)',
      'Warm salt water gargles (older children/adults)',
      'Cold drinks, popsicles',
      'Rest',
    ],
    ifStrepConfirmed: [
      'Complete ALL antibiotics even if feeling better',
      'Rest at home for at least 24 hours after starting antibiotics',
      'Pain relief as above',
      'Stay hydrated',
      'Replace toothbrush after 24 hours on antibiotics',
    ],
  },

  whenToSeekCare: [
    'Suspected strep symptoms (above) - needs testing',
    'Unable to swallow',
    'Difficulty breathing',
    'Drooling (can\'t swallow saliva)',
    'Muffled or "hot potato" voice',
    'Stiff neck',
    'Unable to open mouth fully',
    'Symptoms not improving after 48 hours on antibiotics',
  ],

  treatmentInfo: {
    testing: 'Rapid strep test (minutes) and/or throat culture (24-48 hours)',
    antibiotics: 'Penicillin or amoxicillin for 10 days (or alternatives if allergic)',
    contagiousness: 'Not contagious after 24 hours on antibiotics',
    complications: 'Untreated strep can lead to rheumatic fever, kidney problems - this is why treatment is important',
  },

  commonMisconceptions: [
    {
      myth: 'You can tell strep by looking',
      truth: 'Strep cannot be diagnosed by appearance alone. Testing is required.',
    },
    {
      myth: 'You can stop antibiotics when you feel better',
      truth: 'The full course must be completed to eradicate bacteria and prevent complications.',
    },
    {
      myth: 'Strep is only in children',
      truth: 'Adults can get strep too, though it\'s less common.',
    },
  ],
};

// =============================================================================
// HAND FOOT AND MOUTH DISEASE
// =============================================================================

const HAND_FOOT_MOUTH = {
  id: 'hand-foot-mouth',
  title: 'Hand, Foot, and Mouth Disease',
  category: 'childhood-illness',
  applicableLifeStages: ['infant', 'toddler', 'child'],
  keywords: ['hand foot mouth', 'HFMD', 'blisters', 'coxsackie', 'mouth sores'],

  situationDescription: {
    simple: 'Your child has painful mouth sores and a blistery rash on hands and feet.',
    detailed: 'Your child developed a fever, then painful sores in the mouth, followed by a rash with small blisters on the hands, feet, and possibly diaper area. They\'re refusing to eat or drink because of mouth pain. This is likely hand, foot, and mouth disease - very common in young children.',
    comprehensive: 'Hand, foot, and mouth disease (HFMD) is a viral illness caused by coxsackievirus, most commonly affecting children under 5. It causes characteristic painful mouth ulcers and a blistery rash on hands and feet. While uncomfortable, it\'s usually mild and resolves within 7-10 days.',
  },

  quickFacts: {
    cause: 'Coxsackievirus (enterovirus family)',
    peakAge: 'Under 5 years, but can affect older children and adults',
    season: 'Summer and fall typically',
    duration: '7-10 days',
    contagious: 'Very contagious for first week',
  },

  typicalSymptoms: [
    { symptom: 'Fever', timing: 'Usually first, lasting 1-2 days' },
    { symptom: 'Painful mouth sores (ulcers)', timing: 'Day 1-2, can be severe' },
    { symptom: 'Rash on palms and soles', timing: 'Day 1-2, small red spots → blisters' },
    { symptom: 'Rash on buttocks/diaper area', timing: 'Common' },
    { symptom: 'Decreased appetite', timing: 'Due to mouth pain' },
    { symptom: 'Irritability', timing: 'Throughout illness, especially infants' },
    { symptom: 'Sore throat', timing: 'Often present' },
  ],

  homeCare: {
    painAndComfort: [
      'Acetaminophen or ibuprofen for pain and fever',
      'Cold foods: ice cream, popsicles, cold milk (soothing to mouth sores)',
      'Avoid acidic or salty foods (painful)',
      'Soft, bland foods when ready to eat',
      'Magic mouthwash from doctor if mouth sores severe',
    ],
    hydration: [
      'This is the main concern - dehydration from not drinking',
      'Offer cold drinks frequently',
      'Use a syringe to give small amounts if child won\'t use cup',
      'Popsicles count as fluids',
      'Watch for dehydration signs: no tears, dry mouth, no wet diapers',
    ],
    rash: [
      'Blisters don\'t need treatment',
      'Keep clean and dry',
      'Don\'t pop blisters',
    ],
  },

  whenToSeekCare: [
    'Signs of dehydration (no urine for 8 hours, no tears, very dry mouth)',
    'Unable to drink anything due to mouth pain',
    'Fever lasting more than 3 days',
    'Symptoms not improving after 7-10 days',
    'Neck stiffness or severe headache',
    'Your child seems very sick',
    'Infant under 3 months with fever',
  ],

  contagiousnessInfo: {
    howSpread: 'Direct contact with blisters, stool, saliva, nasal secretions',
    mostContagious: 'First week of illness',
    virusInStool: 'Can shed virus in stool for weeks after recovery',
    returnToSchool: 'When fever-free and sores are healing (usually after fever gone and child feels okay)',
    prevention: 'Hand washing, especially after diaper changes. Clean surfaces.',
  },

  commonMisconceptions: [
    {
      myth: 'It\'s the same as foot and mouth disease in animals',
      truth: 'Completely different diseases - the animal disease doesn\'t affect humans.',
    },
    {
      myth: 'Antibiotics are needed',
      truth: 'It\'s a virus - antibiotics don\'t help.',
    },
    {
      myth: 'Once you\'ve had it, you can\'t get it again',
      truth: 'There are multiple strains, so you can get it more than once.',
    },
  ],
};

// =============================================================================
// CROUP
// =============================================================================

const CROUP = {
  id: 'croup',
  title: 'Croup (Laryngotracheobronchitis)',
  category: 'respiratory',
  applicableLifeStages: ['infant', 'toddler', 'child'],
  keywords: ['croup', 'barking cough', 'stridor', 'seal cough'],

  situationDescription: {
    simple: 'Your child has a barking cough that sounds like a seal and may have noisy breathing.',
    detailed: 'Your child developed cold symptoms, then suddenly has a distinctive barking cough, especially at night. They may have a hoarse voice and noisy breathing when inhaling (stridor). The cough sounds like a seal or dog bark.',
    comprehensive: 'Croup is a viral infection causing swelling of the upper airway, particularly around the vocal cords. It\'s most common in children 6 months to 3 years. The swelling causes the characteristic barking cough and stridor. It\'s typically worse at night and can be frightening, but most cases are mild.',
  },

  quickFacts: {
    cause: 'Viral infection (parainfluenza virus most common)',
    peakAge: '6 months to 3 years',
    season: 'Fall and early winter',
    duration: '3-7 days, barking cough may last longer',
    whyNight: 'Cool dry air + lying down + natural cortisol dip worsen symptoms',
  },

  typicalSymptoms: [
    { symptom: 'Barking cough (seal/dog-like)', timing: 'Hallmark symptom, worse at night' },
    { symptom: 'Stridor (noisy breathing on inhale)', timing: 'When more severe' },
    { symptom: 'Hoarse voice or cry', timing: 'Common' },
    { symptom: 'Preceding cold symptoms', timing: '1-2 days before cough' },
    { symptom: 'Fever', timing: 'Variable, often low-grade' },
    { symptom: 'Symptoms worse at night', timing: 'Classic pattern' },
  ],

  severityAssessment: {
    mild: {
      symptoms: ['Occasional barking cough', 'No stridor at rest', 'Happy and playing when not coughing'],
      action: 'Home care',
    },
    moderate: {
      symptoms: ['Frequent barking cough', 'Stridor at rest', 'Mild chest retractions', 'Some anxiety'],
      action: 'May need evaluation, try cool air first',
    },
    severe: {
      symptoms: ['Severe stridor at rest', 'Significant retractions', 'Decreased air entry', 'Anxious, pale', 'Drooling'],
      action: 'Go to ER now',
    },
  },

  homeCare: {
    firstLine: [
      'Cool mist humidifier',
      'Take child outside into cool night air (often helps quickly)',
      'Run hot shower and sit in steamy bathroom',
      'Keep child calm - crying worsens symptoms',
      'Offer fluids',
    ],
    medications: [
      'Acetaminophen or ibuprofen for comfort',
      'NO cough suppressants',
      'Doctor may prescribe oral steroid (dexamethasone) which helps significantly',
    ],
    positionAndComfort: [
      'Keep child upright or slightly elevated',
      'Stay calm yourself - children pick up on anxiety',
      'Comfort and distraction',
    ],
  },

  whenToSeekCare: [
    'Stridor at rest that doesn\'t improve with cool air',
    'Difficulty breathing (retractions, working hard)',
    'Blue or gray color around lips or fingernails',
    'Drooling or difficulty swallowing',
    'Very high fever',
    'Child appears very anxious or exhausted',
    'Unable to drink due to breathing difficulty',
    'First episode under 6 months of age',
    'Symptoms rapidly worsening',
  ],

  emergencySigns: [
    'Severe retractions (pulling in of chest)',
    'Unable to speak or cry',
    'Blue/gray color',
    'Extreme distress or exhaustion',
    'Drooling with difficulty swallowing (may indicate epiglottitis - emergency)',
  ],

  commonMisconceptions: [
    {
      myth: 'Steam from hot water is best',
      truth: 'Cool mist or cool outside air works just as well and is safer (no burn risk).',
    },
    {
      myth: 'Croup needs antibiotics',
      truth: 'It\'s viral - antibiotics don\'t help. Steroids are the treatment when needed.',
    },
    {
      myth: 'If symptoms improve with cool air, no doctor visit needed',
      truth: 'Cool air helps symptoms temporarily. If they recur or are severe, evaluation is still needed.',
    },
  ],
};

// =============================================================================
// PINK EYE (CONJUNCTIVITIS)
// =============================================================================

const PINK_EYE = {
  id: 'pink-eye',
  title: 'Pink Eye (Conjunctivitis)',
  category: 'childhood-illness',
  applicableLifeStages: ['infant', 'toddler', 'child', 'adolescent', 'adult'],
  keywords: ['pink eye', 'conjunctivitis', 'red eye', 'eye discharge', 'eye infection'],

  situationDescription: {
    simple: 'Your child has a red, goopy, or itchy eye.',
    detailed: 'One or both eyes are red and irritated with discharge (yellow/green or watery), possibly with eyelids stuck shut in the morning. You\'re wondering if this is contagious pink eye and if antibiotics are needed.',
    comprehensive: 'Conjunctivitis is inflammation of the conjunctiva (clear membrane covering the white of the eye). It has three main causes: viral (most common, very contagious), bacterial (also contagious), and allergic (not contagious). Treatment depends on the cause.',
  },

  typesComparison: {
    viral: {
      appearance: 'Watery discharge, pink/red eye',
      pattern: 'Often starts in one eye, spreads to other',
      associated: 'Often with cold symptoms',
      contagious: 'VERY contagious',
      treatment: 'Supportive care only - no antibiotics',
      duration: '7-14 days',
    },
    bacterial: {
      appearance: 'Thick yellow/green discharge, eye stuck shut in morning',
      pattern: 'Often one eye, can spread to other',
      associated: 'May or may not have other symptoms',
      contagious: 'Yes, contagious',
      treatment: 'Antibiotic drops/ointment',
      duration: 'Improves in 2-3 days on antibiotics',
    },
    allergic: {
      appearance: 'Watery, itchy, both eyes equally, often with puffy lids',
      pattern: 'Both eyes at same time',
      associated: 'With allergies, hay fever',
      contagious: 'NOT contagious',
      treatment: 'Antihistamines, allergy eye drops',
      duration: 'As long as allergen exposure continues',
    },
  },

  homeCare: {
    allTypes: [
      'Wash hands frequently',
      'Don\'t share towels, washcloths, pillows',
      'Clean discharge with warm wet cloth',
      'Don\'t touch or rub eyes, then touch others',
      'Replace eye makeup',
      'Don\'t wear contacts until resolved',
    ],
    viralOrBacterial: [
      'Warm compresses for comfort',
      'Artificial tears for comfort',
    ],
    allergic: [
      'Cool compresses help itching',
      'Oral antihistamine',
      'Antihistamine eye drops (many available OTC)',
      'Avoid allergen if known',
    ],
  },

  whenToSeekCare: [
    'Significant eye pain (not just irritation)',
    'Vision changes',
    'Sensitivity to light',
    'Intense redness',
    'Newborn with any eye discharge (urgent)',
    'Not improving after several days',
    'Spreading redness to eyelids or face',
    'Fever with eye symptoms',
    'Contact lens wearer with red eye',
    'Recent eye injury or foreign body',
  ],

  schoolAndContagion: {
    viral: 'May return when comfortable enough, even with pink eye (very contagious either way)',
    bacterial: 'May return 24 hours after starting antibiotic drops',
    allergic: 'Not contagious, no restrictions',
    handHygiene: 'Most important prevention measure',
  },

  commonMisconceptions: [
    {
      myth: 'All pink eye needs antibiotics',
      truth: 'Viral pink eye (most common) doesn\'t need or respond to antibiotics.',
    },
    {
      myth: 'You can catch pink eye just by looking at someone who has it',
      truth: 'It spreads by contact with secretions, not by looking.',
    },
    {
      myth: 'Children with pink eye can\'t return to school until it\'s gone',
      truth: 'Many schools now allow return sooner since most is viral and contagious regardless.',
    },
  ],
};

// =============================================================================
// DATABASE EXPORTS
// =============================================================================

export const COMMON_ILLNESS_SCENARIOS = {
  'common-cold': COMMON_COLD,
  'ear-infection': EAR_INFECTION,
  'strep-throat': STREP_THROAT,
  'hand-foot-mouth': HAND_FOOT_MOUTH,
  'croup': CROUP,
  'pink-eye': PINK_EYE,
};

export function getIllnessScenario(id: string) {
  return COMMON_ILLNESS_SCENARIOS[id as keyof typeof COMMON_ILLNESS_SCENARIOS] || null;
}

export function getAllIllnessScenarios() {
  return Object.values(COMMON_ILLNESS_SCENARIOS);
}

export function searchIllnessScenarios(keyword: string) {
  const lowerKeyword = keyword.toLowerCase();
  return Object.values(COMMON_ILLNESS_SCENARIOS).filter(scenario =>
    scenario.keywords.some((k: string) => k.toLowerCase().includes(lowerKeyword)) ||
    scenario.title.toLowerCase().includes(lowerKeyword)
  );
}
