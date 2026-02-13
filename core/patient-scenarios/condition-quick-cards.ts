/**
 * Condition Quick Cards Database
 *
 * Rapid-reference cards for common conditions with key information
 * at a glance. Perfect for quick triage and decision-making.
 */

// =============================================================================
// QUICK CARD DEFINITIONS
// =============================================================================

const FEVER_QUICK_CARD = {
  id: 'fever-quick',
  conditionName: 'Fever',
  aliases: ['Temperature', 'Febrile', 'High temperature'],
  oneLiner: 'Body temperature 100.4°F (38°C) or higher',
  applicableAges: ['newborn', 'infant', 'toddler', 'child', 'adolescent', 'adult', 'geriatric'],
  category: 'fever',

  keySymptoms: ['Warm to touch', 'Flushed', 'Sweating or chills', 'Irritable or tired'],
  typicalAppearance: 'Warm, flushed skin; may be tired or fussy',

  urgencyIndicators: {
    homeOkay: [
      'Over 2 months AND perks up with fever reducers',
      'Drinking fluids well',
      'Alert when awake',
      'No red flag symptoms',
    ],
    needsEvaluation: [
      'Fever lasting more than 3-4 days',
      'Infant 2-3 months',
      'Doesn\'t perk up when fever comes down',
      'Ear pain, sore throat, urinary symptoms',
    ],
    emergent: [
      'ANY fever in newborn (under 28 days)',
      'Fever in infant under 2 months',
      'Lethargic even when fever treated',
      'Stiff neck, severe headache',
      'Purple/red non-blanching rash',
      'Difficulty breathing',
    ],
  },

  quickHomeCare: [
    'Acetaminophen (any age) or ibuprofen (6+ months) for comfort',
    'Push fluids - water, diluted juice, popsicles',
    'Light clothing',
    'Rest',
    'Watch how child acts more than the number',
  ],

  whenToWorry: [
    'Any fever under 2 months old → ER',
    'Lethargic when fever is down',
    'Not drinking',
    'Breathing fast or hard',
    'Stiff neck',
    'Purple spots',
    'Fever >3-4 days',
  ],

  faqAnswers: [
    { question: 'How high is too high?', answer: 'How the child looks matters more than the number. A playful child at 104°F is less concerning than a listless child at 102°F.' },
    { question: 'Should I wake them to give medicine?', answer: 'No. If sleeping comfortably, let them sleep. Sleep is healing.' },
    { question: 'Should I alternate Tylenol and Motrin?', answer: 'Not routinely necessary. If using both, track carefully to avoid overdose. Ask your doctor.' },
  ],

  fullScenarioId: 'childhood-fever',
};

const VOMITING_QUICK_CARD = {
  id: 'vomiting-quick',
  conditionName: 'Vomiting',
  aliases: ['Throwing up', 'Stomach flu', 'Gastroenteritis'],
  oneLiner: 'Forceful emptying of stomach contents',
  applicableAges: ['infant', 'toddler', 'child', 'adolescent', 'adult'],
  category: 'gastrointestinal',

  keySymptoms: ['Nausea', 'Stomach pain', 'Vomiting', 'May have diarrhea too'],
  typicalAppearance: 'Pale, tired, not wanting to eat',

  urgencyIndicators: {
    homeOkay: [
      'Able to keep sips down',
      'Making urine',
      'Alert between episodes',
      'No blood',
    ],
    needsEvaluation: [
      'Can\'t keep anything down for 8+ hours (child) or 12+ hours (adult)',
      'Signs of dehydration',
      'Severe stomach pain',
      'Vomiting >24 hours',
    ],
    emergent: [
      'Blood or coffee-ground appearance in vomit',
      'Severe abdominal pain',
      'Green (bile) vomiting in infant',
      'Projectile vomiting in infant',
      'After head injury',
      'Signs of severe dehydration',
    ],
  },

  quickHomeCare: [
    'Small sips of clear fluids every few minutes',
    'Pedialyte or oral rehydration solution for kids',
    'Wait 30-60 min after vomiting before trying fluids',
    'Progress to BRAT diet when ready',
    'Rest stomach - don\'t push food',
  ],

  whenToWorry: [
    'Blood in vomit',
    'Green vomit',
    'Can\'t keep anything down',
    'Signs of dehydration',
    'Severe pain',
    'After head injury',
    'Stiff neck',
  ],

  faqAnswers: [
    { question: 'How do I know if they\'re dehydrated?', answer: 'No tears when crying, very dry mouth, no wet diaper in 8 hours, sunken eyes, very sleepy.' },
    { question: 'When can they eat again?', answer: 'When they\'re keeping liquids down and show interest. Start bland (BRAT diet).' },
    { question: 'Should I give anti-nausea medicine?', answer: 'Ask doctor first. For most stomach bugs, pushing fluids is more important than stopping vomiting.' },
  ],

  fullScenarioId: 'gi-illness-triage',
};

