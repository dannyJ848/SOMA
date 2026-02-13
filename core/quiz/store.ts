/**
 * Self-Assessment Quiz Store
 *
 * In-memory data store for quiz questions, sessions,
 * performance tracking, and adaptive difficulty.
 */

import type {
  QuizQuestion,
  QuestionExplanation,
  UserAnswer,
  QuizSession,
  QuizScore,
  QuizConfig,
  QuestionBankEntry,
  TopicPerformance,
  QuizHistoryEntry,
  WeakAreaRecommendation,
  SpacedRepetitionItem,
  QuizState,
  ContentDomain,
  DifficultyLevel,
} from './types';

/**
 * Sample quiz questions for cardiovascular system
 */
const cardiovascularQuestions: QuizQuestion[] = [
  {
    questionId: 'q-cv-001',
    domain: 'anatomy',
    type: 'structure-identification',
    format: 'multiple-choice',
    system: 'cardiovascular',
    difficulty: 1,
    questionText: 'Which valve separates the left atrium from the left ventricle?',
    choices: [
      {
        choiceId: 'a',
        text: 'Mitral valve (bicuspid valve)',
        isCorrect: true,
        explanation: 'The mitral valve has 2 leaflets and is the left atrioventricular valve.',
      },
      {
        choiceId: 'b',
        text: 'Tricuspid valve',
        isCorrect: false,
        explanation: 'The tricuspid valve is the right atrioventricular valve.',
      },
      {
        choiceId: 'c',
        text: 'Aortic valve',
        isCorrect: false,
        explanation: 'The aortic valve separates the left ventricle from the aorta.',
      },
      {
        choiceId: 'd',
        text: 'Pulmonary valve',
        isCorrect: false,
        explanation: 'The pulmonary valve separates the right ventricle from the pulmonary artery.',
      },
    ],
    correctAnswer: 'a',
    explanation: {
      brief: 'The mitral (bicuspid) valve is the left AV valve.',
      detailed:
        'The mitral valve, also called the bicuspid valve, has two leaflets (anterior and posterior) and prevents backflow from the left ventricle into the left atrium during systole. It is supported by chordae tendineae attached to papillary muscles.',
      clinicalRelevance:
        'Mitral valve disease (stenosis or regurgitation) is common in rheumatic heart disease. Mitral valve prolapse affects 2-3% of the population.',
      mnemonicTip: '"Left has Less" - Left side has 2 leaflets (bi), Right has 3 (tri)',
      relatedConcepts: ['heart valves', 'cardiac cycle', 'rheumatic heart disease'],
    },
    tags: ['valves', 'anatomy', 'heart'],
    relatedTopicIds: ['heart-anatomy', 'cardiac-cycle'],
  },
  {
    questionId: 'q-cv-002',
    domain: 'physiology',
    type: 'sequence-ordering',
    format: 'ordering',
    system: 'cardiovascular',
    difficulty: 2,
    questionText:
      'Arrange the cardiac conduction pathway in correct sequence: AV node, SA node, Purkinje fibers, Bundle of His, Bundle branches',
    correctAnswer: 'SA node, AV node, Bundle of His, Bundle branches, Purkinje fibers',
    explanation: {
      brief: 'SA node → AV node → Bundle of His → Bundle branches → Purkinje fibers',
      detailed:
        'The cardiac conduction system initiates at the SA node (pacemaker, 60-100 bpm), travels through atrial tissue to the AV node (40-60 bpm), then through the Bundle of His which penetrates the fibrous skeleton, divides into right and left bundle branches, and terminates in Purkinje fibers (20-40 bpm) for rapid ventricular depolarization.',
      clinicalRelevance:
        'Blocks at different levels cause characteristic arrhythmias: SA block, AV blocks (1st, 2nd, 3rd degree), and bundle branch blocks with characteristic ECG patterns.',
      mnemonicTip: '"Some Awesome Bunnies Have Paws" - SA, AV, Bundle (His), Bundle branches, Purkinje',
      relatedConcepts: ['ECG', 'arrhythmias', 'heart blocks'],
    },
    tags: ['conduction', 'physiology', 'heart'],
    relatedTopicIds: ['cardiac-conduction', 'ecg-basics'],
  },
  {
    questionId: 'q-cv-003',
    domain: 'physiology',
    type: 'process-mechanism',
    format: 'multiple-choice',
    system: 'cardiovascular',
    difficulty: 3,
    questionText:
      'During which phase of the cardiac cycle is the mitral valve open and the aortic valve closed?',
    choices: [
      {
        choiceId: 'a',
        text: 'Ventricular filling (diastole)',
        isCorrect: true,
        explanation: 'During diastole, AV valves open and semilunar valves close.',
      },
      {
        choiceId: 'b',
        text: 'Isovolumetric contraction',
        isCorrect: false,
        explanation: 'During isovolumetric contraction, all valves are closed.',
      },
      {
        choiceId: 'c',
        text: 'Ventricular ejection',
        isCorrect: false,
        explanation: 'During ejection, semilunar valves are open and AV valves are closed.',
      },
      {
        choiceId: 'd',
        text: 'Isovolumetric relaxation',
        isCorrect: false,
        explanation: 'During isovolumetric relaxation, all valves are closed.',
      },
    ],
    correctAnswer: 'a',
    explanation: {
      brief: 'Diastole: AV valves open, semilunar valves closed.',
      detailed:
        'Ventricular filling occurs during diastole when ventricular pressure is lower than atrial pressure. The mitral and tricuspid valves open allowing blood to flow from atria to ventricles. The aortic and pulmonary valves remain closed because ventricular pressure is lower than arterial pressure.',
      clinicalRelevance:
        'Diastolic dysfunction (impaired filling) is common in heart failure with preserved ejection fraction (HFpEF). The E/A ratio on echocardiography assesses diastolic function.',
      relatedConcepts: ['cardiac cycle', 'preload', 'ventricular compliance'],
    },
    tags: ['cardiac-cycle', 'physiology', 'valves'],
    relatedTopicIds: ['cardiac-cycle', 'heart-sounds'],
  },
  {
    questionId: 'q-cv-004',
    domain: 'clinical-integration',
    type: 'clinical-presentation',
    format: 'multiple-choice',
    system: 'cardiovascular',
    difficulty: 4,
    questionText:
      'A patient presents with chest pain radiating to the left arm and jaw. Which coronary artery is most likely occluded if ECG shows ST elevation in leads II, III, and aVF?',
    choices: [
      {
        choiceId: 'a',
        text: 'Right coronary artery (RCA)',
        isCorrect: true,
        explanation: 'Inferior leads (II, III, aVF) indicate inferior MI, usually from RCA.',
      },
      {
        choiceId: 'b',
        text: 'Left anterior descending (LAD)',
        isCorrect: false,
        explanation: 'LAD occlusion typically causes anterior MI (V1-V4 changes).',
      },
      {
        choiceId: 'c',
        text: 'Left circumflex (LCx)',
        isCorrect: false,
        explanation: 'LCx typically causes lateral MI (I, aVL, V5-V6 changes).',
      },
      {
        choiceId: 'd',
        text: 'Left main coronary artery',
        isCorrect: false,
        explanation: 'Left main occlusion causes massive anterior and lateral changes.',
      },
    ],
    correctAnswer: 'a',
    explanation: {
      brief: 'Inferior MI (II, III, aVF) = RCA occlusion in most patients.',
      detailed:
        'The right coronary artery supplies the inferior wall of the left ventricle in approximately 80-85% of people (right dominant circulation). ST elevation in the inferior leads (II, III, aVF) with reciprocal ST depression in lateral leads suggests inferior STEMI, most commonly from RCA occlusion.',
      clinicalRelevance:
        'Inferior MI can be associated with right ventricular infarction (check V4R) and bradycardia/heart blocks due to RCA supply to the SA and AV nodes. Avoid nitroglycerin if RV infarct suspected.',
      mnemonicTip:
        '"RCA = Right + infeRioR" - RCA supplies the inferior wall',
      relatedConcepts: ['coronary anatomy', 'STEMI', 'ECG interpretation'],
    },
    tags: ['clinical', 'MI', 'ECG', 'coronary'],
    relatedTopicIds: ['coronary-circulation', 'ecg-stemi', 'chest-pain'],
  },
  {
    questionId: 'q-cv-005',
    domain: 'physiology',
    type: 'process-mechanism',
    format: 'free-response',
    system: 'cardiovascular',
    difficulty: 5,
    questionText:
      'Explain the Frank-Starling mechanism and how it relates to preload and cardiac output. Include the molecular basis.',
    correctAnswer:
      'The Frank-Starling mechanism states that increased ventricular filling (preload) leads to increased stroke volume. Molecularly, stretching of sarcomeres increases the sensitivity of troponin C to calcium and optimizes actin-myosin overlap for force generation.',
    explanation: {
      brief:
        'Increased preload → increased stretch → increased stroke volume (intrinsic cardiac compensation).',
      detailed:
        'The Frank-Starling mechanism is an intrinsic property of cardiac muscle: when the ventricle is stretched by increased blood volume (preload), it contracts more forcefully. At the molecular level: (1) Stretching sarcomeres toward optimal length (~2.2 μm) improves actin-myosin overlap, (2) Stretch increases troponin C sensitivity to calcium (length-dependent activation), (3) Titin, the giant elastic protein, contributes to passive tension and may enhance active force. This mechanism operates without neural or hormonal input and helps match cardiac output to venous return.',
      clinicalRelevance:
        'In heart failure, the Starling curve is flattened and shifted right - the heart cannot generate adequate output despite elevated preload. Diuretics reduce preload to move patients to a more favorable point on their curve.',
      relatedConcepts: ['preload', 'cardiac output', 'heart failure', 'sarcomere'],
    },
    tags: ['physiology', 'cardiac-output', 'molecular'],
    relatedTopicIds: ['cardiac-physiology', 'heart-failure', 'muscle-physiology'],
  },
];

