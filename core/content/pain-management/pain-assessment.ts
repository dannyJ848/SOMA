/**
 * Pain Assessment - Comprehensive Guide
 *
 * Methods and scales for evaluating pain severity, quality, and impact.
 * Essential foundation for appropriate pain management.
 */

import { EducationalContent } from '../types';
import { PainAssessmentScale } from './types';

export const painAssessmentScales: PainAssessmentScale[] = [
  {
    name: 'Numeric Rating Scale',
    abbreviation: 'NRS',
    scoreRange: { min: 0, max: 10 },
    interpretation: [
      { range: '0', severity: 'none', description: 'No pain' },
      { range: '1-3', severity: 'mild', description: 'Mild pain - does not interfere with activities' },
      { range: '4-6', severity: 'moderate', description: 'Moderate pain - interferes with some activities' },
      { range: '7-10', severity: 'severe', description: 'Severe pain - significantly limits activities' },
    ],
    applicablePopulations: ['Adults', 'Adolescents', 'Cognitively intact patients'],
    advantages: ['Quick to administer', 'Easy to understand', 'Validated across cultures'],
    limitations: ['Subjective', 'Not suitable for young children or cognitively impaired'],
  },
  {
    name: 'Visual Analog Scale',
    abbreviation: 'VAS',
    scoreRange: { min: 0, max: 100, unit: 'mm' },
    interpretation: [
      { range: '0', severity: 'none', description: 'No pain' },
      { range: '1-30', severity: 'mild', description: 'Mild pain' },
      { range: '31-69', severity: 'moderate', description: 'Moderate pain' },
      { range: '70-100', severity: 'severe', description: 'Severe pain' },
    ],
    applicablePopulations: ['Adults', 'Research settings'],
    advantages: ['More sensitive than NRS', 'Better for research'],
    limitations: ['Requires physical scale', 'Slightly more complex to administer'],
  },
  {
    name: 'Wong-Baker FACES Pain Rating Scale',
    abbreviation: 'FACES',
    scoreRange: { min: 0, max: 10 },
    interpretation: [
      { range: '0', severity: 'none', description: 'No hurt' },
      { range: '2', severity: 'mild', description: 'Hurts little bit' },
      { range: '4', severity: 'mild', description: 'Hurts little more' },
      { range: '6', severity: 'moderate', description: 'Hurts even more' },
      { range: '8', severity: 'severe', description: 'Hurts whole lot' },
      { range: '10', severity: 'worst', description: 'Hurts worst' },
    ],
    applicablePopulations: ['Children ages 3+', 'Adults with language barriers', 'Cognitively impaired'],
    advantages: ['No reading required', 'Cross-cultural applicability', 'Engaging for children'],
    limitations: ['May confuse pain with emotions', 'Less precise than numeric scales'],
  },
  {
    name: 'FLACC Scale',
    abbreviation: 'FLACC',
    scoreRange: { min: 0, max: 10 },
    interpretation: [
      { range: '0', severity: 'none', description: 'Relaxed and comfortable' },
      { range: '1-3', severity: 'mild', description: 'Mild discomfort' },
      { range: '4-6', severity: 'moderate', description: 'Moderate pain' },
      { range: '7-10', severity: 'severe', description: 'Severe distress or pain' },
    ],
    applicablePopulations: ['Infants', 'Preverbal children', 'Nonverbal adults', 'Sedated patients'],
    advantages: ['Behavioral assessment', 'No patient participation needed'],
    limitations: ['Requires training', 'Observer-dependent', 'May miss chronic pain adaptation'],
  },
  {
    name: 'Brief Pain Inventory',
    abbreviation: 'BPI',
    scoreRange: { min: 0, max: 10 },
    interpretation: [
      { range: '0', severity: 'none', description: 'No pain/interference' },
      { range: '1-4', severity: 'mild', description: 'Mild pain with minimal interference' },
      { range: '5-6', severity: 'moderate', description: 'Moderate pain with functional impact' },
      { range: '7-10', severity: 'severe', description: 'Severe pain significantly affecting function' },
    ],
    applicablePopulations: ['Adults with chronic pain', 'Cancer pain assessment'],
    advantages: ['Assesses pain interference', 'Validated in multiple languages', 'Captures functional impact'],
    limitations: ['Longer to administer', 'Requires literacy'],
  },
  {
    name: 'McGill Pain Questionnaire',
    abbreviation: 'MPQ',
    scoreRange: { min: 0, max: 78 },
    interpretation: [
      { range: '0', severity: 'none', description: 'No pain' },
      { range: '1-20', severity: 'mild', description: 'Mild pain' },
      { range: '21-40', severity: 'moderate', description: 'Moderate pain' },
      { range: '41-78', severity: 'severe', description: 'Severe pain' },
    ],
    applicablePopulations: ['Adults', 'Research settings', 'Complex pain syndromes'],
    advantages: ['Captures qualitative aspects', 'Distinguishes pain types', 'Research gold standard'],
    limitations: ['Time-consuming', 'Requires literacy', 'Complex scoring'],
  },
];

