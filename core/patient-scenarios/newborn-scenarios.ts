/**
 * Newborn Care Scenarios Database
 *
 * Comprehensive guidance for the first 28 days of life - the most
 * anxiety-inducing and medically critical period for new parents.
 *
 * These scenarios are designed to:
 * - Reassure parents about normal newborn variations
 * - Provide clear red flags that require immediate attention
 * - Guide appropriate care-seeking behavior
 * - Reduce unnecessary ER visits while ensuring true emergencies are recognized
 */

// =============================================================================
// NORMAL NEWBORN CARE SCENARIO
// =============================================================================

const NORMAL_NEWBORN_CARE = {
  id: 'newborn-normal-care',
  title: 'Caring for Your Healthy Newborn',
  category: 'newborn-care',
  applicableLifeStages: ['newborn'],
  keywords: ['newborn', 'baby', 'first days', 'new baby', 'infant care', 'normal newborn'],

  situationDescription: {
    simple: 'Your new baby is home and you want to know what\'s normal and when to worry.',
    detailed: 'You\'ve brought your newborn home from the hospital. Everything feels new and potentially alarming. You\'re not sure what\'s normal baby behavior versus what might be a problem. You want to take good care of your baby while knowing when medical attention is truly needed.',
    comprehensive: 'The first weeks with a newborn are a time of rapid adjustment for both baby and parents. Newborns have many behaviors and physical characteristics that can seem concerning but are actually completely normal variations. Understanding what\'s typical for this age helps parents provide confident care while recognizing the true warning signs that need medical attention. This period is crucial for establishing feeding, bonding, and recognizing your individual baby\'s patterns.',
  },

  variations: [
    {
      id: 'first-time-parents',
      description: 'First-time parents with no previous baby experience',
      differentiatingFactors: ['No prior experience', 'Everything is new', 'High anxiety', 'Learning all basics'],
      likelyCareLevel: 'home-self-care',
      additionalConsiderations: ['Consider newborn care class', 'Pediatrician visits are your lifeline', 'Trust your instincts while learning'],
    },
    {
      id: 'experienced-parents',
      description: 'Parents with older children',
      differentiatingFactors: ['Have experience', 'Know some basics', 'May forget newborn specifics', 'Each baby different'],
      likelyCareLevel: 'home-self-care',
      additionalConsiderations: ['Each baby is unique', 'Refresh on newborn safety', 'Trust your experience'],
    },
    {
      id: 'premature-baby',
      description: 'Baby born before 37 weeks',
      differentiatingFactors: ['Adjusted age considerations', 'May have special needs', 'NICU follow-up', 'Different developmental timeline'],
      likelyCareLevel: 'home-monitor',
      additionalConsiderations: ['Follow NICU discharge instructions', 'Use adjusted age for milestones', 'Lower threshold for concern'],
    },
  ],

  assessmentQuestions: [
    {
      question: 'Is your baby feeding well?',
      whyAsking: 'Feeding is the most important indicator of newborn health. Poor feeding is often the first sign something is wrong.',
      answerOptions: [
        { answer: 'Yes, eating every 2-3 hours, seems satisfied after', implication: 'Normal feeding pattern', urgencyModifier: 'decreases' },
        { answer: 'Feeding but seems fussy or unsatisfied', implication: 'May need feeding evaluation', urgencyModifier: 'neutral' },
        { answer: 'Refusing to feed or very weak suck', implication: 'Concerning - needs evaluation', urgencyModifier: 'increases' },
        { answer: 'Has not fed in over 4 hours and won\'t wake to feed', implication: 'Urgent - seek care now', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'How many wet diapers in the last 24 hours?',
      whyAsking: 'Wet diapers show the baby is getting enough fluid. The number expected varies by day of life.',
      answerOptions: [
        { answer: 'Day 1-2: At least 1-2 wet diapers', implication: 'Normal for age', urgencyModifier: 'decreases' },
        { answer: 'Day 3-4: At least 3-4 wet diapers', implication: 'Normal for age', urgencyModifier: 'decreases' },
        { answer: 'Day 5+: At least 6 wet diapers', implication: 'Normal for age', urgencyModifier: 'decreases' },
        { answer: 'Fewer wet diapers than expected for age', implication: 'May indicate dehydration', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'What is your baby\'s activity level?',
      whyAsking: 'Alertness and muscle tone are important indicators of newborn health.',
      answerOptions: [
        { answer: 'Has alert periods, normal movement, good muscle tone', implication: 'Normal', urgencyModifier: 'decreases' },
        { answer: 'Sleepy but wakes for feeds and has some alert time', implication: 'Normal for newborn', urgencyModifier: 'decreases' },
        { answer: 'Very sleepy, hard to wake, floppy', implication: 'Concerning - needs evaluation', urgencyModifier: 'increases' },
        { answer: 'Extremely irritable, high-pitched cry, stiff', implication: 'Urgent - seek care now', urgencyModifier: 'increases' },
      ],
    },
  ],

  triageDecisionTree: [
    {
      id: 'normal-well',
      condition: 'Baby is feeding well, making wet/dirty diapers, has normal activity',
      criteria: [
        { criterion: 'Feeding every 2-4 hours', present: true, weight: 'major' },
        { criterion: 'Age-appropriate wet diapers', present: true, weight: 'major' },
        { criterion: 'Some alert periods', present: true, weight: 'major' },
        { criterion: 'Normal skin color', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'home-self-care',
      urgency: 'routine',
      reasoning: 'Baby is showing all signs of health. Continue normal newborn care.',
      timeframe: 'Routine pediatrician visits',
      actions: ['Continue feeding on demand', 'Track wet/dirty diapers', 'Enjoy your baby'],
    },
    {
      id: 'mild-concern',
      condition: 'Minor concerns but baby generally well',
      criteria: [
        { criterion: 'Feeding adequately', present: true, weight: 'major' },
        { criterion: 'Some fussiness or minor symptoms', present: true, weight: 'minor' },
        { criterion: 'No red flags present', present: true, weight: 'critical' },
      ],
      recommendedCareLevel: 'telehealth',
      urgency: 'soon',
      reasoning: 'Minor concerns can often be addressed via phone with pediatrician.',
      timeframe: 'Within 24 hours',
      actions: ['Call pediatrician office', 'Describe concerns clearly', 'Follow their guidance'],
    },
    {
      id: 'needs-evaluation',
      condition: 'Baby has symptoms requiring medical evaluation',
      criteria: [
        { criterion: 'Poor feeding', present: true, weight: 'major' },
        { criterion: 'Fewer than expected diapers', present: true, weight: 'major' },
        { criterion: 'Excessive sleepiness', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'primary-care',
      urgency: 'same-day',
      reasoning: 'These symptoms need hands-on evaluation to ensure baby is healthy.',
      timeframe: 'Same day',
      actions: ['Call pediatrician for same-day appointment', 'Bring feeding log', 'Bring dirty diaper if concerning'],
    },
  ],

  homeCareGuidance: {
    overview: 'Newborns need feeding, sleep, warmth, love, and vigilant observation. Most of what they do is normal - learning your baby\'s patterns is key.',
    stepByStepCare: [
      {
        step: 1,
        instruction: 'Feed your baby on demand, typically every 2-3 hours',
        rationale: 'Newborn stomachs are tiny (marble-sized at birth) and need frequent filling. Demand feeding establishes milk supply and ensures adequate nutrition.',
        tips: ['Watch for hunger cues: rooting, hands to mouth, fussiness', 'Don\'t wait for crying - that\'s late hunger', 'Breastfed babies may cluster feed in evenings'],
        warnings: ['Never prop a bottle - choking risk', 'Wake baby if over 4 hours without feeding in first 2 weeks'],
      },
      {
        step: 2,
        instruction: 'Track wet and dirty diapers',
        rationale: 'Output is the best indicator that input is adequate. Expected numbers increase with day of life.',
        tips: ['Day 1-2: 1-2 wet, meconium stools', 'Day 3-4: 3-4 wet, transitional stools', 'Day 5+: 6+ wet, yellow seedy stools if breastfed', 'Use a simple chart or app'],
      },
      {
        step: 3,
        instruction: 'Practice safe sleep - Alone, on Back, in Crib (ABC)',
        rationale: 'Safe sleep practices dramatically reduce SIDS risk. Every sleep, every time.',
        tips: ['Firm flat mattress', 'No blankets, pillows, bumpers, toys', 'Room-share (not bed-share) for first 6 months', 'Keep room comfortable temperature'],
        warnings: ['NEVER sleep with baby on couch or chair', 'Swings and car seats are not for unsupervised sleep'],
      },
      {
        step: 4,
        instruction: 'Keep the umbilical cord stump clean and dry',
        rationale: 'The cord stump usually falls off in 1-3 weeks. Keeping it dry prevents infection.',
        tips: ['Fold diaper below stump', 'Sponge baths until cord falls off', 'Let air dry after baths', 'Don\'t pull on it - let it fall naturally'],
        warnings: ['Red skin spreading from base, pus, or foul smell needs immediate evaluation'],
      },
      {
        step: 5,
        instruction: 'Skin-to-skin contact as much as possible',
        rationale: 'Skin-to-skin regulates baby\'s temperature, heart rate, and blood sugar. It promotes bonding and breastfeeding.',
        tips: ['Baby in diaper against your bare chest', 'Cover with blanket', 'Both parents can do this', 'Especially helpful for fussy periods'],
      },
    ],
    medicationsToConsider: [
      {
        medication: 'Vitamin D drops (if breastfeeding)',
        purpose: 'Breast milk is low in vitamin D. Supplementation prevents deficiency.',
        dosing: [{ ageRange: 'Birth onward', dose: '400 IU', frequency: 'Daily', maxDaily: '400 IU' }],
        warnings: ['Don\'t exceed recommended dose', 'Not needed if formula feeding (formula is fortified)'],
        whenNotToUse: ['If baby is exclusively formula fed'],
        interactions: [],
      },
    ],
    comfortMeasures: [
      { measure: 'Swaddling', howToApply: 'Snug wrap with arms at sides, hips loose. Use thin blanket or swaddle sack.', expectedBenefit: 'Reduces startle reflex, helps sleep', cautions: ['Stop swaddling when baby shows signs of rolling', 'Don\'t swaddle too tight at hips'] },
      { measure: 'White noise', howToApply: 'Continuous sound at conversation level, not too loud', expectedBenefit: 'Mimics womb sounds, helps sleep', cautions: ['Keep device away from baby\'s ears', 'Don\'t exceed 50 decibels'] },
      { measure: 'Gentle motion', howToApply: 'Rocking, swaying, or vibration', expectedBenefit: 'Mimics womb movement, calms fussiness', cautions: ['Support head always', 'Never shake a baby'] },
    ],
    whatToMonitor: [
      { whatToMonitor: 'Feeding', howToMonitor: 'Track times, duration if breastfeeding, amounts if bottle', concerningValues: 'Refusing feeds, very weak suck, not waking to feed', frequency: 'Every feed' },
      { whatToMonitor: 'Wet diapers', howToMonitor: 'Count and note appearance', concerningValues: 'Fewer than expected, dark concentrated urine, pink crystals after day 3', frequency: 'Every diaper change' },
      { whatToMonitor: 'Dirty diapers', howToMonitor: 'Note color and consistency', concerningValues: 'No stool in 24+ hours after day 4, blood in stool, white/pale stool', frequency: 'Every diaper change' },
      { whatToMonitor: 'Skin color', howToMonitor: 'Look in natural light', concerningValues: 'Yellow color (jaundice), blue color, very pale', frequency: 'Several times daily' },
      { whatToMonitor: 'Activity/alertness', howToMonitor: 'Note alert periods and responsiveness', concerningValues: 'Very hard to wake, extremely floppy, inconsolable', frequency: 'Throughout day' },
    ],
    expectedTimeline: [
      { timeframe: 'Day 1-2', expectedStatus: 'Very sleepy, learning to feed, meconium stools', normalVariation: 'May lose up to 7% of birth weight', redFlagsAtThisStage: ['No wet diaper in 12 hours', 'No meconium in 24 hours', 'Temperature instability'] },
      { timeframe: 'Day 3-5', expectedStatus: 'More alert periods, stool transitioning, possible jaundice peak', normalVariation: 'May be fussy as milk comes in, breast engorgement', redFlagsAtThisStage: ['Jaundice spreading below belly button', 'Weight loss over 10%', 'Still no stool transition'] },
      { timeframe: 'Day 6-14', expectedStatus: 'Regaining birth weight, establishing patterns, cord falls off', normalVariation: 'Growth spurts with increased feeding', redFlagsAtThisStage: ['Not back to birth weight by day 14', 'Feeding worsening', 'Increasing jaundice'] },
      { timeframe: 'Day 15-28', expectedStatus: 'Growing, more interactive, longer alert periods', normalVariation: 'May have fussy periods especially evenings', redFlagsAtThisStage: ['Poor weight gain', 'Fever', 'Signs of illness'] },
    ],
    signsOfImprovement: ['Gaining weight', 'Increasing wet diapers', 'More alert periods', 'Better feeding', 'Content after feeds'],
    signsOfWorsening: ['Refusing feeds', 'Decreasing wet diapers', 'Increasing jaundice', 'Lethargy', 'Fever'],
    whenToReassess: 'At each pediatrician visit (typically day 3-5, 2 weeks, 1 month)',
    commonMistakes: ['Overdressing baby (feel back of neck, not hands/feet)', 'Not waking to feed in early days', 'Comparing to other babies', 'Not asking for help when overwhelmed'],
  },

  whenToSeekCare: {
    homeManagement: {
      appropriateWhen: ['Baby feeding well', 'Adequate wet/dirty diapers', 'Normal activity level', 'No fever', 'Normal skin color'],
      notAppropriateWhen: ['Any fever (100.4°F/38°C or higher)', 'Poor feeding', 'Significant jaundice', 'Lethargy', 'Difficulty breathing'],
      maxDuration: 'Routine care until pediatrician visits; seek care immediately for red flags',
    },
    telehealth: {
      appropriateWhen: ['Minor questions about normal care', 'Feeding concerns without other symptoms', 'Questions about rashes or skin', 'Guidance on medication timing'],
      advantagesOverInPerson: ['Quick answers without leaving home', 'Avoid exposing newborn to sick waiting room', 'Available outside office hours'],
    },
    primaryCare: {
      appropriateWhen: ['Routine newborn visits (day 3-5, 2 weeks, 1 month)', 'Concerns about weight gain', 'Feeding difficulties needing evaluation', 'Jaundice assessment', 'Umbilical concerns'],
      howToSchedule: 'Schedule before leaving hospital or call pediatrician office',
      whatToBring: ['Insurance card', 'Feeding log', 'Diaper log', 'List of concerns/questions', 'Support person to help'],
    },
    urgentCare: {
      appropriateWhen: ['Generally NOT recommended for newborns - go to pediatrician or ER'],
      vsEmergencyRoom: 'Urgent care typically not equipped for newborn emergencies. When in doubt, go to ER.',
      typicalWaitTime: 'N/A - use pediatrician or ER',
    },
    emergencyRoom: {
      appropriateWhen: ['Any fever 100.4°F or higher', 'Difficulty breathing', 'Blue color', 'Unresponsive or very hard to wake', 'Projectile vomiting', 'Seizure', 'Significant bleeding', 'Severe jaundice'],
      whatToExpect: 'Newborn with fever will have full workup (blood, urine, possibly spinal tap) and likely admission. This is standard protocol.',
      howToPrepare: ['Bring diaper bag with supplies', 'Bring insurance info', 'Bring list of concerns and timeline', 'Expect to be there several hours', 'Support person highly recommended'],
    },
    call911: {
      appropriateWhen: ['Not breathing or gasping', 'Blue all over', 'Unresponsive', 'Seizure', 'Severe bleeding'],
      whatToTellDispatcher: ['Baby\'s age in days', 'What is happening', 'Baby\'s level of consciousness', 'Your exact location'],
      whileWaiting: ['Start infant CPR if baby not breathing and you are trained', 'Keep baby warm', 'Don\'t give anything by mouth', 'Unlock door for paramedics'],
    },
  },

  redFlags: [
    { sign: 'Fever 100.4°F (38°C) or higher', whyDangerous: 'In newborns, fever can indicate serious bacterial infection including meningitis. Newborns cannot localize or fight infection well.', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Bacterial infections can become life-threatening within hours in newborns' },
    { sign: 'Difficulty breathing (grunting, flaring nostrils, ribs showing)', whyDangerous: 'May indicate respiratory infection, heart problem, or other serious condition', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Respiratory failure can occur rapidly' },
    { sign: 'Blue color (especially lips, tongue)', whyDangerous: 'Indicates inadequate oxygen - may be heart or lung problem', requiredAction: 'call-911', timeframe: 'Immediately', whatHappensIfIgnored: 'Organ damage from lack of oxygen' },
    { sign: 'Very limp/floppy or extremely irritable', whyDangerous: 'May indicate infection, metabolic problem, or neurological issue', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Underlying cause may worsen rapidly' },
    { sign: 'Not feeding for 8+ hours', whyDangerous: 'Newborns need frequent nutrition. Refusing feeds often indicates illness.', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Dehydration and hypoglycemia' },
    { sign: 'Projectile vomiting (not just spit-up)', whyDangerous: 'May indicate pyloric stenosis or intestinal obstruction', requiredAction: 'emergency-room', timeframe: 'Same day', whatHappensIfIgnored: 'Dehydration and electrolyte problems' },
    { sign: 'Blood in stool or vomit', whyDangerous: 'May indicate intestinal problem or bleeding disorder', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Blood loss, underlying condition worsens' },
    { sign: 'Umbilical cord redness spreading, pus, or foul smell', whyDangerous: 'Indicates omphalitis (cord infection) which can spread rapidly', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Infection can spread to bloodstream' },
  ],

  whatToExpectAtCare: [
    {
      careLevel: 'primary-care',
      whatWillHappen: ['Weight check', 'Physical examination', 'Feeding observation', 'Jaundice check', 'Discussion of concerns'],
      testsYouMightGet: [
        { test: 'Weight measurement', purpose: 'Track growth and feeding adequacy', whatItInvolves: 'Undressed weight on infant scale', resultsTimeframe: 'Immediate' },
        { test: 'Bilirubin check', purpose: 'Assess jaundice severity', whatItInvolves: 'Skin scanner or small blood sample', resultsTimeframe: 'Minutes to hours' },
      ],
      treatmentsYouMightReceive: [
        { treatment: 'Feeding guidance', purpose: 'Optimize feeding technique', whatToExpect: 'Lactation support, formula guidance', possibleSideEffects: [] },
        { treatment: 'Phototherapy referral', purpose: 'Treat jaundice if needed', whatToExpect: 'Special lights either at home or hospital', possibleSideEffects: ['Loose stools', 'Rash', 'Need to protect eyes'] },
      ],
      questionsTheyWillAsk: ['How is feeding going?', 'How many wet/dirty diapers?', 'How is baby sleeping?', 'How are YOU doing?', 'Any concerns?'],
      whatToBring: ['Feeding log', 'Diaper log', 'Questions list', 'Car seat for safe transport'],
      estimatedDuration: '30-60 minutes',
      possibleOutcomes: [
        { outcome: 'All is well, routine follow-up', likelihood: 'common', nextSteps: ['Continue current care', 'Schedule next visit'] },
        { outcome: 'Feeding adjustments needed', likelihood: 'common', nextSteps: ['Implement recommendations', 'Return for weight check'] },
        { outcome: 'Needs further evaluation', likelihood: 'possible', nextSteps: ['Additional testing', 'Referral to specialist'] },
      ],
      questionsToAsk: ['Is my baby growing well?', 'Is the jaundice concerning?', 'Are there any concerns from the exam?', 'When should I come back?'],
    },
  ],

  relevantProviders: [
    { providerType: 'pediatrics', whenToSee: 'Primary care for all routine newborn needs', whatTheyDo: 'Well-baby care, illness evaluation, developmental monitoring, vaccinations', howToGetReferral: 'Choose before birth, establish care before discharge', questionsToAsk: ['What are your office hours?', 'Who covers after hours?', 'How quickly can I get a sick visit?'], redFlagsForThisSpecialty: ['Fever', 'Poor feeding', 'Breathing problems', 'Jaundice'] },
    { providerType: 'neonatology', whenToSee: 'If baby was in NICU or has ongoing issues from birth', whatTheyDo: 'Specialized care for premature or sick newborns', howToGetReferral: 'Typically automatic if NICU stay, or pediatrician referral', questionsToAsk: ['What is the follow-up schedule?', 'What should I watch for?', 'When can we transition to regular pediatrics?'], redFlagsForThisSpecialty: ['Apnea', 'Feeding intolerance', 'Growth failure'] },
  ],

  relatedConditions: ['newborn-jaundice', 'breastfeeding-difficulties', 'colic', 'reflux'],

  commonMisconceptions: [
    { misconception: 'Newborns should sleep through the night', truth: 'Newborns need to feed every 2-4 hours around the clock. Sleeping too long without feeding is actually a red flag in the early weeks.', whyItMatters: 'Expecting long sleep stretches leads to missed feeding cues' },
    { misconception: 'Crying always means something is wrong', truth: 'Newborns cry to communicate all needs - hunger, discomfort, overstimulation, tiredness. Some crying (up to 2-3 hours/day) is normal.', whyItMatters: 'Parents can become overly anxious about normal crying' },
    { misconception: 'You can spoil a newborn by holding them too much', truth: 'You cannot spoil a newborn. Holding, responding to cries, and skin-to-skin contact are essential for healthy development.', whyItMatters: 'Parents may avoid needed comfort and bonding' },
    { misconception: 'Formula is as good as breastmilk / Breastmilk is the only option', truth: 'Breastmilk has unique benefits, but fed is best. Formula-fed babies thrive. What matters most is that baby is fed and growing.', whyItMatters: 'Guilt about feeding choices causes unnecessary stress' },
  ],

  dayOfLifeConsiderations: [
    {
      dayRange: '1-2',
      normalExpectations: ['Very sleepy', 'Learning to latch/feed', 'Passing meconium', 'May lose some weight'],
      commonConcerns: ['Is baby eating enough?', 'Why so sleepy?', 'Is cord care okay?'],
      feedingExpectations: 'Colostrum only, frequent short feeds, 8-12 times per day',
      outputExpectations: '1-2 wet diapers, meconium (black/tarry) stools',
      weightExpectations: 'May lose up to 7% of birth weight',
      sleepExpectations: '16-17 hours total, in short stretches',
      redFlagsForThisAge: ['No wet diaper in 12 hours', 'No meconium in 24 hours', 'Fever', 'Blue color', 'Not waking to feed at all'],
    },
    {
      dayRange: '3-5',
      normalExpectations: ['More alert periods', 'Stool transitioning', 'Jaundice may appear', 'Cord drying'],
      commonConcerns: ['Baby looks yellow', 'Stools changing color', 'Engorgement (breastfeeding)', 'Is baby getting enough?'],
      feedingExpectations: 'Milk coming in, feeds may be longer, cluster feeding',
      outputExpectations: '3-5 wet diapers, transitional stools (green/brown)',
      weightExpectations: 'Weight loss plateaus, begins to regain',
      sleepExpectations: 'May have more awake fussy periods, especially evenings',
      redFlagsForThisAge: ['Jaundice spreading to legs', 'Weight loss over 10%', 'No stool in 24 hours', 'Very hard to wake for feeds'],
    },
    {
      dayRange: '6-14',
      normalExpectations: ['Regaining weight', 'Established feeding pattern', 'Cord may fall off', 'More alert periods'],
      commonConcerns: ['Is weight gain okay?', 'Is jaundice improving?', 'Cord fell off - is that normal?', 'Baby seems fussy'],
      feedingExpectations: 'Feeding well established, every 2-3 hours',
      outputExpectations: '6+ wet diapers, 3-4+ yellow seedy stools (breastfed) or formed stools (formula)',
      weightExpectations: 'Gaining 0.5-1 oz per day, back to birth weight by day 10-14',
      sleepExpectations: '15-17 hours total, beginning to have slightly longer stretches',
      redFlagsForThisAge: ['Not back to birth weight by day 14', 'Decreasing wet diapers', 'Jaundice worsening', 'Fever', 'Umbilical redness/drainage'],
    },
    {
      dayRange: '15-28',
      normalExpectations: ['Steady weight gain', 'More interaction', 'May have growth spurt around 3 weeks', 'Developing personality'],
      commonConcerns: ['Fussiness increasing', 'Is this colic?', 'Sleep patterns changing', 'Am I doing this right?'],
      feedingExpectations: 'Established pattern, may increase with growth spurts',
      outputExpectations: '6+ wet diapers, stool frequency may decrease (especially breastfed)',
      weightExpectations: 'Gaining 5-7 oz per week',
      sleepExpectations: 'May have slightly longer night stretches, fussy evenings common',
      redFlagsForThisAge: ['Poor weight gain', 'Fever', 'Inconsolable crying for hours', 'Any respiratory distress', 'Lethargy'],
    },
  ],

  feedingGuidance: {
    breastfeeding: {
      normalPattern: '8-12 feeds per day, every 2-3 hours, may cluster feed. Should hear swallowing. Baby content after feeds.',
      signsOfGoodFeeding: ['Audible swallowing', 'Relaxed hands during feed', 'Content after feeding', 'Adequate wet/dirty diapers', 'Weight gain'],
      commonProblems: [
        { problem: 'Sore nipples', possibleCauses: ['Shallow latch', 'Tongue tie', 'Normal initial tenderness'], homeRemedies: ['Check latch depth', 'Apply breastmilk to nipples', 'Air dry', 'Lanolin cream'], whenToSeekHelp: 'Cracked/bleeding nipples, severe pain, not improving after 1 week' },
        { problem: 'Engorgement', possibleCauses: ['Milk coming in', 'Missed feeds', 'Oversupply'], homeRemedies: ['Frequent feeding', 'Warm compress before feeding', 'Cold compress after', 'Hand express for comfort'], whenToSeekHelp: 'Fever, red streaks, lump that doesn\'t resolve' },
        { problem: 'Baby falling asleep at breast', possibleCauses: ['Normal sleepy newborn', 'Not latched well', 'Jaundice'], homeRemedies: ['Skin-to-skin', 'Breast compression', 'Switch sides', 'Undress baby'], whenToSeekHelp: 'Cannot keep baby awake to feed adequately' },
      ],
      whenToGetHelp: ['Cracked/bleeding nipples', 'Mastitis symptoms (fever, red breast)', 'Baby not gaining weight', 'Severe pain with feeding'],
      resources: ['Hospital lactation consultant', 'Outpatient lactation services', 'La Leche League', 'WIC breastfeeding support'],
    },
    formulaFeeding: {
      normalPattern: '2-3 oz every 3-4 hours in first weeks, increasing gradually. Baby shows hunger cues, content after feeds.',
      preparationSafety: ['Wash hands before preparing', 'Use clean bottles', 'Follow mixing instructions exactly', 'Use within 1 hour at room temp or refrigerate', 'Discard leftovers'],
      signsOfGoodFeeding: ['Taking expected amounts', 'Content after feeding', 'Adequate wet/dirty diapers', 'Weight gain'],
      commonProblems: [
        { problem: 'Spitting up', possibleCauses: ['Normal in babies', 'Eating too fast', 'Overfeeding', 'Needs burping'], homeRemedies: ['Smaller more frequent feeds', 'Burp during and after', 'Keep upright after feeding', 'Check nipple flow'], whenToSeekHelp: 'Projectile vomiting, not gaining weight, appears in pain' },
        { problem: 'Constipation', possibleCauses: ['Formula type', 'Not enough fluid', 'Normal variation'], homeRemedies: ['Bicycle legs', 'Tummy massage', 'Check formula preparation'], whenToSeekHelp: 'No stool in 5+ days, blood in stool, hard painful stools' },
      ],
      whenToGetHelp: ['Persistent vomiting', 'Not gaining weight', 'Blood in stool', 'Refusing to eat'],
    },
    combinedFeeding: {
      howToBalance: 'Many families successfully combine breast and formula. Timing matters for milk supply - breastfeed first, then supplement if needed.',
      considerations: ['May affect milk supply if substituting rather than supplementing', 'Some nipple confusion possible', 'Allows others to help with feeding', 'Fed baby is the goal'],
    },
  },

  normalVariations: [
    { observation: 'Baby\'s head is cone-shaped', whyItHappens: 'Skull bones overlap during birth to fit through birth canal', isNormal: 'Completely normal, will round out', whenToWorry: 'If not improving after 1-2 weeks', usualDuration: '1-2 weeks' },
    { observation: 'White bumps on nose (milia)', whyItHappens: 'Blocked oil glands', isNormal: 'Very common, need no treatment', whenToWorry: 'Don\'t squeeze - they resolve on their own', usualDuration: 'Few weeks' },
    { observation: 'Baby acne', whyItHappens: 'Maternal hormones', isNormal: 'Common around 2-4 weeks', whenToWorry: 'If severe, spreading, or seems infected', usualDuration: 'Few weeks to months' },
    { observation: 'Crossed eyes', whyItHappens: 'Eye muscles still developing coordination', isNormal: 'Normal in newborns', whenToWorry: 'If persistent after 4 months', usualDuration: 'First few months' },
    { observation: 'Startle/Moro reflex', whyItHappens: 'Normal primitive reflex', isNormal: 'Arms fling out then come together', whenToWorry: 'Absent or asymmetric', usualDuration: 'Disappears by 4-6 months' },
    { observation: 'Sneezing', whyItHappens: 'Clearing nasal passages, sensitivity to light', isNormal: 'Very common, not a cold', whenToWorry: 'If with difficulty breathing or fever', usualDuration: 'Ongoing in newborn period' },
    { observation: 'Hiccups', whyItHappens: 'Immature diaphragm', isNormal: 'Very common after feeding', whenToWorry: 'They don\'t bother baby, no action needed', usualDuration: 'Ongoing, improve with age' },
    { observation: 'Breast swelling in baby (any sex)', whyItHappens: 'Maternal hormones', isNormal: 'May even produce small amount of "milk"', whenToWorry: 'If red, warm, or increasing in size', usualDuration: 'First few weeks' },
    { observation: 'Vaginal discharge or spotting (girls)', whyItHappens: 'Maternal estrogen withdrawal', isNormal: 'Can have mucus or small amount of blood', whenToWorry: 'If heavy bleeding or foul smell', usualDuration: 'First week' },
    { observation: 'Peeling skin', whyItHappens: 'Normal transition from aquatic to air environment', isNormal: 'Especially on hands and feet', whenToWorry: 'Red, raw, or cracking skin', usualDuration: 'First 2-3 weeks' },
  ],

  specialPopulationConsiderations: [
    {
      population: 'premature-birth',
      modifiedGuidance: 'Premature babies need adjusted expectations. Use corrected age for milestones. May have different feeding patterns, higher risk of complications.',
      additionalRedFlags: ['Apnea (pauses in breathing)', 'Bradycardia (slow heart rate)', 'Feeding difficulties', 'Temperature instability'],
      specialResources: ['NICU follow-up clinic', 'Early intervention services', 'RSV prevention if eligible'],
      relevantSpecialists: ['neonatology', 'pediatric-pulmonology', 'pediatric-cardiology'],
    },
    {
      population: 'down-syndrome',
      modifiedGuidance: 'Babies with Down syndrome may have low muscle tone affecting feeding, higher risk of certain conditions. Establish specialty care early.',
      additionalRedFlags: ['Significant feeding difficulties', 'Blue spells', 'Signs of intestinal blockage', 'Hypothyroidism symptoms'],
      specialResources: ['Down syndrome clinic', 'Early intervention services', 'Family support groups', 'Feeding therapy'],
      relevantSpecialists: ['pediatric-cardiology', 'pediatric-endocrinology', 'pediatric-gastroenterology'],
    },
    {
      population: 'congenital-heart-disease',
      modifiedGuidance: 'Babies with heart defects may tire easily with feeding, have blue spells, or fail to gain weight. Know your baby\'s specific condition.',
      additionalRedFlags: ['Blue color especially with feeding', 'Excessive sweating with feeds', 'Poor weight gain', 'Fast breathing'],
      specialResources: ['Cardiac care team', 'Home monitoring if prescribed', 'Nutrition support'],
      relevantSpecialists: ['pediatric-cardiology', 'pediatric-surgery'],
    },
  ],
};

// =============================================================================
// NEWBORN FEVER SCENARIO
// =============================================================================

const NEWBORN_FEVER = {
  id: 'newborn-fever',
  title: 'Fever in a Newborn (Under 28 Days)',
  category: 'newborn-care',
  applicableLifeStages: ['newborn'],
  keywords: ['fever', 'temperature', 'hot', 'sick baby', 'newborn fever'],

  situationDescription: {
    simple: 'Your newborn (under 28 days old) feels warm or has a temperature of 100.4°F (38°C) or higher.',
    detailed: 'Your newborn baby feels warm to the touch, is acting differently than usual, or you\'ve measured a rectal temperature of 100.4°F (38°C) or higher. Fever in a newborn is always a medical emergency requiring immediate evaluation.',
    comprehensive: 'Fever in the first 28 days of life is one of the most concerning symptoms in pediatrics. Unlike older children, newborns cannot localize infections - what might be a minor cold in an older child could be meningitis or sepsis in a newborn. Their immune systems are immature and they can deteriorate rapidly. Any temperature of 100.4°F (38°C) or higher in a baby under 28 days requires immediate emergency room evaluation. This is not over-cautious - it is the medical standard of care.',
  },

  variations: [
    {
      id: 'measured-fever',
      description: 'Confirmed rectal temperature 100.4°F or higher',
      differentiatingFactors: ['Measured temperature', 'Above threshold'],
      likelyCareLevel: 'emergency-room',
      additionalConsiderations: ['Go to ER immediately', 'Do not wait', 'Do not give fever reducers first'],
    },
    {
      id: 'feels-warm',
      description: 'Baby feels warm but no thermometer available',
      differentiatingFactors: ['No confirmed measurement', 'Subjective warmth'],
      likelyCareLevel: 'emergency-room',
      additionalConsiderations: ['Get a thermometer and check', 'If warm AND any other symptoms, go to ER', 'When in doubt, go to ER'],
    },
    {
      id: 'overdressed',
      description: 'Baby warm from being bundled up',
      differentiatingFactors: ['Too many clothes/blankets', 'Room too warm'],
      likelyCareLevel: 'home-monitor',
      additionalConsiderations: ['Undress and recheck in 30 minutes', 'If still elevated, go to ER', 'Never dismiss possible fever'],
    },
  ],

  assessmentQuestions: [
    {
      question: 'What is the baby\'s rectal temperature?',
      whyAsking: 'Rectal temperature is the only accurate measurement in newborns. This number determines urgency.',
      answerOptions: [
        { answer: '100.4°F (38°C) or higher', implication: 'This is a medical emergency', urgencyModifier: 'increases' },
        { answer: 'Below 100.4°F after undressing and waiting', implication: 'May have been overdressed, but watch closely', urgencyModifier: 'neutral' },
        { answer: 'Have not taken rectal temperature', implication: 'Need to check - this is important information', urgencyModifier: 'neutral' },
      ],
    },
    {
      question: 'How is the baby feeding?',
      whyAsking: 'Feeding behavior is a key indicator of how sick a baby is.',
      answerOptions: [
        { answer: 'Feeding normally', implication: 'Somewhat reassuring but still needs ER for fever', urgencyModifier: 'neutral' },
        { answer: 'Feeding less than usual', implication: 'Additional concern', urgencyModifier: 'increases' },
        { answer: 'Refusing to feed', implication: 'Very concerning', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'How is the baby\'s activity level?',
      whyAsking: 'Alertness and activity are important signs of how sick a baby is.',
      answerOptions: [
        { answer: 'Alert when awake, normal movement', implication: 'Somewhat reassuring but still needs ER', urgencyModifier: 'neutral' },
        { answer: 'More sleepy than usual', implication: 'Concerning', urgencyModifier: 'increases' },
        { answer: 'Very floppy or limp', implication: 'Very concerning - call 911', urgencyModifier: 'increases' },
        { answer: 'Very irritable, high-pitched cry', implication: 'Very concerning - could indicate meningitis', urgencyModifier: 'increases' },
      ],
    },
  ],

  triageDecisionTree: [
    {
      id: 'confirmed-fever',
      condition: 'Rectal temperature 100.4°F (38°C) or higher in baby under 28 days',
      criteria: [
        { criterion: 'Age under 28 days', present: true, weight: 'critical' },
        { criterion: 'Rectal temp 100.4°F or higher', present: true, weight: 'critical' },
      ],
      recommendedCareLevel: 'emergency-room',
      urgency: 'emergent',
      reasoning: 'ALL newborns with fever need immediate evaluation. Serious bacterial infection including meningitis must be ruled out.',
      timeframe: 'Immediately - do not wait',
      actions: ['Go to emergency room NOW', 'Do not give fever reducers first', 'Bring a list of any exposures'],
    },
    {
      id: 'critical-symptoms',
      condition: 'Fever with very concerning symptoms',
      criteria: [
        { criterion: 'Fever present', present: true, weight: 'critical' },
        { criterion: 'Extremely limp/floppy OR unresponsive OR difficulty breathing', present: true, weight: 'critical' },
      ],
      recommendedCareLevel: 'call-911',
      urgency: 'emergent',
      reasoning: 'These symptoms suggest overwhelming infection or other critical illness.',
      timeframe: 'Call 911 immediately',
      actions: ['Call 911', 'Stay with baby', 'Begin infant CPR if not breathing'],
    },
  ],

  homeCareGuidance: undefined,  // No home care for newborn fever

  whenToSeekCare: {
    homeManagement: {
      appropriateWhen: ['NEVER appropriate for confirmed newborn fever'],
      notAppropriateWhen: ['Any fever in newborn'],
      maxDuration: 'N/A',
    },
    telehealth: {
      appropriateWhen: ['NOT appropriate - newborn with fever needs in-person evaluation'],
      advantagesOverInPerson: [],
    },
    primaryCare: {
      appropriateWhen: ['NOT appropriate - go to ER, not office'],
      howToSchedule: 'N/A',
      whatToBring: [],
    },
    urgentCare: {
      appropriateWhen: ['NOT appropriate for newborn - go to ER'],
      vsEmergencyRoom: 'Urgent care is not equipped to evaluate newborn fever',
      typicalWaitTime: 'N/A',
    },
    emergencyRoom: {
      appropriateWhen: ['ANY rectal temperature 100.4°F or higher in baby under 28 days'],
      whatToExpect: 'Blood tests, urine test, likely lumbar puncture (spinal tap), IV antibiotics, admission to hospital',
      howToPrepare: ['Go immediately - do not delay', 'Bring diaper bag', 'Bring support person', 'Expect to stay several days'],
    },
    call911: {
      appropriateWhen: ['Baby not responsive', 'Baby not breathing well', 'Baby very limp', 'Seizure'],
      whatToTellDispatcher: ['Baby\'s age in days', 'Temperature', 'Symptoms', 'Level of consciousness'],
      whileWaiting: ['Start CPR if not breathing', 'Keep baby warm', 'Don\'t give anything by mouth'],
    },
  },

  redFlags: [
    { sign: 'Rectal temperature 100.4°F (38°C) or higher', whyDangerous: 'In newborns, fever may be the only sign of serious bacterial infection', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Infections can progress to sepsis and death within hours' },
    { sign: 'Very floppy/limp', whyDangerous: 'Sign of overwhelming infection or serious illness', requiredAction: 'call-911', timeframe: 'Immediately', whatHappensIfIgnored: 'May indicate critical illness' },
    { sign: 'Difficulty breathing', whyDangerous: 'May indicate pneumonia, sepsis, or other serious condition', requiredAction: 'call-911', timeframe: 'Immediately', whatHappensIfIgnored: 'Respiratory failure' },
    { sign: 'Bulging soft spot', whyDangerous: 'May indicate meningitis', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Brain damage or death from untreated meningitis' },
    { sign: 'Purple rash or spots', whyDangerous: 'May indicate meningococcemia or other serious infection', requiredAction: 'call-911', timeframe: 'Immediately', whatHappensIfIgnored: 'Rapidly fatal' },
  ],

  whatToExpectAtCare: [
    {
      careLevel: 'emergency-room',
      whatWillHappen: ['Triage assessment', 'Full examination', 'Blood tests', 'Urine test', 'Usually lumbar puncture', 'IV placed', 'Antibiotics started', 'Hospital admission'],
      testsYouMightGet: [
        { test: 'Complete blood count', purpose: 'Look for signs of infection', whatItInvolves: 'Blood draw', resultsTimeframe: '1-2 hours' },
        { test: 'Blood culture', purpose: 'Identify bacteria if present', whatItInvolves: 'Blood draw', resultsTimeframe: '24-72 hours' },
        { test: 'Urinalysis and culture', purpose: 'Check for urinary infection', whatItInvolves: 'Catheter to get clean urine sample', resultsTimeframe: 'Urinalysis 1 hour, culture 24-48 hours' },
        { test: 'Lumbar puncture', purpose: 'Rule out meningitis', whatItInvolves: 'Needle into lower back to get spinal fluid', resultsTimeframe: 'Initial results 1-2 hours, culture 48-72 hours' },
        { test: 'Chest X-ray', purpose: 'Check for pneumonia', whatItInvolves: 'X-ray image', resultsTimeframe: '1 hour' },
      ],
      treatmentsYouMightReceive: [
        { treatment: 'IV antibiotics', purpose: 'Treat possible bacterial infection', whatToExpect: 'Given while awaiting culture results', possibleSideEffects: ['Rash', 'Diarrhea'] },
        { treatment: 'IV fluids', purpose: 'Keep baby hydrated', whatToExpect: 'Continuous through IV', possibleSideEffects: [] },
        { treatment: 'Antiviral medication', purpose: 'If herpes infection suspected', whatToExpect: 'IV medication', possibleSideEffects: ['Kidney issues - monitored closely'] },
      ],
      questionsTheyWillAsk: ['Exact age in days', 'Temperature reading and how taken', 'Feeding history', 'Any sick contacts', 'Birth history', 'Was mother GBS positive', 'How does baby seem to you'],
      whatToBring: ['Insurance information', 'Diaper bag with supplies', 'Support person', 'List of any medications baby has received'],
      estimatedDuration: 'Expect hospital admission of at least 48 hours',
      possibleOutcomes: [
        { outcome: 'Cultures negative, sent home after 24-48 hours', likelihood: 'common', nextSteps: ['Complete any oral antibiotics', 'Close follow-up with pediatrician'] },
        { outcome: 'Bacterial infection found, complete IV antibiotics', likelihood: 'possible', nextSteps: ['Extended hospital stay', 'May need follow-up tests'] },
        { outcome: 'Viral infection diagnosed, supportive care', likelihood: 'common', nextSteps: ['Monitoring', 'Supportive care'] },
      ],
      questionsToAsk: ['What infections are you testing for?', 'What do the initial results show?', 'When will we know culture results?', 'How long will we need to stay?'],
    },
  ],

  relevantProviders: [
    { providerType: 'pediatrics', whenToSee: 'After discharge for follow-up', whatTheyDo: 'Continue monitoring, complete treatment', howToGetReferral: 'ER will arrange follow-up', questionsToAsk: ['When should I worry about fever again?', 'Any long-term concerns?'], redFlagsForThisSpecialty: ['Recurrent fevers', 'Not recovering as expected'] },
    { providerType: 'pediatric-infectious-disease', whenToSee: 'If unusual infection or recurrent infections', whatTheyDo: 'Evaluate for immune problems, unusual infections', howToGetReferral: 'Pediatrician or ER referral', questionsToAsk: ['Is my baby more susceptible to infections?', 'Any preventive measures?'], redFlagsForThisSpecialty: ['Unusual organisms', 'Recurrent serious infections'] },
  ],

  relatedConditions: ['neonatal-sepsis', 'meningitis', 'urinary-tract-infection', 'pneumonia'],

  commonMisconceptions: [
    { misconception: 'A slight fever is okay to watch at home', truth: 'ANY fever 100.4°F or higher in a newborn requires ER evaluation - there is no safe "slight" fever at this age.', whyItMatters: 'Delaying care for a serious infection can be fatal' },
    { misconception: 'I should give Tylenol before going to the ER', truth: 'Do not give fever reducers before going. Doctors need to see the actual temperature and fever reducers don\'t treat the underlying infection.', whyItMatters: 'May mask symptoms and delay assessment' },
    { misconception: 'If baby is still eating, they\'re fine', truth: 'Newborns can feed normally and still have serious infections. Fever trumps feeding behavior at this age.', whyItMatters: 'Parents may be falsely reassured' },
    { misconception: 'The spinal tap is too risky', truth: 'Lumbar puncture is safe and necessary. Missing meningitis is far more dangerous than the procedure.', whyItMatters: 'Parents refusing LP can miss life-threatening meningitis' },
  ],

  dayOfLifeConsiderations: [
    {
      dayRange: '0-7',
      normalExpectations: ['Should not have fever'],
      commonConcerns: ['Is this temperature from being bundled?'],
      feedingExpectations: 'Should be feeding normally even with fever',
      outputExpectations: 'Should have normal wet diapers',
      weightExpectations: 'N/A for acute illness',
      sleepExpectations: 'Sick babies may be very sleepy or very fussy',
      redFlagsForThisAge: ['Any fever - go to ER', 'Poor feeding', 'Lethargy'],
    },
    {
      dayRange: '8-28',
      normalExpectations: ['Should not have fever'],
      commonConcerns: ['Could this be a cold?'],
      feedingExpectations: 'Should be feeding normally',
      outputExpectations: 'Should have normal output',
      weightExpectations: 'N/A for acute illness',
      sleepExpectations: 'Changes from baseline concerning',
      redFlagsForThisAge: ['Any fever - go to ER', 'Poor feeding', 'Lethargy'],
    },
  ],

  specialPopulationConsiderations: [
    {
      population: 'premature-birth',
      modifiedGuidance: 'Premature babies may have even lower thresholds for concern. Any temperature instability needs evaluation.',
      additionalRedFlags: ['Temperature below normal (hypothermia)', 'Apnea', 'Bradycardia'],
      specialResources: ['NICU follow-up line'],
      relevantSpecialists: ['neonatology'],
    },
  ],
};

// =============================================================================
// NEWBORN JAUNDICE SCENARIO
// =============================================================================

const NEWBORN_JAUNDICE = {
  id: 'newborn-jaundice',
  title: 'Jaundice in Your Newborn',
  category: 'newborn-care',
  applicableLifeStages: ['newborn'],
  keywords: ['jaundice', 'yellow', 'yellow skin', 'yellow eyes', 'bilirubin', 'phototherapy', 'bili lights'],

  situationDescription: {
    simple: 'Your baby\'s skin or eyes look yellow.',
    detailed: 'You notice your newborn has a yellowish tint to their skin or the whites of their eyes look yellow. This yellowing, called jaundice, is very common in newborns but needs monitoring because high levels can be dangerous.',
    comprehensive: 'Neonatal jaundice is the yellow discoloration of a newborn\'s skin and eyes caused by elevated bilirubin, a breakdown product of red blood cells. It affects about 60% of term babies and 80% of preterm babies. Most jaundice is physiologic (normal) and resolves on its own, but severe untreated hyperbilirubinemia can cause kernicterus - permanent brain damage. Understanding how to assess jaundice severity and when to seek help is critical for all new parents.',
  },

  variations: [
    {
      id: 'physiologic',
      description: 'Normal newborn jaundice appearing day 2-4',
      differentiatingFactors: ['Appears after 24 hours', 'Baby feeding well', 'Not spreading below belly', 'Gradually improving'],
      likelyCareLevel: 'primary-care',
      additionalConsiderations: ['Monitor closely', 'Follow up as scheduled', 'Increase feeding frequency'],
    },
    {
      id: 'breastfeeding',
      description: 'Jaundice related to breastfeeding difficulty',
      differentiatingFactors: ['Baby not getting enough milk', 'Poor weight gain', 'Inadequate wet/dirty diapers'],
      likelyCareLevel: 'primary-care',
      additionalConsiderations: ['Address feeding issues', 'May need supplementation', 'Lactation support'],
    },
    {
      id: 'breastmilk',
      description: 'Prolonged jaundice in thriving breastfed baby',
      differentiatingFactors: ['Baby feeding and gaining well', 'Jaundice persists beyond 2 weeks', 'Otherwise healthy'],
      likelyCareLevel: 'primary-care',
      additionalConsiderations: ['Usually benign', 'May last several weeks', 'Follow bilirubin levels'],
    },
    {
      id: 'pathologic',
      description: 'Jaundice requiring urgent treatment',
      differentiatingFactors: ['Appears within 24 hours of birth', 'Rising rapidly', 'Spreading to legs/feet', 'Baby lethargic'],
      likelyCareLevel: 'emergency-room',
      additionalConsiderations: ['Needs urgent evaluation', 'May need phototherapy', 'Possible blood incompatibility'],
    },
  ],

  assessmentQuestions: [
    {
      question: 'When did you first notice the yellow color?',
      whyAsking: 'Timing helps determine if this is normal physiologic jaundice or pathologic jaundice requiring urgent treatment.',
      answerOptions: [
        { answer: 'Within first 24 hours of life', implication: 'This is concerning - needs urgent evaluation', urgencyModifier: 'increases' },
        { answer: 'Day 2-4 of life', implication: 'Typical timing for physiologic jaundice', urgencyModifier: 'neutral' },
        { answer: 'After first week', implication: 'May be breastmilk jaundice or other cause - needs evaluation', urgencyModifier: 'neutral' },
      ],
    },
    {
      question: 'How far down the body does the yellow color extend?',
      whyAsking: 'Jaundice progresses from head to toe as bilirubin rises. The further down, the higher the level.',
      answerOptions: [
        { answer: 'Just face', implication: 'Likely mild', urgencyModifier: 'decreases' },
        { answer: 'Face and chest', implication: 'Moderate - needs level check', urgencyModifier: 'neutral' },
        { answer: 'Down to belly button', implication: 'Needs evaluation soon', urgencyModifier: 'increases' },
        { answer: 'To thighs/legs or feet', implication: 'Concerning - needs urgent evaluation', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'How is baby feeding?',
      whyAsking: 'Adequate feeding helps clear bilirubin. Poor feeding can cause jaundice and indicates sick baby.',
      answerOptions: [
        { answer: 'Feeding well, good wet/dirty diapers', implication: 'Reassuring', urgencyModifier: 'decreases' },
        { answer: 'Feeding okay but fewer diapers than expected', implication: 'May need feeding support', urgencyModifier: 'neutral' },
        { answer: 'Poor feeding or very sleepy', implication: 'Concerning - needs evaluation', urgencyModifier: 'increases' },
      ],
    },
  ],

  triageDecisionTree: [
    {
      id: 'early-jaundice',
      condition: 'Yellow color visible within first 24 hours of life',
      criteria: [
        { criterion: 'Jaundice within 24 hours of birth', present: true, weight: 'critical' },
      ],
      recommendedCareLevel: 'emergency-room',
      urgency: 'emergent',
      reasoning: 'Jaundice this early can indicate hemolysis (blood cell breakdown) and levels can rise rapidly to dangerous levels.',
      timeframe: 'Immediately',
      actions: ['Go to ER or call pediatrician immediately', 'This is not normal physiologic jaundice'],
    },
    {
      id: 'severe-jaundice',
      condition: 'Jaundice spread to legs/feet or baby very sleepy',
      criteria: [
        { criterion: 'Jaundice to lower body', present: true, weight: 'critical' },
        { criterion: 'Very sleepy or poor feeding', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'emergency-room',
      urgency: 'urgent',
      reasoning: 'Extensive jaundice with symptoms suggests high bilirubin requiring urgent treatment.',
      timeframe: 'Same day - go now',
      actions: ['Go to ER', 'Bring feeding records', 'Don\'t delay'],
    },
    {
      id: 'moderate-jaundice',
      condition: 'Visible jaundice on face and chest, baby feeding okay',
      criteria: [
        { criterion: 'Jaundice visible below face', present: true, weight: 'major' },
        { criterion: 'Feeding adequately', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'primary-care',
      urgency: 'same-day',
      reasoning: 'Needs bilirubin level checked to determine if treatment needed.',
      timeframe: 'Today',
      actions: ['Call pediatrician for same-day appointment', 'Continue frequent feeding'],
    },
    {
      id: 'mild-jaundice',
      condition: 'Mild yellowing of face only, baby well',
      criteria: [
        { criterion: 'Only face affected', present: true, weight: 'minor' },
        { criterion: 'Feeding well', present: true, weight: 'major' },
        { criterion: 'Good diaper output', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'home-monitor',
      urgency: 'routine',
      reasoning: 'Likely physiologic jaundice that may not need treatment.',
      timeframe: 'Next scheduled visit or call to discuss',
      actions: ['Feed frequently (8-12 times/day)', 'Monitor spread of yellow', 'Keep scheduled appointments'],
    },
  ],

  homeCareGuidance: {
    overview: 'For mild jaundice, feeding frequently is the best treatment. Bilirubin is eliminated in stool, so more feeding = more pooping = lower bilirubin.',
    stepByStepCare: [
      {
        step: 1,
        instruction: 'Feed baby frequently - at least 8-12 times per day',
        rationale: 'Frequent feeding increases gut motility and stool output, which eliminates bilirubin.',
        tips: ['Wake baby to feed if very sleepy', 'Breastfeed: ensure good latch and effective transfer', 'May need to supplement if not gaining'],
      },
      {
        step: 2,
        instruction: 'Check jaundice in natural light daily',
        rationale: 'Monitoring progression helps catch worsening early.',
        tips: ['Undress baby near window', 'Press gently on chest and release - look at color', 'Yellow reaching belly = needs level check'],
      },
      {
        step: 3,
        instruction: 'Keep all follow-up appointments',
        rationale: 'Bilirubin levels need to be tracked during the critical period.',
        tips: ['Most important in first 1-2 weeks', 'Weight checks track feeding adequacy'],
      },
    ],
    medicationsToConsider: [],
    comfortMeasures: [
      { measure: 'Natural light exposure', howToApply: 'Place baby near (not in direct) sunlight for short periods during feeds', expectedBenefit: 'May help break down bilirubin slightly', cautions: ['Not a substitute for phototherapy if needed', 'Avoid sunburn', 'Keep baby warm'] },
    ],
    whatToMonitor: [
      { whatToMonitor: 'Spread of yellow color', howToMonitor: 'Check in natural light daily', concerningValues: 'Spreading below belly button, reaching legs', frequency: 'Daily minimum' },
      { whatToMonitor: 'Feeding', howToMonitor: 'Track feeds and time at breast or amounts', concerningValues: 'Decreasing feeds, very sleepy at breast', frequency: 'Every feed' },
      { whatToMonitor: 'Diaper output', howToMonitor: 'Count wet and dirty diapers', concerningValues: 'Fewer than expected for age', frequency: 'Every diaper' },
      { whatToMonitor: 'Baby\'s alertness', howToMonitor: 'Note activity level', concerningValues: 'Increasingly sleepy, hard to wake, floppy', frequency: 'Throughout day' },
    ],
    expectedTimeline: [
      { timeframe: 'Day 2-3', expectedStatus: 'Jaundice may appear and increase', normalVariation: 'Peaks around day 3-5', redFlagsAtThisStage: ['Already down to belly/legs', 'Very sleepy', 'Poor feeding'] },
      { timeframe: 'Day 4-7', expectedStatus: 'Should plateau then start improving', normalVariation: 'May still look yellow but improving', redFlagsAtThisStage: ['Still worsening', 'Spreading further', 'Feeding problems'] },
      { timeframe: 'Week 2', expectedStatus: 'Most physiologic jaundice resolving', normalVariation: 'Breastmilk jaundice may persist', redFlagsAtThisStage: ['White/pale stool', 'Dark urine', 'Getting worse'] },
    ],
    signsOfImprovement: ['Yellow color retreating (legs→belly→chest→face)', 'Baby more alert', 'Good feeding and diapers'],
    signsOfWorsening: ['Yellow spreading downward', 'Baby increasingly sleepy', 'Feeding worsening', 'High-pitched cry', 'Arching back'],
    whenToReassess: 'At scheduled appointments or sooner if worsening',
    commonMistakes: ['Putting baby in direct sunlight (can burn)', 'Giving water (doesn\'t help and may interfere with feeding)', 'Stopping breastfeeding (rarely necessary)'],
  },

  whenToSeekCare: {
    homeManagement: {
      appropriateWhen: ['Mild jaundice (face only)', 'Baby feeding well', 'Adequate diapers', 'Day 2-4 of life', 'Not spreading'],
      notAppropriateWhen: ['Jaundice in first 24 hours', 'Spreading below belly', 'Baby sleepy or feeding poorly', 'Any other concerning symptoms'],
      maxDuration: 'Until next scheduled appointment or sooner if worsening',
    },
    telehealth: {
      appropriateWhen: ['Questions about feeding', 'Unsure if jaundice is worsening', 'General questions about care'],
      advantagesOverInPerson: ['Quick guidance on whether to come in'],
    },
    primaryCare: {
      appropriateWhen: ['Bilirubin level check needed', 'Feeding evaluation', 'Weight check', 'Jaundice not clearly resolving'],
      howToSchedule: 'Call pediatrician office for same-day if concerned',
      whatToBring: ['Feeding log', 'Dirty diaper if stool color concerning'],
    },
    urgentCare: {
      appropriateWhen: ['NOT recommended for newborn jaundice - pediatrician or ER'],
      vsEmergencyRoom: 'Go to ER if jaundice is severe or baby is symptomatic',
      typicalWaitTime: 'N/A',
    },
    emergencyRoom: {
      appropriateWhen: ['Jaundice in first 24 hours', 'Very sleepy or floppy baby', 'Refusing to feed', 'Jaundice to legs/feet', 'High-pitched cry or arching back'],
      whatToExpect: 'Bilirubin blood test, possibly phototherapy, may need admission',
      howToPrepare: ['Bring diaper bag', 'Expect possible hospital stay for phototherapy'],
    },
    call911: {
      appropriateWhen: ['Baby unresponsive', 'Seizure', 'Not breathing'],
      whatToTellDispatcher: ['Baby\'s age', 'Level of consciousness', 'Symptoms'],
      whileWaiting: ['Keep baby safe', 'CPR if not breathing'],
    },
  },

  redFlags: [
    { sign: 'Jaundice within first 24 hours of life', whyDangerous: 'Indicates pathologic cause like blood group incompatibility, can rise rapidly', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Bilirubin can reach dangerous levels quickly' },
    { sign: 'Extremely sleepy, hard to wake, floppy', whyDangerous: 'May indicate bilirubin affecting brain (acute bilirubin encephalopathy)', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Can progress to permanent brain damage (kernicterus)' },
    { sign: 'High-pitched cry', whyDangerous: 'Neurologic sign of high bilirubin', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Indicates brain involvement' },
    { sign: 'Arching back', whyDangerous: 'Late neurologic sign of severe hyperbilirubinemia', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Permanent damage likely occurring' },
    { sign: 'Pale/white stools', whyDangerous: 'Indicates biliary atresia - bile duct problem, not normal jaundice', requiredAction: 'emergency-room', timeframe: 'Same day', whatHappensIfIgnored: 'Liver damage, needs surgery' },
  ],

  whatToExpectAtCare: [
    {
      careLevel: 'primary-care',
      whatWillHappen: ['Examination', 'Bilirubin level check', 'Weight check', 'Feeding assessment', 'Decision on treatment'],
      testsYouMightGet: [
        { test: 'Transcutaneous bilirubin', purpose: 'Screening estimate of bilirubin level', whatItInvolves: 'Device pressed to skin - no blood draw', resultsTimeframe: 'Immediate' },
        { test: 'Serum bilirubin', purpose: 'Accurate bilirubin measurement', whatItInvolves: 'Heel stick or blood draw', resultsTimeframe: '1-2 hours to same day' },
        { test: 'Blood type', purpose: 'Check for ABO/Rh incompatibility', whatItInvolves: 'Blood draw', resultsTimeframe: 'Same day' },
      ],
      treatmentsYouMightReceive: [
        { treatment: 'Feeding support', purpose: 'Increase milk intake to clear bilirubin', whatToExpect: 'Lactation help, possible supplement recommendation', possibleSideEffects: [] },
        { treatment: 'Home phototherapy', purpose: 'Light breaks down bilirubin', whatToExpect: 'Bili blanket or light at home, frequent level checks', possibleSideEffects: ['Loose stools', 'Rash', 'Dehydration if not feeding well'] },
        { treatment: 'Hospital phototherapy referral', purpose: 'More intensive treatment', whatToExpect: 'Admission for phototherapy if levels high', possibleSideEffects: ['Separation from baby is hard'] },
      ],
      questionsTheyWillAsk: ['When did jaundice start?', 'How is feeding going?', 'Wet and dirty diapers?', 'Baby\'s behavior?', 'Blood type of mother?'],
      whatToBring: ['Feeding log', 'Diaper log', 'Previous bilirubin results if any'],
      estimatedDuration: '30-60 minutes',
      possibleOutcomes: [
        { outcome: 'Level low, watch and recheck', likelihood: 'common', nextSteps: ['Continue feeding', 'Recheck in 24-48 hours'] },
        { outcome: 'Needs phototherapy', likelihood: 'possible', nextSteps: ['Either home or hospital phototherapy', 'Frequent level checks'] },
        { outcome: 'Further workup needed', likelihood: 'rare', nextSteps: ['Blood tests for underlying causes'] },
      ],
      questionsToAsk: ['What is the bilirubin level?', 'What level would need treatment?', 'When should I recheck?', 'What would make you worry more?'],
    },
  ],

  relevantProviders: [
    { providerType: 'pediatrics', whenToSee: 'Primary management of jaundice', whatTheyDo: 'Monitor levels, determine treatment, coordinate care', howToGetReferral: 'Established from birth', questionsToAsk: ['How often should we check levels?', 'At what level would you start phototherapy?'], redFlagsForThisSpecialty: ['Rising levels despite treatment', 'Symptoms of encephalopathy'] },
    { providerType: 'neonatology', whenToSee: 'Severe jaundice, premature babies, complicated cases', whatTheyDo: 'Intensive treatment of hyperbilirubinemia', howToGetReferral: 'ER or pediatrician referral', questionsToAsk: ['Will baby need exchange transfusion?', 'Any long-term effects expected?'], redFlagsForThisSpecialty: ['Levels approaching exchange transfusion threshold', 'Neurologic symptoms'] },
  ],

  relatedConditions: ['neonatal-hyperbilirubinemia', 'biliary-atresia', 'ABO-incompatibility', 'Rh-disease'],

  commonMisconceptions: [
    { misconception: 'All jaundice is dangerous', truth: 'Most newborn jaundice is normal (physiologic) and resolves without treatment. It\'s level-dependent and timing-dependent.', whyItMatters: 'Unnecessary anxiety about normal process' },
    { misconception: 'Sunlight through window treats jaundice', truth: 'Window glass blocks the therapeutic wavelengths. While outdoor indirect sunlight may help marginally, it\'s not a substitute for phototherapy when needed.', whyItMatters: 'May delay needed treatment' },
    { misconception: 'I should stop breastfeeding if baby is jaundiced', truth: 'Almost never. Increasing breastfeeding usually helps by increasing stool output. Only temporarily stopping is considered in severe cases.', whyItMatters: 'Undermines breastfeeding unnecessarily' },
    { misconception: 'Yellow eyes are fine as long as skin looks okay', truth: 'Yellow sclera (eyes) is actually a sign of elevated bilirubin. Eye color can be a good indicator.', whyItMatters: 'May miss concerning jaundice' },
  ],

  jaundiceGuidance: {
    whatIsIt: {
      simple: 'Yellow color in baby\'s skin and eyes from a substance called bilirubin building up.',
      detailed: 'Jaundice is caused by bilirubin, a yellow pigment made when red blood cells break down. Newborns have extra red blood cells and immature livers, so bilirubin can accumulate temporarily.',
      comprehensive: 'Neonatal hyperbilirubinemia results from the confluence of increased bilirubin production (breakdown of fetal hemoglobin, shorter RBC lifespan) and decreased elimination (immature hepatic conjugation and excretion, increased enterohepatic circulation). The unconjugated form is lipophilic and can cross the blood-brain barrier at high levels, causing neurotoxicity.',
    },
    riskFactors: ['Premature birth', 'Blood type incompatibility with mother', 'Bruising from birth', 'Sibling with severe jaundice', 'East Asian ethnicity', 'Breastfeeding difficulties', 'Certain genetic conditions'],
    howToAssess: 'Press gently on baby\'s forehead or chest, then release and look at the color. Check in natural light. Yellow progresses from face downward as levels rise.',
    normalVsWorrying: {
      normal: ['Appears after 24 hours of age', 'Peaks around day 3-5', 'Only on face initially', 'Baby feeding and stooling well', 'Gradually improving'],
      worrying: ['Appears in first 24 hours', 'Progresses rapidly', 'Spreads to legs/feet', 'Baby very sleepy or poor feeding', 'Still worsening after day 5', 'Pale/white stools'],
    },
    treatmentOptions: [
      { treatment: 'Observation and feeding', whenUsed: 'Mild jaundice below treatment threshold', whatToExpect: 'Frequent feeding, monitoring, level rechecks' },
      { treatment: 'Phototherapy', whenUsed: 'Levels above treatment threshold for age', whatToExpect: 'Special blue lights break down bilirubin through skin. May be home blanket or hospital lights. Eye protection needed.' },
      { treatment: 'Exchange transfusion', whenUsed: 'Severe hyperbilirubinemia not responding to phototherapy, signs of encephalopathy', whatToExpect: 'NICU procedure replacing baby\'s blood. Rare but lifesaving when needed.' },
    ],
    monitoring: 'Bilirubin levels are tracked over time on a nomogram (graph) that accounts for baby\'s age in hours. Levels above certain lines for age need treatment.',
  },
};

// =============================================================================
// DATABASE EXPORTS
// =============================================================================

export const NEWBORN_SCENARIOS = {
  'newborn-normal-care': NORMAL_NEWBORN_CARE,
  'newborn-fever': NEWBORN_FEVER,
  'newborn-jaundice': NEWBORN_JAUNDICE,
};

export function getNewbornScenario(id: string) {
  return NEWBORN_SCENARIOS[id as keyof typeof NEWBORN_SCENARIOS] || null;
}

export function getAllNewbornScenarios() {
  return Object.values(NEWBORN_SCENARIOS);
}

export function searchNewbornScenarios(keyword: string) {
  const lowerKeyword = keyword.toLowerCase();
  return Object.values(NEWBORN_SCENARIOS).filter(scenario =>
    scenario.keywords.some((k: string) => k.toLowerCase().includes(lowerKeyword)) ||
    scenario.title.toLowerCase().includes(lowerKeyword)
  );
}