/**
 * Sample quiz questions for nervous system
 */
const nervousQuestions: QuizQuestion[] = [
  {
    questionId: 'q-ns-001',
    domain: 'anatomy',
    type: 'structure-identification',
    format: 'multiple-choice',
    system: 'nervous',
    difficulty: 1,
    questionText: 'Which lobe of the brain is primarily responsible for processing visual information?',
    choices: [
      {
        choiceId: 'a',
        text: 'Occipital lobe',
        isCorrect: true,
        explanation: 'The occipital lobe contains the primary visual cortex (V1).',
      },
      {
        choiceId: 'b',
        text: 'Temporal lobe',
        isCorrect: false,
        explanation: 'Temporal lobe processes auditory information and memory.',
      },
      {
        choiceId: 'c',
        text: 'Parietal lobe',
        isCorrect: false,
        explanation: 'Parietal lobe processes sensory information and spatial awareness.',
      },
      {
        choiceId: 'd',
        text: 'Frontal lobe',
        isCorrect: false,
        explanation: 'Frontal lobe handles executive function, motor control, and personality.',
      },
    ],
    correctAnswer: 'a',
    explanation: {
      brief: 'Occipital lobe = vision.',
      detailed:
        'The occipital lobe, located at the posterior aspect of the brain, contains the primary visual cortex (Brodmann area 17/V1) which receives input from the lateral geniculate nucleus of the thalamus via the optic radiations. Visual association areas (V2-V5) process features like color, motion, and object recognition.',
      clinicalRelevance:
        'Occipital lobe damage can cause cortical blindness, visual field defects (hemianopia), or visual agnosia depending on the specific area affected.',
      mnemonicTip: '"O" for Occipital, "O" for Optic/visual',
      relatedConcepts: ['visual pathway', 'cerebral cortex', 'optic radiations'],
    },
    tags: ['anatomy', 'brain', 'vision'],
    relatedTopicIds: ['cerebral-lobes', 'visual-pathway'],
  },
  {
    questionId: 'q-ns-002',
    domain: 'physiology',
    type: 'process-mechanism',
    format: 'multiple-choice',
    system: 'nervous',
    difficulty: 2,
    questionText:
      'Which neurotransmitter is primarily deficient in Parkinson\'s disease?',
    choices: [
      {
        choiceId: 'a',
        text: 'Dopamine',
        isCorrect: true,
        explanation: 'Loss of dopaminergic neurons in substantia nigra causes Parkinson\'s.',
      },
      {
        choiceId: 'b',
        text: 'Acetylcholine',
        isCorrect: false,
        explanation: 'Acetylcholine deficiency is seen in Alzheimer\'s disease.',
      },
      {
        choiceId: 'c',
        text: 'Serotonin',
        isCorrect: false,
        explanation: 'Serotonin imbalance is associated with depression.',
      },
      {
        choiceId: 'd',
        text: 'GABA',
        isCorrect: false,
        explanation: 'GABA deficiency is associated with seizures and anxiety.',
      },
    ],
    correctAnswer: 'a',
    explanation: {
      brief: 'Parkinson\'s = dopamine deficiency from substantia nigra degeneration.',
      detailed:
        'Parkinson\'s disease results from progressive loss of dopaminergic neurons in the substantia nigra pars compacta. These neurons project to the striatum (nigrostriatal pathway) and are essential for motor control. Symptoms appear when >60-80% of neurons are lost. The remaining dopamine is insufficient to properly modulate the basal ganglia circuits.',
      clinicalRelevance:
        'Treatment includes L-DOPA (dopamine precursor), dopamine agonists, MAO-B inhibitors, and COMT inhibitors. Deep brain stimulation of the subthalamic nucleus is used for advanced cases.',
      mnemonicTip:
        '"TRAP" symptoms: Tremor (resting), Rigidity, Akinesia/bradykinesia, Postural instability',
      relatedConcepts: ['basal ganglia', 'substantia nigra', 'movement disorders'],
    },
    tags: ['neurotransmitter', 'pathology', 'movement'],
    relatedTopicIds: ['basal-ganglia', 'parkinsons', 'dopamine'],
  },
  {
    questionId: 'q-ns-003',
    domain: 'anatomy',
    type: 'location-relationship',
    format: 'multiple-choice',
    system: 'nervous',
    difficulty: 3,
    questionText:
      'A patient cannot abduct their eye (look laterally). Which cranial nerve is most likely affected?',
    choices: [
      {
        choiceId: 'a',
        text: 'CN VI (Abducens)',
        isCorrect: true,
        explanation: 'CN VI innervates lateral rectus - the "abductor" of the eye.',
      },
      {
        choiceId: 'b',
        text: 'CN III (Oculomotor)',
        isCorrect: false,
        explanation: 'CN III controls most eye movements but not abduction.',
      },
      {
        choiceId: 'c',
        text: 'CN IV (Trochlear)',
        isCorrect: false,
        explanation: 'CN IV innervates superior oblique - depression in adduction.',
      },
      {
        choiceId: 'd',
        text: 'CN II (Optic)',
        isCorrect: false,
        explanation: 'CN II is sensory - carries visual information.',
      },
    ],
    correctAnswer: 'a',
    explanation: {
      brief: 'CN VI (Abducens) innervates lateral rectus = abduction.',
      detailed:
        'The abducens nerve (CN VI) has the longest intracranial course and innervates only the lateral rectus muscle, which abducts the eye (moves it laterally). The nerve exits from the pontomedullary junction and travels through the cavernous sinus before entering the orbit.',
      clinicalRelevance:
        'CN VI palsy causes horizontal diplopia worse at distance and medial deviation of the affected eye. Due to its long course, it\'s often the first cranial nerve affected by increased intracranial pressure (false localizing sign).',
      mnemonicTip:
        '"LR6SO4" - Lateral Rectus = CN 6, Superior Oblique = CN 4 (rest = CN 3)',
      relatedConcepts: ['cranial nerves', 'extraocular muscles', 'diplopia'],
    },
    tags: ['cranial-nerves', 'eye-movement', 'anatomy'],
    relatedTopicIds: ['cranial-nerves', 'extraocular-muscles'],
  },
];

