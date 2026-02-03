/**
 * Chief Complaint (CC) - Documentation and Communication
 *
 * Educational content helping patients understand how to effectively
 * communicate their primary reason for seeking medical care.
 */

import { EducationalContent } from '../types';

export const chiefComplaint: EducationalContent = {
  id: 'concept-chief-complaint',
  type: 'concept',
  name: 'Chief Complaint',
  alternateNames: ['CC', 'Primary Concern', 'Reason for Visit', 'Presenting Problem'],

  levels: {
    1: {
      level: 1,
      summary: 'The chief complaint is the main reason you are seeing the doctor today - the problem that bothers you the most.',
      explanation: `When you go to the doctor, the first thing they want to know is: "What brings you in today?" Your answer to this question is called your "chief complaint."

**Think of it like this:** If you called a plumber, they would ask "What's the problem?" You might say "My sink is leaking." That's your chief complaint - clear and simple.

**How to describe your chief complaint:**
- Use your own words, not medical terms
- Be specific about what's bothering you
- Mention how long it's been going on

**Good examples:**
- "I've had a bad headache for three days"
- "My knee hurts when I walk"
- "I can't stop coughing and it's been a week"
- "I feel tired all the time for the past month"

**Not-so-good examples:**
- "I don't feel well" (too vague)
- "I have multiple problems" (pick the main one first)
- "My friend said I might have..." (focus on what YOU feel)

**Why it matters:**
Your chief complaint helps the doctor focus on what's most important to you. Even if you have several problems, starting with your main concern helps the doctor organize the visit and make sure your biggest issue gets addressed.

**Tip:** Before your appointment, think about what single problem is bothering you the most. That's your chief complaint!`,
      keyTerms: [
        { term: 'chief complaint', definition: 'The main reason you are visiting the doctor' },
        { term: 'symptom', definition: 'Something you feel or notice that might mean you are sick, like pain or feeling tired' },
        { term: 'appointment', definition: 'A scheduled time to see your doctor' },
      ],
      analogies: [
        'Your chief complaint is like the subject line of an email - it tells the doctor what the message is about before they read all the details.',
        'Think of it like ordering at a restaurant - you tell them your main dish first, then add sides and drinks.',
      ],
      examples: [
        'A student might say: "My stomach hurts after I eat lunch at school."',
        'A grandparent might say: "I get dizzy when I stand up too fast."',
        'An athlete might say: "My ankle has been swollen since I twisted it playing soccer."',
      ],
    },
    2: {
      level: 2,
      summary: 'The chief complaint (CC) is a brief statement in the patient\'s own words describing the primary symptom or concern that prompted the medical visit, including duration.',
      explanation: `The chief complaint is the cornerstone of every medical encounter. It answers two essential questions: "What is wrong?" and "How long has it been going on?"

**Structure of a Good Chief Complaint:**
1. **Symptom or Problem**: The main issue in simple terms
2. **Duration**: How long it has been present
3. **Context** (optional): Any relevant circumstance

**Format examples:**
- "Chest pain for 2 hours"
- "Fever and cough for 3 days"
- "Worsening shortness of breath for 1 week"
- "Abdominal pain since last night after eating"

**Why Duration Matters:**
The length of time you've had a symptom helps doctors understand:
- **Acute** (hours to days): Often infections, injuries, or sudden problems
- **Subacute** (days to weeks): May be developing conditions
- **Chronic** (weeks to months/years): Ongoing conditions requiring different approaches

**Preparing Your Chief Complaint:**
Before your appointment, ask yourself:
1. What symptom bothers me the most?
2. When did it start? (Be as specific as possible)
3. Is it constant or does it come and go?
4. What made me decide to seek care now?

**Common Mistakes to Avoid:**
- Using a diagnosis instead of a symptom ("I have bronchitis" vs. "I've been coughing for a week")
- Being too vague ("I feel sick")
- Listing multiple unrelated complaints at once
- Letting someone else describe your symptoms for you

**In the Emergency Room:**
In emergencies, your chief complaint helps staff prioritize care. Severe chest pain or difficulty breathing will be triaged faster than a minor rash, so accuracy is important.`,
      keyTerms: [
        { term: 'chief complaint', definition: 'A brief statement of the main symptom and its duration that brought the patient to seek medical care', pronunciation: 'cheef kum-PLAYNT' },
        { term: 'triage', definition: 'The process of sorting patients by the urgency of their condition', pronunciation: 'TREE-ahj' },
        { term: 'acute', definition: 'A condition that starts suddenly and is typically short-term', pronunciation: 'uh-KYOOT' },
        { term: 'chronic', definition: 'A condition that develops slowly and lasts a long time', pronunciation: 'KRON-ik' },
        { term: 'symptom', definition: 'A physical or mental sign of a condition experienced by the patient' },
      ],
      analogies: [
        'The chief complaint is like a movie trailer - it gives the main idea quickly so the doctor knows what kind of "story" they\'ll be dealing with.',
      ],
    },
    3: {
      level: 3,
      summary: 'The chief complaint (CC) is a concise, patient-quoted statement documenting the primary symptom or concern with duration, serving as the entry point for clinical reasoning and differential diagnosis generation.',
      explanation: `## Definition and Purpose

The chief complaint is the patient's subjective, verbatim description of the primary problem prompting the medical encounter. It serves multiple critical functions:

1. **Clinical Focus**: Directs the subsequent history and physical examination
2. **Differential Diagnosis**: Initiates the diagnostic reasoning process
3. **Documentation**: Provides medicolegal record of the presenting concern
4. **Triage**: Determines urgency and appropriate care setting

## Documentation Standards

**Format:**
- Quotation marks indicate patient's own words
- Duration should be specific (hours, days, weeks, months)
- Avoid medical jargon or diagnoses
- Single, focused statement (additional concerns noted separately)

**Example Documentation:**
- CC: "Sharp chest pain radiating to my left arm for 2 hours"
- CC: "Worst headache of my life" x 1 hour
- CC: "Blood in my stool for 3 days"

## Components of an Effective Chief Complaint

| Component | Description | Example |
|-----------|-------------|---------|
| What | Primary symptom | "Headache" |
| Where | Location (if applicable) | "behind my right eye" |
| When | Duration or onset | "for 4 days" |
| Context | Precipitating event | "since my car accident" |

## Clinical Significance

**Symptom vs. Diagnosis:**
- Correct: "Burning with urination x 2 days"
- Incorrect: "Urinary tract infection"

Using symptoms rather than diagnoses is crucial because:
- Patients may self-diagnose incorrectly
- It keeps the diagnostic process open
- Preserves the clinical thought process

## Special Populations

**Pediatric Patients:**
- Parent/guardian may provide CC, document source
- Child's own words when developmentally appropriate
- Example: "Mom reports fever and pulling at right ear x 2 days"

**Non-verbal Patients:**
- Document observed signs and caregiver reports
- Example: "Per nursing home staff: decreased responsiveness x 4 hours"

**Psychiatric Presentations:**
- May require observation-based documentation
- Example: "Brought by police for bizarre behavior and threatening statements"

## Medicolegal Considerations

The chief complaint is a legal document element. Accurate documentation:
- Establishes reason for encounter
- Supports medical necessity of services
- Provides timeline for symptom onset
- May be reviewed in malpractice litigation`,
      keyTerms: [
        { term: 'chief complaint', definition: 'Verbatim, concise statement of the patient\'s primary presenting symptom or concern with duration' },
        { term: 'differential diagnosis', definition: 'List of possible conditions that could explain the patient\'s symptoms', pronunciation: 'dif-er-EN-shul' },
        { term: 'verbatim', definition: 'Recorded in the exact words used by the patient', pronunciation: 'ver-BAY-tim' },
        { term: 'presenting problem', definition: 'The initial symptom or concern that prompted the patient to seek care' },
        { term: 'medicolegal', definition: 'Pertaining to both medical and legal considerations in healthcare' },
      ],
      clinicalNotes: 'A well-documented chief complaint is essential for billing compliance (supporting medical necessity) and medicolegal protection. Always use quotation marks to indicate patient\'s exact words.',
    },
    4: {
      level: 4,
      summary: 'The chief complaint initiates the clinical encounter, driving hypothesis generation, and must be documented as a patient-quoted statement to support clinical reasoning, appropriate resource utilization, and medicolegal documentation standards.',
      explanation: `## Advanced Documentation Principles

### Cognitive Framework
The CC triggers the clinician's pattern recognition and hypothesis generation. An experienced clinician immediately generates a mental differential diagnosis upon hearing the CC, which then guides:
- Focused HPI questioning
- Targeted physical examination
- Efficient diagnostic workup

### Documentation Best Practices

**Elements to Include:**
1. Symptom(s) in patient's own words (verbatim)
2. Duration with specific time frame
3. Source of information if not patient
4. Acuity indicators when present

**Acceptable Formats:**
- "Chest pain x 3 hours, worse with exertion"
- Per wife: "Confused and not himself since this morning"
- "Feeling like my heart is racing on and off for 2 weeks"

### High-Risk Chief Complaints

Certain chief complaints warrant immediate attention regardless of appearance:

| Chief Complaint | Concern | Action |
|-----------------|---------|--------|
| "Worst headache of my life" | Subarachnoid hemorrhage | Emergent workup |
| Chest pain + diaphoresis | Acute coronary syndrome | ECG within 10 minutes |
| Sudden weakness one side | Stroke | Time-sensitive intervention |
| Syncope + exertion | Cardiac etiology | High-risk evaluation |
| "Tearing" back pain | Aortic dissection | CT angiography |

### Multiple Complaints

When patients present with multiple concerns:
1. Identify the primary CC (most urgent or most bothersome)
2. Briefly note secondary concerns
3. Address systematically based on clinical priority

**Documentation approach:**
- CC: "Knee pain for 2 months"
- Also: "Would like to discuss blood pressure medications" (to address if time permits)

### Psychiatric and Behavioral Presentations

**Considerations:**
- Patient may lack insight into presenting problem
- Third-party information often critical
- Observable behaviors become part of CC

**Examples:**
- "I'm not crazy, my family made me come" (document this verbatim)
- Per mother: "Hasn't slept in 4 days, spending money recklessly"
- Brought by EMS: Found wandering in traffic, disoriented

### Emergency Department Triage

The CC directly influences Emergency Severity Index (ESI) scoring:
- ESI-1: Requires immediate life-saving intervention
- ESI-2: High risk, should not wait
- ESI-3: Multiple resources anticipated
- ESI-4: One resource anticipated
- ESI-5: No resources anticipated

### Return Visits

When a patient returns for the same issue:
- Document as new CC but reference prior
- Example: "Persistent cough x 10 days, no improvement despite antibiotics started 5 days ago"

### Quality Metrics

The chief complaint impacts:
- Door-to-provider time tracking
- Appropriate care setting determination
- Resource utilization review
- Patient satisfaction (was primary concern addressed?)`,
      keyTerms: [
        { term: 'Emergency Severity Index (ESI)', definition: 'Five-level triage system used in emergency departments to prioritize patient care based on acuity and resource needs' },
        { term: 'pattern recognition', definition: 'Cognitive process by which clinicians quickly identify clinical syndromes based on presenting features' },
        { term: 'sentinel complaint', definition: 'A chief complaint that signals potential high-risk or life-threatening condition requiring immediate evaluation' },
        { term: 'acuity', definition: 'The severity or urgency of a patient\'s medical condition', pronunciation: 'uh-KYOO-ih-tee' },
        { term: 'diaphoresis', definition: 'Excessive sweating, often associated with cardiac events or shock', pronunciation: 'dy-uh-fuh-REE-sis' },
      ],
      clinicalNotes: 'High-risk chief complaints such as "worst headache of my life," "chest pain with radiation," or "sudden severe back pain" should trigger immediate diagnostic protocols regardless of patient appearance or vital sign stability.',
    },
    5: {
      level: 5,
      summary: 'The chief complaint represents the foundation of medical documentation, clinical reasoning, and patient-centered care, with implications for diagnostic accuracy, resource allocation, liability protection, and healthcare quality metrics.',
      explanation: `## Clinical Reasoning Framework

### Illness Scripts and Chief Complaints

Experienced clinicians develop "illness scripts" - mental templates of how diseases typically present. The CC activates relevant scripts:

**Example - CC: "Crushing chest pain x 30 minutes"**
- Scripts activated: ACS, aortic dissection, PE, esophageal rupture
- Each script has associated:
  - Epidemiologic features (age, sex, risk factors)
  - Clinical features (associated symptoms, exam findings)
  - Time course
  - Diagnostic approach

### Bayesian Reasoning

The CC establishes the prior probability of disease:
- "Sudden severe headache" in a 50-year-old: SAH pretest probability ~12-15%
- "Chronic daily headache for years": SAH probability <1%

This influences:
- Test selection and interpretation
- Threshold for intervention
- Disposition decisions

## Documentation for Complex Scenarios

### Altered Mental Status
\`\`\`
CC: Per EMS: Found on floor unresponsive; per neighbor, patient was "fine"
yesterday. GCS 8 on arrival.
\`\`\`

### Psychiatric Emergency
\`\`\`
CC: "The FBI is tracking me through my fillings" - patient self-presented;
per mother by phone, patient off medications for 2 weeks.
\`\`\`

### Pediatric Non-Verbal
\`\`\`
CC: Per mother: "Won't bear weight on left leg since falling at playground
1 hour ago." Child crying, pointing to left knee.
\`\`\`

### Cognitively Impaired Adult
\`\`\`
CC: Per group home staff: "Screaming when moved, unlike baseline" x 2 days.
Patient cannot verbalize complaints.
\`\`\`

## Medicolegal and Regulatory Considerations

### Medical Necessity Documentation
The CC establishes medical necessity for:
- Level of service billed
- Diagnostic tests ordered
- Procedures performed
- Admission decisions

**CMS Guidelines:**
- CC must support clinical decision-making documented
- Must align with final diagnoses or explain discrepancy
- Auditors review CC as first element of chart review

### Liability Protection
In malpractice litigation, the CC is scrutinized for:
- Was the presenting concern taken seriously?
- Did workup match the severity of complaints?
- Were red flag symptoms documented and addressed?

**Example: Missed MI**
- CC: "Indigestion x 2 days" - May suggest minimal workup appropriate
- CC: "Indigestion with sweating and jaw pain x 2 days" - Demands cardiac evaluation

### EMTALA Compliance
Emergency departments must document:
- CC for all presenting patients
- Medical screening examination findings
- Whether emergency medical condition exists

## Quality and Performance Metrics

### Tracking Chief Complaint Categories
Healthcare systems analyze CC data for:
- Disease surveillance (e.g., influenza-like illness trends)
- Resource allocation (staffing based on CC volumes)
- Performance benchmarking (time to intervention by CC type)
- Public health reporting (syndromic surveillance)

### Patient Experience Correlation
Research shows patient satisfaction correlates with:
- Whether CC was clearly addressed
- Time spent discussing primary concern
- Follow-up plan explicitly linked to CC

## Teaching and Assessment

### Competency Evaluation
Medical education uses CC elicitation to assess:
- Communication skills
- Clinical reasoning activation
- Patient-centered interviewing
- Time management during encounters

### Common Errors
| Error | Example | Correction |
|-------|---------|------------|
| Using diagnosis as CC | "UTI" | "Burning urination x 3 days" |
| Too vague | "Not feeling well" | "Nausea and vomiting x 2 days" |
| Missing duration | "Headache" | "Headache x 1 week" |
| Clinician's words | "Presents for evaluation" | Quote patient's words |
| Multiple CCs without prioritization | Lists 5 problems equally | Identify primary, list secondary |

## Electronic Health Record Considerations

### Structured Data Entry
Many EHRs use:
- CC dropdown menus (may limit precision)
- Free-text fields (better for nuance)
- Natural language processing extraction

### Alert Integration
Advanced systems trigger alerts based on CC:
- "Chest pain" → automatic ECG order
- "Suicidal thoughts" → safety protocol activation
- "Possible stroke" → stroke team notification

### Documentation Templates
Avoid auto-populated CCs that don't reflect actual patient presentation - always verify and modify as needed.`,
      keyTerms: [
        { term: 'illness script', definition: 'Mental representation of how a disease typically presents, including demographics, symptoms, findings, and course' },
        { term: 'Bayesian reasoning', definition: 'Approach to diagnosis that updates probability estimates based on clinical findings and test results', pronunciation: 'BAY-zee-un' },
        { term: 'EMTALA', definition: 'Emergency Medical Treatment and Labor Act - federal law requiring emergency departments to screen and stabilize all patients regardless of ability to pay' },
        { term: 'syndromic surveillance', definition: 'Public health monitoring using chief complaints and other data to detect disease outbreaks' },
        { term: 'pretest probability', definition: 'The likelihood of disease before diagnostic testing, based on clinical presentation and population prevalence' },
        { term: 'medical necessity', definition: 'Documentation requirement establishing that healthcare services are appropriate for diagnosis and treatment of the patient\'s condition' },
      ],
      clinicalNotes: `Critical teaching points:
1. The CC should never be a diagnosis - always use symptoms
2. High-risk CCs require documentation of why a serious condition was ruled out
3. Document verbatim with quotation marks - this protects the clinician by clearly establishing what the patient reported
4. Time-sensitive complaints (chest pain, stroke symptoms, severe headache) require documented time of onset and time of evaluation
5. Discrepancy between CC and final diagnosis should be explained in assessment`,
    },
  },

  media: [],

  citations: [
    {
      id: 'bates-guide',
      type: 'textbook',
      title: 'The Health History',
      authors: ['Bickley, L.S.'],
      source: 'Bates\' Guide to Physical Examination and History Taking',
      chapter: '1',
    },
    {
      id: 'sapira-art-science',
      type: 'textbook',
      title: 'The History: An Overview',
      authors: ['Orient, J.M.'],
      source: 'Sapira\'s Art & Science of Bedside Diagnosis',
      chapter: '1',
    },
    {
      id: 'cms-documentation',
      type: 'website',
      title: 'Evaluation and Management Services Guide',
      source: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/medicare/payment/fee-for-service-providers/evaluation-management-em-services',
    },
  ],

  crossReferences: [
    { targetId: 'concept-hpi', targetType: 'concept', relationship: 'related', label: 'History of Present Illness' },
    { targetId: 'concept-ros', targetType: 'concept', relationship: 'related', label: 'Review of Systems' },
    { targetId: 'concept-patient-communication', targetType: 'concept', relationship: 'related', label: 'Patient Communication' },
  ],

  tags: {
    systems: ['clinical-skills'],
    topics: ['medical-history', 'documentation', 'patient-communication', 'clinical-reasoning'],
    clinicalRelevance: 'critical',
    keywords: ['chief complaint', 'CC', 'presenting problem', 'medical interview', 'history taking'],
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default chiefComplaint;
