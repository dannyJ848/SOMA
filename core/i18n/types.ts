/**
 * Internationalization Type Definitions
 *
 * Comprehensive typing system for multi-language support in Biological Self.
 * Designed for medical accuracy with proper terminology in all supported languages.
 */

// =============================================================================
// LANGUAGE CONFIGURATION
// =============================================================================

/**
 * Supported language codes (ISO 639-1)
 */
export type SupportedLanguage = 'en' | 'es';

/**
 * Language metadata
 */
export interface LanguageInfo {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  region?: string;
  medicalVariant?: string; // e.g., 'Latin American' for Spanish
}

/**
 * Available languages configuration
 */
export const SUPPORTED_LANGUAGES: Record<SupportedLanguage, LanguageInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    region: 'US',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Espanol',
    direction: 'ltr',
    region: 'Latin America',
    medicalVariant: 'Neutral Latin American Medical Spanish',
  },
};

// =============================================================================
// TRANSLATION KEY STRUCTURES
// =============================================================================

/**
 * UI Translation Keys
 */
export interface UITranslations {
  // Navigation
  navigation: {
    home: string;
    dashboard: string;
    timeline: string;
    body: string;
    bodyMap: string;
    chat: string;
    anatomy: string;
    anatomy3D: string;
    settings: string;
    profile: string;
    back: string;
    forward: string;
    menu: string;
    close: string;
    search: string;
    filter: string;
    sort: string;
  };

  // Common buttons
  buttons: {
    save: string;
    cancel: string;
    confirm: string;
    delete: string;
    edit: string;
    add: string;
    remove: string;
    submit: string;
    reset: string;
    clear: string;
    apply: string;
    done: string;
    next: string;
    previous: string;
    skip: string;
    continue: string;
    finish: string;
    start: string;
    stop: string;
    pause: string;
    resume: string;
    retry: string;
    refresh: string;
    loadMore: string;
    showLess: string;
    showMore: string;
    viewAll: string;
    viewDetails: string;
    learnMore: string;
    getStarted: string;
    tryAgain: string;
    goBack: string;
    yes: string;
    no: string;
    ok: string;
  };

  // Form labels
  forms: {
    required: string;
    optional: string;
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    male: string;
    female: string;
    other: string;
    preferNotToSay: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    notes: string;
    description: string;
    date: string;
    time: string;
    startDate: string;
    endDate: string;
    selectDate: string;
    selectTime: string;
    search: string;
    searchPlaceholder: string;
  };

  // Error messages
  errors: {
    generic: string;
    networkError: string;
    serverError: string;
    notFound: string;
    unauthorized: string;
    forbidden: string;
    timeout: string;
    validationError: string;
    requiredField: string;
    invalidEmail: string;
    invalidPassword: string;
    passwordMismatch: string;
    invalidDate: string;
    invalidFormat: string;
    fileTooLarge: string;
    unsupportedFormat: string;
    loadingFailed: string;
    saveFailed: string;
    deleteFailed: string;
    somethingWentWrong: string;
    tryAgainLater: string;
    noInternetConnection: string;
    sessionExpired: string;
    incorrectPassphrase: string;
    passphraseTooShort: string;
    passphrasesDontMatch: string;
  };

  // Success messages
  success: {
    saved: string;
    deleted: string;
    updated: string;
    created: string;
    sent: string;
    copied: string;
    downloaded: string;
    uploaded: string;
    completed: string;
    submitted: string;
  };

  // Loading states
  loading: {
    loading: string;
    loadingData: string;
    loadingHealthData: string;
    loadingAnatomy: string;
    loadingTimeline: string;
    pleaseWait: string;
    processing: string;
    calculating: string;
    analyzing: string;
    generating: string;
    syncing: string;
  };

  // Empty states
  empty: {
    noData: string;
    noResults: string;
    noResultsFor: string;
    noConditions: string;
    noMedications: string;
    noLabResults: string;
    noSymptoms: string;
    noEvents: string;
    noNotifications: string;
    noMessages: string;
    startByAdding: string;
  };