/**
 * Sample quiz questions for respiratory system
 */
const respiratoryQuestions: QuizQuestion[] = [
  {
    questionId: 'q-rs-001',
    domain: 'anatomy',
    type: 'structure-identification',
    format: 'multiple-choice',
    system: 'respiratory',
    difficulty: 2,
    questionText: 'Where does gas exchange primarily occur in the lungs?',
    choices: [
      {
        choiceId: 'a',
        text: 'Alveoli',
        isCorrect: true,
        explanation: 'Alveoli have thin walls and extensive capillary networks for gas exchange.',
      },
      {
        choiceId: 'b',
        text: 'Bronchioles',
        isCorrect: false,
        explanation: 'Bronchioles conduct air but have minimal gas exchange.',
      },
      {
        choiceId: 'c',
        text: 'Bronchi',
        isCorrect: false,
        explanation: 'Bronchi are conducting airways, not respiratory.',
      },
      {
        choiceId: 'd',
        text: 'Trachea',
        isCorrect: false,
        explanation: 'The trachea is a conducting airway only.',
      },
    ],
    correctAnswer: 'a',
    explanation: {
      brief: 'Alveoli = site of gas exchange in the lungs.',
      detailed:
        'The alveoli are tiny air sacs (approximately 300 million in adult lungs) where oxygen and carbon dioxide are exchanged between air and blood. The blood-air barrier is extremely thin (~0.5 μm), composed of type I pneumocytes, fused basement membrane, and capillary endothelium. Total surface area is ~70 m².',
      clinicalRelevance:
        'Diseases affecting alveoli (pneumonia, ARDS, pulmonary fibrosis) impair gas exchange and cause hypoxemia. Type II pneumocytes produce surfactant; their dysfunction leads to respiratory distress syndrome.',
      mnemonicTip: '"A" for Alveoli, "A" for Air exchange',
      relatedConcepts: ['pulmonary circulation', 'surfactant', 'V/Q matching'],
    },
    tags: ['anatomy', 'gas-exchange', 'lungs'],
    relatedTopicIds: ['lung-anatomy', 'gas-exchange'],
  },
  {
    questionId: 'q-rs-002',
    domain: 'physiology',
    type: 'process-mechanism',
    format: 'multiple-choice',
    system: 'respiratory',
    difficulty: 3,
    questionText:
      'Which form of hemoglobin has a higher affinity for oxygen: R-state or T-state?',
    choices: [
      {
        choiceId: 'a',
        text: 'R-state (relaxed)',
        isCorrect: true,
        explanation: 'R-state has high O2 affinity; T-state has low affinity.',
      },
      {
        choiceId: 'b',
        text: 'T-state (tense)',
        isCorrect: false,
        explanation: 'T-state is the deoxy form with low oxygen affinity.',
      },
      {
        choiceId: 'c',
        text: 'Both have equal affinity',
        isCorrect: false,
        explanation: 'The conformational states have very different affinities.',
      },
      {
        choiceId: 'd',
        text: 'Affinity depends on pH only',
        isCorrect: false,
        explanation: 'pH affects the T/R equilibrium but doesn\'t determine base affinity.',
      },
    ],
    correctAnswer: 'a',
    explanation: {
      brief: 'R-state (relaxed) = high O2 affinity; T-state (tense) = low O2 affinity.',
      detailed:
        'Hemoglobin exists in two quaternary conformations: T-state (tense, deoxy) with low oxygen affinity, and R-state (relaxed, oxy) with high oxygen affinity. Oxygen binding shifts equilibrium toward R-state (cooperative binding), explaining the sigmoidal oxygen-hemoglobin dissociation curve. The T→R transition involves rotation of the αβ dimers.',
      clinicalRelevance:
        'Factors shifting curve right (favoring T-state): increased H+, CO2, temperature, 2,3-BPG. This Bohr effect facilitates O2 release at tissues. Fetal hemoglobin (HbF) has higher O2 affinity because γ chains don\'t bind 2,3-BPG well.',
      mnemonicTip:
        '"R = Relaxed = Ready to grab oxygen" at the lungs',
      relatedConcepts: ['oxygen dissociation curve', 'Bohr effect', 'cooperative binding'],
    },
    tags: ['physiology', 'hemoglobin', 'gas-transport'],
    relatedTopicIds: ['oxygen-transport', 'hemoglobin-function'],
  },
];

