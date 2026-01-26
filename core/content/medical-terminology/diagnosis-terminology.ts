/**
 * Diagnosis Terminology Content
 *
 * Medical vocabulary for disease classification:
 * - Disease classification terms
 * - Diagnostic process terminology
 * - Prognosis terminology
 * - Staging and grading terms
 * - Epidemiological terms
 */

import { EducationalContent } from "../types";

// ============================================================================
// DISEASE CLASSIFICATION EDUCATIONAL CONTENT
// ============================================================================

export const diseaseClassificationContent: EducationalContent = {
  id: "disease-classification-content",
  type: "concept",
  name: "Disease Classification",
  alternateNames: ["Nosology", "Disease Taxonomy"],

  levels: {
    1: {
      level: 1,
      summary: "Diseases are grouped into categories based on what causes them or what part of the body they affect.",
      explanation:
        "Just like animals are grouped into categories (mammals, birds, fish), diseases are grouped too. Some diseases are caused by germs (infectious diseases), some run in families (genetic diseases), and some happen when the body attacks itself (autoimmune diseases). Doctors also group diseases by which body part they affect - heart diseases, lung diseases, or kidney diseases. Knowing what category a disease belongs to helps doctors know how to treat it.",
      keyTerms: [
        {
          term: "Infectious disease",
          definition: "Illness caused by germs like bacteria or viruses",
        },
        {
          term: "Genetic disease",
          definition: "Illness passed down through families",
        },
        {
          term: "Chronic disease",
          definition: "Illness that lasts a long time",
        },
      ],
      analogies: [
        "Grouping diseases is like organizing a library - books are sorted by topic so you can find what you need more easily.",
      ],
    },
    2: {
      level: 2,
      summary: "Diseases are classified by etiology (cause), anatomy (location), pathophysiology (mechanism), and clinical presentation.",
      explanation:
        "Disease classification uses multiple systems. Etiological classification groups by cause: infectious (bacteria, viruses), neoplastic (cancer), traumatic (injury), metabolic (hormone or chemical imbalances), and idiopathic (unknown cause). Anatomical classification organizes by affected organ system. Pathophysiological classification describes the disease mechanism - inflammatory, degenerative, or vascular. The ICD (International Classification of Diseases) is the standard coding system used worldwide for documenting diagnoses.",
      keyTerms: [
        {
          term: "Etiology",
          definition: "The cause or origin of a disease",
        },
        {
          term: "Idiopathic",
          definition: "Disease of unknown cause",
        },
        {
          term: "Degenerative",
          definition: "Disease causing progressive deterioration",
        },
        {
          term: "ICD",
          definition: "International Classification of Diseases coding system",
        },
      ],
      analogies: [
        "Etiology is the \"why\" of disease - just as knowing why a car broke down helps the mechanic fix it, knowing the cause helps doctors treat disease.",
      ],
    },
    3: {
      level: 3,
      summary: "Nosological systems categorize diseases using hierarchical taxonomies based on pathogenesis, phenotype, and molecular characteristics.",
      explanation:
        "Modern disease classification integrates multiple dimensions. The ICD-11 provides standardized diagnostic codes for epidemiology and billing. Specialty-specific classifications exist for particular domains: DSM-5 for psychiatric disorders, WHO tumor classification for neoplasms. Phenotypic classification describes observable characteristics, while endotypes describe underlying mechanisms. Comorbidity refers to co-existing conditions; multimorbidity describes patients with multiple chronic diseases. Primary diagnoses represent the main condition; secondary diagnoses are additional conditions affecting care.",
      keyTerms: [
        {
          term: "Nosology",
          definition: "The branch of medicine dealing with disease classification",
        },
        {
          term: "Phenotype",
          definition: "Observable characteristics of a disease",
        },
        {
          term: "Endotype",
          definition: "Disease subtype defined by distinct pathobiological mechanism",
        },
        {
          term: "Comorbidity",
          definition: "Presence of additional diseases alongside a primary condition",
        },
      ],
      analogies: [
        "Endotypes are like knowing not just that a car is broken, but specifically whether it is an engine, transmission, or electrical problem.",
      ],
    },
    4: {
      level: 4,
      summary: "Precision classification incorporates genomic, molecular, and biomarker data to define disease subtypes and guide targeted therapy.",
      explanation:
        "Molecular classification has transformed disease taxonomy, particularly in oncology. Breast cancer is now classified by receptor status (ER, PR, HER2) and genomic assays. Lung cancer treatment depends on driver mutations (EGFR, ALK, ROS1). Inflammatory diseases are subtyped by cytokine profiles. The concept of disease ontology provides formal, structured representations of disease knowledge. Orphan diseases (affecting <200,000 in US) have specific regulatory pathways. Syndrome refers to a constellation of signs and symptoms without necessarily implying single etiology; as understanding improves, syndromes may be reclassified into distinct diseases.",
      keyTerms: [
        {
          term: "Molecular classification",
          definition: "Disease categorization based on genetic and molecular features",
        },
        {
          term: "Orphan disease",
          definition: "Rare disease affecting small patient population",
        },
        {
          term: "Syndrome",
          definition: "Constellation of symptoms occurring together without single known cause",
        },
        {
          term: "Disease ontology",
          definition: "Formal structured representation of disease concepts and relationships",
        },
      ],
      clinicalNotes: "Companion diagnostics identify patients likely to respond to targeted therapies; molecular classification increasingly determines treatment selection.",
    },
    5: {
      level: 5,
      summary: "Systems medicine approaches integrate multi-omic data with clinical phenotyping for network-based disease classification and personalized therapeutics.",
      explanation:
        "Network medicine views diseases as perturbations in molecular interaction networks. Disease modules are groups of interacting genes/proteins associated with specific phenotypes. Pleiotropy describes genes affecting multiple diseases; disease comorbidity networks reveal shared molecular mechanisms. Multi-omic integration combines genomics, transcriptomics, proteomics, and metabolomics for comprehensive disease profiling. Digital twins are computational models predicting individual disease trajectories. Taxonomy revision is ongoing: conditions previously considered single diseases are revealed as multiple entities (type 2 diabetes subtypes), while distinct diagnoses may share mechanisms (autoimmune polyendocrine syndromes).",
      keyTerms: [
        {
          term: "Network medicine",
          definition: "Systems approach viewing disease as network perturbations",
        },
        {
          term: "Disease module",
          definition: "Group of interacting molecules associated with disease phenotype",
        },
        {
          term: "Multi-omic integration",
          definition: "Combined analysis of multiple molecular data types",
        },
        {
          term: "Digital twin",
          definition: "Computational model of individual patient for prediction",
        },
      ],
      clinicalNotes: "N-of-1 trials and adaptive platform trials leverage molecular classification for individualized treatment selection and biomarker-driven enrollment.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["diagnosis", "disease classification", "nosology"],
    keywords: ["ICD", "disease taxonomy", "molecular classification"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// DIAGNOSTIC PROCESS EDUCATIONAL CONTENT
// ============================================================================

export const diagnosticProcessContent: EducationalContent = {
  id: "diagnostic-process-content",
  type: "concept",
  name: "Diagnostic Process Terminology",
  alternateNames: ["Clinical Reasoning Terms", "Diagnostic Reasoning"],

  levels: {
    1: {
      level: 1,
      summary: "Doctors figure out what is wrong by asking questions, examining you, and sometimes doing tests.",
      explanation:
        "When you go to the doctor with a problem, they work like a detective to figure out what is causing it. First, they ask you questions about your symptoms - this is called taking a history. Then they examine you - looking, listening, and feeling for clues. If they need more information, they might order tests like blood work or X-rays. Based on all this information, they make a diagnosis - which is the name of what is wrong with you.",
      keyTerms: [
        {
          term: "History",
          definition: "Information about your symptoms and health background",
        },
        {
          term: "Physical exam",
          definition: "When the doctor examines your body",
        },
        {
          term: "Diagnosis",
          definition: "The name of what is causing your illness",
        },
      ],
      analogies: [
        "Doctors work like detectives - they gather clues (history and exam), look at evidence (tests), and solve the mystery (make a diagnosis).",
      ],
    },
    2: {
      level: 2,
      summary: "Diagnosis involves generating a differential diagnosis and using tests to confirm or exclude possibilities.",
      explanation:
        "The diagnostic process starts with the chief complaint - the main reason for the visit. The differential diagnosis is a list of possible conditions that could explain the symptoms. Doctors prioritize this list based on probability and severity, using the rule \"common things are common\" while not missing dangerous conditions. Diagnostic tests have varying sensitivity (ability to detect disease when present) and specificity (ability to rule out disease when absent). A working diagnosis guides initial treatment while further evaluation continues.",
      keyTerms: [
        {
          term: "Chief complaint",
          definition: "The main symptom or reason for seeking care",
        },
        {
          term: "Differential diagnosis",
          definition: "List of possible conditions explaining symptoms",
        },
        {
          term: "Sensitivity",
          definition: "Ability of a test to correctly identify disease",
        },
        {
          term: "Specificity",
          definition: "Ability of a test to correctly identify absence of disease",
        },
      ],
      analogies: [
        "A differential diagnosis is like a suspect list in a mystery - you start with many possibilities and narrow it down with evidence.",
      ],
    },
    3: {
      level: 3,
      summary: "Clinical reasoning integrates pattern recognition, probabilistic reasoning, and hypothesis testing to refine diagnoses.",
      explanation:
        "Diagnostic reasoning uses dual-process cognition: System 1 (fast, intuitive pattern recognition) and System 2 (slow, analytical reasoning). Pretest probability estimates likelihood of disease before testing. Likelihood ratios quantify how much a test result changes probability. Bayes theorem formally relates pretest probability, test characteristics, and post-test probability. Clinical decision rules combine findings into validated prediction tools. Red flags are clinical features suggesting serious underlying pathology requiring urgent evaluation. Premature closure - stopping the diagnostic process too early - is a common cognitive error.",
      keyTerms: [
        {
          term: "Pretest probability",
          definition: "Estimated likelihood of disease before testing",
        },
        {
          term: "Likelihood ratio",
          definition: "Factor by which test result changes disease probability",
        },
        {
          term: "Red flag",
          definition: "Warning sign of potentially serious condition",
        },
        {
          term: "Premature closure",
          definition: "Cognitive error of accepting diagnosis before adequate evaluation",
        },
      ],
      analogies: [
        "Pretest probability is like your initial gut feeling about a sports teams chances - tests then adjust that estimate up or down.",
      ],
    },
    4: {
      level: 4,
      summary: "Diagnostic uncertainty management involves test threshold decisions, cognitive debiasing, and systematic approaches to complex presentations.",
      explanation:
        "Test and treatment thresholds guide decision-making under uncertainty. Below the test threshold, disease probability is too low to warrant testing; above the treatment threshold, probability is high enough to treat without further testing. Cognitive biases affecting diagnosis include anchoring (over-reliance on initial impression), availability (overweighting recent or memorable cases), and confirmation bias (seeking evidence supporting initial hypothesis). Diagnostic time-outs and checklists promote systematic review. Diagnostic error includes missed, wrong, and delayed diagnoses; contributing factors include cognitive biases, system failures, and disease factors.",
      keyTerms: [
        {
          term: "Test threshold",
          definition: "Probability below which testing is not indicated",
        },
        {
          term: "Treatment threshold",
          definition: "Probability above which treatment should begin without further testing",
        },
        {
          term: "Anchoring bias",
          definition: "Over-reliance on initial diagnostic impression",
        },
        {
          term: "Diagnostic error",
          definition: "Failure to establish accurate and timely diagnosis",
        },
      ],
      clinicalNotes: "Diagnostic stewardship optimizes test utilization; high-value care avoids low-yield testing while ensuring appropriate evaluation for high-risk presentations.",
    },
    5: {
      level: 5,
      summary: "Diagnostic excellence integrates artificial intelligence, team-based approaches, and learning health systems for continuous improvement.",
      explanation:
        "AI-assisted diagnosis leverages machine learning for pattern recognition in imaging, pathology, and clinical data. Deep learning algorithms match or exceed human performance in specific narrow tasks but require validation across diverse populations. Clinical decision support systems provide real-time diagnostic prompts integrated with electronic health records. Diagnostic team approaches leverage collective intelligence; structured handoffs and huddles improve diagnostic continuity. Learning health systems analyze diagnostic errors for system improvement. Diagnostic uncertainty communication uses numeric and verbal descriptions to convey confidence appropriately. Overdiagnosis - detection of abnormalities that would never cause symptoms - is an emerging concern with sensitive testing.",
      keyTerms: [
        {
          term: "AI-assisted diagnosis",
          definition: "Machine learning applications supporting diagnostic reasoning",
        },
        {
          term: "Clinical decision support",
          definition: "Electronic tools providing real-time diagnostic guidance",
        },
        {
          term: "Overdiagnosis",
          definition: "Detection of abnormalities that would not cause harm",
        },
        {
          term: "Diagnostic stewardship",
          definition: "Optimizing test selection to improve value and outcomes",
        },
      ],
      clinicalNotes: "National Academy of Medicine report on diagnostic error recommends team-based diagnosis, better feedback systems, and culture prioritizing diagnostic excellence.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["diagnosis", "clinical reasoning", "decision making"],
    keywords: ["differential diagnosis", "diagnostic error", "clinical reasoning"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// PROGNOSIS TERMINOLOGY EDUCATIONAL CONTENT
// ============================================================================

export const prognosisTerminologyContent: EducationalContent = {
  id: "prognosis-terminology-content",
  type: "concept",
  name: "Prognosis Terminology",
  alternateNames: ["Outcome Terms", "Disease Course"],

  levels: {
    1: {
      level: 1,
      summary: "Prognosis is a prediction about what will happen with an illness - whether it will get better, stay the same, or get worse.",
      explanation:
        "After doctors figure out what is wrong (diagnosis), they can often predict what will happen next (prognosis). Some illnesses have a good prognosis - they usually get better with or without treatment. Others have a guarded or poor prognosis - they might be harder to treat or could get worse. Doctors look at many things to make these predictions, including the type of illness, how early it was found, and how healthy the person was to begin with.",
      keyTerms: [
        {
          term: "Prognosis",
          definition: "Prediction about how an illness will turn out",
        },
        {
          term: "Remission",
          definition: "When signs of illness decrease or disappear",
        },
        {
          term: "Recovery",
          definition: "Return to good health after illness",
        },
      ],
      analogies: [
        "Prognosis is like a weather forecast for your health - doctors predict what is likely to happen based on what they know.",
      ],
    },
    2: {
      level: 2,
      summary: "Prognosis describes expected disease course, including survival, remission, relapse, and complications.",
      explanation:
        "Prognostic terms describe different outcomes. Survival is often described as median survival (half of patients survive beyond this time) or 5-year survival rate. Remission means disease signs decrease; complete remission means no detectable disease, while partial remission means significant but incomplete response. Relapse or recurrence is return of disease after improvement. Progression means worsening disease. Cure implies permanent elimination of disease. Sequela (plural: sequelae) refers to lasting effects or complications following an illness.",
      keyTerms: [
        {
          term: "Median survival",
          definition: "Time point when half of patients have survived",
        },
        {
          term: "Complete remission",
          definition: "No detectable signs of disease",
        },
        {
          term: "Relapse",
          definition: "Return of disease after period of improvement",
        },
        {
          term: "Sequela",
          definition: "Lasting consequence or complication of an illness",
        },
      ],
      analogies: [
        "Remission is like a fire that has been put out - the flames are gone, but you keep watching in case it starts again (relapse).",
      ],
    },
    3: {
      level: 3,
      summary: "Prognostication uses staging systems, risk scores, and biomarkers to stratify patients and inform treatment decisions.",
      explanation:
        "Prognostic factors are patient or disease characteristics associated with outcomes independent of treatment. Predictive factors indicate response to specific treatments. Staging systems (TNM for cancer, NYHA for heart failure) categorize disease extent. Risk scores combine multiple factors into composite predictions (APACHE for ICU mortality, CHADS2-VASc for stroke risk in atrial fibrillation). Performance status (ECOG, Karnofsky) quantifies functional capacity. Natural history describes disease course without treatment. Survival analysis methods (Kaplan-Meier curves) account for patients lost to follow-up.",
      keyTerms: [
        {
          term: "Prognostic factor",
          definition: "Variable associated with disease outcome",
        },
        {
          term: "Predictive factor",
          definition: "Variable indicating response to specific treatment",
        },
        {
          term: "TNM staging",
          definition: "Cancer staging based on tumor, nodes, and metastases",
        },
        {
          term: "Performance status",
          definition: "Measure of functional capacity and daily activity ability",
        },
      ],
      analogies: [
        "Staging is like categorizing storms - Category 1 is mild, Category 5 is severe; it helps predict impact and guide response.",
      ],
    },
    4: {
      level: 4,
      summary: "Personalized prognostication integrates clinical, pathological, and molecular features into individualized risk estimates.",
      explanation:
        "Prognostic models combine multiple variables to predict individual outcomes. Nomograms are graphical tools integrating variables into probability estimates. Gene expression signatures provide molecular prognostic information independent of clinical staging. Circulating biomarkers (ctDNA, circulating tumor cells) enable dynamic monitoring of disease status. Comorbidity indices (Charlson) adjust prognosis for coexisting conditions. Minimal residual disease (MRD) detection identifies molecular relapse before clinical relapse. Prognostic communication should convey uncertainty and avoid false precision while respecting patient preferences for information.",
      keyTerms: [
        {
          term: "Nomogram",
          definition: "Graphical calculator combining variables into probability estimate",
        },
        {
          term: "Gene expression signature",
          definition: "Pattern of gene activity predicting outcome",
        },
        {
          term: "Minimal residual disease",
          definition: "Small amounts of disease detectable only with sensitive tests",
        },
        {
          term: "Comorbidity index",
          definition: "Score quantifying burden of coexisting conditions",
        },
      ],
      clinicalNotes: "Prognostic information guides treatment intensity, surveillance schedules, and goals-of-care discussions; shared decision-making incorporates patient values.",
    },
    5: {
      level: 5,
      summary: "Precision prognostication leverages multi-omic data, machine learning, and real-world evidence for dynamic outcome prediction.",
      explanation:
        "Machine learning models integrate high-dimensional data for prognostic prediction, though external validation and interpretability remain challenges. Polygenic risk scores aggregate genome-wide variant effects. Radiomics extracts prognostic features from imaging. Liquid biopsy enables non-invasive, serial molecular monitoring. Real-world evidence from registries and electronic health records complements clinical trial data. Dynamic prediction updates prognosis as new information accumulates. Competing risks analysis accounts for multiple possible outcomes. Surrogate endpoints accelerate clinical trials by predicting ultimate outcomes; validation requires demonstrating surrogacy holds across treatments. Prognostic heterogeneity within stages drives reclassification efforts.",
      keyTerms: [
        {
          term: "Polygenic risk score",
          definition: "Aggregate genetic risk from multiple variants",
        },
        {
          term: "Radiomics",
          definition: "Extraction of quantitative features from medical images",
        },
        {
          term: "Competing risks",
          definition: "Multiple possible outcomes that preclude each other",
        },
        {
          term: "Surrogate endpoint",
          definition: "Intermediate outcome predicting definitive clinical outcome",
        },
      ],
      clinicalNotes: "Adaptive treatment strategies adjust therapy based on evolving prognostic information; biomarker-stratified trials identify patients most likely to benefit from intensified or de-escalated approaches.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["diagnosis", "prognosis", "outcomes"],
    keywords: ["prognosis", "survival", "staging", "risk stratification"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const diagnosisTerminologyModule = {
  id: "diagnosis-terminology",
  name: "Diagnosis Terminology",
  description:
    "Educational content for diagnostic terminology including disease classification, diagnostic reasoning, and prognosis",
  content: [diseaseClassificationContent, diagnosticProcessContent, prognosisTerminologyContent],
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
};

export default diagnosisTerminologyModule;