export const painAssessment: EducationalContent = {
  id: 'pain-assessment-scales',
  type: 'concept',
  name: 'Pain Assessment',
  alternateNames: ['Pain Evaluation', 'Pain Measurement', 'Algometry'],

  levels: {
    1: {
      level: 1,
      summary: 'Pain assessment helps doctors understand how much pain you have by using simple tools like number scales or picture charts.',
      explanation: `When you go to the doctor and say you're in pain, they need to understand exactly how bad it is. Since they can't feel your pain, they use special tools to help you describe it.

**Common Ways to Rate Your Pain:**

**Number Scale (0-10):**
- 0 = No pain at all
- 1-3 = Mild pain (you notice it, but can still do things)
- 4-6 = Moderate pain (harder to concentrate, affects activities)
- 7-10 = Severe pain (hard to think about anything else)

**Faces Scale:**
- Shows pictures of faces from smiling to crying
- You pick the face that matches how you feel
- Good for kids or when it's hard to use numbers

**What Your Doctor Wants to Know:**
- Where does it hurt?
- When did it start?
- What makes it better or worse?
- Does it spread to other areas?
- How would you describe it (sharp, dull, burning)?

Being honest about your pain helps your doctor give you the right treatment!`,
      keyTerms: [
        { term: 'pain scale', definition: 'A tool to help you describe how much pain you have' },
        { term: 'intensity', definition: 'How strong or severe the pain feels' },
        { term: 'location', definition: 'Where on your body you feel the pain' },
      ],
      analogies: [
        'A pain scale is like a volume control - it helps describe if your pain is quiet, medium, or really loud.',
        'Rating pain is like rating hunger - only you know how hungry you are, and the numbers help you tell others.',
      ],
      examples: [
        'A child with an earache might point to a crying face on the faces scale.',
        'After surgery, nurses ask you to rate your pain every few hours to make sure medicine is working.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pain assessment uses validated scales and systematic questioning to quantify pain intensity, quality, and functional impact, enabling appropriate treatment selection.',
      explanation: `**Why Pain Assessment Matters:**

Pain is subjective - only the patient truly knows how it feels. Proper assessment:
- Guides treatment selection
- Tracks response to therapy
- Identifies undertreated pain
- Documents for medical-legal purposes

**Components of Complete Pain Assessment (OPQRST):**

- **O - Onset**: When did it start? Sudden or gradual?
- **P - Provocation/Palliation**: What makes it worse or better?
- **Q - Quality**: Sharp, dull, burning, aching, throbbing?
- **R - Region/Radiation**: Where is it? Does it spread?
- **S - Severity**: 0-10 scale
- **T - Timing**: Constant or intermittent? Pattern?

**Common Assessment Scales:**

| Scale | Best Used For | Score Range |
|-------|---------------|-------------|
| NRS (0-10) | Adults, quick assessment | 0-10 |
| VAS (visual line) | Research, precise measurement | 0-100mm |
| FACES | Children, language barriers | 0-10 |
| FLACC | Infants, nonverbal patients | 0-10 |

**Red Flags in Pain Assessment:**
- Pain that wakes from sleep
- Pain with fever, weight loss
- Neurological symptoms (weakness, numbness)
- Pain from minor trauma in elderly (fracture concern)
- History of cancer with new pain

**Documentation Requirements:**
- Record initial and follow-up scores
- Document patient's pain goal (acceptable level)
- Note functional impact (sleep, activity, mood)`,
      keyTerms: [
        { term: 'validated', definition: 'Tested and proven to accurately measure what it claims to measure' },
        { term: 'subjective', definition: 'Based on personal experience and feelings, not observable by others' },
        { term: 'OPQRST', definition: 'Memory aid for pain history: Onset, Provocation, Quality, Region, Severity, Timing' },
        { term: 'functional impact', definition: 'How pain affects daily activities, work, and quality of life' },
      ],
      analogies: [
        'Pain assessment is like a detective interview - you need to gather clues about when, where, how, and why to solve the case.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive pain assessment integrates unidimensional intensity measures with multidimensional tools evaluating sensory, affective, and evaluative components of pain, while considering psychosocial factors and functional outcomes.',
      explanation: `**Classification of Pain Assessment Tools:**

*Unidimensional Scales* (intensity only):
- Numeric Rating Scale (NRS): 0-10, most widely used
- Visual Analog Scale (VAS): 100mm line, research standard
- Verbal Rating Scale (VRS): None, mild, moderate, severe

*Multidimensional Instruments*:
- McGill Pain Questionnaire (MPQ): Sensory, affective, evaluative dimensions
- Brief Pain Inventory (BPI): Intensity plus interference with function
- Pain Disability Index (PDI): Impact on 7 life domains

**Specialized Assessment for Populations:**

*Pediatric:*
- FLACC (Face, Legs, Activity, Cry, Consolability): 0-2 months+
- CRIES: Neonates post-operative
- FACES-Revised: 4-16 years

*Cognitively Impaired:*
- PAINAD (Pain Assessment in Advanced Dementia)
- Abbey Pain Scale
- Behavioral observation essential

*Neuropathic Pain Screening:*
- DN4 (Douleur Neuropathique en 4 Questions)
- painDETECT
- LANSS (Leeds Assessment of Neuropathic Symptoms and Signs)

**Pain Quality Descriptors:**

| Descriptor | Suggests |
|------------|----------|
| Burning, shooting, electric | Neuropathic |
| Aching, throbbing | Nociceptive/inflammatory |
| Pressure, cramping | Visceral |
| Sharp, stabbing | Somatic acute |
| Deep, boring | Bone involvement |

**Functional Assessment:**

Beyond intensity, evaluate:
- Sleep quality (pain awakening)
- Activity limitations (walking, sitting tolerance)
- Work impact (absenteeism, presenteeism)
- Mood (depression, anxiety screening)
- Social function (relationships, isolation)

**Quantitative Sensory Testing (QST):**
- Measures sensory thresholds
- Identifies sensory phenotypes
- Detects hyperalgesia, allodynia
- Guides mechanism-based treatment`,
      keyTerms: [
        { term: 'unidimensional', definition: 'Measuring a single aspect (intensity only)' },
        { term: 'multidimensional', definition: 'Measuring multiple aspects (intensity, quality, impact)' },
        { term: 'DN4', definition: 'Douleur Neuropathique 4 - screening tool for neuropathic pain' },
        { term: 'allodynia', definition: 'Pain from normally non-painful stimuli (e.g., light touch hurts)' },
        { term: 'hyperalgesia', definition: 'Exaggerated pain response to normally painful stimuli' },
      ],
      clinicalNotes: 'For chronic pain, always use a multidimensional approach. A patient may report 7/10 pain but function well, while another reports 5/10 but is disabled - the treatment approach differs significantly.',
    },
    4: {
      level: 4,
      summary: 'Advanced pain assessment employs psychometrically validated instruments with established reliability, validity, and minimal clinically important difference thresholds, integrated with biopsychosocial evaluation and phenotypic characterization.',
      explanation: `**Psychometric Properties of Major Instruments:**

*Numeric Rating Scale (NRS):*
- Test-retest reliability: r = 0.95
- MCID (Minimal Clinically Important Difference): 1.0-2.0 points
- 30% reduction = "moderately important"
- 50% reduction = "substantially important"

*Visual Analog Scale (VAS):*
- More sensitive to change than NRS
- MCID: 13-19mm (varies by condition)
- Preferred for research, less for clinical

*Brief Pain Inventory (BPI):*
- Pain Severity Scale: α = 0.85
- Pain Interference Scale: α = 0.91
- MCID: 1.0 point on either subscale

**Biopsychosocial Assessment Framework:**

*Biological Factors:*
- Tissue pathology
- Nociceptive mechanisms
- Central sensitization markers
- Comorbid medical conditions

*Psychological Factors:*
- Pain catastrophizing (PCS score)
- Fear-avoidance beliefs (FABQ)
- Depression (PHQ-9), Anxiety (GAD-7)
- Self-efficacy for pain management
- Coping strategies

*Social Factors:*
- Work status and demands
- Social support
- Litigation/compensation
- Cultural pain beliefs
- Healthcare access

**Phenotypic Characterization:**

*QST Clusters (German Research Network):*
1. Sensory loss phenotype
2. Thermal hyperalgesia
3. Mechanical hyperalgesia
4. Healthy sensory

*Clinical Implications:*
- Sensory loss → Likely peripheral denervation
- Thermal hyperalgesia → Sensitized C-fibers
- Mechanical hyperalgesia → Central sensitization
- Each phenotype may respond differently to treatments

**Conditioned Pain Modulation (CPM):**
- Tests endogenous descending inhibition
- "Pain inhibits pain" paradigm
- Reduced CPM predicts:
  - Chronic pain development
  - Poor response to opioids
  - May respond to SNRIs, duloxetine

**Temporal Summation:**
- Repetitive stimuli produce increasing pain
- Reflects "wind-up" (spinal sensitization)
- Elevated in central sensitization states

**Composite Assessment Batteries:**

*For Chronic Pain:*
- PROMIS (Patient-Reported Outcomes Measurement Information System)
- Computer adaptive testing
- Domains: Pain intensity, interference, behavior, quality
- T-score normed to general population

*For Opioid Risk:*
- Opioid Risk Tool (ORT)
- SOAPP-R (Screener and Opioid Assessment for Patients with Pain)
- DIRE (Diagnosis, Intractability, Risk, Efficacy)`,
      keyTerms: [
        { term: 'MCID', definition: 'Minimal Clinically Important Difference - smallest change meaningful to patients' },
        { term: 'PCS', definition: 'Pain Catastrophizing Scale - measures magnification, rumination, helplessness' },
        { term: 'CPM', definition: 'Conditioned Pain Modulation - endogenous pain inhibition testing' },
        { term: 'PROMIS', definition: 'NIH-developed patient-reported outcome measures using modern psychometrics' },
        { term: 'QST', definition: 'Quantitative Sensory Testing - standardized assessment of sensory function' },
      ],
      clinicalNotes: 'Elevated pain catastrophizing (PCS > 30) is one of the strongest predictors of poor outcomes and chronic pain development. Addressing catastrophizing through CBT should be prioritized in high scorers.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art pain assessment integrates validated psychometric instruments with biomarkers, neuroimaging signatures, and machine learning approaches to enable precision phenotyping and personalized treatment algorithms.',
      explanation: `**Neuroimaging-Based Pain Assessment:**

*Neurologic Pain Signature (NPS):*
- fMRI-based multivariate pattern
- Discriminates physical pain from other negative states
- Sensitive: 93%, Specific: 93% (Wager et al.)
- Correlates with pain intensity
- Not yet clinical, research standard

*Structural Markers:*
- Gray matter changes in chronic pain (thalamus, ACC, insula)
- White matter tract alterations (DTI)
- Potentially reversible with effective treatment
- Emerging as outcome biomarkers

*PET Neuroinflammation:*
- TSPO ligands (11C-PBR28)
- Glial activation in chronic pain
- Research applications in fibromyalgia, CRPS

**Blood-Based Biomarkers:**

*Inflammatory Panel:*
- CRP, IL-6, TNF-α
- Elevated in inflammatory pain states
- May predict opioid response
- Longitudinal changes track treatment

*Epigenetic Markers:*
- DNA methylation patterns
- MicroRNA signatures (miR-21, miR-146a)
- Potential for pain chronification prediction

*Metabolomic Profiles:*
- Tryptophan-kynurenine pathway
- Lipid mediators
- Early research phase

**Machine Learning Applications:**

*Prediction Models:*
- Chronic postsurgical pain risk (AUC 0.72-0.85)
- Features: Preoperative pain, anxiety, pain catastrophizing, surgical factors
- Implementation in TPS programs

*Treatment Response:*
- Opioid responder vs non-responder prediction
- SCS (spinal cord stimulation) success prediction
- Personalized multimodal regimen recommendation

*Natural Language Processing:*
- Extracting pain phenotypes from EHR
- Identifying undertreated pain
- Surveillance for opioid misuse signals

**Novel Assessment Paradigms:**

*Ecological Momentary Assessment (EMA):*
- Real-time smartphone-based pain capture
- Reduces recall bias
- Captures pain variability
- Correlates with daily function

*Wearable Sensors:*
- Activity patterns
- Sleep architecture
- Heart rate variability (autonomic)
- Objective functional outcomes

*Virtual Reality Assessment:*
- Immersive pain evaluation
- Standardized pain induction protocols
- Research applications

**Implementation Challenges:**

*Practical Barriers:*
- Time constraints in clinical practice
- Instrument burden on patients
- EHR integration
- Reimbursement for comprehensive assessment

*Evidence Gaps:*
- Limited RCTs comparing assessment strategies
- Phenotype-treatment matching trials ongoing
- Biomarker validation in diverse populations

**Current Standards of Care:**

*Minimum Assessment (CDC Guidelines):*
- Pain intensity (NRS)
- Functional status (BPI interference or PEG)
- Mental health screening (PHQ-2/GAD-2)
- Opioid risk if considering controlled substances
- Prescription monitoring database check

*Comprehensive Assessment (Pain Centers):*
- Add: QST, psychological evaluation
- Multidisciplinary intake
- Phenotypic classification
- Goal-oriented treatment planning

**Research Directions:**

1. Validation of composite biomarker panels
2. Implementation of prediction models in EHR
3. Real-world effectiveness of phenotype-matched treatment
4. AI-assisted pain assessment and monitoring
5. Health disparities in pain assessment access`,
      keyTerms: [
        { term: 'Neurologic Pain Signature', definition: 'fMRI-derived multivariate pattern specific to physical pain experience' },
        { term: 'TSPO', definition: 'Translocator protein - microglial activation marker imaged with PET' },
        { term: 'EMA', definition: 'Ecological Momentary Assessment - real-time repeated sampling in natural environments' },
        { term: 'AUC', definition: 'Area Under Curve - measure of predictive model performance (0.5=chance, 1.0=perfect)' },
        { term: 'PEG', definition: 'Pain, Enjoyment, General activity - 3-item brief pain assessment' },
      ],
      clinicalNotes: 'The CDC recommends at minimum using a validated functional outcome measure (like BPI interference) in addition to pain intensity when managing chronic pain. Consider PROMIS CAT for efficient, comprehensive assessment. Phenotypic characterization is increasingly available at academic pain centers and may guide treatment selection.',
    },
  },

  media: [
    {
      id: 'nrs-scale-diagram',
      type: 'diagram',
      filename: 'numeric-rating-scale.svg',
      title: 'Numeric Rating Scale (0-10)',
      description: 'Visual representation of the NRS with severity categories',
    },
    {
      id: 'wong-baker-faces',
      type: 'diagram',
      filename: 'wong-baker-faces-scale.svg',
      title: 'Wong-Baker FACES Pain Rating Scale',
      description: 'Pediatric-friendly faces scale for pain assessment',
    },
    {
      id: 'pain-assessment-algorithm',
      type: 'diagram',
      filename: 'pain-assessment-flowchart.svg',
      title: 'Comprehensive Pain Assessment Algorithm',
      description: 'Clinical decision flowchart for pain evaluation',
    },
  ],

  citations: [
    {
      id: 'hawker-2011',
      type: 'article',
      title: 'Measures of adult pain',
      authors: ['Hawker GA', 'Mian S', 'Kendzerska T', 'French M'],
      source: 'Arthritis Care & Research',
      chapter: '63(S11):S240-S252',
      accessedDate: '2025-01-24',
    },
    {
      id: 'cdc-guidelines-2022',
      type: 'website',
      title: 'CDC Clinical Practice Guideline for Prescribing Opioids',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm',
      accessedDate: '2025-01-24',
    },
    {
      id: 'fillingim-2014',
      type: 'article',
      title: 'Assessment of Chronic Pain: Domains, Methods, and Mechanisms',
      authors: ['Fillingim RB', 'Loeser JD', 'Baron R', 'Edwards RR'],
      source: 'Journal of Pain',
      chapter: '17(9 Suppl):T10-20',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'pain-acute-vs-chronic', targetType: 'topic', relationship: 'related', label: 'Acute vs Chronic Pain' },
    { targetId: 'pain-who-ladder', targetType: 'topic', relationship: 'related', label: 'WHO Pain Ladder' },
    { targetId: 'pain-neuropathic', targetType: 'condition', relationship: 'see-also', label: 'Neuropathic Pain' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pain management', 'clinical assessment', 'outcome measures'],
    keywords: ['pain scale', 'NRS', 'VAS', 'FLACC', 'pain intensity', 'functional assessment', 'QST'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'psychiatry'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