  // Headers and titles
  headers: {
    welcome: string;
    welcomeBack: string;
    goodMorning: string;
    goodAfternoon: string;
    goodEvening: string;
    yourHealth: string;
    yourHealthUnderstood: string;
    healthSummary: string;
    healthTimeline: string;
    vitalsSummary: string;
    activeConditions: string;
    currentMedications: string;
    recentLabs: string;
    recentSymptoms: string;
    upcomingAppointments: string;
    exploreAndLearn: string;
    quickAccess: string;
    insights: string;
    aiInsights: string;
    recommendations: string;
    alerts: string;
    notifications: string;
  };

  // Time-related
  time: {
    today: string;
    yesterday: string;
    tomorrow: string;
    thisWeek: string;
    lastWeek: string;
    thisMonth: string;
    lastMonth: string;
    thisYear: string;
    lastYear: string;
    ago: string;
    in: string;
    seconds: string;
    minutes: string;
    hours: string;
    days: string;
    weeks: string;
    months: string;
    years: string;
    second: string;
    minute: string;
    hour: string;
    day: string;
    week: string;
    month: string;
    year: string;
    morning: string;
    afternoon: string;
    evening: string;
    night: string;
    daily: string;
    weekly: string;
    monthly: string;
    yearly: string;
    asNeeded: string;
    once: string;
    twice: string;
    everyDay: string;
    everyWeek: string;
    everyMonth: string;
  };

  // Tooltips
  tooltips: {
    clickToExpand: string;
    clickToCollapse: string;
    clickForMore: string;
    dragToReorder: string;
    pressAndHold: string;
    tapToSelect: string;
    swipeToDelete: string;
    pinchToZoom: string;
    rotateToView: string;
    scrollForMore: string;
    copyToClipboard: string;
    shareWith: string;
    bookmark: string;
    favorite: string;
    help: string;
    info: string;
    warning: string;
    danger: string;
  };

  // Accessibility
  accessibility: {
    skipToContent: string;
    mainNavigation: string;
    closeDialog: string;
    openMenu: string;
    expandSection: string;
    collapseSection: string;
    selectedItem: string;
    notSelected: string;
    required: string;
    optional: string;
    loading: string;
    loaded: string;
    error: string;
    success: string;
  };

  // Auth-related
  auth: {
    login: string;
    logout: string;
    signIn: string;
    signOut: string;
    signUp: string;
    createAccount: string;
    forgotPassword: string;
    resetPassword: string;
    changePassword: string;
    enterPassphrase: string;
    confirmPassphrase: string;
    createPassphrase: string;
    unlock: string;
    unlocking: string;
    locked: string;
    secureDatabase: string;
    createSecureDatabase: string;
    encryptedStorage: string;
    localOnly: string;
    youControlYourData: string;
    passphraseHint: string;
    cannotBeRecovered: string;
    clearAndTryAgain: string;
    dataPrivacy: string;
    privacyNotice: string;
  };

  // Onboarding
  onboarding: {
    welcome: string;
    letsGetStarted: string;
    tellUsAboutYourself: string;
    personalizeExperience: string;
    almostDone: string;
    allSet: string;
    skipForNow: string;
    completeSetup: string;
    step: string;
    of: string;
  };

  // Settings
  settings: {
    settings: string;
    preferences: string;
    account: string;
    privacy: string;
    security: string;
    notifications: string;
    language: string;
    theme: string;
    darkMode: string;
    lightMode: string;
    systemDefault: string;
    fontSize: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
    units: string;
    metric: string;
    imperial: string;
    dataManagement: string;
    exportData: string;
    importData: string;
    deleteData: string;
    about: string;
    version: string;
    termsOfService: string;
    privacyPolicy: string;
    licenses: string;
    feedback: string;
    reportBug: string;
    rateApp: string;
  };

  // Complexity levels
  complexity: {
    level: string;
    simple: string;
    basic: string;
    intermediate: string;
    advanced: string;
    expert: string;
    patientFriendly: string;
    medicalStudent: string;
    healthcareProfessional: string;
    selectLevel: string;
    adjustComplexity: string;
    showSimpler: string;
    showMoreDetail: string;
  };