/**
 * All sample questions
 */
export const sampleQuestions: QuizQuestion[] = [
  ...cardiovascularQuestions,
  ...nervousQuestions,
  ...respiratoryQuestions,
];

/**
 * Generate a unique ID
 */
function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Initialize empty quiz score
 */
function initializeScore(): QuizScore {
  return {
    correct: 0,
    incorrect: 0,
    skipped: 0,
    total: 0,
    percentage: 0,
    byDomain: new Map(),
    bySystem: new Map(),
    byDifficulty: new Map(),
    byType: new Map(),
  };
}

/**
 * Get initial quiz state
 */
export function getInitialQuizState(): QuizState {
  const questionBank = new Map<string, QuestionBankEntry>();
  sampleQuestions.forEach((q) => {
    questionBank.set(q.questionId, {
      question: q,
      timesAsked: 0,
      timesCorrect: 0,
      averageTime: 0,
      userDifficulty: q.difficulty,
      successRate: 0,
      tags: q.tags,
    });
  });

  return {
    currentSession: null,
    questionBank,
    topicPerformance: new Map(),
    domainPerformance: new Map(),
    history: [],
    statistics: {
      totalQuizzes: 0,
      totalQuestions: 0,
      overallAccuracy: 0,
      averageQuizDuration: 0,
      streakDays: 0,
      bestStreak: 0,
      lastActivityDate: new Date(),
      performanceByDomain: new Map(),
      performanceBySystem: new Map(),
      performanceByType: new Map(),
      performanceByDifficulty: new Map(),
      recentTrend: 'stable',
      weeklyAccuracy: [],
      monthlyAccuracy: [],
      weakAreas: [],
      strongAreas: [],
      averageTimePerQuestion: 0,
      fastestCategory: 'anatomy',
      slowestCategory: 'anatomy',
    },
    spacedRepetition: new Map(),
    decks: new Map(),
    flashcards: new Map(),
    isLoaded: true,
    isLoading: false,
    settings: {
      defaultDifficulty: 2,
      defaultQuestionCount: 10,
      showTimer: true,
      soundEffects: false,
      hapticFeedback: false,
      darkModeQuiz: false,
      autoAdvance: false,
      reviewMistakes: true,
      dailyGoal: 10,
    },
  };
}

