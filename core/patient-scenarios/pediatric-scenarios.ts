/**
 * Pediatric Scenarios Database
 *
 * Comprehensive guidance for childhood health concerns including:
 * - Developmental milestones and delays
 * - Special populations (Down syndrome, autism spectrum, etc.)
 * - Common childhood illnesses
 * - Behavioral concerns
 *
 * Designed to help parents:
 * - Understand normal development vs. concerning delays
 * - Navigate the healthcare system for children with special needs
 * - Make informed decisions about when to seek care
 */

// =============================================================================
// DEVELOPMENTAL MILESTONE SCENARIOS
// =============================================================================

const DEVELOPMENTAL_MILESTONES_0_6_MONTHS = {
  id: 'developmental-milestones-0-6mo',
  title: 'Developmental Milestones: Birth to 6 Months',
  category: 'developmental-concerns',
  applicableLifeStages: ['infant'],
  keywords: ['development', 'milestones', 'baby development', 'rolling', 'smiling', 'head control', 'developmental delay'],

  situationDescription: {
    simple: 'You want to know if your baby is developing normally in the first 6 months.',
    detailed: 'Your baby is between birth and 6 months old, and you want to understand what developmental milestones to expect and what might indicate a concern. Development happens at different rates, but there are key skills to watch for.',
    comprehensive: 'The first six months of life involve remarkable developmental changes across motor, communication, cognitive, and social-emotional domains. While there is significant normal variation in when babies achieve milestones, certain patterns of delay can indicate underlying conditions that benefit from early intervention. Understanding the range of normal helps parents celebrate progress while recognizing true concerns.',
  },

  variations: [
    {
      id: 'first-time-parent',
      description: 'First baby with no frame of reference',
      differentiatingFactors: ['No previous baby experience', 'Comparing to books/internet', 'High anxiety about normal variation'],
      likelyCareLevel: 'home-self-care',
      additionalConsiderations: ['Every baby develops differently', 'Ranges are normal', 'Well-child visits are for asking questions'],
    },
    {
      id: 'premature-baby',
      description: 'Baby born before 37 weeks',
      differentiatingFactors: ['Use corrected age for milestones', 'May have developmental follow-up already', 'Different trajectory normal'],
      likelyCareLevel: 'primary-care',
      additionalConsiderations: ['Always use corrected age until age 2', 'NICU follow-up important', 'Early intervention may be proactive'],
    },
    {
      id: 'sibling-had-delay',
      description: 'Older sibling had developmental concerns',
      differentiatingFactors: ['Family history of delay', 'May be watching more closely', 'Some conditions have genetic component'],
      likelyCareLevel: 'primary-care',
      additionalConsiderations: ['Mention family history to pediatrician', 'Earlier screening may be appropriate', 'Each child is individual'],
    },
  ],

  assessmentQuestions: [
    {
      question: 'Is your baby making eye contact and smiling socially by 2 months?',
      whyAsking: 'Social smile is a key early social-emotional milestone.',
      answerOptions: [
        { answer: 'Yes, smiles at faces and makes eye contact', implication: 'Good social development', urgencyModifier: 'decreases' },
        { answer: 'Sometimes, but not consistently', implication: 'May still be developing - watch closely', urgencyModifier: 'neutral' },
        { answer: 'No, not yet at 2-3 months', implication: 'Worth discussing at next visit', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'Can your baby hold their head steady by 4 months?',
      whyAsking: 'Head control is a fundamental motor milestone that underlies later skills.',
      answerOptions: [
        { answer: 'Yes, good head control when held upright', implication: 'Normal motor development', urgencyModifier: 'decreases' },
        { answer: 'Getting better but still wobbly', implication: 'Still developing - typical variation', urgencyModifier: 'neutral' },
        { answer: 'Still very floppy at 4+ months', implication: 'Should be evaluated', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'Does your baby respond to sounds and turn toward voices?',
      whyAsking: 'Auditory response is crucial for language development.',
      answerOptions: [
        { answer: 'Yes, startles to sounds and turns toward voices', implication: 'Normal hearing responses', urgencyModifier: 'decreases' },
        { answer: 'Sometimes responds', implication: 'Worth monitoring', urgencyModifier: 'neutral' },
        { answer: 'Doesn\'t seem to respond to sounds', implication: 'Needs hearing evaluation', urgencyModifier: 'increases' },
      ],
    },
  ],

  triageDecisionTree: [
    {
      id: 'meeting-milestones',
      condition: 'Baby meeting age-appropriate milestones',
      criteria: [
        { criterion: 'Social smile present', present: true, weight: 'major' },
        { criterion: 'Age-appropriate motor skills', present: true, weight: 'major' },
        { criterion: 'Responds to sounds', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'home-self-care',
      urgency: 'routine',
      reasoning: 'Baby is developing normally. Continue well-child visits.',
      timeframe: 'Regular well-child schedule',
      actions: ['Continue stimulating activities', 'Keep well-child appointments', 'Enjoy your baby'],
    },
    {
      id: 'possible-delay',
      condition: 'Baby not meeting some milestones',
      criteria: [
        { criterion: 'Missing expected milestone for age', present: true, weight: 'major' },
        { criterion: 'Otherwise healthy', present: true, weight: 'minor' },
      ],
      recommendedCareLevel: 'primary-care',
      urgency: 'soon',
      reasoning: 'Milestones may need formal assessment. Early intervention is most effective.',
      timeframe: 'Within 2 weeks',
      actions: ['Schedule appointment with pediatrician', 'Document specific concerns', 'Ask about developmental screening'],
    },
    {
      id: 'regression',
      condition: 'Baby has lost skills they previously had',
      criteria: [
        { criterion: 'Loss of previously achieved milestone', present: true, weight: 'critical' },
      ],
      recommendedCareLevel: 'primary-care',
      urgency: 'urgent',
      reasoning: 'Regression of milestones is always concerning and needs evaluation.',
      timeframe: 'Within days',
      actions: ['Call pediatrician promptly', 'Document what skills were lost and when', 'May need neurological evaluation'],
    },
  ],

  homeCareGuidance: {
    overview: 'The best support for development is responsive caregiving, lots of interaction, and appropriate stimulation for your baby\'s age.',
    stepByStepCare: [
      {
        step: 1,
        instruction: 'Practice tummy time daily',
        rationale: 'Tummy time builds neck, back, and shoulder muscles needed for rolling, sitting, and crawling.',
        tips: ['Start with a few minutes several times a day', 'Make it fun with mirrors, toys, or lying face-to-face', 'Build up gradually', 'Okay if baby fusses a bit - they\'re working hard'],
        warnings: ['Always supervise tummy time', 'Stop if baby falls asleep'],
      },
      {
        step: 2,
        instruction: 'Talk, read, and sing to your baby constantly',
        rationale: 'Language exposure builds brain connections for communication. Babies learn language from human interaction, not screens.',
        tips: ['Narrate your day', 'Respond to coos and babbles', 'Read board books', 'Sing songs and nursery rhymes'],
      },
      {
        step: 3,
        instruction: 'Respond to your baby\'s cues',
        rationale: 'Responsive caregiving teaches cause and effect and builds secure attachment, which is the foundation for all development.',
        tips: ['Respond to crying', 'Mirror expressions', 'Follow their gaze', 'Let them guide play'],
      },
      {
        step: 4,
        instruction: 'Provide appropriate sensory experiences',
        rationale: 'Sensory input helps brain development.',
        tips: ['Different textures to touch', 'Colorful toys (especially high contrast for young infants)', 'Safe things to mouth', 'Gentle music'],
      },
    ],
    medicationsToConsider: [],
    comfortMeasures: [],
    whatToMonitor: [
      { whatToMonitor: 'Social smiling', howToMonitor: 'Does baby smile at you (not just gas smile)?', concerningValues: 'No social smile by 2 months', frequency: 'Daily interaction' },
      { whatToMonitor: 'Visual tracking', howToMonitor: 'Do eyes follow your face or a toy?', concerningValues: 'Doesn\'t track by 2-3 months', frequency: 'Weekly' },
      { whatToMonitor: 'Head control', howToMonitor: 'When held upright, does head stay steady?', concerningValues: 'No head control by 4 months', frequency: 'Weekly' },
      { whatToMonitor: 'Cooing and babbling', howToMonitor: 'Does baby make vowel sounds, then consonant sounds?', concerningValues: 'No cooing by 3-4 months', frequency: 'Daily' },
      { whatToMonitor: 'Rolling', howToMonitor: 'Can baby roll from tummy to back, then back to tummy?', concerningValues: 'Not rolling either way by 6 months', frequency: 'Weekly' },
    ],
    expectedTimeline: [
      { timeframe: '0-2 months', expectedStatus: 'Lifting head briefly, social smile emerging, focusing on faces, startling to sounds', normalVariation: 'Very sleepy periods normal', redFlagsAtThisStage: ['Very floppy or very stiff', 'No response to sounds', 'Doesn\'t look at faces', 'Constant irritability'] },
      { timeframe: '2-4 months', expectedStatus: 'Good head control developing, cooing, laughing, reaching for toys, tracking objects', normalVariation: 'Some babies ahead/behind on specific skills', redFlagsAtThisStage: ['No head control at 4 months', 'No social smile', 'Doesn\'t coo or make sounds', 'Not tracking visually'] },
      { timeframe: '4-6 months', expectedStatus: 'Rolling, sitting with support, babbling consonants, reaching and grasping, stranger awareness beginning', normalVariation: 'Rolling timing varies widely', redFlagsAtThisStage: ['Very poor muscle tone', 'No reaching for objects', 'Not babbling', 'No interest in surroundings'] },
    ],
    signsOfImprovement: ['Achieving new skills', 'More interactive', 'Responding to name', 'Playing with purpose'],
    signsOfWorsening: ['Losing skills', 'Becoming less interactive', 'Increasing stiffness or floppiness', 'Not making progress'],
    whenToReassess: 'Every well-child visit',
    commonMistakes: ['Comparing to other babies constantly', 'Excessive screen time instead of interaction', 'Not enough tummy time', 'Not talking to baby because "they can\'t understand"'],
  },

  whenToSeekCare: {
    homeManagement: {
      appropriateWhen: ['Meeting milestones within normal range', 'Making steady progress', 'No regression'],
      notAppropriateWhen: ['Losing previously achieved skills', 'Multiple missing milestones', 'Any concerns about hearing or vision'],
      maxDuration: 'Address concerns at next well-child visit or sooner',
    },
    telehealth: {
      appropriateWhen: ['Questions about normal variation', 'Guidance on stimulation activities', 'Unsure if concern warrants visit'],
      advantagesOverInPerson: ['Quick reassurance or advice', 'Determine if formal evaluation needed'],
    },
    primaryCare: {
      appropriateWhen: ['Missing expected milestones', 'Concerns about hearing or vision', 'Want formal developmental screening', 'Questions about development'],
      howToSchedule: 'Well-child visits or extra appointment if concerned',
      whatToBring: ['List of skills and when achieved', 'Videos of concerning behaviors', 'Specific questions'],
    },
    urgentCare: {
      appropriateWhen: ['NOT appropriate for developmental concerns'],
      vsEmergencyRoom: 'Neither appropriate - see pediatrician or specialist',
      typicalWaitTime: 'N/A',
    },
    emergencyRoom: {
      appropriateWhen: ['Acute loss of consciousness', 'Seizure', 'Sudden inability to move limbs'],
      whatToExpect: 'Neurological evaluation, possibly imaging',
      howToPrepare: ['Describe exactly what happened', 'Timeline of symptoms'],
    },
    call911: {
      appropriateWhen: ['Seizure', 'Stopped breathing', 'Unresponsive'],
      whatToTellDispatcher: ['Baby\'s age', 'What is happening', 'Level of consciousness'],
      whileWaiting: ['CPR if needed', 'Keep baby safe'],
    },
  },

  redFlags: [
    { sign: 'No social smile by 2 months', whyDangerous: 'May indicate vision problems, hearing problems, or social-emotional developmental concern', requiredAction: 'primary-care', timeframe: 'Within 2 weeks', whatHappensIfIgnored: 'Delayed diagnosis of treatable conditions' },
    { sign: 'No head control by 4 months', whyDangerous: 'May indicate motor delay, hypotonia, or neurological condition', requiredAction: 'primary-care', timeframe: 'Within 2 weeks', whatHappensIfIgnored: 'Delayed access to early intervention' },
    { sign: 'Does not respond to sounds', whyDangerous: 'May indicate hearing loss - crucial for language development', requiredAction: 'primary-care', timeframe: 'Within 1 week', whatHappensIfIgnored: 'Language delay if hearing loss untreated' },
    { sign: 'Very stiff or very floppy muscles', whyDangerous: 'May indicate cerebral palsy or other neurological condition', requiredAction: 'primary-care', timeframe: 'Within 1-2 weeks', whatHappensIfIgnored: 'Delayed diagnosis and treatment' },
    { sign: 'Loss of previously achieved milestones', whyDangerous: 'Regression is always concerning - may indicate metabolic or neurological disorder', requiredAction: 'primary-care', timeframe: 'Within days', whatHappensIfIgnored: 'Progressive neurological damage' },
    { sign: 'Not tracking visually or no eye contact', whyDangerous: 'May indicate vision problems or early sign of autism spectrum disorder', requiredAction: 'primary-care', timeframe: 'Within 2 weeks', whatHappensIfIgnored: 'Delayed intervention for vision or development' },
  ],

  whatToExpectAtCare: [
    {
      careLevel: 'primary-care',
      whatWillHappen: ['Detailed developmental history', 'Physical examination', 'Developmental screening test', 'Discussion of concerns', 'Possible referrals'],
      testsYouMightGet: [
        { test: 'Developmental screening questionnaire (ASQ, PEDS)', purpose: 'Standardized assessment of development', whatItInvolves: 'Parent answers questions about skills', resultsTimeframe: 'Same visit' },
        { test: 'Hearing screen referral', purpose: 'Rule out hearing loss', whatItInvolves: 'Audiology testing', resultsTimeframe: 'Days to weeks' },
        { test: 'Vision screen referral', purpose: 'Rule out vision problems', whatItInvolves: 'Pediatric ophthalmology', resultsTimeframe: 'Days to weeks' },
      ],
      treatmentsYouMightReceive: [
        { treatment: 'Early intervention referral', purpose: 'Therapy services if delays confirmed', whatToExpect: 'Free evaluation and services through age 3', possibleSideEffects: [] },
        { treatment: 'Specialist referral', purpose: 'Further evaluation if indicated', whatToExpect: 'Neurology, genetics, or developmental pediatrics', possibleSideEffects: ['Wait times can be long'] },
      ],
      questionsTheyWillAsk: ['What specific skills are you concerned about?', 'When did you first notice?', 'Family history of developmental delays?', 'Pregnancy and birth history?', 'Is baby meeting feeding milestones?'],
      whatToBring: ['Developmental history (when reached milestones)', 'Videos if helpful', 'Family history', 'Questions list'],
      estimatedDuration: '30-45 minutes',
      possibleOutcomes: [
        { outcome: 'Development normal for age', likelihood: 'common', nextSteps: ['Continue monitoring', 'Well-child visits'] },
        { outcome: 'Possible delay, monitoring recommended', likelihood: 'possible', nextSteps: ['Repeat screening', 'Early intervention referral'] },
        { outcome: 'Confirmed delay, referrals placed', likelihood: 'possible', nextSteps: ['Specialty evaluation', 'Early intervention', 'Additional testing'] },
      ],
      questionsToAsk: ['Is my baby\'s development within normal range?', 'Should I be doing anything differently at home?', 'Does my baby need early intervention services?', 'What follow-up is needed?'],
    },
  ],

  relevantProviders: [
    { providerType: 'pediatrics', whenToSee: 'All well-child visits, initial concerns', whatTheyDo: 'Developmental surveillance and screening, referrals', howToGetReferral: 'Established PCP', questionsToAsk: ['Is this within normal range?', 'Should we see a specialist?'], redFlagsForThisSpecialty: ['Missing milestones', 'Regression', 'Abnormal muscle tone'] },
    { providerType: 'pediatric-neurology', whenToSee: 'Abnormal tone, suspected CP, seizures, regression', whatTheyDo: 'Evaluate neurological development, diagnose and manage conditions', howToGetReferral: 'Pediatrician referral', questionsToAsk: ['What is causing the delay?', 'What is the prognosis?', 'What treatments help?'], redFlagsForThisSpecialty: ['Regression', 'Seizures', 'Severe hypotonia'] },
  ],

  relatedConditions: ['cerebral-palsy', 'autism-spectrum-disorder', 'hearing-loss', 'vision-impairment', 'global-developmental-delay'],

  commonMisconceptions: [
    { misconception: 'Babies should reach milestones at exact ages', truth: 'Milestones have ranges. There\'s significant normal variation in when babies achieve skills.', whyItMatters: 'Unnecessary worry about normal variation' },
    { misconception: 'My baby is "lazy" for not rolling/sitting/etc', truth: 'Babies develop at their own pace. Development isn\'t about effort or laziness.', whyItMatters: 'Inappropriate expectations can affect parent-child relationship' },
    { misconception: 'Waiting to see if they catch up is best', truth: 'Early intervention is most effective. Getting evaluation doesn\'t hurt and can help.', whyItMatters: 'Delayed intervention is less effective' },
    { misconception: 'Screen time teaches babies', truth: 'Babies learn from human interaction, not screens. AAP recommends no screens under 18 months (except video chat).', whyItMatters: 'Screen time may actually delay development' },
  ],
};

// =============================================================================
// DOWN SYNDROME NEWBORN CARE SCENARIO
// =============================================================================

const DOWN_SYNDROME_NEWBORN_CARE = {
  id: 'down-syndrome-newborn-care',
  title: 'Caring for Your Baby with Down Syndrome',
  category: 'special-needs',
  applicableLifeStages: ['newborn', 'infant'],
  keywords: ['Down syndrome', 'Trisomy 21', 'T21', 'chromosomal', 'special needs', 'developmental disability'],

  situationDescription: {
    simple: 'Your baby has been diagnosed with Down syndrome and you want to know how to care for them.',
    detailed: 'Your baby has been diagnosed with Down syndrome (Trisomy 21). You\'re learning about what this means and how to best care for your baby. While this may be unexpected news, babies with Down syndrome can live full, healthy lives with appropriate care and support.',
    comprehensive: 'Down syndrome is the most common chromosomal condition, occurring in about 1 in 700 births. It is caused by an extra copy of chromosome 21. People with Down syndrome have characteristic features and varying degrees of intellectual disability, but with early intervention and appropriate medical care, they can achieve meaningful milestones and lead fulfilling lives. The newborn period is crucial for establishing care, screening for associated conditions, and beginning early intervention.',
  },

  variations: [
    {
      id: 'prenatal-diagnosis',
      description: 'Down syndrome was diagnosed before birth',
      differentiatingFactors: ['Had time to prepare', 'May have connected with resources', 'May have processed emotions'],
      likelyCareLevel: 'primary-care',
      additionalConsiderations: ['Already may have specialist team', 'Validate all emotions', 'Continue building support network'],
    },
    {
      id: 'postnatal-diagnosis',
      description: 'Diagnosis made after birth',
      differentiatingFactors: ['Unexpected news', 'Processing while caring for newborn', 'May need more immediate support'],
      likelyCareLevel: 'primary-care',
      additionalConsiderations: ['Allow time to process', 'Seek support groups', 'Take it one day at a time'],
    },
    {
      id: 'confirmed-with-heart-defect',
      description: 'Baby has congenital heart defect',
      differentiatingFactors: ['About 50% of babies with DS have heart defects', 'May need cardiac surgery', 'Additional monitoring needed'],
      likelyCareLevel: 'primary-care',
      additionalConsiderations: ['Cardiology care is priority', 'Watch for heart failure signs', 'May affect feeding'],
    },
  ],

  assessmentQuestions: [
    {
      question: 'Has your baby had a cardiac (heart) evaluation?',
      whyAsking: 'About 50% of babies with Down syndrome have heart defects. Early detection is critical.',
      answerOptions: [
        { answer: 'Yes, and it was normal', implication: 'Great news - still needs follow-up', urgencyModifier: 'decreases' },
        { answer: 'Yes, and a defect was found', implication: 'Will need cardiology follow-up', urgencyModifier: 'neutral' },
        { answer: 'Not yet', implication: 'Needs echocardiogram', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'How is your baby feeding?',
      whyAsking: 'Babies with Down syndrome often have low muscle tone affecting feeding. Early support helps.',
      answerOptions: [
        { answer: 'Feeding well, gaining weight', implication: 'Good progress', urgencyModifier: 'decreases' },
        { answer: 'Having some difficulty but managing', implication: 'May benefit from feeding support', urgencyModifier: 'neutral' },
        { answer: 'Significant feeding difficulty, poor weight gain', implication: 'Needs feeding evaluation', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'Has your baby had thyroid screening?',
      whyAsking: 'Hypothyroidism is common in Down syndrome and affects development if untreated.',
      answerOptions: [
        { answer: 'Yes, as part of newborn screening, result normal', implication: 'Will need regular monitoring', urgencyModifier: 'decreases' },
        { answer: 'Yes, and abnormal - already being treated', implication: 'Continue thyroid medication as directed', urgencyModifier: 'neutral' },
        { answer: 'Don\'t know/Not sure', implication: 'Confirm with pediatrician', urgencyModifier: 'neutral' },
      ],
    },
  ],

  triageDecisionTree: [
    {
      id: 'stable-baby',
      condition: 'Baby is feeding, stable, with established care team',
      criteria: [
        { criterion: 'Feeding adequately', present: true, weight: 'major' },
        { criterion: 'Heart evaluation completed', present: true, weight: 'major' },
        { criterion: 'No acute concerns', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'home-self-care',
      urgency: 'routine',
      reasoning: 'Continue routine care with scheduled specialist visits.',
      timeframe: 'Per established schedule',
      actions: ['Continue feeding support', 'Keep appointments', 'Connect with early intervention', 'Join support network'],
    },
    {
      id: 'feeding-difficulty',
      condition: 'Baby having significant feeding problems',
      criteria: [
        { criterion: 'Poor feeding or weight loss', present: true, weight: 'major' },
        { criterion: 'Low tone affecting feeding', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'primary-care',
      urgency: 'soon',
      reasoning: 'Feeding support and possible evaluation needed.',
      timeframe: 'Within 1-2 days',
      actions: ['Contact pediatrician', 'Request feeding/lactation evaluation', 'May need speech therapy consultation'],
    },
    {
      id: 'respiratory-distress',
      condition: 'Baby showing signs of breathing difficulty or heart failure',
      criteria: [
        { criterion: 'Fast breathing, sweating with feeds, poor feeding', present: true, weight: 'critical' },
        { criterion: 'Blue color', present: true, weight: 'critical' },
      ],
      recommendedCareLevel: 'emergency-room',
      urgency: 'emergent',
      reasoning: 'May indicate heart failure from cardiac defect or respiratory infection.',
      timeframe: 'Immediately',
      actions: ['Go to ER', 'Mention Down syndrome and any known heart defect', 'Bring medication list'],
    },
  ],

  homeCareGuidance: {
    overview: 'Caring for a baby with Down syndrome involves the same love and basics as any baby, plus attention to specific health needs and early developmental support.',
    stepByStepCare: [
      {
        step: 1,
        instruction: 'Support feeding - this is often the first challenge',
        rationale: 'Low muscle tone (hypotonia) can make feeding harder. Patience and proper positioning help.',
        tips: ['Keep baby upright for feeds', 'Allow extra time', 'Wake baby if very sleepy', 'Breast milk is excellent if possible', 'Special bottles may help', 'Lactation consultant experienced with DS is invaluable'],
        warnings: ['Watch for blue color or excessive sweating during feeds - may indicate heart problem'],
      },
      {
        step: 2,
        instruction: 'Start early intervention as soon as possible',
        rationale: 'Early intervention (physical therapy, speech therapy, etc.) from infancy improves outcomes significantly.',
        tips: ['Contact your state\'s early intervention program', 'Services are free through age 3', 'PT, OT, speech, and developmental services available', 'Don\'t wait for "problems" - proactive is best'],
      },
      {
        step: 3,
        instruction: 'Keep all medical appointments',
        rationale: 'Babies with Down syndrome need more monitoring due to associated conditions.',
        tips: ['Keep a medical binder', 'Write down questions before appointments', 'Know your child\'s specific diagnoses', 'Don\'t miss cardiology follow-ups'],
      },
      {
        step: 4,
        instruction: 'Connect with the Down syndrome community',
        rationale: 'Other parents who\'ve been there are invaluable sources of support, information, and hope.',
        tips: ['Local Down syndrome support groups', 'National Down Syndrome Society', 'Local Parent to Parent programs', 'Facebook groups for new parents'],
      },
      {
        step: 5,
        instruction: 'Treat your baby like a baby first',
        rationale: 'Your baby is a baby who happens to have Down syndrome, not "a Down syndrome baby." They need love, play, and normal experiences.',
        tips: ['Talk and read to them', 'Lots of tummy time', 'Normal baby activities', 'Celebrate milestones (they will come!)'],
      },
    ],
    medicationsToConsider: [
      {
        medication: 'Thyroid medication (if needed)',
        purpose: 'Replace thyroid hormone if hypothyroid',
        dosing: [{ ageRange: 'As prescribed', dose: 'Individualized', frequency: 'Daily', maxDaily: 'Per prescription' }],
        warnings: ['Never stop without doctor guidance', 'Critical for brain development'],
        whenNotToUse: ['Only if prescribed'],
        interactions: ['Give on empty stomach', 'Separate from iron'],
      },
    ],
    comfortMeasures: [
      { measure: 'Positioning support', howToApply: 'Use rolls/pillows to support baby in good alignment', expectedBenefit: 'Helps with low tone, improves feeding and breathing', cautions: ['Safe sleep still applies - no loose items in crib'] },
      { measure: 'Tummy time with support', howToApply: 'Use a roll under chest to help lift head', expectedBenefit: 'Builds strength despite low tone', cautions: ['Supervise closely'] },
    ],
    whatToMonitor: [
      { whatToMonitor: 'Feeding adequacy', howToMonitor: 'Track feeds, wet diapers, weight gain', concerningValues: 'Not gaining weight, decreasing feeds', frequency: 'Daily initially' },
      { whatToMonitor: 'Breathing', howToMonitor: 'Watch for fast breathing, struggling, sweating with feeds', concerningValues: 'Signs of respiratory distress', frequency: 'With each feed' },
      { whatToMonitor: 'Constipation', howToMonitor: 'Track stool frequency', concerningValues: 'Common in DS - discuss with doctor if hard stools or infrequent', frequency: 'Daily' },
      { whatToMonitor: 'Development', howToMonitor: 'Track milestones (will be on delayed timeline)', concerningValues: 'Complete plateau or regression', frequency: 'Ongoing' },
    ],
    expectedTimeline: [
      { timeframe: 'First month', expectedStatus: 'Focus on feeding, cardiac evaluation, processing emotions', normalVariation: 'It\'s okay to have mixed emotions', redFlagsAtThisStage: ['Signs of heart failure', 'Not feeding', 'Fever'] },
      { timeframe: 'Months 2-6', expectedStatus: 'Establishing feeding, starting early intervention, specialists connected', normalVariation: 'Milestones may come slower - that\'s expected', redFlagsAtThisStage: ['Weight loss', 'Increasing breathing difficulty', 'Regression'] },
      { timeframe: 'Months 6-12', expectedStatus: 'Progress on milestones, personality emerging, therapies ongoing', normalVariation: 'Wide variation in skill timing', redFlagsAtThisStage: ['No progress', 'Increasing floppiness', 'New symptoms'] },
    ],
    signsOfImprovement: ['Better feeding', 'Weight gain', 'Reaching milestones', 'More interactive', 'Parent confidence growing'],
    signsOfWorsening: ['Feeding declining', 'Weight loss', 'Breathing harder', 'More floppy', 'Less interactive'],
    whenToReassess: 'Regular pediatrician visits (more frequent in first year), plus specialist appointments',
    commonMistakes: ['Expecting typical development timeline', 'Not starting early intervention soon enough', 'Forgetting thyroid monitoring', 'Not connecting with support community'],
  },

  whenToSeekCare: {
    homeManagement: {
      appropriateWhen: ['Baby stable and feeding', 'No signs of heart failure', 'Established care team'],
      notAppropriateWhen: ['Breathing difficulty', 'Poor feeding', 'Fever', 'Blue color', 'Significant lethargy'],
      maxDuration: 'Between scheduled appointments',
    },
    telehealth: {
      appropriateWhen: ['Questions about care', 'Minor concerns', 'Resource needs'],
      advantagesOverInPerson: ['Quick questions answered', 'Reduces exposure to illness'],
    },
    primaryCare: {
      appropriateWhen: ['Regular well-child care', 'Feeding difficulties', 'Constipation', 'Questions about development'],
      howToSchedule: 'More frequent visits in first year often recommended',
      whatToBring: ['Medical binder', 'Specialist reports', 'Questions list', 'Feeding log'],
    },
    urgentCare: {
      appropriateWhen: ['Generally prefer pediatrician or ER due to complex needs'],
      vsEmergencyRoom: 'ER better for complex patients',
      typicalWaitTime: 'Variable',
    },
    emergencyRoom: {
      appropriateWhen: ['Breathing difficulty', 'Blue color', 'Signs of heart failure', 'Fever', 'Severe feeding refusal', 'Lethargy'],
      whatToExpect: 'Comprehensive evaluation - mention Down syndrome and any heart defect immediately',
      howToPrepare: ['Bring medical summary', 'List of medications', 'Specialist names', 'Specific diagnoses'],
    },
    call911: {
      appropriateWhen: ['Not breathing', 'Blue and unresponsive', 'Seizure'],
      whatToTellDispatcher: ['Baby has Down syndrome', 'Any known heart defect', 'What is happening'],
      whileWaiting: ['CPR if needed', 'Keep airway clear'],
    },
  },

  redFlags: [
    { sign: 'Fast breathing, sweating with feeds, poor feeding', whyDangerous: 'May indicate heart failure from congenital heart defect', requiredAction: 'emergency-room', timeframe: 'Same day', whatHappensIfIgnored: 'Heart failure can progress rapidly' },
    { sign: 'Blue color (lips, fingernails)', whyDangerous: 'Indicates inadequate oxygen - possibly from heart defect', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Organ damage from hypoxia' },
    { sign: 'Fever', whyDangerous: 'Babies with DS may have immune differences; infections need prompt treatment', requiredAction: 'primary-care', timeframe: 'Same day (ER if under 2 months)', whatHappensIfIgnored: 'Infection can spread' },
    { sign: 'Not eating, very floppy, hard to arouse', whyDangerous: 'May indicate serious illness, metabolic problem, or cardiac decompensation', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Underlying problem worsens' },
    { sign: 'Vomiting green (bile)', whyDangerous: 'May indicate duodenal atresia or other GI problem (more common in DS)', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Obstruction can cause serious problems' },
  ],

  whatToExpectAtCare: [
    {
      careLevel: 'primary-care',
      whatWillHappen: ['Growth monitoring', 'Development assessment', 'Screening tests', 'Coordination of specialists', 'Anticipatory guidance'],
      testsYouMightGet: [
        { test: 'Thyroid function tests', purpose: 'Screen for hypothyroidism', whatItInvolves: 'Blood test', resultsTimeframe: 'Days' },
        { test: 'Complete blood count', purpose: 'Check for blood disorders (more common in DS)', whatItInvolves: 'Blood test', resultsTimeframe: 'Days' },
        { test: 'Hearing screen', purpose: 'Hearing loss more common in DS', whatItInvolves: 'ABR or OAE testing', resultsTimeframe: 'Same day' },
        { test: 'Vision screen referral', purpose: 'Eye problems more common', whatItInvolves: 'Pediatric ophthalmology', resultsTimeframe: 'Weeks' },
      ],
      treatmentsYouMightReceive: [
        { treatment: 'Early intervention referral', purpose: 'Developmental support', whatToExpect: 'Evaluation and services', possibleSideEffects: [] },
        { treatment: 'Thyroid medication', purpose: 'If hypothyroid', whatToExpect: 'Daily medication', possibleSideEffects: [] },
        { treatment: 'Feeding therapy referral', purpose: 'If feeding difficulties', whatToExpect: 'Speech or OT evaluation', possibleSideEffects: [] },
      ],
      questionsTheyWillAsk: ['How is feeding going?', 'How is baby\'s breathing?', 'Any concerns?', 'How are YOU doing?'],
      whatToBring: ['Growth records', 'Feeding log', 'Specialist reports', 'Questions'],
      estimatedDuration: '30-45 minutes for well-child, longer for complex visits',
      possibleOutcomes: [
        { outcome: 'Baby is thriving, continue plan', likelihood: 'common', nextSteps: ['Continue current care', 'Maintain appointments'] },
        { outcome: 'New concern identified, referral needed', likelihood: 'possible', nextSteps: ['Additional testing', 'Specialist referral'] },
        { outcome: 'Adjustment to treatment plan', likelihood: 'possible', nextSteps: ['New medication or therapy', 'Additional support'] },
      ],
      questionsToAsk: ['How is my baby\'s growth?', 'Are we current on all recommended screenings?', 'What should I watch for?', 'Are there resources for families?'],
    },
  ],

  relevantProviders: [
    { providerType: 'pediatrics', whenToSee: 'Primary care and coordination', whatTheyDo: 'Well-child care, screening, specialist coordination', howToGetReferral: 'Established', questionsToAsk: ['What screening tests are due?', 'How is growth?'], redFlagsForThisSpecialty: ['Poor growth', 'New symptoms', 'Development concerns'] },
    { providerType: 'pediatric-cardiology', whenToSee: 'Initial evaluation and if heart defect present', whatTheyDo: 'Evaluate and manage heart defects', howToGetReferral: 'All babies with DS should have echocardiogram', questionsToAsk: ['Is there a heart defect?', 'Will surgery be needed?', 'What signs should I watch for?'], redFlagsForThisSpecialty: ['Breathing difficulty', 'Poor feeding', 'Sweating'] },
    { providerType: 'pediatric-endocrinology', whenToSee: 'If thyroid abnormalities', whatTheyDo: 'Manage thyroid and other hormonal conditions', howToGetReferral: 'Pediatrician referral if needed', questionsToAsk: ['Is the thyroid level optimal?', 'How often to check?'], redFlagsForThisSpecialty: ['Extreme fatigue', 'Constipation', 'Poor growth'] },
    { providerType: 'pediatric-gastroenterology', whenToSee: 'If GI problems (reflux, constipation, celiac)', whatTheyDo: 'Manage digestive issues', howToGetReferral: 'Pediatrician referral', questionsToAsk: ['Is this related to Down syndrome?', 'What can help?'], redFlagsForThisSpecialty: ['Bilious vomiting', 'Blood in stool', 'Failure to thrive'] },
  ],

  relatedConditions: ['congenital-heart-disease', 'hypothyroidism', 'hearing-loss', 'celiac-disease', 'atlantoaxial-instability'],

  commonMisconceptions: [
    { misconception: 'People with Down syndrome can\'t learn or achieve', truth: 'People with Down syndrome can and do learn, work, have relationships, and live fulfilling lives. Early intervention and support are key.', whyItMatters: 'Low expectations limit opportunity' },
    { misconception: 'All people with Down syndrome are the same', truth: 'Like all people, individuals with Down syndrome have unique personalities, abilities, and challenges.', whyItMatters: 'Stereotyping ignores individuality' },
    { misconception: 'Nothing can be done to help development', truth: 'Early intervention significantly improves outcomes. Therapy, education, and support make a real difference.', whyItMatters: 'May lead to missed intervention opportunities' },
    { misconception: 'People with Down syndrome are always happy', truth: 'People with Down syndrome experience the full range of human emotions. This stereotype is reductive.', whyItMatters: 'Dismisses their real emotional experiences' },
    { misconception: 'Life expectancy is very short', truth: 'With modern medical care, average life expectancy is 60+ years and increasing.', whyItMatters: 'Outdated information causes despair' },
  ],

  specialPopulationConsiderations: [
    {
      population: 'congenital-heart-disease',
      modifiedGuidance: 'About 50% of babies with DS have heart defects (AVSD most common). Cardiac care may be the priority.',
      additionalRedFlags: ['Breathing difficulty', 'Poor feeding', 'Blue spells', 'Sweating with feeds', 'Poor growth'],
      specialResources: ['Pediatric cardiac surgery team', 'Cardiac support groups'],
      relevantSpecialists: ['pediatric-cardiology', 'pediatric-surgery'],
    },
    {
      population: 'premature-birth',
      modifiedGuidance: 'Premature babies with DS face combined risks. Use corrected age, close monitoring.',
      additionalRedFlags: ['Apnea', 'Feeding intolerance', 'Growth failure'],
      specialResources: ['NICU follow-up', 'Early intervention'],
      relevantSpecialists: ['neonatology'],
    },
  ],
};

// =============================================================================
// COMMON CHILDHOOD FEVER SCENARIO
// =============================================================================

const CHILDHOOD_FEVER = {
  id: 'childhood-fever',
  title: 'Fever in Children (Over 2 Months)',
  category: 'fever',
  applicableLifeStages: ['infant', 'toddler', 'child', 'adolescent'],
  keywords: ['fever', 'temperature', 'hot', 'sick child', 'febrile'],

  situationDescription: {
    simple: 'Your child has a fever and you want to know what to do.',
    detailed: 'Your child (over 2 months old) has a fever. You want to know how to care for them at home and when a fever is serious enough to need medical care.',
    comprehensive: 'Fever is one of the most common reasons parents seek medical care, but it\'s important to understand that fever itself is not dangerous in most cases - it\'s actually a sign the immune system is fighting infection. The concern is the underlying cause of the fever and how the child is acting overall, not the number on the thermometer.',
  },

  variations: [
    {
      id: 'low-grade-fever',
      description: 'Temperature 100.4-102°F, child acting fairly normal',
      differentiatingFactors: ['Mild elevation', 'Still playing', 'Eating and drinking', 'Alert'],
      likelyCareLevel: 'home-self-care',
      additionalConsiderations: ['Often viral', 'Comfort care usually sufficient', 'Monitor for changes'],
    },
    {
      id: 'high-fever-well-appearing',
      description: 'Temperature 103°F+, but child perks up with fever reducers',
      differentiatingFactors: ['High temperature', 'Improves with treatment', 'Still drinking'],
      likelyCareLevel: 'home-monitor',
      additionalConsiderations: ['Height of fever less important than how child acts', 'May need evaluation if persists'],
    },
    {
      id: 'fever-with-symptoms',
      description: 'Fever with other symptoms (cough, earache, sore throat, etc.)',
      differentiatingFactors: ['Additional symptoms give clues to cause', 'May need specific treatment'],
      likelyCareLevel: 'primary-care',
      additionalConsiderations: ['May be strep, ear infection, etc. that needs treatment'],
    },
    {
      id: 'fever-ill-appearing',
      description: 'Child with fever who looks very sick',
      differentiatingFactors: ['Lethargic', 'Not drinking', 'Not responding normally', 'Very irritable'],
      likelyCareLevel: 'emergency-room',
      additionalConsiderations: ['Needs immediate evaluation', 'Trust your parental instinct'],
    },
  ],

  assessmentQuestions: [
    {
      question: 'How old is your child?',
      whyAsking: 'Age affects the evaluation. Younger infants need more careful assessment.',
      answerOptions: [
        { answer: '0-28 days (newborn)', implication: 'Any fever in a newborn is an emergency - see newborn fever scenario', urgencyModifier: 'increases' },
        { answer: '1-2 months', implication: 'Still high risk - most need same-day evaluation', urgencyModifier: 'increases' },
        { answer: '2-24 months', implication: 'Moderate risk - depends on how child looks', urgencyModifier: 'neutral' },
        { answer: 'Over 2 years', implication: 'How the child looks matters more than the number', urgencyModifier: 'decreases' },
      ],
    },
    {
      question: 'How is your child acting when the fever comes down?',
      whyAsking: 'This is the most important question. Children who perk up with fever reducers are usually okay.',
      answerOptions: [
        { answer: 'Perks up, plays, acts more like themselves', implication: 'Very reassuring', urgencyModifier: 'decreases' },
        { answer: 'Somewhat better but still tired', implication: 'May be okay, continue monitoring', urgencyModifier: 'neutral' },
        { answer: 'Still very lethargic even when fever is down', implication: 'Concerning - needs evaluation', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'Is your child drinking fluids?',
      whyAsking: 'Dehydration is a main concern with fever. Drinking is a good sign.',
      answerOptions: [
        { answer: 'Yes, drinking well', implication: 'Reassuring', urgencyModifier: 'decreases' },
        { answer: 'Drinking less than usual but still some', implication: 'Monitor closely, encourage fluids', urgencyModifier: 'neutral' },
        { answer: 'Refusing to drink or unable to keep fluids down', implication: 'Concerning - may need IV fluids', urgencyModifier: 'increases' },
      ],
    },
    {
      question: 'Are there any other symptoms?',
      whyAsking: 'Other symptoms help identify the cause and guide treatment.',
      answerOptions: [
        { answer: 'Just fever, no other symptoms', implication: 'May be viral, watch for other symptoms to develop', urgencyModifier: 'neutral' },
        { answer: 'Cold symptoms (runny nose, cough)', implication: 'Likely viral URI', urgencyModifier: 'decreases' },
        { answer: 'Ear pain or pulling at ears', implication: 'May be ear infection - needs exam', urgencyModifier: 'neutral' },
        { answer: 'Sore throat', implication: 'May need strep test', urgencyModifier: 'neutral' },
        { answer: 'Rash', implication: 'Many possibilities - needs evaluation', urgencyModifier: 'increases' },
        { answer: 'Stiff neck, severe headache, sensitivity to light', implication: 'Meningitis signs - seek care immediately', urgencyModifier: 'increases' },
      ],
    },
  ],

  triageDecisionTree: [
    {
      id: 'newborn-fever',
      condition: 'Fever in infant under 28 days',
      criteria: [
        { criterion: 'Age under 28 days', present: true, weight: 'critical' },
        { criterion: 'Fever 100.4°F or higher', present: true, weight: 'critical' },
      ],
      recommendedCareLevel: 'emergency-room',
      urgency: 'emergent',
      reasoning: 'Newborn fever is always an emergency. See newborn fever scenario.',
      timeframe: 'Immediately',
      actions: ['Go to ER now', 'Do not give fever reducers first'],
    },
    {
      id: 'young-infant-fever',
      condition: 'Fever in infant 1-2 months',
      criteria: [
        { criterion: 'Age 1-2 months', present: true, weight: 'critical' },
        { criterion: 'Fever 100.4°F or higher', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'primary-care',
      urgency: 'same-day',
      reasoning: 'Young infants need same-day evaluation for fever.',
      timeframe: 'Same day',
      actions: ['Call pediatrician immediately', 'May direct to ER depending on circumstances'],
    },
    {
      id: 'fever-well-appearing',
      condition: 'Fever in child over 2 months who looks well',
      criteria: [
        { criterion: 'Age over 2 months', present: true, weight: 'major' },
        { criterion: 'Perks up with fever reducers', present: true, weight: 'major' },
        { criterion: 'Drinking fluids', present: true, weight: 'major' },
        { criterion: 'No red flag symptoms', present: true, weight: 'critical' },
      ],
      recommendedCareLevel: 'home-self-care',
      urgency: 'routine',
      reasoning: 'Child is showing reassuring signs. Home care appropriate with monitoring.',
      timeframe: 'Monitor at home, see doctor if fever persists >3-4 days',
      actions: ['Fever reducers for comfort', 'Push fluids', 'Monitor for changes', 'Rest'],
    },
    {
      id: 'fever-with-focus',
      condition: 'Fever with symptoms pointing to specific infection',
      criteria: [
        { criterion: 'Fever present', present: true, weight: 'major' },
        { criterion: 'Ear pain, sore throat, or urinary symptoms', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'primary-care',
      urgency: 'soon',
      reasoning: 'May have bacterial infection that needs treatment.',
      timeframe: 'Within 24-48 hours',
      actions: ['Call pediatrician to schedule', 'Home care while waiting', 'May need antibiotics'],
    },
    {
      id: 'fever-ill-appearing',
      condition: 'Fever with child looking/acting very sick',
      criteria: [
        { criterion: 'Lethargic even when fever down', present: true, weight: 'critical' },
        { criterion: 'Not drinking', present: true, weight: 'major' },
        { criterion: 'Inconsolable', present: true, weight: 'major' },
      ],
      recommendedCareLevel: 'emergency-room',
      urgency: 'urgent',
      reasoning: 'Child\'s appearance is most important indicator. Sick-looking child needs evaluation.',
      timeframe: 'Now',
      actions: ['Go to ER or call pediatrician', 'Trust your instincts', 'Describe exactly how child looks'],
    },
    {
      id: 'meningitis-signs',
      condition: 'Fever with signs of meningitis',
      criteria: [
        { criterion: 'Fever present', present: true, weight: 'major' },
        { criterion: 'Stiff neck, severe headache, light sensitivity, or bulging fontanelle', present: true, weight: 'critical' },
      ],
      recommendedCareLevel: 'emergency-room',
      urgency: 'emergent',
      reasoning: 'These are signs of possible meningitis - a medical emergency.',
      timeframe: 'Immediately',
      actions: ['Go to ER now', 'Do not delay'],
    },
  ],

  homeCareGuidance: {
    overview: 'For most children over 2 months with fever who are drinking and perking up with fever reducers, home care is appropriate. Focus on comfort, hydration, and monitoring.',
    stepByStepCare: [
      {
        step: 1,
        instruction: 'Give fever-reducing medication for comfort',
        rationale: 'Fever reducers help the child feel better. They don\'t fight the infection but improve comfort.',
        tips: ['Acetaminophen (Tylenol) for any age', 'Ibuprofen (Advil/Motrin) only if over 6 months', 'Dose by weight, not age', 'Don\'t wake a sleeping child just to give fever reducers', 'Can alternate medications but track carefully to avoid overdose'],
        warnings: ['Never give aspirin to children (Reye syndrome risk)', 'Don\'t exceed recommended doses'],
        applicableAges: ['infant', 'toddler', 'child', 'adolescent'],
      },
      {
        step: 2,
        instruction: 'Push fluids',
        rationale: 'Fever increases fluid needs. Dehydration is the main risk.',
        tips: ['Water, diluted juice, electrolyte drinks (Pedialyte)', 'Popsicles count!', 'Small frequent sips if nauseous', 'Breastfed babies can nurse more frequently', 'Don\'t force eating - fluids are more important'],
      },
      {
        step: 3,
        instruction: 'Keep child comfortable and resting',
        rationale: 'Rest helps the body fight infection.',
        tips: ['Light clothing and blankets', 'Room temperature comfortable', 'Screen time okay when sick', 'Lukewarm bath can help but stop if child is shivering'],
        warnings: ['No cold baths or alcohol rubs (dangerous)', 'Don\'t bundle up a feverish child'],
      },
      {
        step: 4,
        instruction: 'Monitor closely',
        rationale: 'How the child looks and acts is more important than the temperature number.',
        tips: ['Check every few hours when awake', 'Note how they respond when fever is treated', 'Watch for new symptoms', 'Track fluid intake and urine output'],
      },
    ],
    medicationsToConsider: [
      {
        medication: 'Acetaminophen (Tylenol)',
        purpose: 'Reduce fever and discomfort',
        dosing: [
          { ageRange: 'Under 3 months', dose: 'Ask doctor before using', frequency: 'N/A', maxDaily: 'N/A' },
          { ageRange: '3-6 months', dose: '10-15 mg/kg per dose', frequency: 'Every 4-6 hours', maxDaily: '75 mg/kg or 4g max' },
          { ageRange: '6 months - 12 years', dose: '10-15 mg/kg per dose', frequency: 'Every 4-6 hours', maxDaily: '75 mg/kg or 4g max' },
        ],
        warnings: ['Don\'t exceed 5 doses in 24 hours', 'Check all medications for acetaminophen to avoid double dosing'],
        whenNotToUse: ['Liver disease'],
        interactions: ['Many cold/flu medicines contain acetaminophen - check labels'],
      },
      {
        medication: 'Ibuprofen (Advil/Motrin)',
        purpose: 'Reduce fever and discomfort',
        dosing: [
          { ageRange: 'Under 6 months', dose: 'Do not use', frequency: 'N/A', maxDaily: 'N/A' },
          { ageRange: '6 months - 12 years', dose: '5-10 mg/kg per dose', frequency: 'Every 6-8 hours', maxDaily: '40 mg/kg or 1200mg max' },
        ],
        warnings: ['Give with food to prevent stomach upset', 'Don\'t use if dehydrated - hard on kidneys'],
        whenNotToUse: ['Under 6 months', 'Dehydrated', 'Vomiting significantly', 'Kidney problems'],
        interactions: ['Avoid with some blood pressure medications'],
      },
    ],
    comfortMeasures: [
      { measure: 'Lukewarm bath/sponging', howToApply: 'Lukewarm (not cold) water for 10-15 minutes', expectedBenefit: 'May help lower fever slightly and improve comfort', cautions: ['Stop if child shivers', 'Never use cold water or alcohol'] },
      { measure: 'Light clothing', howToApply: 'Dress in light, breathable clothing', expectedBenefit: 'Allows body to release heat', cautions: ['Don\'t bundle up', 'Use light blanket if child feels cold'] },
      { measure: 'Cool room', howToApply: 'Keep room at comfortable temperature, around 68-72°F', expectedBenefit: 'Prevents overheating', cautions: ['Don\'t make it so cold child shivers'] },
    ],
    whatToMonitor: [
      { whatToMonitor: 'Temperature', howToMonitor: 'Check every 4-6 hours when awake', concerningValues: 'Fever lasting more than 3-4 days or getting higher', frequency: 'Every 4-6 hours' },
      { whatToMonitor: 'Activity level', howToMonitor: 'Watch how child acts when fever is treated', concerningValues: 'Still lethargic when fever is down', frequency: 'Ongoing' },
      { whatToMonitor: 'Fluid intake', howToMonitor: 'Track what child drinks', concerningValues: 'Not drinking, dry mouth, no tears', frequency: 'Ongoing' },
      { whatToMonitor: 'Urine output', howToMonitor: 'Count wet diapers or bathroom trips', concerningValues: 'Much less than usual - sign of dehydration', frequency: 'Throughout day' },
      { whatToMonitor: 'New symptoms', howToMonitor: 'Watch for rash, worsening symptoms, localized pain', concerningValues: 'Any new concerning symptoms', frequency: 'Ongoing' },
    ],
    expectedTimeline: [
      { timeframe: 'Day 1-2', expectedStatus: 'Fever may be high, child uncomfortable, resting more', normalVariation: 'Fever can spike to 104°F with viral illness', redFlagsAtThisStage: ['Not perking up with treatment', 'Not drinking', 'Very young infant'] },
      { timeframe: 'Day 3-4', expectedStatus: 'Most viral fevers improving, may be low-grade', normalVariation: 'Some viral illnesses last longer', redFlagsAtThisStage: ['Fever still high', 'New symptoms appearing', 'Getting worse not better'] },
      { timeframe: 'Day 5+', expectedStatus: 'Should be clearly improving or resolved', normalVariation: 'Some residual fatigue normal', redFlagsAtThisStage: ['Persistent fever needs evaluation', 'Second fever spike after improvement'] },
    ],
    signsOfImprovement: ['Fever breaking or lower', 'More energy', 'Eating and drinking more', 'Playing again', 'Better sleep'],
    signsOfWorsening: ['Fever persisting beyond 3-4 days', 'New symptoms', 'Less responsive', 'Not drinking', 'Increased work of breathing', 'Rash developing'],
    whenToReassess: 'Check with doctor if fever persists more than 3-4 days, or sooner if child seems worse',
    commonMistakes: ['Focusing on the temperature number instead of how child looks', 'Waking child to give fever reducers', 'Bundling up a feverish child', 'Alternating fever reducers without tracking', 'Going to ER just because temperature is high'],
  },

  whenToSeekCare: {
    homeManagement: {
      appropriateWhen: ['Child over 2 months', 'Perks up with fever reducers', 'Drinking fluids', 'Alert when awake', 'No red flag symptoms'],
      notAppropriateWhen: ['Under 2 months with any fever', 'Lethargic even when fever treated', 'Not drinking', 'Red flag symptoms present'],
      maxDuration: '3-4 days of fever or sooner if worsening',
    },
    telehealth: {
      appropriateWhen: ['Questions about fever management', 'Unsure if needs to be seen', 'Guidance on medications'],
      advantagesOverInPerson: ['Quick guidance', 'Avoid exposing sick child to waiting room'],
    },
    primaryCare: {
      appropriateWhen: ['Fever with ear pain or sore throat', 'Fever lasting more than 3-4 days', 'Young infant (1-2 months)', 'Urinary symptoms', 'You\'re worried'],
      howToSchedule: 'Same-day or next-day appointment, call for guidance',
      whatToBring: ['Temperature log', 'Fluid/medication log', 'List of symptoms'],
    },
    urgentCare: {
      appropriateWhen: ['Fever with apparent ear infection or sore throat', 'Pediatrician not available', 'Child over 2 months acting well between fevers'],
      vsEmergencyRoom: 'Urgent care okay for well-appearing children needing exam. ER for sick-appearing children.',
      typicalWaitTime: '30-60 minutes typically',
    },
    emergencyRoom: {
      appropriateWhen: ['Fever in infant under 2 months', 'Lethargic even when fever down', 'Signs of meningitis', 'Difficulty breathing', 'Not drinking for hours', 'Concerning rash', 'You are very worried'],
      whatToExpect: 'Examination, possibly blood/urine tests, possibly chest X-ray depending on symptoms',
      howToPrepare: ['Note highest temp and when', 'Track medications given', 'Note fluid intake', 'Describe how child is acting'],
    },
    call911: {
      appropriateWhen: ['Difficulty breathing', 'Blue color', 'Unresponsive', 'Seizure lasting more than 5 minutes', 'Purple rash spreading rapidly'],
      whatToTellDispatcher: ['Child\'s age', 'Temperature', 'Symptoms', 'Level of consciousness'],
      whileWaiting: ['Keep child safe', 'CPR if needed', 'If seizing, keep safe, nothing in mouth, time it'],
    },
  },

  redFlags: [
    { sign: 'Fever in infant under 2 months', whyDangerous: 'Young infants cannot fight infection well and can deteriorate rapidly', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Serious infections can be fatal' },
    { sign: 'Lethargic even when fever is down', whyDangerous: 'This is the most important sign - the child should improve somewhat with fever treatment', requiredAction: 'emergency-room', timeframe: 'Same day', whatHappensIfIgnored: 'May indicate serious infection' },
    { sign: 'Not drinking for many hours', whyDangerous: 'Leads to dehydration which can worsen quickly', requiredAction: 'primary-care', timeframe: 'Same day', whatHappensIfIgnored: 'Severe dehydration needs IV fluids' },
    { sign: 'Stiff neck with fever', whyDangerous: 'Classic sign of meningitis', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Meningitis is life-threatening' },
    { sign: 'Purple/non-blanching rash with fever', whyDangerous: 'May indicate meningococcemia - rapidly fatal infection', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Can be fatal within hours' },
    { sign: 'Difficulty breathing', whyDangerous: 'May indicate pneumonia or other serious respiratory infection', requiredAction: 'emergency-room', timeframe: 'Immediately', whatHappensIfIgnored: 'Respiratory failure' },
    { sign: 'Fever with no clear source lasting more than 5 days', whyDangerous: 'Prolonged fever needs evaluation for underlying cause', requiredAction: 'primary-care', timeframe: 'Within 24 hours', whatHappensIfIgnored: 'May miss treatable condition' },
  ],

  whatToExpectAtCare: [
    {
      careLevel: 'primary-care',
      whatWillHappen: ['History and examination', 'Possibly rapid tests (strep, flu)', 'Diagnosis and treatment plan', 'Instructions for home care'],
      testsYouMightGet: [
        { test: 'Rapid strep test', purpose: 'Check for strep throat', whatItInvolves: 'Throat swab', resultsTimeframe: 'Minutes' },
        { test: 'Flu test', purpose: 'Check for influenza', whatItInvolves: 'Nose swab', resultsTimeframe: 'Minutes to hours' },
        { test: 'Urinalysis', purpose: 'Check for urinary tract infection', whatItInvolves: 'Urine sample', resultsTimeframe: 'Same day' },
        { test: 'Ear examination', purpose: 'Check for ear infection', whatItInvolves: 'Looking in ears with otoscope', resultsTimeframe: 'Immediate' },
      ],
      treatmentsYouMightReceive: [
        { treatment: 'Antibiotics', purpose: 'If bacterial infection diagnosed', whatToExpect: 'Prescription to fill', possibleSideEffects: ['Stomach upset', 'Diarrhea', 'Rash'] },
        { treatment: 'Supportive care instructions', purpose: 'Manage symptoms at home', whatToExpect: 'Guidance on fever reducers, fluids, rest', possibleSideEffects: [] },
      ],
      questionsTheyWillAsk: ['How high has the fever been?', 'How long has it been going on?', 'Any other symptoms?', 'How is child acting?', 'Is child drinking?', 'Any sick contacts?'],
      whatToBring: ['Temperature log', 'Medication log', 'List of symptoms and timeline'],
      estimatedDuration: '20-30 minutes',
      possibleOutcomes: [
        { outcome: 'Viral illness, supportive care only', likelihood: 'common', nextSteps: ['Home care', 'Return if not improving'] },
        { outcome: 'Bacterial infection, antibiotics prescribed', likelihood: 'possible', nextSteps: ['Fill prescription', 'Complete course', 'Follow up if not improving'] },
        { outcome: 'Needs further testing', likelihood: 'possible', nextSteps: ['Blood work or X-ray', 'May be done same day or referred'] },
      ],
      questionsToAsk: ['What do you think is causing the fever?', 'How long should it last?', 'What should make me worry?', 'When should I bring them back?'],
    },
  ],

  relevantProviders: [
    { providerType: 'pediatrics', whenToSee: 'Primary evaluation of fever', whatTheyDo: 'Diagnose cause, treat bacterial infections, guide care', howToGetReferral: 'Established PCP', questionsToAsk: ['What\'s causing this?', 'Does my child need antibiotics?'], redFlagsForThisSpecialty: ['Prolonged fever', 'Sick appearance', 'Not responding to treatment'] },
    { providerType: 'pediatric-infectious-disease', whenToSee: 'Unusual infections, prolonged fever without source', whatTheyDo: 'Diagnose difficult infections, guide complex treatment', howToGetReferral: 'Pediatrician referral', questionsToAsk: ['What could cause persistent fever?'], redFlagsForThisSpecialty: ['Fever of unknown origin', 'Recurrent infections'] },
  ],

  relatedConditions: ['viral-uri', 'ear-infection', 'strep-throat', 'pneumonia', 'urinary-tract-infection'],

  commonMisconceptions: [
    { misconception: 'The higher the fever, the sicker the child', truth: 'How the child looks and acts is much more important than the number on the thermometer. A child with 101°F who is listless is more concerning than one with 104°F who is playing.', whyItMatters: 'Parents may panic about high numbers or ignore sick-appearing child with lower fever' },
    { misconception: 'Fever causes brain damage', truth: 'Fever from infection does not cause brain damage. The body naturally limits fever. Brain damage from fever only occurs with heatstroke (external cause) or temperatures over 107°F.', whyItMatters: 'Unnecessary panic and aggressive treatment' },
    { misconception: 'You must treat every fever with medication', truth: 'Fever is the body fighting infection. Treatment is for comfort. If child is comfortable, drinking, and not too fussy, fever reducers are optional.', whyItMatters: 'Over-treatment and unnecessary worry' },
    { misconception: 'Cold baths or alcohol rubs help fever', truth: 'These are dangerous and can cause shivering (which raises temperature) or alcohol poisoning. Lukewarm water only.', whyItMatters: 'Dangerous practices' },
    { misconception: 'Teething causes high fever', truth: 'Teething may cause low-grade temperature (up to 100.4°F) but does not cause true fever. Fever with teething should be evaluated for other causes.', whyItMatters: 'May miss true infection' },
  ],
};

// =============================================================================
// DATABASE EXPORTS
// =============================================================================

export const PEDIATRIC_SCENARIOS = {
  'developmental-milestones-0-6mo': DEVELOPMENTAL_MILESTONES_0_6_MONTHS,
  'down-syndrome-newborn-care': DOWN_SYNDROME_NEWBORN_CARE,
  'childhood-fever': CHILDHOOD_FEVER,
};

export function getPediatricScenario(id: string) {
  return PEDIATRIC_SCENARIOS[id as keyof typeof PEDIATRIC_SCENARIOS] || null;
}

export function getAllPediatricScenarios() {
  return Object.values(PEDIATRIC_SCENARIOS);
}

export function searchPediatricScenarios(keyword: string) {
  const lowerKeyword = keyword.toLowerCase();
  return Object.values(PEDIATRIC_SCENARIOS).filter(scenario =>
    scenario.keywords.some((k: string) => k.toLowerCase().includes(lowerKeyword)) ||
    scenario.title.toLowerCase().includes(lowerKeyword)
  );
}
