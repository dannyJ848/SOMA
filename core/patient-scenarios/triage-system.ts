/**
 * Triage Decision System
 *
 * A comprehensive system for helping patients and caregivers determine
 * the appropriate level of care for common symptoms and situations.
 *
 * This is NOT a replacement for clinical judgment - it's educational
 * guidance to help people make informed decisions about when to seek
 * care and at what level.
 *
 * The system emphasizes:
 * - Safety first: When in doubt, seek care
 * - Red flags that always require immediate attention
 * - Factors that affect triage decisions
 * - Clear action steps for each recommendation
 */

// =============================================================================
// TRIAGE FLOW DEFINITIONS
// =============================================================================

/**
 * Fever Triage Flow
 */
const FEVER_TRIAGE = {
  id: 'fever-triage',
  symptom: 'Fever (temperature 100.4°F/38°C or higher)',
  keywords: ['fever', 'temperature', 'hot', 'febrile'],

  emergentCriteria: [
    {
      criterion: 'Newborn (under 28 days) with ANY fever',
      action: 'emergency-room',
      reasoning: 'Newborns cannot fight infection well and can deteriorate rapidly.',
      timeframe: 'Go immediately - do not wait',
    },
    {
      criterion: 'Infant 1-2 months with fever',
      action: 'primary-care',
      reasoning: 'Young infants need same-day evaluation.',
      timeframe: 'Same day - call pediatrician now',
    },
    {
      criterion: 'Fever with stiff neck, severe headache, or light sensitivity',
      action: 'emergency-room',
      reasoning: 'Signs of possible meningitis.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Fever with purple/non-blanching rash',
      action: 'call-911',
      reasoning: 'May indicate meningococcemia - rapidly fatal if untreated.',
      timeframe: 'Call 911 now',
    },
    {
      criterion: 'Fever with difficulty breathing',
      action: 'emergency-room',
      reasoning: 'May indicate pneumonia or serious respiratory infection.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Fever with child who won\'t wake up or is extremely lethargic',
      action: 'emergency-room',
      reasoning: 'Altered consciousness indicates serious illness.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Fever with seizure lasting more than 5 minutes',
      action: 'call-911',
      reasoning: 'Prolonged seizure needs immediate intervention.',
      timeframe: 'Call 911',
    },
    {
      criterion: 'Fever in immunocompromised patient (chemotherapy, HIV, transplant)',
      action: 'emergency-room',
      reasoning: 'High risk for serious infection, may need immediate antibiotics.',
      timeframe: 'Go immediately, call oncologist/specialist en route',
    },
  ],

  urgentCriteria: [
    {
      criterion: 'Fever lasting more than 3-4 days',
      action: 'primary-care',
      reasoning: 'Prolonged fever needs evaluation for cause.',
      timeframe: 'Within 24 hours',
    },
    {
      criterion: 'Fever with ear pain or sore throat',
      action: 'primary-care',
      reasoning: 'May have bacterial infection needing antibiotics.',
      timeframe: 'Within 24-48 hours',
    },
    {
      criterion: 'Fever with painful urination',
      action: 'primary-care',
      reasoning: 'Likely UTI needing treatment.',
      timeframe: 'Within 24 hours',
    },
    {
      criterion: 'Fever returning after being gone for 24+ hours',
      action: 'primary-care',
      reasoning: 'Second fever spike may indicate secondary bacterial infection.',
      timeframe: 'Within 24 hours',
    },
    {
      criterion: 'Child with fever who doesn\'t perk up with fever reducers',
      action: 'primary-care',
      reasoning: 'Most children improve when fever is treated. If not, needs evaluation.',
      timeframe: 'Same day',
    },
  ],

  homeManagementCriteria: [
    {
      criterion: 'Child over 2 months who perks up with fever reducers',
      action: 'home-self-care',
      reasoning: 'Child responding well to treatment is reassuring.',
      guidance: ['Give fever reducers for comfort', 'Push fluids', 'Rest', 'Monitor for changes'],
    },
    {
      criterion: 'Adult with low-grade fever (under 103°F) and cold symptoms',
      action: 'home-self-care',
      reasoning: 'Likely viral illness that will resolve.',
      guidance: ['Rest', 'Fluids', 'Fever reducers as needed', 'See doctor if persists >4-5 days'],
    },
    {
      criterion: 'Fever with typical cold/flu symptoms, eating/drinking well',
      action: 'home-self-care',
      reasoning: 'Most febrile illnesses are viral and self-limiting.',
      guidance: ['Symptomatic treatment', 'Avoid spreading illness', 'Watch for warning signs'],
    },
  ],
};