/**
 * Create a new quiz session
 */
export function createQuizSession(
  config: QuizConfig,
  questionBank: Map<string, QuestionBankEntry>,
  topicPerformance: Map<string, TopicPerformance>
): QuizSession {
  const selectedQuestions = selectQuestions(config, questionBank, topicPerformance);

  const session: QuizSession = {
    sessionId: generateId('quiz'),
    userId: 'user-default',
    config,
    title: generateQuizTitle(config),
    questions: selectedQuestions,
    answers: [],
    currentQuestionIndex: 0,
    status: 'not-started',
    startedAt: new Date(),
    totalTime: 0,
    score: initializeScore(),
    currentDifficulty: config.difficulty,
  };

  return session;
}

/**
 * Generate quiz title based on config
 */
function generateQuizTitle(config: QuizConfig): string {
  const systemNames = config.systems
    .map((s) =>
      s
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    )
    .join(', ');

  return `${systemNames} Quiz - Level ${config.difficulty}`;
}

/**
 * Select questions based on config and performance
 */
function selectQuestions(
  config: QuizConfig,
  questionBank: Map<string, QuestionBankEntry>,
  _topicPerformance: Map<string, TopicPerformance>
): QuizQuestion[] {
  let candidates = Array.from(questionBank.values())
    .filter((entry) => config.systems.includes(entry.question.system))
    .filter((entry) =>
      config.questionTypes.length === 0 ||
      config.questionTypes.includes(entry.question.type)
    );

  // Filter by difficulty range (±1 from target)
  candidates = candidates.filter(
    (entry) =>
      entry.question.difficulty >= config.difficulty - 1 &&
      entry.question.difficulty <= config.difficulty + 1
  );

  // If focusing on weak areas, prioritize questions with low accuracy
  if (config.focusOnWeakAreas) {
    candidates.sort((a, b) => {
      const aAccuracy =
        a.timesAsked > 0 ? a.timesCorrect / a.timesAsked : 0.5;
      const bAccuracy =
        b.timesAsked > 0 ? b.timesCorrect / b.timesAsked : 0.5;
      return aAccuracy - bAccuracy;
    });
  } else {
    // Shuffle for variety
    candidates.sort(() => Math.random() - 0.5);
  }

  // Select requested number of questions
  return candidates.slice(0, config.questionCount).map((entry) => entry.question);
}