const COUGH_QUICK_CARD = {
  id: 'cough-quick',
  conditionName: 'Cough',
  aliases: ['Coughing', 'Hacking', 'Chest congestion'],
  oneLiner: 'Forceful expulsion of air to clear airways',
  applicableAges: ['infant', 'toddler', 'child', 'adolescent', 'adult'],
  category: 'respiratory',

  keySymptoms: ['Coughing', 'May have runny nose', 'May have fever', 'May have wheezing'],
  typicalAppearance: 'Varies with cause - may look well between coughs or unwell',

  urgencyIndicators: {
    homeOkay: [
      'Cough with cold symptoms, no breathing difficulty',
      'Eating and drinking well',
      'No fever or low-grade only',
      'Active and playful between coughs',
    ],
    needsEvaluation: [
      'Cough lasting more than 2 weeks',
      'Cough with fever >3 days',
      'Barking cough (possible croup)',
      'Wheezing not responding to rescue inhaler',
      'Coughing so hard they vomit',
    ],
    emergent: [
      'Difficulty breathing (ribs showing, fast breathing, can\'t talk)',
      'Blue lips or fingernails',
      'Choking on something',
      'Coughing blood',
      'Not able to drink due to breathing/coughing',
    ],
  },

  quickHomeCare: [
    'Honey for cough (if over 1 year)',
    'Humidifier',
    'Fluids',
    'Saline nose drops for congestion',
    'NO cough medicine for young children',
    'Keep head elevated at night',
  ],

  whenToWorry: [
    'Breathing difficulty - go to ER',
    'Blue color - call 911',
    'Barking seal cough - see croup guidance',
    'Whooping sound after cough',
    'Lasts more than 2 weeks',
    'Coughing blood',
  ],

  faqAnswers: [
    { question: 'Are cough medicines safe for kids?', answer: 'Not recommended under 4-6 years. Honey (if over 1) is actually more effective than most cough medicines.' },
    { question: 'When does cough need antibiotics?', answer: 'Cough from a cold is viral - no antibiotics. Antibiotics only if bacterial infection like pneumonia.' },
    { question: 'Why is the cough worse at night?', answer: 'Lying down increases post-nasal drip. Dry air irritates airways. Try humidifier and elevating head.' },
  ],

  fullScenarioId: 'breathing-triage',
};

