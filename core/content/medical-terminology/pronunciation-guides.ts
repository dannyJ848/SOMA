/**
 * Pronunciation Guides Content
 *
 * Medical vocabulary pronunciation guidance:
 * - Phonetic rules
 * - Common pronunciation patterns
 * - Stress patterns
 * - Eponyms pronunciation
 * - International variations
 */

import { EducationalContent } from "../types";

// ============================================================================
// PHONETIC RULES EDUCATIONAL CONTENT
// ============================================================================

export const phoneticRulesContent: EducationalContent = {
  id: "phonetic-rules-content",
  type: "concept",
  name: "Medical Term Pronunciation Rules",
  alternateNames: ["Phonetic Patterns", "Pronunciation Guidelines"],

  levels: {
    1: {
      level: 1,
      summary: "Medical words follow special pronunciation rules that are different from everyday words.",
      explanation:
        "Medical words often come from Greek and Latin, so they do not always sound the way you might expect. For example, the \"ph\" in pharmacy sounds like \"f\", and the \"ch\" in chronic sounds like \"k\". The letter \"c\" can sound like \"s\" (as in cell) or \"k\" (as in cardiac). Learning these patterns helps you say medical words correctly. Do not worry if it seems hard at first - even doctors had to learn these rules!",
      keyTerms: [
        {
          term: "ph = f",
          definition: "The letters ph make an f sound (pharmacy = FAR-muh-see)",
        },
        {
          term: "ch = k",
          definition: "The letters ch often make a k sound (chronic = KRON-ik)",
        },
        {
          term: "ps = s",
          definition: "The letters ps make an s sound (psychology = sy-KOL-uh-jee)",
        },
      ],
      analogies: [
        "Learning medical pronunciation is like learning a secret code - once you know the rules, you can decode any word.",
      ],
    },
    2: {
      level: 2,
      summary: "Greek and Latin letter combinations follow consistent pronunciation patterns in medical terminology.",
      explanation:
        "Medical terms inherit pronunciation rules from their Greek and Latin origins. Greek-derived patterns include: ph = f (as in pharynx), ch = k (as in chiropractor), ps = s (as in pseudomonas), pn = n (as in pneumonia), and rh = r (as in rhinitis). The letter \"c\" before e, i, or y sounds like \"s\" (cerebral, cirrhosis, cyst), but before a, o, or u sounds like \"k\" (cardiac, colon, cutaneous). Similarly, \"g\" before e, i, or y is soft (genetics), but before a, o, or u is hard (gastric).",
      keyTerms: [
        {
          term: "pn = n",
          definition: "Silent p at the start of words (pneumonia = new-MOH-nee-uh)",
        },
        {
          term: "Soft c",
          definition: "C sounds like s before e, i, y (cervical = SER-vih-kul)",
        },
        {
          term: "Hard c",
          definition: "C sounds like k before a, o, u (colon = KOH-lun)",
        },
        {
          term: "rh = r",
          definition: "Silent h after r (rhythm = RITH-um)",
        },
      ],
      analogies: [
        "The c and g rules are like traffic lights - they change their behavior depending on what comes next.",
      ],
    },
    3: {
      level: 3,
      summary: "Medical pronunciation conventions include rules for vowel combinations, consonant clusters, and suffix patterns.",
      explanation:
        "Vowel digraphs follow Greek patterns: ae and oe often reduce to \"e\" sound (aetiology = ee-tee-OL-uh-jee, oesophagus = ee-SOF-uh-gus) though American English often simplifies spelling (etiology, esophagus). The combination \"eu\" sounds like \"yoo\" (euphoria = yoo-FOR-ee-uh). Double consonants are typically pronounced as single sounds. Suffix pronunciation is consistent: \"-itis\" is always \"EYE-tis\", \"-osis\" is \"OH-sis\", \"-ectomy\" is \"EK-tuh-mee\". Learning suffix patterns provides pronunciation templates for numerous terms.",
      keyTerms: [
        {
          term: "ae/oe = ee",
          definition: "These vowel pairs often sound like long e (paediatric = pee-dee-AT-rik)",
        },
        {
          term: "eu = yoo",
          definition: "This combination sounds like you (leukocyte = LOO-koh-site)",
        },
        {
          term: "-itis pattern",
          definition: "Suffix always pronounced EYE-tis (bronchitis = brong-KY-tis)",
        },
        {
          term: "-osis pattern",
          definition: "Suffix always pronounced OH-sis (stenosis = steh-NOH-sis)",
        },
      ],
      analogies: [
        "Suffixes are like musical refrains - they sound the same each time, making new terms predictable.",
      ],
    },
    4: {
      level: 4,
      summary: "Phonetic transcription systems and stress patterns provide precise pronunciation guidance for medical terminology.",
      explanation:
        "The International Phonetic Alphabet (IPA) provides standardized phonetic transcription. Primary stress (indicated by /ˈ/ before syllable) determines emphasis; secondary stress (/ˌ/) indicates lesser emphasis. Medical terms typically stress the antepenultimate (third-to-last) syllable when ending in common suffixes: cardiOLogy, dermaTItis. However, two-syllable words stress the first syllable: PLASma, SYStole. Greek-derived prefixes (hyper-, hypo-) are typically unstressed. Vowel quality shifts with stress: unstressed syllables often reduce to schwa (/ə/). Regional and specialty variations exist.",
      keyTerms: [
        {
          term: "IPA",
          definition: "International Phonetic Alphabet for precise pronunciation notation",
        },
        {
          term: "Primary stress",
          definition: "Main emphasis in a word, marked with accent mark",
        },
        {
          term: "Antepenultimate",
          definition: "Third syllable from the end, often stressed in medical terms",
        },
        {
          term: "Schwa",
          definition: "Neutral vowel sound (uh) in unstressed syllables",
        },
      ],
      clinicalNotes: "Correct pronunciation facilitates clear communication and professional credibility; mispronunciation can cause misunderstanding in verbal orders and patient communication.",
    },
    5: {
      level: 5,
      summary: "Diachronic phonological changes and cross-linguistic variation influence contemporary medical pronunciation conventions.",
      explanation:
        "Medical terminology reflects historical phonological processes. Greek-to-Latin borrowings underwent systematic changes (Greek \"k\" to Latin \"c\"). The Great Vowel Shift affected English pronunciation of Latinate medical terms differently from continental European languages. Learned versus vernacular transmission created doublets with different pronunciations. Contemporary variation includes British/American differences (aluminium/aluminum, oestrogen/estrogen), specialty-specific conventions (radiologists versus pathologists pronouncing \"metastases\"), and evolving pronunciations of newer terms. Etymology guides pronunciation in ambiguous cases. Audio medical dictionaries and specialty-specific pronunciation guides standardize clinical communication.",
      keyTerms: [
        {
          term: "Diachronic variation",
          definition: "Pronunciation changes over historical time",
        },
        {
          term: "Great Vowel Shift",
          definition: "Historical English sound change affecting vowel pronunciation",
        },
        {
          term: "Learned borrowing",
          definition: "Words borrowed through written/scholarly channels",
        },
        {
          term: "Doublet",
          definition: "Two words from same origin with different forms or pronunciations",
        },
      ],
      clinicalNotes: "Medical terminology courses and audio resources support pronunciation learning; clinical communication benefits from consistent conventions while accommodating acceptable variation.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["pronunciation", "phonetics", "medical terminology"],
    keywords: ["pronunciation rules", "phonetic patterns", "medical words"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// STRESS PATTERNS EDUCATIONAL CONTENT
// ============================================================================

export const stressPatternsContent: EducationalContent = {
  id: "stress-patterns-content",
  type: "concept",
  name: "Syllable Stress in Medical Terms",
  alternateNames: ["Word Stress", "Accent Patterns"],

  levels: {
    1: {
      level: 1,
      summary: "When saying medical words, some parts are said louder than others - this is called stress.",
      explanation:
        "Every word with more than one syllable has one part that is said louder and longer than the others. This is called stress. For example, in \"doctor\" we stress the first part: DOC-tor. In \"appendix\" we stress the middle: ap-PEN-dix. Getting the stress right helps people understand you. If you stress the wrong syllable, the word can sound strange or be hard to understand.",
      keyTerms: [
        {
          term: "Stress",
          definition: "Saying one syllable louder and longer than others",
        },
        {
          term: "Syllable",
          definition: "A unit of pronunciation with one vowel sound",
        },
        {
          term: "Emphasis",
          definition: "Another word for stress or putting extra force on a syllable",
        },
      ],
      analogies: [
        "Syllable stress is like the beat in music - some notes are stronger and that creates the rhythm.",
      ],
    },
    2: {
      level: 2,
      summary: "Medical terms have predictable stress patterns based on their suffixes and word structure.",
      explanation:
        "Many medical suffixes create consistent stress patterns. Words ending in \"-ology\" stress the syllable before it: cardiOLogy, neurologY. Words ending in \"-itis\" stress the syllable before: bronchItis, arthRItis. Words ending in \"-ic\" or \"-ical\" stress the syllable before: hepatIC, neurologICAL. Two-syllable words usually stress the first syllable: KIDney, HEARTbeat. These patterns make pronunciation more predictable once you learn the rules.",
      keyTerms: [
        {
          term: "-ology stress",
          definition: "Stress falls before -ology (car-dee-OL-uh-jee)",
        },
        {
          term: "-itis stress",
          definition: "Stress falls before -itis (ap-en-dih-SY-tis)",
        },
        {
          term: "-ic stress",
          definition: "Stress falls before -ic (hep-AT-ik)",
        },
        {
          term: "Penultimate",
          definition: "Second-to-last syllable",
        },
      ],
      analogies: [
        "Suffix stress rules are like directions - \"-ology\" means stress goes one step back from the ending.",
      ],
    },
    3: {
      level: 3,
      summary: "Stress assignment follows morphological rules with predictable interactions between roots, prefixes, and suffixes.",
      explanation:
        "Stress-neutral suffixes (-ment, -ness, -ful) do not change root stress. Stress-shifting suffixes (-ity, -ic, -ical, -ogy) attract stress to specific positions. The \"-ity\" suffix places stress on the preceding syllable: flexiBILity, sensitivITY. Compound terms often have primary stress on the first element: BLOODpressure, HEARTrate. Prefixes (pre-, post-, anti-) are typically unstressed in medical terms: preopERative, postSURgical. However, contrastive emphasis may shift stress for clarity: \"It is HYPOthyroid, not HYPERthyroid.\"",
      keyTerms: [
        {
          term: "Stress-shifting suffix",
          definition: "Suffix that changes where stress falls in a word",
        },
        {
          term: "Stress-neutral suffix",
          definition: "Suffix that does not change stress location",
        },
        {
          term: "-ity rule",
          definition: "Stress falls on syllable before -ity (sensi-TIV-ity)",
        },
        {
          term: "Compound stress",
          definition: "Primary stress on first element of compound words",
        },
      ],
      analogies: [
        "Stress-shifting suffixes are like magnets - they pull the stress toward themselves.",
      ],
    },
    4: {
      level: 4,
      summary: "Prosodic structure interacts with morphological complexity in determining stress placement in polysyllabic medical terms.",
      explanation:
        "Metrical phonology analyzes stress through syllable weight and foot structure. Heavy syllables (closed or with long vowels) attract stress. Latin stress rules (penultimate stress if heavy, otherwise antepenultimate) underlie many medical term patterns. Morphological boundaries affect stress: \"electro\" + \"cardiogram\" creates electroCARdiogram with secondary stress on \"electro.\" Level-ordering places stress before certain derivational morphology. Exceptions include loanwords preserving source-language stress. Clinical terminology may develop specialized stress patterns through frequent usage patterns.",
      keyTerms: [
        {
          term: "Syllable weight",
          definition: "Phonological heaviness affecting stress attraction",
        },
        {
          term: "Metrical phonology",
          definition: "Theory of stress as rhythmic organization",
        },
        {
          term: "Secondary stress",
          definition: "Weaker emphasis on syllables besides the main stressed syllable",
        },
        {
          term: "Penultimate rule",
          definition: "Stress on second-to-last syllable when heavy",
        },
      ],
      clinicalNotes: "Consistent stress patterns in clinical communication reduce misunderstanding; dictation systems and voice recognition benefit from standard pronunciation.",
    },
    5: {
      level: 5,
      summary: "Prosodic hierarchies and constraint-based phonology account for stress variation in morphologically complex medical terminology.",
      explanation:
        "Optimality Theory models stress as constraint satisfaction: faithfulness constraints preserve underlying forms while markedness constraints favor unmarked patterns. Stratal OT applies constraints at different morphological levels. Lexical stress specification overrides default patterns for irregular items. Paradigm uniformity maintains consistent stress across morphologically related forms. Speech rhythm (stress-timed versus syllable-timed languages) affects international pronunciation variation. Frequency effects may regularize exceptional pronunciations. Computational models predict stress for novel terms based on learned patterns. Professional medical communication standards balance precision with communicative efficiency.",
      keyTerms: [
        {
          term: "Optimality Theory",
          definition: "Constraint-based framework for phonological analysis",
        },
        {
          term: "Paradigm uniformity",
          definition: "Pressure to maintain consistent pronunciation in related words",
        },
        {
          term: "Lexical stress",
          definition: "Stress specified in lexicon rather than computed by rule",
        },
        {
          term: "Frequency effect",
          definition: "Influence of word frequency on pronunciation patterns",
        },
      ],
      clinicalNotes: "Text-to-speech systems for medical applications require accurate stress assignment; pronunciation variation is documented in medical dictionaries with acceptable variants.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["pronunciation", "stress", "phonology"],
    keywords: ["syllable stress", "word stress", "pronunciation patterns"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// EPONYMS PRONUNCIATION EDUCATIONAL CONTENT
// ============================================================================

export const eponymsPronunciationContent: EducationalContent = {
  id: "eponyms-pronunciation-content",
  type: "concept",
  name: "Pronouncing Medical Eponyms",
  alternateNames: ["Named Conditions", "Eponymous Terms"],

  levels: {
    1: {
      level: 1,
      summary: "Some diseases and body parts are named after people who discovered them - these are called eponyms.",
      explanation:
        "When a doctor or scientist discovers something important, it is sometimes named after them. Parkinson disease is named after Dr. James Parkinson. Alzheimer disease is named after Dr. Alois Alzheimer. These names from people are called eponyms. They can be tricky to pronounce because they come from different languages - German, French, Italian, and others. The best way to learn them is to hear them spoken and practice.",
      keyTerms: [
        {
          term: "Eponym",
          definition: "A medical term named after a person",
        },
        {
          term: "Parkinson",
          definition: "PAR-kin-sun (British neurologist)",
        },
        {
          term: "Alzheimer",
          definition: "ALTS-hy-mer (German psychiatrist)",
        },
      ],
      analogies: [
        "Eponyms are like street names - they honor important people but you need to learn how to say each one.",
      ],
    },
    2: {
      level: 2,
      summary: "Eponym pronunciation often reflects the original language of the person the term honors.",
      explanation:
        "Medical eponyms come from many languages, and pronunciation varies. German names: Alzheimer (ALTS-hy-mer), Virchow (FEER-koh), Koch (KOKH). French names: Charcot (shar-KOH), Guillain-Barre (gee-YAN bah-RAY), Dupuytren (doo-pwee-TREN). Italian names: Fallopian (fuh-LOH-pee-un). English names often follow standard English patterns: Hodgkin (HOJ-kin), Cushing (KOOSH-ing). Some eponyms have Anglicized pronunciations that differ from the original language.",
      keyTerms: [
        {
          term: "Charcot",
          definition: "shar-KOH (French neurologist)",
        },
        {
          term: "Guillain-Barre",
          definition: "gee-YAN bah-RAY (French neurologists)",
        },
        {
          term: "Virchow",
          definition: "FEER-koh (German pathologist)",
        },
        {
          term: "Koch",
          definition: "KOKH (German microbiologist)",
        },
      ],
      analogies: [
        "Pronouncing eponyms from different countries is like pronouncing names in a foreign language - you try to honor the original sound.",
      ],
    },
    3: {
      level: 3,
      summary: "Eponym pronunciation conventions vary between authentic foreign pronunciation and Anglicized adaptations.",
      explanation:
        "Competing norms exist for eponym pronunciation: purist (preserving original language pronunciation), Anglicized (adapted to English phonology), and hybrid approaches. Context influences choice: formal presentations may favor authentic pronunciation, while everyday clinical use often employs Anglicized forms. Some eponyms have become so Anglicized that original pronunciation sounds affected (Caesarean, Eustachian). The possessive form (Crohn's disease vs Crohn disease) is increasingly disfavored in formal usage but remains common colloquially. Reference standards include Dorland's Medical Dictionary and Stedman's.",
      keyTerms: [
        {
          term: "Anglicized pronunciation",
          definition: "Foreign name adapted to English sound patterns",
        },
        {
          term: "Authentic pronunciation",
          definition: "Pronunciation approximating the original language",
        },
        {
          term: "Possessive eponym",
          definition: "Using apostrophe-s with eponym (now often discouraged)",
        },
        {
          term: "Dupuytren",
          definition: "doo-pwee-TREN or DOO-pwih-tren (French surgeon)",
        },
      ],
      analogies: [
        "Choosing eponym pronunciation is like choosing between calling a city \"Firenze\" (Italian) or \"Florence\" (English) - both are correct in different contexts.",
      ],
    },
    4: {
      level: 4,
      summary: "Eponym pronunciation demonstrates sociolinguistic variation influenced by training, specialty, and regional factors.",
      explanation:
        "Pronunciation of eponyms serves as a sociolinguistic marker within medical communities. Specialty-specific pronunciations exist: cardiologists and neurologists may differ on shared terms. Training institution traditions influence pronunciation conventions passed from mentor to trainee. International variation reflects educational system differences: UK pronunciation differs from US on many eponyms. Some eponyms have competing pronunciations with no clear standard (Behcet: beh-CHET or beh-SET; Paget: PAJ-et or pah-ZHAY). Medical podcast and video content increasingly standardizes pronunciation through exposure.",
      keyTerms: [
        {
          term: "Sociolinguistic marker",
          definition: "Linguistic feature indicating social group membership",
        },
        {
          term: "Behcet",
          definition: "beh-CHET (Turkish dermatologist) - pronunciation varies",
        },
        {
          term: "Paget",
          definition: "PAJ-et (British surgeon) - Anglicized form standard",
        },
        {
          term: "De Quervain",
          definition: "duh kair-VAIN (Swiss surgeon)",
        },
      ],
      clinicalNotes: "When uncertainty exists, following specialty-specific or institutional convention promotes clear communication within local practice environment.",
    },
    5: {
      level: 5,
      summary: "Eponym phonology reflects historical contact linguistics and ongoing standardization efforts in international medical communication.",
      explanation:
        "Eponym pronunciation involves historical phonological adaptation as terms crossed language boundaries. German umlauts, French nasals, and other non-English phonemes undergo systematic adaptation or are preserved based on speaker proficiency and register. Terminologia Anatomica has replaced many anatomical eponyms with descriptive terms, reducing but not eliminating eponym usage. Ongoing debates address equity concerns (eponyms honoring problematic historical figures) and clarity concerns (non-descriptive names impede learning). International medical congress pronunciation reveals cross-linguistic negotiation in real-time. Documentation of pronunciation variation supports inclusive communication standards.",
      keyTerms: [
        {
          term: "Contact linguistics",
          definition: "Study of language interaction and borrowing",
        },
        {
          term: "Terminologia Anatomica",
          definition: "International standard for anatomical terminology",
        },
        {
          term: "Register",
          definition: "Language variety appropriate to particular context",
        },
        {
          term: "Phonological adaptation",
          definition: "Sound changes when words enter a new language",
        },
      ],
      clinicalNotes: "Descriptive alternatives to eponyms (antidiuretic hormone vs vasopressin; thoracic outlet syndrome vs Paget-Schroetter) support international communication and learning while respecting historical contributions.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["pronunciation", "eponyms", "medical history"],
    keywords: ["eponym pronunciation", "named diseases", "medical terminology"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const pronunciationGuidesModule = {
  id: "pronunciation-guides",
  name: "Pronunciation Guides",
  description:
    "Educational content for medical terminology pronunciation including phonetic rules, stress patterns, and eponyms",
  content: [phoneticRulesContent, stressPatternsContent, eponymsPronunciationContent],
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
};

export default pronunciationGuidesModule;