/**
 * Start a quiz session
 */
export function startQuizSession(session: QuizSession): QuizSession {
  return {
    ...session,
    status: 'in-progress',
    startedAt: new Date(),
  };
}

/**
 * Submit an answer to the current question
 */
export function submitAnswer(
  session: QuizSession,
  answer: string,
  timeTaken: number,
  confidenceLevel?: 1 | 2 | 3 | 4 | 5
): { session: QuizSession; isCorrect: boolean } {
  const currentQuestion = session.questions[session.currentQuestionIndex];
  const isCorrect = checkAnswer(currentQuestion, answer);

  const userAnswer: UserAnswer = {
    questionId: currentQuestion.questionId,
    answer,
    isCorrect,
    timeTaken,
    answeredAt: new Date(),
    confidenceLevel,
  };

  const updatedAnswers = [...session.answers, userAnswer];
  const updatedScore = calculateScore(session.questions, updatedAnswers);

  const updatedSession: QuizSession = {
    ...session,
    answers: updatedAnswers,
    currentQuestionIndex: session.currentQuestionIndex + 1,
    score: updatedScore,
    totalTime: session.totalTime + timeTaken,
  };

  // Check if quiz is complete
  if (updatedSession.currentQuestionIndex >= session.questions.length) {
    updatedSession.status = 'completed';
    updatedSession.completedAt = new Date();
  }

  return { session: updatedSession, isCorrect };
}

