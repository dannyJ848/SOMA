/**
 * explanation-levels.ts
 *
 * 5-Level Explanation System for Universal Accessibility
 *
 * Maps every medical concept to five audience tiers so that a single
 * knowledge base can serve a curious child, a worried patient, a nurse
 * reviewing protocols, a medical student studying for boards, or an
 * attending physician refining a differential.
 *
 * Levels
 * ------
 * 1  Child (ages 5-12)       grade 3-4   simple words, analogies
 * 2  Patient (general adult)  grade 6-8   plain language, terms defined inline
 * 3  Nursing / Allied Health  grade 10-12 clinical terminology, protocols
 * 4  Medical Student          grade 13-16 full pathophysiology, evidence-based
 * 5  Physician                professional expert reasoning, latest guidelines
 */

// ---------------------------------------------------------------------------
// 1. ExplanationLevel type and constants
// ---------------------------------------------------------------------------

export type ExplanationLevelNumber = 1 | 2 | 3 | 4 | 5;

export interface ExplanationLevel {
  /** Numeric tier (1-5) */
  level: ExplanationLevelNumber;
  /** Human-readable name */
  name: string;
  /** Short label for UI badges */
  label: string;
  /** Target audience description */
  audience: string;
  /** Age range string (informational) */
  ageRange: string;
  /** Key communication constraints */
  constraints: string[];
  /** Flesch-Kincaid grade-level range */
  readabilityGradeRange: [number, number];
  /** Target Flesch-Kincaid Reading Ease score range (0-100) */
  fleschReadingEaseRange: [number, number];
}

export const EXPLANATION_LEVELS: Record<ExplanationLevelNumber, ExplanationLevel> = {
  1: {
    level: 1,
    name: 'Child',
    label: 'Kids',
    audience: 'Children ages 5-12',
    ageRange: '5-12',
    constraints: [
      'Use simple, everyday words (1-2 syllables preferred)',
      'Analogies to toys, food, animals, playground, family life',
      'No medical jargon whatsoever',
      'Short sentences (8-12 words max)',
      'Active voice only',
      'Present tense preferred',
      'Concrete rather than abstract concepts',
      'Reassuring tone — avoid scary language',
    ],
    readabilityGradeRange: [3, 4],
    fleschReadingEaseRange: [90, 100],
  },
  2: {
    level: 2,
    name: 'Patient',
    label: 'Patient',
    audience: 'General adult patients and caregivers',
    ageRange: '18+',
    constraints: [
      'Plain language (6th-8th grade reading level)',
      'Define medical terms inline on first use',
      'Focus on practical "what does this mean for me?" framing',
      'Use bullet points and short paragraphs',
      'Include action items the reader can take',
      'Empathetic, supportive tone',
      'Avoid statistics without context',
      'Provide analogies where helpful',
    ],
    readabilityGradeRange: [6, 8],
    fleschReadingEaseRange: [60, 80],
  },
  3: {
    level: 3,
    name: 'Nursing/Allied Health',
    label: 'Nursing',
    audience: 'Nurses, PAs, respiratory therapists, allied health professionals',
    ageRange: 'Professional',
    constraints: [
      'Clinical terminology expected — no need to define standard terms',
      'Include pathophysiology basics relevant to nursing assessment',
      'Reference treatment protocols and care plans',
      'Note key vital-sign thresholds and red flags',
      'Mention relevant medications with classes and common side effects',
      'Include patient education talking points',
      'Evidence-based but practice-oriented',
    ],
    readabilityGradeRange: [10, 12],
    fleschReadingEaseRange: [40, 60],
  },
  4: {
    level: 4,
    name: 'Medical Student',
    label: 'Med Student',
    audience: 'Medical students, PA students, advanced learners',
    ageRange: 'Professional',
    constraints: [
      'Full pathophysiology with molecular/cellular detail where relevant',
      'Differential diagnosis reasoning',
      'Pharmacology: mechanism of action, pharmacokinetics, interactions',
      'Evidence-based: cite landmark trials and guidelines by name',
      'Epidemiology and risk factors',
      'Diagnostic workup algorithm',
      'Board-relevant clinical pearls',
      'Complications and prognosis',
    ],
    readabilityGradeRange: [13, 16],
    fleschReadingEaseRange: [20, 40],
  },
  5: {
    level: 5,
    name: 'Physician',
    label: 'Physician',
    audience: 'Attending physicians, specialists, researchers',
    ageRange: 'Professional',
    constraints: [
      'Expert-level clinical reasoning assumed',
      'Latest society guidelines with year (e.g., ADA 2025)',
      'Nuanced discussion of controversial or evolving topics',
      'Research context: recent RCTs, meta-analyses, ongoing trials',
      'Comparative effectiveness and cost-effectiveness data',
      'Subspecialty considerations and referral criteria',
      'Medicolegal and systems-based considerations',
      'Precision medicine and pharmacogenomics where applicable',
    ],
    readabilityGradeRange: [17, 20],
    fleschReadingEaseRange: [0, 30],
  },
};

// ---------------------------------------------------------------------------
// 2. ExplanationTemplate
// ---------------------------------------------------------------------------

export interface ExplanationTemplate {
  /** Which level this template targets */
  level: ExplanationLevelNumber;
  /** Structural sections the explanation should contain */
  sections: string[];
  /** Maximum word count guidance */
  maxWords: number;
  /** Sentence-length ceiling */
  maxSentenceWords: number;
  /** Whether to include citations */
  includeCitations: boolean;
  /** Whether to include images / diagram references */
  includeDiagramRefs: boolean;
  /** Tone keywords */
  tone: string[];
}

export const EXPLANATION_TEMPLATES: Record<ExplanationLevelNumber, ExplanationTemplate> = {
  1: {
    level: 1,
    sections: [
      'What is it? (simple analogy)',
      'What happens in your body?',
      'How do doctors help?',
      'What can you do?',
    ],
    maxWords: 200,
    maxSentenceWords: 12,
    includeCitations: false,
    includeDiagramRefs: true,
    tone: ['friendly', 'reassuring', 'curious', 'simple'],
  },
  2: {
    level: 2,
    sections: [
      'Overview',
      'Causes',
      'Symptoms',
      'Diagnosis',
      'Treatment options',
      'Self-care and prevention',
      'When to seek help',
    ],
    maxWords: 500,
    maxSentenceWords: 20,
    includeCitations: false,
    includeDiagramRefs: true,
    tone: ['empathetic', 'clear', 'empowering', 'practical'],
  },
  3: {
    level: 3,
    sections: [
      'Clinical overview',
      'Pathophysiology summary',
      'Assessment findings',
      'Diagnostic workup',
      'Treatment protocols',
      'Nursing considerations',
      'Patient education points',
      'Red flags / escalation criteria',
    ],
    maxWords: 800,
    maxSentenceWords: 25,
    includeCitations: true,
    includeDiagramRefs: true,
    tone: ['professional', 'concise', 'protocol-oriented'],
  },
  4: {
    level: 4,
    sections: [
      'Definition and epidemiology',
      'Etiology and risk factors',
      'Pathophysiology',
      'Clinical presentation',
      'Differential diagnosis',
      'Diagnostic evaluation',
      'Management and pharmacotherapy',
      'Complications and prognosis',
      'Board pearls',
    ],
    maxWords: 1200,
    maxSentenceWords: 30,
    includeCitations: true,
    includeDiagramRefs: true,
    tone: ['academic', 'thorough', 'evidence-based'],
  },
  5: {
    level: 5,
    sections: [
      'Clinical synopsis',
      'Pathobiology and molecular mechanisms',
      'Current diagnostic paradigm',
      'Evidence-based management',
      'Guideline comparison and controversies',
      'Emerging therapies and clinical trials',
      'Special populations',
      'Systems-based practice considerations',
    ],
    maxWords: 1500,
    maxSentenceWords: 35,
    includeCitations: true,
    includeDiagramRefs: true,
    tone: ['expert', 'nuanced', 'evidence-driven', 'scholarly'],
  },
};

// ---------------------------------------------------------------------------
// 3. levelPrompts — prompts for DeepSeek to generate level-appropriate text
// ---------------------------------------------------------------------------

export interface LevelPrompt {
  level: ExplanationLevelNumber;
  systemPrompt: string;
  userPromptTemplate: string;
}

export const LEVEL_PROMPTS: Record<ExplanationLevelNumber, LevelPrompt> = {
  1: {
    level: 1,
    systemPrompt: `You are a friendly doctor explaining things to a child between ages 5 and 12.
Rules:
- Use only simple, everyday words (1-2 syllables preferred).
- Compare body parts and processes to things kids know: toys, food, animals, games, family.
- NEVER use medical jargon. If you must name something, immediately explain it in kid words.
- Keep every sentence under 12 words.
- Use active voice and present tense.
- Be warm and reassuring — never scary.
- Total response under 200 words.
- Target Flesch-Kincaid grade level 3-4.`,
    userPromptTemplate: `Explain {condition} to a child. Use a fun analogy they can picture. Tell them:
1. What is it? (use a simple comparison)
2. What happens in the body?
3. How do doctors help?
4. What can the kid do to feel better or stay healthy?`,
  },

  2: {
    level: 2,
    systemPrompt: `You are a caring doctor speaking to an adult patient with no medical background.
Rules:
- Use plain language at a 6th-8th grade reading level.
- When you must use a medical term, define it in parentheses right away.
- Focus on practical information: "What does this mean for me?"
- Use short paragraphs and bullet points.
- Include clear action items.
- Be empathetic and empowering, not condescending.
- Avoid raw statistics — give context ("about 1 in 10 people" rather than "10.5%").
- Total response under 500 words.`,
    userPromptTemplate: `Explain {condition} to a patient in plain language. Cover:
1. What is {condition}?
2. What causes it?
3. What are the main symptoms?
4. How is it found and diagnosed?
5. What are the treatment options?
6. What can I do at home to manage it?
7. When should I call my doctor or go to the ER?`,
  },

  3: {
    level: 3,
    systemPrompt: `You are a clinical educator writing for nurses and allied health professionals.
Rules:
- Use standard clinical terminology without defining common terms.
- Include relevant pathophysiology to support clinical reasoning.
- Reference current treatment protocols and care standards.
- Note key vital-sign thresholds, lab values, and red flags.
- Include medication classes, common agents, and notable side effects.
- Provide patient-education talking points staff can share.
- Be evidence-based and practice-oriented.
- Total response under 800 words.`,
    userPromptTemplate: `Provide a clinical overview of {condition} for nursing/allied health staff. Include:
1. Clinical overview and definition
2. Pathophysiology summary
3. Key assessment findings (vitals, labs, physical exam)
4. Diagnostic workup
5. Current treatment protocols
6. Nursing considerations and care plan priorities
7. Patient education talking points
8. Red flags and escalation criteria`,
  },

  4: {
    level: 4,
    systemPrompt: `You are a medical school professor preparing a comprehensive review.
Rules:
- Provide full pathophysiology with molecular and cellular detail.
- Include differential diagnosis reasoning.
- Cover pharmacology: MOA, pharmacokinetics, drug interactions.
- Cite landmark trials and guidelines by name (e.g., UKPDS, JNC 8).
- Include epidemiology and risk-factor data.
- Present diagnostic algorithms.
- Highlight board-relevant clinical pearls.
- Total response under 1200 words.`,
    userPromptTemplate: `Write a medical-student-level review of {condition}. Cover:
1. Definition and epidemiology
2. Etiology and risk factors
3. Pathophysiology (cellular/molecular detail)
4. Clinical presentation and variants
5. Differential diagnosis
6. Diagnostic evaluation and algorithm
7. Management: first-line, second-line, pharmacotherapy details
8. Complications and prognosis
9. High-yield board pearls`,
  },

  5: {
    level: 5,
    systemPrompt: `You are a subspecialist writing for attending physicians.
Rules:
- Assume expert clinical knowledge.
- Reference the latest society guidelines with publication year.
- Discuss nuances, controversies, and evolving evidence.
- Include recent RCTs, meta-analyses, and ongoing clinical trials.
- Address comparative and cost-effectiveness where relevant.
- Discuss subspecialty referral criteria and special populations.
- Note medicolegal and systems-based practice issues.
- Integrate precision medicine and pharmacogenomics when applicable.
- Total response under 1500 words.`,
    userPromptTemplate: `Provide a physician-level expert review of {condition}. Cover:
1. Clinical synopsis with current nomenclature
2. Pathobiology and molecular mechanisms
3. Current diagnostic paradigm and emerging biomarkers
4. Evidence-based management with guideline comparisons
5. Controversies and areas of active debate
6. Emerging therapies and notable ongoing trials
7. Special populations (pediatric, geriatric, pregnant, immunocompromised)
8. Systems-based practice: cost, disparities, quality metrics`,
  },
};

