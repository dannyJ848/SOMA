/**
 * Palliative Care in Oncology Educational Content
 *
 * Comprehensive coverage of palliative and supportive care including:
 * - Palliative care principles
 * - Symptom management (pain, nausea, dyspnea, fatigue)
 * - Communication and goals of care
 * - End-of-life care
 * - Hospice
 */

import { EducationalContent } from '../../types';

export const palliativeCareContent: EducationalContent = {
  id: 'oncology-palliative-care',
  type: 'concept',
  name: 'Palliative Care in Oncology',
  alternateNames: ['Supportive care', 'Symptom management', 'Comfort care', 'End-of-life care'],

  levels: {
    1: {
      level: 1,
      summary: 'Palliative care focuses on helping people with serious illnesses feel better and live well, no matter what stage of illness they are in.',
      explanation: `Palliative care is about making life better for people with serious illnesses like cancer. It's not about giving up - it's about getting extra support.

**What Palliative Care Does:**
- Helps control pain
- Manages other symptoms (nausea, tiredness, trouble breathing)
- Provides emotional support
- Helps with difficult decisions
- Supports the whole family, not just the patient

**Important Things to Know:**
- Palliative care can happen alongside cancer treatment
- It's not the same as hospice (though hospice is a type of palliative care)
- You don't have to be dying to receive it
- It can actually help people live longer by improving quality of life

**Common Symptoms Palliative Care Helps With:**
- **Pain**: There are many medicines and treatments to help
- **Nausea**: Medications can prevent and treat this
- **Fatigue**: Finding ways to save energy for what matters most
- **Shortness of breath**: Medicines and techniques to help breathe easier
- **Anxiety and depression**: Counseling and medications can help
- **Poor appetite**: Tips and treatments to help eating

**The Palliative Care Team:**
- Doctors and nurse practitioners
- Nurses
- Social workers
- Chaplains or spiritual counselors
- Sometimes physical or occupational therapists

**When to Ask for Palliative Care:**
- Any time symptoms are hard to manage
- When you need help understanding your illness
- When you're facing difficult treatment decisions
- When you need emotional or spiritual support`,
      keyTerms: [
        { term: 'palliative care', definition: 'Medical care focused on providing relief from symptoms and improving quality of life' },
        { term: 'quality of life', definition: 'How good or satisfying your daily life feels' },
        { term: 'symptom', definition: 'A problem caused by illness, like pain, nausea, or tiredness' },
        { term: 'hospice', definition: 'A type of care for people in the last months of life, focused on comfort' },
      ],
      analogies: [
        'Palliative care is like having a support team that focuses entirely on how you feel, while your oncologist focuses on treating the cancer.',
        'Think of palliative care as adding another layer of help - like having both a coach and a trainer instead of just one.',
      ],
      examples: [
        'A woman with breast cancer gets palliative care to help manage pain from bone metastases while continuing chemotherapy.',
        'A man with lung cancer meets with the palliative care team to discuss his goals and what matters most to him.',
      ],
    },
    2: {
      level: 2,
      summary: 'Palliative care provides specialized symptom management, communication support, and goals-of-care discussions for patients with serious illness, ideally integrated early in the disease course.',
      explanation: `**Principles of Palliative Care:**

*Core Elements:*
- Focus on quality of life
- Treat the whole person (physical, psychological, social, spiritual)
- Patient and family as unit of care
- Interdisciplinary team approach
- Available alongside disease-directed therapy
- Neither hastens nor postpones death

**Evidence for Early Palliative Care:**
- Temel study (NEJM 2010): Early palliative care in metastatic lung cancer improved quality of life, mood, AND survival (11.6 vs 8.9 months)
- Reduces aggressive end-of-life care
- Improves patient and family satisfaction

**Symptom Management:**

*Pain:*
- Assess using pain scales (0-10, FACES)
- WHO ladder: Non-opioids → weak opioids → strong opioids
- Around-the-clock dosing for constant pain
- Breakthrough doses for intermittent pain
- Adjuvants for specific pain types (neuropathic, bone)

*Nausea/Vomiting:*
- Identify cause (treatment-related, obstruction, brain metastases)
- Multiple mechanisms may require multiple medications
- Common agents: Ondansetron, metoclopramide, prochlorperazine, dexamethasone

*Dyspnea:*
- Treat underlying cause when possible
- Opioids: Effective even in opioid-naive patients (low dose)
- Fans, cool air
- Oxygen if hypoxic (benefit in non-hypoxic patients unclear)
- Anxiolytics if anxiety component

*Fatigue:*
- Rule out treatable causes (anemia, thyroid, depression, medication)
- Activity pacing and energy conservation
- Exercise (paradoxically helpful)
- Medications: Methylphenidate, modafinil in select cases

**Goals of Care Conversations:**

*When to Have Them:*
- At diagnosis of serious illness
- When disease progresses
- Before major treatment decisions
- When prognosis changes
- When patient raises questions

*Key Elements:*
- Assess understanding
- Share prognosis (ask permission first)
- Explore goals, values, fears
- Make recommendations aligned with goals
- Document and communicate to team

**Advance Care Planning:**
- Healthcare proxy/durable power of attorney
- Living will/advance directives
- POLST/MOLST forms
- DNR/DNI discussions`,
      keyTerms: [
        { term: 'advance directive', definition: 'Legal document describing what medical care you want if you can\'t speak for yourself' },
        { term: 'healthcare proxy', definition: 'A person you choose to make medical decisions for you if you cannot' },
        { term: 'WHO pain ladder', definition: 'World Health Organization stepwise approach to cancer pain management' },
        { term: 'breakthrough pain', definition: 'Pain that breaks through regular pain medication; treated with extra doses' },
        { term: 'POLST', definition: 'Physician Orders for Life-Sustaining Treatment; actionable medical orders' },
      ],
      analogies: [
        'The WHO pain ladder is like climbing stairs - you start at the bottom and go higher as needed.',
        'Goals of care conversations are like planning a trip - you need to know the destination before choosing the route.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive palliative care addresses complex symptom management, employs evidence-based communication frameworks, and coordinates care across settings from diagnosis through bereavement.',
      explanation: `**Advanced Pain Management:**

*Opioid Pharmacology:*
- Morphine: Standard comparator, multiple formulations
- Oxycodone: Higher bioavailability than morphine PO
- Hydromorphone: Less histamine release, useful in renal impairment
- Fentanyl: Transdermal for stable pain, transmucosal for breakthrough
- Methadone: Complex kinetics, NMDA antagonist (neuropathic pain), prolonged QT

*Opioid Rotation:*
- Reasons: Inadequate analgesia, intolerable side effects
- Use equianalgesic tables with 25-50% dose reduction
- Cross-tolerance is incomplete

*Adjuvant Analgesics:*
- Neuropathic pain: Gabapentin, pregabalin, duloxetine, tricyclics
- Bone pain: NSAIDs, bisphosphonates, denosumab, radiation
- Bowel obstruction: Dexamethasone, octreotide
- Muscle spasm: Baclofen, tizanidine
- Anxiety-related: Benzodiazepines

*Interventional Approaches:*
- Nerve blocks (celiac plexus for pancreatic cancer)
- Intrathecal pumps
- Vertebroplasty/kyphoplasty for vertebral fractures
- Palliative radiation

**Non-Pain Symptom Management:**

*Dyspnea:*
- Opioids: Morphine 2.5-5mg PO q4h or equivalent
- Benzodiazepines: For anxiety component (lorazepam 0.5-1mg)
- Dexamethasone: Airway edema, lymphangitic spread
- Thoracentesis for malignant pleural effusion
- Bronchodilators if bronchospasm

*Nausea Pathophysiology and Treatment:*
- Chemoreceptor trigger zone (dopamine): Haloperidol, prochlorperazine
- GI (vagal afferents): Metoclopramide
- Vestibular: Scopolamine, meclizine
- Cortical: Lorazepam, dronabinol
- Multiple mechanisms: Olanzapine (blocks multiple receptors)

*Constipation:*
- Prevent with laxatives when starting opioids
- Stimulant + softener combination
- Methylnaltrexone, naloxegol for opioid-induced refractory constipation

*Delirium:*
- Common in advanced cancer (up to 85% at end of life)
- Identify reversible causes (medications, infection, metabolic)
- Haloperidol for agitation (0.5-2mg IV/SC q4h prn)
- Reorientation, family presence
- Terminal delirium may require sedation

**Communication Frameworks:**

*SPIKES Protocol:*
- S: Setting (private, sitting, time)
- P: Perception (what does patient know)
- I: Invitation (how much do they want to know)
- K: Knowledge (share information clearly)
- E: Emotions (respond with empathy)
- S: Strategy/Summary (next steps)

*NURSE Statements for Emotion:*
- N: Naming ("It sounds like you're frustrated")
- U: Understanding ("I can understand why you'd feel that way")
- R: Respecting ("You've been so strong through this")
- S: Supporting ("We're going to work through this together")
- E: Exploring ("Tell me more about what worries you")

*Prognostication:*
- Ask-Tell-Ask approach
- Use ranges, not specific numbers
- "Hope for the best, prepare for the worst"
- Functional status is best predictor`,
      keyTerms: [
        { term: 'equianalgesic', definition: 'Doses of different opioids that provide similar pain relief' },
        { term: 'opioid rotation', definition: 'Switching from one opioid to another to improve pain control or reduce side effects' },
        { term: 'SPIKES', definition: 'Communication framework for delivering serious news to patients' },
        { term: 'methylnaltrexone', definition: 'Peripheral opioid antagonist for opioid-induced constipation' },
        { term: 'terminal delirium', definition: 'Confusion and agitation occurring in the final days of life' },
      ],
      clinicalNotes: 'When rotating opioids, reduce the equianalgesic dose by 25-50% due to incomplete cross-tolerance. Always ensure adequate breakthrough medication is available (typically 10-15% of total daily dose).',
    },
    4: {
      level: 4,
      summary: 'Expert palliative care integrates complex symptom management, prognostication tools, family meetings, and transitions to hospice while addressing existential suffering and caregiver needs.',
      explanation: `**Complex Pain Syndromes:**

*Cancer Pain Syndromes:*
- Bone metastases: Somatic, constant, worse with movement
- Neuropathic (nerve infiltration, plexopathy): Burning, shooting, allodynia
- Visceral (organ involvement): Poorly localized, referred
- Incident pain: Movement-related, often requires rapid-onset opioids

*Refractory Pain Management:*
- Ketamine: NMDA antagonist, opioid-sparing, subanesthetic doses
- Lidocaine infusion: Neuropathic, refractory
- Intrathecal therapy: Opioid + local anesthetic +/- ziconotide
- Palliative sedation: For truly refractory suffering at end of life

*Opioid Use Disorder in Palliative Care:*
- Pain is still real and deserves treatment
- Structured approach: Frequent visits, limited supplies
- Consider addiction medicine consultation
- Buprenorphine may be useful (partial agonist)

**Prognostication:**

*Tools:*
- Palliative Prognostic Score (PaP): Dyspnea, anorexia, KPS, clinical prediction, WBC, lymphocyte %
- Palliative Prognostic Index (PPI): Performance status, oral intake, edema, dyspnea, delirium
- Surprise question: "Would you be surprised if this patient died in the next year?"

*Accuracy:*
- Physicians tend to overestimate survival
- Functional decline more reliable than specific timeframes
- Trajectories: Cancer (stable then rapid decline), organ failure (exacerbations), frailty (slow decline)

**Family Meetings:**

*Preparation:*
- Review medical facts, prognosis
- Clarify goals of meeting
- Identify participants (patient, family, healthcare proxy)
- Designate roles (facilitator, clarifier)

*Structure:*
- Introduction and expectations
- Assess understanding
- Provide medical update
- Elicit patient/family goals and values
- Make recommendation aligned with goals
- Respond to emotion
- Summarize and plan follow-up

*Common Challenges:*
- Prognostic denial: Explore understanding, repeat information
- Family disagreement: Focus on patient's values, prior statements
- Requests for non-beneficial treatment: Explore underlying fears, redirect to comfort

**Hospice:**

*Eligibility:*
- Prognosis of ≤6 months if disease runs usual course
- Goals focused on comfort over cure
- Medicare Hospice Benefit requires: Terminal diagnosis, DNR not required

*Hospice Services:*
- Nursing visits
- Home health aide
- Medications for comfort
- Durable medical equipment
- Social work, chaplain
- Bereavement support for 13 months

*Levels of Care:*
- Routine home care (most common)
- Continuous home care (crisis)
- General inpatient (symptom management)
- Respite (caregiver break, up to 5 days)

**Existential and Spiritual Care:**

*Existential Distress:*
- Loss of meaning, purpose
- Dignity concerns
- Fear of being a burden
- Death anxiety

*Approaches:*
- Dignity therapy: Legacy document
- Meaning-centered psychotherapy
- Spiritual care/chaplaincy
- Life review

**Caregiver Support:**
- Assess caregiver burden
- Provide education and training
- Respite care
- Anticipatory grief support
- Bereavement services`,
      keyTerms: [
        { term: 'palliative sedation', definition: 'Intentional lowering of consciousness to relieve refractory suffering at end of life' },
        { term: 'hospice', definition: 'Philosophy and system of care for terminally ill patients focused on comfort' },
        { term: 'anticipatory grief', definition: 'Grief experienced before an expected loss' },
        { term: 'dignity therapy', definition: 'Brief psychotherapy helping patients create legacy document addressing meaning and purpose' },
        { term: 'PaP score', definition: 'Palliative Prognostic Score; estimates survival probability in terminally ill' },
      ],
      clinicalNotes: 'Hospice referral should occur when prognosis is months, not days. Early referral improves quality of death, patient/family satisfaction, and reduces aggressive end-of-life care. Median hospice length of stay is only ~3 weeks.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art palliative oncology addresses emerging evidence, healthcare system integration, ethical challenges, and global considerations in caring for patients with advanced cancer.',
      explanation: `**Evidence Updates:**

*Palliative Care Integration:*
- ASCO: Palliative care should be integrated within 8 weeks of advanced cancer diagnosis
- Studies show benefit in QOL, mood, and possibly survival
- Cost-effective: Reduces hospitalizations, ICU days, ED visits

*Symptom Management Research:*
- Olanzapine: Superior for chemotherapy-induced nausea (NEJM 2016)
- Gabapentinoids for CIPN: Limited efficacy in treatment trials
- Corticosteroids for cancer-related fatigue: Short-term benefit
- Exercise: Growing evidence for fatigue, function, quality of life

**Opioid Crisis Considerations:**

*Balancing Access and Safety:*
- Undertreated pain remains a problem
- Opioid diversion risks in cancer patients (especially survivors)
- State PDMPs (prescription drug monitoring programs)
- Risk stratification tools (ORT, SOAPP)

*Best Practices:*
- Written opioid agreements
- Urine drug testing when appropriate
- Frequent reassessment
- Non-opioid and non-pharmacologic strategies

**Palliative Care Subspecialization:**

*Board Certification:*
- Hospice and Palliative Medicine (HPM) subspecialty
- Multiple primary specialties (internal medicine, family, oncology, others)
- Fellowship training (1 year)

*Palliative Care Delivery Models:*
- Consultative (inpatient and outpatient)
- Embedded (oncology clinic-based)
- Primary palliative care (provided by oncologists)
- Community-based

**Ethical Issues:**

*Withdrawing/Withholding Treatment:*
- Ethically equivalent
- Based on patient goals and benefit/burden
- Ventilator withdrawal requires expertise (symptom management)

*Medical Aid in Dying (MAiD):*
- Legal in some jurisdictions (US states, Canada, Netherlands, etc.)
- Distinct from palliative sedation
- Requires terminal illness, mental capacity, repeated requests
- Palliative care involvement recommended

*Prognostic Uncertainty:*
- Communicate uncertainty honestly
- Plan for multiple scenarios
- "Hope for the best, prepare for the worst"

*Resource Allocation:*
- Futility vs patient autonomy
- Institutional policies
- Ethics consultation

**Special Populations:**

*Pediatric Palliative Care:*
- Different developmental considerations
- Family-centered care
- Perinatal palliative care
- Transition to adult services

*Geriatric Palliative Care:*
- Multimorbidity, polypharmacy
- Dementia and goals of care
- Frailty assessment
- Place of death preferences

*Cultural Considerations:*
- Varying disclosure preferences
- Family roles in decision-making
- Religious and spiritual beliefs about death
- Interpreter services

**Quality Metrics:**

*Process Measures:*
- Palliative care consultation within 8 weeks of advanced diagnosis
- Goals of care documentation
- Hospice referral timing
- Pain assessment and treatment

*Outcome Measures:*
- Quality of life scores
- Symptom burden
- Place of death (home often preferred)
- ICU utilization at end of life
- Caregiver satisfaction and bereavement

**Future Directions:**

*Technology:*
- Telepalliative care
- Digital symptom monitoring
- AI for prognostication
- Virtual reality for relaxation

*Research:*
- Patient-reported outcomes integration
- Palliative care in non-cancer serious illness
- Optimal timing and dosing of palliative care
- Global palliative care access

*Policy:*
- Medicare Care Choices Model (concurrent care)
- Serious Illness Care Program
- Palliative care certification (Joint Commission)
- Global access (only 14% of those needing palliative care receive it)`,
      keyTerms: [
        { term: 'concurrent care', definition: 'Receiving disease-directed treatment and hospice services simultaneously' },
        { term: 'primary palliative care', definition: 'Basic palliative care skills provided by any clinician treating serious illness' },
        { term: 'MAiD', definition: 'Medical assistance in dying; physician-assisted death where legal' },
        { term: 'PDMP', definition: 'Prescription drug monitoring program; state database tracking controlled substances' },
        { term: 'ORT', definition: 'Opioid Risk Tool; screening for substance abuse risk in pain patients' },
      ],
      clinicalNotes: `**Key Practice Points:**
- Early palliative care integration is standard of care
- Document goals of care discussions
- Reassess symptoms systematically
- Refer to hospice when prognosis is months, not days
- Address caregiver needs

**Board Pearls:**
- Temel study: Early palliative care improved survival in lung cancer
- WHO pain ladder principles
- SPIKES protocol for serious news
- Hospice eligibility: ≤6 months prognosis
- Palliative sedation is ethically distinct from euthanasia

**Resources:**
- NCCN Palliative Care Guidelines
- ASCO palliative care guidance
- VitalTalk communication training
- Center to Advance Palliative Care (CAPC)`,
    },
  },

  media: [
    {
      id: 'palliative-care-model',
      type: 'diagram',
      filename: 'palliative-care-integration-model.svg',
      title: 'Palliative Care Integration Model',
      description: 'Diagram showing integration of palliative care throughout cancer trajectory',
    },
    {
      id: 'who-pain-ladder',
      type: 'diagram',
      filename: 'who-pain-ladder.svg',
      title: 'WHO Pain Ladder',
      description: 'Three-step analgesic ladder for cancer pain management',
    },
  ],
  citations: [
    {
      id: 'temel-2010',
      type: 'article',
      title: 'Early Palliative Care for Patients with Metastatic Non-Small-Cell Lung Cancer',
      authors: ['Temel JS', 'Greer JA', 'Muzikansky A', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1000678',
    },
    {
      id: 'nccn-palliative',
      type: 'website',
      title: 'NCCN Guidelines: Palliative Care',
      source: 'National Comprehensive Cancer Network',
    },
  ],
  crossReferences: [
    { targetId: 'oncology-oncologic-emergencies', targetType: 'topic', relationship: 'related', label: 'Oncologic Emergencies' },
    { targetId: 'oncology-survivorship', targetType: 'topic', relationship: 'related', label: 'Cancer Survivorship' },
  ],
  tags: {
    systems: ['oncology'],
    topics: ['palliative-care', 'symptom-management', 'end-of-life', 'communication'],
    keywords: ['hospice', 'pain management', 'goals of care', 'advance directives', 'quality of life'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family-medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