/**
 * Breathing Difficulty Triage Flow
 */
const BREATHING_TRIAGE = {
  id: 'breathing-triage',
  symptom: 'Difficulty Breathing / Respiratory Distress',
  keywords: ['breathing', 'breath', 'wheezing', 'gasping', 'respiratory', 'short of breath'],

  emergentCriteria: [
    {
      criterion: 'Not breathing or gasping',
      action: 'call-911',
      reasoning: 'Airway emergency.',
      timeframe: 'Call 911 and begin CPR if trained',
    },
    {
      criterion: 'Blue lips, tongue, or fingernails',
      action: 'call-911',
      reasoning: 'Indicates severe lack of oxygen.',
      timeframe: 'Call 911 immediately',
    },
    {
      criterion: 'Choking and unable to cough, cry, or speak',
      action: 'call-911',
      reasoning: 'Complete airway obstruction. Perform Heimlich maneuver while waiting.',
      timeframe: 'Call 911, perform choking rescue',
    },
    {
      criterion: 'Severe allergic reaction with breathing difficulty',
      action: 'call-911',
      reasoning: 'Anaphylaxis can be fatal. Use epinephrine if available.',
      timeframe: 'Call 911, use EpiPen if prescribed',
    },
    {
      criterion: 'New difficulty breathing with chest pain',
      action: 'call-911',
      reasoning: 'May indicate heart attack or pulmonary embolism.',
      timeframe: 'Call 911 immediately',
    },
    {
      criterion: 'Infant with fast breathing (>60/min), grunting, or ribs showing',
      action: 'emergency-room',
      reasoning: 'Signs of respiratory distress in infant.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Child/adult unable to speak in full sentences due to breathlessness',
      action: 'emergency-room',
      reasoning: 'Severe respiratory distress.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Known asthmatic with severe attack not responding to rescue inhaler',
      action: 'emergency-room',
      reasoning: 'Status asthmaticus needs emergency treatment.',
      timeframe: 'Go immediately, use inhaler en route',
    },
  ],

  urgentCriteria: [
    {
      criterion: 'Wheezing with mild distress, responding to inhaler',
      action: 'primary-care',
      reasoning: 'Asthma exacerbation may need steroid burst.',
      timeframe: 'Same day',
    },
    {
      criterion: 'Worsening cough with some breathing difficulty, not severe',
      action: 'primary-care',
      reasoning: 'May be developing pneumonia or bronchitis.',
      timeframe: 'Same day',
    },
    {
      criterion: 'Child with croup (barking cough) not improving with cool air',
      action: 'primary-care',
      reasoning: 'May need steroid treatment.',
      timeframe: 'Same day or ER if distress worsening',
    },
    {
      criterion: 'New onset shortness of breath with exertion only',
      action: 'primary-care',
      reasoning: 'Needs evaluation for cardiac or pulmonary cause.',
      timeframe: 'Within 24-48 hours',
    },
  ],

  homeManagementCriteria: [
    {
      criterion: 'Mild cold with some congestion but breathing comfortably',
      action: 'home-self-care',
      reasoning: 'Normal cold symptoms.',
      guidance: ['Saline nasal spray/drops', 'Humidifier', 'Elevate head', 'Suction infant noses'],
    },
    {
      criterion: 'Known asthma with mild symptoms responding well to rescue inhaler',
      action: 'home-self-care',
      reasoning: 'Controlled symptoms can be managed at home.',
      guidance: ['Use rescue inhaler as prescribed', 'Avoid triggers', 'Start/increase controller if pattern worsens', 'Have action plan'],
    },
  ],
};

/**
 * Abdominal Pain Triage Flow
 */