/**
 * Returns the prompt pair (system + user) for a given level, with the
 * condition name interpolated into the user prompt.
 */
export function getPromptForLevel(
  level: ExplanationLevelNumber,
  condition: string,
): { systemPrompt: string; userPrompt: string } {
  const lp = LEVEL_PROMPTS[level];
  return {
    systemPrompt: lp.systemPrompt,
    userPrompt: lp.userPromptTemplate.replace(/\{condition\}/g, condition),
  };
}

// ---------------------------------------------------------------------------
// 4. adjustTextToLevel — transforms text between levels
// ---------------------------------------------------------------------------

export interface AdjustmentInstruction {
  from: ExplanationLevelNumber;
  to: ExplanationLevelNumber;
  systemPrompt: string;
}

/**
 * Generates the instruction prompt that can be sent to DeepSeek (or any LLM)
 * to transform an explanation from one level to another.
 *
 * This does NOT call an LLM directly — it returns the prompt so the caller
 * can route it through whatever inference pipeline is configured.
 */
export function adjustTextToLevel(
  text: string,
  fromLevel: ExplanationLevelNumber,
  toLevel: ExplanationLevelNumber,
): AdjustmentInstruction {
  const from = EXPLANATION_LEVELS[fromLevel];
  const to = EXPLANATION_LEVELS[toLevel];

  const direction = toLevel < fromLevel ? 'simplify' : 'elaborate';

  const constraintBlock = to.constraints.map((c) => `  - ${c}`).join('\n');

  const systemPrompt =
    direction === 'simplify'
      ? `You are a medical communication expert. Your task is to SIMPLIFY the following medical explanation.

Current level: "${from.name}" (Level ${from.level})
Target level: "${to.name}" (Level ${to.level})
Target audience: ${to.audience}
Target readability: Flesch-Kincaid grade ${to.readabilityGradeRange[0]}-${to.readabilityGradeRange[1]}

Constraints for the target level:
${constraintBlock}

Instructions:
- Rewrite the text so the target audience can fully understand it.
- Remove jargon${toLevel === 1 ? ' entirely' : ' or define it inline on first use'}.
- ${toLevel <= 2 ? 'Replace abstract concepts with concrete analogies.' : 'Maintain clinical accuracy while adjusting vocabulary.'}
- Keep the medical accuracy intact — simplify language, not facts.
- Target word count: ~${EXPLANATION_TEMPLATES[toLevel].maxWords} words.
- Maximum sentence length: ${EXPLANATION_TEMPLATES[toLevel].maxSentenceWords} words.

TEXT TO SIMPLIFY:
"""
${text}
"""`
      : `You are a medical communication expert. Your task is to ELABORATE the following medical explanation to a higher expertise level.

Current level: "${from.name}" (Level ${from.level})
Target level: "${to.name}" (Level ${to.level})
Target audience: ${to.audience}
Target readability: Flesch-Kincaid grade ${to.readabilityGradeRange[0]}-${to.readabilityGradeRange[1]}

Constraints for the target level:
${constraintBlock}

Instructions:
- Expand the explanation with additional clinical detail appropriate for the target audience.
- Add pathophysiology, evidence, and clinical nuance as appropriate.
- ${toLevel >= 4 ? 'Include references to landmark trials, guidelines, and current evidence.' : ''}
- ${toLevel === 5 ? 'Discuss controversies, emerging therapies, and systems-level considerations.' : ''}
- Maintain structure with clear sections.
- Target word count: ~${EXPLANATION_TEMPLATES[toLevel].maxWords} words.

TEXT TO ELABORATE:
"""
${text}
"""`;

  return { from: fromLevel, to: toLevel, systemPrompt };
}

// ---------------------------------------------------------------------------
// 5. getReadabilityTarget
// ---------------------------------------------------------------------------

export interface ReadabilityTarget {
  level: ExplanationLevelNumber;
  fleschKincaidGradeRange: [number, number];
  fleschReadingEaseRange: [number, number];
  /** Descriptive label */
  gradeLabel: string;
  /** Average syllables per word ceiling */
  avgSyllablesPerWord: number;
  /** Average words per sentence ceiling */
  avgWordsPerSentence: number;
}

export function getReadabilityTarget(level: ExplanationLevelNumber): ReadabilityTarget {
  const targets: Record<ExplanationLevelNumber, ReadabilityTarget> = {
    1: {
      level: 1,
      fleschKincaidGradeRange: [3, 4],
      fleschReadingEaseRange: [90, 100],
      gradeLabel: 'Grade 3-4 (elementary)',
      avgSyllablesPerWord: 1.2,
      avgWordsPerSentence: 10,
    },
    2: {
      level: 2,
      fleschKincaidGradeRange: [6, 8],
      fleschReadingEaseRange: [60, 80],
      gradeLabel: 'Grade 6-8 (middle school)',
      avgSyllablesPerWord: 1.5,
      avgWordsPerSentence: 17,
    },
    3: {
      level: 3,
      fleschKincaidGradeRange: [10, 12],
      fleschReadingEaseRange: [40, 60],
      gradeLabel: 'Grade 10-12 (high school / early college)',
      avgSyllablesPerWord: 1.7,
      avgWordsPerSentence: 22,
    },
    4: {
      level: 4,
      fleschKincaidGradeRange: [13, 16],
      fleschReadingEaseRange: [20, 40],
      gradeLabel: 'Grade 13-16 (undergraduate / graduate)',
      avgSyllablesPerWord: 1.9,
      avgWordsPerSentence: 27,
    },
    5: {
      level: 5,
      fleschKincaidGradeRange: [17, 20],
      fleschReadingEaseRange: [0, 30],
      gradeLabel: 'Professional / postgraduate',
      avgSyllablesPerWord: 2.1,
      avgWordsPerSentence: 30,
    },
  };
  return targets[level];
}

// ---------------------------------------------------------------------------
// 6. Example explanations for 10 common conditions at all 5 levels
// ---------------------------------------------------------------------------

export type ConditionKey =
  | 'diabetes'
  | 'hypertension'
  | 'asthma'
  | 'depression'
  | 'fracture'
  | 'uti'
  | 'pneumonia'
  | 'gerd'
  | 'anxiety'
  | 'osteoarthritis';

export interface ConditionExplanation {
  conditionKey: ConditionKey;
  conditionName: string;
  icd10: string;
  explanations: Record<ExplanationLevelNumber, string>;
}