/**
 * Check if an answer is correct
 */
function checkAnswer(question: QuizQuestion, answer: string): boolean {
  const correctAnswer = question.correctAnswer;

  // Handle string[] correctAnswer by joining or checking inclusion
  const getCorrectAnswerString = (): string => {
    if (Array.isArray(correctAnswer)) {
      return correctAnswer.join(', ');
    }
    return correctAnswer;
  };

  if (question.format === 'multiple-choice') {
    const correct = getCorrectAnswerString();
    return answer.toLowerCase() === correct.toLowerCase();
  }

  if (question.format === 'free-response') {
    // Simple keyword matching for free response
    const correct = getCorrectAnswerString();
    const correctKeywords = correct.toLowerCase().split(/\s+/);
    const answerKeywords = answer.toLowerCase().split(/\s+/);
    const matchedKeywords = correctKeywords.filter((kw: string) =>
      answerKeywords.some((aw) => aw.includes(kw) || kw.includes(aw))
    );
    return matchedKeywords.length >= correctKeywords.length * 0.5;
  }

  if (question.format === 'ordering') {
    const correct = getCorrectAnswerString();
    return answer.toLowerCase() === correct.toLowerCase();
  }

  const correct = getCorrectAnswerString();
  return answer === correct;
}

/**
 * Calculate quiz score
 */
function calculateScore(
  questions: QuizQuestion[],
  answers: UserAnswer[]
): QuizScore {
  const score = initializeScore();

  for (const answer of answers) {
    const question = questions.find((q) => q.questionId === answer.questionId);
    if (!question) continue;

    score.total++;
    if (answer.isCorrect) {
      score.correct++;
    } else {
      score.incorrect++;
    }

    // By domain
    const domainScore = score.byDomain.get(question.domain) || { correct: 0, total: 0 };
    domainScore.total++;
    if (answer.isCorrect) domainScore.correct++;
    score.byDomain.set(question.domain, domainScore);

    // By system
    const systemScore = score.bySystem.get(question.system) || { correct: 0, total: 0 };
    systemScore.total++;
    if (answer.isCorrect) systemScore.correct++;
    score.bySystem.set(question.system, systemScore);

    // By difficulty
    const diffScore = score.byDifficulty.get(question.difficulty) || { correct: 0, total: 0 };
    diffScore.total++;
    if (answer.isCorrect) diffScore.correct++;
    score.byDifficulty.set(question.difficulty, diffScore);

    // By type
    const typeScore = score.byType.get(question.type) || { correct: 0, total: 0 };
    typeScore.total++;
    if (answer.isCorrect) typeScore.correct++;
    score.byType.set(question.type, typeScore);
  }

  score.percentage = score.total > 0 ? (score.correct / score.total) * 100 : 0;

  return score;
}

/**
 * Get current question
 */