const EARACHE_QUICK_CARD = {
  id: 'earache-quick',
  conditionName: 'Earache',
  aliases: ['Ear pain', 'Ear infection', 'Otitis'],
  oneLiner: 'Pain in the ear, often from infection or pressure',
  applicableAges: ['infant', 'toddler', 'child'],
  category: 'childhood-illness',

  keySymptoms: ['Ear pain', 'Pulling at ear', 'Fussy', 'Trouble sleeping', 'Fever (sometimes)'],
  typicalAppearance: 'Fussy, holding or pulling ear, may have cold symptoms',

  urgencyIndicators: {
    homeOkay: [
      'Mild pain responding to pain medicine',
      'No fever or low-grade',
      'Still eating and drinking',
      'Over 2 years with mild symptoms',
    ],
    needsEvaluation: [
      'Under 6 months with suspected ear infection',
      'High fever',
      'Severe pain',
      'Drainage from ear',
      'Symptoms lasting >2-3 days',
    ],
    emergent: [
      'Redness/swelling BEHIND the ear',
      'Facial weakness',
      'Very high fever with neck stiffness',
      'Sudden hearing loss',
    ],
  },

  quickHomeCare: [
    'Pain relief: Tylenol or Motrin',
    'Warm compress on ear',
    'Keep head elevated',
    'Distraction',
    'Don\'t put anything in the ear',
  ],

  whenToWorry: [
    'Swelling behind ear (mastoiditis)',
    'Facial drooping',
    'Very high fever',
    'Stiff neck',
    'Severe pain not helped by medicine',
  ],

  faqAnswers: [
    { question: 'Do all ear infections need antibiotics?', answer: 'No. Many mild infections in children over 2 resolve without. Ask about watchful waiting.' },
    { question: 'Why does my child keep getting ear infections?', answer: 'Young children have short, horizontal ear tubes making drainage difficult. Most outgrow this.' },
    { question: 'Should I fly with an ear infection?', answer: 'Pressure changes can be very painful. Ideally wait, or decongestant + pain medicine + swallowing during ascent/descent.' },
  ],

  fullScenarioId: 'ear-infection',
};

const RASH_QUICK_CARD = {
  id: 'rash-quick',
  conditionName: 'Rash',
  aliases: ['Skin rash', 'Hives', 'Spots', 'Bumps'],
  oneLiner: 'Any change in skin appearance - red, bumpy, itchy, blistered',
  applicableAges: ['infant', 'toddler', 'child', 'adolescent', 'adult'],
  category: 'skin-rash',

  keySymptoms: ['Red skin', 'Bumps or spots', 'May be itchy', 'May have blisters'],
  typicalAppearance: 'Varies widely - can be flat, raised, red, blotchy, blistered',

  urgencyIndicators: {
    homeOkay: [
      'Mild rash with no other symptoms',
      'Hives responding to Benadryl',
      'Known trigger (new soap, plant)',
      'Child acting well otherwise',
    ],
    needsEvaluation: [
      'Rash with fever',
      'Rash spreading quickly',
      'New rash after starting medication',
      'Painful rash',
      'Not responding to home treatment',
    ],
    emergent: [
      'Rash with difficulty breathing → 911',
      'Purple spots that don\'t blanch with pressure',
      'Rash with face/throat swelling → 911',
      'Widespread blistering with skin peeling',
      'Rapidly spreading red, hot, painful skin',
    ],
  },

  quickHomeCare: [
    'Benadryl for hives/itching',
    'Hydrocortisone cream for mild rashes',
    'Cool compress for itching',
    'Oatmeal bath for widespread itch',
    'Avoid scratching',
  ],

  whenToWorry: [
    'Purple spots (press on them - don\'t blanch = ER now)',
    'Breathing difficulty with rash → 911',
    'Face swelling → 911',
    'Widespread blisters',
    'Rash + high fever + looks sick',
  ],

  faqAnswers: [
    { question: 'How do I test if it\'s serious?', answer: 'Press on it. If the redness goes away briefly (blanches), it\'s less concerning. Purple spots that don\'t blanch need ER now.' },
    { question: 'Should I put anything on it?', answer: 'Mild rashes: hydrocortisone. Hives: antihistamine. Unknown rashes: show doctor before treating.' },
    { question: 'Is it contagious?', answer: 'Depends on cause. Viral rashes often contagious. Allergic, eczema, contact dermatitis are not.' },
  ],

  fullScenarioId: 'rash-triage',
};

