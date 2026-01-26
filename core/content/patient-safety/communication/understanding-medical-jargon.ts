/**
 * Understanding Medical Jargon
 *
 * Decoding medical terminology for patients.
 */

import { EducationalContent } from '../../types';

export const understandingMedicalJargon: EducationalContent = {
  id: 'concept-understanding-medical-jargon',
  type: 'concept',
  name: 'Understanding Medical Jargon',
  alternateNames: ['Medical Terminology', 'Medical Language', 'Healthcare Terms'],

  levels: {
    1: {
      level: 1,
      summary: 'Doctors sometimes use big words that can be confusing, but you can always ask them to explain in simpler terms.',
      explanation: `Doctors and nurses sometimes use special words that sound confusing. These are called "medical terms." It's okay if you don't understand them!

**Why Do Doctors Use Big Words?**
- It's how they learned to talk about the body
- The words help them be very precise
- They sometimes forget others don't know these words

**What To Do When You Hear a Big Word:**
- Ask: "What does that word mean?"
- Say: "Can you explain that in a different way?"
- Ask them to write it down so you can look it up later

**Some Common Medical Words:**
- **Diagnosis** - What the doctor thinks is wrong
- **Symptoms** - How you feel (like pain or being tired)
- **Prescription** - Medicine the doctor says you need
- **Chronic** - Something that lasts a long time
- **Acute** - Something that just started or happens quickly

**Remember:**
It's the doctor's job to help you understand. Never feel embarrassed to ask questions!`,
      keyTerms: [
        { term: 'medical jargon', definition: 'Special words that doctors and nurses use' },
        { term: 'diagnosis', definition: 'What the doctor thinks is making you sick' },
        { term: 'symptom', definition: 'Something you feel that tells you something might be wrong' },
      ],
      analogies: [
        'Medical words are like a secret code - once you learn what they mean, the mystery is solved!',
        'Just like learning new words in school, medical terms become easier the more you hear them.',
      ],
      examples: [
        'If a doctor says "hypertension," that means high blood pressure.',
        'If a doctor says "inflammation," that means swelling and redness.',
      ],
    },
    2: {
      level: 2,
      summary: 'Medical terminology follows patterns that can help you understand unfamiliar terms, and asking for clarification is always appropriate.',
      explanation: `Medical terminology can seem like a foreign language, but understanding its structure can help you decode many terms.

**How Medical Words Are Built:**
Most medical terms have parts:
- **Root** - The main meaning (usually a body part)
- **Prefix** - Added to the beginning (changes the meaning)
- **Suffix** - Added to the end (usually describes what's happening)

**Common Prefixes:**
- **Hyper-** = Too much (hypertension = high blood pressure)
- **Hypo-** = Too little (hypoglycemia = low blood sugar)
- **Anti-** = Against (antibiotic = against bacteria)
- **Pre-** = Before (prenatal = before birth)
- **Post-** = After (postoperative = after surgery)

**Common Suffixes:**
- **-itis** = Inflammation (arthritis = joint inflammation)
- **-ectomy** = Removal (appendectomy = removal of appendix)
- **-ology** = Study of (cardiology = study of the heart)
- **-osis** = Condition (stenosis = narrowing condition)

**Common Root Words:**
- **Cardio** = Heart
- **Pulmo** = Lung
- **Gastro** = Stomach
- **Neuro** = Nerve
- **Derm** = Skin

**Strategies for Understanding:**
1. Ask the doctor to explain in plain language
2. Write down unfamiliar terms
3. Use reliable medical dictionaries online
4. Ask for written information to take home

**Resources:**
- MedlinePlus (medlineplus.gov)
- Patient education handouts from your clinic`,
      keyTerms: [
        { term: 'root word', definition: 'The core part of a medical term that gives its main meaning' },
        { term: 'prefix', definition: 'Word part added to the beginning that modifies the meaning' },
        { term: 'suffix', definition: 'Word part added to the end that describes what is happening' },
        { term: 'inflammation', definition: 'Body\'s response to injury or infection causing redness, swelling, heat, and pain' },
      ],
      analogies: [
        'Medical terms are like building blocks - once you know the pieces, you can figure out what many words mean.',
      ],
    },
    3: {
      level: 3,
      summary: 'Medical terminology derives largely from Greek and Latin roots, with systematic prefixes and suffixes that allow deconstruction of unfamiliar terms.',
      explanation: `## The Structure of Medical Language

Medical terminology is a precise language developed to describe anatomy, conditions, and procedures with specificity. Understanding its structure empowers patients to engage more effectively in their care.

### Etymology and Origins

| Origin | Examples | Common In |
|--------|----------|-----------|
| Greek | Cardio-, nephro-, gastro- | Anatomy, conditions |
| Latin | Corpus, ventricle, anterior | Anatomy, positions |
| Eponyms | Parkinson's, Alzheimer's | Diseases named after discoverers |

### Systematic Word Construction

**Anatomical Roots:**
| Root | Meaning | Example |
|------|---------|---------|
| Cardi/o | Heart | Cardiomyopathy |
| Hepat/o | Liver | Hepatitis |
| Nephr/o | Kidney | Nephrology |
| Neur/o | Nerve | Neuralgia |
| Oste/o | Bone | Osteoporosis |
| Pneum/o | Lung/air | Pneumonia |

**Directional Terms:**
| Term | Meaning |
|------|---------|
| Anterior/Posterior | Front/Back |
| Superior/Inferior | Above/Below |
| Medial/Lateral | Toward middle/Toward side |
| Proximal/Distal | Closer to/Farther from trunk |

**Diagnostic Suffixes:**
| Suffix | Meaning | Example |
|--------|---------|---------|
| -emia | Blood condition | Anemia |
| -pathy | Disease | Neuropathy |
| -plasia | Growth/formation | Dysplasia |
| -oma | Tumor | Carcinoma |
| -itis | Inflammation | Bronchitis |

**Procedural Suffixes:**
| Suffix | Meaning | Example |
|--------|---------|---------|
| -scopy | Visual examination | Colonoscopy |
| -plasty | Surgical repair | Angioplasty |
| -ectomy | Surgical removal | Cholecystectomy |
| -otomy | Incision into | Tracheotomy |
| -graphy | Recording/imaging | Mammography |

### Abbreviations in Healthcare

Common abbreviations you may encounter:
- **BID/TID/QID** - Twice/Three times/Four times daily
- **PRN** - As needed
- **NPO** - Nothing by mouth
- **Dx** - Diagnosis
- **Tx** - Treatment
- **Rx** - Prescription

### Strategies for Learning

1. Break down unfamiliar terms into components
2. Keep a personal medical vocabulary notebook
3. Use etymology to remember meanings
4. Ask healthcare providers to spell terms
5. Request written summaries of discussions`,
      keyTerms: [
        { term: 'etymology', definition: 'The origin and historical development of a word' },
        { term: 'eponym', definition: 'A disease or condition named after a person, usually the discoverer' },
        { term: 'anatomical position', definition: 'Standard reference position for describing the body: standing erect, facing forward, arms at sides, palms forward' },
        { term: 'differential diagnosis', definition: 'List of possible diagnoses that could explain symptoms' },
      ],
      clinicalNotes: 'Understanding medical terminology improves health literacy and patient-provider communication. Patients who understand their diagnosis and treatment are more likely to adhere to recommendations.',
    },
    4: {
      level: 4,
      summary: 'Advanced medical terminology encompasses specialized vocabulary across subspecialties, procedural nomenclature, and evolving standardized terminology systems used in modern healthcare documentation.',
      explanation: `## Advanced Medical Language Systems

### Standardized Medical Vocabularies

**ICD (International Classification of Diseases):**
- Current version: ICD-11 (WHO)
- Used for: Diagnoses, billing, epidemiology
- Example: E11.9 = Type 2 diabetes without complications

**CPT (Current Procedural Terminology):**
- Maintained by AMA
- Used for: Procedure coding, billing
- Example: 99213 = Established patient office visit

**SNOMED CT (Systematized Nomenclature of Medicine):**
- Comprehensive clinical terminology
- Used in: Electronic health records
- Enables precise, computer-readable documentation

### Subspecialty Terminology

**Oncology:**
- TNM staging (Tumor, Nodes, Metastasis)
- Histological grading
- Treatment protocols (FOLFOX, R-CHOP)

**Cardiology:**
- EKG/ECG findings (ST elevation, QT prolongation)
- Hemodynamic parameters
- Interventional terminology

**Laboratory Medicine:**
- Reference ranges and units
- Panel names (BMP, CMP, CBC)
- Critical values

### Pharmaceutical Terminology

**Drug Naming:**
- Chemical name (technical)
- Generic name (nonproprietary)
- Brand name (proprietary)

**Dosage Terminology:**
- Route: PO, IV, IM, SC, topical
- Frequency: QD, BID, TID, QHS
- Duration and taper schedules

### Reading Clinical Documentation

**Progress Note Structure (SOAP):**
- **S**ubjective: Patient's symptoms and history
- **O**bjective: Physical exam and test results
- **A**ssessment: Diagnosis and clinical reasoning
- **P**lan: Treatment and follow-up

**Operative Reports:**
- Indications
- Procedure performed
- Findings
- Specimens
- Complications

### Patient Portal Interpretation

Modern patient portals provide access to:
- Lab results with reference ranges
- Radiology reports
- Pathology reports
- Clinical notes (after 21st Century Cures Act)

**Understanding Lab Results:**
- H/L flags indicate high/low
- Reference ranges vary by lab
- Trends matter more than single values

### Medical Literature Terminology

For patients reading medical research:
- Study designs (RCT, cohort, case-control)
- Statistical terms (p-value, confidence interval, NNT)
- Outcome measures (primary, secondary, surrogate)`,
      keyTerms: [
        { term: 'ICD-11', definition: 'International Classification of Diseases, 11th revision - global standard for diagnostic coding' },
        { term: 'SNOMED CT', definition: 'Comprehensive clinical terminology system enabling precise documentation in electronic health records' },
        { term: 'SOAP note', definition: 'Medical documentation format: Subjective, Objective, Assessment, Plan' },
        { term: 'TNM staging', definition: 'Cancer staging system based on Tumor size, lymph Node involvement, and Metastasis' },
        { term: 'reference range', definition: 'Normal values for a laboratory test, typically containing 95% of healthy population results' },
      ],
      clinicalNotes: 'The 21st Century Cures Act (2016) mandates patient access to clinical notes, making understanding medical terminology increasingly important for engaged patients.',
    },
    5: {
      level: 5,
      summary: 'Expert health literacy encompasses navigating complex medical documentation, understanding clinical decision-making language, interpreting research literature, and recognizing the nuances and limitations of medical terminology in clinical practice.',
      explanation: `## Expert-Level Medical Language Navigation

### Clinical Documentation Deep Dive

**Discharge Summaries:**
Key sections to understand:
- Principal diagnosis vs. secondary diagnoses
- Procedures performed with findings
- Hospital course and complications
- Condition at discharge
- Follow-up requirements and contingencies

**Radiology Report Interpretation:**
| Term | Meaning |
|------|---------|
| Unremarkable | Normal |
| Within normal limits | No significant abnormality |
| Cannot exclude | Possible but not certain |
| Correlation recommended | Needs additional information |
| Indeterminate | Cannot determine significance |

**Pathology Report Elements:**
- Gross description (macroscopic)
- Microscopic description
- Immunohistochemistry results
- Molecular/genetic findings
- Final diagnosis and staging

### Language of Uncertainty

**Gradations of Certainty:**
| Phrase | Approximate Certainty |
|--------|----------------------|
| Consistent with | High (>80%) |
| Suggestive of | Moderate (50-80%) |
| Cannot exclude | Low but possible |
| Less likely | Low probability |
| No evidence of | Not seen (doesn't rule out) |

**Understanding "Negative" Results:**
- "No evidence of" does not mean absence
- Sensitivity limitations apply
- Clinical correlation always needed

### Research Literature Terminology

**Study Quality Indicators:**
- Randomized vs. observational
- Blinded vs. open-label
- Intention-to-treat vs. per-protocol
- Adequately powered vs. underpowered

**Statistical Language:**
| Term | Meaning |
|------|---------|
| p-value | Probability result occurred by chance |
| Confidence interval | Range likely containing true value |
| Hazard ratio | Relative risk over time |
| Absolute risk reduction | Actual percentage difference |
| NNT | Number needed to treat for one benefit |

### Evolving Medical Language

**Precision Medicine Terminology:**
- Genomic variants (pathogenic, VUS, benign)
- Pharmacogenomics
- Biomarkers and companion diagnostics
- Targeted therapies

**Changing Terminology:**
Medicine updates language for accuracy and sensitivity:
- Medical history vs. medical problems
- Person-first language
- Updated diagnostic criteria
- Retired eponyms

### Communication with Healthcare Teams

**Clarifying Ambiguity:**
When documentation is unclear:
- Request verbal clarification
- Ask which meaning applies to your situation
- Seek written explanation
- Request care conference if needed

**Asking About Prognosis:**
Understanding prognostic language:
- Survival statistics (median, 5-year)
- Functional prognosis
- Disease trajectory
- Uncertainty acknowledgment

### Quality and Safety Terminology

**Safety Event Classification:**
- Near miss
- Adverse event
- Sentinel event
- Never event

**Quality Measures:**
- Process measures vs. outcome measures
- Risk adjustment
- Benchmarking
- Quality reporting programs`,
      keyTerms: [
        { term: 'variant of uncertain significance (VUS)', definition: 'Genetic finding whose clinical implications are not yet known' },
        { term: 'pharmacogenomics', definition: 'Study of how genes affect individual responses to medications' },
        { term: 'hazard ratio', definition: 'Measure comparing how often an event happens in one group versus another over time' },
        { term: 'sentinel event', definition: 'Unexpected occurrence involving death or serious physical or psychological injury' },
        { term: 'clinical correlation', definition: 'Process of integrating test findings with clinical presentation to determine significance' },
      ],
      clinicalNotes: `Expert terminology competencies:
1. Navigate complex clinical documentation including operative and pathology reports
2. Understand language of uncertainty in medical findings
3. Interpret research literature including statistical concepts
4. Recognize evolving terminology in precision medicine
5. Effectively communicate clarification needs with healthcare teams
6. Understand quality and safety terminology`,
    },
  },

  media: [],

  citations: [
    {
      id: 'medlineplus',
      type: 'website',
      title: 'MedlinePlus Medical Dictionary',
      source: 'National Library of Medicine',
      url: 'https://medlineplus.gov/medicalwords.html',
    },
  ],

  crossReferences: [
    { targetId: 'concept-talking-to-your-doctor', targetType: 'concept', relationship: 'related', label: 'Talking to Your Doctor' },
    { targetId: 'concept-health-literacy-basics', targetType: 'concept', relationship: 'related', label: 'Health Literacy Basics' },
  ],

  tags: {
    systems: ['patient-safety'],
    topics: ['communication', 'health-literacy', 'medical-terminology'],
    clinicalRelevance: 'high',
    keywords: ['medical terms', 'medical language', 'healthcare communication', 'medical vocabulary'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default understandingMedicalJargon;