const ABDOMINAL_PAIN_TRIAGE = {
  id: 'abdominal-pain-triage',
  symptom: 'Abdominal Pain / Stomach Pain',
  keywords: ['stomach', 'belly', 'abdominal', 'tummy ache', 'cramps'],

  emergentCriteria: [
    {
      criterion: 'Severe abdominal pain with rigid/board-like abdomen',
      action: 'emergency-room',
      reasoning: 'May indicate peritonitis or perforation.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Abdominal pain with bloody vomit or bloody/black stool',
      action: 'emergency-room',
      reasoning: 'Indicates GI bleeding.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Severe abdominal pain in pregnancy',
      action: 'emergency-room',
      reasoning: 'May indicate ectopic pregnancy, placental abruption, or other emergency.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Sudden severe abdominal pain with fainting or lightheadedness',
      action: 'emergency-room',
      reasoning: 'May indicate internal bleeding.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Right lower abdominal pain with fever (classic appendicitis location)',
      action: 'emergency-room',
      reasoning: 'May be appendicitis which can rupture.',
      timeframe: 'Go now - better to check and be wrong',
    },
    {
      criterion: 'Infant with inconsolable crying, drawing legs up, bloody stool',
      action: 'emergency-room',
      reasoning: 'May be intussusception (bowel telescoping).',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Newborn with bilious (green) vomiting',
      action: 'emergency-room',
      reasoning: 'May indicate intestinal obstruction.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Severe pain radiating to back with vomiting (may be pancreatitis)',
      action: 'emergency-room',
      reasoning: 'Pancreatitis needs emergency care.',
      timeframe: 'Go now',
    },
  ],

  urgentCriteria: [
    {
      criterion: 'Persistent abdominal pain with fever',
      action: 'primary-care',
      reasoning: 'May be infection needing treatment.',
      timeframe: 'Same day',
    },
    {
      criterion: 'Abdominal pain with painful urination',
      action: 'primary-care',
      reasoning: 'Likely UTI or kidney infection.',
      timeframe: 'Same day',
    },
    {
      criterion: 'Persistent vomiting unable to keep fluids down',
      action: 'primary-care',
      reasoning: 'Risk of dehydration, may need IV fluids.',
      timeframe: 'Same day',
    },
    {
      criterion: 'Abdominal pain lasting more than 24-48 hours without improvement',
      action: 'primary-care',
      reasoning: 'Needs evaluation if not resolving.',
      timeframe: 'Within 24-48 hours',
    },
    {
      criterion: 'Constipation for several days with pain',
      action: 'primary-care',
      reasoning: 'May need treatment for impaction.',
      timeframe: 'Within 24-48 hours (sooner if severe)',
    },
  ],

  homeManagementCriteria: [
    {
      criterion: 'Mild stomach ache with recent dietary indiscretion',
      action: 'home-self-care',
      reasoning: 'Likely food-related and will pass.',
      guidance: ['Clear liquids', 'BRAT diet if tolerated', 'Rest', 'Avoid irritating foods'],
    },
    {
      criterion: 'Child with mild tummy ache who is eating, drinking, playing normally',
      action: 'home-self-care',
      reasoning: 'Benign cause likely.',
      guidance: ['Monitor for changes', 'Rest', 'Fluids', 'Watch for red flags'],
    },
    {
      criterion: 'Mild cramping with viral gastroenteritis (stomach flu) without red flags',
      action: 'home-self-care',
      reasoning: 'Viral and will resolve.',
      guidance: ['Small sips of fluids frequently', 'BRAT diet', 'Oral rehydration solution', 'Watch for dehydration'],
    },
    {
      criterion: 'Menstrual cramps (if normal pattern for individual)',
      action: 'home-self-care',
      reasoning: 'Normal dysmenorrhea.',
      guidance: ['NSAIDs', 'Heat', 'Rest', 'See doctor if pattern changes or severe'],
    },
  ],
};

/**
 * Head Injury Triage Flow
 */
