/**
 * Symptom Terminology Content
 *
 * Medical vocabulary for signs and symptoms:
 * - Pain terminology
 * - Vital sign abnormalities
 * - Constitutional symptoms
 * - System-specific symptoms
 * - Symptom descriptors
 */

import { EducationalContent } from "../types";

// ============================================================================
// PAIN TERMINOLOGY EDUCATIONAL CONTENT
// ============================================================================

export const painTerminologyContent: EducationalContent = {
  id: "pain-terminology-content",
  type: "concept",
  name: "Pain Terminology",
  alternateNames: ["Pain Descriptors", "Algesia Terms"],

  levels: {
    1: {
      level: 1,
      summary: "There are many words to describe different types of pain that help doctors understand what you are feeling.",
      explanation:
        "Pain can feel different depending on what is causing it. Sharp pain feels like being cut or poked. Dull pain feels like pressure or an ache. Burning pain feels hot. Cramping pain comes and goes in waves. When you describe your pain to a doctor, telling them how it feels helps them figure out what might be wrong. The location of pain (where it hurts) and when it started are also important clues.",
      keyTerms: [
        {
          term: "Acute pain",
          definition: "Pain that started recently and is usually sharp",
        },
        {
          term: "Chronic pain",
          definition: "Pain that has lasted a long time (more than 3 months)",
        },
        {
          term: "Radiating pain",
          definition: "Pain that spreads from one place to another",
        },
      ],
      analogies: [
        "Describing pain is like describing weather - you need to say if it is sharp like lightning, dull like cloudy skies, or comes in waves like rain showers.",
      ],
    },
    2: {
      level: 2,
      summary: "Pain terminology includes descriptors for quality, duration, location, and intensity.",
      explanation:
        "Medical professionals use specific terms to characterize pain. Quality descriptors include sharp (like a knife), dull (like pressure), burning (like heat), and throbbing (pulsating with heartbeat). Duration is classified as acute (recent onset) or chronic (>3 months). Location terms include localized (in one spot), diffuse (spread out), and referred (felt away from the source). Intensity is measured using scales like 0-10 numeric rating. These descriptors help differentiate causes - for example, colicky pain (cramping waves) suggests hollow organ involvement.",
      keyTerms: [
        {
          term: "Colicky",
          definition: "Cramping pain that comes in waves",
        },
        {
          term: "Referred pain",
          definition: "Pain felt in a location different from its source",
        },
        {
          term: "Localized",
          definition: "Pain confined to a specific area",
        },
        {
          term: "Diffuse",
          definition: "Pain spread over a wide area",
        },
      ],
      analogies: [
        "Colicky pain is like ocean waves - it builds up, peaks, then subsides, only to return again.",
      ],
    },
    3: {
      level: 3,
      summary: "Pain classification includes nociceptive, neuropathic, and nociplastic categories with distinct pathophysiology and descriptors.",
      explanation:
        "Pain is mechanistically classified into three categories. Nociceptive pain results from tissue damage and is further divided into somatic (musculoskeletal, well-localized) and visceral (organ-related, often diffuse or referred). Neuropathic pain results from nerve damage and is typically described as burning, shooting, or electric shock-like, often with allodynia (pain from normally non-painful stimuli) or hyperalgesia (increased pain from painful stimuli). Nociplastic pain involves altered pain processing without clear tissue or nerve damage, as seen in fibromyalgia. Understanding these categories guides treatment selection.",
      keyTerms: [
        {
          term: "Nociceptive pain",
          definition: "Pain from actual or threatened tissue damage",
        },
        {
          term: "Neuropathic pain",
          definition: "Pain from nerve damage or dysfunction",
        },
        {
          term: "Allodynia",
          definition: "Pain from stimuli that do not normally cause pain",
        },
        {
          term: "Hyperalgesia",
          definition: "Increased pain response to painful stimuli",
        },
      ],
      analogies: [
        "Neuropathic pain is like a faulty alarm system - the wires are damaged so it goes off even when there is no intruder.",
      ],
    },
    4: {
      level: 4,
      summary: "Pain assessment incorporates multidimensional evaluation including sensory, affective, and functional components.",
      explanation:
        "Comprehensive pain assessment uses validated tools addressing multiple dimensions. The McGill Pain Questionnaire captures sensory (throbbing, shooting, stabbing) and affective (tiring, sickening, fearful) qualities. Neuropathic pain screening tools (DN4, painDETECT) identify neuropathic components. Functional assessment evaluates pain interference with activities, sleep, and mood. Red flag symptoms (weight loss, fever, neurologic deficits) require urgent evaluation. Pain behavior observation supplements self-report in patients with communication limitations. Chronic pain assessment includes psychosocial factors and catastrophizing.",
      keyTerms: [
        {
          term: "Catastrophizing",
          definition: "Exaggerated negative orientation toward pain experience",
        },
        {
          term: "Somatic pain",
          definition: "Nociceptive pain from skin, muscle, bone, or joints",
        },
        {
          term: "Visceral pain",
          definition: "Nociceptive pain from internal organs",
        },
        {
          term: "Paresthesia",
          definition: "Abnormal sensations like tingling or pins and needles",
        },
      ],
      clinicalNotes: "OPQRST mnemonic (Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Timing) structures pain assessment.",
    },
    5: {
      level: 5,
      summary: "Pain neurobiology involves peripheral sensitization, central sensitization, and descending modulation, with terminology reflecting these mechanisms.",
      explanation:
        "Peripheral sensitization involves reduced nociceptor thresholds through inflammatory mediators (prostaglandins, bradykinin, NGF). Central sensitization in dorsal horn neurons produces wind-up, temporal summation, and expanded receptive fields - clinically manifested as hyperalgesia and allodynia. Descending pathways from PAG and RVM modulate transmission; dysfunction contributes to chronic pain. Glial activation and neuroinflammation perpetuate central sensitization. Phenotyping approaches (sensory profiling, quantitative sensory testing) identify mechanism-based subtypes. Terminology reflects these mechanisms: secondary hyperalgesia indicates central sensitization, while conditioned pain modulation tests descending inhibition.",
      keyTerms: [
        {
          term: "Central sensitization",
          definition: "Amplified CNS pain processing causing hypersensitivity",
        },
        {
          term: "Wind-up",
          definition: "Progressive increase in dorsal horn response to repeated stimuli",
        },
        {
          term: "Conditioned pain modulation",
          definition: "Pain inhibiting pain through descending pathways",
        },
        {
          term: "Temporal summation",
          definition: "Increased pain with repetitive stimulation at constant intensity",
        },
      ],
      clinicalNotes: "Quantitative sensory testing profiles identify gain-of-function (sensitization) or loss-of-function (deafferentation) phenotypes, guiding mechanism-based treatment.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["symptoms", "pain", "neurology"],
    keywords: ["pain terminology", "nociceptive", "neuropathic", "pain assessment"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// CONSTITUTIONAL SYMPTOMS EDUCATIONAL CONTENT
// ============================================================================

export const constitutionalSymptomsContent: EducationalContent = {
  id: "constitutional-symptoms-content",
  type: "concept",
  name: "Constitutional Symptoms",
  alternateNames: ["Systemic Symptoms", "General Symptoms"],

  levels: {
    1: {
      level: 1,
      summary: "Constitutional symptoms are feelings that affect your whole body, like fever, tiredness, or losing weight.",
      explanation:
        "When you are sick, you might feel bad all over, not just in one spot. These are called constitutional symptoms. Fever means your body temperature is higher than normal. Fatigue means feeling very tired even when you have rested. Malaise is a general feeling of being unwell. Night sweats are when you sweat a lot while sleeping. Losing weight without trying can also be a sign something is wrong. These symptoms tell doctors that something is affecting your whole body.",
      keyTerms: [
        {
          term: "Fever",
          definition: "Higher than normal body temperature",
        },
        {
          term: "Fatigue",
          definition: "Extreme tiredness that rest does not fix",
        },
        {
          term: "Malaise",
          definition: "A general feeling of being unwell",
        },
      ],
      analogies: [
        "Constitutional symptoms are like the check engine light in a car - they tell you something is wrong with the whole system, not just one part.",
      ],
    },
    2: {
      level: 2,
      summary: "Constitutional symptoms include fever, chills, fatigue, malaise, weight changes, and night sweats - indicating systemic illness.",
      explanation:
        "Constitutional symptoms reflect whole-body response to disease rather than specific organ involvement. Fever (pyrexia) results from the hypothalamus raising the body temperature set point, often due to infection or inflammation. Chills occur when the body tries to raise its temperature. Fatigue is overwhelming tiredness not relieved by rest. Night sweats (drenching sweats during sleep) can indicate infection, malignancy, or hormonal changes. Unintentional weight loss of more than 5% over 6-12 months is clinically significant and requires evaluation.",
      keyTerms: [
        {
          term: "Pyrexia",
          definition: "Medical term for fever",
        },
        {
          term: "Rigor",
          definition: "Severe shaking chill with fever",
        },
        {
          term: "Night sweats",
          definition: "Drenching sweats during sleep requiring changing clothes or sheets",
        },
        {
          term: "Anorexia",
          definition: "Loss of appetite",
        },
      ],
      analogies: [
        "Rigors (severe chills) happen when your body is rapidly turning up its thermostat - you shake while waiting for your temperature to rise.",
      ],
    },
    3: {
      level: 3,
      summary: "Constitutional symptoms arise from cytokine-mediated systemic inflammatory response and suggest infectious, inflammatory, or neoplastic processes.",
      explanation:
        "Constitutional symptoms result from circulating inflammatory mediators, particularly interleukin-1, interleukin-6, and tumor necrosis factor-alpha. These cytokines act on the hypothalamus to produce fever and on other tissues to cause fatigue, anorexia, and weight loss. The differential diagnosis for constitutional symptoms is broad but typically includes infection, malignancy, autoimmune/inflammatory conditions, and endocrine disorders. B symptoms in lymphoma specifically refer to fever >38C, night sweats, and >10% weight loss. Fever of unknown origin (FUO) is defined as fever >38.3C for >3 weeks without diagnosis after initial workup.",
      keyTerms: [
        {
          term: "Cytokine",
          definition: "Signaling protein mediating immune and inflammatory responses",
        },
        {
          term: "B symptoms",
          definition: "Fever, night sweats, weight loss in lymphoma staging",
        },
        {
          term: "Fever of unknown origin",
          definition: "Prolonged fever without diagnosis after evaluation",
        },
        {
          term: "Cachexia",
          definition: "Severe weight loss and muscle wasting from serious illness",
        },
      ],
      analogies: [
        "Cytokines are like emergency alerts sent throughout the body - they activate responses everywhere, causing widespread symptoms.",
      ],
    },
    4: {
      level: 4,
      summary: "Constitutional symptoms reflect activation of acute phase response and warrant systematic evaluation for underlying etiology.",
      explanation:
        "The acute phase response involves hepatic synthesis of acute phase reactants (CRP, fibrinogen, ferritin), leukocytosis, and metabolic changes (catabolism, negative nitrogen balance). Fever patterns may suggest specific etiologies: quotidian (daily) spikes in abscess, tertian in malaria, Pel-Ebstein pattern in Hodgkin lymphoma. Cachexia involves involuntary weight loss with muscle wasting and anorexia driven by tumor-derived factors and inflammatory cytokines; distinct from starvation, it does not respond to nutritional support alone. Fatigue assessment should differentiate somnolence, weakness, and psychological components.",
      keyTerms: [
        {
          term: "Acute phase response",
          definition: "Systemic reaction to inflammation with characteristic lab changes",
        },
        {
          term: "Quotidian fever",
          definition: "Daily fever spikes returning to normal",
        },
        {
          term: "Pel-Ebstein fever",
          definition: "Cyclical fever pattern classically associated with Hodgkin lymphoma",
        },
        {
          term: "Sarcopenia",
          definition: "Loss of skeletal muscle mass",
        },
      ],
      clinicalNotes: "FUO workup includes cultures, imaging (CT chest/abdomen/pelvis, PET), and serologic testing; biopsy of abnormal tissue often required for diagnosis.",
    },
    5: {
      level: 5,
      summary: "Constitutional symptoms involve complex neuroimmune interactions, with therapeutic targeting of specific cytokine pathways and metabolic disturbances.",
      explanation:
        "Fever results from PGE2 acting on EP3 receptors in the preoptic hypothalamus; NSAIDs inhibit cyclooxygenase-mediated PGE2 synthesis. Cancer cachexia involves hypothalamic melanocortin signaling, muscle proteolysis via ubiquitin-proteasome pathway, and altered lipid metabolism; trials target myostatin, ghrelin, and selective androgen receptor modulators. Cytokine-induced sickness behavior (fatigue, anorexia, social withdrawal) is mediated by vagal afferents and blood-brain barrier signaling. Inflammaging describes chronic low-grade inflammation contributing to age-related fatigue and frailty. Precision approaches identify specific cytokine drivers; IL-6 blockade improves cachexia in some malignancies.",
      keyTerms: [
        {
          term: "Sickness behavior",
          definition: "Coordinated behavioral changes induced by inflammatory cytokines",
        },
        {
          term: "Inflammaging",
          definition: "Chronic low-grade inflammation associated with aging",
        },
        {
          term: "Ubiquitin-proteasome pathway",
          definition: "Protein degradation system activated in cachexia",
        },
        {
          term: "Melanocortin system",
          definition: "Hypothalamic pathway regulating appetite and metabolism",
        },
      ],
      clinicalNotes: "Cancer cachexia has staging criteria (precachexia, cachexia, refractory cachexia); multimodal treatment addresses nutrition, exercise, and pharmacotherapy targeting specific pathways.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["symptoms", "systemic illness", "fever"],
    keywords: ["constitutional symptoms", "fever", "fatigue", "weight loss"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// SYMPTOM DESCRIPTORS EDUCATIONAL CONTENT
// ============================================================================

export const symptomDescriptorsContent: EducationalContent = {
  id: "symptom-descriptors-content",
  type: "concept",
  name: "Symptom Descriptors",
  alternateNames: ["Clinical Descriptors", "Symptom Qualifiers"],

  levels: {
    1: {
      level: 1,
      summary: "Doctors use special words to describe when symptoms happen and how they change.",
      explanation:
        "When doctors ask about your symptoms, they want to know when they started, how often they happen, and what makes them better or worse. Acute means something just started happening. Chronic means it has been going on for a long time. Intermittent means it comes and goes. Progressive means it keeps getting worse over time. These words help doctors understand what might be causing your problem.",
      keyTerms: [
        {
          term: "Acute",
          definition: "Started suddenly or recently",
        },
        {
          term: "Chronic",
          definition: "Has been happening for a long time",
        },
        {
          term: "Intermittent",
          definition: "Comes and goes",
        },
      ],
      analogies: [
        "Symptoms are like weather patterns - acute is like a sudden storm, chronic is like a long rainy season, and intermittent is like scattered showers.",
      ],
    },
    2: {
      level: 2,
      summary: "Symptom descriptors characterize onset, duration, frequency, and course of clinical findings.",
      explanation:
        "Temporal descriptors include acute (sudden onset, usually <2 weeks), subacute (between acute and chronic), and chronic (>3 months duration). Frequency terms include constant (always present), intermittent (episodic), and paroxysmal (sudden, brief episodes). Course descriptors include progressive (worsening), static (unchanged), and relapsing-remitting (alternating flares and remissions). Provoking and palliating factors describe what worsens or improves symptoms. These qualifiers help narrow differential diagnoses - for example, paroxysmal symptoms suggest episodic conditions like arrhythmias or seizures.",
      keyTerms: [
        {
          term: "Subacute",
          definition: "Between acute and chronic, typically 2-12 weeks",
        },
        {
          term: "Paroxysmal",
          definition: "Sudden, brief episodes with rapid onset and offset",
        },
        {
          term: "Progressive",
          definition: "Gradually worsening over time",
        },
        {
          term: "Relapsing-remitting",
          definition: "Alternating periods of symptoms and improvement",
        },
      ],
      analogies: [
        "Paroxysmal symptoms are like a light switch - they turn on suddenly and turn off just as quickly.",
      ],
    },
    3: {
      level: 3,
      summary: "Symptom characterization uses standardized terminology to describe temporal patterns, severity, and associated features.",
      explanation:
        "Onset descriptors include insidious (gradual, barely noticeable at first) versus sudden (maximal from beginning). Severity is quantified using validated scales or functional descriptors (mild, moderate, severe). Associated symptoms are systematically elicited to identify symptom clusters suggesting specific diagnoses. Prodromal symptoms precede the main illness. Sentinel symptoms are warning signs of serious conditions. Precipitating factors trigger symptom onset, while exacerbating factors worsen existing symptoms. Documentation should include negative findings (absence of expected associated symptoms) to support clinical reasoning.",
      keyTerms: [
        {
          term: "Insidious",
          definition: "Gradual onset that is hard to pinpoint",
        },
        {
          term: "Prodrome",
          definition: "Early symptoms preceding the main illness",
        },
        {
          term: "Sentinel symptom",
          definition: "Warning sign of potentially serious condition",
        },
        {
          term: "Exacerbating factor",
          definition: "Something that makes symptoms worse",
        },
      ],
      analogies: [
        "A prodrome is like thunder before lightning - it warns you something bigger is coming.",
      ],
    },
    4: {
      level: 4,
      summary: "Symptom phenotyping integrates qualitative descriptors with quantitative measures for diagnostic precision and outcomes assessment.",
      explanation:
        "Systematic symptom assessment uses patient-reported outcome measures (PROMs) for standardized quantification. Symptom severity indices exist for specific conditions (e.g., GERD-Q for reflux, SNOT-22 for sinusitis). Temporal patterns inform pathophysiology: circadian variation suggests hormonal influences, postprandial symptoms implicate GI processes, and nocturnal symptoms may indicate positional or sleep-related factors. Symptom trajectories (improving, stable, deteriorating) guide treatment decisions. Symptom burden encompasses multiple dimensions including frequency, severity, distress, and interference with function.",
      keyTerms: [
        {
          term: "Patient-reported outcome",
          definition: "Standardized measurement of symptoms reported directly by patient",
        },
        {
          term: "Circadian variation",
          definition: "Symptom changes following 24-hour cycle",
        },
        {
          term: "Symptom trajectory",
          definition: "Pattern of symptom change over time",
        },
        {
          term: "Symptom burden",
          definition: "Overall impact of symptoms on patient well-being",
        },
      ],
      clinicalNotes: "Minimum clinically important difference (MCID) defines the smallest change in symptom scores that patients perceive as meaningful.",
    },
    5: {
      level: 5,
      summary: "Advanced symptom science incorporates digital phenotyping, ecological momentary assessment, and machine learning for precision symptom characterization.",
      explanation:
        "Digital phenotyping uses passive smartphone sensor data (activity, sleep, social interaction) to characterize symptom patterns objectively. Ecological momentary assessment (EMA) captures real-time symptom reports, reducing recall bias. Electronic health record natural language processing extracts symptom information from clinical notes. Machine learning identifies symptom clusters and phenotypes predictive of diagnosis or prognosis. Multi-symptom models address symptom co-occurrence and interactions. Precision medicine approaches match symptom phenotypes to targeted interventions. Biosensors enable continuous symptom monitoring for conditions like heart failure and COPD.",
      keyTerms: [
        {
          term: "Digital phenotyping",
          definition: "Characterization using smartphone and wearable sensor data",
        },
        {
          term: "Ecological momentary assessment",
          definition: "Real-time symptom capture in natural environment",
        },
        {
          term: "Symptom cluster",
          definition: "Group of co-occurring symptoms with shared mechanism",
        },
        {
          term: "Recall bias",
          definition: "Inaccuracy in symptom reporting due to memory limitations",
        },
      ],
      clinicalNotes: "Remote symptom monitoring enables early intervention for exacerbations; AI-assisted symptom checkers triage patients but require validation against clinical outcomes.",
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ["symptoms", "clinical assessment", "terminology"],
    keywords: ["symptom descriptors", "temporal patterns", "clinical characterization"],
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const symptomTerminologyModule = {
  id: "symptom-terminology",
  name: "Symptom Terminology",
  description:
    "Educational content for symptom and sign terminology including pain descriptors, constitutional symptoms, and symptom characterization",
  content: [painTerminologyContent, constitutionalSymptomsContent, symptomDescriptorsContent],
  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
};

export default symptomTerminologyModule;
