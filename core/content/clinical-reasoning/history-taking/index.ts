/**
 * History-Taking Educational Content
 *
 * Comprehensive frameworks for gathering medical history, teaching patients:
 * - What physicians look for and why
 * - How to communicate symptoms effectively
 * - Common mnemonics used in clinical practice
 * - Why certain questions are asked
 */

import { HistoryFramework } from '../types';

/**
 * OLDCARTS - Comprehensive symptom analysis framework
 */
export const OLDCARTS_FRAMEWORK: HistoryFramework = {
  id: 'history-oldcarts',
  name: 'OLDCARTS Framework',
  acronym: 'OLDCARTS',
  fullName: 'Onset, Location, Duration, Character, Aggravating factors, Relieving factors, Timing, Severity',
  applicableTo: ['pain', 'symptoms', 'chief complaint', 'any symptom'],

  levels: {
    1: {
      level: 1,
      summary: 'OLDCARTS is a way to describe your symptoms so your doctor understands exactly what you are experiencing.',
      explanation: `When you visit a doctor, they need to understand your symptoms clearly. OLDCARTS is like a checklist that helps you describe what is wrong in a way that gives doctors all the information they need.

**Why This Matters:**
Imagine if you told a friend "I feel bad." They would not know how to help! But if you said "My stomach started hurting after lunch, it feels like cramping, and it gets worse when I eat," they would understand much better. That is what OLDCARTS helps you do with your doctor.

**The OLDCARTS Checklist:**
- **O - Onset**: When did it start?
- **L - Location**: Where does it hurt or feel wrong?
- **D - Duration**: How long does it last?
- **C - Character**: What does it feel like?
- **A - Aggravating**: What makes it worse?
- **R - Relieving**: What makes it better?
- **T - Timing**: Does it come and go or stay constant?
- **S - Severity**: How bad is it on a scale of 1-10?

**How to Use It:**
Before your doctor visit, think through each letter. Write down your answers so you do not forget anything important!`,
      keyTerms: [
        { term: 'symptom', definition: 'Something you feel that tells you something might be wrong, like pain or feeling tired' },
        { term: 'onset', definition: 'When something first started happening' },
        { term: 'severity', definition: 'How bad or strong something is' },
      ],
      analogies: [
        'OLDCARTS is like filling out a form that helps your doctor solve a mystery - each piece of information is a clue!',
        'Think of it like describing a movie scene - you tell what happened, where, when, and how intense it was.',
      ],
      examples: [
        'For a headache: "It started yesterday morning (onset), in my forehead (location), lasted 4 hours (duration), felt like pressure (character), got worse with loud noise (aggravating), felt better lying down (relieving), comes and goes (timing), about a 6 out of 10 (severity)."',
      ],
    },
    2: {
      level: 2,
      summary: 'OLDCARTS is a systematic approach for describing symptoms that ensures you provide complete information for accurate diagnosis.',
      explanation: `Healthcare providers use OLDCARTS as a standardized way to gather symptom information. Learning this framework helps you communicate more effectively during medical visits.

**Breaking Down OLDCARTS:**

**O - Onset**
- When exactly did the symptom start?
- Was it sudden or gradual?
- What were you doing when it started?
- Did anything trigger it?

**L - Location**
- Where exactly is the symptom?
- Does it stay in one spot or move around?
- Does it spread to other areas (radiation)?

**D - Duration**
- How long does each episode last?
- How long has the problem been occurring overall?

**C - Character**
- What does it feel like? (sharp, dull, burning, aching, throbbing, pressure)
- How would you describe it to someone?

**A - Aggravating Factors**
- What makes it worse?
- Activities, positions, foods, time of day?

**R - Relieving Factors**
- What makes it better?
- Rest, medication, position changes?

**T - Timing**
- Is it constant or intermittent (comes and goes)?
- Is there a pattern (morning, after meals, etc.)?

**S - Severity**
- On a scale of 0-10, how severe is it?
- How does it affect your daily activities?

**Why Healthcare Providers Use This:**
Each element helps narrow down possible causes. For example:
- Sudden onset chest pain suggests different conditions than gradual onset
- Pain that worsens with breathing suggests lung or chest wall involvement
- Pain relieved by antacids suggests a stomach-related cause`,
      keyTerms: [
        { term: 'radiation', definition: 'When pain spreads from its original location to other areas', pronunciation: 'ray-dee-AY-shun' },
        { term: 'intermittent', definition: 'Something that comes and goes rather than being constant', pronunciation: 'in-ter-MIT-tent' },
        { term: 'aggravating factor', definition: 'Something that makes a symptom worse' },
      ],
      analogies: [
        'OLDCARTS is like a detective interview - each question helps eliminate suspects and identify the real culprit.',
      ],
    },
    3: {
      level: 3,
      summary: 'OLDCARTS provides a comprehensive framework for systematic symptom analysis, enabling structured history-taking that informs differential diagnosis and guides clinical decision-making.',
      explanation: `## The OLDCARTS Framework in Clinical Practice

OLDCARTS represents a systematic approach to symptom characterization that is fundamental to clinical reasoning. Each component provides specific diagnostic information.

### Component Analysis

**Onset**
- Acute (seconds to minutes): Suggests vascular, traumatic, or mechanical causes
- Subacute (hours to days): Inflammatory or infectious processes
- Chronic (weeks to months): Degenerative, neoplastic, or metabolic conditions
- Associated circumstances: Activity, position, recent events

**Location**
- Anatomical specificity helps identify the affected organ system
- Referred pain patterns (e.g., cardiac pain to left arm, gallbladder to right scapula)
- Dermatome distribution suggests neural involvement
- Diffuse vs. localized narrows differential significantly

**Duration**
- Episode duration: Seconds (arrhythmia), minutes (angina), hours (migraine)
- Overall course: Progressive, stable, improving, or episodic
- Temporal relationship to other symptoms

**Character (Quality)**
- Visceral pain: Dull, cramping, poorly localized
- Somatic pain: Sharp, well-localized
- Neuropathic pain: Burning, shooting, electric
- Specific descriptors: Tearing (dissection), pressure (cardiac), colicky (obstruction)

**Aggravating Factors**
- Exertion: Cardiac or pulmonary cause
- Position: Musculoskeletal or pericardial
- Food: Gastrointestinal cause
- Time of day: Circadian patterns in certain conditions

**Relieving Factors**
- Rest: Stable angina, claudication
- Position changes: Pericarditis (sitting forward), pancreatitis (fetal position)
- Medications: Response to specific treatments aids diagnosis

**Timing**
- Constant: Typically more concerning for serious pathology
- Intermittent: Often mechanical or functional
- Pattern recognition: Post-prandial, nocturnal, menstrual

**Severity**
- 0-10 numeric rating scale (NRS)
- Impact on function and quality of life
- Changes over time
- Comparison to prior similar experiences

### Clinical Integration

The information gathered through OLDCARTS directly informs the differential diagnosis:

| Finding | Suggests |
|---------|----------|
| Sudden onset, maximal at start | Vascular event (dissection, PE, MI) |
| Gradual onset, progressive | Inflammatory or neoplastic |
| Exertional, relieved by rest | Stable angina, claudication |
| Pleuritic (worse with breathing) | Pleural, pericardial, or chest wall origin |
| Colicky (waxing and waning) | Hollow organ obstruction |`,
      keyTerms: [
        { term: 'differential diagnosis', definition: 'The list of possible conditions that could explain a patient\'s symptoms', pronunciation: 'dif-er-EN-shul' },
        { term: 'referred pain', definition: 'Pain felt in a location different from its actual source, due to shared nerve pathways' },
        { term: 'visceral pain', definition: 'Pain arising from internal organs, typically dull and poorly localized', pronunciation: 'VIS-er-al' },
        { term: 'pleuritic', definition: 'Pain that worsens with breathing, suggesting pleural involvement', pronunciation: 'ploor-IT-ik' },
      ],
      clinicalNotes: 'The character and pattern of symptoms often provide more diagnostic value than the location alone. Always ask patients to describe symptoms in their own words before offering descriptors.',
    },
    4: {
      level: 4,
      summary: 'Systematic symptom characterization through OLDCARTS enables hypothesis-driven history taking, with each component specifically designed to discriminate between diagnostic possibilities and guide pre-test probability estimation.',
      explanation: `## Advanced Application of OLDCARTS

### Bayesian Approach to History Taking

OLDCARTS elements function as likelihood ratios that modify pre-test probability:

**Onset Discrimination**

| Onset Pattern | Conditions Favored | Conditions Against |
|---------------|-------------------|-------------------|
| Hyperacute (seconds) | Vascular (stroke, PE, MI, dissection), arrhythmia, pneumothorax | Inflammatory, infectious, neoplastic |
| Acute (minutes-hours) | Infection, toxin, acute inflammatory | Chronic degenerative |
| Gradual (days-weeks) | Inflammatory, metabolic | Vascular |
| Chronic (months-years) | Degenerative, neoplastic, psychogenic | Infectious (except chronic infections) |

**Location and Radiation Patterns**

Understanding embryological and neuroanatomical basis of referred pain:
- Heart (T1-T4 dermatomes): Left arm, jaw, neck, epigastrium
- Diaphragm (C3-C5): Shoulder (Kehr's sign with hemoperitoneum)
- Gallbladder: Right scapular region
- Pancreas: Epigastric, radiating to back
- Kidneys: Flank to groin (following ureter)
- Appendix: Periumbilical early (visceral), RLQ late (somatic)

**Character Analysis**

| Character | Pathophysiology | Typical Causes |
|-----------|----------------|----------------|
| Pressure/squeezing | Myocardial ischemia | ACS, stable angina |
| Tearing/ripping | Intimal separation | Aortic dissection |
| Burning | Mucosal irritation, neuropathic | GERD, neuropathy |
| Sharp/stabbing | Somatic, parietal pleural | MSK, pleuritis, pneumothorax |
| Colicky | Smooth muscle spasm against obstruction | Renal colic, biliary colic, bowel obstruction |
| Throbbing | Vascular pulsation | Migraine, arterial aneurysm |

**Aggravating and Relieving Factors - Diagnostic Value**

| Factor | Positive LR | Condition |
|--------|------------|-----------|
| Worse with exertion, relieved by rest | 2.4 | Stable angina |
| Relieved by sitting forward | 3.8 | Pericarditis |
| Worse with deep inspiration | Varies | Pleuritic origin (PE, pleuritis, pericarditis) |
| Worse postprandially | 1.8 | GERD, peptic ulcer |
| Worse with Valsalva | - | Increased ICP, radiculopathy |

**Severity Assessment**

Beyond the numeric scale:
- Functional impact: Activities of daily living, work capacity
- Comparative severity: "Worst headache of my life" (subarachnoid hemorrhage)
- Behavioral manifestations: Patients with renal colic cannot find comfortable position vs. peritonitis patients lie still

### Red Flags in History

Certain OLDCARTS findings warrant immediate concern:

**Onset Red Flags:**
- Thunderclap onset of headache (SAH)
- Sudden tearing chest/back pain (dissection)
- Abrupt symptom onset with syncope (PE, cardiac)

**Character Red Flags:**
- "Worst ever" pain
- Pain out of proportion to examination findings (mesenteric ischemia)

**Associated Symptoms to Always Assess:**
- Constitutional: Fever, weight loss, night sweats
- Neurological: Weakness, numbness, visual changes, confusion
- Cardiopulmonary: Dyspnea, chest pain, syncope
- GI: Nausea, vomiting, blood in stool`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'The probability of a finding in patients with disease divided by the probability in those without; used to update diagnostic probability' },
        { term: 'pre-test probability', definition: 'The estimated probability of disease before testing, based on prevalence and clinical presentation' },
        { term: 'somatic pain', definition: 'Pain arising from skin, muscles, or joints; typically well-localized and sharp' },
        { term: 'Kehr\'s sign', definition: 'Left shoulder pain due to diaphragmatic irritation, often from blood in the peritoneum (hemoperitoneum)', pronunciation: 'Kair\'s sign' },
      ],
      clinicalNotes: 'Expert diagnosticians often reach the correct diagnosis within the first few minutes of history-taking by recognizing illness scripts - patterns of OLDCARTS elements that characterize specific conditions.',
    },
    5: {
      level: 5,
      summary: 'OLDCARTS provides the foundational structure for sophisticated clinical reasoning, but expert history-taking requires dynamic hypothesis testing, recognition of illness scripts, and integration of epidemiological context to optimize diagnostic yield.',
      explanation: `## Expert-Level History Taking

### Beyond OLDCARTS: Dynamic Hypothesis Testing

Expert clinicians do not simply collect OLDCARTS data sequentially - they:
1. Generate initial hypotheses within seconds of the chief complaint
2. Use targeted questions to confirm or refute leading possibilities
3. Continuously update differential based on responses
4. Pursue "semantic qualifiers" that discriminate between diagnoses

**Semantic Qualifiers by Presentation:**

| Presentation | Key Discriminating Questions |
|--------------|------------------------------|
| Chest Pain | Speed of onset? Quality? Radiation? Exertional? Positional? Associated diaphoresis? |
| Dyspnea | Acute vs. chronic? Orthopnea/PND? Exertional capacity change? Associated symptoms? |
| Headache | Speed of onset? "Worst ever"? Positional? Systemic symptoms? Neurological symptoms? |
| Syncope | Prodrome? Duration? Post-event confusion? Witnessed activity? Position at onset? |
| Abdominal Pain | Quality (colicky vs. constant)? Migration pattern? Associated GI symptoms? |

### Illness Script Recognition

Expert diagnosticians maintain mental models (illness scripts) that include:
- Predisposing factors (who gets this disease)
- Pathophysiological insult (what causes it)
- Clinical consequences (symptoms and signs)
- Time course (how it evolves)

**Example - Pulmonary Embolism Script:**
- Predisposing: Immobilization, hypercoagulable state, recent surgery, malignancy
- Insult: Venous thromboembolism to pulmonary vasculature
- Consequences: Sudden dyspnea, pleuritic chest pain, tachycardia, hypoxia
- Time course: Abrupt onset, may have preceding DVT symptoms

### Atypical Presentations

Expertise includes recognizing when classic OLDCARTS patterns are absent:

**ACS Atypical Presentations (more common in women, elderly, diabetics):**
- Dyspnea without chest pain
- Fatigue
- Nausea/vomiting
- Diaphoresis alone
- Syncope

**Geriatric Giants - Atypical presentation of serious illness:**
- Delirium instead of pain (MI, infection, surgical abdomen)
- Falls instead of syncope
- Functional decline as the presenting symptom

### Psychiatric History Overlay

Expert clinicians recognize:
- Functional symptoms require the same systematic evaluation
- Anxiety and depression can amplify or modify symptom perception
- Somatization may present with classic OLDCARTS patterns
- Prior diagnostic labels may cause anchoring bias

### Communication Techniques

**Open-ended questioning:**
"Tell me more about [symptom]" yields richer information than closed questions

**Facilitation:**
Silence, nodding, "Go on..." encourages elaboration

**Clarification:**
"When you say 'dizzy,' do you mean the room is spinning or do you feel faint?"

**Summarization:**
Reflecting back ensures accuracy and builds rapport

### Documentation Pearls

**High-quality HPI includes:**
- Pertinent positives (present symptoms supporting differential)
- Pertinent negatives (absent symptoms that exclude differentials)
- Risk factors for concerning diagnoses
- Functional impact
- Patient's own words for key descriptors

**Avoid:**
- Cut-and-paste from prior notes (information decay)
- Over-reliance on "denies" statements without actual questioning
- Missing time course and progression
- Failure to document what questions were asked

### Teaching Patients OLDCARTS

Empowering patients to prepare their history improves diagnostic accuracy:
1. Provide OLDCARTS framework before visits
2. Encourage symptom diaries for chronic/intermittent conditions
3. Have patients bring medication lists and prior records
4. Ask patients to write their main questions before the visit`,
      keyTerms: [
        { term: 'illness script', definition: 'A cognitive schema that includes the prototypical features of a disease, used by experts for rapid pattern recognition' },
        { term: 'semantic qualifiers', definition: 'Descriptive terms that discriminate between diagnoses (acute vs. chronic, exertional vs. rest, etc.)' },
        { term: 'anchoring bias', definition: 'The tendency to rely too heavily on initial diagnostic impressions, failing to adjust adequately with new information' },
        { term: 'pertinent negative', definition: 'An expected finding that is notably absent, helping to exclude certain diagnoses' },
      ],
      clinicalNotes: `Research shows that most diagnostic errors occur in the history-taking phase rather than physical examination or testing. Key findings:
- Premature closure (stopping the history too early) is a leading cause of diagnostic error
- The average physician interrupts patients within 11 seconds of starting to speak
- Allowing patients to complete their opening statement (average 90 seconds) significantly improves diagnostic accuracy`,
    },
  },

  components: [
    {
      letter: 'O',
      meaning: 'Onset',
      questions: {
        1: ['When did this start?', 'Was it sudden or did it come on slowly?', 'What were you doing when it started?'],
        2: ['What is the exact date and time of onset?', 'Was the onset sudden (seconds), rapid (minutes), or gradual (hours to days)?', 'What was your activity when it started?', 'Was there any triggering event?'],
        3: ['Characterize the onset: hyperacute, acute, subacute, or chronic?', 'Were there any prodromal symptoms?', 'What was the temporal relationship to activity, meals, medications, or other exposures?'],
        4: ['Define the onset in terms of diagnostic significance - does the pattern suggest vascular, inflammatory, mechanical, or neoplastic etiology?', 'Were there warning or herald symptoms?', 'How does onset relate to circadian, hormonal, or environmental factors?'],
        5: ['How does the onset pattern fit with your leading diagnostic hypotheses?', 'What illness scripts are activated by this onset description?', 'Are there red flag onset patterns that require immediate evaluation?'],
      },
      clinicalRationale: 'Onset helps categorize the pathophysiological process - vascular events typically present suddenly, inflammatory conditions subacutely, and neoplastic processes chronically.',
      examples: ['Sudden headache suggests vascular etiology (SAH, stroke)', 'Gradual abdominal pain over weeks with weight loss suggests malignancy'],
    },
    {
      letter: 'L',
      meaning: 'Location',
      questions: {
        1: ['Where does it hurt?', 'Can you point to exactly where it hurts?', 'Does the pain stay in one spot or move around?'],
        2: ['What is the precise anatomical location?', 'Does it radiate or spread to other areas?', 'Is it localized (one spot) or diffuse (spread out)?'],
        3: ['What is the dermatomal distribution?', 'Does the location correspond to a specific organ system or referred pain pattern?', 'Has the location changed over time?'],
        4: ['How does the location inform the differential - visceral vs. somatic origin?', 'What anatomical structures could account for this location and radiation pattern?', 'Does the location fit with embryological referred pain patterns?'],
        5: ['What is the anatomical hypothesis based on location?', 'How does location discriminate between your leading diagnoses?', 'Are there atypical location presentations you should consider?'],
      },
      clinicalRationale: 'Location helps identify the affected organ system and distinguishes visceral from somatic pain. Radiation patterns follow neuroanatomical pathways.',
      examples: ['Epigastric pain radiating to back suggests pancreatic or aortic origin', 'Right lower quadrant pain following periumbilical onset suggests appendicitis'],
    },
    {
      letter: 'D',
      meaning: 'Duration',
      questions: {
        1: ['How long does it last?', 'Does it stay for a long time or come and go quickly?'],
        2: ['How long does each episode last - seconds, minutes, hours, days?', 'How long has this problem been going on overall?', 'Are the episodes getting longer or shorter?'],
        3: ['What is the duration of individual episodes?', 'What is the total duration since initial onset?', 'Is the condition progressive, stable, or improving?'],
        4: ['How does episode duration inform the differential?', 'Does the temporal pattern suggest a specific pathophysiology?', 'How does the course relate to treatment interventions?'],
        5: ['What diagnostic significance does the duration pattern hold?', 'How does duration affect risk stratification?', 'What is the expected natural history, and does this case fit?'],
      },
      clinicalRationale: 'Duration helps differentiate transient from sustained conditions and informs prognosis. Episode duration can distinguish between diagnoses (e.g., TIA vs. stroke).',
      examples: ['Chest pain lasting seconds unlikely cardiac', 'Headache duration helps distinguish tension-type (hours) from cluster (45-90 minutes)'],
    },
    {
      letter: 'C',
      meaning: 'Character',
      questions: {
        1: ['What does it feel like?', 'Is it sharp, dull, burning, or aching?', 'Can you describe it in your own words?'],
        2: ['Describe the quality of the pain - sharp, dull, burning, aching, pressure, throbbing, cramping?', 'Have you ever felt anything like this before?', 'What does it feel like at its worst?'],
        3: ['Characterize the pain quality: somatic, visceral, or neuropathic?', 'Are there specific descriptors that suggest the diagnosis (tearing, pressure, colicky)?', 'Does the character change over time?'],
        4: ['What pathophysiology does the character suggest?', 'How does the quality discriminate between differential diagnoses?', 'Are there specific character descriptors with high likelihood ratios for certain conditions?'],
        5: ['What illness scripts match this character description?', 'How sensitive and specific is this character description for your leading diagnosis?', 'Are you using the patient\'s words or imposing medical terminology?'],
      },
      clinicalRationale: 'Character distinguishes between tissue types involved (somatic vs. visceral vs. neuropathic) and specific pathological processes.',
      examples: ['Tearing quality highly specific for aortic dissection', 'Burning suggests neuropathic or mucosal origin'],
    },
    {
      letter: 'A',
      meaning: 'Aggravating Factors',
      questions: {
        1: ['What makes it worse?', 'Does it hurt more when you move, eat, or breathe deeply?'],
        2: ['What activities make it worse (movement, exertion, eating, breathing, coughing)?', 'Are there positions that worsen it?', 'Do certain times of day make it worse?'],
        3: ['What are the specific aggravating factors and their diagnostic implications?', 'Is the symptom exertional, positional, pleuritic, or postprandial?', 'What is the latency between aggravating factor and symptom exacerbation?'],
        4: ['How do aggravating factors inform the pathophysiology?', 'What likelihood ratios are associated with specific aggravating factors?', 'Are there expected aggravating factors that are notably absent?'],
        5: ['How do aggravating factors discriminate between your differential diagnoses?', 'Are there aggravating factors you should specifically test for during the exam?', 'What functional testing might reproduce the symptoms?'],
      },
      clinicalRationale: 'Aggravating factors help identify the mechanism and involved structures. Exertional symptoms suggest cardiopulmonary origin; positional symptoms suggest musculoskeletal or pericardial.',
      examples: ['Pain worse with exertion and relieved by rest suggests stable angina', 'Pain worse with inspiration suggests pleuritic origin'],
    },
    {
      letter: 'R',
      meaning: 'Relieving Factors',
      questions: {
        1: ['What makes it feel better?', 'Does rest help?', 'Do any medicines help?'],
        2: ['What activities or positions relieve the symptom?', 'Do medications help (pain relievers, antacids, etc.)?', 'How quickly does relief occur?'],
        3: ['What specific interventions provide relief?', 'What is the time course of relief?', 'Does partial relief still occur with previously effective measures?'],
        4: ['What is the diagnostic significance of relieving factors?', 'Does response to treatment support or refute diagnostic hypotheses?', 'What therapeutic trial might have diagnostic value?'],
        5: ['How do relieving factors fit with your pathophysiological model?', 'What is the significance of treatment failures?', 'Should you recommend a therapeutic trial as a diagnostic test?'],
      },
      clinicalRationale: 'Response to interventions has diagnostic value. Relief with specific treatments supports corresponding diagnoses.',
      examples: ['Relief with antacids suggests acid-related disease', 'Relief sitting forward classic for pericarditis', 'Relief with nitroglycerin supports (but does not confirm) cardiac origin'],
    },
    {
      letter: 'T',
      meaning: 'Timing',
      questions: {
        1: ['Does it happen all the time or come and go?', 'Is there a pattern - like after meals or at night?'],
        2: ['Is it constant or intermittent?', 'Is there a pattern (time of day, relation to activities, meals, menstrual cycle)?', 'How often do episodes occur?'],
        3: ['What is the temporal pattern - constant, intermittent, paroxysmal?', 'What is the frequency of episodes?', 'Is there a circadian, weekly, or seasonal pattern?'],
        4: ['How does the timing pattern inform the differential?', 'What pathophysiology explains the temporal pattern?', 'Are there timing patterns pathognomonic for certain conditions?'],
        5: ['What is the diagnostic significance of this timing pattern?', 'Does the timing suggest a specific mechanism or trigger?', 'How does timing affect your risk stratification?'],
      },
      clinicalRationale: 'Timing patterns can be diagnostic (cluster headaches at same time daily, angina with exertion) and help distinguish organic from functional conditions.',
      examples: ['Cluster headaches characteristically occur at the same time daily', 'Nocturnal awakening with dyspnea suggests heart failure (PND)'],
    },
    {
      letter: 'S',
      meaning: 'Severity',
      questions: {
        1: ['On a scale of 0 to 10, with 10 being the worst pain ever, how bad is it?', 'Does it stop you from doing things?'],
        2: ['Rate the severity from 0-10.', 'How does it compare to other pain you have experienced?', 'Does it interfere with sleep, work, or daily activities?'],
        3: ['What is the numeric rating scale score?', 'What is the functional impact?', 'How does current severity compare to onset and worst episode?'],
        4: ['How does severity inform urgency and risk stratification?', 'What is the clinical significance of severity changes over time?', 'Is there discordance between reported severity and observed behavior?'],
        5: ['How does severity affect your management decisions?', 'What is the significance of "worst ever" symptoms?', 'How do you interpret severity in the context of the patient\'s affect and behavior?'],
      },
      clinicalRationale: 'Severity informs urgency and helps track response to treatment. "Worst headache of my life" is a red flag for subarachnoid hemorrhage.',
      examples: ['Severe pain with minimal findings suggests visceral origin', '"Worst headache ever" requires evaluation for subarachnoid hemorrhage'],
    },
  ],

  sampleCases: [
    {
      presentation: 'A 55-year-old man presents with chest discomfort',
      applicationOfFramework: {
        O: 'Started 2 hours ago while climbing stairs',
        L: 'Substernal, radiating to left arm',
        D: 'Constant since onset',
        C: 'Pressure, like someone sitting on my chest',
        A: 'Exertion, worse when walking',
        R: 'Rest provides partial relief',
        T: 'Similar episodes with exertion over past month, but this one has not stopped',
        S: '8/10',
      },
      level: 3,
    },
  ],

  media: [],
  citations: [
    {
      id: 'bates-guide-pe',
      type: 'textbook',
      title: 'Bates\' Guide to Physical Examination and History Taking',
      authors: ['Bickley L'],
      source: 'Wolters Kluwer',
      chapter: 'The Health History',
    },
  ],
  crossReferences: [
    { targetId: 'history-opqrst', targetType: 'topic', relationship: 'sibling', label: 'OPQRST Framework' },
    { targetId: 'algorithm-chest-pain', targetType: 'pathway', relationship: 'related', label: 'Chest Pain Algorithm' },
  ],
  tags: {
    systems: ['general'],
    topics: ['history-taking', 'clinical-reasoning', 'patient-communication'],
    keywords: ['OLDCARTS', 'symptom analysis', 'medical history', 'chief complaint'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'family-medicine'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

/**
 * OPQRST - Pain-focused symptom analysis framework
 */
export const OPQRST_FRAMEWORK: HistoryFramework = {
  id: 'history-opqrst',
  name: 'OPQRST Framework',
  acronym: 'OPQRST',
  fullName: 'Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Timing',
  applicableTo: ['pain', 'discomfort', 'chief complaint'],

  levels: {
    1: {
      level: 1,
      summary: 'OPQRST helps you describe pain so doctors can figure out what is causing it.',
      explanation: `When you have pain, doctors need details to understand what might be wrong. OPQRST is an easy way to remember what to tell them.

**O - Onset**: When did the pain start?
**P - Provocation/Palliation**: What makes it worse or better?
**Q - Quality**: What does it feel like (sharp, dull, burning)?
**R - Region/Radiation**: Where is it? Does it spread anywhere?
**S - Severity**: How bad is it (0-10)?
**T - Timing**: Is it constant or does it come and go?

Using OPQRST helps you give your doctor a complete picture of your pain!`,
      keyTerms: [
        { term: 'provocation', definition: 'Something that makes your pain worse' },
        { term: 'palliation', definition: 'Something that makes your pain better' },
        { term: 'radiation', definition: 'When pain spreads from one place to another' },
      ],
      analogies: [
        'OPQRST is like describing the weather - you tell when it started, what makes it change, what it feels like, where it is, how strong, and how long it lasts.',
      ],
      examples: [
        'For a twisted ankle: Started when I jumped (onset), worse when walking (provocation), better with ice (palliation), throbbing (quality), right ankle (region), 5/10 (severity), constant (timing).',
      ],
    },
    2: {
      level: 2,
      summary: 'OPQRST is a commonly used mnemonic in emergency medicine for quickly assessing pain complaints.',
      explanation: `OPQRST is particularly useful for emergency and acute care settings where rapid pain assessment is needed.

**O - Onset**
- When did it start exactly?
- What were you doing?
- Was it sudden or gradual?

**P - Provocation/Palliation**
- What makes it worse (provocation)?
- What makes it better (palliation)?
- Have you tried any treatments?

**Q - Quality**
- What type of pain is it?
- Sharp, dull, aching, burning, stabbing, pressure, cramping?

**R - Region/Radiation**
- Where exactly is the pain?
- Does it spread or radiate anywhere else?
- Is it in one spot or spread out?

**S - Severity**
- On a scale of 0-10, how bad is it?
- How does it compare to other pain you have had?
- Is it the worst pain of your life?

**T - Timing**
- How long have you had it?
- Is it constant or does it come and go?
- Has it gotten better or worse?`,
      keyTerms: [
        { term: 'acute pain', definition: 'Pain that starts suddenly and usually lasts less than 3-6 months' },
        { term: 'chronic pain', definition: 'Pain that continues for more than 3-6 months' },
        { term: 'colicky pain', definition: 'Pain that comes in waves, getting worse then better repeatedly' },
      ],
    },
    3: {
      level: 3,
      summary: 'OPQRST provides structured pain assessment commonly used in emergency medicine, enabling systematic characterization of pain presentations for differential diagnosis.',
      explanation: `## OPQRST in Clinical Practice

### Component Details

**Onset**
- Exact timing if possible
- Activity at onset
- Sudden vs. gradual onset
- Associated triggering event

**Provocation/Palliation**
- Movement/position effects
- Breathing/eating effects
- Medication response
- Environmental factors

**Quality**
- Somatic: Sharp, stabbing, well-localized
- Visceral: Dull, cramping, poorly localized
- Neuropathic: Burning, shooting, electric
- Specific descriptors: Tearing, pressure, colicky

**Region/Radiation**
- Primary location
- Radiation pattern
- Referred pain considerations
- Change in location over time

**Severity**
- Numeric rating scale (0-10)
- Functional impact
- Comparison to prior pain
- Worst pain ever (red flag for certain conditions)

**Timing**
- Duration of current episode
- Frequency of episodes
- Progression over time
- Pattern recognition

### Diagnostic Correlation

| OPQRST Pattern | Suggests |
|----------------|----------|
| Sudden onset, tearing, radiating to back | Aortic dissection |
| Exertional, pressure, substernal | Angina/ACS |
| Sharp, pleuritic, localized | Musculoskeletal, pleuritis |
| Colicky, periumbilical then RLQ | Appendicitis |
| Constant, worst headache ever | Subarachnoid hemorrhage |`,
      keyTerms: [
        { term: 'pleuritic pain', definition: 'Pain that worsens with breathing, typically sharp and localized' },
        { term: 'ACS', definition: 'Acute Coronary Syndrome - spectrum from unstable angina to heart attack' },
        { term: 'referred pain', definition: 'Pain felt in a location distant from its source due to shared nerve pathways' },
      ],
      clinicalNotes: 'OPQRST is often taught to EMS providers and is useful for handoffs. It may miss associated symptoms (OLDCARTS includes these better), so both frameworks have value.',
    },
    4: {
      level: 4,
      summary: 'OPQRST enables rapid pain phenotyping with specific elements correlating to pathophysiological mechanisms and informing likelihood ratios for differential diagnoses.',
      explanation: `## Advanced OPQRST Application

### Pathophysiological Correlation

**Quality and Tissue Origin:**
- Sharp/stabbing: Somatic structures (skin, muscle, parietal peritoneum)
- Dull/aching: Visceral organs
- Burning/electric: Neuropathic etiology
- Colicky: Hollow organ obstruction (ureter, bile duct, bowel)
- Tearing: Arterial wall disruption

**Radiation Patterns and Referred Pain:**

| Radiation | Source | Mechanism |
|-----------|--------|-----------|
| Left arm, jaw | Heart | T1-T4 convergence |
| Right scapula | Gallbladder | Phrenic nerve |
| Back (epigastric) | Pancreas, aorta | Retroperitoneal location |
| Groin | Kidney/ureter | Ureter path |
| Shoulder (L>R) | Diaphragm | C3-C5 (phrenic) |

### Likelihood Ratios for Key Findings

| Finding | LR+ | Condition |
|---------|-----|-----------|
| Pain radiating to both arms | 7.1 | MI |
| Pain worse with exertion | 2.4 | Stable angina |
| Chest pain reproduced by palpation | 0.28 | Against cardiac origin |
| Pleuritic quality | 0.2 | Against MI |

### Integration with Physical Examination

OPQRST findings guide examination focus:
- Provocation by movement: Test specific movements
- Radiation pattern: Examine referred areas
- Quality suggesting neuropathy: Sensory examination
- Severity with minimal findings: Consider visceral origin`,
      keyTerms: [
        { term: 'somatic pain', definition: 'Pain from skin, muscle, bone with precise localization due to dense innervation' },
        { term: 'visceral pain', definition: 'Pain from internal organs, poorly localized due to sparse innervation' },
        { term: 'likelihood ratio', definition: 'Ratio of probability of finding in disease vs. no disease; updates diagnostic probability' },
      ],
      clinicalNotes: 'The combination of quality, radiation, and provocative factors often provides more diagnostic value than any single element. Pattern recognition improves with experience.',
    },
    5: {
      level: 5,
      summary: 'OPQRST facilitates rapid illness script activation and hypothesis refinement, with each element serving as a discriminating variable in Bayesian diagnostic reasoning.',
      explanation: `## Expert Application of OPQRST

### Illness Script Integration

Expert diagnosticians use OPQRST to rapidly activate and test illness scripts:

**Example: Chest Pain Presentation**

Initial complaint activates multiple scripts:
- ACS script: Pressure, exertional, diaphoresis
- Dissection script: Tearing, maximal at onset, radiating to back
- PE script: Pleuritic, sudden onset, dyspnea
- GERD script: Burning, postprandial, positional

Each OPQRST element tests these scripts, eliminating or strengthening candidates.

### Red Flags by Category

**Onset Red Flags:**
- Thunderclap (maximal at onset): SAH, dissection, cardiac arrest
- Pain awakening from sleep: Peptic ulcer, cardiac ischemia, cluster headache

**Quality Red Flags:**
- "Worst pain of my life": SAH, dissection, mesenteric ischemia
- "Something is very wrong": Visceral emergency

**Severity Red Flags:**
- Pain out of proportion to examination: Mesenteric ischemia, necrotizing fasciitis
- Unrelenting severe pain despite treatment: Serious pathology

### Cognitive Biases in Pain Assessment

**Anchoring:** First description dominates assessment
**Framing:** How question is asked influences answer
**Attribution:** Assuming pain is related to known condition
**Affective bias:** Pain severity influenced by patient affect

### Communication Mastery

**Opening questions:**
- "Tell me about your pain" (open-ended)
- Avoid leading questions initially

**Clarification techniques:**
- "When you say burning, what exactly do you mean?"
- "Can you show me with one finger where it hurts?"

**Quantification:**
- Functional measures often more reliable than numeric scales
- "Can you walk? Climb stairs? Work?"`,
      keyTerms: [
        { term: 'illness script', definition: 'Mental prototype of a disease including typical features, used for rapid pattern recognition' },
        { term: 'anchoring bias', definition: 'Over-reliance on first piece of information, failing to adequately adjust assessment' },
        { term: 'Bayesian reasoning', definition: 'Updating probability of diagnosis based on new information using likelihood ratios' },
      ],
      clinicalNotes: 'Expert clinicians report that the quality and radiation elements are often most discriminating. Severity is notoriously unreliable across patients but tracking changes within a patient is valuable.',
    },
  },

  components: [
    {
      letter: 'O',
      meaning: 'Onset',
      questions: {
        1: ['When did the pain start?', 'What were you doing when it started?'],
        2: ['When exactly did this start?', 'Was it sudden or gradual?', 'What triggered it?'],
        3: ['Characterize the onset: hyperacute, acute, or gradual?', 'What was the temporal relationship to activities or exposures?'],
        4: ['What is the diagnostic significance of the onset pattern?', 'Were there prodromal symptoms?'],
        5: ['How does onset pattern activate specific illness scripts?', 'Are there onset red flags?'],
      },
      clinicalRationale: 'Onset pattern suggests mechanism - sudden suggests vascular or mechanical, gradual suggests inflammatory or neoplastic.',
      examples: ['Sudden onset "thunderclap" headache suggests SAH'],
    },
    {
      letter: 'P',
      meaning: 'Provocation/Palliation',
      questions: {
        1: ['What makes it worse?', 'What makes it better?'],
        2: ['What activities or positions worsen the pain?', 'What provides relief?'],
        3: ['What are the specific aggravating and relieving factors?', 'What is the response to medications?'],
        4: ['What pathophysiology do provocation/palliation patterns suggest?', 'What likelihood ratios apply?'],
        5: ['How do these factors discriminate between diagnoses?', 'What therapeutic trials have diagnostic value?'],
      },
      clinicalRationale: 'Provocation/palliation identifies involved structures and mechanisms.',
      examples: ['Pain worse with breathing suggests pleural involvement'],
    },
    {
      letter: 'Q',
      meaning: 'Quality',
      questions: {
        1: ['What does the pain feel like?'],
        2: ['Is it sharp, dull, burning, pressure, or throbbing?'],
        3: ['Characterize as somatic, visceral, or neuropathic based on quality'],
        4: ['What tissue origin does the quality suggest?'],
        5: ['What illness scripts match this quality description?'],
      },
      clinicalRationale: 'Quality distinguishes tissue type involved - somatic, visceral, or neuropathic.',
      examples: ['Tearing quality specific for dissection'],
    },
    {
      letter: 'R',
      meaning: 'Region/Radiation',
      questions: {
        1: ['Where does it hurt?', 'Does it spread anywhere?'],
        2: ['What is the exact location?', 'Does it radiate to other areas?'],
        3: ['What is the anatomical distribution?', 'Does it follow dermatomal or referred pain patterns?'],
        4: ['What structures could account for this location and radiation?'],
        5: ['How does location/radiation fit with your diagnostic hypotheses?'],
      },
      clinicalRationale: 'Location and radiation identify affected organ systems and referred pain patterns.',
      examples: ['Cardiac pain may radiate to arm, jaw, neck'],
    },
    {
      letter: 'S',
      meaning: 'Severity',
      questions: {
        1: ['How bad is the pain from 0-10?'],
        2: ['Rate your pain 0-10. How does it affect your activities?'],
        3: ['What is the NRS score? What is the functional impact?'],
        4: ['How does severity inform urgency? Is there discordance with examination?'],
        5: ['What is the significance of severity in this context?'],
      },
      clinicalRationale: 'Severity informs urgency and helps track treatment response.',
      examples: ['"Worst headache of my life" requires SAH evaluation'],
    },
    {
      letter: 'T',
      meaning: 'Timing',
      questions: {
        1: ['Is the pain constant or does it come and go?'],
        2: ['How long has it lasted? Is there a pattern?'],
        3: ['What is the temporal pattern - constant, intermittent, paroxysmal?'],
        4: ['What pathophysiology explains the timing pattern?'],
        5: ['How does timing discriminate between diagnoses?'],
      },
      clinicalRationale: 'Timing patterns may be diagnostic (cluster headaches occur at same time daily).',
      examples: ['Colicky timing suggests hollow organ obstruction'],
    },
  ],

  media: [],
  citations: [
    {
      id: 'naemt-phtls',
      type: 'textbook',
      title: 'PHTLS: Prehospital Trauma Life Support',
      authors: ['NAEMT'],
      source: 'Jones & Bartlett Learning',
    },
  ],
  crossReferences: [
    { targetId: 'history-oldcarts', targetType: 'topic', relationship: 'sibling', label: 'OLDCARTS Framework' },
  ],
  tags: {
    systems: ['general'],
    topics: ['history-taking', 'emergency-medicine', 'pain-assessment'],
    keywords: ['OPQRST', 'pain assessment', 'EMS', 'emergency'],
    clinicalRelevance: 'high',
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// Export all history-taking frameworks
export const HISTORY_TAKING_FRAMEWORKS = [
  OLDCARTS_FRAMEWORK,
  OPQRST_FRAMEWORK,
] as const;

export default {
  OLDCARTS_FRAMEWORK,
  OPQRST_FRAMEWORK,
  HISTORY_TAKING_FRAMEWORKS,
};