export const CONDITION_EXPLANATIONS: Record<ConditionKey, ConditionExplanation> = {
  // ---------- DIABETES ----------
  diabetes: {
    conditionKey: 'diabetes',
    conditionName: 'Type 2 Diabetes Mellitus',
    icd10: 'E11',
    explanations: {
      1: `Imagine your body is like a car and sugar is the gas that makes it go. A helper called insulin is like the key that opens the door so the gas can get in. When someone has diabetes, the key doesn't work very well. The sugar stays in the blood instead of going into the body's cells. This can make a person feel really tired and thirsty. Doctors help by giving medicine and teaching people to eat healthy foods. You can help too — eating fruits and veggies and playing outside keeps your body running great!`,

      2: `Diabetes is a condition where your body has trouble using sugar (glucose) from the food you eat. Normally, a hormone called insulin helps move sugar from your blood into your cells for energy. With type 2 diabetes, your body either doesn't make enough insulin or can't use it properly — this is called "insulin resistance."

Over time, high blood sugar can harm your heart, kidneys, eyes, and nerves. Common symptoms include feeling very thirsty, urinating often, blurry vision, and tiredness.

Treatment usually starts with lifestyle changes — eating balanced meals, staying active, and losing weight if needed. Many people also take a medicine called metformin. Your doctor will check your blood sugar regularly with a test called HbA1c (a 3-month average of blood sugar).

At home you can: eat more vegetables and whole grains, walk 30 minutes a day, check your blood sugar if your doctor recommends it, and keep all follow-up appointments. Call your doctor if your blood sugar is very high or very low, or if you feel dizzy, confused, or sick.`,

      3: `Type 2 diabetes mellitus (T2DM) is a chronic metabolic disorder characterized by insulin resistance and progressive beta-cell dysfunction, resulting in hyperglycemia.

Pathophysiology: Peripheral tissues (muscle, adipose) show decreased insulin sensitivity. Hepatic glucose output increases. Pancreatic beta cells initially compensate with increased insulin secretion but progressively fail.

Assessment findings: Polyuria, polydipsia, polyphagia, fatigue, blurred vision, slow wound healing. Acanthosis nigricans may indicate insulin resistance. Monitor BMI, blood pressure, and foot exam at every visit.

Diagnostics: Fasting plasma glucose >= 126 mg/dL, HbA1c >= 6.5%, or 2-hour OGTT >= 200 mg/dL. Random glucose >= 200 with classic symptoms is also diagnostic.

Treatment protocols: First-line is metformin plus lifestyle modification. Second-line agents include SGLT2 inhibitors (cardiovascular and renal benefits), GLP-1 receptor agonists (weight and CV benefit), DPP-4 inhibitors, sulfonylureas, or insulin. Target HbA1c is generally < 7% but individualize.

Nursing considerations: Assess injection technique, glucometer use, hypoglycemia recognition, foot care. Screen for depression, which is twice as common in diabetic patients.

Red flags: DKA (rare in T2DM but possible), hyperosmolar hyperglycemic state (HHS) — altered mental status, glucose > 600, severe dehydration. Escalate immediately.`,

      4: `Type 2 Diabetes Mellitus (T2DM) — ICD-10 E11

Epidemiology: ~462 million affected worldwide (IDF). Prevalence increases with age, obesity, and sedentary lifestyle. Strong genetic component (concordance ~70% in monozygotic twins).

Pathophysiology: The "ominous octet" (DeFronzo): (1) decreased insulin secretion (beta-cell failure), (2) increased glucagon secretion, (3) increased hepatic glucose production, (4) decreased peripheral glucose uptake, (5) increased lipolysis, (6) decreased incretin effect, (7) increased renal glucose reabsorption, (8) neurotransmitter dysfunction.

Insulin resistance precedes overt diabetes by years. Amyloid (IAPP) deposition in islets contributes to beta-cell loss. Chronic low-grade inflammation and adipokine dysregulation perpetuate the cycle.

Differential: Type 1 DM (autoantibodies: GAD65, IA-2, ZnT8), LADA, MODY (genetic testing), secondary causes (Cushing's, acromegaly, pancreatitis, medications).

Diagnostics: FPG >= 126, HbA1c >= 6.5%, 2-hr OGTT >= 200. C-peptide helps distinguish T1 vs T2. Screen at age 35 or earlier with risk factors (ADA 2024).

Management:
- First-line: Metformin (biguanide — inhibits hepatic gluconeogenesis, activates AMPK). Titrate to 2000 mg/day. Monitor renal function; hold if eGFR < 30.
- SGLT2 inhibitors (empagliflozin, dapagliflozin): Inhibit renal glucose transporter. CV and renal outcome benefit (EMPA-REG, DAPA-CKD). Risk of euglycemic DKA, genital mycotic infections.
- GLP-1 RAs (semaglutide, liraglutide): Incretin mimetic. Weight loss, CV benefit (SUSTAIN-6, LEADER). GI side effects.
- Insulin therapy: Basal insulin when oral agents fail. Titrate to fasting glucose target.

Complications: Microvascular (retinopathy, nephropathy, neuropathy), macrovascular (CAD, PVD, stroke). Screen annually.

Board pearl: HHS presents with glucose > 600, serum osmolality > 320, no significant ketosis, AMS. Mortality ~15-20%. Treat with aggressive IV fluid resuscitation first, then insulin drip.`,

      5: `Type 2 Diabetes Mellitus — Expert Review

The pathobiological understanding of T2DM has evolved beyond the glucocentric model. Current evidence emphasizes a network of organ-level defects (DeFronzo's ominous octet), epigenetic programming (FTO, TCF7L2 polymorphisms), and the gut microbiome–metabolome axis in disease trajectory. Beta-cell dedifferentiation — not merely apoptosis — is now considered a key mechanism, with emerging evidence that early intensive insulin therapy may restore beta-cell identity markers (Talchai et al., Cell Metabolism).

Guideline landscape (2024-2025): The ADA Standards of Care (2025) and the ADA/EASD Consensus Report recommend a cardiorenal-metabolic phenotyping approach. For patients with established ASCVD, HF, or CKD, SGLT2 inhibitors and/or GLP-1 RAs should be used independent of HbA1c. The GRADE trial (NEJM 2022) showed GLP-1 RAs (liraglutide) and basal insulin (glargine) were most durable as add-on to metformin, with liraglutide offering the best metabolic and cardiovascular profile.

Emerging therapies: Tirzepatide (dual GIP/GLP-1 RA) demonstrated superior HbA1c reduction and weight loss vs. semaglutide in SURPASS-2. Oral semaglutide (PIONEER program) offers a non-injectable GLP-1 option. Aldose reductase inhibitors and PKC-beta inhibitors remain investigational for complications.

Controversies: HbA1c target individualization remains debated — ACCORD showed increased mortality with intensive control (HbA1c < 6%) in high-risk patients, while ADVANCE and VADT did not. Time-in-range (CGM metric > 70% between 70-180 mg/dL) is gaining traction as a complementary metric. The role of metabolic surgery for BMI 30-35 is supported by long-term data (STAMPEDE 10-year, NEJM 2024) but insurance barriers persist.

Health equity: T2DM disproportionately affects Black, Hispanic, and Native American populations. Social determinants of health — food deserts, health literacy, insurance status — must be addressed as part of a comprehensive care model. The CDC Diabetes Prevention Program (DPP) has shown sustained benefit, and CMS covers it for Medicare beneficiaries.`,
    },
  },

  // ---------- HYPERTENSION ----------
  hypertension: {
    conditionKey: 'hypertension',
    conditionName: 'Hypertension (High Blood Pressure)',
    icd10: 'I10',
    explanations: {
      1: `Think of a garden hose. When you turn the water up too high, the hose gets really tight and could even burst. Your blood moves through tiny tubes called blood vessels. When the push of the blood is too strong, it's like the water in the hose being too high. That's called high blood pressure. Most people can't feel it, so doctors check with that arm squeeze thing. Eating less salty food and running around outside helps keep the push just right!`,

      2: `High blood pressure (also called hypertension) means the force of blood pushing against your artery walls is consistently too high. Think of it like water pressure in a pipe — too much pressure over time can damage the pipes.

Most people with high blood pressure don't feel any symptoms, which is why it's called the "silent killer." Left untreated, it can lead to heart attack, stroke, kidney damage, and vision problems.

A normal reading is below 120/80. High blood pressure is 130/80 or above. Your doctor measures it with a cuff on your arm.

Treatment often starts with lifestyle changes: eat less salt (aim for under 2,300 mg a day), exercise regularly, limit alcohol, manage stress, and maintain a healthy weight. If that's not enough, your doctor may prescribe medication — common ones include lisinopril, amlodipine, or hydrochlorothiazide.

Check your blood pressure at home if your doctor recommends it. Call your doctor if readings are consistently above 180/120 — that's a medical emergency.`,

      3: `Hypertension is defined as systolic BP >= 130 mmHg or diastolic BP >= 80 mmHg (ACC/AHA 2017). It is the leading modifiable risk factor for cardiovascular disease globally.

Pathophysiology: Involves increased peripheral vascular resistance due to structural vascular remodeling, endothelial dysfunction, sympathetic overactivity, RAAS activation, and renal sodium retention. Over 90% of cases are primary (essential); secondary causes include renal artery stenosis, pheochromocytoma, primary aldosteronism, Cushing syndrome, coarctation, OSA, and thyroid disorders.

Assessment: Obtain BP in both arms at initial visit. Confirm with ambulatory or home monitoring. Assess end-organ damage: fundoscopy, BMP (creatinine, K+), urinalysis (proteinuria), ECG (LVH), lipid panel.

Treatment: Stage 1 (130-139/80-89) with low CV risk: lifestyle x 3-6 months. Stage 1 with high CV risk or Stage 2 (>= 140/90): pharmacotherapy + lifestyle. First-line: ACEi/ARB, CCB, or thiazide diuretic. Combine agents from different classes if monotherapy insufficient.

Nursing considerations: Teach correct home BP technique (proper cuff size, seated, arm at heart level). Review sodium intake. Assess medication adherence — explore barriers. Monitor for orthostatic hypotension, especially in elderly.

Red flags: Hypertensive urgency (>= 180/120 without end-organ damage) vs. emergency (with end-organ damage: AMS, chest pain, AKI, papilledema). Emergency requires IV antihypertensives and ICU admission.`,

      4: `Hypertension — ICD-10 I10

Epidemiology: Affects ~1.3 billion adults globally (WHO). In the US, prevalence ~47% under ACC/AHA 2017 thresholds. Leading risk factor for global DALYs lost.

Pathophysiology: Multifactorial — genetic (~30-50% heritability), environmental (sodium, obesity, stress), and neurohumoral (SNS, RAAS, endothelin, NO). Guyton model emphasizes the pressure-natriuresis curve: hypertensive individuals require higher pressure to excrete the same sodium load. Vascular remodeling (increased media-to-lumen ratio) sustains elevated resistance.

Secondary causes (screen when suspected): Renal parenchymal disease (most common secondary), renovascular (FMD in young women, atherosclerotic in older adults), primary aldosteronism (aldosterone:renin ratio), pheochromocytoma (24-hr urine catecholamines/metanephrines), Cushing syndrome, coarctation (arm-leg BP gradient), OSA.

Diagnostics: Office BP (average of 2-3 readings). ABPM is the gold standard for diagnosis. Assess ASCVD risk (PCE calculator). Lab workup: BMP, CBC, fasting lipids, TSH, urinalysis, ECG.

Pharmacotherapy:
- ACEi (lisinopril, enalapril): Block ACE, reduce angiotensin II. Cough in ~10% (bradykinin accumulation). CI in pregnancy, bilateral RAS, angioedema history.
- ARBs (losartan, valsartan): Block AT1 receptor. Similar efficacy, less cough.
- CCBs: Dihydropyridines (amlodipine) — vasodilation; non-dihydropyridines (diltiazem, verapamil) — rate control, CI with beta-blockers.
- Thiazides (chlorthalidone, HCTZ): Reduce volume, vascular resistance. ALLHAT showed chlorthalidone non-inferior to amlodipine/lisinopril.
- Resistant HTN (uncontrolled on 3 drugs including diuretic): Add spironolactone (PATHWAY-2 trial).

Board pearl: Do not combine ACEi + ARB + direct renin inhibitor — ALTITUDE trial showed increased adverse events without benefit.`,

      5: `Hypertension — Expert Review

The 2017 ACC/AHA guideline redefined hypertension as >= 130/80, sparking debate versus the ESC/ESH 2018 threshold of >= 140/90. The SPRINT trial (2015) demonstrated that targeting SBP < 120 in high-risk non-diabetic patients reduced MACE by 25% and all-cause mortality by 27%, though at the cost of increased AKI, electrolyte abnormalities, and hypotension. The external validity of SPRINT's automated office BP measurement (lower by 5-10 mmHg vs. routine office measurement) remains a point of contention.

Current controversies: Optimal BP targets in the elderly (>= 80) remain debated — HYVET and SPRINT subgroup support treatment, but polypharmacy and fall risk must be balanced. For diabetic patients, ACCORD-BP showed no benefit of SBP < 120 for MACE (vs. < 140), though stroke was reduced.

Primary aldosteronism prevalence: Now estimated at 5-10% of all hypertension (previously thought rare). The Endocrine Society 2016 guideline recommends screening with aldosterone:renin ratio for resistant HTN, spontaneous hypokalemia, adrenal incidentaloma, or early-onset HTN. Confirmatory testing (oral sodium loading or fludrocortisone suppression) followed by adrenal CT and, if needed, adrenal vein sampling.

Renal denervation: SPYRAL HTN-ON MED and RADIANCE-HTN TRIO showed modest but significant BP reductions in resistant HTN. The technology is FDA-approved (Symplicity Spyral, 2023) for select patients, though long-term outcome data remain limited.

Pharmacogenomics: CYP2D6 polymorphisms affect metoprolol metabolism. KCNJ5 mutations predict aldosterone-producing adenoma response to surgery. The field remains nascent but promising for personalizing antihypertensive selection.`,
    },
  },

  // ---------- ASTHMA ----------
  asthma: {
    conditionKey: 'asthma',
    conditionName: 'Asthma',
    icd10: 'J45',
    explanations: {
      1: `Inside your chest you have tubes that carry air to your lungs, kind of like straws. When someone has asthma, those straws get puffy and tight sometimes. It feels hard to breathe, like trying to blow through a really skinny straw. Things like dust, cold air, or running really fast can make it happen. Doctors give a special puffer called an inhaler. You breathe the medicine in and it opens the straws back up. Kids with asthma can still play sports and have fun — they just keep their inhaler close by!`,

      2: `Asthma is a long-term lung condition where the airways (the tubes that carry air to your lungs) become swollen and narrow, making it hard to breathe. During an asthma "attack," you may wheeze, cough, feel tightness in your chest, or get short of breath.

Common triggers include allergies (dust, pollen, pet dander), cold air, exercise, smoke, and strong emotions. Everyone's triggers are a little different.

Doctors usually diagnose asthma with a breathing test called spirometry — you blow into a machine that measures how fast and how much air you can push out.

Treatment includes two types of inhalers: a "rescue" inhaler (like albuterol) for quick relief during symptoms, and a "controller" inhaler (like fluticasone) used daily to prevent symptoms. Your doctor will create an Asthma Action Plan — a simple guide that tells you what to do when symptoms get worse.

At home: avoid your known triggers, take controller medicine every day even when you feel fine, and always carry your rescue inhaler. Go to the ER if your rescue inhaler isn't helping, you can't speak in full sentences, or your lips turn blue.`,

      3: `Asthma is a chronic inflammatory airway disease characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and airway remodeling.

Pathophysiology: IgE-mediated Type I hypersensitivity drives eosinophilic inflammation with mast cell degranulation, Th2 cytokines (IL-4, IL-5, IL-13), mucus hypersecretion, smooth muscle contraction, and subepithelial fibrosis.

Assessment: Wheezing (especially expiratory), cough (often nocturnal), dyspnea, chest tightness. Peak flow monitoring — personal best as baseline. Classify severity: intermittent, mild/moderate/severe persistent (based on symptom frequency, nighttime awakenings, FEV1, exacerbations).

Diagnostics: Spirometry with bronchodilator reversibility (>= 12% and >= 200 mL increase in FEV1). FeNO > 25 ppb supports eosinophilic inflammation. Consider methacholine challenge if spirometry is normal but suspicion is high.

Treatment (stepwise, GINA 2024):
- Step 1-2: PRN low-dose ICS-formoterol (preferred) or PRN SABA + low-dose ICS.
- Step 3: Low-dose ICS-LABA maintenance + PRN.
- Step 4: Medium-dose ICS-LABA.
- Step 5: High-dose ICS-LABA, add-on LAMA (tiotropium), or biologics (omalizumab, mepolizumab, dupilumab).

Nursing considerations: Teach and verify inhaler technique at every visit — incorrect use is the #1 cause of poor control. Ensure each patient has a written Asthma Action Plan. Monitor for oral candidiasis with ICS use (rinse mouth after).

Red flags: Status asthmaticus — severe exacerbation not responding to initial bronchodilators. Silent chest is ominous. Prepare for IV magnesium, continuous nebulization, and possible intubation.`,

      4: `Asthma — ICD-10 J45

Epidemiology: ~300 million worldwide. Prevalence highest in developed nations; rising in developing countries. Bimodal onset: childhood (allergic/atopic) and adult-onset (often non-allergic, eosinophilic or neutrophilic).

Pathophysiology: Complex gene-environment interaction. Key pathways:
- Type 2 (Th2-high): IL-4 drives IgE class switching, IL-5 recruits eosinophils, IL-13 causes mucus hypersecretion and AHR. Epithelial alarmins (TSLP, IL-25, IL-33) amplify the cascade.
- Non-Type 2 (Th2-low): Neutrophilic or paucigranulocytic. Often associated with obesity, smoking, or occupational exposures. Less responsive to corticosteroids.

Airway remodeling: Subepithelial fibrosis, smooth muscle hypertrophy/hyperplasia, goblet cell metaplasia, angiogenesis. Partially irreversible, contributes to fixed airflow obstruction.

Differential: COPD (older, smoking, less reversibility), vocal cord dysfunction (inspiratory stridor, flattened inspiratory loop), CHF ("cardiac asthma"), EGPA (eosinophilia + vasculitis), ABPA (in CF or asthma with high IgE, Aspergillus sensitization).

Pharmacology:
- ICS (fluticasone, budesonide): Suppress airway inflammation by inhibiting NF-κB, reducing cytokines. Dose-response plateau — doubling dose has diminishing returns; adding LABA is more effective.
- LABA (formoterol, salmeterol): Activate beta-2 adrenergic receptors on smooth muscle. Never use as monotherapy (FDA black box — SMART trial; resolved with ICS combination — AUSTRI/VESTRI).
- LAMA (tiotropium): Blocks M3 muscarinic receptors. Add-on for uncontrolled on ICS-LABA.
- Biologics: Omalizumab (anti-IgE), mepolizumab/benralizumab (anti-IL-5/IL-5R), dupilumab (anti-IL-4Rα), tezepelumab (anti-TSLP — first non-phenotype-specific biologic).

Board pearl: FeNO >= 25 ppb predicts ICS responsiveness. In acute severe asthma, normal or rising PaCO2 indicates fatigue and impending respiratory failure — do not be reassured by a "normal" blood gas.`,

      5: `Asthma — Expert Review

Endotype-driven management is reshaping asthma care. The T2-high vs. T2-low paradigm, while useful, is an oversimplification. Sputum transcriptomics (ADEPT, U-BIOPRED) reveal at least 5-6 molecular clusters that do not map neatly onto clinical phenotypes. Biomarker panels (FeNO, blood eosinophils, periostin, IgE) guide biologic selection but have imperfect sensitivity and specificity.

GINA 2024 updates: The track 1/track 2 approach is now standard. Track 1 (preferred): ICS-formoterol as both maintenance and reliever (MART). Track 2: ICS + SABA reliever. The SYGMA trials established that PRN budesonide-formoterol was superior to PRN SABA alone for mild asthma exacerbation prevention, ending the era of SABA-only treatment for intermittent asthma.

Biologics landscape: Tezepelumab (anti-TSLP, NAVIGATOR trial) is the first biologic to reduce exacerbations regardless of baseline eosinophil count or FeNO, positioning it as a potential option for T2-low severe asthma. Itepekimab (anti-IL-33) showed benefit in ex-smokers with moderate-to-severe asthma (LIBERTY trial). Astegolimab (anti-IL-33) did not meet primary endpoint in T2-low asthma, underscoring the heterogeneity challenge.

Bronchial thermoplasty: AIR2 and PAS2 showed reduction in severe exacerbations and ED visits at 5 years. However, uptake remains limited due to procedure burden, selection uncertainty, and the expanding biologic armamentarium.

Precision medicine: Pharmacogenomic studies of ADRB2 (Arg16Gly) have not yielded actionable clinical recommendations. Epigenetic modifications (DNA methylation at 17q21, ORMDL3/GSDMB locus) are implicated in childhood-onset asthma risk. Microbiome research (CHILD study, COPSAC) suggests that early-life bacterial diversity in the gut and airway influences asthma development — potential for microbiome-based interventions remains investigational.`,
    },
  },

  // ---------- DEPRESSION ----------
  depression: {
    conditionKey: 'depression',
    conditionName: 'Major Depressive Disorder',
    icd10: 'F32',
    explanations: {
      1: `Everyone feels sad sometimes — like when you lose a game or miss a friend. That's normal. But some people feel really, really sad for a long time. They might not want to play, eat, or do things they used to love. This is called depression. It's not their fault — it happens because of chemicals in the brain. Talking to a kind grown-up or a special doctor can help a lot. The good news is that people with depression can feel happy again with the right help. Being a good friend means being kind and patient.`,

      2: `Depression (also called major depressive disorder) is more than just feeling sad. It's a medical condition that affects how you think, feel, and handle daily life. It happens because of changes in brain chemistry, and it's not a sign of weakness or something you can just "snap out of."

Symptoms include feeling sad or empty most of the day, losing interest in activities you used to enjoy, changes in appetite or weight, trouble sleeping or sleeping too much, low energy, difficulty concentrating, and sometimes thoughts of death or suicide.

To be diagnosed, symptoms must last at least two weeks and interfere with your daily life. Your doctor may use a questionnaire called the PHQ-9.

Treatment is very effective and usually includes talk therapy (like cognitive behavioral therapy), medication (antidepressants such as sertraline or fluoxetine), or both. Most people see improvement within a few weeks of starting treatment.

At home: stay connected with people, try to move your body daily, keep a regular sleep schedule, and avoid alcohol. If you or someone you know is thinking about suicide, call 988 (Suicide & Crisis Lifeline) right away.`,

      3: `Major Depressive Disorder (MDD) is characterized by persistent depressed mood and/or anhedonia lasting >= 2 weeks, with functional impairment.

Pathophysiology: Monoamine hypothesis (serotonin, norepinephrine, dopamine deficiency) is the classic model, but neuroinflammation, HPA axis dysregulation, reduced BDNF, altered glutamate signaling, and disrupted neural circuits (prefrontal cortex, amygdala, hippocampus) all contribute.

Assessment: DSM-5 criteria — >= 5 of 9 symptoms for >= 2 weeks (SIG-E-CAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor changes, Suicidality). Use PHQ-9 for screening and monitoring. Always assess for suicide risk (Columbia Suicide Severity Rating Scale). Rule out hypothyroidism, anemia, substance use, bipolar disorder (MDQ screen).

Treatment:
- Mild-moderate: Psychotherapy (CBT, IPT) may be sufficient.
- Moderate-severe: SSRI (sertraline, escitalopram) or SNRI (venlafaxine, duloxetine) + psychotherapy. Full effect in 4-6 weeks.
- Treatment-resistant: Augmentation (lithium, atypical antipsychotics — aripiprazole), switch class, or esketamine (Spravato) nasal spray.

Nursing considerations: Monitor for suicidal ideation especially in first 2-4 weeks of antidepressant initiation (FDA black box for ages < 25). Assess medication adherence and side effects (sexual dysfunction, weight gain, GI symptoms). Educate about the lag period — medication takes time.

Red flags: Active suicidal ideation with plan and intent — ensure immediate psychiatric evaluation. Do not leave patient alone. Remove access to lethal means.`,

      4: `Major Depressive Disorder (MDD) — ICD-10 F32

Epidemiology: Lifetime prevalence ~17%. Female:male ratio 2:1. Peak onset ages 25-44. MDD is the leading cause of disability worldwide (WHO).

Pathophysiology: Beyond monoamine deficiency:
- Neuroinflammation: Elevated IL-6, TNF-α, CRP in a subset. Microglia activation in PET studies. May explain partial response to anti-inflammatory agents.
- HPA axis: Chronic cortisol elevation, impaired feedback via glucocorticoid receptor resistance. Dexamethasone non-suppression in ~50% of severe MDD.
- Neuroplasticity: Reduced hippocampal volume (reversible with treatment). Decreased BDNF. Glutamate/GABA imbalance.
- Connectome: Hyperactive default mode network (rumination), hypoactive frontoparietal network (executive function), altered reward circuitry (ventral striatum).

Differential: Bipolar II (screen with MDQ — critical, as antidepressants can trigger mania), dysthymia, adjustment disorder, grief, substance-induced, hypothyroidism, Cushing's, Parkinson's early presentation, pancreatic cancer (paraneoplastic depression).

Pharmacotherapy:
- SSRIs (sertraline, escitalopram): Block SERT. Start low, titrate. QTc prolongation with citalopram > 40 mg.
- SNRIs (venlafaxine, duloxetine): Block SERT + NET. Venlafaxine: monitor BP at higher doses. Duloxetine: also for neuropathic pain.
- Atypicals: Bupropion (NDRI — no sexual side effects, CI in seizure/eating disorders), mirtazapine (NaSSA — weight gain, sedation).
- MAOIs (phenelzine, tranylcypromine): Tyramine restriction. Reserved for treatment-resistant cases.
- Esketamine (Spravato): NMDA receptor antagonist. Rapid onset. REMS program required.

Board pearl: STAR*D trial showed ~1/3 remit with first SSRI, ~50% with second step, cumulative ~67% by step 4. Augmentation strategies (lithium, T3, atypical antipsychotics) supported by meta-analyses.`,

      5: `Major Depressive Disorder — Expert Review

The heterogeneity of MDD is a central challenge. The DSM-5 symptom criteria yield 227 possible symptom combinations, yet treatment selection remains largely empirical. Efforts to identify biologically informed subtypes include the EMBARC trial's identification of frontal theta cordance as a predictor of SSRI response, and the Stanford TIGER study linking neuroimaging biotypes to differential treatment outcomes.

Ketamine/esketamine: The rapid-acting antidepressant paradigm has been transformative. IV ketamine produces effects within hours, likely via AMPA receptor potentiation, BDNF release, and mTOR-mediated synaptogenesis. Esketamine (S-enantiomer) is FDA-approved for TRD and acute suicidality (ASPIRE trials). Concerns include abuse potential, dissociation, and cost. Arketamine (R-enantimer) is in Phase 3 trials and may have a better side-effect profile.

Psilocybin: Phase 2 data (COMPASS Pathways, Johns Hopkins) show rapid and sustained antidepressant effects after 1-2 sessions with psychological support. FDA Breakthrough Therapy designation for TRD. Mechanism involves 5-HT2A agonism, increased neural plasticity, and disruption of rigid DMN connectivity. Regulatory and implementation challenges remain significant.

Neuromodulation: TMS (rTMS to left DLPFC — FDA-approved), deep TMS (BrainsWay), Stanford accelerated SAINT protocol (5 days, 90% remission in open-label — randomized data from SAINT trial published in AJP 2022). VNS for chronic TRD. DBS (Brodmann area 25, ventral capsule/ventral striatum) remains investigational with mixed results in RCTs (BROADEN trial negative, but open-label data encouraging).

Inflammatory biotype: Approximately 25-30% of MDD patients show elevated CRP (> 3 mg/L). Post-hoc analyses of TREAD and GUIDED trials suggest these patients respond better to bupropion or nortriptyline than SSRIs. Anti-inflammatory adjuncts (celecoxib, minocycline) show modest benefit in meta-analyses but no FDA indication. Precision approaches using CRP-guided treatment selection are being tested prospectively.`,
    },
  },

  // ---------- FRACTURE ----------
  fracture: {
    conditionKey: 'fracture',
    conditionName: 'Bone Fracture',
    icd10: 'S00-T88',
    explanations: {
      1: `Your bones are super strong — like sticks that hold your body up. But sometimes if you fall really hard or bump into something, a bone can crack or break. That's called a fracture. It hurts a lot and the area might swell up. A doctor takes a special picture called an X-ray to see the break. Then they might put on a hard shell called a cast to keep the bone still while it heals. Your body is amazing — it can grow new bone to fix itself! It usually takes a few weeks. While it heals, be patient and let others help you.`,

      2: `A fracture is a medical term for a broken bone. It can happen from a fall, accident, sports injury, or even from weak bones (like in osteoporosis). Fractures range from a small crack to a complete break.

Common signs include sudden pain, swelling, bruising, difficulty moving the area, and sometimes a visible deformity. Your doctor will usually take an X-ray to confirm the break. Sometimes an MRI or CT scan is needed for more detail.

Treatment depends on the type and location of the fracture. Many fractures are treated with a cast, splint, or boot to keep the bone still while it heals. Some breaks need surgery with metal plates, screws, or rods.

Healing time varies — wrist fractures may take 6-8 weeks, while a leg fracture can take 3-6 months. During healing: follow your doctor's activity restrictions, elevate the area to reduce swelling, eat calcium-rich foods, and don't smoke (it slows healing).

See your doctor right away if you notice increasing numbness, tingling, severe swelling, or the cast feels too tight. Go to the ER for open fractures (bone visible through skin) or inability to move the limb at all.`,

      3: `A fracture is a disruption in bone continuity resulting from mechanical force exceeding bone strength, or pathologic weakening of bone.

Classification: Open vs. closed. Complete vs. incomplete (greenstick, torus/buckle in children). Pattern: transverse, oblique, spiral, comminuted, segmental, avulsion. Displacement, angulation, and rotation are documented. Specific eponymous types: Colles (distal radius, dorsal angulation), Smith (volar angulation), Monteggia (proximal ulna + radial head dislocation), Galeazzi (distal radius + DRUJ disruption), Jones (5th metatarsal base), Maisonneuve (medial malleolus + proximal fibula).

Assessment: Pain, swelling, deformity, crepitus, loss of function. Always assess neurovascular status distal to injury (pulses, sensation, capillary refill, motor function). Compartment syndrome — 5 P's: Pain (out of proportion, with passive stretch), Pressure, Pallor, Pulselessness, Paresthesias.

Diagnostics: X-ray (2 views minimum, include joint above and below). CT for complex intra-articular fractures. MRI for occult fractures (scaphoid, hip, stress fractures).

Treatment: Reduction (closed vs. open), immobilization, rehabilitation. Surgical indications: open fracture, intra-articular displacement, neurovascular compromise, failure of closed reduction, femoral neck fractures.

Nursing considerations: Neurovascular checks every 1-2 hours post-injury/post-op. Elevate extremity above heart level. Pain management (multimodal — acetaminophen, NSAIDs, limited opioids). DVT prophylaxis for lower extremity and surgical cases. Fall prevention in elderly.

Red flags: Compartment syndrome is a surgical emergency — fasciotomy within 6 hours. Fat embolism syndrome (long bone fractures): petechial rash, AMS, respiratory distress 24-72 hours post-injury.`,

      4: `Fractures — ICD-10 S00-T88 (location-specific codes)

Bone biology: Cortical bone (compact, Haversian systems) provides strength; cancellous/trabecular bone (spongy, at metaphyses) provides elasticity and metabolic activity. Wolff's law: bone remodels along lines of stress.

Fracture healing phases: (1) Inflammatory (0-2 weeks): hematoma formation, inflammatory cytokines recruit MSCs. (2) Soft callus (2-6 weeks): chondrocytes form cartilaginous callus (endochondral ossification). (3) Hard callus (6-12 weeks): osteoblasts replace cartilage with woven bone. (4) Remodeling (months-years): osteoclast/osteoblast coupling converts woven bone to lamellar bone.

Factors impairing healing: Smoking (vasoconstriction, impaired osteoblast function), NSAIDs (controversial — COX-2 inhibition may impair healing), diabetes, malnutrition, infection, inadequate immobilization, bisphosphonate use (atypical femur fractures with prolonged use).

Pathologic fractures: Metastatic disease (breast, lung, prostate, renal, thyroid — "BLT with a Kosher Pickle"), multiple myeloma, primary bone tumors, osteoporosis, Paget disease, osteogenesis imperfecta.

Key fracture management:
- Scaphoid: Snuffbox tenderness. Initial X-ray negative in 15-20% — MRI at 2 weeks or empiric thumb spica splint. AVN risk due to retrograde blood supply.
- Femoral neck (intracapsular): Garden classification. Displaced (Garden III/IV) in elderly — hemiarthroplasty or total hip arthroplasty. Undisplaced — internal fixation. AVN risk 15-30%.
- Open fractures: Gustilo-Anderson classification. All require IV antibiotics (cephalosporin + aminoglycoside for type III), tetanus prophylaxis, urgent irrigation and debridement within 6 hours (24h now acceptable per LEAP data for type I/II).

Board pearl: Toddler's fracture — non-displaced spiral tibial fracture in ages 9 months to 3 years from minor twisting mechanism. Often missed on initial X-ray. High suspicion in limping toddler.`,

      5: `Fractures — Expert Review

Damage control orthopedics (DCO) vs. early total care (ETC): For polytrauma patients with femoral shaft fractures, the DCO approach (initial external fixation, delayed definitive fixation) reduces the "second hit" inflammatory response (IL-6, IL-8) and incidence of ARDS/MOF. However, ETC with immediate intramedullary nailing is appropriate for hemodynamically stable patients without significant chest injury. The decision framework increasingly relies on lactate, base deficit, and ISS scoring rather than rigid protocols.

Atypical femoral fractures (AFF): Associated with prolonged bisphosphonate use (>5 years). Characterized by lateral cortex transverse fracture, cortical beaking, prodromal thigh pain. ASBMR Task Force criteria (2023 update). Risk is real but rare (~3.2-50 per 100,000 person-years). The fracture-prevention benefit of bisphosphonates dramatically outweighs AFF risk in high-risk osteoporosis patients — drug holidays after 5 years (alendronate) or 3 years (zoledronic acid) are debated.

Bone biologics: BMP-2 (rhBMP-2, INFUSE) accelerates healing in open tibia fractures and spinal fusion but has dose-dependent complications (inflammation, heterotopic ossification, potential malignancy concern — surveillance data ongoing). Teriparatide (PTH 1-34) accelerates fracture healing in preclinical studies and small clinical trials but is off-label for this indication. Romosozumab (anti-sclerostin, anabolic then antiresorptive) is approved for osteoporosis but fracture-healing data are limited.

Periprosthetic fractures: Increasing incidence with aging population and growing number of joint arthroplasties. Vancouver classification (femur around hip prosthesis) guides management: Type B2/B3 (loose stem) requires revision arthroplasty. Unified classification system (UCS) for all periprosthetic fractures proposed but not yet universally adopted.

3D printing and patient-specific implants: Increasingly used for complex periarticular fracture reduction planning and custom plate contouring. Reduces operative time and improves anatomic reduction accuracy in acetabular and tibial plateau fractures based on retrospective data.`,
    },
  },

  // ---------- UTI ----------
  uti: {
    conditionKey: 'uti',
    conditionName: 'Urinary Tract Infection',
    icd10: 'N39.0',
    explanations: {
      1: `When you go to the bathroom, pee travels through a little tube from a bag in your tummy called the bladder. Sometimes tiny germs — too small to see — can get into that tube and the bladder. When that happens, it's called a UTI. It can make it hurt when you go to the bathroom, and you might feel like you need to go a lot. The doctor gives special medicine to kill the germs, and you feel better in a day or two. Drinking lots of water and going to the bathroom when you need to helps keep germs away!`,

      2: `A urinary tract infection (UTI) happens when bacteria get into your urinary system — usually the bladder (this is called cystitis). Women get UTIs much more often than men because they have a shorter urethra (the tube that carries urine out of the body), making it easier for bacteria to reach the bladder.

Common symptoms: burning or pain when urinating, needing to go frequently, feeling urgent need to go, cloudy or strong-smelling urine, and sometimes blood in the urine. If the infection reaches the kidneys, you may have fever, back pain, nausea, and vomiting — this needs prompt treatment.

Diagnosis is usually by urine test. Treatment is antibiotics — most uncomplicated UTIs clear up in 3-5 days of medication.

Prevention tips: drink plenty of water, urinate when you feel the need (don't hold it), wipe front to back, urinate after sexual intercourse, and avoid irritating feminine products. Cranberry products may help some people, but evidence is mixed.

See your doctor if symptoms don't improve within 2 days of antibiotics, you develop fever or back pain, or you see blood in your urine.`,

      3: `Urinary tract infections (UTIs) encompass lower tract (cystitis, urethritis) and upper tract (pyelonephritis) infections, most commonly caused by Escherichia coli (~80% of uncomplicated cases).

Pathophysiology: Ascending infection from periurethral colonization. E. coli type 1 fimbriae adhere to uroepithelial receptors. Risk factors: female sex, sexual activity, pregnancy, diabetes, urinary catheterization, anatomic abnormalities, immunosuppression, post-menopausal estrogen deficiency.

Assessment: Cystitis: dysuria, frequency, urgency, suprapubic tenderness. Pyelonephritis: fever, flank pain, CVA tenderness, nausea/vomiting, plus lower tract symptoms. Complicated UTI: infection in presence of structural/functional abnormality, catheter, pregnancy, male sex, or immunocompromise.

Diagnostics: Urinalysis (pyuria, leukocyte esterase, nitrites, bacteriuria). Urine culture and sensitivity for: complicated UTI, pyelonephritis, treatment failure, recurrent UTI, pregnancy, catheter-associated UTI.

Treatment (IDSA guidelines):
- Uncomplicated cystitis: Nitrofurantoin 100 mg BID x 5 days, or TMP-SMX 160/800 BID x 3 days (if local resistance < 20%), or fosfomycin 3g single dose.
- Pyelonephritis (outpatient): Fluoroquinolone x 7 days or TMP-SMX x 14 days. Obtain culture.
- Pyelonephritis (inpatient): IV ceftriaxone or fluoroquinolone. Switch to oral when afebrile 48 hours.
- CAUTI: Remove or replace catheter. Treat only if symptomatic.

Nursing considerations: Asymptomatic bacteriuria — treat only in pregnancy and pre-urologic procedures. Avoid unnecessary catheterization. CAUTI prevention bundle: daily assessment of catheter necessity, aseptic insertion, proper drainage bag positioning.

Red flags: Urosepsis — fever, tachycardia, hypotension, AMS. Activate sepsis protocol. Blood cultures x2, IV antibiotics within 1 hour, fluid resuscitation.`,

      4: `Urinary Tract Infection — ICD-10 N39.0

Epidemiology: Most common bacterial infection. ~50-60% of women will have at least one UTI. Recurrent UTI: >= 3 per year or >= 2 in 6 months, affects ~25% of women with a first episode.

Microbiology: E. coli (75-95% uncomplicated, 50% complicated). Others: Klebsiella, Proteus (alkaline urine, struvite stones), Staphylococcus saprophyticus (young sexually active women), Enterococcus, Pseudomonas (catheter-associated). Fungal UTI: Candida in catheterized/diabetic/immunocompromised patients.

Pathophysiology: Uropathogenic E. coli (UPEC) virulence factors: type 1 fimbriae (mannose-sensitive, bind uroplakins), P-fimbriae (bind globoseries glycolipids on renal epithelium — associated with pyelonephritis), alpha-hemolysin, siderophores (iron acquisition), intracellular bacterial communities (IBCs) allow persistence within bladder epithelial cells — mechanism of recurrence.

Resistance patterns: Rising fluoroquinolone resistance globally. Extended-spectrum beta-lactamase (ESBL)-producing E. coli increasing in community-acquired UTIs. Always check local antibiogram. Fosfomycin retains activity against many ESBL producers.

Complicated UTI/pyelonephritis workup: CBC, BMP, blood cultures, urine culture. CT abdomen/pelvis with contrast if obstruction suspected (hydronephrosis, calculi, abscess). Renal ultrasound as initial imaging in pregnancy.

Recurrent UTI prophylaxis: Behavioral modification, post-coital prophylaxis (single-dose TMP-SMX or nitrofurantoin), continuous low-dose prophylaxis (nitrofurantoin 50-100 mg QHS x 6 months), vaginal estrogen in postmenopausal women (Cochrane-supported). Methenamine hippurate is an antibiotic-sparing option gaining renewed attention.

Board pearl: Sterile pyuria differential — partially treated UTI, urethritis (Chlamydia, Gonorrhea), renal TB, interstitial nephritis, nephrolithiasis, bladder cancer, appendicitis (appendix adjacent to bladder).`,

      5: `Urinary Tract Infection — Expert Review

The paradigm of UTI management is shifting as antimicrobial resistance accelerates and our understanding of the urinary microbiome evolves. The bladder is not sterile — enhanced quantitative urine culture (EQUC) has identified a diverse microbial community (urobiome) that differs between health and disease. Lactobacillus dominance in asymptomatic women vs. dysbiosis with UPEC overgrowth suggests a microbiome-modulation approach to prevention.

Guideline updates: The AUA/CUA/SUFU 2019 guideline on recurrent uncomplicated UTI formalized the recommendation for vaginal estrogen, methenamine hippurate, and immunostimulants (OM-89 / Uro-Vaxom) as antibiotic-sparing strategies. The EAU 2024 guidelines emphasize stratification: treat lower-tract UTI with shortest effective course (nitrofurantoin 5 days now preferred over 3-day TMP-SMX for resistance reasons).

ESBL-UTI in the community: Prevalence of CTX-M-producing E. coli community-acquired UTI now exceeds 10% in many US metropolitan areas. Fosfomycin (for cystitis) and nitrofurantoin retain activity but have limited tissue penetration for upper-tract disease. Pivmecillinam, widely used in Scandinavia, is increasingly studied in North America. For ESBL pyelonephritis, carbapenems remain standard, though ertapenem as outpatient parenteral therapy (OPAT) is well-established. MERINO trial confirmed meropenem superiority over piperacillin-tazobactam for ESBL bacteremia.

Biofilm-associated CAUTI: Catheter biofilms harbor polymicrobial communities with intrinsic antibiotic tolerance. Prevention remains paramount (ABCDE bundle, nurse-driven catheter removal protocols). Antimicrobial-coated catheters (silver alloy, nitrofurazone) show modest short-term benefit but no impact on symptomatic CAUTI in meta-analysis. Novel approaches include quorum-sensing inhibitors and bacteriophage-coated surfaces — preclinical stage.

Special populations: UTI in renal transplant recipients requires careful antibiotic selection (drug interactions with calcineurin inhibitors, nephrotoxicity). Asymptomatic bacteriuria in kidney transplant — previously treated in the first 6 months, but recent RCTs (Sabé et al., Clin Infect Dis 2022) challenge this practice, showing no benefit in screening or treating ASB beyond 2 months post-transplant.`,
    },
  },

  // ---------- PNEUMONIA ----------
  pneumonia: {
    conditionKey: 'pneumonia',
    conditionName: 'Pneumonia',
    icd10: 'J18',
    explanations: {
      1: `Your lungs are like two sponges in your chest that help you breathe. They fill up with air like balloons. Pneumonia is when germs get inside your lungs and make them sick. The little air pockets fill up with gooey stuff instead of air. That makes it hard to breathe, and you might cough a lot and have a fever. Doctors listen to your lungs with a stethoscope and might take a chest picture. Medicine helps the germs go away. Rest, drinks, and soup help you feel better. Most kids get all better!`,

      2: `Pneumonia is an infection in one or both lungs. The tiny air sacs (called alveoli) fill with fluid or pus, making it hard to breathe. It can be caused by bacteria, viruses, or rarely fungi.

Symptoms include cough (often with mucus), fever, chills, shortness of breath, chest pain when breathing or coughing, fatigue, and sometimes nausea. Older adults may have confusion instead of typical symptoms.

Your doctor may diagnose pneumonia with a chest X-ray and blood tests. A sputum (mucus) sample might also be tested.

Bacterial pneumonia is treated with antibiotics. Viral pneumonia usually improves on its own, though antiviral medications may be used for flu-related pneumonia. Most people recover in 1-3 weeks, but it can be dangerous for older adults, young children, and people with weakened immune systems.

At home: rest, drink plenty of fluids, take fever-reducing medication if needed, and finish all prescribed antibiotics. Get the pneumonia vaccine and annual flu shot — they help prevent many cases.

Go to the ER if you have severe breathing difficulty, chest pain, confusion, or a high fever that won't come down.`,

      3: `Pneumonia is an acute infection of the lung parenchyma causing alveolar inflammation and consolidation.

Classification: Community-acquired (CAP), hospital-acquired (HAP, onset > 48h after admission), ventilator-associated (VAP, > 48h after intubation), aspiration pneumonia.

Common pathogens — CAP: Streptococcus pneumoniae (most common typical), Mycoplasma pneumoniae, Chlamydophila pneumoniae (atypical), H. influenzae, Legionella, respiratory viruses (influenza, RSV, SARS-CoV-2). HAP/VAP: MRSA, Pseudomonas aeruginosa, Acinetobacter, ESBL Enterobacteriaceae.

Assessment: Cough (productive or dry), fever/chills, dyspnea, pleuritic chest pain, tachypnea, tachycardia, hypoxia. Auscultation: crackles, bronchial breath sounds, egophony, increased tactile fremitus over consolidation. Dullness to percussion.

Diagnostics: Chest X-ray (infiltrate confirms). CBC, BMP, lactate, blood cultures (if admitted), sputum culture/Gram stain, procalcitonin (helps differentiate bacterial vs. viral). Legionella and pneumococcal urinary antigens for severe CAP. CT chest if complication suspected.

Severity scoring: CURB-65 (Confusion, Urea > 7 mmol/L, RR >= 30, BP < 90/60, age >= 65) — 0-1 outpatient, 2 consider admission, >= 3 ICU. PSI/PORT for more detailed risk stratification.

Treatment (ATS/IDSA 2019):
- Outpatient, no comorbidities: Amoxicillin, or doxycycline, or macrolide (if resistance < 25%).
- Outpatient with comorbidities: Amoxicillin-clavulanate + macrolide, or respiratory fluoroquinolone.
- Inpatient (non-ICU): Beta-lactam (ceftriaxone, ampicillin-sulbactam) + macrolide, or respiratory fluoroquinolone alone.
- ICU: Beta-lactam + macrolide, or beta-lactam + fluoroquinolone. Add anti-MRSA and anti-pseudomonal if risk factors.

Nursing considerations: Incentive spirometry, early mobilization, DVT prophylaxis, aspiration precautions. Monitor for decompensation (worsening O2 requirement, hemodynamic instability). Ensure follow-up chest X-ray at 6 weeks to document resolution and exclude underlying malignancy.

Red flags: Sepsis/septic shock — activate sepsis bundle. Parapneumonic effusion/empyema — if large or loculated, consult for thoracentesis or chest tube. Lung abscess — prolonged antibiotics and possible drainage.`,

      4: `Pneumonia — ICD-10 J18 (unspecified), J13-J16 (organism-specific)

Epidemiology: Leading infectious cause of death worldwide. US: ~1.5 million ED visits, 50,000 deaths annually. Highest mortality in extremes of age and immunocompromised.

Pathophysiology: Pathogen reaches lower respiratory tract via microaspiration (most common), inhalation, hematogenous spread, or contiguous extension. Alveolar macrophages are overwhelmed, triggering neutrophilic infiltration, cytokine release (TNF-α, IL-1, IL-6, IL-8), alveolar edema, and consolidation. Gas exchange impairment leads to hypoxemia (V/Q mismatch and shunt physiology).

Atypical vs. typical: "Typical" (S. pneumoniae): acute onset, productive cough, lobar consolidation, elevated WBC. "Atypical" (Mycoplasma, Chlamydophila, Legionella): subacute, dry cough, diffuse interstitial pattern, extrapulmonary symptoms. Distinction is unreliable clinically — empiric therapy should cover both.

Pharmacology:
- Beta-lactams: Inhibit PBPs (cell wall synthesis). Ceftriaxone: 3rd-gen cephalosporin, excellent pneumococcal coverage.
- Macrolides (azithromycin): Bind 50S ribosome. Anti-inflammatory properties (may explain benefit even with resistant organisms). QTc prolongation risk.
- Fluoroquinolones (levofloxacin, moxifloxacin): DNA gyrase and topoisomerase IV inhibition. Avoid empiric use when TB possible (can partially treat and mask diagnosis).
- Anti-MRSA: Vancomycin (monitor troughs) or linezolid (MRSA pneumonia mortality data suggest linezolid may be superior — ZEPHyR trial).

Complications: Parapneumonic effusion (40% of bacterial pneumonia), empyema (pH < 7.2, glucose < 40, positive culture/Gram stain — requires drainage), lung abscess, ARDS, sepsis/MOF.

Vaccination: PCV20 (Prevnar 20) for all adults >= 65 and high-risk adults >= 19 (ACIP 2023). Replaces previous PCV15 + PPSV23 sequential schedule.

Board pearl: Cavitary pneumonia differential: S. aureus, Klebsiella, anaerobes (aspiration), TB, fungal, malignancy (squamous cell). Right upper lobe "bulging fissure" sign classic for Klebsiella.`,

      5: `Pneumonia — Expert Review

Risk stratification and site-of-care decisions: CURB-65 and PSI/PORT remain standard, but emerging biomarker-augmented scores (procalcitonin, mid-regional pro-adrenomedullin [MR-proADM]) improve prognostic accuracy. The STEP-CAP study (Lancet Respir Med 2024) showed that MR-proADM-guided disposition safely reduced admissions by 18% without increased mortality.

Microbiologic diagnostics: Multiplex PCR panels (BioFire FilmArray Pneumonia Panel) identify 33 targets (bacteria, viruses, resistance genes) from sputum/BAL in ~1 hour. Prospective studies show these panels improve pathogen-directed therapy and de-escalation rates, though clinical outcome impact requires further study. Metagenomic next-generation sequencing (mNGS) of BAL is emerging for immunocompromised patients with diagnostic uncertainty.

Corticosteroids in CAP: The landscape has evolved significantly. The CAPE COD trial (NEJM 2023) showed that hydrocortisone 200 mg/day in severe CAP reduced 28-day mortality (6.2% vs. 11.9%, NNT 18). ATS/IDSA updated guidance now supports steroids for severe CAP. Dexamethasone (6 mg x 4 days) showed faster clinical stability in non-severe CAP (Meduri paradigm). Key: exclude influenza and Aspergillus before steroids.

HAP/VAP management: The HAP/VAP guideline (ATS/IDSA 2016) is being updated with emphasis on local antibiogram-driven empiric therapy. Rapid diagnostics (Accelerate PhenoTest, BCID2) allow early targeted therapy. Inhaled antibiotics (amikacin, colistin) as adjunct in MDR VAP show improved clinical cure in meta-analysis but no mortality benefit.

Post-pneumonia considerations: ~40% of hospitalized CAP patients have a cardiovascular event within 1 year (CAPITA, Corrales-Medina data). Mechanism: systemic inflammation, platelet activation, endothelial dysfunction. This supports cardiovascular risk reassessment and aggressive secondary prevention post-pneumonia discharge. Long-term mortality after hospitalized CAP remains elevated for years, underscoring the need for recovery-focused follow-up beyond the traditional 6-week chest X-ray.`,
    },
  },

  // ---------- GERD ----------
  gerd: {
    conditionKey: 'gerd',
    conditionName: 'Gastroesophageal Reflux Disease',
    icd10: 'K21',
    explanations: {
      1: `At the top of your tummy there's a little door that opens to let food in and then closes. When that door doesn't close all the way, some of the yucky tummy juice splashes up into the food tube. It feels like a burning in your chest — some people call it heartburn. Eating too fast, too much, or lying down right after eating can make it worse. Doctors say to eat slower, not eat right before bed, and sometimes give medicine to make less tummy juice. It's not dangerous — it just feels icky!`,

      2: `GERD (gastroesophageal reflux disease) happens when stomach acid frequently flows back up into the tube connecting your mouth and stomach (the esophagus). A muscle at the bottom of the esophagus normally keeps acid in the stomach, but with GERD it relaxes too often or is too weak.

The main symptom is heartburn — a burning feeling in the middle of your chest, often after eating or at night. Other symptoms include regurgitation (acid taste in the back of your throat), difficulty swallowing, a lump sensation in the throat, or a chronic cough.

Lifestyle changes that help: avoid trigger foods (spicy, fatty, acidic, chocolate, caffeine, alcohol), eat smaller meals, don't eat 2-3 hours before bed, elevate the head of your bed 6-8 inches, maintain a healthy weight, and quit smoking.

Over-the-counter options include antacids for quick relief and medications like omeprazole (Prilosec) or famotidine (Pepcid) to reduce acid. Your doctor may prescribe stronger doses.

See your doctor if symptoms happen more than twice a week, don't improve with medication, you have trouble swallowing, or you're losing weight without trying. Rarely, long-term GERD can cause changes in the esophagus that need monitoring.`,

      3: `Gastroesophageal reflux disease (GERD) is defined as symptoms or complications resulting from retrograde flow of gastric contents into the esophagus, oral cavity, or lungs.

Pathophysiology: Transient lower esophageal sphincter relaxations (TLESRs) are the primary mechanism. Contributing factors: reduced LES tone, hiatal hernia (displacement of LES above diaphragm), impaired esophageal clearance, delayed gastric emptying, and obesity (increased intra-abdominal pressure).

Assessment: Typical: heartburn, regurgitation. Atypical/extraesophageal: chronic cough, laryngitis, dental erosion, asthma exacerbation. Alarm symptoms: dysphagia, odynophagia, weight loss, GI bleeding, anemia.

Diagnostics: Diagnosis is clinical for typical symptoms. EGD indicated for alarm symptoms, symptoms refractory to 8 weeks PPI, and screening for Barrett's in high-risk patients (chronic GERD > 5 years, male, age > 50, obesity, White, family history). pH monitoring (wireless Bravo capsule or catheter-based) or pH-impedance testing for PPI-refractory symptoms or pre-surgical evaluation.

Treatment:
- Lifestyle modifications (as outlined above).
- Step-up approach: H2RA (famotidine 20 mg BID) → PPI (omeprazole 20 mg daily x 8 weeks). Standard dose PPI before breakfast.
- Refractory: Double-dose PPI (BID), switch PPI. If still uncontrolled, pH-impedance testing on therapy to differentiate true refractory GERD from functional heartburn.
- Surgical: Nissen fundoplication (laparoscopic) for confirmed GERD with good PPI response but desire to stop medication. LINX magnetic sphincter augmentation as alternative.

Nursing considerations: Educate on PPI timing (30-60 min before meals). Address long-term PPI concerns (fracture risk, C. diff, hypomagnesemia — risks are small but counsel on appropriate use). Ensure medication reconciliation — PPIs have drug interactions (clopidogrel controversy, largely resolved for omeprazole).

Red flags: Dysphagia in GERD patient — rule out stricture, Schatzki ring, eosinophilic esophagitis, or malignancy. Any GI bleeding requires urgent EGD.`,

      4: `GERD — ICD-10 K21

Epidemiology: Prevalence 20-30% in Western populations. Rising globally with obesity. Barrett's esophagus develops in ~10-15% of chronic GERD; annual progression to esophageal adenocarcinoma ~0.5%.

Pathophysiology: TLESR — mediated by vagal reflex arc triggered by gastric fundus distension. Acid pocket: postprandial acid pool at gastric cardia, above ingested meal, abutting LES — particularly relevant in hiatal hernia where the acid pocket migrates above the diaphragm. Impaired esophageal mucosal defense: dilated intercellular spaces (DIS) on electron microscopy, reduced mucosal blood flow, impaired bicarbonate secretion.

Differential: Functional heartburn (Rome IV: heartburn + normal endoscopy + normal acid exposure + no reflux-symptom correlation on pH-impedance), eosinophilic esophagitis (dysphagia, food impaction, rings/furrows on EGD, >= 15 eos/HPF), achalasia (paradoxically can cause heartburn from fermentation), cardiac chest pain, pill esophagitis, esophageal motility disorders.

Pharmacology:
- PPIs (omeprazole, lansoprazole, esomeprazole, pantoprazole, rabeprazole, dexlansoprazole): Irreversible H+/K+ ATPase inhibitors. Prodrugs requiring acid activation in parietal cell canaliculus. CYP2C19 polymorphisms affect metabolism (poor metabolizers have higher drug levels and better efficacy). Esomeprazole (S-isomer) has more predictable metabolism.
- H2RAs (famotidine): Competitive histamine H2 receptor blockade. Useful for nocturnal acid breakthrough.
- Potassium-competitive acid blockers (vonoprawzan): Competitive, reversible inhibitor of H+/K+ ATPase. Faster onset than PPIs, effective regardless of meal timing. FDA-approved in combination with antibiotics for H. pylori. Emerging data for GERD (PHALCON-EE trial).
- Baclofen: GABA-B agonist, reduces TLESRs. Limited by CNS side effects.

Barrett's esophagus: Intestinal metaplasia at GEJ. Confirmed by goblet cells on biopsy. Surveillance: non-dysplastic every 3-5 years, low-grade dysplasia every 6-12 months (or endoscopic eradication), high-grade dysplasia/T1a adenocarcinoma — endoscopic eradication therapy (radiofrequency ablation ± endoscopic mucosal resection).

Board pearl: Chronic GERD patient with progressive dysphagia to solids — think peptic stricture (smooth, tapered narrowing). If irregular mucosa or mass — think malignancy. Young patient with dysphagia and food impaction — think eosinophilic esophagitis even if heartburn is present.`,

      5: `GERD — Expert Review

The Lyon Consensus 2.0 (2024) provides the updated diagnostic framework: acid exposure time (AET) > 6% on pH-impedance monitoring is conclusive for pathologic reflux; AET < 4% rules it out; 4-6% is inconclusive and requires adjunctive metrics (number of reflux episodes, MNBI, post-reflux swallow-induced peristaltic wave index). This framework has improved diagnostic accuracy for PPI-refractory symptoms and reduced unnecessary fundoplications.

Refractory GERD phenotyping: Among PPI non-responders referred for pH-impedance testing, approximately 30-40% have functional heartburn (no reflux), 20% have esophageal hypersensitivity (normal reflux but reflux-symptom association), 10-15% have non-acid reflux, and only 20-30% have true refractory acid reflux. Treatment differs dramatically: neuromodulators (TCAs, SSRIs) for functional heartburn, anti-reflux surgery only for confirmed reflux.

Vonoprawzan (P-CABs): First-in-class potassium-competitive acid blocker approved in the US (2022, initially for H. pylori). PHALCON-EE and PHALCON-NED trials demonstrated non-inferiority to lansoprazole for erosive and non-erosive GERD, with faster day-1 heartburn resolution. Acid suppression is independent of meal timing (advantage over PPIs). Whether P-CABs will supplant PPIs for GERD remains to be determined — cost and long-term safety data are needed.

Endoscopic therapies: Transoral incisionless fundoplication (TIF, EsophyX) shows moderate efficacy in carefully selected patients (Hill grade I-II, hiatal hernia < 2 cm, non-obese). The RESPECT trial showed TIF superior to sham for PPI elimination. Stretta (radiofrequency energy to LES) has weaker evidence. Anti-reflux mucosectomy (ARMS) is emerging from Japan with promising short-term data but requires further validation.

Long-term PPI safety: Large pharmacoepidemiologic studies (VA cohort, Xie et al. BMJ 2019) suggested associations with CKD, dementia, fractures, and death, but confounding by indication and healthy-user bias limit causal inference. The COMPASS trial (Moayyedi, Gastroenterology 2019) — only RCT — showed no difference in adverse events over 3 years of pantoprazole vs. placebo. Current expert consensus: PPIs are safe for appropriate indications; avoid indefinite use without periodic reassessment.`,
    },
  },

  // ---------- ANXIETY ----------
  anxiety: {
    conditionKey: 'anxiety',
    conditionName: 'Generalized Anxiety Disorder',
    icd10: 'F41.1',
    explanations: {
      1: `You know that nervous feeling you get before a big test or when you hear a scary noise? That's worry, and everyone feels it sometimes — it helps keep you safe! But some people feel really worried almost all the time, even when nothing scary is happening. Their heart might beat fast, their tummy might hurt, and it's hard to think about anything else. This is called anxiety. It's not their fault — their brain's "alarm system" is just a little too loud. Talking to someone you trust and learning breathing tricks can help turn the alarm down.`,

      2: `Anxiety is a normal emotion — everyone feels it sometimes. But generalized anxiety disorder (GAD) is when you feel excessive worry about many things most days, for at least 6 months, and it's hard to control.

Symptoms include: constant worry or dread, difficulty relaxing, feeling on edge, trouble concentrating, muscle tension, sleep problems, irritability, fatigue, and sometimes physical symptoms like headaches or stomachaches.

GAD is very common and treatable. Your doctor may use a questionnaire called the GAD-7 to assess your symptoms. They'll also check that another condition (like thyroid problems) isn't causing your symptoms.

Treatment options include:
- Cognitive behavioral therapy (CBT) — teaches you to recognize and change unhelpful thought patterns. Very effective for anxiety.
- Medication — SSRIs (like sertraline) or SNRIs (like venlafaxine) are first-line. Buspirone is another option. Benzodiazepines (like lorazepam) may be used short-term but can be habit-forming.
- Self-help — regular exercise, mindfulness and meditation, limiting caffeine and alcohol, good sleep habits.

Most people improve significantly with treatment. Recovery takes time — medication can take 4-6 weeks to work fully, and therapy skills build gradually. Don't hesitate to ask for help — anxiety disorders are among the most treatable mental health conditions.`,

      3: `Generalized Anxiety Disorder (GAD) is characterized by excessive, difficult-to-control worry about multiple domains occurring more days than not for >= 6 months, with associated somatic and cognitive symptoms.

Pathophysiology: Dysregulation of fear circuitry involving the amygdala, prefrontal cortex, and bed nucleus of the stria terminalis (BNST — "anxiety center" vs. amygdala "fear center"). GABAergic inhibition is reduced; serotonergic and noradrenergic signaling are disrupted. HPA axis hyperactivity with elevated cortisol. Genetic heritability ~30%.

Assessment: DSM-5 criteria: excessive anxiety/worry + >= 3 of: restlessness, fatigue, concentration difficulty, irritability, muscle tension, sleep disturbance. Use GAD-7 for screening (>= 10 moderate, >= 15 severe). Rule out: hyperthyroidism, pheochromocytoma, caffeine/stimulant use, medication side effects, other anxiety disorders (panic, social, PTSD, OCD).

Treatment:
- First-line pharmacotherapy: SSRIs (sertraline, escitalopram) or SNRIs (venlafaxine XR, duloxetine). Start low, titrate slowly — anxious patients are sensitive to activation side effects.
- Second-line: Buspirone (5-HT1A partial agonist, no sedation/dependence, slow onset 2-4 weeks), pregabalin (evidence from European studies, off-label in US), hydroxyzine (antihistamine, for acute anxiety/insomnia).
- Benzodiazepines: Short-term bridge only. Effective but risk of dependence, cognitive impairment, falls in elderly. Lorazepam, clonazepam common choices.
- Psychotherapy: CBT is first-line (comparable efficacy to medication). ACT (Acceptance and Commitment Therapy) also evidence-based.

Nursing considerations: Assess for comorbid depression (frequently co-occurs). Monitor for suicidal ideation. Educate about medication timeline (4-6 weeks for full effect). Teach diaphragmatic breathing and grounding techniques for acute anxiety.

Red flags: Panic attacks with chest pain — rule out cardiac etiology. New-onset anxiety in elderly — screen for medical causes and depression. Benzodiazepine withdrawal can cause seizures — never abruptly discontinue.`,

      4: `Generalized Anxiety Disorder — ICD-10 F41.1

Epidemiology: Lifetime prevalence ~6%. Female:male 2:1. Median age of onset 30 years, but can occur at any age. Highly comorbid: ~60% have comorbid MDD, 50% another anxiety disorder.

Neurobiology: Cortico-striatal-thalamic-cortical (CSTC) loop dysregulation. Key findings:
- Amygdala hyperreactivity to ambiguous stimuli (intolerance of uncertainty model).
- PFC hypofunction (impaired top-down regulation).
- Default mode network (DMN) hyperconnectivity (persistent self-referential worry).
- GABA deficit: MRS studies show reduced GABA in occipital cortex. Benzodiazepines act on GABA-A receptors (alpha-1: sedation, alpha-2/3: anxiolysis).
- Serotonin: Altered 5-HT1A receptor binding in PET studies. SSRIs increase serotonergic tone but therapeutic mechanism likely involves downstream neuroplasticity.

Differential: Panic disorder (discrete episodes with crescendo-decrescendo), social anxiety disorder (performance/social situations), PTSD (trauma-linked), OCD (intrusive thoughts + compulsions), illness anxiety disorder, somatic symptom disorder. Medical mimics: hyperthyroidism, pheochromocytoma, hyperparathyroidism, arrhythmia, temporal lobe epilepsy, substance use/withdrawal.

Pharmacotherapy details:
- SSRIs/SNRIs: First-line. Number needed to treat (NNT) ~5 for response. Escitalopram has the most RCT data. Venlafaxine XR effective across the dose range; monitor BP at higher doses.
- Buspirone: 5-HT1A partial agonist at presynaptic (somatodendritic autoreceptors — initially reduces serotonin firing, then desensitization upregulates signaling) and postsynaptic receptors. Onset 2-4 weeks. No dependence potential. Can augment SSRI.
- Pregabalin: Alpha-2-delta ligand (reduces presynaptic Ca2+ influx, glutamate release). European guidelines list as first-line; not FDA-approved for GAD in US. NNT ~4-5. Potential for misuse — Schedule V.
- Benzodiazepines: Rapid efficacy. Tolerance develops to sedation but not anxiolysis (debated). Long-term use associated with cognitive decline, falls, dependence. Taper slowly if discontinuing (10-25% dose reduction every 1-2 weeks).

CBT mechanisms: Cognitive restructuring (identify and challenge catastrophic thinking), behavioral experiments, graded exposure to worry triggers, relaxation training. Meta-analyses show CBT and SSRIs have comparable efficacy; combination may be superior.

Board pearl: "Anxiety sensitivity" (fear of anxiety symptoms themselves) is a transdiagnostic construct that predicts panic disorder and maintains GAD. Interoceptive exposure (deliberately inducing physical sensations of anxiety) reduces anxiety sensitivity.`,

      5: `Generalized Anxiety Disorder — Expert Review

The neuroscience of pathological worry has moved beyond simple neurotransmitter models. Computational psychiatry approaches frame GAD as an intolerance-of-uncertainty (IU) disorder: patients overestimate threat probability and cost, underestimate coping ability, and require excessive evidence to feel safe. Bayesian brain models suggest aberrant precision-weighting of predictions — the brain assigns too much salience to potential negative outcomes. This computational framework aligns with neuroimaging data showing amygdala-PFC decoupling and DMN hyperactivation.

Pharmacotherapy controversies: The role of benzodiazepines in GAD management remains contentious. The APA Practice Guideline (2024 update) recommends benzodiazepines only as short-term adjuncts or for patients who have failed multiple first-line agents, citing dependence risk, cognitive impairment, and a 2020 VA/DoD meta-analysis showing no long-term benefit over SSRIs. However, some experts argue that benzodiazepine phobia has swung too far, leaving patients with refractory symptoms undertreated. The BALANCE approach (individualized benefit-risk assessment, lowest effective dose, regular reassessment) is gaining traction.

Novel targets: The glutamate hypothesis has generated interest in NMDA receptor modulators. Riluzole (glutamate release inhibitor) showed promise in open-label studies but failed to separate from placebo in an RCT. Ketamine infusions reduce anxiety acutely, but data specific to GAD are limited. The endocannabinoid system (CBD) has public enthusiasm outpacing evidence — the largest RCT to date (Berger et al., AJP 2024) showed modest benefit of pharmaceutical-grade CBD (300 mg) over placebo for GAD at 12 weeks, but effect size was small (Cohen's d = 0.28).

Digital therapeutics: FDA-approved digital CBT for insomnia (Somryst) has paved the regulatory path. Woebot and other AI-guided CBT apps show comparable efficacy to human-delivered bibliotherapy in mild-to-moderate GAD (RCTs published in JMIR). The scalability advantage is substantial given the shortage of therapists, particularly in rural and underserved communities.

Psychedelic-assisted therapy: Psilocybin-assisted therapy trials for GAD are underway (NCT05543303, NYU Langone). Preliminary data from the GAD indication are limited compared to MDD and end-of-life anxiety. MDMA-assisted therapy's FDA trajectory (rejected for PTSD in 2024 due to methodological concerns) has introduced caution to the field.`,
    },
  },

  // ---------- OSTEOARTHRITIS ----------
  osteoarthritis: {
    conditionKey: 'osteoarthritis',
    conditionName: 'Osteoarthritis',
    icd10: 'M15-M19',
    explanations: {
      1: `Between your bones there's something smooth and slippery called cartilage. It works like a cushion so your bones don't rub together — kind of like the padding inside a bike helmet. When someone has osteoarthritis, that cushion wears down over time. The bones start rubbing, and it can hurt, especially in the knees, hips, or hands. Older people get it more often because the cushion has been used for a long time. Moving around, staying a healthy weight, and sometimes medicine help it feel better. It doesn't mean you can't play — just that your joints need a little extra care!`,

      2: `Osteoarthritis (OA) is the most common type of arthritis. It happens when the cartilage — the smooth, protective covering on the ends of your bones — slowly wears down over time. When cartilage breaks down, bones rub closer together, causing pain, stiffness, and swelling.

It most commonly affects the knees, hips, hands, and spine. Risk factors include aging (most common after 50), being overweight (extra pressure on joints), previous joint injuries, and family history.

Symptoms include joint pain that worsens with activity, stiffness (especially in the morning or after sitting — usually improves within 30 minutes), reduced range of motion, and sometimes a grinding feeling.

There's no cure, but many treatments help manage symptoms:
- Stay active — low-impact exercise (walking, swimming, cycling) strengthens muscles around joints
- Maintain a healthy weight — every pound lost takes 4 pounds of pressure off your knees
- Pain relievers — acetaminophen, anti-inflammatory gels or pills (like ibuprofen)
- Physical therapy — very effective for strengthening and flexibility
- Joint injections — cortisone shots for flare-ups, or hyaluronic acid
- Surgery (joint replacement) — when other options stop working

See your doctor if pain significantly limits your daily activities, joints become swollen or deformed, or you can't find relief with over-the-counter medications.`,

      3: `Osteoarthritis (OA) is a degenerative joint disease characterized by progressive cartilage loss, subchondral bone changes, osteophyte formation, and synovial inflammation. It is now understood as a whole-joint disease, not merely "wear and tear."

Pathophysiology: Mechanical stress and biological factors lead to chondrocyte dysfunction, upregulation of matrix metalloproteinases (MMPs), loss of proteoglycans and type II collagen, subchondral bone sclerosis and cyst formation, osteophyte growth, and mild-moderate synovial inflammation (low-grade inflammatory OA phenotype).

Assessment: Pain with activity (improved with rest), morning stiffness < 30 minutes (vs. > 60 min in RA), crepitus, bony enlargement (Heberden's nodes at DIP, Bouchard's at PIP), reduced ROM, joint line tenderness, antalgic gait. Commonly affects weight-bearing joints (knees, hips), hands (DIP, 1st CMC), and spine.

Diagnostics: Clinical diagnosis primarily. X-ray findings: joint space narrowing, osteophytes, subchondral sclerosis, subchondral cysts. Kellgren-Lawrence grading (0-4). Labs generally normal (ESR, CRP mildly elevated in inflammatory OA; RF and anti-CCP negative — helps exclude RA). MRI for early OA or to evaluate meniscal/ligamentous pathology.

Treatment (ACR/AF 2019 guidelines):
- Core: Exercise (land-based and aquatic), weight management, patient education, self-management programs.
- Pharmacologic: Topical NSAIDs (first-line for knee OA), oral NSAIDs (lowest effective dose, shortest duration — GI and CV risk), acetaminophen (limited efficacy, no longer strongly recommended), duloxetine (centralized pain component).
- Intra-articular: Corticosteroid injections (short-term relief, limit frequency). Hyaluronic acid (controversial — ACR conditionally against, but widely used). PRP — insufficient evidence for strong recommendation.
- Surgical: Arthroscopic debridement NOT recommended (METEOR, FIDELITY trials). Total joint arthroplasty for end-stage OA — highly effective.

Nursing considerations: Assess functional status and fall risk. Encourage adherence to exercise programs. Monitor NSAID use (renal function, GI symptoms, cardiovascular risk). Post-operative TJA: DVT prophylaxis, early mobilization, pain management, physical therapy.

Red flags: Acute hot swollen joint — rule out septic arthritis (joint aspiration, cell count > 50,000 with PMN predominance) or crystalline arthropathy (gout/pseudogout). Joint locking — possible loose body or meniscal tear.`,

      4: `Osteoarthritis — ICD-10 M15-M19

Epidemiology: Most prevalent joint disease worldwide (~300 million). Knee OA: ~10% of men and 13% of women over 60. Major cause of disability. Economic burden in the US exceeds $100 billion annually (direct + indirect costs).

Pathophysiology: OA is a heterogeneous disease with distinct endotypes:
- Biomechanical: Malalignment, post-traumatic, obesity-driven. Mechanical overload triggers chondrocyte stress responses.
- Inflammatory: Synovitis, elevated IL-1β, TNF-α, IL-6, MMP-13, ADAMTS-5 (aggrecanase). Complement activation in synovial fluid.
- Metabolic: Systemic low-grade inflammation in metabolic syndrome. Adipokines (leptin, adiponectin) modulate cartilage degradation. "Metabolic OA" phenotype in obese patients — hand OA prevalence is increased despite non-weight-bearing, implicating systemic factors.
- Aging/cellular senescence: Chondrocyte senescence with senescence-associated secretory phenotype (SASP) — IL-6, MMP-3, MMP-13. Mitochondrial dysfunction and oxidative stress. Decreased autophagy.

Subchondral bone: Not merely reactive — subchondral bone remodeling (osteoclast/osteoblast uncoupling) may precede cartilage loss in early OA. Bone marrow lesions (BMLs) on MRI correlate with pain and progression.

Differential: Rheumatoid arthritis (symmetric, MCP/PIP, morning stiffness > 60 min, RF+/anti-CCP+), psoriatic arthritis (DIP involvement — can mimic OA, check for skin/nail findings, dactylitis), CPPD deposition disease (chondrocalcinosis on X-ray, inflammatory flares), hemochromatosis arthropathy (2nd-3rd MCP, hook-like osteophytes), avascular necrosis.

Pharmacology:
- Oral NSAIDs: COX-1/COX-2 inhibition. Nonselective (ibuprofen, naproxen) — GI risk (PPI co-prescription if risk factors). COX-2 selective (celecoxib) — less GI risk but cardiovascular concern (CLASS, VIGOR trials; PRECISION trial showed celecoxib non-inferior to naproxen/ibuprofen for CV events at moderate doses).
- Duloxetine: SNRI. Effective for OA pain via central sensitization mechanism. NICE-recommended as adjunct.
- Topical capsaicin: Substance P depletion. Modest efficacy, irritant side effects.
- Intra-articular corticosteroids: Rapid but short-lived relief (weeks). Repeated injections may accelerate cartilage loss (McAlindon 2017 RCT — 2-year triamcinolone vs. saline showed greater cartilage volume loss with steroid, though clinical significance is debated).

Board pearl: "Squaring" of the 1st CMC joint on X-ray is characteristic of OA. Erosive OA (inflammatory hand OA with "gull-wing" and "saw-tooth" deformities at DIP/PIP) is a recognized aggressive subtype.`,

      5: `Osteoarthritis — Expert Review

Disease-modifying OA drugs (DMOADs): The holy grail of OA therapeutics remains elusive. The most advanced DMOAD candidates:
- Sprifermin (rhFGF-18): Phase 2 (FORWARD trial) showed dose-dependent cartilage thickness gain on MRI at 3 and 5 years — the first agent to demonstrate structural modification. Phase 3 trials ongoing. Clinical symptom benefit was modest, raising the question of whether structural modification translates to meaningful patient outcomes.
- Anti-NGF antibodies (tanezumab, fasinumab): Potent analgesics via tropomyosin receptor kinase A (TrkA) inhibition. Phase 3 showed significant pain reduction vs. NSAIDs and placebo. However, FDA rejected tanezumab (2021) due to rapidly progressive OA (RPOA) signal — joint destruction requiring replacement in ~2.5% (vs. ~0.5% NSAID). Fasinumab discontinued. The field has pivoted to lower doses and refined patient selection, but regulatory path remains uncertain.
- Lorecivivint (SM04690): Wnt pathway inhibitor (CLK2/DYRK1A). Phase 2 showed modest medial JSW improvement vs. placebo. Phase 3 (NCT03928184) results mixed — primary endpoint narrowly missed in some analyses.
- Senolytic therapies: Clearance of senescent chondrocytes (UBX0101, a local MDM2 inhibitor) failed Phase 2. Systemic senolytics (dasatinib + quercetin) being explored in preclinical OA models with encouraging results but no human OA data.

Imaging advances: MRI-based biomarkers are transforming OA clinical trials. Cartilage compositional mapping (T2, T1rho, dGEMRIC) detects pre-radiographic biochemical changes. The FNIH OA Biomarkers Consortium identified MRI-based structural progression biomarkers (cartilage thickness, bone marrow lesions) that predict radiographic and clinical outcomes, enabling enrichment of clinical trial populations.

Mechanobiology: Increased appreciation of the role of mechanical loading in OA progression has led to biomechanically informed interventions. Valgus unloading braces and lateral wedge insoles have variable evidence, but gait retraining (reducing knee adduction moment) shows promise in biomechanical studies. High tibial osteotomy remains effective for medial compartment OA with varus malalignment, particularly in younger, active patients — an alternative to early TKA.

Total joint arthroplasty outcomes: TKA and THA are among the most cost-effective interventions in all of medicine (QALY gains of 2-5 at costs below $20,000/QALY). However, ~20% of TKA patients remain dissatisfied. Predictors of dissatisfaction include catastrophizing, unrealistic expectations, depression, and mild preoperative disease. Patient selection optimization and expectation management are active research areas.`,
    },
  },
};

// ---------------------------------------------------------------------------
// Helper: list all conditions
// ---------------------------------------------------------------------------

export const ALL_CONDITION_KEYS: ConditionKey[] = [
  'diabetes',
  'hypertension',
  'asthma',
  'depression',
  'fracture',
  'uti',
  'pneumonia',
  'gerd',
  'anxiety',
  'osteoarthritis',
];

export function getConditionExplanation(
  condition: ConditionKey,
  level: ExplanationLevelNumber,
): string {
  return CONDITION_EXPLANATIONS[condition].explanations[level];
}

export function getAllLevelsForCondition(
  condition: ConditionKey,
): Record<ExplanationLevelNumber, string> {
  return CONDITION_EXPLANATIONS[condition].explanations;
}
