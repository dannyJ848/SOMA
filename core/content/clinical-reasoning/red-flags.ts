/**
 * Red Flags Educational Content
 *
 * Warning signs that require urgent medical evaluation across common presentations.
 * Helps patients understand when symptoms need immediate attention versus
 * routine care.
 */

import { EducationalContent } from '../types';

export const RED_FLAGS_CONTENT: EducationalContent = {
  id: 'clinical-reasoning-red-flags',
  type: 'concept',
  name: 'Medical Red Flags',
  alternateNames: ['Warning Signs', 'Alarm Symptoms', 'Red Flag Symptoms'],

  levels: {
    1: {
      level: 1,
      summary: 'Red flags are warning signs that tell you when you need to see a doctor right away instead of waiting.',
      explanation: `# What Are Red Flags?

Red flags are like warning lights on a car dashboard - they tell you something important needs attention right now.

## Chest Pain Red Flags
Get help immediately (call 911) if you have:
- Crushing or squeezing pain in your chest
- Pain that spreads to your arm, jaw, or back
- Trouble breathing with chest pain
- Feeling very sweaty and sick with chest pain

## Headache Red Flags
Get help immediately if you have:
- The worst headache of your life (sudden and severe)
- Headache with fever and stiff neck
- Headache after hitting your head
- Headache with confusion or trouble speaking

## Belly Pain Red Flags
Get help immediately if you have:
- Severe pain that makes you double over
- Belly that feels hard like a board
- Blood in your vomit or poop (especially black, tarry poop)
- Belly pain with fever and chills

## Back Pain Red Flags
Get help if you have:
- Back pain with loss of bladder or bowel control
- Weakness or numbness in both legs
- Back pain with fever
- Back pain after a fall or injury

## Nerve Warning Signs
Get help immediately if you have:
- Sudden weakness on one side of your body
- Sudden trouble speaking or understanding
- Sudden severe dizziness or loss of balance
- Sudden vision changes in one or both eyes

## When to Go Where

**Call 911 for:**
- Chest pain with sweating or trouble breathing
- Sudden worst headache ever
- Signs of stroke (face drooping, arm weakness, speech trouble)
- Severe bleeding that won't stop
- Trouble breathing

**Go to Emergency Room for:**
- Severe pain anywhere
- High fever with other symptoms
- Serious injuries
- Can't keep any food or water down

**Go to Urgent Care for:**
- Minor injuries (small cuts, sprains)
- Ear infections
- Minor burns
- Rashes
- Mild fever

**See Your Regular Doctor for:**
- Ongoing health problems
- Check-ups and vaccines
- Mild symptoms lasting more than a few days
- Questions about your health`,
      keyTerms: [
        { term: 'red flag', definition: 'A warning sign that something might be seriously wrong and needs quick attention' },
        { term: 'emergency', definition: 'A serious situation that needs help right away' },
        { term: 'urgent', definition: 'Something that needs to be dealt with soon, but not immediately' },
        { term: 'symptoms', definition: 'Changes in your body that might mean something is wrong' },
      ],
      analogies: [
        'Red flags are like the check engine light in a car - they tell you something needs attention before it becomes a bigger problem.',
        'Think of your body like a house with smoke detectors. Red flags are like the smoke alarm going off - you need to check what is happening right away.',
      ],
      examples: [
        'A 50-year-old man having crushing chest pain with sweating should call 911 immediately.',
        'A person with a mild headache that has lasted two days might see their regular doctor, but sudden severe headache needs emergency care.',
      ],
    },
    2: {
      level: 2,
      summary: 'Red flags are clinical warning signs indicating potentially serious conditions requiring urgent evaluation to prevent complications or death.',
      explanation: `# Understanding Red Flag Symptoms

Red flags help identify patients who may have life-threatening conditions among the many with common symptoms. Recognizing these signs can save lives.

## Chest Pain Red Flags

**Call 911 immediately for:**
- Pressure, squeezing, or heaviness in the chest lasting more than a few minutes
- Pain radiating to the left arm, jaw, neck, or back
- Shortness of breath accompanying chest discomfort
- Cold sweats, nausea, or lightheadedness with chest pain
- History of heart disease with new chest symptoms

**High concern features:**
- Symptoms triggered by exertion
- Associated with palpitations or feeling heart racing
- Feeling of impending doom

## Headache Red Flags

**Emergent (call 911):**
- Thunderclap headache: severe headache reaching maximum intensity within seconds
- Headache with neurological symptoms (weakness, vision changes, speech difficulty)
- Headache with altered consciousness
- Headache with high fever and neck stiffness (possible meningitis)

**Urgent (same-day evaluation):**
- New headache pattern in someone over 50
- Progressively worsening headaches over days to weeks
- Headache worse when lying down or waking from sleep
- Headache after head trauma

## Abdominal Pain Red Flags

**Emergent:**
- Rigid, board-like abdomen
- Signs of shock: rapid heartbeat, low blood pressure, confusion
- Vomiting blood or coffee-ground material
- Black, tarry stools (melena)

**Urgent:**
- Severe localized pain (especially right lower or upper quadrant)
- Pain with high fever (over 101.3 degrees F or 38.5 degrees C)
- Inability to pass gas or have bowel movements
- Abdominal pain in pregnancy
- Recent abdominal surgery with new pain

## Back Pain Red Flags

**Emergent:**
- Cauda equina syndrome signs: loss of bladder/bowel control, saddle numbness, bilateral leg weakness
- Back pain with signs of infection: fever, IV drug use history

**Urgent:**
- Unexplained weight loss with back pain
- History of cancer with new back pain
- Back pain at night that wakes you from sleep
- Progressive neurological symptoms

## Neurological Red Flags

**Call 911 immediately (possible stroke):**
- FAST symptoms:
  - **F**ace drooping on one side
  - **A**rm weakness
  - **S**peech difficulty
  - **T**ime to call 911
- Sudden severe headache
- Sudden vision loss
- Sudden confusion

**Urgent:**
- New onset seizure
- Progressive weakness
- Severe dizziness with vomiting

## Choosing the Right Care Setting

| Condition | Setting | Why |
|-----------|---------|-----|
| Chest pain with sweating | 911/ER | Possible heart attack - minutes matter |
| Thunderclap headache | 911/ER | Possible brain bleed |
| Minor sprain | Urgent Care | Not life-threatening, needs same-day care |
| Chronic knee pain | Primary Care | Can be scheduled |
| Mild cold symptoms | Home care | Usually resolves on its own |`,
      keyTerms: [
        { term: 'thunderclap headache', definition: 'A severe headache that reaches maximum intensity within 60 seconds, concerning for brain hemorrhage', pronunciation: 'THUN-der-klap' },
        { term: 'cauda equina syndrome', definition: 'Compression of nerve roots at the base of the spine, a surgical emergency', pronunciation: 'KAW-duh eh-KWY-nuh' },
        { term: 'melena', definition: 'Black, tarry stools indicating bleeding in the upper digestive tract', pronunciation: 'meh-LEE-nuh' },
        { term: 'radiating pain', definition: 'Pain that spreads from one area to another, like chest pain spreading to the arm' },
      ],
      analogies: [
        'Red flags work like triage at an emergency room - they help sort which problems need immediate attention.',
        'Missing a red flag is like ignoring a fire alarm - the consequences of not acting can be severe.',
      ],
      examples: [
        'A 65-year-old diabetic with jaw pain and nausea could be having a heart attack with atypical symptoms.',
        'A young person with the worst headache of their life needs immediate imaging to rule out brain hemorrhage.',
      ],
    },
    3: {
      level: 3,
      summary: 'Red flags are specific clinical findings with high specificity for serious underlying pathology, requiring systematic assessment to stratify patients into appropriate care pathways.',
      explanation: `# Clinical Red Flags: Systematic Approach

## Chest Pain Red Flags

### Acute Coronary Syndrome (ACS) Indicators
- Substernal pressure/squeezing lasting >20 minutes
- Radiation to left arm, jaw, neck, back, or epigastrium
- Associated diaphoresis, dyspnea, nausea
- Exertional symptoms relieved by rest
- Known CAD or CAD risk equivalents (diabetes, PAD)

### Aortic Dissection Indicators
- Severe, tearing pain radiating to back
- Unequal blood pressures between arms (>20 mmHg difference)
- Pulse deficits
- New aortic regurgitation murmur
- Marfan syndrome or other connective tissue disorders

### Pulmonary Embolism Indicators
- Sudden onset dyspnea and pleuritic chest pain
- Hemoptysis
- Unilateral leg swelling (DVT signs)
- Recent immobilization, surgery, or malignancy
- Tachycardia out of proportion to other findings

### Tension Pneumothorax Indicators
- Acute dyspnea with hypotension
- Unilateral absent breath sounds
- Tracheal deviation
- Distended neck veins

## Headache Red Flags

### Subarachnoid Hemorrhage Indicators
- Thunderclap onset (maximal intensity <60 seconds)
- Described as worst headache of life
- Meningismus (neck stiffness, photophobia)
- Altered level of consciousness
- Focal neurological deficits

### Increased Intracranial Pressure Indicators
- Headache worse with Valsalva (coughing, straining)
- Headache worse when supine, improved upright
- Morning headaches with vomiting
- Papilledema on fundoscopic exam
- Cushing triad: hypertension, bradycardia, irregular respirations

### CNS Infection Indicators
- Fever with headache and neck stiffness
- Altered mental status
- Petechial rash (meningococcemia)
- Recent sinus or ear infection
- Immunocompromised state

### Temporal Arteritis Indicators (patients >50)
- New headache with scalp tenderness
- Jaw claudication
- Visual symptoms (amaurosis fugax, diplopia)
- Elevated ESR/CRP
- Polymyalgia rheumatica symptoms

## Abdominal Pain Red Flags

### Peritonitis Indicators
- Rigid, board-like abdomen
- Involuntary guarding
- Rebound tenderness
- Absent bowel sounds
- Patient lies still (movement worsens pain)

### Vascular Catastrophe Indicators
- Pain out of proportion to exam (mesenteric ischemia)
- Abdominal pain with syncope (ruptured AAA)
- Hemodynamic instability
- Known AAA with new back/abdominal pain

### Obstruction Indicators
- Bilious vomiting
- Absolute constipation (no flatus)
- Distended abdomen with high-pitched bowel sounds
- Prior abdominal surgery (adhesions)

## Back Pain Red Flags

### Cauda Equina Syndrome
- Bilateral leg weakness or numbness
- Saddle anesthesia
- Urinary retention or incontinence
- Fecal incontinence
- Decreased anal sphincter tone

### Spinal Infection/Malignancy
- Age >50 with new back pain
- History of cancer, especially breast, lung, prostate, kidney, thyroid
- Unexplained weight loss
- Fever or night sweats
- IV drug use
- Immunocompromised state
- Pain at rest, especially nocturnal

### Vertebral Fracture Risk
- Age >70
- History of osteoporosis
- Prolonged steroid use
- Significant trauma (or minor trauma in elderly)

## Neurological Red Flags

### Stroke Symptoms (Time-Critical)
- Sudden onset focal weakness
- Sudden speech difficulty (aphasia or dysarthria)
- Sudden visual field cut
- Sudden severe vertigo with focal signs
- Last known well time crucial for treatment decisions

### Status Epilepticus
- Seizure lasting >5 minutes
- Recurrent seizures without return to baseline
- Post-ictal period >30 minutes

## Care Setting Decision Algorithm

| Finding | Timeframe | Setting |
|---------|-----------|---------|
| Hemodynamic instability | Immediate | 911/ED |
| Focal neurological deficit | Immediate | 911/ED |
| Severe uncontrolled pain | Immediate | ED |
| High-risk features, stable | Same day | ED |
| Moderate concern features | Same day | Urgent Care/ED |
| Low-risk features, mild symptoms | Days | Primary Care |
| Chronic, stable symptoms | Weeks | Primary Care |`,
      keyTerms: [
        { term: 'meningismus', definition: 'Signs of meningeal irritation including neck stiffness, Kernig sign, and Brudzinski sign', pronunciation: 'men-in-JIZ-mus' },
        { term: 'Cushing triad', definition: 'Hypertension, bradycardia, and irregular respirations indicating increased intracranial pressure', pronunciation: 'KUSH-ing' },
        { term: 'jaw claudication', definition: 'Pain in jaw muscles with chewing, classic for giant cell arteritis', pronunciation: 'klaw-dih-KAY-shun' },
        { term: 'rebound tenderness', definition: 'Pain when pressure is released from abdomen, indicating peritoneal irritation' },
        { term: 'saddle anesthesia', definition: 'Numbness in areas that would touch a saddle, indicating cauda equina compression' },
      ],
      clinicalNotes: 'Red flags have varying sensitivity and specificity. Their presence increases probability of serious disease but absence does not rule it out. Clinical judgment must integrate red flags with overall clinical picture.',
    },
    4: {
      level: 4,
      summary: 'Red flag recognition requires integration of Bayesian reasoning, understanding of test characteristics, and awareness of population-specific presentations to optimize sensitivity while managing healthcare resource utilization.',
      explanation: `# Advanced Red Flag Assessment

## Bayesian Framework for Red Flags

Red flags function as clinical tests with specific operating characteristics:

### Pre-test Probability Considerations
- Population prevalence affects interpretation
- Risk factors modify baseline probability
- Setting affects disease spectrum (ED vs primary care)

### Test Characteristics of Common Red Flags

| Red Flag | Condition | Sensitivity | Specificity | LR+ | LR- |
|----------|-----------|-------------|-------------|-----|-----|
| Thunderclap headache | SAH | 70-80% | 95% | 15 | 0.25 |
| Worst headache ever | SAH | 80% | 75% | 3.2 | 0.27 |
| Saddle anesthesia | CES | 75% | 95% | 15 | 0.26 |
| Urinary retention | CES | 90% | 95% | 18 | 0.11 |

### Red Flag Clustering
- Single red flag: moderate concern
- Multiple red flags: significantly elevated probability
- Red flags in high-risk patient: threshold for investigation lowered

## Chest Pain: Advanced Red Flag Analysis

### ACS Risk Stratification Beyond Red Flags

**HEART Score Integration:**
- History: Highly suspicious (2), Moderately suspicious (1), Slightly suspicious (0)
- ECG: Significant ST depression (2), Nonspecific changes (1), Normal (0)
- Age: >=65 (2), 45-65 (1), <45 (0)
- Risk factors: >=3 or known CAD (2), 1-2 (1), None (0)
- Troponin: >3x normal (2), 1-3x normal (1), Normal (0)

**Score Interpretation:**
- 0-3: 0.9-1.7% MACE risk, consider discharge
- 4-6: 12-16.6% MACE risk, observation/admission
- 7-10: 50-65% MACE risk, early invasive strategy

### Atypical Presentations Requiring High Suspicion

**Diabetic patients:**
- May present with dyspnea, fatigue, or nausea alone
- Silent ischemia common due to autonomic neuropathy
- Lower threshold for cardiac workup

**Women:**
- More likely to present with fatigue, nausea, back pain
- Less likely classic substernal pressure
- Higher rates of missed MI diagnosis

**Elderly:**
- Dyspnea may be primary symptom
- Confusion or functional decline as anginal equivalent
- Atypical ECG changes due to baseline abnormalities

### Aortic Dissection: ADD-RS Integration

**Risk Score Components:**
1. High-risk conditions: Marfan, family history, known aortic disease, prior manipulation
2. High-risk pain features: Abrupt onset, severe intensity, tearing quality
3. High-risk exam: Pulse deficit, BP differential >20mmHg, focal deficit, murmur

**Interpretation:**
- Score 0: D-dimer to rule out (if available)
- Score 1: Consider CTA
- Score >=2: Immediate CTA

## Headache: Advanced Red Flag Framework

### Ottawa SAH Rule (100% sensitivity in derivation)
Investigation required if any present:
- Age >=40
- Neck pain or stiffness
- Witnessed loss of consciousness
- Onset during exertion
- Thunderclap onset (peak within 1 hour)
- Limited neck flexion on exam

### Secondary Headache Workup Triggers

**Immediate imaging (CT head):**
- Altered mental status
- Focal neurological signs
- Papilledema
- Thunderclap onset
- Anticoagulation

**MRI preferred:**
- Suspected pituitary lesion
- Posterior fossa pathology
- Venous sinus thrombosis
- Low-pressure headache

**LP required:**
- Suspected SAH with negative CT (CT sensitivity drops to 85% after 6 hours)
- Suspected meningitis
- Suspected idiopathic intracranial hypertension

## Abdominal Pain: Surgical Emergency Indicators

### Peritonitis Assessment
- Carnett sign: Pain increases with abdominal wall tension (wall source) vs decreases (visceral)
- Rovsing sign: RLQ pain with LLQ palpation (appendicitis)
- Murphy sign: Inspiratory arrest with RUQ palpation (cholecystitis)
- Obturator/Psoas signs: Pelvic appendicitis

### Vascular Emergency Patterns

**Mesenteric ischemia triad:**
1. Pain out of proportion to exam
2. Rapid-onset severe periumbilical pain
3. Gut emptying (vomiting and diarrhea)

**AAA rupture indicators:**
- Classic triad: Hypotension, pulsatile mass, back pain (present in <50%)
- High index of suspicion in elderly with syncope and back pain
- Bedside ultrasound for screening

## Back Pain: Evidence-Based Red Flag Application

### Systematic Review Findings (Downie et al., BMJ 2013)
- Most red flags have limited diagnostic accuracy when used alone
- Combinations improve performance
- Cancer red flags: History of cancer (LR+ 14.7), unexplained weight loss (LR+ 2.7)
- Fracture red flags: Significant trauma (LR+ 12), prolonged steroid use (LR+ 12.9)
- Infection red flags: Fever (LR+ 4.8), IV drug use (varies widely)

### CES Clinical Decision Tool
Probability significantly elevated with:
- Bilateral neurological symptoms
- Bladder dysfunction (retention more specific than incontinence)
- Sexual dysfunction
- Rapid progression

## Neurological: Stroke Red Flags and Time Windows

### Treatment Windows
- IV tPA: 0-4.5 hours (expanded criteria)
- Mechanical thrombectomy: 0-24 hours (selected patients with favorable imaging)
- Time is brain: 1.9 million neurons lost per minute in untreated stroke

### Stroke Mimics vs True Stroke
- Hypoglycemia: Check glucose immediately
- Seizure with Todd paralysis: History of seizure, gradual resolution
- Migraine with aura: Younger patient, prior similar episodes
- Conversion disorder: Inconsistent exam, positive features

### NIH Stroke Scale Integration
- Quantifies deficit severity
- Guides treatment decisions
- Predicts outcomes
- Scores >10 suggest large vessel occlusion`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'Ratio indicating how much a test result changes the probability of disease; LR+ >10 or LR- <0.1 are most useful', pronunciation: 'LIKE-lee-hood' },
        { term: 'HEART score', definition: 'Validated risk stratification tool for chest pain: History, ECG, Age, Risk factors, Troponin' },
        { term: 'ADD-RS', definition: 'Aortic Dissection Detection Risk Score, helps determine need for advanced imaging' },
        { term: 'Todd paralysis', definition: 'Temporary weakness after a seizure that can mimic stroke', pronunciation: 'TODD' },
        { term: 'Carnett sign', definition: 'Test distinguishing abdominal wall pain from visceral pain by tensing abdominal muscles' },
      ],
      clinicalNotes: 'Red flag interpretation requires clinical context. Isolated red flags in low-risk patients have low positive predictive value due to low disease prevalence. Conversely, high-risk patients warrant investigation even without classic red flags.',
    },
    5: {
      level: 5,
      summary: 'Expert red flag assessment integrates evidence-based clinical decision rules, population-specific presentation patterns, healthcare system factors, and shared decision-making to optimize diagnostic accuracy while maintaining resource stewardship.',
      explanation: `# Expert-Level Red Flag Assessment

## Evidence Synthesis and Clinical Decision Rules

### Chest Pain Evaluation

**High-Sensitivity Troponin Protocols:**

*0/1-Hour Algorithm (ESC 2020):*
- Rule-out: hs-cTnT <5 ng/L at 0h, OR <12 ng/L with delta <3 at 1h
- Rule-in: hs-cTnT >=52 ng/L, OR delta >=5 ng/L
- NPV for rule-out >99%
- Observe zone requires extended monitoring

*0/3-Hour Protocol:*
- More widely validated
- Rule-out requires undetectable or very low troponin plus low clinical probability
- Serial testing at 3 hours if initial indeterminate

**HEART Pathway Implementation:**
- Score 0-3 with negative troponin: 0.9% 30-day MACE
- Safe for discharge with PCP follow-up in 72 hours
- Reduces admissions by 20% without increased adverse events
- Not validated for patients with recent ACS, on dialysis, or highly symptomatic

**Coronary CT Angiography Integration:**
- ROMICAT-II, CT-STAT, ACRIN-PA trials support early use
- CAD-RADS reporting standardization
- High NPV for obstructive CAD
- Cost-effective in low-intermediate risk patients

### Aortic Dissection: Current Approach

**D-dimer Integration (ADvISED Study):**
- ADD-RS 0-1 + D-dimer <500: Safe rule-out (sensitivity 99.6%)
- Reduces unnecessary CTA by 30%
- Not applicable if symptom onset >14 days

**Imaging Selection:**
- CTA: First-line, rapid, widely available
- TEE: Useful in unstable patients, limited aortic arch visualization
- MRA: Best for chronic dissection surveillance, limited acute utility

### Headache: SAH Workup Optimization

**CT-LP Paradigm Evolution:**
- Modern CT sensitivity within 6 hours: 98-100% (older data suggested 93%)
- LP sensitivity limited by timing, technique, and interpretation
- Xanthochromia: visual vs spectrophotometry debate
- RBC count interpretation: traumatic tap adjustment formulas unreliable

**CTA Role:**
- Some centers advocate CT + CTA as definitive if both negative within 6 hours
- Detects aneurysms >=3mm with high sensitivity
- Misses small aneurysms and perimesencephalic SAH
- May not definitively exclude SAH as sole imaging

**Shared Decision-Making:**
- Post-CT probability if negative <6 hours: ~1-2%
- Patient preferences regarding LP
- Explicit discussion of residual risk vs procedure risk
- Validated decision aid may improve process

### Back Pain: Optimizing Red Flag Utilization

**Meta-Analysis Findings:**
Individual red flags have limited utility:
- Most have sensitivity <50% for their target condition
- Specificity varies widely by population
- Combinations improve performance but remain imperfect

**Evidence-Based Approach:**
1. **High-suspicion for malignancy:** History of cancer, age >50, unexplained weight loss, failure to improve with conservative care, nighttime pain
2. **High-suspicion for infection:** IV drug use, recent procedure/infection, immunocompromise, fever
3. **CES:** Combination of bilateral symptoms + bladder dysfunction highest yield

**MRI Timing:**
- Immediate: CES symptoms (ideally within 24-48 hours of symptom onset for best outcomes)
- Urgent (days): Suspected malignancy or infection
- Not routinely indicated: Uncomplicated low back pain <6 weeks

### Stroke: Systems-Based Approach

**Prehospital Stroke Scales:**
- CPSS (Cincinnati): Face, arm, speech
- LAMS: Face, arm drift, grip strength (predicts LVO)
- RACE: More complex, higher accuracy for LVO

**Door-to-Needle Optimization:**
- Target: <60 minutes
- Key intervals: Door-to-imaging, imaging-to-interpretation, interpretation-to-treatment
- Pre-notification, protocol activation, parallel processing

**LVO Detection:**
- Clinical (NIHSS >=6, cortical signs)
- CTA head and neck standard of care
- CT perfusion: identifies salvageable tissue for extended window

**Extended Window Thrombectomy:**
- DAWN and DEFUSE-3 criteria
- Clinical-imaging mismatch
- Perfusion imaging required
- Treatment benefit persists up to 24 hours in selected patients

## Population-Specific Considerations

### Pediatric Red Flags
- Different disease spectrum (intussusception, pyloric stenosis)
- Modified clinical decision rules (PECARN, CATCH)
- Higher threshold for radiation exposure
- Parental concern as a red flag itself

### Geriatric Red Flags
- Atypical presentations common (ACS as confusion, sepsis as falls)
- Polypharmacy effects (bleeding, drug interactions)
- Baseline functional status crucial for comparison
- Goals of care integration

### Pregnancy
- Modified differential (eclampsia, HELLP, amniotic fluid embolism)
- Altered physiology affecting vital signs interpretation
- Radiation risk considerations
- Two patients requiring consideration

### Immunocompromised Patients
- Expanded infectious differential
- Attenuated inflammatory response (may lack fever, leukocytosis)
- Opportunistic infections
- Lower threshold for invasive diagnostics

## Care Setting Navigation

### ED vs Urgent Care Decision Framework

**Emergency Department Appropriate:**
- Hemodynamic instability
- Severe pain requiring IV medications
- Need for emergent imaging (CT, MRI)
- Potential need for admission
- Time-sensitive conditions (stroke, STEMI)

**Urgent Care Appropriate:**
- Stable vital signs
- Low-risk presentations after red flag exclusion
- Simple diagnostics needed (X-ray, basic labs)
- Oral medications adequate
- Follow-up can be arranged

### Primary Care Role
- Longitudinal relationship enables baseline comparison
- Coordination of subspecialty care
- Appropriate for evolving symptoms without red flags
- Safety-netting with clear return precautions

## Shared Decision-Making in Red Flag Assessment

### Risk Communication
- Absolute vs relative risk presentation
- Visual aids and decision support tools
- Acknowledge uncertainty explicitly
- Patient values regarding testing vs monitoring

### Documentation Considerations
- Red flags specifically queried and documented
- Negative red flags documented (pertinent negatives)
- Clinical reasoning transparent
- Safety-net instructions and contingency planning documented`,
      keyTerms: [
        { term: 'CAD-RADS', definition: 'Coronary Artery Disease Reporting and Data System, standardized reporting for coronary CTA', pronunciation: 'CAD-RADS' },
        { term: 'xanthochromia', definition: 'Yellow discoloration of CSF from hemoglobin breakdown, indicates prior bleeding', pronunciation: 'zan-tho-KROME-ee-ah' },
        { term: 'perimesencephalic SAH', definition: 'Benign pattern of subarachnoid hemorrhage centered around midbrain with excellent prognosis', pronunciation: 'peri-mes-en-seh-FAL-ik' },
        { term: 'NIHSS', definition: 'National Institutes of Health Stroke Scale, standardized neurological assessment', pronunciation: 'N-I-H-S-S' },
        { term: 'PECARN', definition: 'Pediatric Emergency Care Applied Research Network decision rules for pediatric head trauma' },
        { term: 'safety-netting', definition: 'Providing specific return precautions and follow-up instructions to manage diagnostic uncertainty' },
      ],
      clinicalNotes: 'Expert practice balances sensitivity (not missing serious disease) with specificity (avoiding unnecessary testing). This requires integrating population-specific presentations, validated clinical decision rules, local resource availability, and patient preferences. Documentation should reflect explicit consideration of red flags and clinical reasoning.',
    },
  },

  media: [],
  citations: [
    {
      id: 'cite-acep-chest-pain',
      type: 'article',
      title: 'Clinical Policy: Critical Issues in the Evaluation and Management of Adult Patients Presenting to the Emergency Department With Acute Chest Pain',
      authors: ['American College of Emergency Physicians Clinical Policies Subcommittee'],
      source: 'Annals of Emergency Medicine',
      url: 'https://www.acep.org/clinical-policies/',
      license: 'Professional Guidelines',
    },
    {
      id: 'cite-headache-red-flags',
      type: 'article',
      title: 'The Ottawa Subarachnoid Hemorrhage Rule',
      authors: ['Perry JJ', 'Stiell IG', 'Sivilotti ML', 'et al.'],
      source: 'JAMA',
      url: 'https://jamanetwork.com/journals/jama/fullarticle/1816353',
      license: 'Journal Article',
    },
    {
      id: 'cite-back-pain-red-flags',
      type: 'article',
      title: 'Red flags to screen for malignancy and fracture in patients with low back pain: systematic review',
      authors: ['Downie A', 'Williams CM', 'Henschke N', 'et al.'],
      source: 'BMJ',
      url: 'https://www.bmj.com/content/347/bmj.f7095',
      license: 'Open Access',
    },
  ],
  crossReferences: [
    {
      targetId: 'algorithm-chest-pain',
      targetType: 'concept',
      relationship: 'related',
      label: 'Chest Pain Diagnostic Algorithm',
    },
    {
      targetId: 'algorithm-headache',
      targetType: 'concept',
      relationship: 'related',
      label: 'Headache Diagnostic Algorithm',
    },
  ],
  tags: {
    systems: ['cardiovascular', 'neurological', 'gastrointestinal', 'musculoskeletal'],
    topics: ['clinical-reasoning', 'emergency-medicine', 'red-flags', 'patient-safety'],
    keywords: ['warning signs', 'urgent evaluation', 'emergency', 'triage', 'clinical decision rules'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['medicine', 'emergency-medicine', 'surgery'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
