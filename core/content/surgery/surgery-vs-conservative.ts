/**
 * Surgery vs Conservative Treatment
 *
 * Decision frameworks for when surgery is appropriate versus conservative
 * management. Covers evidence-based indications, shared decision-making,
 * and risk-benefit analysis for common surgical conditions.
 *
 * nameEs: Cirugía vs Tratamiento Conservador
 */

import { EducationalContent } from '../types';

export const surgeryVsConservative: EducationalContent = {
  id: 'surgery-vs-conservative',
  type: 'concept',
  name: 'Surgery vs Conservative Treatment',
  alternateNames: [
    'Cirugía vs Tratamiento Conservador',
    'Surgical vs Non-Surgical Management',
    'Operative vs Non-Operative Treatment',
    'Surgical Decision-Making',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Sometimes a health problem can be treated with surgery or without surgery. Understanding when each option is best helps you make good choices with your doctor.',
      explanation: `When you have a health problem, your doctor may offer two paths: **surgery** (an operation) or **conservative treatment** (treatment without surgery). Choosing the right path depends on many things.

**What Is Conservative Treatment?**
Conservative treatment means trying to fix the problem without an operation. This can include:
- Medications (pills, injections)
- Physical therapy and exercises
- Lifestyle changes (diet, activity)
- Braces, splints, or supports
- Watchful waiting (monitoring the problem)

**When Is Surgery Usually Needed?**
Some situations need surgery right away:
- **Appendicitis**: A swollen appendix that could burst
- **Broken bones** that are badly out of place
- **Blockages** in the intestines
- **Severe infections** that medicines cannot fix
- **Cancer** that needs to be removed

**When Can You Try Without Surgery First?**
Many conditions improve with time and non-surgical care:
- Mild gallbladder problems may respond to diet changes
- Back pain often improves with physical therapy
- Some hernias can be watched if they are small and not painful
- Mild knee arthritis can be helped by exercises and weight loss

**How to Choose: Questions to Ask Your Doctor**
1. What happens if I do NOT have surgery?
2. What are the risks of surgery?
3. How long is recovery?
4. Are there other treatments to try first?
5. What if the non-surgical treatment does not work?

**Shared Decision-Making**
The best choice depends on YOUR life and values:
- How much does the problem affect your daily life?
- Are you willing to accept the risks of surgery?
- Can you commit to physical therapy or lifestyle changes?
- What matters most to you: quick fix or avoiding surgery?

Your doctor gives you the medical facts, but YOU get to decide what is right for you.`,
      keyTerms: [
        { term: 'conservative treatment', definition: 'Treating a health problem without surgery, using medicine, therapy, or lifestyle changes' },
        { term: 'elective surgery', definition: 'A planned surgery that is not an emergency; you can choose when or if to have it' },
        { term: 'emergency surgery', definition: 'Surgery that must happen right away to save your life or prevent serious harm' },
        { term: 'shared decision-making', definition: 'When you and your doctor work together to choose the best treatment for you' },
      ],
      analogies: [
        'Choosing between surgery and conservative treatment is like choosing between replacing a leaky pipe or patching it. Sometimes a patch works fine, but sometimes you really need a new pipe.',
        'Think of it like a house repair: you might try painting over a crack first, but if the foundation is broken, you need a bigger fix.',
      ],
      examples: [
        'A person with mild knee arthritis tries physical therapy and weight loss before considering a knee replacement.',
        'Someone with severe gallstone attacks that keep coming back may benefit from surgery to remove the gallbladder.',
      ],
      patientCounselingPoints: [
        'You always have the right to ask questions and get a second opinion before surgery.',
        'Write down your questions before your doctor visit so you do not forget them.',
        'Bring a family member or friend to important appointments to help you remember the information.',
        'There is no shame in choosing either path -- what matters is that it is the right choice for you.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Surgical decision-making involves weighing the risks and benefits of operative versus non-operative management based on diagnosis severity, patient factors, and evidence-based guidelines.',
      explanation: `## Understanding Surgical Decision-Making

### The Decision Framework
Every surgical decision weighs three factors:
1. **Disease factors**: Severity, progression, complications
2. **Patient factors**: Age, health, preferences, lifestyle
3. **Evidence**: What research says about outcomes

### Common Conditions: Surgery vs Conservative

#### Gallstones (Cholecystectomy)
**Surgery recommended when:**
- Repeated painful attacks (biliary colic)
- Gallbladder inflammation (cholecystitis)
- Gallstone blocking the bile duct
- Gallstone pancreatitis

**Conservative option:**
- Asymptomatic gallstones (no symptoms) -- usually just monitored
- Low-fat diet may reduce attacks but does not eliminate stones

#### Appendicitis (Appendectomy)
**Surgery is standard treatment:**
- Acute appendicitis -- surgery within 24 hours is standard
- Risk of rupture increases with delay

**Conservative (antibiotics-first):**
- Uncomplicated appendicitis in select patients
- ~25-30% may eventually need surgery within a year

#### Hernia Repair
**Surgery recommended when:**
- Hernia is painful or growing
- Risk of intestinal strangulation
- Affecting daily activities or work

**Watchful waiting:**
- Small, painless inguinal hernias in men
- Studies show safe monitoring with surgery if symptoms develop

#### Joint Replacement (Knee/Hip)
**Surgery recommended when:**
- Pain despite 3-6 months of conservative treatment
- Significant disability affecting daily life
- X-ray shows advanced arthritis
- Quality of life is significantly impaired

**Conservative options:**
- Physical therapy and exercise
- Weight management
- Anti-inflammatory medications
- Cortisone or hyaluronic acid injections
- Assistive devices (cane, brace)

#### Heart Bypass (CABG)
**Surgery recommended when:**
- Left main coronary artery disease
- Three-vessel disease with reduced heart function
- Failed stenting procedures
- Diabetes with multi-vessel disease

**Conservative/less invasive:**
- Medications (blood thinners, statins, blood pressure drugs)
- Stenting (PCI) for simpler blockages
- Lifestyle changes (diet, exercise, quit smoking)

### Risk-Benefit Analysis
Every decision involves trade-offs:

| Factor | Surgery | Conservative |
|--------|---------|-------------|
| Recovery | Weeks to months | Often immediate |
| Risks | Infection, bleeding, anesthesia | Disease may progress |
| Success | Often definitive | May need surgery later |
| Cost | Higher upfront | Lower initially |
| Time off work | Days to weeks | Usually minimal |

### Red Flags: When Surgery Cannot Wait
- Appendix about to burst
- Strangulated hernia (trapped intestine)
- Heart attack with critical blockage
- Bowel obstruction with dead tissue
- Internal bleeding`,
      keyTerms: [
        { term: 'biliary colic', definition: 'Pain caused by a gallstone temporarily blocking the bile duct, usually after fatty meals' },
        { term: 'strangulation', definition: 'When a hernia traps a piece of intestine, cutting off its blood supply -- a surgical emergency' },
        { term: 'PCI', definition: 'Percutaneous Coronary Intervention -- using stents to open blocked heart arteries without open surgery' },
        { term: 'watchful waiting', definition: 'Monitoring a condition over time without immediate treatment, with plans to act if it worsens' },
        { term: 'CABG', definition: 'Coronary Artery Bypass Grafting -- surgery that reroutes blood around blocked heart arteries', pronunciation: 'cabbage' },
      ],
      analogies: [
        'Watchful waiting for a hernia is like monitoring a small crack in a wall -- you keep an eye on it and fix it if it grows.',
        'A strangulated hernia is like a kinked garden hose -- the flow is cut off and you need to fix it immediately.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Evidence-based surgical decision-making integrates clinical guidelines, patient risk stratification, comparative effectiveness data, and shared decision-making tools to determine optimal management strategies.',
      explanation: `## Evidence-Based Surgical Indications

### Decision Analysis Framework
Clinical decisions follow a structured approach:
1. **Diagnosis confirmation** and disease staging
2. **Risk stratification** of the patient (ASA class, comorbidities)
3. **Review of evidence** for operative vs non-operative outcomes
4. **Patient preferences** and values assessment
5. **Shared decision-making** with informed consent

### Cholecystectomy Indications

**Absolute Indications:**
- Acute cholecystitis
- Gallstone pancreatitis
- Choledocholithiasis (common bile duct stone)
- Gallbladder cancer/suspicious polyps >1 cm
- Porcelain gallbladder (calcified wall -- cancer risk)

**Relative Indications:**
- Symptomatic cholelithiasis (recurrent biliary colic)
- Biliary dyskinesia (ejection fraction <35% on HIDA scan)

**Observation Appropriate:**
- Asymptomatic cholelithiasis (annual risk of symptoms ~1-2%)
- Exception: Immunosuppressed patients, sickle cell disease

### Appendectomy Decision Matrix

**Standard surgical management:**
- Clinical diagnosis of acute appendicitis
- CT-confirmed appendicitis (sensitivity 94%, specificity 95%)
- Alvarado score >= 7

**Antibiotics-first approach (evolving evidence):**
- CODA trial (2020): Non-operative management non-inferior at 30 days for uncomplicated appendicitis
- Appendicolith present: Higher failure rate with antibiotics (41% vs 25%)
- Recurrence: ~39% at 5 years with antibiotics-first
- Patient selection is critical

### Hernia Repair Indications

**Inguinal Hernia:**

| Presentation | Recommendation | Evidence |
|-------------|----------------|----------|
| Symptomatic | Elective repair | Strong |
| Minimally symptomatic | Repair or watchful waiting | Moderate |
| Asymptomatic (men) | Watchful waiting acceptable | Strong (JAMA 2006) |
| Incarcerated | Urgent repair | Strong |
| Strangulated | Emergency repair | Strong |
| Femoral hernia (any) | Repair recommended | Strong (higher strangulation risk) |

**Ventral/Incisional Hernia:**
- Symptomatic or enlarging: Repair recommended
- Small, asymptomatic: Observation reasonable
- Factors: Defect size, patient BMI, contamination risk

### Joint Replacement Decision Criteria

**Total Knee Arthroplasty (TKA):**
- Kellgren-Lawrence grade III-IV OA on X-ray
- Failed conservative treatment (minimum 3-6 months)
- Functional limitation (walking, stairs, ADLs)
- Night pain disrupting sleep
- Age consideration: Generally >50, but based on function not age alone

**Total Hip Arthroplasty (THA):**
- Similar criteria to TKA
- Harris Hip Score <70
- Femoral head avascular necrosis with collapse
- Displaced femoral neck fracture in elderly

**Conservative Pathway (stepped approach):**
1. Education, weight management, activity modification
2. Physical therapy, aquatic exercise
3. NSAIDs, acetaminophen
4. Intra-articular corticosteroid injections
5. Viscosupplementation (hyaluronic acid)
6. Bracing, assistive devices
7. Surgical referral if steps 1-6 fail

### CABG vs PCI vs Medical Therapy

**SYNTAX Score guides intervention:**

| SYNTAX Score | Recommended | Rationale |
|-------------|-------------|-----------|
| 0-22 (low) | PCI or CABG | Similar outcomes |
| 23-32 (intermediate) | CABG preferred | Better long-term outcomes |
| >=33 (high) | CABG | Significantly better outcomes |

**CABG preferred over PCI:**
- Left main disease (especially with additional lesions)
- Three-vessel disease
- Diabetic patients with multi-vessel disease (FREEDOM trial)
- Reduced left ventricular function (EF <35%)

**Medical therapy alone:**
- Stable angina with preserved LV function and low-risk anatomy
- Patient preference against intervention
- Prohibitive surgical risk

### Shared Decision-Making Tools

**Decision Aids:**
- Ottawa Decision Support Framework
- Option Grids (brief comparison tables)
- Patient Decision Aids (Cochrane reviews show improved knowledge)

**Components of Effective Shared Decision-Making:**
1. Present options clearly (including doing nothing)
2. Describe benefits and harms with absolute numbers
3. Assess patient understanding
4. Explore patient values and preferences
5. Reach mutual agreement on plan

### Risk Assessment Tools
- **ASA Physical Status Classification**: Operative risk by comorbidity
- **ACS NSQIP Surgical Risk Calculator**: Procedure-specific risk
- **Revised Cardiac Risk Index (RCRI)**: Cardiac event risk
- **Caprini Score**: VTE risk assessment`,
      keyTerms: [
        { term: 'ASA classification', definition: 'American Society of Anesthesiologists physical status classification system (I-VI) for preoperative risk assessment' },
        { term: 'SYNTAX score', definition: 'Scoring system grading coronary artery disease complexity to guide CABG vs PCI decisions' },
        { term: 'HIDA scan', definition: 'Hepatobiliary iminodiacetic acid scan assessing gallbladder function; ejection fraction <35% suggests biliary dyskinesia' },
        { term: 'Alvarado score', definition: 'Clinical scoring system for appendicitis likelihood using symptoms, signs, and lab values' },
        { term: 'Kellgren-Lawrence', definition: 'Radiographic grading system for osteoarthritis severity (grades 0-IV)' },
      ],
      clinicalNotes: 'Shared decision-making is not just a clinical nicety -- it is an ethical imperative and reduces decisional conflict. Studies show patients who participate in decision-making have better satisfaction and adherence regardless of which treatment they choose.',
    },
    4: {
      level: 4,
      summary:
        'Surgical decision science applies comparative effectiveness research, decision analysis models, risk prediction algorithms, and quality metrics to optimize treatment selection across diverse patient populations and surgical conditions.',
      explanation: `## Comparative Effectiveness Research in Surgical Decision-Making

### Landmark Trials Guiding Surgical Indications

#### Cholecystectomy
**ACDC Trial (2014):**
- Early laparoscopic cholecystectomy (<24h) vs delayed (7-45 days) for acute cholecystitis
- Early: Lower morbidity (12% vs 34%), shorter hospital stay
- Current guideline: Early cholecystectomy during index admission preferred

**Natural History of Asymptomatic Gallstones:**
- Annual risk of developing symptoms: 1-2%
- Lifetime risk of symptoms: 10-20%
- Risk of serious complications without prior symptoms: <1%/year
- Prophylactic cholecystectomy NOT recommended for most asymptomatic patients

#### Appendectomy vs Antibiotics
**CODA Trial (2020, NEJM):**
- Randomized, non-inferiority trial (n=1552)
- 30-day outcomes: Antibiotics non-inferior for uncomplicated
- Appendicolith subgroup: Higher complications with antibiotics
- 2-year follow-up: 29% crossed to surgery

**APPAC III Trial (2021):**
- CT-confirmed uncomplicated appendicitis
- 69% antibiotics-first avoided surgery at 5 years
- Quality of life comparable between groups

**Clinical Integration:**
- Shared decision-making essential
- Antibiotics-first reasonable for uncomplicated disease
- Appendicolith presence favors surgery
- Recurrence counseling required

#### Hernia
**Watchful Waiting Trials:**
- Fitzgibbons et al. (JAMA 2006): Watchful waiting safe for minimally symptomatic inguinal hernias
- 10-year follow-up: 68% watchful waiting crossed to surgery
- Acute hernia incarceration rate: 0.3% per year (very low)

**Mesh vs Suture Repair:**
- Mesh repair: Lower recurrence (1-2% vs 10-15% for suture)
- Mesh concerns: Chronic pain (10-12%), mesh infection
- Biologic mesh for contaminated fields

#### Joint Replacement
**TOPKAT Trial (2018):**
- TKA vs partial knee replacement for medial OA
- Similar 5-year outcomes, partial with faster recovery
- Re-operation rate higher with partial (10% vs 4%)

**Total Hip Replacement (THR) Timing:**
- Earlier intervention associated with better functional outcomes
- Delayed surgery beyond moderate disability = less improvement
- "Window of opportunity" concept

#### Coronary Revascularization
**ISCHEMIA Trial (2020, NEJM):**
- Stable ischemic heart disease with moderate-severe ischemia
- Invasive strategy (CABG/PCI) vs conservative (optimal medical therapy)
- No difference in death or MI at 3.2 years
- Invasive: Better angina relief
- Paradigm shift: Medical therapy first for stable disease

**FREEDOM Trial (2012):**
- Diabetic patients with multi-vessel disease
- CABG superior to PCI: Lower death and MI at 5 years
- CABG: 18.7% vs PCI: 26.6% composite endpoint

### Decision Analysis Models

#### Expected Value Framework
For each treatment option, calculate:
\`\`\`
Expected Value = Σ (Probability of outcome × Utility of outcome)
\`\`\`

**Example: Appendicitis in young adult**
| Strategy | P(cure) | P(complication) | P(recurrence) | Expected QALYs |
|----------|---------|-----------------|---------------|-----------------|
| Immediate surgery | 0.95 | 0.05 | 0.01 | 0.93 |
| Antibiotics-first | 0.70 | 0.03 | 0.29 | 0.91 |

#### Number Needed to Treat/Harm (NNT/NNH)
Critical for communicating surgical benefit:
- Cholecystectomy for symptomatic stones: NNT = 2 (prevents recurrent attacks)
- CABG vs medical therapy (left main): NNT = 25 at 5 years (mortality)
- Hernia repair vs watchful waiting: NNH for chronic pain = 8

### Risk Prediction and Stratification

**ACS NSQIP Risk Calculator:**
- Procedure-specific 30-day morbidity and mortality
- Input: Age, ASA, functional status, comorbidities, procedure CPT code
- Validated across multiple institutions

**Frailty Assessment:**
- Modified Frailty Index (mFI-11): Predicts postoperative complications
- Fried Frailty Phenotype: Weight loss, exhaustion, low activity, slow walk, weak grip
- Frail patients: Higher complication rates regardless of age

**Risk Communication:**
- Absolute risk preferred over relative risk
- Visual aids (icon arrays, bar charts) improve understanding
- Framing effects: "95% survive" perceived differently than "5% die"

### Quality Metrics and Outcomes

**Procedure-Specific Quality Indicators:**
| Procedure | Quality Metric | Target |
|-----------|----------------|--------|
| Cholecystectomy | Bile duct injury rate | <0.5% |
| Appendectomy | Negative appendectomy rate | <10% |
| Hernia repair | Recurrence rate | <2% (mesh) |
| TKA | 90-day readmission | <5% |
| CABG | 30-day mortality | <2% (isolated) |

**Patient-Reported Outcome Measures (PROMs):**
- KOOS (Knee OA): Function, pain, quality of life
- Harris Hip Score: Pain and function
- Seattle Angina Questionnaire: Angina severity and quality of life
- EQ-5D: Generic health-related quality of life`,
      keyTerms: [
        { term: 'NSQIP', definition: 'National Surgical Quality Improvement Program -- risk-adjusted surgical outcomes database and calculator', pronunciation: 'N-skip' },
        { term: 'NNT', definition: 'Number Needed to Treat -- number of patients who must receive treatment for one to benefit' },
        { term: 'QALY', definition: 'Quality-Adjusted Life Year -- measure combining quantity and quality of life for comparing treatments' },
        { term: 'decision analysis', definition: 'Quantitative framework for comparing treatment strategies using probabilities and utility values' },
        { term: 'frailty index', definition: 'Multi-domain assessment of physiological reserve predicting surgical outcomes beyond age alone' },
      ],
      clinicalNotes: 'The ISCHEMIA trial fundamentally changed the approach to stable coronary disease: invasive strategy does not reduce death or MI compared to optimal medical therapy. Invasive approach benefits mainly those with refractory symptoms. This underscores the importance of medical optimization before surgical referral for stable disease.',
    },
    5: {
      level: 5,
      summary:
        'Advanced surgical decision science integrates machine learning risk models, value-based care frameworks, implementation science for guideline adherence, and bioethical considerations to deliver precision surgical recommendations in complex clinical scenarios.',
      explanation: `## Precision Surgical Decision-Making

### Machine Learning in Surgical Prediction

**Current Applications:**
- Deep learning models outperforming traditional risk calculators for postoperative complications
- Natural language processing of operative notes for quality assessment
- Computer vision for intraoperative decision support (critical view of safety in cholecystectomy)

**Risk Prediction Evolution:**
| Generation | Approach | Example |
|-----------|----------|---------|
| 1st | Clinical scoring | Alvarado, SYNTAX |
| 2nd | Regression models | NSQIP calculator, EuroSCORE II |
| 3rd | Machine learning | Random forest, gradient boosting |
| 4th | Deep learning | Neural networks with EHR data |

**Limitations:**
- Algorithmic bias: Training data demographics affect generalizability
- Interpretability: "Black box" models resist clinical explanation
- Validation: Requires external validation across diverse populations
- Equity: May perpetuate disparities if social determinants encoded in training data

### Value-Based Surgical Decision-Making

**Cost-Effectiveness Analysis:**
| Procedure | ICER ($/QALY) | Assessment |
|-----------|---------------|------------|
| Lap cholecystectomy (symptomatic) | Dominant | Cost-saving vs conservative |
| TKA (severe OA) | $15,000-30,000 | Very cost-effective |
| CABG (3-vessel, diabetic) | $25,000-40,000 | Cost-effective |
| Prophylactic cholecystectomy (asymptomatic) | >$100,000 | Not cost-effective |
| Robotic hernia repair vs laparoscopic | $50,000-80,000 | Marginal benefit |

**Opportunity Cost Framework:**
- Every surgical procedure consumes resources (OR time, ICU beds, surgeon bandwidth)
- Marginal benefit must justify marginal cost
- System-level optimization: Right patient, right procedure, right time

### Surgical Disparities and Equity

**Documented Disparities:**
- Race: Black patients less likely to receive TKA despite similar disease burden
- Socioeconomic: Uninsured patients present with more advanced surgical disease
- Geographic: Rural patients travel farther, receive fewer elective procedures
- Gender: Women receive CABG less frequently and at more advanced disease stages

**Strategies to Address Disparities:**
1. Standardized decision-making protocols (reduce implicit bias)
2. Patient navigators for underserved populations
3. Community-based screening programs
4. Telemedicine surgical consultations
5. Culturally and linguistically appropriate decision aids

### Implementation Science

**Guideline Adherence Challenges:**
- 30-40% of surgical patients do not receive evidence-based care
- Time from evidence to practice: Average 17 years
- Variation in surgical practice often geographic, not evidence-based

**Enhanced Recovery After Surgery (ERAS):**
- Multimodal evidence-based perioperative care pathways
- Reduces length of stay by 30%, complications by 50%
- Implementation requires multidisciplinary culture change
- Compliance monitoring essential (>70% compliance threshold for benefit)

### Bioethical Frameworks

**Surgical Ethics Principles:**
1. **Beneficence**: Will surgery produce net benefit?
2. **Non-maleficence**: Are risks acceptable for expected benefit?
3. **Autonomy**: Is the patient making a truly informed, voluntary choice?
4. **Justice**: Are surgical resources distributed fairly?

**Complex Decision Scenarios:**

*The "Surgical Buy-In":*
- Accepting high-risk surgical patients to ICU (with "surgery as admission ticket")
- Ethical when: Surgery offers meaningful benefit
- Problematic when: Surgery is futile but required for ICU admission

*"Futile" Surgery:*
- No accepted definition of surgical futility
- Physiologic futility: Procedure cannot achieve intended physiologic goal
- Quantitative futility: <1% chance of benefit (controversial threshold)
- Qualitative futility: Outcome would not be valued by patient

*The Disabled Surgeon's Rule:*
- When a surgeon's recommendation differs from evidence-based guidelines
- Patient advocacy requires referral for second opinion
- System solutions: Multidisciplinary tumor boards, surgical quality committees

### Advanced Shared Decision-Making

**Decision Science Integration:**
- Prospect theory: Patients weigh losses more heavily than gains (2:1 ratio)
- Framing effects in surgical consent: "97% survive" vs "3% die"
- Status quo bias: Patients tend to continue current management
- Anchoring: First option presented often preferred

**Strategies for Better Decisions:**
1. Present options in balanced order
2. Use absolute frequencies, not percentages ("3 in 100" not "3%")
3. Consistent framing (both positive and negative for each option)
4. Provide cooling-off period for elective decisions
5. Decision coaching by trained staff

**Measuring Decision Quality:**
- Decision Conflict Scale (DCS): Low conflict = good decision
- SURE test: 4-item screening for decisional conflict
- Preparation for Decision-Making Scale
- Control Preferences Scale (patient vs physician control)

### Future Directions

**Digital Decision Support:**
- AI-powered patient decision aids personalized to patient profile
- Real-time risk calculators integrated into EHR workflows
- Outcome registries providing surgeon-specific data
- Virtual reality surgical previews for patient understanding

**Genomic-Informed Surgical Decisions:**
- Pharmacogenomics for anesthesia and pain management
- Genetic risk for anastomotic leak, wound complications
- Hereditary cancer syndromes guiding prophylactic surgery extent
- Tumor molecular profiling determining surgical vs systemic approach

**Learning Health Systems:**
- Continuous integration of outcomes data into decision algorithms
- Pragmatic trials embedded in clinical care
- Rapid-cycle improvement of surgical pathways
- Patient-generated data (wearables) informing recovery expectations`,
      keyTerms: [
        { term: 'ICER', definition: 'Incremental Cost-Effectiveness Ratio -- additional cost per QALY gained; <$50K/QALY generally considered cost-effective', pronunciation: 'I-sir' },
        { term: 'implementation science', definition: 'Study of methods to promote systematic adoption of evidence-based practices into routine clinical care' },
        { term: 'prospect theory', definition: 'Behavioral economics theory showing people weigh potential losses more heavily than equivalent gains in decision-making' },
        { term: 'surgical futility', definition: 'Concept that a procedure has no reasonable chance of achieving a meaningful benefit for the patient' },
        { term: 'learning health system', definition: 'Healthcare system that integrates data from routine care to continuously generate and apply evidence' },
      ],
      clinicalNotes: `Key Practice Points:
1. Machine learning models show promise but require rigorous external validation before clinical deployment
2. Cost-effectiveness data increasingly informing payer decisions and institutional guidelines
3. Documented surgical disparities demand systematic solutions, not individual clinician education alone
4. Shared decision-making reduces litigation risk by 30-40% in addition to improving patient satisfaction
5. ERAS pathways demonstrate that changing "how we operate" (perioperative care) is as impactful as "whether we operate"
6. Ethical frameworks are essential for navigating futility discussions and resource allocation
7. Decision aids should be validated, condition-specific, and updated with emerging evidence`,
    },
  },

  media: [
    {
      id: 'surgery-decision-framework',
      type: 'diagram',
      filename: 'surgery-decision-framework.svg',
      title: 'Surgical Decision-Making Framework',
      description: 'Flowchart showing decision pathways for operative vs non-operative management',
    },
    {
      id: 'risk-benefit-analysis',
      type: 'diagram',
      filename: 'risk-benefit-analysis.svg',
      title: 'Risk-Benefit Analysis Model',
      description: 'Visual model comparing risks and benefits of surgical and conservative options',
    },
  ],

  citations: [
    {
      id: 'coda-trial-2020',
      type: 'article',
      title: 'A Randomized Trial Comparing Antibiotics with Appendectomy for Appendicitis',
      authors: ['CODA Collaborative'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2014320',
    },
    {
      id: 'ischemia-trial-2020',
      type: 'article',
      title: 'Initial Invasive or Conservative Strategy for Stable Coronary Disease',
      authors: ['ISCHEMIA Research Group'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1915922',
    },
    {
      id: 'fitzgibbons-2006',
      type: 'article',
      title: 'Watchful Waiting vs Repair of Inguinal Hernia in Minimally Symptomatic Men',
      authors: ['Fitzgibbons, R.J.', 'Giobbie-Hurder, A.', 'Gibbs, J.O.'],
      source: 'JAMA',
      url: 'https://doi.org/10.1001/jama.295.3.285',
    },
    {
      id: 'freedom-trial-2012',
      type: 'article',
      title: 'Strategies for Multivessel Revascularization in Patients with Diabetes',
      authors: ['Farkouh, M.E.', 'Domanski, M.', 'Sleeper, L.A.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1211585',
    },
    {
      id: 'schwartz-decision-making',
      type: 'textbook',
      title: 'Surgical Decision-Making',
      source: "Schwartz's Principles of Surgery",
      chapter: '1',
    },
  ],

  crossReferences: [
    { targetId: 'surgery-common-surgical-procedures', targetType: 'topic', relationship: 'related', label: 'Common Surgical Procedures' },
    { targetId: 'surgery-pre-operative-evaluation', targetType: 'topic', relationship: 'related', label: 'Pre-Operative Evaluation' },
    { targetId: 'surgery-surgical-complications', targetType: 'topic', relationship: 'related', label: 'Surgical Complications' },
    { targetId: 'surgery-minimally-invasive', targetType: 'topic', relationship: 'related', label: 'Minimally Invasive Surgery' },
  ],

  tags: {
    systems: ['surgical', 'cardiovascular', 'musculoskeletal', 'gastrointestinal'],
    topics: ['surgical decision-making', 'shared decision-making', 'conservative management', 'risk-benefit analysis', 'evidence-based surgery'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default surgeryVsConservative;