const SORE_THROAT_QUICK_CARD = {
  id: 'sore-throat-quick',
  conditionName: 'Sore Throat',
  aliases: ['Throat pain', 'Strep throat', 'Pharyngitis'],
  oneLiner: 'Pain or irritation in the throat',
  applicableAges: ['toddler', 'child', 'adolescent', 'adult'],
  category: 'respiratory',

  keySymptoms: ['Throat pain', 'Pain with swallowing', 'May have fever', 'May have swollen glands'],
  typicalAppearance: 'May have red throat, swollen tonsils with or without white spots',

  urgencyIndicators: {
    homeOkay: [
      'Sore throat with cold symptoms (runny nose, cough)',
      'Mild pain, still eating and drinking',
      'No fever or low-grade',
      'Can swallow normally',
    ],
    needsEvaluation: [
      'Sudden severe sore throat WITHOUT cold symptoms (may be strep)',
      'High fever with sore throat',
      'Swollen lymph nodes in neck',
      'Rash with sore throat (scarlet fever)',
      'Lasting more than a week',
    ],
    emergent: [
      'Can\'t swallow or drooling',
      'Difficulty breathing',
      'Muffled voice',
      'Can\'t open mouth fully',
      'Severe neck swelling',
    ],
  },

  quickHomeCare: [
    'Pain relief: Tylenol, Motrin',
    'Throat lozenges (older kids/adults)',
    'Warm salt water gargles',
    'Cold drinks, ice chips, popsicles',
    'Honey (if over 1 year)',
    'Rest voice',
  ],

  whenToWorry: [
    'Drooling/can\'t swallow → ER',
    'Trouble breathing → ER',
    'Muffled "hot potato" voice',
    'Can\'t open mouth',
    'Severe swelling one side',
  ],

  faqAnswers: [
    { question: 'How do I know if it\'s strep?', answer: 'Strep = sudden severe throat + fever + NO cough/cold. Viral = cold symptoms + milder throat. Only a test can tell for sure.' },
    { question: 'Do I need antibiotics?', answer: 'Only for strep (bacterial). Most sore throats are viral and don\'t need antibiotics.' },
    { question: 'Why finish all antibiotics?', answer: 'Stopping early can let bacteria survive. Untreated strep can cause rheumatic fever or kidney problems.' },
  ],

  fullScenarioId: 'strep-throat',
};

const DIARRHEA_QUICK_CARD = {
  id: 'diarrhea-quick',
  conditionName: 'Diarrhea',
  aliases: ['Loose stools', 'Stomach bug', 'Gastroenteritis'],
  oneLiner: 'Loose, watery stools more frequent than usual',
  applicableAges: ['infant', 'toddler', 'child', 'adolescent', 'adult'],
  category: 'gastrointestinal',

  keySymptoms: ['Loose/watery stools', 'More frequent pooping', 'May have stomach cramps', 'May have nausea'],
  typicalAppearance: 'May look pale or tired if dehydrated',

  urgencyIndicators: {
    homeOkay: [
      'Mild diarrhea, no blood',
      'Still drinking and urinating',
      'No fever or low-grade',
      'Not severe cramping',
    ],
    needsEvaluation: [
      'Diarrhea lasting more than 3 days',
      'Signs of dehydration',
      'High fever with diarrhea',
      'Recent travel and diarrhea',
      'Blood in stool',
    ],
    emergent: [
      'Bloody diarrhea with fever',
      'Severe dehydration signs',
      'Severe abdominal pain',
      'Can\'t keep any fluids down',
      'Black tarry stools',
    ],
  },

  quickHomeCare: [
    'Oral rehydration solution (Pedialyte) or water',
    'BRAT diet when ready to eat',
    'Avoid dairy initially',
    'Avoid sugary drinks (can worsen)',
    'Probiotics may help',
    'Zinc in children (ask doctor)',
  ],

  whenToWorry: [
    'Blood in stool',
    'Signs of dehydration',
    'Severe pain',
    'High fever',
    'Lasting more than 3 days',
  ],

  faqAnswers: [
    { question: 'Should I stop all food?', answer: 'No. If they can eat, let them. Bland foods are fine. Hydration is most important.' },
    { question: 'Is Pedialyte better than water?', answer: 'For significant diarrhea, yes. It replaces electrolytes lost in stool. For mild cases, water is fine.' },
    { question: 'Should I use anti-diarrheal medicine?', answer: 'Not usually in children. In adults, can use for mild cases but not if fever or blood. Body is trying to expel something.' },
  ],

  fullScenarioId: 'gi-illness-triage',
};