  // App-specific sections
  sections: {
    biologicalSelf: string;
    symptomExplorer: string;
    medicationExplorer: string;
    conditionSimulator: string;
    encyclopedia: string;
    medicalEncyclopedia: string;
    drugInteractions: string;
    treatmentOptions: string;
    diseaseTimeline: string;
    patientEducation: string;
    histologyViewer: string;
    physiologyPanel: string;
    pathologyPanel: string;
    riskCalculators: string;
    clinicalPearls: string;
    quizzes: string;
    learningProgress: string;
  };

  // Explore & Learn
  explore: {
    exploreSymptom: string;
    understandSymptoms: string;
    drugEffects: string;
    howMedicationsWork: string;
    learnCondition: string;
    exploreDisease: string;
    encyclopediaSearch: string;
    medicalKnowledge: string;
    viewInAnatomy: string;
    seeInBody: string;
    relatedTopics: string;
    suggestedReading: string;
  };
}

/**
 * Anatomy Translation Keys
 */
export interface AnatomyTranslations {
  // Body systems
  systems: {
    cardiovascular: SystemTranslation;
    respiratory: SystemTranslation;
    digestive: SystemTranslation;
    nervous: SystemTranslation;
    musculoskeletal: SystemTranslation;
    muscular: SystemTranslation;
    skeletal: SystemTranslation;
    integumentary: SystemTranslation;
    endocrine: SystemTranslation;
    lymphatic: SystemTranslation;
    immune: SystemTranslation;
    urinary: SystemTranslation;
    reproductive: SystemTranslation;
    sensory: SystemTranslation;
  };

  // Body regions
  regions: {
    head: RegionTranslation;
    neck: RegionTranslation;
    chest: RegionTranslation;
    thorax: RegionTranslation;
    abdomen: RegionTranslation;
    pelvis: RegionTranslation;
    back: RegionTranslation;
    spine: RegionTranslation;
    upperExtremity: RegionTranslation;
    lowerExtremity: RegionTranslation;
    arm: RegionTranslation;
    forearm: RegionTranslation;
    hand: RegionTranslation;
    thigh: RegionTranslation;
    leg: RegionTranslation;
    foot: RegionTranslation;
  };

  // Major organs
  organs: Record<string, OrganTranslation>;

  // Anatomical directions
  directions: {
    anterior: DirectionTranslation;
    posterior: DirectionTranslation;
    superior: DirectionTranslation;
    inferior: DirectionTranslation;
    medial: DirectionTranslation;
    lateral: DirectionTranslation;
    proximal: DirectionTranslation;
    distal: DirectionTranslation;
    superficial: DirectionTranslation;
    deep: DirectionTranslation;
    central: DirectionTranslation;
    peripheral: DirectionTranslation;
    ipsilateral: DirectionTranslation;
    contralateral: DirectionTranslation;
    bilateral: DirectionTranslation;
    unilateral: DirectionTranslation;
    dorsal: DirectionTranslation;
    ventral: DirectionTranslation;
    cranial: DirectionTranslation;
    caudal: DirectionTranslation;
    palmar: DirectionTranslation;
    plantar: DirectionTranslation;
  };

  // Anatomical planes
  planes: {
    sagittal: PlaneTranslation;
    midsagittal: PlaneTranslation;
    parasagittal: PlaneTranslation;
    frontal: PlaneTranslation;
    coronal: PlaneTranslation;
    transverse: PlaneTranslation;
    horizontal: PlaneTranslation;
    oblique: PlaneTranslation;
  };

  // Body positions
  positions: {
    anatomical: string;
    supine: string;
    prone: string;
    lateral: string;
    fowler: string;
    trendelenburg: string;
    lithotomy: string;
  };

  // Viewer UI
  viewer: {
    rotate: string;
    zoom: string;
    pan: string;
    reset: string;
    layers: string;
    showAll: string;
    hideAll: string;
    transparency: string;
    highlight: string;
    isolate: string;
    crossSection: string;
    clippingPlane: string;
    anteriorView: string;
    posteriorView: string;
    lateralView: string;
    superiorView: string;
    inferiorView: string;
    selectStructure: string;
    structureInfo: string;
    relatedStructures: string;
  };
}

/**
 * System translation structure
 */
export interface SystemTranslation {
  name: string;
  latinName?: string;
  description: string;
  shortDescription: string;
  mainFunction: string;
  components: string;
}