const HEAD_INJURY_TRIAGE = {
  id: 'head-injury-triage',
  symptom: 'Head Injury / Head Trauma',
  keywords: ['head', 'concussion', 'hit head', 'fall', 'bump head'],

  emergentCriteria: [
    {
      criterion: 'Loss of consciousness (even briefly)',
      action: 'emergency-room',
      reasoning: 'Any LOC after head injury needs evaluation.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Seizure after head injury',
      action: 'call-911',
      reasoning: 'May indicate brain injury.',
      timeframe: 'Call 911',
    },
    {
      criterion: 'Clear fluid from nose or ears after head injury',
      action: 'emergency-room',
      reasoning: 'May be CSF leak indicating skull fracture.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Unequal pupils after head injury',
      action: 'call-911',
      reasoning: 'Sign of brain injury with increased pressure.',
      timeframe: 'Call 911',
    },
    {
      criterion: 'Repeated vomiting (more than once) after head injury',
      action: 'emergency-room',
      reasoning: 'Sign of possible brain injury.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Increasingly confused or drowsy after head injury',
      action: 'emergency-room',
      reasoning: 'May indicate bleeding in brain.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Weakness or numbness on one side after head injury',
      action: 'call-911',
      reasoning: 'Indicates brain injury.',
      timeframe: 'Call 911',
    },
    {
      criterion: 'Head injury with blood thinner use (warfarin, etc.)',
      action: 'emergency-room',
      reasoning: 'Higher risk of bleeding with even minor head trauma.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Infant under 1 year with significant head impact',
      action: 'emergency-room',
      reasoning: 'Infants difficult to assess and have thinner skulls.',
      timeframe: 'Go now',
    },
  ],

  urgentCriteria: [
    {
      criterion: 'Persistent headache after head injury',
      action: 'primary-care',
      reasoning: 'May need evaluation for concussion.',
      timeframe: 'Within 24 hours',
    },
    {
      criterion: 'Single episode of vomiting after head injury, now fine',
      action: 'home-monitor',
      reasoning: 'May be okay but needs close watching.',
      timeframe: 'Watch for 24-48 hours, ER if any red flag',
    },
    {
      criterion: 'Dizziness or balance problems after head injury',
      action: 'primary-care',
      reasoning: 'Signs of possible concussion.',
      timeframe: 'Within 24 hours',
    },
  ],

  homeManagementCriteria: [
    {
      criterion: 'Minor bump with no LOC, no vomiting, acting normally',
      action: 'home-self-care',
      reasoning: 'Low-risk head injury.',
      guidance: ['Ice for bump', 'Watch closely for 24-48 hours', 'Wake every few hours first night to check arousability', 'ER if any red flag develops'],
    },
    {
      criterion: 'Child who cried immediately, is now playing normally, no red flags',
      action: 'home-self-care',
      reasoning: 'Reassuring signs after minor injury.',
      guidance: ['Monitor closely', 'Ice for comfort', 'Normal diet', 'Watch for warning signs'],
    },
  ],
};

/**
 * Rash Triage Flow
 */
const RASH_TRIAGE = {
  id: 'rash-triage',
  symptom: 'Rash / Skin Changes',
  keywords: ['rash', 'hives', 'spots', 'bumps', 'skin'],

  emergentCriteria: [
    {
      criterion: 'Rash with difficulty breathing or swelling of face/throat',
      action: 'call-911',
      reasoning: 'Anaphylactic reaction.',
      timeframe: 'Call 911, use EpiPen if available',
    },
    {
      criterion: 'Purple/red spots that don\'t blanch (fade with pressure) with fever',
      action: 'emergency-room',
      reasoning: 'May indicate meningococcemia or other serious infection.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Rapidly spreading red skin with pain and fever (cellulitis)',
      action: 'emergency-room',
      reasoning: 'Spreading skin infection needs IV antibiotics.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Rash with blisters covering large area with skin sloughing',
      action: 'emergency-room',
      reasoning: 'May be Stevens-Johnson syndrome or other serious reaction.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Severe hives (whole body) with dizziness or stomach cramps',
      action: 'emergency-room',
      reasoning: 'Systemic allergic reaction.',
      timeframe: 'Go now',
    },
  ],

  urgentCriteria: [
    {
      criterion: 'Rash with fever and no clear cause',
      action: 'primary-care',
      reasoning: 'Needs evaluation to identify cause.',
      timeframe: 'Same day',
    },
    {
      criterion: 'Rapidly spreading rash',
      action: 'primary-care',
      reasoning: 'Needs evaluation even without other symptoms.',
      timeframe: 'Same day',
    },
    {
      criterion: 'Painful rash, especially if in a band/stripe pattern',
      action: 'primary-care',
      reasoning: 'May be shingles - treatment most effective if started early.',
      timeframe: 'Same day',
    },
    {
      criterion: 'New rash after starting a medication',
      action: 'primary-care',
      reasoning: 'May be drug reaction - needs evaluation.',
      timeframe: 'Same day (ER if spreading rapidly or systemic symptoms)',
    },
    {
      criterion: 'Circular/ring-shaped rash after tick exposure',
      action: 'primary-care',
      reasoning: 'May indicate Lyme disease.',
      timeframe: 'Within 24-48 hours',
    },
  ],

  homeManagementCriteria: [
    {
      criterion: 'Mild hives responding to antihistamine',
      action: 'home-self-care',
      reasoning: 'Many hives resolve with antihistamine.',
      guidance: ['Benadryl or similar antihistamine', 'Avoid known triggers', 'Cool compresses', 'ER if worsens or breathing affected'],
    },
    {
      criterion: 'Mild contact dermatitis (poison ivy, etc.)',
      action: 'home-self-care',
      reasoning: 'Usually manageable at home.',
      guidance: ['Wash area', 'Hydrocortisone cream', 'Calamine lotion', 'Oral antihistamine for itch', 'See doctor if severe or near eyes'],
    },
    {
      criterion: 'Viral rash (like roseola after fever breaks) in well-appearing child',
      action: 'home-self-care',
      reasoning: 'Common childhood illness.',
      guidance: ['Comfort care', 'Usually no treatment needed', 'Watch for other symptoms'],
    },
    {
      criterion: 'Mild eczema flare',
      action: 'home-self-care',
      reasoning: 'Can manage with routine eczema care.',
      guidance: ['Moisturize', 'Topical steroids if prescribed', 'Avoid triggers', 'See doctor if not improving or infected'],
    },
  ],
};