const STUFFY_NOSE_QUICK_CARD = {
  id: 'stuffy-nose-quick',
  conditionName: 'Stuffy/Runny Nose',
  aliases: ['Nasal congestion', 'Cold', 'Runny nose'],
  oneLiner: 'Blocked or draining nasal passages',
  applicableAges: ['infant', 'toddler', 'child', 'adolescent', 'adult'],
  category: 'respiratory',

  keySymptoms: ['Blocked nose', 'Runny nose', 'Sneezing', 'Post-nasal drip'],
  typicalAppearance: 'Mouth breathing, sniffling, may have watery eyes',

  urgencyIndicators: {
    homeOkay: [
      'Typical cold symptoms',
      'Breathing okay (just sounds stuffed)',
      'No high fever',
      'Eating/drinking okay',
    ],
    needsEvaluation: [
      'Lasting more than 10-14 days',
      'One-sided drainage (especially foul-smelling)',
      'Facial pain with fever',
      'Green drainage for >10 days',
    ],
    emergent: [
      'Trouble breathing not just from stuffiness',
      'Infant having difficulty nursing due to congestion',
      'Swelling around eyes with fever',
    ],
  },

  quickHomeCare: [
    'Saline spray/drops',
    'Humidifier',
    'Suction for babies (bulb or NoseFrida)',
    'Elevate head',
    'Fluids',
    'Honey for drainage-related cough (if over 1)',
  ],

  whenToWorry: [
    'Trouble breathing (not just stuffiness)',
    'Swelling around eyes',
    'Lasting >10-14 days',
    'Severe face/head pain',
  ],

  faqAnswers: [
    { question: 'Green mucus means infection, right?', answer: 'No. Mucus changes color as a cold progresses - this is normal. Color alone doesn\'t mean bacterial infection.' },
    { question: 'Can babies have decongestants?', answer: 'No. Use saline and suction only for babies. Decongestants are not safe or effective in young children.' },
    { question: 'When is it a sinus infection?', answer: 'If symptoms last >10 days without improving, or if there\'s severe face pain with fever, it may be bacterial sinusitis.' },
  ],

  fullScenarioId: 'common-cold',
};

const CONSTIPATION_QUICK_CARD = {
  id: 'constipation-quick',
  conditionName: 'Constipation',
  aliases: ['Can\'t poop', 'Hard stools', 'Infrequent bowel movements'],
  oneLiner: 'Infrequent or difficult passage of hard stools',
  applicableAges: ['infant', 'toddler', 'child', 'adolescent', 'adult'],
  category: 'gastrointestinal',

  keySymptoms: ['Infrequent pooping', 'Hard, pellet-like stools', 'Straining', 'Stomach pain', 'Withholding behavior'],
  typicalAppearance: 'May have distended belly, seem uncomfortable',

  urgencyIndicators: {
    homeOkay: [
      'Mild constipation responding to diet changes',
      'Still passing some stool',
      'No vomiting',
      'Belly soft',
    ],
    needsEvaluation: [
      'Constipation lasting more than a week',
      'Blood in stool (may be from straining)',
      'Severe pain',
      'Newborn who hasn\'t passed stool',
      'Constant soiling (may be impaction)',
    ],
    emergent: [
      'Vomiting with constipation and distended belly',
      'No stool AND no gas',
      'Severe abdominal pain',
      'Blood in stool in infant',
    ],
  },

  quickHomeCare: [
    'Increase fiber (fruits, veggies, whole grains)',
    'Increase water intake',
    'Reduce constipating foods (dairy, bananas)',
    'Prune juice or pear juice',
    'Exercise and movement',
    'Regular bathroom time after meals',
    'Miralax if approved by doctor',
  ],

  whenToWorry: [
    'Vomiting + can\'t poop',
    'Severely distended belly',
    'No stool for newborn in first days',
    'Blood in stool',
    'Constant soiling',
  ],

  faqAnswers: [
    { question: 'How often should kids poop?', answer: 'Varies. Some kids go 3x/day, some every 3 days. Concern is hard/painful stools or major change from their normal.' },
    { question: 'Is Miralax safe for kids?', answer: 'Yes, when used as directed. It\'s not absorbed and just draws water into stool. Ask doctor for dosing.' },
    { question: 'Why is my potty-trained kid having accidents?', answer: 'Stool accidents (encopresis) often mean severe constipation with impaction. Liquid stool leaks around it. Needs treatment.' },
  ],

  fullScenarioId: 'abdominal-pain-triage',
};