/**
 * Region translation structure
 */
export interface RegionTranslation {
  name: string;
  latinName?: string;
  description: string;
  containsStructures: string;
}

/**
 * Organ translation structure
 */
export interface OrganTranslation {
  name: string;
  latinName?: string;
  pluralName?: string;
  description: string;
  function: string;
  location: string;
  system: string;
}

/**
 * Direction translation structure
 */
export interface DirectionTranslation {
  term: string;
  latinTerm?: string;
  meaning: string;
  example: string;
  opposite?: string;
}

/**
 * Plane translation structure
 */
export interface PlaneTranslation {
  name: string;
  latinName?: string;
  description: string;
  divides: string;
}

/**
 * Medical Terms Translation Keys
 */
export interface MedicalTranslations {
  // Conditions categories
  conditionCategories: {
    infectious: string;
    autoimmune: string;
    genetic: string;
    metabolic: string;
    cardiovascular: string;
    respiratory: string;
    neurological: string;
    psychiatric: string;
    musculoskeletal: string;
    gastrointestinal: string;
    endocrine: string;
    dermatological: string;
    hematological: string;
    oncological: string;
    renal: string;
    hepatic: string;
    ophthalmological: string;
    otological: string;
    gynecological: string;
    urological: string;
    pediatric: string;
    geriatric: string;
  };

  // Common conditions (key medical terms)
  conditions: Record<string, ConditionTranslation>;

  // Symptoms
  symptoms: Record<string, SymptomTranslation>;

  // Vital signs
  vitalSigns: {
    bloodPressure: VitalSignTranslation;
    heartRate: VitalSignTranslation;
    respiratoryRate: VitalSignTranslation;
    temperature: VitalSignTranslation;
    oxygenSaturation: VitalSignTranslation;
    weight: VitalSignTranslation;
    height: VitalSignTranslation;
    bmi: VitalSignTranslation;
    pulse: VitalSignTranslation;
    hrv: VitalSignTranslation;
    bloodGlucose: VitalSignTranslation;
  };

  // Lab tests
  labTests: Record<string, LabTestTranslation>;

  // Procedures
  procedures: Record<string, ProcedureTranslation>;

  // Medication-related terms
  medication: {
    dosage: string;
    dose: string;
    frequency: string;
    route: string;
    indication: string;
    contraindication: string;
    sideEffect: string;
    adverseEffect: string;
    interaction: string;
    precaution: string;
    warning: string;
    blackBoxWarning: string;
    generic: string;
    brandName: string;
    prescription: string;
    overTheCounter: string;
    refill: string;
    discontinue: string;
    taper: string;
    titrate: string;

    // Routes
    oral: string;
    topical: string;
    intravenous: string;
    intramuscular: string;
    subcutaneous: string;
    sublingual: string;
    rectal: string;
    inhaled: string;
    nasal: string;
    ophthalmic: string;
    otic: string;
    transdermal: string;

    // Frequency terms
    onceDaily: string;
    twiceDaily: string;
    threeTimesDaily: string;
    fourTimesDaily: string;
    everyHours: string;
    asNeeded: string;
    atBedtime: string;
    withMeals: string;
    beforeMeals: string;
    afterMeals: string;
    onEmptyStomach: string;
    withFood: string;
    withoutFood: string;

    // Instructions
    takeWithFood: string;
    takeOnEmptyStomach: string;
    doNotCrush: string;
    doNotChew: string;
    shakeWell: string;
    refrigerate: string;
    keepAwayFromLight: string;
    storeBelowTemperature: string;
    discardAfterOpening: string;
    swallowWhole: string;
    dissolveUnderTongue: string;
    applyThinLayer: string;
    doNotApplyBrokenSkin: string;
  };

  // Clinical findings
  findings: {
    normal: string;
    abnormal: string;
    elevated: string;
    decreased: string;
    low: string;
    high: string;
    critical: string;
    borderline: string;
    stable: string;
    improving: string;
    worsening: string;
    unchanged: string;
    acute: string;
    chronic: string;
    subacute: string;
    intermittent: string;
    persistent: string;
    recurring: string;
    resolving: string;
    resolved: string;
    controlled: string;
    uncontrolled: string;
    mild: string;
    moderate: string;
    severe: string;
    positive: string;
    negative: string;
    reactive: string;
    nonReactive: string;
    present: string;
    absent: string;
    detected: string;
    notDetected: string;
    within_normal_limits: string;
    outside_normal_limits: string;
  };