/**
 * Vomiting/Diarrhea Triage Flow
 */
const GI_ILLNESS_TRIAGE = {
  id: 'gi-illness-triage',
  symptom: 'Vomiting and/or Diarrhea',
  keywords: ['vomiting', 'throwing up', 'diarrhea', 'stomach flu', 'gastroenteritis'],

  emergentCriteria: [
    {
      criterion: 'Vomiting blood or material that looks like coffee grounds',
      action: 'emergency-room',
      reasoning: 'Indicates GI bleeding.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Bloody diarrhea with fever and abdominal pain',
      action: 'emergency-room',
      reasoning: 'May indicate serious bacterial infection or other problem.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Signs of severe dehydration: no tears, very dry mouth, not urinating, sunken eyes, lethargic',
      action: 'emergency-room',
      reasoning: 'Needs IV fluids.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Newborn with vomiting (especially green/bilious)',
      action: 'emergency-room',
      reasoning: 'May indicate obstruction.',
      timeframe: 'Go immediately',
    },
    {
      criterion: 'Infant with projectile vomiting',
      action: 'emergency-room',
      reasoning: 'May indicate pyloric stenosis.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Vomiting after head injury',
      action: 'emergency-room',
      reasoning: 'May indicate brain injury.',
      timeframe: 'Go now',
    },
    {
      criterion: 'Vomiting with severe abdominal pain',
      action: 'emergency-room',
      reasoning: 'May indicate surgical emergency.',
      timeframe: 'Go now',
    },
  ],

  urgentCriteria: [
    {
      criterion: 'Unable to keep fluids down for more than 8 hours (child) or 12 hours (adult)',
      action: 'primary-care',
      reasoning: 'Risk of dehydration.',
      timeframe: 'Same day',
    },
    {
      criterion: 'Diarrhea lasting more than 3 days',
      action: 'primary-care',
      reasoning: 'May need stool testing or treatment.',
      timeframe: 'Within 24 hours',
    },
    {
      criterion: 'Vomiting/diarrhea with fever lasting more than 2-3 days',
      action: 'primary-care',
      reasoning: 'May need evaluation.',
      timeframe: 'Within 24 hours',
    },
    {
      criterion: 'Moderate dehydration: decreased urine, mild lethargy but drinking some',
      action: 'primary-care',
      reasoning: 'May need fluids or closer monitoring.',
      timeframe: 'Same day',
    },
    {
      criterion: 'Recent travel with diarrhea',
      action: 'primary-care',
      reasoning: 'May need stool testing for parasites/bacteria.',
      timeframe: 'Within 24-48 hours',
    },
  ],

  homeManagementCriteria: [
    {
      criterion: 'Viral gastroenteritis: vomiting/diarrhea but keeping sips down, urinating',
      action: 'home-self-care',
      reasoning: 'Most viral gastroenteritis resolves in 24-72 hours.',
      guidance: ['Small frequent sips of clear fluids', 'Oral rehydration solution (Pedialyte) for kids', 'BRAT diet when ready', 'Rest', 'Watch for dehydration signs'],
    },
    {
      criterion: 'Single episode of vomiting, now fine',
      action: 'home-self-care',
      reasoning: 'May be isolated event.',
      guidance: ['Wait 30-60 min then try clear liquids', 'Progress diet slowly', 'Watch for recurrence'],
    },
    {
      criterion: 'Mild diarrhea without blood, staying hydrated',
      action: 'home-self-care',
      reasoning: 'Likely viral or dietary.',
      guidance: ['Clear fluids', 'Avoid dairy initially', 'BRAT diet', 'Probiotics may help'],
    },
  ],
};