export function getCurrentQuestion(session: QuizSession): QuizQuestion | null {
  if (session.currentQuestionIndex >= session.questions.length) {
    return null;
  }
  return session.questions[session.currentQuestionIndex];
}

/**
 * Get review of incorrect answers
 */
export function getIncorrectAnswersReview(
  session: QuizSession
): { question: QuizQuestion; userAnswer: string | string[]; explanation: QuestionExplanation }[] {
  return session.answers
    .filter((a) => !a.isCorrect)
    .map((a) => {
      const question = session.questions.find((q) => q.questionId === a.questionId)!;
      return {
        question,
        userAnswer: a.answer,
        explanation: question.explanation,
      };
    });
}

/**
 * Identify weak areas from performance
 */
export function identifyWeakAreas(
  topicPerformance: Map<string, TopicPerformance>
): WeakAreaRecommendation[] {
  const weakAreas: WeakAreaRecommendation[] = [];

  for (const [, perf] of topicPerformance) {
    if (perf.questionsAttempted >= 3 && perf.accuracy < 0.6) {
      let priority: 'high' | 'medium' | 'low' = 'low';
      if (perf.accuracy < 0.3) priority = 'high';
      else if (perf.accuracy < 0.5) priority = 'medium';

      weakAreas.push({
        topicId: perf.topicId,
        topicName: perf.topicName,
        domain: perf.domain,
        system: perf.system,
        accuracy: perf.accuracy,
        questionCount: perf.questionsAttempted,
        priority,
        suggestedAction:
          priority === 'high'
            ? 'Review fundamental concepts before attempting more questions'
            : priority === 'medium'
              ? 'Practice with easier questions first'
              : 'Continue practicing with adaptive difficulty',
      });
    }
  }

  return weakAreas.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

/**
 * Update question bank with answer result
 */
export function updateQuestionBankAfterAnswer(
  questionBank: Map<string, QuestionBankEntry>,
  questionId: string,
  isCorrect: boolean,
  timeTaken: number
): void {
  const entry = questionBank.get(questionId);
  if (!entry) return;

  entry.timesAsked++;
  if (isCorrect) entry.timesCorrect++;
  entry.averageTime =
    (entry.averageTime * (entry.timesAsked - 1) + timeTaken) / entry.timesAsked;
  entry.lastAsked = new Date();

  // Adjust user difficulty based on performance
  if (isCorrect && timeTaken < 30000) {
    entry.userDifficulty = Math.max(1, entry.userDifficulty - 0.1);
  } else if (!isCorrect) {
    entry.userDifficulty = Math.min(5, entry.userDifficulty + 0.2);
  }
}

/**
 * Calculate spaced repetition interval (SM-2 algorithm simplified)
 */
export function calculateSpacedRepetitionInterval(
  item: SpacedRepetitionItem,
  quality: number // 0-5, where 5 is perfect recall
): SpacedRepetitionItem {
  let { easeFactor, interval, repetitions } = item;

  if (quality >= 3) {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions++;
  } else {
    repetitions = 0;
    interval = 1;
  }

  easeFactor = Math.max(
    1.3,
    easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  );

  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    ...item,
    easeFactor,
    interval,
    repetitions,
    nextReviewDate,
    lastReviewDate: new Date(),
  };
}

/**
 * Get questions due for review (spaced repetition)
 */
export function getDueForReview(
  spacedRepetition: Map<string, SpacedRepetitionItem>,
  questionBank: Map<string, QuestionBankEntry>
): QuizQuestion[] {
  const now = new Date();
  const dueQuestions: QuizQuestion[] = [];

  for (const [questionId, item] of spacedRepetition) {
    if (item.nextReviewDate <= now) {
      const entry = questionBank.get(questionId);
      if (entry) {
        dueQuestions.push(entry.question);
      }
    }
  }

  return dueQuestions;
}

/**
 * Create history entry from completed session
 */
export function createHistoryEntry(session: QuizSession): QuizHistoryEntry {
  return {
    sessionId: session.sessionId,
    title: session.title,
    config: session.config,
    completedAt: session.completedAt || new Date(),
    score: session.score,
    duration: session.totalTime,
    domains: session.config.domains,
    systems: session.config.systems,
    difficulty: session.config.difficulty,
    questionCount: session.questions.length,
  };
}