  // Patient communication phrases
  patientCommunication: {
    youMayExperience: string;
    contactDoctorIf: string;
    seekImmediateCare: string;
    callEmergencyIf: string;
    whenToSeekCare: string;
    commonSideEffects: string;
    seriousSideEffects: string;
    whatToExpect: string;
    howToTake: string;
    importantInformation: string;
    beforeTaking: string;
    whileTaking: string;
    afterTaking: string;
    missedDose: string;
    overdose: string;
    storage: string;
    disposal: string;
    doNotShare: string;
    keepOutOfReach: string;
    talkToDoctor: string;
    talkToPharmacist: string;
    askQuestions: string;
    bringMedicationList: string;
  };

  // Severity levels
  severity: {
    minimal: string;
    mild: string;
    moderate: string;
    moderatelySevere: string;
    severe: string;
    critical: string;
    lifeThreatening: string;
  };

  // Urgency levels
  urgency: {
    routine: string;
    soon: string;
    urgent: string;
    emergent: string;
    stat: string;
    immediately: string;
  };
}

/**
 * Condition translation structure
 */
export interface ConditionTranslation {
  name: string;
  medicalName?: string;
  commonName?: string;
  abbreviation?: string;
  description: string;
  patientDescription: string;
}

/**
 * Symptom translation structure
 */
export interface SymptomTranslation {
  name: string;
  medicalTerm?: string;
  description: string;
  patientDescription: string;
  questions: string[];
}

/**
 * Vital sign translation structure
 */
export interface VitalSignTranslation {
  name: string;
  abbreviation?: string;
  unit: string;
  altUnits?: string[];
  description: string;
  normalRange: string;
}

/**
 * Lab test translation structure
 */
export interface LabTestTranslation {
  name: string;
  abbreviation?: string;
  fullName?: string;
  description: string;
  patientDescription: string;
  unit: string;
  category: string;
}

/**
 * Procedure translation structure
 */
export interface ProcedureTranslation {
  name: string;
  medicalName?: string;
  description: string;
  patientDescription: string;
  preparation?: string;
  recovery?: string;
}

/**
 * Education Translation Keys
 */
export interface EducationTranslations {
  // Complexity level descriptions
  levels: {
    level1: LevelTranslation;
    level2: LevelTranslation;
    level3: LevelTranslation;
    level4: LevelTranslation;
    level5: LevelTranslation;
  };

  // Section headers for education content
  sections: {
    overview: string;
    whatItIs: string;
    howItWorks: string;
    whyItMatters: string;
    causes: string;
    riskFactors: string;
    symptoms: string;
    diagnosis: string;
    treatment: string;
    prevention: string;
    prognosis: string;
    livingWith: string;
    whenToSeekHelp: string;
    questionsToAsk: string;
    relatedTopics: string;
    references: string;
    keyPoints: string;
    summary: string;
    didYouKnow: string;
    commonMisconceptions: string;
    factVsFiction: string;
    expertTips: string;
  };

  // Quiz-related
  quiz: {
    question: string;
    answer: string;
    correct: string;
    incorrect: string;
    explanation: string;
    tryAgain: string;
    nextQuestion: string;
    previousQuestion: string;
    submitAnswer: string;
    checkAnswer: string;
    showAnswer: string;
    hideAnswer: string;
    score: string;
    outOf: string;
    passed: string;
    failed: string;
    complete: string;
    incomplete: string;
    reviewAnswers: string;
    startQuiz: string;
    restartQuiz: string;
    exitQuiz: string;
    timeRemaining: string;
    questionsRemaining: string;
    selectAnswer: string;
    multipleChoice: string;
    trueOrFalse: string;
    fillInBlank: string;
    matching: string;
  };