// =============================================================================
// MASTER TRIAGE EVALUATION FUNCTION
// =============================================================================

interface PatientFactors {
  symptoms?: string[];
  flags?: string[];
}

interface TriageResult {
  symptom: string;
  recommendedLevel: string;
  urgency: string;
  reasoning: string;
  actions: string[];
  warnings: string[];
  matchedCriteria: unknown[];
}

/**
 * Evaluate triage for a given symptom and criteria
 * @param flowId - The triage flow ID
 * @param patientFactors - Patient-specific factors
 * @returns Triage recommendation
 */
export function evaluateTriage(flowId: string, patientFactors: PatientFactors): TriageResult | null {
  const flow = TRIAGE_FLOWS[flowId as keyof typeof TRIAGE_FLOWS];
  if (!flow) return null;

  const result: TriageResult = {
    symptom: flow.symptom,
    recommendedLevel: 'home-self-care',
    urgency: 'routine',
    reasoning: '',
    actions: [],
    warnings: [],
    matchedCriteria: [],
  };

  // Check emergent criteria first
  for (const criterion of flow.emergentCriteria) {
    if (patientFactors.symptoms?.includes(criterion.criterion) ||
        patientFactors.flags?.includes(criterion.criterion)) {
      result.recommendedLevel = criterion.action;
      result.urgency = 'emergent';
      result.reasoning = criterion.reasoning;
      result.actions = [criterion.timeframe];
      result.matchedCriteria.push(criterion);
      return result;
    }
  }

  // Check urgent criteria
  for (const criterion of flow.urgentCriteria) {
    if (patientFactors.symptoms?.includes(criterion.criterion) ||
        patientFactors.flags?.includes(criterion.criterion)) {
      result.recommendedLevel = criterion.action;
      result.urgency = 'urgent';
      result.reasoning = criterion.reasoning;
      result.actions = [criterion.timeframe];
      result.matchedCriteria.push(criterion);
    }
  }

  // If no urgent criteria matched, check home management
  if (result.matchedCriteria.length === 0) {
    for (const criterion of flow.homeManagementCriteria) {
      if (patientFactors.symptoms?.includes(criterion.criterion) ||
          patientFactors.flags?.includes(criterion.criterion)) {
        result.recommendedLevel = criterion.action;
        result.urgency = 'routine';
        result.reasoning = criterion.reasoning;
        result.actions = criterion.guidance;
        result.matchedCriteria.push(criterion);
      }
    }
  }

  // Default warning
  result.warnings.push('This is educational guidance only. When in doubt, seek care. Trust your instincts.');

  return result;
}

// =============================================================================
// GENERAL RED FLAGS (ALWAYS SEEK IMMEDIATE CARE)
// =============================================================================