const HEADACHE_QUICK_CARD = {
  id: 'headache-quick',
  conditionName: 'Headache',
  aliases: ['Head pain', 'Migraine', 'Headache'],
  oneLiner: 'Pain anywhere in the head',
  applicableAges: ['child', 'adolescent', 'adult'],
  category: 'pain',

  keySymptoms: ['Head pain', 'May have nausea', 'May have light sensitivity', 'May have aura'],
  typicalAppearance: 'May look pale, want to lie down in dark room',

  urgencyIndicators: {
    homeOkay: [
      'Mild headache with cold or tired',
      'Known migraine pattern responding to usual treatment',
      'Tension headache pattern',
      'Improves with rest and pain medicine',
    ],
    needsEvaluation: [
      'New frequent headaches',
      'Headache waking from sleep',
      'Headache with fever and no clear cause',
      'Changing pattern of headaches',
      'Headache with vision changes (not typical migraine)',
    ],
    emergent: [
      '"Worst headache of my life" → ER/911',
      'Sudden severe headache → ER',
      'Headache with stiff neck + fever → ER',
      'Headache with confusion/weakness → 911',
      'After head injury → ER',
    ],
  },

  quickHomeCare: [
    'Rest in dark, quiet room',
    'Acetaminophen or ibuprofen',
    'Cold or warm compress',
    'Hydration',
    'Avoid screens',
    'Migraine: take meds early, before it gets severe',
  ],

  whenToWorry: [
    '"Worst headache ever" → ER NOW',
    'Sudden severe onset',
    'Stiff neck with fever',
    'Weakness or numbness',
    'Confusion or slurred speech',
    'After head injury',
    'Vision changes',
  ],

  faqAnswers: [
    { question: 'How do I know if it\'s a migraine?', answer: 'Migraines: often one-sided, throbbing, with nausea, light/sound sensitivity, last hours. May have warning "aura."' },
    { question: 'When are headaches concerning in kids?', answer: 'Waking them from sleep, getting worse over time, with vomiting (especially morning), with behavior changes, or "worst ever."' },
    { question: 'Should I worry about brain tumor?', answer: 'Rarely the cause. Red flags: worsening pattern, morning vomiting, personality changes, balance problems, waking from sleep.' },
  ],

  fullScenarioId: 'head-injury-triage',
};

// =============================================================================
// DATABASE EXPORTS
// =============================================================================

export const CONDITION_QUICK_CARDS = {
  'fever-quick': FEVER_QUICK_CARD,
  'vomiting-quick': VOMITING_QUICK_CARD,
  'cough-quick': COUGH_QUICK_CARD,
  'earache-quick': EARACHE_QUICK_CARD,
  'rash-quick': RASH_QUICK_CARD,
  'sore-throat-quick': SORE_THROAT_QUICK_CARD,
  'diarrhea-quick': DIARRHEA_QUICK_CARD,
  'stuffy-nose-quick': STUFFY_NOSE_QUICK_CARD,
  'constipation-quick': CONSTIPATION_QUICK_CARD,
  'headache-quick': HEADACHE_QUICK_CARD,
};

export function getQuickCard(id: string) {
  return CONDITION_QUICK_CARDS[id as keyof typeof CONDITION_QUICK_CARDS] || null;
}

export function getAllQuickCards() {
  return Object.values(CONDITION_QUICK_CARDS);
}

export function searchQuickCards(keyword: string) {
  const lowerKeyword = keyword.toLowerCase();
  return Object.values(CONDITION_QUICK_CARDS).filter(card =>
    card.aliases.some((a: string) => a.toLowerCase().includes(lowerKeyword)) ||
    card.conditionName.toLowerCase().includes(lowerKeyword)
  );
}