  // Patient education phrases
  patientEducation: {
    inSimpleTerms: string;
    whatThisMeans: string;
    whyThisMatters: string;
    whatYouCanDo: string;
    importantReminder: string;
    goodToKnow: string;
    askYourDoctor: string;
    learnMoreAbout: string;
    watchFor: string;
    normalVsAbnormal: string;
    nextSteps: string;
    forMoreInformation: string;
    disclaimer: string;
    educationalPurposes: string;
    notMedicalAdvice: string;
    consultHealthcare: string;
  };

  // Learning progress
  progress: {
    yourProgress: string;
    completed: string;
    inProgress: string;
    notStarted: string;
    continue: string;
    startLearning: string;
    markComplete: string;
    markIncomplete: string;
    percentComplete: string;
    topicsCompleted: string;
    timeSpent: string;
    lastAccessed: string;
    streak: string;
    achievements: string;
    badges: string;
    certificates: string;
  };
}

/**
 * Level translation structure
 */
export interface LevelTranslation {
  name: string;
  description: string;
  audience: string;
  characteristics: string[];
}

/**
 * Histology Translation Keys
 */
export interface HistologyTranslations {
  // Tissue types
  tissueTypes: {
    epithelial: TissueTranslation;
    connective: TissueTranslation;
    muscular: TissueTranslation;
    nervous: TissueTranslation;
  };

  // Epithelial subtypes
  epithelialTypes: Record<string, TissueSubtypeTranslation>;

  // Connective tissue subtypes
  connectiveTypes: Record<string, TissueSubtypeTranslation>;

  // Muscle types
  muscleTypes: Record<string, TissueSubtypeTranslation>;

  // Cell types
  cellTypes: Record<string, CellTypeTranslation>;

  // Staining methods
  stainingMethods: Record<string, StainingTranslation>;

  // Pathology terms
  pathologyTerms: Record<string, PathologyTermTranslation>;

  // Viewer UI
  viewer: {
    magnification: string;
    stain: string;
    tissue: string;
    cellType: string;
    structure: string;
    normalAppearance: string;
    abnormalFindings: string;
    annotations: string;
    measurements: string;
    scale: string;
    compare: string;
    beforeAfter: string;
    normalAbnormal: string;
  };
}

/**
 * Tissue translation structure
 */
export interface TissueTranslation {
  name: string;
  latinName?: string;
  description: string;
  function: string;
  location: string;
  characteristics: string[];
}

/**
 * Tissue subtype translation structure
 */
export interface TissueSubtypeTranslation {
  name: string;
  latinName?: string;
  description: string;
  location: string;
  function: string;
}

/**
 * Cell type translation structure
 */
export interface CellTypeTranslation {
  name: string;
  latinName?: string;
  description: string;
  function: string;
  location: string;
  characteristics: string[];
}

/**
 * Staining translation structure
 */
export interface StainingTranslation {
  name: string;
  abbreviation?: string;
  description: string;
  stains: string;
  usedFor: string;
  appearance: string;
}

/**
 * Pathology term translation structure
 */
export interface PathologyTermTranslation {
  term: string;
  definition: string;
  patientExplanation: string;
  examples?: string[];
  severity?: string;
}

// =============================================================================
// COMPLETE TRANSLATION BUNDLE TYPE
// =============================================================================

/**
 * Complete translations for a language
 */
export interface TranslationBundle {
  language: LanguageInfo;
  ui: UITranslations;
  anatomy: AnatomyTranslations;
  medical: MedicalTranslations;
  education: EducationTranslations;
  histology: HistologyTranslations;
}

/**
 * Translation namespace keys for code organization
 */
export type TranslationNamespace = 'ui' | 'anatomy' | 'medical' | 'education' | 'histology';

/**
 * Translation context for dynamic content
 */
export interface TranslationContext {
  count?: number;
  gender?: 'masculine' | 'feminine' | 'neutral';
  formal?: boolean;
  interpolations?: Record<string, string | number>;
}

/**
 * Translation function signature
 */
export type TranslationFunction = (
  key: string,
  context?: TranslationContext
) => string;

/**
 * Plural forms for languages that need them
 */
export interface PluralForms {
  zero?: string;
  one: string;
  two?: string;
  few?: string;
  many?: string;
  other: string;
}