export const UNIVERSAL_RED_FLAGS = {
  allAges: [
    {
      flag: 'Difficulty breathing or shortness of breath',
      action: 'call-911',
      reasoning: 'Airway emergencies can deteriorate rapidly',
    },
    {
      flag: 'Chest pain with shortness of breath',
      action: 'call-911',
      reasoning: 'May indicate heart attack or pulmonary embolism',
    },
    {
      flag: 'Sudden severe headache ("worst headache of life")',
      action: 'call-911',
      reasoning: 'May indicate brain bleed',
    },
    {
      flag: 'New weakness or numbness on one side, facial droop, slurred speech',
      action: 'call-911',
      reasoning: 'Stroke symptoms - time critical (FAST: Face, Arms, Speech, Time)',
    },
    {
      flag: 'Uncontrolled bleeding',
      action: 'call-911',
      reasoning: 'Life-threatening blood loss',
    },
    {
      flag: 'Severe allergic reaction with breathing difficulty',
      action: 'call-911',
      reasoning: 'Anaphylaxis is life-threatening',
    },
    {
      flag: 'Loss of consciousness',
      action: 'call-911',
      reasoning: 'Needs immediate evaluation',
    },
    {
      flag: 'Seizure in someone who doesn\'t have epilepsy, or lasting >5 min',
      action: 'call-911',
      reasoning: 'New seizure or prolonged seizure needs emergency care',
    },
  ],

  infants: [
    {
      flag: 'Any fever in baby under 2 months',
      action: 'emergency-room',
      reasoning: 'Young infants cannot fight infection and need evaluation',
    },
    {
      flag: 'Not feeding or very poor feeding',
      action: 'emergency-room',
      reasoning: 'Feeding is best indicator of infant health',
    },
    {
      flag: 'Very floppy or limp',
      action: 'emergency-room',
      reasoning: 'Indicates serious illness',
    },
    {
      flag: 'Blue color (not just hands/feet)',
      action: 'call-911',
      reasoning: 'Indicates lack of oxygen',
    },
    {
      flag: 'Bulging fontanelle (soft spot)',
      action: 'emergency-room',
      reasoning: 'May indicate meningitis or increased brain pressure',
    },
    {
      flag: 'Inconsolable crying for hours',
      action: 'emergency-room',
      reasoning: 'Needs evaluation for cause',
    },
  ],

  elderly: [
    {
      flag: 'New confusion or altered mental status',
      action: 'emergency-room',
      reasoning: 'May indicate infection, stroke, or other emergency',
    },
    {
      flag: 'Fall with head injury (especially if on blood thinners)',
      action: 'emergency-room',
      reasoning: 'High risk of brain bleed',
    },
    {
      flag: 'Sudden inability to walk or stand',
      action: 'emergency-room',
      reasoning: 'May indicate stroke or other neurological emergency',
    },
  ],

  pregnancy: [
    {
      flag: 'Vaginal bleeding',
      action: 'emergency-room',
      reasoning: 'Needs evaluation for cause',
    },
    {
      flag: 'Severe abdominal pain',
      action: 'emergency-room',
      reasoning: 'May indicate ectopic pregnancy, abruption, or other emergency',
    },
    {
      flag: 'Leaking fluid (may be water breaking)',
      action: 'primary-care',
      reasoning: 'Call OB or go to L&D',
    },
    {
      flag: 'Decreased fetal movement in 3rd trimester',
      action: 'primary-care',
      reasoning: 'Needs evaluation - call OB or go to L&D',
    },
    {
      flag: 'Severe headache with vision changes',
      action: 'emergency-room',
      reasoning: 'May indicate preeclampsia',
    },
  ],
};

// =============================================================================
// DATABASE EXPORTS
// =============================================================================

export const TRIAGE_FLOWS = {
  'fever-triage': FEVER_TRIAGE,
  'breathing-triage': BREATHING_TRIAGE,
  'abdominal-pain-triage': ABDOMINAL_PAIN_TRIAGE,
  'head-injury-triage': HEAD_INJURY_TRIAGE,
  'rash-triage': RASH_TRIAGE,
  'gi-illness-triage': GI_ILLNESS_TRIAGE,
};

export function getTriageFlow(id: string) {
  return TRIAGE_FLOWS[id as keyof typeof TRIAGE_FLOWS] || null;
}

export function getAllTriageFlows() {
  return Object.values(TRIAGE_FLOWS);
}

export function searchTriageFlows(keyword: string) {
  const lowerKeyword = keyword.toLowerCase();
  return Object.values(TRIAGE_FLOWS).filter(flow =>
    flow.keywords.some((k: string) => k.toLowerCase().includes(lowerKeyword)) ||
    flow.symptom.toLowerCase().includes(lowerKeyword)
  );
}
